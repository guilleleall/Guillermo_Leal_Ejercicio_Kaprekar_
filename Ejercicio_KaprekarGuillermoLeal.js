function calcularKaprekar(numero) {
  if (numero === 6174) {
    return 0;
  }

  let cuenta = 0;
  let kaprekarConst = 6174;

  while (numero !== kaprekarConst) {
    let numNormal = numero.toString().padStart(4, '0'); // Asegurarse de que hay 4 dígitos
    let maxNum = parseInt([...numNormal].sort((a, b) => b - a).join(''), 10);
    let minNum = parseInt([...numNormal].sort((a, b) => a - b).join(''), 10);
    numero = maxNum - minNum;
    cuenta++;
    console.log(`Calculando kaprekar del número ${maxNum} - ${minNum} = ${numero}`);
  }

  console.log(`El número de intentos ha sido ${cuenta}`);
  return cuenta;
}


numeroUsuario = 4576; //Poner el número que deseemos
calcularKaprekar(numeroUsuario);