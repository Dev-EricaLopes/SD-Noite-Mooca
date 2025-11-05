console.log('Eu primeiro')
console.log('Eu agora')
console.log('Sempre vou aparecer por último..')

const a = 2 + 7
const b = 5  
console.log(a + b) 

function demorada(){
const atualMais2Segundos = new Date().getTime() + 2000
//não esqueça do ;, única instrução no corpo do while
while (new Date().getTime() <= atualMais2Segundos);
const d = 8 + 4
return d
}
const a1 = 2 + 3
const b1 = 5 + 9
const d1 = demorada()
/*
o valor de e não depende do valor devolvido
pela função demorada.
 */
const e = 2 + a1 + b1
console.log(e)