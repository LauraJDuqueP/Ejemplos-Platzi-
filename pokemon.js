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

ulala(1, function () {
  ulala(2, function () {
    ulala(3, function () {
      ulala(4, function () {
        ulala(5, function () {
          ulala(6, function () {
            ulala(7);
          });
        });
      });
    });
  });
});
