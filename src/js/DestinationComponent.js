import DestinationNumbers from './DestinationNumbers'

const flipAnimSpeed = 205 //should be ~double the anim speed in CSS

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
  setTimeout(flipNumbers, 0, 0)
}

export default function(destination, color, prevDestination) {
  const oldPrice = prevDestination ? prevDestination.price : 0
  const oldPieces = oldPrice.toString().split('')
  const lists = destination.price.toString().split('').map((number, index) => {
    const startNum = prevDestination ? oldPieces[index] : 0
    return `
      <ul class='value-container'>
        ${DestinationNumbers(number, startNum, color)}
      </ul>
    `
  }).join('')

  const slideMarkup = `
    <div class="dest-container">
      <h2 class="destination-title">${destination.label}</h2>
      ${lists}
    </div>
  `
  setTimeout(flipTrigger, 0)

  return slideMarkup
}

