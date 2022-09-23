console.log('Sample JavaScript #5 HW #17');
let prevIndicator = null;
function createStructure(slidesCount) {
  let d = document;
  let slides = d.createElement('ul');
  slides.classList.add('slides');
  let indicators = d.createElement('div');
  indicators.classList.add('indicators');
  let controls = d.createElement('div');
  controls.classList.add('controls');
  let slide;
  let indicator;
  let a;
  // Creating slides and indicators
  for (let iSlide = 0; iSlide < slidesCount; iSlide++) {
    slide = d.createElement('li');
    indicator = d.createElement('span');
    a = d.createElement('a');
    a.setAttribute('href', '#');
    a.setAttribute('class', 'slides__item-link');
    a.innerHTML = 'slide №' + (iSlide + 1).toString();

    slide.classList.add('slides__item');

    slide.appendChild(a);
    slides.appendChild(slide);

    indicator.classList.add('indicators__item');
    indicator.setAttribute('data-slide-to', iSlide);

    if (!iSlide) {
      // indicator.classList.add('active');
      indicator.style.backgroundColor = 'red';

      slide.classList.add('active');
      prevIndicator = indicator;
    }
    indicators.appendChild(indicator);
  }

  // Controls
  const sc = {
    'controls__prev': 'fas fa-chevron-left',
    'controls__next': 'fas fa-chevron-right',
    'controls__pause': 'fas fa-play'
  };

  let control = null;
  let i = null;
  for (const [attrKey, attrValue] of Object.entries(sc)) {
    control = d.createElement('div');
    control.setAttribute('class', 'controls__item ' + attrKey);
    i = d.createElement('i');
    i.setAttribute('class', attrValue);
    control.appendChild(i);
    controls.appendChild(control);
  };

  let c = d.getElementById('carousel');
  if (c) {
    createStyle(c);
    c.appendChild(slides)
    c.appendChild(indicators);
    c.appendChild(controls);
  }
}

const gotoSlide = (slideNum) => {
  let slides = document.querySelectorAll('.slides__item');
  let slide = document.querySelector('.slides .active');
  if (slide) {
    slide.classList.remove('active');
  }
  slides.item(slideNum).classList.add('active');
}

function indicatorClick(e) {
  let target = e.target;

  if (target.classList.contains('indicators__item')) {
    if (prevIndicator !== null) prevIndicator.removeAttribute('style');
    target.style.backgroundColor = 'red';

    prevIndicator = target;
  }


  // if (e.target.classList.contains('indicators__item')) {
  //   const activeIndicator = document.querySelector('.indicators .active');
  //   if (e.target !== activeIndicator) activeIndicator.classList.remove('active');
  //   e.target.classList.add('active');
  //   //const targetSlideNum = +e.target.getAttribute('data-slide-to');
  //   //gotoSlide(targetSlideNum);
  // }

}


function setupListeners() {
  let indicators = document.querySelector('div.indicators');
  indicators.addEventListener('click', indicatorClick);
}

function createStyle(carusel) {
  let style = document.createElement('style');
  carusel.appendChild(style);
  style.innerHTML = `
  .slider {
    text-decoration: none;
  }

  .slides {
    position: relative;
    border: 1px solid black;
    padding: 20px;
  }

  .slides__item-link {
    text-decoration: none;
  }

  .indicators {
    display: flex;
    justify-content: center;
    border: 1px solid black;
    height: 20px;
    padding: 2px;
  }

  .indicators__item {
    border: 1px solid black;
    width: 60px;
    margin-right: 10px;
    font-weight: normal;
  }

  .indicators__item:hover {
    outline: 1px solid black;
  }

  .active {
    font-weight: bold;
    background-color: red;
  }

  .controls {
    position: relative;
    display: flex;
    height: 35px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }

  .controls__item {
    display: flex;
    border: 1px solid black;
    width: 60px;
    height: 80%;
    min-height: 35px;
    margin: 0 10px;
    justify-content: center;
    align-items: center;
  }
  `
}

function createCarousel(slidesCount = 5) {
  // ваш код здесь
  createStructure(slidesCount);
  setupListeners();
}

createCarousel(4);