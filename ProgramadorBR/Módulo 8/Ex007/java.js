// NOME DO ALUNO >> NOTA 1 >> NOTA 2 >> MÉDIA >> APROVADO/REPROVADO


var nomes = ["Igor", "José", "Maria"];
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];
var notasC = [5.5, 8.5, 7.5];
var notasD = [7.5, 7.0, 8.0];

// FUNÇÃO PARA CALCULAR AS MÉDIAS
function media(n1, n2, n3, n4){
    return (n1 + n2 + n3 + n4)/4;
}

// FUNÇÃO PARA SABER SE PASSOU OU REPROVOU
function passou(media){
    if(media > 7){
        return "Aprovado";
    }
    else{
        return "Reprovado";
    }
}

// CRIANDO A LISTA
for (var index in nomes){
    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var nota3 = notasC[index];
    var nota4 = notasD[index];
    var m = media(nota1, nota2, nota3, nota4);
    console.log(nomes[index]+" : "+nota1+" - "+nota2+" - "+nota3+" - "+nota4+" / "+m+" = "+passou(m));
}