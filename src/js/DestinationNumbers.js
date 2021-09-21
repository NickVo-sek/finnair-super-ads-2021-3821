export default function(number, currentNumber, color) {
  const listItems = [
    !currentNumber ? 0 : currentNumber,
    ~~(Math.random() * 10),
    ~~(Math.random() * 10),
    parseInt(number)
  ]

  return listItems.map((itemNum) => {
    return `
      <li class='value'>
          <div class='top'>
            <div class='shadow'></div>
            <div class='inner' style='background-color:${color}'>${itemNum}</div>
          </div>
          <div class='bottom'>
            <div class='shadow'></div>
            <div class='inner' style='background-color:${color}'>${itemNum}</div>
          </div>
      </li>
    `
  }).join('')
}
