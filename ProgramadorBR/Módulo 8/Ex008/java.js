
function calcMedia(){
    return (this.nota[0]+this.nota[1])/2;
}

var aluno1 ={
    nome:"Igor",
    nota:[5,7],
    media: calcMedia
}
var aluno2 ={
    nome:"Lucas",
    nota:[7,8],
    media:calcMedia
}

console.log(aluno1.nome);
console.log(aluno1.media());
console.log(aluno2.nome);
console.log(aluno2.media());
