const Ur = "https://pokeapi.co/api/v2/";
const identi = "pokemon/:id";

const ParUnidos = `${Ur}${identi.replace(":id", 1)}`;
const Cr = { crossDomain: true };

// $.get(ParUnidos, Cr, function (pokemon) {
//   console.log(
//     `Hola soy el pokemon ${pokemon.name}. Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo `
//   );
// });

///// haver multiples request

// function obt_poke(id) {
//   const ParUnidos = `${Ur}${identi.replace(":id", id)}`;
//   $.get(ParUnidos, Cr, function (pokemon) {
//     console.log(
//       ` Hola soy el pokemon ${pokemon.name}. Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo`
//     );
//   });
// }
// obt_poke(1);
// obt_poke(3);

/// para garantizar el orden de las peticiones

function ulala(id, callback) {
  const ParUnidos = `${Ur}${identi.replace(":id", id)}`;
  $.get(ParUnidos, Cr, function (pokemon) {
    console.log(
      `Hola soy el pokemon ${pokemon.name}. Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo`
    );
    if (callback) {
      callback();
    }
  });
}

// ulala(1, function () {
//   ulala(2, function () {
//     ulala(3, function () {
//       ulala(4, function () {
//         ulala(5, function () {
//           ulala(6, function () {
//             ulala(7);
//           });
//         });
//       });
//     });
//   });
// });

function error_fuera(id, callback) {
  const ParUnidos = `${Ur}${identi.replace(":id", id)}`;

  $.get(ParUnidos, Cr, callback).fail(function () {
    console.log(
      `Sucedio un error. El programa no se puedo ejecutar en su totalidad`
    );
  });
}

// error_fuera(1, function (pokemon) {
//   console.log(
//     `Hola soy el pokemon ${pokemon.name}. Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo`
//   );

//   error_fuera(2, function (pokemon) {
//     console.log(
//       `Hola soy el pokemon ${pokemon.name}. Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo`
//     );
//     error_fuera(0, function (pokemon) {
//       // el 0 no existe. Es un ejemplo para el fail
//       console.log(
//         `Hola soy el pokemon ${pokemon.name}. Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo`
//       );
//       error_fuera(4, function (pokemon) {
//         console.log(
//           `Hola soy el pokemon ${pokemon.name}. Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo`
//         );
//         error_fuera(5, function (pokemon) {
//           console.log(
//             `Hola soy el pokemon ${pokemon.name}. Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo`
//           );
//         });
//       });
//     });
//   });
// });

function Promes(p) {
  return new Promise(function (resolve, reject) {
    const r = `${Ur}${identi.replace(":id", p)}`;

    $.get(r, Cr, function (o) {
      resolve(o);
    }).fail(() => reject(p));
  });
}

// Promes(1)
//   .then(function (pokemonsito) {
//     console.log(
//       `Hola soy el pokemon ${pokemonsito.name}. Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo`
//     );
//   })
//   .catch(function (o) {
//     console.log(`Lo sentimos la entrada ${o} no es valida `);
//   });
// Promes(2)
//   .then(function (pokemonsito) {
//     console.log(
//       `Hola soy el pokemon ${pokemonsito.name}. Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo`
//     );
//   })
//   .catch(function (o) {
//     console.log(`Lo sentimos la entrada ${o} no es valida `);
//   });
// Promes(3)
//   .then(function (pokemonsito) {
//     console.log(
//       `Hola soy el pokemon ${pokemonsito.name}. Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo`
//     );
//   })
//   .catch(function (o) {
//     console.log(`Lo sentimos la entrada ${o} no es valida `);
//   });
// Promes(0)
//   .then(function (pokemonsito) {
//     console.log(
//       `Hola soy el pokemon ${pokemonsito.name}. Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo`
//     );
//   })
//   .catch(function (o) {
//     console.log(`Lo sentimos la entrada ${o} no es valida `);
//   });

// Promise.all(Promes(1), Promes(2), Promes(3), Promes(0))
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (p) {
//     console.log(`Lo sentimos la entrada  no es valida`);
//   });
// no logro que se muestre el mensaje cuando la llamada es exitosa

/// promesas encadenadas

// Promes(1)
//   .then((personajePokemon) => {
//     console.log(
//       `Hola soy el pokemon ${personajePokemon.name}. Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo`
//     );
//     return Promes(2);
//   })
//   .then((personajePokemon) => {
//     console.log(
//       `Hola soy el pokemon ${personajePokemon.name}. Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo`
//     );
//     return Promes(3);
//   })
//   .then((personajePokemon) => {
//     console.log(
//       `Hola soy el pokemon ${personajePokemon.name}. Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo`
//     );
//     return Promes(4);
//   })
//   .then((personajePokemon) => {
//     console.log(
//       `Hola soy el pokemon ${personajePokemon.name}. Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo`
//     );
//     return Promes(0);
//   })
//   .then((personajePokemon) => {
//     console.log(
//       `Hola soy el pokemon ${personajePokemon.name}. Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo`
//     );
//   })
//   .catch(function id() {
//     console.log(`Lo sentimos la entrada para Pokemon no es valida`);
//   });

//// Multiples Promesas en Paralelo

// let i = [1, 2, 3, 4, 5, 6, 7];
// let Promesotas = i.map(function (id) {
//   return Promes(id);
// });

// Promise.all(Promesotas)
//   .then(function (personas) {
//     console.log(personas);
//     for (let j = 0; j < personas.length; j++) {
//       console.log(
//         `Hola soy el pokemon ${personas[j].name}. Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo`
//       );
//     }
//   })
//   .catch(function (id) {
//     console.log(id);
//     console.log(
//       `Lo sentimos la entrada ${id} para Pokemon no es valida. Verifica el dato`
//     );
//   });

// usando async - await .. la idea de esto es hacer multiples promesas en paralelo
// la idea es que hasta que no se resuelvan todas las promesas el codigo no muestra el resultado

// function Promes(p) {
//   return new Promise(function (resolve, reject) {
//     const r = `${Ur}${identi.replace(":id", p)}`;

//     $.get(r, Cr, function (o) {
//       resolve(o);
//     }).fail(() => reject(p));
//   });
// }

async function quePokemositoEs() {
  let identificados = [1, 2, 3, 4, 5, 6, 7];
  let promesas = identificados.map((id) => Promes(id));

  try {
    let personajes = await Promise.all(promesas);
    console.log(personajes);
    for (let i = 0; i < personajes.length; i++) {
      console.log(
        `Hola, soy el pokemon ${personajes[i].name} y Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo`
      );
    }
  } catch (id) {
    console.log(id);
    console.log(
      `lo sentimos la entrada ${id} no es valida, por favor intenta una nueva`
    );
  }
}

quePokemositoEs();
