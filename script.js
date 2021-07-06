const btn = document.querySelector('.cards-g figure')
btn.addEventListener('click', () => {
  btn.classList.remove('animate')
  setTimeout(() => btn.classList.add('animate'), 100)
})