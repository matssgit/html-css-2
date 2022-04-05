let distanceInLy = prompt("Qual a distância em anos luz que deseja converter?")

let chosenOption = prompt("Para qual unidade desejeva converter?\n1. Parsec(pc)\n2. Unidade Astronômica(AU)\n3. Quilômetros(km).")

let chosenUnit
let convertedDistance

switch(chosenOption){
    case "1":
        chosenUnit = "Parsec"
        convertedDistance = distanceInLy * 0.306601
        break
    case "2": 
        chosenUnit = "Unidade Astronômica"
        convertedDistance = distanceInLy * 63241.1
        break
    case "3":
        chosenUnit = "Quilômetros"
        convertedDistance = distanceInLy * 9.5 * Math.pow(10,12)
        break
    defaut:
        chosenOption = "Unidade não identificada"
        convertedDistance = "Conversão fora do escopo"
}

alert("Distância em Anos-Luz: " + distanceInLy + "\n" + chosenUnit + ": " + convertedDistance)