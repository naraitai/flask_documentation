// Add active class to clicked link.
let links = document.getElementsByClassName('nav-link');

for (let i = 0; i < links.length; i++) {
    let link = links[i];
    link.addEventListener('click', function() {
        let current = document.getElementsByClassName('active');
        if (current.length != 0) {
            current[0].classList.remove('active');
        }
        link.classList.add('active');
    });
}