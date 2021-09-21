/* global studio, Enabler, dynamicContent, process */
import '../scss/main.scss'

if ('NodeList' in window && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this)
    }
  }
}

const frameHold = 4500
const flipAnimSpeed = 260 //should be ~double the anim speed in CSS
let destinations = []
let skipFirstFrame = false
let skipLastFrame = true
const bannerWidth = process.env.WIDTH
const bannerHeight = process.env.HEIGHT

const getListItemMarkup = (number, destinationIndex, currentNumber) => {
  number = parseInt(number)
  const listItems = [
    !currentNumber ? 0 : currentNumber,
    ~~(Math.random() * 10),
    ~~(Math.random() * 10),
    number
  ]

  return listItems.map((itemNum) => {
    return `
      <li class='value'>
          <div class='top'>
            <div class='shadow'></div>
            <div class='inner' style='background-color:${dynamicContent.Super_2019_CN_zh_all_sizes[0].LabelColor}'>${itemNum}</div>
          </div>
          <div class='bottom'>
            <div class='shadow'></div>
            <div class='inner' style='background-color:${dynamicContent.Super_2019_CN_zh_all_sizes[0].LabelColor}'>${itemNum}</div>
          </div>
      </li>
    `
  }).join('')
}

const generateDestinationElement = (destination, destinationIndex, prevDest) => {
  const wrapper = document.createElement('div')
  wrapper.className = 'dest-container'

  const oldLists = prevDest ? prevDest.price.toString().split('') : [0, 0, 0]

  const lists = destination.price.toString().split('').map((number, i) => {
    return `
      <ul class='value-container'>
        ${getListItemMarkup(number, destinationIndex, oldLists[i])}
      </ul>
    `
  }).join('')


  wrapper.innerHTML = `
    <h2 class='destination-title animate-in'>${destination.country}</h2>
    ${lists}
  `
  return wrapper
}

const flipNumber = (flipTimes, block) => {
  const numbers = block.querySelectorAll('.value')

  if(numbers[flipTimes+1]) {
    numbers[flipTimes].classList.add('before')
    numbers[flipTimes].classList.remove('active')
  }

  if(numbers[flipTimes+1]) {
    numbers[flipTimes+1].classList.add('active')
  }

  if(numbers.length > flipTimes) {
    setTimeout(() => {
      flipNumber(flipTimes+1, block)
    }, flipAnimSpeed)
  }
}

const flipTrigger = () => {
  const destContainer = document.querySelectorAll('.dest-container')

  const flipNumbers = (flipTimes) => {
    destContainer.forEach((parent) => {
      const valueContainer = parent.querySelectorAll('.value-container')
      valueContainer.forEach((block, index) => {
        setTimeout(() => {
          flipNumber(flipTimes, block)
        }, index*200)
      })
    })
  }

  // wait before first flip (showing the 0 for small while)
  setTimeout(flipNumbers, 200, 0)
}

const tick = (destinationIndex) => {
  const wrapper = document.querySelector('.destinations')
  wrapper.classList.remove('first-frame')
  document.getElementById('text-frame-one').classList.remove('first-frame')
  if(destinationIndex === 0 && destinations[0].length > 0){
    wrapper.classList.add('first-frame')
    if(bannerWidth === 728 || bannerWidth === 912){
      document.getElementById('text-frame-one').classList.add('first-frame')
    }
  }else if (destinationIndex === 1 || destinations[0].length === 0){
    wrapper.classList.add('animate-in')
  }

  wrapper.innerHTML = ''

  const prevDestIndex = destinationIndex - 1
  destinations[destinationIndex].forEach((destination, i) => {
    let prevDest = null
    if (destinations[prevDestIndex]){
      prevDest = destinations[prevDestIndex][i]
    }

    wrapper.appendChild(generateDestinationElement(destination, destinationIndex, prevDest))
  })
}

const showFinalScene = () => {
  const textFrameTwo = document.getElementById('text-frame-two')
  document.querySelector('.destinations').classList.remove('animate-in')
  document.querySelector('.destinations').classList.add('animate-out-now')
  if(bannerWidth === 728 || bannerWidth === 912){
    textFrameTwo.innerHTML = dynamicContent.Super_2019_CN_zh_all_sizes[0].Campaign_Label
  }else {
    textFrameTwo.innerHTML = dynamicContent.Super_2019_CN_zh_all_sizes[0].Text2
  }
  textFrameTwo.classList.add('animate-in-now')
}

const prepareNextSlide = () => {
  document.querySelectorAll('.destination-title').forEach((item) => {
    item.classList.add('fade-out-title')
  })
}

