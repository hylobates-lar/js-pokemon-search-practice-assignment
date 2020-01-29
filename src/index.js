document.addEventListener('DOMContentLoaded', () => { 
  console.log(POKEMON[0])

  const pokemonContainer = document.querySelector("#pokemon-container")
  const search = document.querySelector("#pokemon-search-input")

  search.addEventListener("input", e => {
    const userInput = e.target.value
    pokemonContainer.querySelectorAll(".pokemon-card").forEach(card => {
      const header = card.querySelector("h1")
      if (header.textContent.includes(userInput)) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    })
  })

  pokemonContainer.addEventListener('click', (e) => {
    if (event.target.dataset.action === 'flip') {
      const targetPoke = POKEMON.find(pokeObj => pokeObj.id === parseInt(event.target.dataset.id))
      if (event.target.src === targetPoke.sprites.front) {
        event.target.src = targetPoke.sprites.back
      } else {
        event.target.src = targetPoke.sprites.front
      }
    }
  })

  function renderOnePokemon(pokemon) {
    const outerLi = document.createElement('li')
    outerLi.className = "pokemon-card"
    outerLi.dataset.id = pokemon.id

    outerLi.innerHTML = `
      <div id="pokemon-container">
        <div class="pokemon-card">
          <div class="pokemon-frame">
            <h1 class="center-text">${pokemon.name}</h1>
              <div class="pokemon-image">
                <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
              </div>
          </div>
        </div>
      </div>
    `
    pokemonContainer.append(outerLi)
  }

  function renderAllPokemon(pokemon) {
    pokemon.forEach(renderOnePokemon)
  }

  renderAllPokemon(POKEMON)
})