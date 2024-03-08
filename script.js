document.addEventListener('DOMContentLoaded', async function () {
    const pokemonList = document.querySelector('.pokemon-list');
    
    const pokemonDetails = document.querySelector('.pokemon-details');
    const pokemonData = []; // Create an array to store Pokémon data

    function fetchPokemonDetails(id) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then(data => displayPokemonDetails(data));
    }

    function displayPokemonDetails(pokemon) {
        
        pokemonDetails.innerHTML = `
        <div class="pokemon_details">
            <h2>${pokemon.name} (#${pokemon.id}</h2>

            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}">
            <p>Height: ${pokemon.height} dm</p>
            <p>Weight: ${pokemon.weight} hg</p>
            
        </div>`;

        pokemonDetails.style.display = 'block';
    }

    

    function displayPokemon(pokemon) {
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon');
        pokemonCard.dataset.id = pokemon.id;

        pokemonCard.innerHTML = `
            <img class= "pokemon_image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}">
            <p>${pokemon.name}</p>
        `;

        pokemonCard.addEventListener('click', function () {
            const id = this.dataset.id;
            fetchPokemonDetails(id);
        });

        pokemonList.appendChild(pokemonCard);
    }

    // Fetch Pokémon data and store it in the array
    for (let i = 1; i <= 1016; i++) {
        await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
          .then((response) => response.json())
          .then((data) => {
            displayPokemon(data);
          });
      }
    // Sort the array by Pokémon ID
    pokemonData.sort((a, b) => a.id - b.id);
});

// Get a reference to the button
const scrollToTopButton = document.getElementById('scroll-to-top');

// Show the button when the page is scrolled down
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Smooth scrolling animation
  });
});

// Pokémon Search

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', function() {
        const searchInput = document.getElementById('search-input').value.toLowerCase();

        // Fetch Pokémon data from the API based on search query
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`)
            .then(response => response.json())
            .then(data => displayPokemon(data))
            .catch(error => console.error('Error:', error));
    });

    function displayPokemon(data) {
        const pokemonList = document.querySelector('.pokemon-list');

        // Clear previous Pokémon
        pokemonList.innerHTML = '';

        // Display Pokémon details
        const name = data.name;
        const id = data.id;
        const image = data.sprites.front_default;
        const height = data.height;
        const weight = data.weight;

        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');
        pokemonCard.innerHTML = `
            <h2>${name} (#${id})</h2>
            <img src="${image}" alt="${name}">
            <p>Height: ${height} dm</p>
            <p>Weight: ${weight} hg</p>
        `;

        pokemonList.appendChild(pokemonCard);
    }

    document.getElementById('refresh-button').addEventListener('click', function () {
        location.reload();
      });
    
});

