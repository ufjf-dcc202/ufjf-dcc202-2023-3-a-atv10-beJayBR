let joao = 1;
let maria = 2;

function getMaria(){
    return maria;
}

function getJoao(){
    return joao;
}

function setMaria(valor){
    if(valor > 0){
        maria = valor;
    } else {
        maria = 0;
    }
}

function setJoao(valor){
    if(valor > 0){
        joao = valor;
    } else {
        joao = 0;
    }
}

function deMariaParaJoao(){
    joao = joao + maria;
    maria = 0;
}

function deJoaoParaMaria(){
    maria = joao + maria;
    joao = 0;
}

export { getJoao, getMaria, setJoao, setMaria, deJoaoParaMaria, deMariaParaJoao }