alert(">> BEM VINDO AO PROGRAMA DE DOBRA ESPACIAL! <<")

let namePilot = prompt("Qual seu nome, piloto?")
let naveName = prompt("Qual o nome da nave?")

let folding = confirm("Deseja entrar na dobra?")
let warpSpace = 0

while(folding == true) {
    warpSpace += 1
    alert("Incrível! Você acabou de viajar em uma forma de propulsão mais rápida que a luz!")
    folding = confirm("Deseja entrar na dobra novamente?")
} 

alert("Parabéns, " + namePilot + "\nO programa foi encerrado! " + "\nNave: " + naveName + " fez " + warpSpace + " dobras")