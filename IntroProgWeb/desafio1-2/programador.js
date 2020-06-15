const programador = {
    nome: 'Edson',
    idade: 25,
    tecnologias: [
        {nome: 'javascript', especialidade: 'web/mobile'},
        {nome: 'html', especialidade: 'web'},
        {nome: 'css', especialidade: 'web'}
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)