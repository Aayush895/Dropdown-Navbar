const features = document.querySelector('.features')
const featureDropdown = document.getElementById('features-dropdown')
const company = document.querySelector('.company')
const companyDropdown = document.getElementById('company-dropdown')

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
