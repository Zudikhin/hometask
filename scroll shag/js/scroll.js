let scrollContainer = document.querySelector('.scroll-container');
let scrollContent = scrollContainer.querySelector('.scroll-content');
let scrollBar = scrollContainer.querySelector('.scroll-bar');
let scrollMarker = scrollContainer.querySelector('.scroll-marker');

scrollMarker.style.height = scrollBar.clientHeight * scrollContainer.clientHeight / scrollContent.clientHeight + 'px';
console.log(scrollBar.clientHeight);
/* scrollContainer.addEventListener('wheel', (event) => {
    let scrollPercentage = scrollContent.offsetTop / (scrollContainer.clientHeight - scrollContent.clientHeight);
    if (event.deltaY > 0) {
        if (scrollContent.clientHeight + scrollContent.offsetTop > scrollContainer.clientHeight) {
            scrollContent.style.top = (scrollContent.offsetTop - 10) + 'px';
        }
    } else {
        if (scrollContent.offsetTop < 0) {
            scrollContent.style.top = (scrollContent.offsetTop + 10) + 'px';
        }
    }
    scrollMarker.style.top = (scrollBar.clientHeight - scrollMarker.clientHeight) * scrollPercentage + 'px';
});

scrollMarker.addEventListener('mousedown', (event) => {
    let startY = event.y - scrollContainer.offsetTop;
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', (event) => {
        document.removeEventListener('mousemove', drag);
    })
    function drag(event) {
        scrollMarker.style.top = (event.y - scrollContainer.offsetTop - startY) + 'px';
        if (scrollMarker.offsetTop < 0) {
            scrollMarker.style.top = 0;
        }
        if (scrollMarker.offsetTop > scrollBar.clientHeight - scrollMarker.clientHeight) {
            scrollMarker.style.top = scrollBar.clientHeight - scrollMarker.clientHeight + 'px';
        }
        let scrollPercentage = scrollMarker.offsetTop / (scrollBar.clientHeight - scrollMarker.clientHeight);
        scrollContent.style.top = (scrollContainer.clientHeight - scrollContent.clientHeight) * scrollPercentage + 'px';
    }
}) */