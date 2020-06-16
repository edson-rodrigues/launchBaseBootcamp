const alunosTurmaA = [
    {
        nome: 'Edson',
        nota: 10
    },
    {
        nome: 'Lucas',
        nota: 7
    },
    {
        nome: 'Elizandra',
        nota: 5
    },
    {
        nome: 'Deljoy',
        nota: 4
    },
    {
        nome: 'Nelson',
        nota: 2
    }
]

const alunosTurmaB = [
    {
        nome: 'Josef',
        nota: 10
    },
    {
        nome: 'Luis',
        nota: 6
    },
    {
        nome: 'Samira',
        nota: 3
    }
]

/*function calculaMedia(alunos){
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3
}*/
const calculaMedia = (alunos) => {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    return soma / alunos.length
}

//Mostrar média da turma e parabenizar se a média for maior que 5.
/*function enviaMensagem(media){
    if (media > 5){
        console.log(`Média: ${media.toFixed(2)}, parabéns!`)
    }
    else{
        console.log(`Média: ${media.toFixed(2)}`)
    }
}*/
const enviaMensagem = (media, turma) => {
    if (media > 5) {
        console.log(`Média da turma ${turma} é: ${media.toFixed(2)}, parabéns!`)
    }
    else {
        console.log(`Média da turma ${turma}: ${media.toFixed(2)}`)
    }
}

const mediaA = calculaMedia(alunosTurmaA)
const mediaB = calculaMedia(alunosTurmaB)

enviaMensagem(mediaA, 'turma A')
enviaMensagem(mediaB, 'turma B')

const marcarComoReprovado = (aluno) => {
    aluno.reprovado = false
    if (aluno.nota < 5) {
        aluno.reprovado = true
    }
}
const enviarMensagemReprovado = (aluno) => {
    if (aluno.reprovado) {
        console.log(`O aluno ${aluno.nome} está reprovado!`)
    }
}

const alunoReprovado = (alunos) => {
    for (aluno of alunos) {
        marcarComoReprovado(aluno)
        enviarMensagemReprovado(aluno)
    }
}
alunoReprovado(alunosTurmaA)





