let section1 = document.getElementsByTagName("section")

window.addEventListener('scroll', function() {
  console.log(window.scrollY)

  if (window.scrollY > 10) {
    section1[0].classList.remove('hidden')
    section1[0].classList.add('show')
  }

  if (window.scrollY > 400) {
    section1[1].classList.remove('hidden')
    section1[1].classList.add('show')
  }

  if (window.scrollY > 1200) {
    section1[2].classList.remove('hidden')
    section1[2].classList.add('show')
  }
})
