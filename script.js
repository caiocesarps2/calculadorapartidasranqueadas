function winsAndDefeats (wins, defeats){
    let result = wins - defeats;
    return result;
}

let finalResult = winsAndDefeats(95, 1)
let rank;

if (finalResult <= 10) rank = "Ferro";
if (finalResult >= 11 && finalResult <= 20) rank = "Bronze";
if (finalResult >= 21 && finalResult <= 50) rank = "Prata";
if(finalResult >= 51 && finalResult <= 80) rank = "Ouro";
if(finalResult >= 81 && finalResult <= 90) rank = "Diamante";
if( finalResult >= 91 && finalResult <= 100) rank = "Lendário";
else rank = "Imortal";

console.log(`O Herói tem de saldo de ${finalResult} está no nível de ${rank}`);


