document.addEventListener('DOMContentLoaded', function() {
    const movieGrid = document.querySelector('.movie-grid');
    const tvShowGrid = document.querySelector('.tv-show-grid');

    // Sample movie data
    const movies = [
        { title: 'Inception', imgSrc: 'movie1.jpg' },
        { title: 'The Dark Knight', imgSrc: 'movie2.jpg' },
        { title: 'Interstellar', imgSrc: 'movie3.jpg' },
        { title: 'The Matrix', imgSrc: 'movie4.jpg' },
        { title: 'Parasite', imgSrc: 'movie5.jpg' },
        { title: 'The Godfather', imgSrc: 'movie6.jpg' }
    ];

    // Sample TV show data
    const tvShows = [
        { title: 'Breaking Bad', imgSrc: 'tv1.jpg' },
        { title: 'Game of Thrones', imgSrc: 'tv2.jpg' },
        { title: 'Stranger Things', imgSrc: 'tv3.jpg' },
        { title: 'The Crown', imgSrc: 'tv4.jpg' },
        { title: 'The Mandalorian', imgSrc: 'tv5.jpg' },
        { title: 'Chernobyl', imgSrc: 'tv6.jpg' }
    ];

    function populateGrid(gridElement, data) {
        data.forEach(item => {
            const gridItem = document.createElement('div');
            gridItem.classList.add(gridElement === movieGrid ? 'movie-item' : 'tv-show-item');

            const image = document.createElement('img');
            image.src = `images/${item.imgSrc}`;
            image.alt = item.title;

            const title = document.createElement('h3');
            title.textContent = item.title;

            gridItem.appendChild(image);
            gridItem.appendChild(title);
            gridElement.appendChild(gridItem);
        });
    }

    populateGrid(movieGrid, movies);
    populateGrid(tvShowGrid, tvShows);
});