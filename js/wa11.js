const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ["/img/jake.jpg",
                "/img/marceline.png",
                "/img/lsp.jpg",
                "/img/iceking.png",
                "/img/lemongrab.png",];
const alts = {
    "/img/jake.jpg": "Jake the Dog",
    "/img/marceline.png": "Marceline",
    "/img/lsp.jpg": "Lumpy Space Princess",
    "/img/iceking.png": "Ice King",
    "/img/lemongrab.png": "Lemongrab",
}

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}


btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});

