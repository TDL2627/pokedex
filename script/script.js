fetch('https://pokeapi.co/api/v2/pokemon/4').then(res =>{
    return res.json();
}).then(data => {
    console.log(data);
    document.querySelector("#card").innerHTML= `
   
        <h1>${ data.name }</h1>
        <div>
        <img src="${ data.sprites.front_default }">
        <img src="${ data.sprites.back_default }">
        <img src="${ data.sprites.front_shiny }">
        <img src="${ data.sprites.back_shiny }">
        </div>
        <h3>Ability<h3>
        
            <p>${ data.abilities[0].ability.name }</p>
         
        
        <h3>MOVES</h3>
        <ul>
        <li>${ data.moves[5].move.name }</li>
        <li>${ data.moves[21].move.name }</li>
        <li>${ data.moves[7].move.name }</li>
        <li>${ data.moves[8].move.name }</li>
        </ul>
        <br>
        <h3>Details</h3>

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
        <div>
        <img src="${ data1.sprites.front_default }">
        <img src="${ data1.sprites.back_default }">
        <img src="${ data1.sprites.front_shiny }">
        <img src="${ data1.sprites.back_shiny }">
        </div>
        <h3>Type<h3>
        
            <p>${ data1.types[0].type.name }</p>
         
        
        <h3>MOVES</h3>
        <ul>
        <li>${ data1.moves[5].move.name }</li>
        <li>${ data1.moves[21].move.name }</li>
        <li>${ data1.moves[7].move.name }</li>
        <li>${ data1.moves[8].move.name }</li>
        </ul>
        <br>
        <h3>Details</h3>

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
        <div>
        <img src="${ data2.sprites.front_default }">
        <img src="${ data2.sprites.back_default }">
        <img src="${ data2.sprites.front_shiny }">
        <img src="${ data2.sprites.back_shiny }">
        </div>
        <h3>Ability<h3>
        
            <p>${ data2.abilities[0].ability.name }</p>
         
        
        <h3>MOVES</h3>
        <ul>
        <li>${ data2.moves[5].move.name }</li>
        <li>${ data2.moves[21].move.name }</li>
        <li>${ data2.moves[7].move.name }</li>
        <li>${ data2.moves[8].move.name }</li>
        </ul>
        <br>
        <h3>Details</h3>

    `

}).catch(err => {
    console.log(err)
})