import { setMaria, setJoao, getMaria, getJoao, deJoaoParaMaria, deMariaParaJoao } from "./joaoEMaria";

console.log("MAIN");

setJoao(-4);
setMaria(8);

let maria = getMaria();
let joao = getJoao();
console.log(maria,joao);

deJoaoParaMaria();

maria = getMaria();
joao = getJoao();
console.log(maria,joao);