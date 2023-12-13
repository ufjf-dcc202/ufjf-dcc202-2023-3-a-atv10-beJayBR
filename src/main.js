import { setMaria, setJoao, getMaria, getJoao } from "./joaoEMaria";

console.log("MAIN");

setJoao(-4);
setMaria(8);

let maria = getMaria();
let joao = getJoao();
console.log(maria,joao);
