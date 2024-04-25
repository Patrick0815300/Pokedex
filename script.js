let pokedex = [];
let firstLoad = 11; 

async function init() {
     await getPokedex();
     renderCardsContainer();
}

async function getPokedex() {
    for (let i = 1; i < firstLoad; i++) {
        await loadPokedex(i); 
    }
}

async function loadPokedex(i) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    let responseToJson = await response.json();
    pokedex.push(responseToJson);
    console.log('Pokedex: ', pokedex)
}


function renderCardsContainer() {
    let container = document.getElementById('container')
    container.innerHTML = '';
    for (let i = 0; i < pokedex.length; i++) {
        const pokemon = pokedex[i];
        container.innerHTML += renderEmptyCard(i);
        renderCard(i);
    }
}

function renderCard(i) {
    let content = document.getElementById(`pokemonCard${i}`)
    content.innerHTML += renderCardTemp(i);
    renderPokemonName(i);
    renderPokemonType(i);
    renderPokemonID(i);
}

function renderPokemonName(i) {
    let name = pokedex[i]['name'];
    let nameContent = document.getElementById(`pokemonName${i}`);
    console.log('Name: ', name)
    nameContent.innerHTML = name;
}   

function renderPokemonType(i) {
    let types = pokedex[i]['types'];
    let typeContent = document.getElementById(`pokemonTypes${i}`);
    for (let i = 0; i < types.length; i++) {
        const type = types[i]['type']['name'];
        console.log('Type: ', type);  
        typeContent.innerHTML += `<div class="pokemonType">${type}</div>`; 
    }
}

function renderPokemonID(i) {
    let id = pokedex[i]['id'];
    let content = document.getElementById(`pokemonID${i}`);
    content.innerHTML = '# ' + id;
}
