import DestinationComponent from './DestinationComponent'

export default function(conf, slideData) {
  const nextSlide = slideData.slides[slideData.currentSlideIndex+1]
  const startOutro = () => {
    if(!nextSlide.conf.title){
      document.querySelector('.content').classList.add('outro')
    }
    document.getElementById('SlideWrapper').classList.add('outro')
  }
  
  const endIntro = () => {
    document.getElementById('SlideWrapper').classList.remove('intro')
  }

  const html = `
    <div class="content">
      <h1 id="header-text">${conf.title}</h1>
    </div>
    <div class="destinations single-dest">
      ${DestinationComponent(conf.destination, conf.color)}
    </div>
  `

  return {
    html,
    startOutro,
    endIntro
  }
}
