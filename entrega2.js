function calculadora ( n1, n2, operador) {
   
    var resultado;
  if ( typeof n1 === "number" || typeof n2 === "number" ) {
    console.log ( "n1 & n2 é um numero");
  } else {
    throw new errow ("numero invalido invalido");
  }
  
   switch (operador) {
    case "+":
        resultado = n1 + n2;
        break;
    case "-": 
        resultado = n1 - n2;
        break;
    case "*":
        resultado = n1 * n2;
        break;
    case "/":
        resultado = n1 / n2;
        if ( n2 === 0 ) {
            throw new errow (" a divisao nao pode ser por zero");
        }
        break;
    case "%":
        resultado =  n1 % n2;
        break;
        
        default: {
            throw new errow ("operador invalido");
   }
   }  
}
try {
    console.log(calculadora(5, 25, "+"));
    console.log(calculadora(5, 25, "-")); 
    console.log(calculadora(5, 25, "*")); 
    console.log(calculadora(5, 0, "/")); 
    console.log(calculadora(5, 25, "%")); 
} catch (e) {
    console.log (error.message);
}
