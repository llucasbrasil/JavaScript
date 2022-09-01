// var calcMedia = function (){
//     return (this.nota1 + this.nota2) / 2
// }

// var turma = [
//     {
//         nome: "Igor",
//         nota1: 9,
//         nota2: 5,
//         media: calcMedia
//     },
//     {
//         nome: "Lucas",
//         nota1: 7,
//         nota2: 6,
//         media: calcMedia
//     }
// ]

// var aluno = turma[1];
// console.log(aluno);
// console.log(aluno.media());






// function criarAluno(nome, n1, n2){
//     return {
//         nome: nome,
//         nota1: n1,
//         nota2: n2,
//         media: function () {
//             return (this.nota1 + this.nota2)/2
//         }
//     }
// }
// var turma = [
//     criarAluno("Igor", 9, 6),
//     criarAluno("Joao", 7, 4),
//     criarAluno("Luana", 5, 9)
// ]

// var aluno = turma[2];

// console.log(aluno);
// console.log(aluno.media());






// function criarAluno(nome, n1, n2){
//     return {
//         nome: nome,
//         nota1: n1,
//         nota2: n2,
//         media: function(){
//             return (this.nota1 + this.nota2) / 2
//         }
//     }
// }

// var turma = [
//     criarAluno("Igor", 9, 6),
//     criarAluno("João", 6, 5),
//     criarAluno("Lucas", 9, 7),
//     criarAluno("Matheus", 9, 6),
//     criarAluno("Larissa", 6, 5),
//     criarAluno("Beto", 9, 7)
// ]


// for (var aluno of turma){
//     console.log(aluno.nome + " - " + aluno.media());
// }







function aluno(nome, n1, n2){

    this.nome=nome;
    this.nota1=n1;
    this.nota2=n2;
    this.media=function(){
        return (this.nota1 + this.nota2)/2;
    }
}

var a=new aluno("João",7,7);
var a=new aluno("Lucas",5,5);
var a=new aluno("Marcos",6,6);

console.log(a.media() +" "+ a.nome);