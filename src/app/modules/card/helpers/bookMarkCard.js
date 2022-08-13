function bookMark() {
    if (window.sidebar && window.sidebar.addPanel) // Mozilla Firefox Bookmark
    window.sidebar.addPanel(document.title,window.location.href,'');
    else if(window.external && ('AddFavorite' in window.external)) // IE Favorite
        window.external.AddFavorite(location.href,document.title); 
    else if(window.opera && window.print) // Opera Hotlist
        this.title=document.title;
    else // webkit - safari/chrome
        alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != - 1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
    localStorage.setItem('bookmark', true)
}

export default bookMark
