const retornaFraseEscolha = /Marca:(Nike|Adidas|Puma|Asics)/;

console.log(retornaFraseEscolha.test("Marca:Nike"));
console.log(retornaFraseEscolha.test("47822Marca:Nike428552"));
console.log(retornaFraseEscolha.test("Marca:a"));
console.log(retornaFraseEscolha.test("d:Nike"));