function closePopup() {
  const popupContainer = document.querySelector('.popup-container');
  popupContainer.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopButton = document.getElementById('scroll-to-top');

  // Add click event listener to the scroll-to-top button
  scrollToTopButton.addEventListener('click', function () {
    // Scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Add scroll event listener to toggle the visibility of the button
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) { // Adjust the scroll position threshold as needed
      scrollToTopButton.classList.remove('hidden');
    } else {
      scrollToTopButton.classList.add('hidden');
    }
  });
});

document.addEventListener('DOMContentLoaded', async function () {
  const pokemonList = document.querySelector('.pokemon-list');
  const pokemonDetails = document.querySelector('.pokemon-details-popup');
  const pokemonData = []; // Create an array to store Pokémon data
  let filteredTypes = []; // Array to store selected types for filtering

  function fetchPokemonDetails(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(data => {
        // Extract the first name of the Pokémon
        let pokemonName = data.name;
        if (pokemonName === "mimikyu-disguised") {
          // For Mimikyu, remove everything after the hyphen
          pokemonName = "mimikyu";
        }

        if (pokemonName === "tornadus-incarnate") {
          // For Mimikyu, remove everything after the hyphen
          pokemonName = "tornadus";
        }

        if (pokemonName === "thundurus-incarnate") {
          // For Mimikyu, remove everything after the hyphen
          pokemonName = "thundurus";
        }

        if (pokemonName === "landorus-incarnate") {
          // For Mimikyu, remove everything after the hyphen
          pokemonName = "landorus";
        }

        if (pokemonName === "enamorus-incarnate") {
          // For Mimikyu, remove everything after the hyphen
          pokemonName = "enamorus";
        }

        if (pokemonName === "keldeo-ordinary") {
          // For Mimikyu, remove everything after the hyphen
          pokemonName = "keldeo";
        }

        if (pokemonName === "wormadam-plant") {
          // For Mimikyu, remove everything after the hyphen
          pokemonName = "wormadam";
        }

        if (pokemonName === "giratina-altered") {
          // For Mimikyu, remove everything after the hyphen
          pokemonName = "giratina";
        }

        if (pokemonName === "shaymin-land") {
          // For Mimikyu, remove everything after the hyphen
          pokemonName = "shaymin";
        }

        if (pokemonName === "basculin-red-striped") {
          // For Mimikyu, remove everything after the hyphen
          pokemonName = "basculin";
        }

        if (pokemonName === "darmanitan-standard") {
          // For Mimikyu, remove everything after the hyphen
          pokemonName = "darmanitan";
        }

        if (pokemonName === "darmanitan-standard") {
          // For Mimikyu, remove everything after the hyphen
          pokemonName = "darmanitan";
        }

        if (pokemonName === "aegislash-shield") {
          // For Mimikyu, remove everything after the hyphen
          pokemonName = "aegislash";
        }

        if (pokemonName === "pumpkaboo-average") {
          // For Mimikyu, remove everything after the hyphen
          pokemonName = "pumpkaboo";
        }

        if (pokemonName === "gourgeist-average") {
          // For Mimikyu, remove everything after the hyphen
          pokemonName = "gourgeist";
        }

        if (pokemonName === "gourgeist-average") {
          // For Mimikyu, remove everything after the hyphen
          pokemonName = "gourgeist";
        }

        if (pokemonName === "lycanroc-midday") {
          // For Mimikyu, remove everything after the hyphen
          pokemonName = "lycanroc";
        }

        if (pokemonName === "wishiwashi-solo") {
          // For Mimikyu, remove everything after the hyphen
          pokemonName = "wishiwashi";
        }

        if (pokemonName === "minior-red-meteor") {
          // For Mimikyu, remove everything after the hyphen
          pokemonName = "minior";
        }

        if (pokemonName === "morpeko-full-belly") {
          // For Mimikyu, remove everything after the hyphen
          pokemonName = "morpeko";
        }

        if (pokemonName === "urshifu-single-strike") {
          // For Mimikyu, remove everything after the hyphen
          pokemonName = "urshifu";
        }

        if (pokemonName === "basculegion-male") {
          // For Mimikyu, remove everything after the hyphen
          pokemonName = "basculegion";
        }

        if (pokemonName === "toxtricity-amped") {
          // For Mimikyu, remove everything after the hyphen
          pokemonName = "toxtricity";
        }

        // Create a new object with only the necessary data
        const pokemonDetails = {
          id: data.id,
          name: pokemonName,
          height: data.height,
          weight: data.weight,
          types: data.types
        };
        return pokemonDetails;
      });
  }


  function displayPokemonDetails(pokemon) {
    const popupContainer = document.querySelector('.popup-container');
    const popupContent = document.querySelector('.popup-content');

    // Remove all existing type classes
    popupContainer.classList.remove('fire', 'water', 'grass', 'electric', 'normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'psychic', 'ice', 'dragon', 'dark', 'fairy');

    // Extract the first type
    const firstType = pokemon.types[0].type.name;

    // Add the first type class to the popup container
    popupContainer.classList.add(firstType);

    // Extract all types
    const allTypes = pokemon.types.map(typeObj => typeObj.type.name).join(', ');

    // Check if the image exists
    const imageUrlAlt = `https://img.pokemondb.net/sprites/scarlet-violet/normal/${pokemon.name.toLowerCase()}.png`;
    const imageUrl = `https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`

    const img = new Image();
    img.onload = function () {
      // Image exists, so set it as the source
      popupContent.innerHTML = `
            <div class="pokemon_details">
                <h2>${pokemon.name} (#${pokemon.id})</h2>
                <img src="${imageUrl}" alt="${pokemon.name}">
                <p>Height: ${pokemon.height} dm</p>
                <p>Weight: ${pokemon.weight} hg</p>
                <p>Type(s): ${allTypes}</p>
            </div>`;
    };
    img.onerror = function () {
      // Image doesn't exist, so display an alternate message
      popupContent.innerHTML = `
            <div class="pokemon_details">
                <h2>${pokemon.name} (#${pokemon.id})</h2>
                <img src="${imageUrlAlt}" alt="${pokemon.name}">
                <p>Height: ${pokemon.height} dm</p>
                <p>Weight: ${pokemon.weight} hg</p>
                <p>Type(s): ${allTypes}</p>
            </div>`;
    };
    img.src = imageUrl;

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
    const types = pokemon.types.map(type => type.type.name).join(',');
    pokemonCard.dataset.types = types;

    // Display Pokemon card
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


  // Filter Pokemon by selected types
  function filterPokemonByType() {
    const pokemons = document.querySelectorAll('.pokemon');
    pokemons.forEach(pokemon => {
      const types = pokemon.dataset.types.split(',');
      if (filteredTypes.every(type => types.includes(type))) {
        pokemon.style.display = 'block';
      } else {
        pokemon.style.display = 'none';
      }
    });
  }
});



// Add event listener for search input
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', function () {
  const searchText = searchInput.value.toLowerCase();
  const pokemons = document.querySelectorAll('.pokemon');
  pokemons.forEach(pokemon => {
    const pokemonName = pokemon.querySelector('p').textContent.toLowerCase();
    if (pokemonName.startsWith(searchText)) {
      pokemon.style.display = 'block';
    } else {
      pokemon.style.display = 'none';
    }
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
}, 8000); // 5000 milliseconds = 5 seconds

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