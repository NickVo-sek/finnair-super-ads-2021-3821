var destinations = [[{
  "country": "budapest",
  "price": "109"
}, {
  "country": "berlin",
  "price": "99"
}, {
  "country": "nizza",
  "price": "169"
}, {
  "country": "oslo",
  "price": "89"
}], [{
  "country": "New york",
  "price": "459"
}, {
  "country": "praha",
  "price": "99"
}, {
  "country": "milano",
  "price": "129"
}, {
  "country": "tukholma",
  "price": "79"
}]];

var getListItemMarkup = function getListItemMarkup(number, destinationIndex, currentNumber) {
  var random = ~~(Math.random() * 10);
  return "\n  ".concat(destinationIndex === 1 ? "\n  <li class=\"flip-item\">\n    <a>\n      <div class=\"up\">\n        <div class=\"shadow\"></div>\n        <div class=\"inn\">".concat(currentNumber, "</div>\n      </div>\n      <div class=\"down\">\n        <div class=\"shadow\"></div>\n        <div class=\"inn\">").concat(currentNumber, "</div>\n      </div>\n    </a>\n  </li>\n  <li class=\"flip-item\">\n    <a>\n      <div class=\"up\">\n        <div class=\"shadow\"></div>\n        <div class=\"inn\">").concat(random, "</div>\n      </div>\n      <div class=\"down\">\n        <div class=\"shadow\"></div>\n        <div class=\"inn\">").concat(random, "</div>\n      </div>\n    </a>\n  </li>\n  <li class=\"flip-item\">\n    <a>\n      <div class=\"up\">\n        <div class=\"shadow\"></div>\n        <div class=\"inn\">").concat(number, "</div>\n      </div>\n      <div class=\"down\">\n        <div class=\"shadow\"></div>\n        <div class=\"inn\">").concat(number, "</div>\n      </div>\n    </a>\n  </li>\n  ") : "\n  <li class=\"flip-item \">\n    <a>\n      <div class=\"up\">\n        <div class=\"shadow\"></div>\n        <div class=\"inn\">".concat(number, "</div>\n      </div>\n      <div class=\"down\">\n        <div class=\"shadow\"></div>\n        <div class=\"inn\">").concat(number, "</div>\n      </div>\n    </a>\n  </li>\n  "), "\n  \n  ");
};

var generateDestinationElement = function generateDestinationElement(destination, destinationIndex, prevDest) {
  var wrapper = document.createElement('div');
  wrapper.className = 'dest-container';
  console.log(prevDest);
  var oldLists = prevDest ? prevDest.price.toString().split('') : [0, 0, 0];
  var lists = destination.price.toString().split('').map(function (number, i) {
    var markup = "\n    <ul class=\"flip\">\n      ".concat(getListItemMarkup(number, destinationIndex, oldLists[i]), "\n    </ul>\n    ");
    currentNumber = number;
    return markup;
  }).join('');
  wrapper.innerHTML = "\n  <h2 class=\"".concat(destinationIndex === 1 ? 'animate-in' : 'animate-out', "\">").concat(destination.country, "</h2>\n  ").concat(lists, "\n  ");
  return wrapper;
};

var flipTrigger = function flipTrigger() {
  var flipParent = document.querySelectorAll('.dest-container');
  flipParent.forEach(function (parent) {
    var numberBlock = parent.querySelectorAll('.flip');
    setTimeout(function () {
      numberBlock.forEach(function (block) {
        var numbers = block.querySelectorAll('.flip-item');
        numbers[0].classList.add('before');
        numbers[1].classList.add('active');
      });
    }, Math.random() * 200);
  });
  var flipItems = document.querySelectorAll('.flip-item');
  var timesFlipped = 0;
  var interval = setInterval(function () {
    timesFlipped++;

    if (timesFlipped > 2) {
      clearInterval(interval);
    }

    flipItems.forEach(function (item, i) {
      setTimeout(function (item) {
        if (item.classList.contains('active') && item.nextElementSibling) {
          item.classList.remove('active');
          item.nextElementSibling.classList.add('active');
          item.classList.add('before');
        }
      }, Math.random() * 200, item);
    });
  }, 300);
};

var tick = function tick(destinationIndex) {
  var wrapper = document.querySelector('.destinations');
  wrapper.innerHTML = "";
  var prevDestIndex = destinationIndex - 1;
  destinations[destinationIndex].forEach(function (destination, i) {
    var prevDest = null;

    if (destinations[prevDestIndex]) {
      prevDest = destinations[prevDestIndex][i];
    }

    wrapper.appendChild(generateDestinationElement(destination, destinationIndex, prevDest));
  });
};

tick(0);
setTimeout(function () {
  tick(1);
  flipTrigger();
}, 3000);