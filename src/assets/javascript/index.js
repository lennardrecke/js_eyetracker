const eye = document.querySelectorAll('.eye-pupil');

window.addEventListener('mousemove', (event) => {
  const x = -(window.innerWidth / 2 - event.pageX) / 20;
  const y = -(window.innerHeight / 2 - event.pageY) / 20;
  eye.forEach((eye) => {
    eye.style.transform = `translateY(${y}px) translateX(${x}px)`;
  });
});
