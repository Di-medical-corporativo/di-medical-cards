function bookMark () {
  if (window.sidebar && window.sidebar.addPanel) {
    window.sidebar.addPanel(document.title, window.location.href, '')
  } else if (window.external && ('AddFavorite' in window.external)) {
    window.external.AddFavorite(location.href, document.title)
  } else if (window.opera && window.print) {
    this.title = document.title
  } else {
    alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') !== -1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.')
  }
  localStorage.setItem('bookmark', true)
}

export default bookMark
