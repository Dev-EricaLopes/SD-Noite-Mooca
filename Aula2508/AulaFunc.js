function ola()
{
    console.log("oi, tudo bem?")
}
ola()

function ola(nome)
{
    console.log("oi, tudo bem? " + nome + "!")
}
ola("ana")
ola("antonio")

function soma(a,b)  
{
    return a + b; 
}
const resp = soma(2,7)
console.log(resp)
console.log(soma(15,7))

const dobro = function (n)
{
    return n * 2;
}
const res = dobro(7);
console.log(res);

const triplo = function (n = 5)
{
    return n * 3;
}
console.log(triplo());
console.log(triplo(3));