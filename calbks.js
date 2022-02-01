const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

// este metodo me mostrara al personaje que este en 1 traido de la api swapi.dev por eso utilizamos su url
//  y que trabaja conJquery
// puedo definir los parametros que estan en el metodo $.get en variables o mejor constantes
//const x = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`; // esta en 0 para poder visualizar bien el callback hell. El 0 debe cambiarse por un numero // sadra como un error de 404
//const z = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`; // esta en 0 para poder visualizar bien el callback hell. El 0 debe cambiarse por un numero // sadra como un error de 404
const y = { crossDomain: true };

// $.get(z, y, function (persona) {
//   console.log(`Hola yo soy ${persona.name} `);
// });

// $.get(x, y, function (persona) {
//   // esta funcion que cree es el callback
//   console.log(`Hola, yo soy ${persona.name} `);
// });

console.log(`

`);
///////////// ahora voy a llamar a varios personajes al tiempo

function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(url, y, function (persona) {
    console.log(`Hola, yo soy ${persona.name} `);
  });
}
// obtenerPersonaje(1); // esta en 0 para poder visualizar bien el callback hell. El 0 debe cambiarse por un numero // sadra como un error de 404
// obtenerPersonaje(1); // esta en 0 para poder visualizar bien el callback hell. El 0 debe cambiarse por un numero // sadra como un error de 404

function hell(id, callback) {
  const ur = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(ur, y, function (persona) {
    console.log(`Hola, yo soy ${persona.name} `);
    if (callback) {
      callback();
    }
  });
}
// hell(1, function () {
//   hell(2, function () {
//     hell(3, function () {
//       hell(4, function () {
//         hell(5, function () {
//           hell(6, function () {
//             hell(7);
//           });
//         });
//       });
//     });
//   });
// });

////como solucionar cuando aparece un error que no deja ejecutar completo el problema con callbacks

function FueraError(id, callback) {
  const ur = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(ur, y, callback).fail(function () {
    console.log(
      `Sucedio un error. No se puede completar el protocolo de ejecucion `
    );
  });
}

// FueraError(1, function (persona) {
//   console.log(`Hola, yo soy ${persona.name} `);

//   FueraError(2, function (persona) {
//     console.log(`Hola, yo soy ${persona.name} `);

//     FueraError(17, function (persona) {
//       // el personaje 17 no esta en la pag asi que hará saltar el error
//       console.log(`Hola, yo soy ${persona.name} `);

//       FueraError(4, function (persona) {
//         console.log(`Hola, yo soy ${persona.name} `);

//         FueraError(5, function (persona) {
//           console.log(`Hola, yo soy ${persona.name} `);

//           FueraError(6, function (persona) {
//             console.log(`Hola, yo soy ${persona.name} `);

//             FueraError(7, function (persona) {
//               console.log(`Hola, yo soy ${persona.name} `);
//             });
//           });
//         });
//       });
//     });
//   });
// });

/// vamos a trabajar Promesas ...

function Pro(id) {
  return new Promise(function (resolve, reject) {
    const u = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

    $.get(u, y, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

// Pro(1)
//   .then(function (persona) {
//     console.log(`Hola yo soy ${persona.name}`);
//   })
//   .catch(function (id) {
//     console.log(
//       `Lo sentimos no se encontro un resultado, intente con otro numero`
//     );
//   });
// Pro(2)
//   .then(function (persona) {
//     console.log(`Hola yo soy ${persona.name}`);
//   })
//   .catch(function (id) {
//     console.log(
//       `Lo sentimos no se encontro un resultado, intente con otro numero`
//     );
//   });
// Pro(3)
//   .then(function (persona) {
//     console.log(`Hola yo soy ${persona.name}`);
//   })
//   .catch(function (id) {
//     console.log(
//       `Lo sentimos no se encontro un resultado, intente con otro numero`
//     );
//   });
// Pro(17)
//   .then(function (persona) {
//     console.log(`Hola yo soy ${persona.name}`);
//   })
//   .catch(function (id) {
//     console.log(
//       `Lo sentimos no se encontro un resultado, intente con otro numero`
//     );
//   });

function jiji(a, b, c, d) {
  let g = [a, b, c, d];
  for (let i = 1; i <= g.length; i++) {
    function Pro([i]) {
      return new Promise(function (resolve, reject) {
        const u = `${API_URL}${PEOPLE_URL.replace(":id", [i])}`;

        $.get(u, y, function (data) {
          resolve(data);
        }).fail(() => reject([i]));
      });
    }
    Pro([i])
      .then(function (data) {
        console.log(`Hola yo soy ${data.name}`);
      })
      .catch(function ([i]) {
        console.log(
          `Lo sentimos no se encontro un resultado, intente con otro numero`
        );
      });
  }
} //

// jiji(1, 2, 3, 4); // aqui intente con un for pasar por un array los id para que se vieran en orden peeero para mi sorpresa
// creo que la peticion de jiji se pasa completa y devuelve todo como quiere el JS :(
// la solucion esta en Promise.all

Promise.all([Pro(1), Pro(2), Pro(3), Pro(4)])
  .then(function (persona) {
    console.log(`Hola yo soy ${persona.name}`);
  })
  .catch(function (id) {
    console.log(
      `Lo sentimos no se encontro un resultado, intente con otro numero`
    );
  }); /// tengo un error porque me salta undefined
