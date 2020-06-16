const nome = 'Edson'
const peso = 91
const altura = 1.80

const IMC = peso / (altura * altura)

if(IMC >=30){
    console.log(`Caro ${nome}, seu IMC é de: ${IMC.toFixed(2)}, você está com sobrepeso`)
}
else{
    console.log(`Caro ${nome}, seu IMC é de: ${IMC.toFixed(2)}, seu IMC está normal`)
}
