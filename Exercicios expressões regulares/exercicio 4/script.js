const validaIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validaIP.test("148.8.7.9"));
console.log(validaIP.test("148.858.7888"));
console.log(validaIP.test("ahsahshas148.8.7.9hsaahsha"));