const nextScene = (counter) => {
  if (destinations.length === counter){
    if(skipLastFrame && (bannerWidth != 728 && bannerWidth != 912) || dynamicContent.Super_2019_CN_zh_all_sizes[0].FinalFrame){
      return
    }
    showFinalScene()
    return
  }
  if(skipFirstFrame){
    counter++
    skipFirstFrame = false
  }
  tick(counter)
  flipTrigger(counter)

  if(skipLastFrame === false || (skipLastFrame === true && counter < destinations.length-1)){
    setTimeout(prepareNextSlide, frameHold-300)
  }
  setTimeout(nextScene, frameHold, counter+1)
}
const initData = () => {
  Enabler.setProfileId(10495313);
  var devDynamicContent = {};

  devDynamicContent.Super_2019_CN_zh_all_sizes = [{}];
  devDynamicContent.Super_2019_CN_zh_all_sizes[0]._id = 0;
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].FirstFrame = false;
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].FinalFrame = false;
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].URL = {};
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].URL.Url = "https://www.finnair.com/cn/cn";
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].Campaign_Label = "\u673A\u7968\u4F18\u60E0 \u53EA\u523011\u670812\u65E5";
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].IconText = "";
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].PriceColor = "#884281";
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].LabelColor = "#884281";
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].PriceLabel = "\u5F80\u8FD4";
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].Text1 = "<span class='twolines' style='font-size:0.55em'>把握最后机会 <span class='nowrap'>立抢优惠</span></span>";
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].Text2 = "";
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].CTA_Text = "\u7ACB\u5373\u9884\u8BA2";
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].OnePriceLabel = "";
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].OneDest = "\u8D6B\u5C14\u8F9B\u57FA";
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].OnePrice = 4241;
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].Dest1 = "\u54E5\u672C\u54C8\u6839";
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].Price1 = 3638;
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].Dest2 = "\u8D6B\u5C14\u8F9B\u57FA";
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].Price2 = 4611;
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].Dest3 = "\u4F26\u6566";
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].Price3 = 4403;
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].Dest4 = "\u66FC\u5F7B\u65AF\u7279";
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].Price4 = 4559;
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].Dest5 = "\u5E03\u62C9\u683C";
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].Price5 = 3743;
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].Dest6 = "\u96F7\u514B\u96C5\u672A\u514B";
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].Price6 = 4751;
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].Dest7 = "\u7F57\u9A6C";
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].Price7 = 3815;
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].Dest8 = "\u67CF\u6797";
  devDynamicContent.Super_2019_CN_zh_all_sizes[0].Price8 = 3911;
  Enabler.setDevDynamicContent(devDynamicContent);

  if(bannerWidth === 728 || bannerWidth === 912){
    destinations = [
      [
      {
        'country': dynamicContent.Super_2019_CN_zh_all_sizes[0].Dest1,
        'price': dynamicContent.Super_2019_CN_zh_all_sizes[0].Price1,
      },
      ],
      [
      {
        'country': dynamicContent.Super_2019_CN_zh_all_sizes[0].Dest1,
        'price': dynamicContent.Super_2019_CN_zh_all_sizes[0].Price1,
      },
      {
        'country': dynamicContent.Super_2019_CN_zh_all_sizes[0].Dest2,
        'price': dynamicContent.Super_2019_CN_zh_all_sizes[0].Price2,
      },
    ],
    [
      {
        'country': dynamicContent.Super_2019_CN_zh_all_sizes[0].Dest3,
        'price': dynamicContent.Super_2019_CN_zh_all_sizes[0].Price3,
      },
      {
        'country': dynamicContent.Super_2019_CN_zh_all_sizes[0].Dest5,
        'price': dynamicContent.Super_2019_CN_zh_all_sizes[0].Price5,
      },
    ]
    ]
  }else if(bannerWidth === 300){
    destinations = [
      [
      {
        'country': dynamicContent.Super_2019_CN_zh_all_sizes[0].Dest1,
        'price': dynamicContent.Super_2019_CN_zh_all_sizes[0].Price1,
      },
      ],
      [
      {
        'country': dynamicContent.Super_2019_CN_zh_all_sizes[0].Dest1,
        'price': dynamicContent.Super_2019_CN_zh_all_sizes[0].Price1,
      },
      {
        'country': dynamicContent.Super_2019_CN_zh_all_sizes[0].Dest2,
        'price': dynamicContent.Super_2019_CN_zh_all_sizes[0].Price2,
      },
    ],
    [
      {
        'country': dynamicContent.Super_2019_CN_zh_all_sizes[0].Dest3,
        'price': dynamicContent.Super_2019_CN_zh_all_sizes[0].Price3,
      },
      {
        'country': dynamicContent.Super_2019_CN_zh_all_sizes[0].Dest5,
        'price': dynamicContent.Super_2019_CN_zh_all_sizes[0].Price5,
      },
    ]
    ]
  }else if(bannerWidth === 272){
    destinations = [
      [
      {
        'country': dynamicContent.Super_2019_CN_zh_all_sizes[0].Dest1,
        'price': dynamicContent.Super_2019_CN_zh_all_sizes[0].Price1,
      },
      ],
      [
      {
        'country': dynamicContent.Super_2019_CN_zh_all_sizes[0].Dest1,
        'price': dynamicContent.Super_2019_CN_zh_all_sizes[0].Price1,
      },
    ],
    [
      {
        'country': dynamicContent.Super_2019_CN_zh_all_sizes[0].Dest2,
        'price': dynamicContent.Super_2019_CN_zh_all_sizes[0].Price2,
      },
    ],
    [
      {
        'country': dynamicContent.Super_2019_CN_zh_all_sizes[0].Dest3,
        'price': dynamicContent.Super_2019_CN_zh_all_sizes[0].Price3,
      },
    ]
    ]
  }else{
    destinations = [
      [
      {
        'country': dynamicContent.Super_2019_CN_zh_all_sizes[0].Dest1,
        'price': dynamicContent.Super_2019_CN_zh_all_sizes[0].Price1,
      },
      ],
      [
      {
        'country': dynamicContent.Super_2019_CN_zh_all_sizes[0].Dest1,
        'price': dynamicContent.Super_2019_CN_zh_all_sizes[0].Price1,
      },
      {
        'country': dynamicContent.Super_2019_CN_zh_all_sizes[0].Dest2,
        'price': dynamicContent.Super_2019_CN_zh_all_sizes[0].Price2,
      },
      {
        'country': dynamicContent.Super_2019_CN_zh_all_sizes[0].Dest3,
        'price': dynamicContent.Super_2019_CN_zh_all_sizes[0].Price3,
      },
      {
        'country': dynamicContent.Super_2019_CN_zh_all_sizes[0].Dest4,
        'price': dynamicContent.Super_2019_CN_zh_all_sizes[0].Price4,
      }
      ],
      [
      {
        'country': dynamicContent.Super_2019_CN_zh_all_sizes[0].Dest5,
        'price': dynamicContent.Super_2019_CN_zh_all_sizes[0].Price5,
      },
      {
        'country': dynamicContent.Super_2019_CN_zh_all_sizes[0].Dest6,
        'price': dynamicContent.Super_2019_CN_zh_all_sizes[0].Price6,
      },
      {
        'country': dynamicContent.Super_2019_CN_zh_all_sizes[0].Dest7,
        'price': dynamicContent.Super_2019_CN_zh_all_sizes[0].Price7,
      },
      {
        'country': dynamicContent.Super_2019_CN_zh_all_sizes[0].Dest8,
        'price': dynamicContent.Super_2019_CN_zh_all_sizes[0].Price8,
      },
    ]
    ]
  }

  setContent()
}
const setContent = () => {
  document.getElementById('campaign-bar').style.background = dynamicContent.Super_2019_CN_zh_all_sizes[0].LabelColor
  document.getElementById('campaign-text').innerHTML = dynamicContent.Super_2019_CN_zh_all_sizes[0].Campaign_Label
  document.getElementById('campaign-bar').classList.add('animate-bar')
  document.getElementById('cta-text').innerHTML=dynamicContent.Super_2019_CN_zh_all_sizes[0].CTA_Text
  document.getElementById('header-text').innerHTML=dynamicContent.Super_2019_CN_zh_all_sizes[0].Text1
  document.querySelector('.destinations').style.color = dynamicContent.Super_2019_CN_zh_all_sizes[0].LabelColor
  document.querySelector('.container').style.opacity = 1

  if(bannerWidth <= 300){
    skipFirstFrame = true
  }else{
    skipFirstFrame = dynamicContent.Super_2019_CN_zh_all_sizes[0].FirstFrame
  }
  nextScene(0)
}
const init = () => {
  document.getElementById('bg-exit').addEventListener('click', bgExitHandler, false)
  initData()
}
window.onload = function () {
  if (Enabler.isInitialized()) {
    init()
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, init)
  }
}
function bgExitHandler(e) {
  Enabler.exit('Background Exit', dynamicContent.Super_2019_CN_zh_all_sizes[0].URL.Url)
}

/* First frame 1 item, second & third frame 4 items. Tick 0, 1, 2. 3 Arrays. Simple. */
