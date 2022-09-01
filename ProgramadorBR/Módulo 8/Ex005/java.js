// function obj(n,s){
//     return {nome: n, sobrenome: s}
// }

// var a = obj ("Lucas", "Brasileiro")
// console.log(a);



function obj(n,s){
    this.nome= n;
    this.sobrenome= s;
}

var a = new obj("Lucas", "Brasileiro")

console.log(a.nome + " " + a.sobrenome)