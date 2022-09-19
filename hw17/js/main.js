console.log('Sample JavaScript #5 HW #17');

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
  for (let iSlide = 1; iSlide <= slidesCount; iSlide++) {
    slide = d.createElement('li');
    indicator = d.createElement('span');
    a = d.createElement('a');
    a.setAttribute('href', '#');
    a.setAttribute('class', 'slides__item-link');
    a.innerHTML = 'slide №' + iSlide;

    slide.classList.add('slides__item');

    slide.appendChild(a);
    slides.appendChild(slide);

    indicator.classList.add('indicators__item');
    indicator.setAttribute('data-slide-to', iSlide);

    if (!(iSlide - 1)) {
      slide.classList.add('active');
      indicator.classList.add('indicators_item--active');
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

  let c = d.querySelector('#carousel');
  if (c) {
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
  slides.item(slideNum - 1).classList.add('active'); // classList.add('active');
}

function indicatorClick(event) {
  var t;
  let slides;
  if (event.target.getAttribute('class') === 'indicators__item') {
    const activeIndicator = document.querySelector('.indicators .indicators_item--active');

    if (activeIndicator !== event.target) {
      if (activeIndicator) activeIndicator.classList.remove('indicators_item--active');
    };
    event.target.classList.add('indicators_item--active');
    const targetSlideNum = +event.target.getAttribute('data-slide-to');
    gotoSlide(targetSlideNum);

  }
}

function setupListenes() {
  let indicators = document.getElementsByClassName('indicators').item(0);
  indicators.addEventListener('click', indicatorClick);
}

function createCarousel(slidesCount = 5) {
  // ваш код здесь
  createStructure(slidesCount);
  setupListenes();
}

createCarousel(4);