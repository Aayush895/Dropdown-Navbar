const features = document.querySelector('.features')
const featureDropdown = document.getElementById('features-dropdown')
const company = document.querySelector('.company')
const companyDropdown = document.getElementById('company-dropdown')
const navLogo = document.getElementById('mobile-nav-logo')
const closeNav = document.getElementById('close-nav').querySelector('img')
const heroImg = document.getElementById('hero').querySelector('img')

features.addEventListener('click', () => {
  if (features.querySelector('img').src.includes('down')) {
    features.querySelector('img').src = '/images/icon-arrow-up.svg'
    featureDropdown.style.visibility = 'visible'
  } else {
    features.querySelector('img').src = '/images/icon-arrow-down.svg'
    featureDropdown.style.visibility = 'hidden'
  }
})

company.addEventListener('click', () => {
  if (company.querySelector('img').src.includes('down')) {
    company.querySelector('img').src = '/images/icon-arrow-up.svg'
    companyDropdown.style.visibility = 'visible'
  } else {
    company.querySelector('img').src = '/images/icon-arrow-down.svg'
    companyDropdown.style.visibility = 'hidden'
  }
})

navLogo.addEventListener('click', () => {
  document.querySelector('.mobile-nav-bar').style.display = 'block'
  document.body.style.overflowY = 'hidden'
  document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
})

closeNav.addEventListener('click', () => {
  document.querySelector('.mobile-nav-bar').style.display = 'none'
  document.body.style.overflowY = 'visible'
})


if(window.innerWidth <= 428) {
  heroImg.src = 'images/image-hero-mobile.png'
}