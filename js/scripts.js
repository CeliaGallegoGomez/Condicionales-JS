function ageBiggerThanTen(name, age) {
  if (age > 18) {
    console.log("Hola " + name + ", " + "eres mayor de edad.");
  } else {
    console.log("Hola " + name + ", " + "eres menor de edad.");
  }
}

ageBiggerThanTen("María", 79);

function biggerNumber(numA, numB) {
  if (numA > numB) {
    console.log(numA);
  } else {
    console.log(numB);
  }
}

biggerNumber(9, 11);

function numberPositiveNegativeZero(number) {
  if (number > 0) {
    console.log(number + " es positivo.");
  } else if (number < 0) {
    console.log(number + " es negativo.");
  } else if (number === 0) {
    console.log(number + " es igual a 0");
  }
}

numberPositiveNegativeZero(0);

function gradesAverage(numberA, numberB, numberC) {
  if ((numberA + numberB + numberC) / 3 <= 5) {
    console.log("Suspenso");
  } else if (
    (numberA + numberB + numberC) / 3 > 5 &&
    (numberA + numberB + numberC) / 3 > 8
  ) {
    console.log("Matrícula de Honor");
  } else if (
    (numberA + numberB + numberC) / 3 > 5 &&
    (numberA + numberB + numberC) / 3 < 8
  ) {
    console.log("Aprobado");
  }
}

gradesAverage(8, 8, 8);

function threeNumbers(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(num1);
  } else if (num2 > num1 && num2 > num3) {
    console.log(num2);
  } else if (num3 > num1 && num3 > num2) {
    console.log(num3);
  }
}

threeNumbers(9, 37, 15);

function divisibleNumber(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("Es divisible por ambos");
  } else if (num % 3 === 0) {
    console.log("Es divisible por 3");
  } else if (num % 5 === 0) {
    console.log("Es divisible por 5");
  } else {
    console.log(num);
  }
}

divisibleNumber(15);

function parImpar(num) {
  if (num % 2 === 0) {
    console.log("Es un número par.");
  } else {
    console.log("Es un número impar.");
  }
}

parImpar(35);

function yearBisiesto(year) {
  if (year % 4 === 0 && year % 400 === 0) {
    console.log("Es un año bisiesto");
  } else if (year % 100 !== 0) {
    console.log("No es un año bisiesto");
  }
}

yearBisiesto(2023);
