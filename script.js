document.addEventListener('DOMContentLoaded', async function () {
  const pokemonList = document.querySelector('.pokemon-list');
  const pokemonDetails = document.querySelector('.pokemon-details');
  const pokemonData = []; // Create an array to store Pokémon data

  function fetchPokemonDetails(id) {
      return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then(response => response.json());
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
  const requests = Array.from({ length: 1016 }, (_, i) => fetchPokemonDetails(i + 1));
  const responses = await Promise.all(requests);
  responses.forEach(data => displayPokemon(data));
});