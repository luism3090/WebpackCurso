//var mensaje = require('./personas.js');

//alert(mensaje);

// ------------------------------------------------------

// var usuario = require('./personas.js');

// alert(usuario.nombre);

// ------------------------------------------------------

// var saludo = require('./personas.js');

// alert(saludo());


// ------------------------------------------------------

//var people = require('./personas.js');

// console.log(people);

// --------------------------------------------------

// var people = require('./personas.js');

// var $ = require('jquery');

//$("body").append("<h1>"+people[1].nombre+"</h1>");

// -----------------------------------------------------

// var people = require('./personas.js');

// var $ = require('jquery');

/* usando sintaxis de babel para importar librerias y archivos js
Nota para ello debemos tener instalado babel 

*/

import $ from 'jquery';
import people from './personas.js';



require('../css/style.css');

$.each(people,function(key,value)
{
	$("body").append("<h1>"+people[key].nombre+"</h1>");
});

// for(var x=0; x<people.length;x++)
// {
// 	$("body").append("<h1>"+people[x].nombre+"</h1>");
// }

require('../css/segundo.css');


// require('!style-loader!css-loader!../css/style.css');






//alert(datos());

