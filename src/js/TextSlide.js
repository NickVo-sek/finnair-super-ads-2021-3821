const startOutro = () => {
  document.getElementById('SlideWrapper').classList.add('outro')
}

const endIntro = () => {
  document.getElementById('SlideWrapper').classList.remove('intro')
}

export default function(conf) {
  const html = `
     <div class="content textSlide">
      <h1 id="header-text">${conf.title}</h1>
    </div>
  `

  return {
    html,
    startOutro,
    endIntro
  }
}
