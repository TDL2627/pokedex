fetch('https://pokeapi.co/api/v2/pokemon/4').then(res =>{
    return res.json();
}).then(data => {
    console.log(data);
    document.querySelector("#card").innerHTML= `
   
        <h1>${ data.name }</h1>
        <div class="card-pic">
        <img class="pkmnPic" src="${ data.sprites.front_default }">
        </div>
        <h3>Type<h3>
        
        <p>${ data.types[0].type.name }</p>
         
        
        <h3>Moves</h3>
        <ul>
        <li>${ data.moves[3].move.name }</li>
        <li>${ data.moves[21].move.name }</li>
        <li>${ data.moves[7].move.name }</li>
        <li>${ data.moves[8].move.name }</li>
        </ul>
        <br>

    `

}).catch(err => {
    console.log(err)
})

fetch('https://pokeapi.co/api/v2/pokemon/5').then(resu =>{
    return resu.json();
}).then(data1 => {
    console.log(data1);
    document.querySelector("#card1").innerHTML= `
   
        <h1>${ data1.name }</h1>
        <div class="card-pic">
        <img class="pkmnPic" src="${ data1.sprites.front_default }">
        </div>
        <h3>Type<h3>
        
            <p>${ data1.types[0].type.name }</p>
         
        
        <h3>Moves</h3>
        <ul>
        <li>${ data1.moves[10].move.name }</li>
        <li>${ data1.moves[21].move.name }</li>
        <li>${ data1.moves[22].move.name }</li>
        <li>${ data1.moves[17].move.name }</li>
        </ul>
        <br>

    `

}).catch(err => {
    console.log(err)
})


fetch('https://pokeapi.co/api/v2/pokemon/6').then(result =>{
    return result.json();
}).then(data2 => {
    console.log(data2);
    document.querySelector("#card2").innerHTML= `
   
        <h1>${ data2.name }</h1>
        <div class="card-pic">
        <img class="pkmnPic" src="${ data2.sprites.front_default }">
        </div>
        <h3>Type<h3>
        
        <p>${ data2.types[0].type.name } / ${ data2.types[1].type.name }</p>
        <p></p>
         
        
        <h3>Moves</h3>
        <ul>
        <li>${ data2.moves[5].move.name }</li>
        <li>${ data2.moves[21].move.name }</li>
        <li>${ data2.moves[7].move.name }</li>
        <li>${ data2.moves[8].move.name }</li>
        </ul>
        <br>

    `

}).catch(err => {
    console.log(err)
})