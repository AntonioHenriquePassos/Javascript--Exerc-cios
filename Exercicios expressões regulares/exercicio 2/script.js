const terminaComID = /ID$/; //PARA QQR COISA Q TERMINE COM ID.
//const terminaComID = /\d+ID\b/; SIGNIFICA QQER NUMERO Q TENHA NO FINAL (\b) o ID.


console.log(terminaComID.test("shausashaushaID"));
console.log(terminaComID.test("shausashaushaIDsasas"));
console.log(terminaComID.test(1478));