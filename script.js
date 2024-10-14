const d = document;
const $ = el => d.querySelector(el);

/*******************DESKTOP*******************/
const move = e => {
  if (e.target.matches('.circle')) {
    e.target.classList.add('active');
  }
};

d.addEventListener('mousemove', move, { passive: true });

/*******************MOBILE*******************/
const isMobile = window.innerWidth < 1111;
const handleTouchMove = e => {
  const touch = e.touches[0];
  const element = document.elementFromPoint(touch.clientX, touch.clientY);
  if (!element) return;

  const isCircleElement = element.classList.contains('circle');
  const isNotActive = element.classList.contains('active');

  if (isCircleElement && !isNotActive) {
    element.classList.add('active');
  }
};

const moveMobile = e => {
  if (isMobile) {
    d.addEventListener('touchmove', handleTouchMove);
  }
};

d.addEventListener('touchstart', moveMobile, { passive: true });
