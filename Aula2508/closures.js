let umaFuncao = function() {
    console.log("Fui criada por uma expressão de função");
};
umaFuncao();

function f(funcao) {
    funcao();
}

function g() {
    function outrafuncao() {
        console.log("Fui criada pela função g");
    }
    return outrafuncao;
}

// Chama f com uma função anônima
f(function() {
    console.log("Executando uma função f");
});

// Chama g e executa o resultado
const gResult = g();
gResult();

// Chama g e executa o resultado diretamente
g()();

// Chama f passando o resultado de g (que é uma função)
f(g());

// Chama f passando o resultado da execução de g()(), que é undefined, então vai dar erro
try {
    f(g()());
} catch (e) {
    console.error("Erro: argumento passado para f não é uma função.");
}

// Chama f passando 1, que não é uma função, então vai dar erro
try {
    f(1);
} catch (e) {
    console.error("Erro: argumento passado para f não é uma função.");
}