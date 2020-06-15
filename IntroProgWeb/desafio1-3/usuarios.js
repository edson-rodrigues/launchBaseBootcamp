const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ]

/*for (let i = 0; i < usuarios.length; i++){
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
}*/

const checkaCSS = (usuarios) =>{
  for (let i = 0; i < usuarios.length; i++){
    for (let j = 0; j < usuarios[i].tecnologias.length; j++){
      if (usuarios[i].tecnologias[j] == 'CSS'){
        console.log(`O usuário ${usuarios[i].nome} usa a tecnologia CSS`)
      }
    }
  }
}

checkaCSS(usuarios)