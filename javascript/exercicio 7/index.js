let nameNave = prompt("Qual o nome da nave?")
let velocity = 0
let menu = ""

function speedUp(velocity, acelerate = 5){
    velocity += acelerate;
    return velocity;
}

function slowDown(velocity, desacelerate = 5){
    velocity -= desacelerate;
    return velocity;
}

do{
    menu = prompt("Escolha as opções digitando um número: \n1- Acelerar a nave em 5km/s \n2- Desacelerar em 5km/s \n3- Imprimir dados de bordo \n4- Sair do programa")

switch(menu){
    case "1":
        velocity = speedUp(velocity)
        alert("Sua nave está acelerando em 5km/s")
        break;
    case "2":
        if(velocity >= 5){
            velocity = slowDown(velocity);
            alert("Desacelerando a nave");
        }else if(velocity == 0){
            alert("Impossível reduzir velocidade")
        } 
        break;
    case "3":
        alert("Olá piloto, a nave " + nameNave + " está viajando a " + velocity + "km/s")
        break;
    case "4":
        alert("Obrigado, piloto!. Programa finalizado.")
        break;
    default:
        alert("Opção inválida, deseja voltar ao início?")
    }

} while(menu!="4");


