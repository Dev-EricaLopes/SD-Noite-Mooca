const nome = ["ana",
                                        "antonio"];

const apenasA = nome.filter((n) => n.startsWith("a"));
console.log(apenasA);

const res = nome.map((nome) => nome.charAt(0))
console.log(res);

const todosComA = nome.every((n)=>n.startsWith("a"));
console.log(todosComA);

const valores = [1,2,3,8,5];
const soma = valores.reduce((ac, v) => ac + v, 0);
console.log(soma);


