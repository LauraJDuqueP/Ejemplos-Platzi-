function cuenta(x) {
  let suma = 0;
  for (let i = 0; i <= x; i++) {
    console.log(suma);
    suma += 1;
  }
}
cuenta(5);
//////////////////////////////////  muestra los numeros desde 0 hasta el que le pasemos

function permuta(num1, num2) {
  console.log(`Los numeros son ${num1} y ${num2}`);
  console.log(
    `Es decir ${num1} ${num2} y permutados quedarian asi ${num2} ${num1}`
  );
}
permuta(2, 3);

////////////////// cambia los numeros de posición

function sumaDeDos(x, y) {
  let suma = x + y;
  if (suma < 0) {
    suma = suma * -1;
    return suma;
  }
  return suma;
}
console.log(sumaDeDos(2, -3));

///////////////////////  Suma loss numeros sin importar si son positivos o negativos

function numero(x) {
  if (x < 0) {
    console.log(`El numero ${x} es negativo`);
  }
  if (x > 0) {
    console.log(`El numero ${x} es positivo`);
  }
  if (x === 0) {
    console.log(`El numero ${x} es nulo`);
  }
}
numero(2);
numero(-2);
numero(0);

/////////////////////////// Me dice si el numero es positivo, negatvio o nulo.

function EsPrimo(x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return `Este numero NO es primo`;
    }
  }
  return `Este numero es primo `;
}
console.log(EsPrimo(10));
console.log(EsPrimo(29));

////////////////  Me dice si es numero es primo o no

var primero = { nombre: "Laura", apellido: "Duque", edad: 29 };

var segundo = { nombre: "Jose", apellido: "Garzon", edad: 28 };

function datos(persona) {
  console.log(
    `Hola mi nombre es ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años}`
  );
}
datos(primero);
datos(segundo);

function LetrasEnApellido(persona) {
  var { nombre } = persona;
  console.log(nombre.length);
}

LetrasEnApellido(primero);
LetrasEnApellido(segundo);

//////////////////////////// Tengo 2 objetos con datos. la primera funcion me muestra esos datos
//////////////////////////// y la segunfa me devuelve un arreglo por medio del .length que me da la cantidad de
/////////////////////////// letras del apellido

var segundo = { nombre: "Jose", apellido: "Garzon", edad: 28 };

function cumple(persona) {
  return {
    ...persona,
    edad: 12,
  };
  // persona.edad += 1

  // edad: persona.edad +1;
  // persona.edad += 1;
}

console.log(primero);
console.log(cumple(primero));
console.log(primero);

///////////////////////
// comparando variables y objetos ---- y cambiando la edad solo por el momento de la funcion. sin alterar el dto siempre

var primero = {
  nombre: "Laura",
  apellido: "Duque",
  edad: 29,
  peso: 54,
  ingeniero: true,
  cocinero: true,
  cantante: true,
  dj: false,
  guitarrista: false,
  drone: false,
};

var segundo = {
  nombre: "Jose",
  apellido: "Garzon",
  edad: 29,
  peso: 70,
  ingeniero: false,
  cocinero: true,
  cantante: false,
  dj: false,
  guitarrista: true,
  drone: true,
};

function profesion(persona) {
  console.log(`${persona.nombre} es: `);
  if (persona.ingeniero) {
    console.log("Ingeniero");
  }
  if (persona.cocinero) {
    console.log("Cocinero");
  }
  if (persona.cantante) {
    console.log("Cantante");
  }
  if (persona.dj) {
    console.log("Dj");
  }
  if (persona.guitarrista) {
    console.log("Guitarrista");
  }
  if (persona.drone) {
    console.log("Piloto de drone");
  }
}

function MayorEdad(persona) {
  if (persona.edad >= 18) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

profesion(primero);
profesion(segundo);

MayorEdad(primero);
MayorEdad(segundo);

/////////////////////////////////////////////////////// 2 funciones de mostrar la profesion y decir si es mayor de edad

// funcion mayor de edad con arrow function

const May_arrow = ({ edad }) => edad > 18; // esto esta diciendo que retorne true si el valor dentro de la propiedad edad
// es mayor a 18 o false si el valor es menor a 18

console.log(May_arrow(primero));
console.log(May_arrow(segundo));

//////////////////// for ... vamos a hacer un ejepmlo donde la persona durante 365 dias va a realizar deporte o a comer chatarra y con eso
///////////////////         pierde o gana peso

console.log(`


Al inicio del año ${primero.nombre} pesa ${primero.peso} kg`);
console.log(`Al inicio del año ${segundo.nombre} pesa ${segundo.peso} kg`);

const aumenta_peso = (x) => (x.peso += 0.2);
const pierda_peso = (x) => (x.peso -= 0.2);

function cambiar_peso(x) {
  for (let i = 0; i <= 365; i++) {
    let ramdom = Math.random();
    if (ramdom < 0.25) {
      aumenta_peso(x);
    } else if (ramdom < 0.5) {
      pierda_peso(x);
    }
  }
}

cambiar_peso(primero);
cambiar_peso(segundo);

console.log(`


Al final del año ${primero.nombre} pesa ${primero.peso.toFixed(2)} kg`);
console.log(
  `Al final del año ${segundo.nombre} pesa ${segundo.peso.toFixed(2)} kg`
);

/////////////////////// whie ... el ejemplo que vamos a manejar es que la persona tiene que bajar 3 kilos y el programa nos tiene que decir
//////////////////////            cuantos dias o cuanto tiempo le toma bajar esos kilos- la probabilidad de que coma y aumente de peso es del 30% y
//////////////////////            de que haga ejercicio es del 40% tambien

function dieta(persona) {
  let dias = 0;
  let x = persona.peso - 3;
  //console.log(x.toFixed(2));
  while (persona.peso > x) {
    let ramdom = Math.random();
    if (ramdom < 0.2) {
      aumenta_peso(persona);
    } else if (ramdom < 0.4) {
      pierda_peso(persona);
    }
    dias += 1;
  }
  console.log(`El peso de ${persona.nombre} ahora es de ${persona.peso}`);
  console.log(dias);
}

dieta(primero);
