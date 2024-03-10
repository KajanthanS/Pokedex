function closePopup() {
  const popupContainer = document.querySelector('.popup-container');
  popupContainer.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', async function () {
  const pokemonList = document.querySelector('.pokemon-list');
  const pokemonDetails = document.querySelector('.pokemon-details-popup');
  const pokemonData = []; // Create an array to store Pokémon data


  function fetchPokemonDetails(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json());
  }

  function displayPokemonDetails(pokemon) {
    const popupContainer = document.querySelector('.popup-container');
    const popupContent = document.querySelector('.popup-content');

    // Remove all existing type classes
    popupContainer.classList.remove('fire', 'water', 'grass', 'electric', 'normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'psychic', 'ice', 'dragon', 'dark', 'fairy');

    const firstType = pokemon.types[0].type.name;
    popupContainer.classList.add(firstType);

    // Populate the popup content
    popupContent.innerHTML = `
        <div class="pokemon_details">
            <h2>${pokemon.name} (#${pokemon.id})</h2>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}">
            <p>Height: ${pokemon.height} dm</p>
            <p>Weight: ${pokemon.weight} hg</p>
            <p>Type: ${firstType}</p>
        </div>`;

    popupContainer.classList.add('active');
}


  async function fetchAndDisplayPokemonDetails(id) {
    const pokemon = await fetchPokemonDetails(id);
    displayPokemonDetails(pokemon);
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
      fetchAndDisplayPokemonDetails(id);
    });

    pokemonList.appendChild(pokemonCard);
  }

  // Fetch all Pokémon data in parallel
  const requests = Array.from({
    length: 1016
  }, (_, i) => fetchPokemonDetails(i + 1));
  const responses = await Promise.all(requests);
  responses.forEach(data => displayPokemon(data));

  // Add event listener for search input
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', function () {
    const searchText = searchInput.value.toLowerCase();
    const pokemons = document.querySelectorAll('.pokemon');
    pokemons.forEach(pokemon => {
      const pokemonName = pokemon.querySelector('p').textContent.toLowerCase();
      if (pokemonName.includes(searchText)) {
        pokemon.style.display = 'block';
      } else {
        pokemon.style.display = 'none';
      }
    });
  });
});

// Hide the loader after 5 seconds
setTimeout(function () {
  var loaderOverlay = document.querySelector('.loader-overlay');
  loaderOverlay.style.opacity = '0';
  setTimeout(function () {
    loaderOverlay.classList.add('hidden');
    document.querySelector('.pokedex').classList.remove('hidden');
  }, 200); // Transition duration + a little delay
}, 5000); // 5000 milliseconds = 5 seconds

document.addEventListener('DOMContentLoaded', function () {
  const loadingText = document.getElementById('loading-text');
  const text = loadingText.innerText;
  loadingText.innerText = ''; // Clear the text content

  // Define a function to animate the text
  function animateText(index) {
    setTimeout(function () {
      loadingText.innerText += text[index];
      if (index < text.length - 1) {
        animateText(index + 1);
      } else {
        setTimeout(function () {
          loadingText.innerText = ''; // Clear the text content
          animateText(0); // Restart the animation
        }, 100); // Adjust the delay before restarting the animation (in milliseconds)
      }
    }, 100); // Adjust the delay (in milliseconds) between each character
  }

  // Start the animation
  animateText(0);
});