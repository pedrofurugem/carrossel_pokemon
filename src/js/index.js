/* PENSANDO NA LÓGICA

OBJETIVO 1 - quando clicarmos na seta de avançar temos que
mostrar o próximo cartão na lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta
    avançar
    - passo 2 - dar um jeito de indentificar o clique do usuário na seta avançar
    - passo 3 - fazer aparecer o próximo cartão da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que
mostrar o cartão anterior da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta
    voltar
    - passo 2 - dar um jeito de indentificar o clique do usuário na seta voltar
    - passo 3 - fazer aparecer cartão anterior da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder
*/

//passo 1 - pegar o elemento HTML da seta avancar
const setaAvancar = document.getElementById('btn-avancar')
const setaVoltar = document.getElementById('btn-voltar')
const cartoes = document.querySelectorAll('.cartao')//posso deixar essa var fora da função
let cartaoAtual = 0; //contador

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado")
    cartaoSelecionado.classList.remove('selecionado')
}

//outrao forma de fazer por parâmetro
function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado")
}

function addOpacidade(){
    const primeiraImagem = cartaoAtual === 0;
    if(primeiraImagem){
        setaVoltar.classList.add('opacidade')
    }else{
        setaVoltar.classList.remove('opacidade')
    }

    const ultimaImagem = cartaoAtual !== 0 && cartaoAtual === cartoes.length - 1;
    if(ultimaImagem){
        setaAvancar.classList.add('opacidade')
    }
    else{
        setaAvancar.classList.remove('opacidade')
    }
}

//passo 2 - dar um jeito de indentificar o clique do usuário na seta avançar
setaAvancar.addEventListener('click', function() {
    //verificação e teste
    //console.log("cartão atual: ", cartaoAtual)
    //console.log("cartões ", cartoes.length - 1)
    if(cartaoAtual === cartoes.length - 1) return;

    cartaoAtual++;
    esconderCartaoSelecionado();
    mostrarCartao(cartaoAtual)
    addOpacidade()
})


setaVoltar.addEventListener('click', function() {
    
    if(cartaoAtual === 0) return;

    cartaoAtual--;
    esconderCartaoSelecionado();
    mostrarCartao(cartaoAtual)
    addOpacidade()
})

/* JS
 verificação - if
 esconder  - classList.remove
 contar - ++ --
 mostrar classList.add
*/