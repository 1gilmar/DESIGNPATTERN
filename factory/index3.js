//fabrica de objeto
function criaObjeto(){
    let objeto = {}
    return objeto
}

let pessoaA = criaObjeto()
let pessoaB = criaObjeto()

console.log(pessoaA)
console.log(pessoaB)

// agora posso atribuir coisa assim
pessoaA.nome = "Nome"
pessoaA.sobrenome = "Sobrenome"
pessoaA.idade = "sim"

pessoaB.nome = "Uai uai"

//retorno um json
console.log(JSON.stringify(pessoaA))

//retorno um objeto
console.log(pessoaB)