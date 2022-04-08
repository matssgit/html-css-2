let spaceship = prompt("Qual o nome da nave?")

let nameReverse = ""

for(let i = spaceship.length -1; i >= 0; i--){
    if(spaceship[i] == "e"){
        break
    }
    nameReverse += spaceship[i]
}

alert("O nome original da nave é: " +spaceship + "\nNome reverso com ocultações: " + nameReverse)