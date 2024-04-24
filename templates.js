function renderCardTemp() {
    return /* html */ `
        <div class="name-and-id">
            <span class="pokemon-name" id="pokemonName"></span>
            <span>#001</span>
        </div>
        
        <div class="type-and-img">
            <div id="pokemonTypes"></div>
            <div><img class="pokemon-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png" alt="Pokemon-Img"></div>
        </div>
    `;
}
