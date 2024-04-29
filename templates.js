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
            <div><img class="previous-next-arrow" src="./img/arrow-left-dark.svg" onclick="previousCard(${i}); notCloseBigCard(event)"></div>
            <div class="big-card" onclick="notCloseBigCard(event)">
                <div class="big-card-top" id="bigCardTop${i}">
                    <div style="display:flex; justify-content: space-between; width: 100%" >
                        <img class="icon" src="./img/arrow-left.svg" alt="arrow-back" onclick="closeBigCard()">
                        <img class="icon" src="./img/heart.svg" alt="like-button">
                    </div>
                    <div class="big-card-name-and-id">
                        <span class="big-card-pokemon-name">${pokedex[i]['name']}</span>
                        <span class="big-card-pokemon-id"># ${pokedex[i]['id']}</span>
                    </div>
                    <div style="display:flex; justify-content: flex-start; width: 100%">
                        <div id="bigCardTypes${i}" style="display: flex;"></div>
                    </div>
                    <img class="big-card-pokemon-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${i+1}.png" alt="Pokemon-IMG">
                </div>
                <div class="info-card">

                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">About</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Base Stats</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Evolution</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Moves</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            <table class="about-table">
                                <tr>
                                    <td>Height:</td>
                                    <td>${pokedex[i]['height']}"</td>
                                </tr>
                                <tr>
                                    <td>Weight:</td>
                                    <td>${pokedex[i]['weight']} lbs</td>
                                </tr>
                                <tr>
                                    <td>Abilities:</td>
                                    <td>${pokedex[i]['abilities'][0]['ability']['name']}</td>
                                </tr>
                            </table>
                        </div>
                        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                            <div>
                                <canvas id="myChart"></canvas>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                            <div style="padding-top: 24px;">
                                <span id="pokemonEvolution${i}"></span>
                                <!-- img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${i-1}"> -->
                            </div>
                            
                        </div>
                        <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                            <div class="pokemon-moves" id="pokemonMoves${i}" style="padding-top: 24px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pre-next-container"><img class="previous-next-arrow" src="./img/arrow-right-dark.svg" onclick="nextCard(${i}); notCloseBigCard(event)"></div>
        </div>
    `;
}