function fabricarPessoa(nome, sobrenome){
    let pessoa = {}
    pessoa.nome = nome
    pessoa.sobrenome = sobrenome
    
    return pessoa
}

//usando

let pessoaA = fabricarPessoa('gilmar', 'borges')

let pessoaB = fabricarPessoa('alef', 'souza')

console.log(pessoaA);
console.log(pessoaB);

//esta publica qualquer pessoa pode usar isso
console.log(pessoaA.nome)