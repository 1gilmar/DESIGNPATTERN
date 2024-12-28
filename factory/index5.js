function fabricarPessoa(nome, sobrenome){
    //criando o objeto
    let pessoa = {}

    //atribuindo propriedade para pessoa
    pessoa.nome = nome
    pessoa.sobrenome = sobrenome

    function nomeCompleto(){
        return ` ${pessoa.nome} ${pessoa.sobrenome} `
    }

    pessoa.nomeCompleto = nomeCompleto()

    return pessoa
}

let pessoaA = fabricarPessoa('gilmar', 'borges')
let pessoaB = fabricarPessoa('alef', 'souza')

console.log(pessoaA.nomeCompleto)
console.log(pessoaB.nomeCompleto)