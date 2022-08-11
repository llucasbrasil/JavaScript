// var nota1 = 7;
// var nota2 = 6.5;
// var nota3 = 5.5;
// var nota4 = 9;

// var media = (nota1 + nota2 + nota3 + nota4) / 4;

// if ( media >= 7){
//     console.log("Você foi aprovado!");
//     console.log("Obteve a média de " + media);
// }
// else{
//     console.log("Você não foi aprovado");
//     console.log("Sua média foi " + media + " ,inferior a '7'");
// }

var n1 = 2;
var n2 = 8;
var n3 = 7;
var n4 = 9;

var media = (n1 + n2 + n3 + n4) / 4;
var conceito = ""

if (media >= 9){
    conceito = "Excelente";
}
else if (media >= 8){
    conceito = "Ótimo";
}
else if (media >= 7){
    conceito = "Bom";
}
else{
    conceito = "Ruim";
}

console.log("Conceito: " + conceito);
console.log ("Média obtida nos 4 semestres de: " + parseInt(media));

switch (conceito){
    case "Excelente":
        console.log("Parabéns, você é pica de ouro!");
        break;
    case "Ótimo":
        console.log("Você está ficando dahora bruxão");
        break;
    case "Bom":
        console.log("É... Você passou com a água batendo na bunda, mas foi...");
        break;
    case "Ruim":
        console.log("Ah burro! Vai estudar mais filho, se lascou bonito");
        break;
    default:
        console.log("Houve algum erro!");
        break;
}
    