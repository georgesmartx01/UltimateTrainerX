

function searchGames() {
    const searchInput = document.getElementById('search-games');
    const cards = document.querySelectorAll('.card');
    const query = searchInput.value.toLowerCase();
    
    cards.forEach(card => {
        const gameName = card.querySelector('h3.game-name').textContent.toLowerCase();
        if (gameName.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-games');
    const searchButton = document.getElementById('search-btn');

    // Attach event listeners
    searchInput.addEventListener('keyup', searchGames);
    searchButton.addEventListener('click', searchGames);
});