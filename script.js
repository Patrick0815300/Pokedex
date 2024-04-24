let pokedex;

async function init() {
    await loadPokedex();
    renderCard();
}

async function loadPokedex() {
    let url = `https://pokeapi.co/api/v2/pokemon/bulbasaur`;
    let response = await fetch(url);
    pokedex = await response.json();
}

function renderCard() {
    let content = document.getElementById('pokemonCard')
    content.innerHTML += renderCardTemp();
    renderPokemonName();
    renderPokemonType();
}

function renderPokemonName() {
    let name = pokedex['name'];
    let nameContent = document.getElementById(`pokemonName`);
    console.log('Name: ', name)
    nameContent.innerHTML = name;
}   

function renderPokemonType() {
    let types = pokedex['types'];
    let typeContent = document.getElementById(`pokemonTypes`);
    for (let i = 0; i < types.length; i++) {
        const type = pokedex['types'][i]['type']['name'];
        console.log('Type: ', type);  
        typeContent.innerHTML += `<div class="pokemonType">${type}</div>`; 
    }
}
