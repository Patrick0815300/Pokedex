function renderCardTemp(i) {
    return /* html */ `
        <div class="name-and-id">
            <span class="pokemon-name" id="pokemonName${i}"></span>
            <span id="pokemonID${i}"></span>
        </div>
        
        <div class="type-and-img">
            <div id="pokemonTypes${i}"></div>
            <div><img class="pokemon-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${i+1}.png" alt="Pokemon-Img"></div>
        </div>      
    `;
}

function renderEmptyCard(i) {
    return /* html */ `
    <div class="pokemon-card" id="pokemonCard${i}">

    </div>  
    `;
}
