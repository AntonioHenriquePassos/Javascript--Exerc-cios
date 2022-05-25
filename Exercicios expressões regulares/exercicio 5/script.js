const validaUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validaUsuario.test("lalala-15"));
console.log(validaUsuario.test("lalaaaaaaaaaaaaaaaaaaaasasala-15"));
console.log(validaUsuario.test("-5"));
