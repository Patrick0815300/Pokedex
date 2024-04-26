let pokedex = [];
let pokedex2 = [];
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
    let url1 = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let url2 = `https://pokeapi.co/api/v2/pokemon-species/${i}`;
    let response1 = await fetch(url1);
    let response2 = await fetch(url2);
    let responseToJson1 = await response1.json();
    let responseToJson2 = await response2.json();
    pokedex.push(responseToJson1);
    pokedex2.push(responseToJson2);
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

function colorizeBigCard(i) {
    let cardContent = document.getElementById(`bigCardTop${i}`);
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

function changeFirstLoad() {
    pokedex = [];
    firstLoad = firstLoad + 20;
    init();
}

function openPokemonCard(i) {
    let content = document.getElementById('container')
    content.innerHTML += openPokemonCardTemp(i);
    pokemonTypesBigCard(i);
    colorizeBigCard(i);
    pokemonMoves(i);
    renderChart(i);
    pokemonEvolution(i);
}

function pokemonTypesBigCard(i) {
    let types = pokedex[i]['types'];
    let typeContent = document.getElementById(`bigCardTypes${i}`);
    for (let i = 0; i < types.length; i++) {
        const type = types[i]['type']['name'];
        typeContent.innerHTML += `<div class="pokemon-type">${type}</div>`; 
    }
}

function pokemonMoves(i) {
    let moves = pokedex[i]['moves'];
    let content = document.getElementById(`pokemonMoves${i}`);
    
    for (let i = 0; i < 3; i++) {
        const move = moves[i]['move']['name'];
        content.innerHTML += `<span>${move}</span>`; 
    }
}

function renderChart(i) {
    let statData = pokedex[i]['stats'];

    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: ['HP', 'Attack', 'Defense', 'Special-Attack', 'Special-Defense', 'Speed'],
        datasets: [{
            backgroundColor:  [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
                ],
            label: '# of Votes',
            data: [statData[0]['base_stat'], statData[1]['base_stat'], statData[2]['base_stat'], statData[3]['base_stat'], statData[4]['base_stat'], statData[5]['base_stat']],
            borderWidth: 1
        }]
        },
        options: {
            indexAxis: 'y',
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });
}

function pokemonEvolution(i) {
    let content = document.getElementById(`pokemonEvolution${i}`)
    if (pokedex2[i]['evolves_from_species'] === null) {
        content.innerHTML = 'unavailable';
    } else {
        let preEvolution = pokedex2[i]['evolves_from_species']['name'];
        content.innerHTML = preEvolution; 
    }
}   