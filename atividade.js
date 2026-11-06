let nomeCandidato = "Junia dias";
let idadeCandidato = 16;
let nomeCurso = "Desenvolvimento de Sistemas";
let valorMensalidade = 450.00;
let quantidadeVagas = 5;
let possuiDesconto = true;

console.log("===== INSCRIÇÃO EM CURSOS =====");
console.log("Nome: " + nomeCandidato);
console.log("Idade: " + idadeCandidato + " anos");
console.log("Curso: " + nomeCurso);
console.log("");

if (idadeCandidato < 16) {
    console.log("Inscrição não permitida.");
} else if (idadeCandidato >= 16 && idadeCandidato <= 17) {
    console.log("Necessita de autorização do responsável.");
} else {
    console.log("Inscrição permitida.");
}

if (quantidadeVagas > 0) {
    console.log("Existem vagas disponíveis.");
} else {
    console.log("Não existem vagas disponíveis.");
}

console.log("Mensalidade original: R$ " + valorMensalidade.toFixed(2));

let mensalidadeFinal = valorMensalidade;

if (possuiDesconto) {
    let valorDesconto = valorMensalidade * 0.15;
    mensalidadeFinal = valorMensalidade - valorDesconto;
    console.log("Desconto aplicado: 15%");
    console.log("Mensalidade final: R$ " + mensalidadeFinal.toFixed(2));
} else {
    console.log("Desconto aplicado: 0%");
    console.log("Mensalidade final: R$ " + mensalidadeFinal.toFixed(2));
}

if (valorMensalidade <= 300.00) {
    console.log("Classificação: Curso económico");
} else if (valorMensalidade > 300.00 && valorMensalidade <= 600.00) {
    console.log("Classificação: Curso intermediário");
} else {
    console.log("Classificação: Curso premium");
}

console.log("===============================");