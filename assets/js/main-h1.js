const params = new URLSearchParams(window.location.search)

if (params.has('real')) {
  document.documentElement.style.setProperty('--font-size', '92px')
  document.documentElement.style.setProperty('--font-size--mob', '69px')
}
