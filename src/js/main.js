/* IE POLYFILL */
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) { return 0; }
      if (number === 0 || !isFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}

/* global studio, Enabler */

import IEFix from './IEFix.js'
import TextSlide from './TextSlide'
import DestinationsSlide from './DestinationsSlide'
import SingleDestinationSlide from './SingleDestinationSlide'

import '../scss/main.scss'

// Language specific data
const Data = require(`../data/Data_${process.env.LANGUAGE}.js`).default

// Size specific styles
require(`../scss/sizes/_${process.env.WIDTH}x${process.env.HEIGHT}.scss`)

// Language specific styles
require(`../scss/languages/_${process.env.LANGUAGE}.scss`)

const bannerSize = {width: process.env.WIDTH, height: process.env.HEIGHT}
const slideTypes = []
slideTypes['TextSlide'] = TextSlide
slideTypes['DestinationsSlide'] = DestinationsSlide
slideTypes['SingleDestinationSlide'] = SingleDestinationSlide

const slideDuration = 4500
const loop = false

let data = null
let currentSlideIndexTs = slideDuration
let lastTickTimestamp = 0
let currentSlideIndex = 0
let currentSlide = null

let outroStarted = false
let introRemoved = false

const tick = (timestamp) => {
  const delta = timestamp - lastTickTimestamp
  const totalSlides = data.slides.length
  lastTickTimestamp = timestamp
  currentSlideIndexTs = currentSlideIndexTs + delta

  const slideData = data.slides[currentSlideIndex-1]
  const introTime = slideData && slideData.introTime ? slideData.introTime : 500
  const outroTime = slideData && slideData.outroTime ? slideData.outroTime : 500

  if(currentSlide && currentSlideIndexTs > introTime && introRemoved === false) {
    introRemoved = true
    currentSlide.endIntro()
  }else if(currentSlide && currentSlideIndexTs > slideDuration - outroTime && outroStarted === false) {
    if(loop === false && currentSlideIndex < totalSlides){
      outroStarted = true
      currentSlide.startOutro()
    }
  } else if(currentSlideIndexTs >= slideDuration) {
    changeSlide()
    currentSlideIndexTs = 0
  }

  window.requestAnimationFrame(tick)
}

const changeSlide = () => {
  const totalSlides = data.slides.length
  //console.log(currentSlideIndex +'/'+ totalSlides, loop)

  const comp = slideTypes[data.slides[currentSlideIndex].type]
  currentSlide = comp(data.slides[currentSlideIndex].conf, {slides: data.slides, currentSlideIndex: currentSlideIndex})

  const wrapper = document.getElementById('SlideWrapper')
  wrapper.classList.remove('outro')
  wrapper.classList.add('intro')
  wrapper.innerHTML = currentSlide.html

  const destinations = document.querySelector('.destinations')
  if(destinations) {
    destinations.style.color = data.texts.PriceColor
    let className = ''
    switch (data.longestNumber) {
      case 4:
        className = 'fourItems'
        break
      case 5:
        className = 'fiveItems'
        break
      case 6:
        className = 'sixItems'
        break
    
      default:
          className = 'threeItems'
        break
    }
    destinations.classList.add(className)
  }


  outroStarted = false
  introRemoved = false
  currentSlideIndex++
  if(currentSlideIndex > totalSlides && loop === true) {
    currentSlideIndex = 0
  }
}
function exitClickHandler() {
  Enabler.exitOverride('CTA clicked', data.texts.URL.Url)
}
const init = () => {
  // Load dynamic data
  data = Data(Enabler, bannerSize)

  document.getElementById('bg-exit').addEventListener('click', exitClickHandler, false)
  
  if(data.texts.Campaign_Label_short && bannerSize.width === 160){
    document.getElementById('campaign-text').innerHTML = data.texts.Campaign_Label_short
  }else {
    document.getElementById('campaign-text').innerHTML = data.texts.Campaign_Label
  }

  document.getElementById('campaign-bar').style.background = data.texts.LabelColor
  document.getElementById('campaign-bar').classList.add('animate-bar')

  // Add CTA button
  document.getElementById('CTAWrapper').innerHTML = `
    <div id="cta">
      <span id="cta-text">${data.texts.CTA_Text}</span>
      <svg viewBox="0 0 4 7.1">
          <polygon points="0,1.1 2.7,3 3.7,3.5 2.7,4.1 0,6 0,7.1 4,4.2 4,2.9 0,0 "></polygon>
      </svg>
    </div>
  `

  // Start tick flow
  document.querySelector('.container').classList.add('show')
  tick(0)
}

window.onload = function () {
  if (Enabler.isInitialized()) {
    init()
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, init)
  }
}