const nome = 'Edson'
const idade = 25
const contribuicao = 7
const sexo = 'Masculino'

if((idade + contribuicao) >= 95 && sexo == 'Masculino'){
    console.log(`Caro ${nome}, você pode se aposentar!`)
}
else if((idade + contribuicao) >= 85 && sexo == 'Feminino'){
    console.log(`Cara ${nome}, você pode se aposentar!`)
}
else{
    console.log(`Caro ${nome}, você ainda não pode se aposentar!`)
}