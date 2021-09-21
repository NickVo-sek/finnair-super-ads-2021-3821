import DestinationComponent from './DestinationComponent'

export default function(conf, slideData) {
  const nextSlide = slideData.slides[slideData.currentSlideIndex+1]
  const currentSlide = slideData.slides[slideData.currentSlideIndex]
  const prevSlide = slideData.slides[slideData.currentSlideIndex-1]

  const startOutro = () => {
    if(nextSlide && nextSlide.type === 'DestinationsSlide') {
      Array.from(document.querySelectorAll('.destination-title')).map((item) => {
        item.classList.add('quick-outro')
      })
    } else {
      document.getElementById('SlideWrapper').classList.remove('intro')
      document.getElementById('SlideWrapper').classList.add('outro', 'final-frame')
    }
  }

  const endIntro = () => {
    Array.from(document.querySelectorAll('.quick-intro')).map((item) => {
      item.classList.remove('quick-intro')
    })

    Array.from(document.querySelectorAll('.basic-intro')).map((item) => {
      item.classList.remove('basic-intro')
    })
  }

  const classes = ['destinations']
  if(prevSlide && prevSlide.type === 'DestinationsSlide') {
    classes.push('quick-intro')
  } else {
    classes.push('basic-intro')
  }
  const title = `
    <div class="content">
        <h1 id="header-text">${conf.title}</h1>
    </div>
  `
  const html =  `
    ${conf.title ? title : ''}
    <div class="${classes.join(' ')}">
      ${conf.destinations.map((destination, index) => {
        let prevDest = null
        if(conf.prevDestinations && conf.prevDestinations[index]) {
          prevDest = conf.prevDestinations[index]
        }
        return DestinationComponent(destination, conf.color, prevDest)
      }).join('')}
    </div>
  `

  return {
    html,
    startOutro,
    endIntro
  }
}
