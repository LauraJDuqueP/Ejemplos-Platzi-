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
hell(1, function () {
  hell(2, function () {
    hell(3, function () {
      hell(4, function () {
        hell(5, function () {
          hell(6, function () {
            hell(7);
          });
        });
      });
    });
  });
});
