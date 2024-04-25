let pokedex = [];
let firstLoad = 21; 

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
    colorizeCard(i);
}

function renderPokemonName(i) {
    let name = pokedex[i]['name'];
    let nameContent = document.getElementById(`pokemonName${i}`);
    nameContent.innerHTML = name;
}   

function renderPokemonType(i) {
    let types = pokedex[i]['types'];
    let typeContent = document.getElementById(`pokemonTypes${i}`);
    for (let i = 0; i < types.length; i++) {
        const type = types[i]['type']['name'];
        typeContent.innerHTML += `<div class="pokemon-type">${type}</div>`; 
    }
}

function renderPokemonID(i) {
    let id = pokedex[i]['id'];
    let content = document.getElementById(`pokemonID${i}`);
    content.innerHTML = '# ' + id;
}

function colorizeCard(i) {
    let cardContent = document.getElementById(`pokemonCard${i}`);
    let type = pokedex[i]['types'][0]['type']['name'];

    if (type === 'grass') {
        cardContent.classList.add('bg-color-grass')
    } else {
        if (type === 'fire') {
            cardContent.classList.add('bg-color-fire')
        } else {
            if (type === 'water') {
                cardContent.classList.add('bg-color-water')
            } else {
                if (type === 'poison') {
                    cardContent.classList.add('bg-color-poison')
                } else {
                    if (type === 'bug') {
                        cardContent.classList.add('bg-color-bug')
                    } else {
                        if (type === 'electric') {
                            cardContent.classList.add('bg-color-electric')
                        } else {
                            cardContent.classList.add('bg-color-normal')
                        }
                    }
                }
            }
        }
    } 
}

function colorizeType(i) {
    let typeContent = document.getElementById(`pokemonTypes${i}`);
    let type = pokedex[i]['types'][0]['type']['name'];
 
}