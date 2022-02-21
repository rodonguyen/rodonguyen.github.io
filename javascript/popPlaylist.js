let element = document.getElementById("popPlaylist")

element.addEventListener("mouseenter", function () {
    element.innerHTML = 'ps: check out my music playlist 😉 <iframe width="50" height="30" src="https:/' +
            '/www.youtube-nocookie.com/embed/videoseries?list=PLqOHj6mtp1CKMkoQ50hm-S7FSoLX' +
            'VPFgi" title="YouTube video player" frameborder="0" allow="accelerometer; auto' +
            'play; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfu' +
            'llscreen></iframe>"'
})

element.addEventListener("mouseleave", function () {
    setTimeout(function () {
        element.innerHTML = '_';
    }, 2000);
})

// function mouseEnter() {
//   document.getElementById("popPlaylist").textContent = 'pss: check out my music playlist 😉 <iframe width="50" height="30" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLqOHj6mtp1CKMkoQ50hm-S7FSoLXVPFgi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>"';
// }
