const features = document.querySelector('.features')
const featureDropdown = document.getElementById('features-dropdown')
const company = document.querySelector('.company')
const companyDropdown = document.getElementById('company-dropdown')
const navLogo = document.getElementById('mobile-nav-logo')
const closeNav = document.getElementById('close-nav').querySelector('img')
const heroImg = document.getElementById('hero').querySelector('img')
const mobileFeature = document
  .querySelector('.mobile-features')
  .querySelector('p')
const mobileFeatureDropdown = document
  .querySelector('.mobile-features')
  .querySelector('ul')
const mobileCompany = document
  .querySelector('.mobile-company')
  .querySelector('p')
const mobileCompanyDropdown = document
  .querySelector('.mobile-company')
  .querySelector('ul')

features.addEventListener('click', () => {
  if (features.querySelector('img').src.includes('down')) {
    features.querySelector('img').src = '/images/icon-arrow-up.svg'
    featureDropdown.style.visibility = 'visible'
  } else {
    features.querySelector('img').src = '/images/icon-arrow-down.svg'
    featureDropdown.style.visibility = 'hidden'
  }
})

mobileFeature.addEventListener('click', () => {
  if(mobileFeature.querySelector('img').src.includes('down')) {
    mobileFeature.querySelector('img').src = '/images/icon-arrow-up.svg'
    mobileFeatureDropdown.style.display = 'block'
  } else {
    mobileFeature.querySelector('img').src = '/images/icon-arrow-down.svg'
    mobileFeatureDropdown.style.display = 'none'
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

mobileCompany.addEventListener('click', () => {
  if (mobileCompany.querySelector('img').src.includes('down')) {
    mobileCompany.querySelector('img').src = '/images/icon-arrow-up.svg'
    mobileCompanyDropdown.style.display = 'block'
  } else {
    mobileCompany.querySelector('img').src = '/images/icon-arrow-down.svg'
    mobileCompanyDropdown.style.display = 'none'
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
  document.body.style.backgroundColor = 'hsl(0, 0%, 98%)'
})

if (window.innerWidth <= 428) {
  heroImg.src = 'images/image-hero-mobile.png'
}
