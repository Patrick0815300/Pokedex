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
    <div class="pokemon-card" id="pokemonCard${i}" onclick="openPokemonCard(${i})">

    </div>     
    `;
}

function openPokemonCardTemp(i) {
    return /* html */ `
        <div class="container-big-card">
            <div class="big-card">
                <div class="big-card-top">
                    <div style="display:flex; justify-content: space-between" >
                        <img class="icon" src="./img/arrow-left.svg" alt="arrow-back">
                        <img class="icon" src="./img/heart.svg" alt="like-button">
                    </div>
                    <div style="display:flex; justify-content: space-between">
                        <span class="big-card-pokemon-name">${pokedex[i]['name']}</span>
                        <span class="big-card-pokemon-name"># ${pokedex[i]['id']}</span>
                    </div>
                    <div>
                        <span class="pokemon-type"></span>
                    </div>
                    <img class="big-card-pokemon-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${i+1}.png" alt="Pokemon-IMG">
                </div>
                <div class="info-card">
                    <div class="navbar">

                    </div>
                    <table>
                        <tr>
                            <td>Species</td>
                            <td>Info</td>
                        </tr>
                        <tr>
                            <td>Height</td>
                            <td>Info</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>Info</td>
                        </tr>
                        <tr>
                            <td>Abilities</td>
                            <td>Info</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;
 
}
