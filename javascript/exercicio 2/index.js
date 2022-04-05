let namePilot = prompt ("Digite seu nome, piloto?")

let velocity = 0

let newVelocity = prompt("A que velocidade você gostaria de acelerar?")

let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + "km/s")


if(confirmVelocity) {
    velocity = newVelocity
} 

if(newVelocity <= 0){
    alert("Nave está parada, Considere partir e aumentar a velocidade.")
} else if(newVelocity < 40){
    alert("Você está devagar, podemos aumentar mais")
} else if(newVelocity < 80){
    alert("Parece uma boa velocidade para manter")
} else if(newVelocity <100){
    alert("Velocidade alta. Considere diminuir.")
} else {
    alert("Velocidade perigosa. Controle automático forçado!.")
}

alert("Piloto " + namePilot + "\nVelocidade: " + newVelocity + "km/s")



