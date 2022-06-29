var navbarHeight = document.getElementById('navbar').clientHeight;
function offsetAnchor() {
    if (window.location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - navbarHeight );
    }
}

$(document).on('click', 'a[href^="#"]', function(event) {
    window.setTimeout(function() {
        offsetAnchor();
    }, 0);
});

window.setTimeout(offsetAnchor, 0);
