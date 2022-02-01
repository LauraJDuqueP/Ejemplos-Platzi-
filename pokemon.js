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

error_fuera(1, function (pokemon) {
  console.log(
    `Hola soy el pokemon ${pokemon.name}. Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo`
  );

  error_fuera(2, function (pokemon) {
    console.log(
      `Hola soy el pokemon ${pokemon.name}. Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo`
    );
    error_fuera(0, function (pokemon) {
      // el 0 no existe. Es un ejemplo para el fail
      console.log(
        `Hola soy el pokemon ${pokemon.name}. Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo`
      );
      error_fuera(4, function (pokemon) {
        console.log(
          `Hola soy el pokemon ${pokemon.name}. Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo`
        );
        error_fuera(5, function (pokemon) {
          console.log(
            `Hola soy el pokemon ${pokemon.name}. Podras ver todos mis poderes cuando mi programadora aprenda como hacerlo`
          );
        });
      });
    });
  });
});
