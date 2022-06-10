const nome = "Guilherme";
let nome2 = "";
let pessoaDefault = {
  nome: "Guilherme",
  idade: "21",
  trabalho: "Designer",
};

let nomes = ["Guilherme", "Maria", "João"];
let pessoas = [
  {
    nome: "Guilherme",
    idade: "21",
    trabalho: "Designer",
  },
  {
    nome: "Maria",
    idade: "20",
    trabalho: "Professora",
  },
  {
    nome: "João",
    idade: "18",
    trabalho: "Vendedor",
  },
];

function alterarnome() {
  nome2 = "Pedro";
  console.log("Valor alterado:");
  console.log(nome2);
}

function recebeEalteranome(novoNome) {
  nome2 = novoNome;
  console.log("Valor alterado recebendo um nome:");
  console.log(nome2);
}

function imprimirPessoa(pessoa) {
  console.log("Nome:");
  console.log(pessoa.nome);

  console.log("Idade:");
  console.log(pessoa.idade);

  console.log("Trabalho:");
  console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
  pessoas.push(pessoa);
}

function imprimirPessoas() {
  console.log("---IMPRIMIR PESSOAS---");
  pessoas.forEach((item) => {
    console.log("Nome");
    console.log(item.nome);

    console.log("Idade:");
    console.log(item.idade);

    console.log("Trabalho:");
    console.log(item.trabalho);
  });
}

imprimirPessoas();

adicionarPessoa({
  nome: "Henrique",
  idade: "18",
  trabalho: "Autonomo",
});

imprimirPessoas();
