let moviePoster = document.querySelector('.movie-poster');

let model = document.querySelector('#myModel');

let closeBtn = document.querySelector('.closeBtn');

let modelImage = document.querySelector('.movie-poster-model');


moviePoster.addEventListener('click', ()=>{
    console.log('image clicked');
    model.style.display = 'block';
    modelImage.src = moviePoster.src;
});

closeBtn.addEventListener('click', () => {
    model.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if(event.target === model) {
        model.style.display = 'none';
    }
});