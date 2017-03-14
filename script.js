var counter = window.localStorage.getItem('counter') || 0

counter = parseInt(counter) + 1
window.localStorage.setItem('counter', counter)

var counterElement = document.getElementById('counter')

counterElement.textContent = counter

var nightTheme = function () {
  window.localStorage.setItem('theme', 'night-theme')
  document.body.setAttribute('class', 'night-theme')
  document.getElementById('container').setAttribute('class', 'night-theme-container')
  document.getElementById('header').setAttribute('class', 'night-theme-header')
  document.getElementById('counter').setAttribute('class', 'night-theme-counter')
  document.getElementById('theme-button').setAttribute('class', 'night-theme-button')
}

var dayTheme = function () {
  window.localStorage.setItem('theme', 'day-theme')
  document.body.setAttribute('class', 'day-theme')
  document.getElementById('container').setAttribute('class', 'container')
  document.getElementById('header').setAttribute('class', 'day-theme-header')
  document.getElementById('counter').setAttribute('class', 'day-theme-counter')
  document.getElementById('theme-button').setAttribute('class', 'common-Button')
}

var theme = window.localStorage.getItem('theme') || 'day-theme'

if (theme === 'day-theme') {
  dayTheme()
} else {
  nightTheme()
}

var themeButton = document.getElementById('theme-button')

var change = function () {
  var currentTheme = window.localStorage.getItem('theme')

  if (currentTheme === 'day-theme') {
    nightTheme()
  } else {
    dayTheme()
  }
}

themeButton.addEventListener('click', change)
