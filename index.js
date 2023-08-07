'use strict';
/*
 *  Sueiro
 */

class Producto {
    constructor(id, nombre, descripcion, precio, imagen, categoria) {
      this.id = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
      this.imagen = imagen;
      this.categoria = categoria;
    }
  }

  let productos = [
    new Producto(
      1,
      'Cabernet Sauvignon',
      'Cuerpo completo, grosella negra, especias, taninos firmes.',
      10,
      'img/ejemplo.png',
      'Tinto'
    ),
    new Producto(
        2,
        'Merlot',
        'Suave, afrutado, ciruela, chocolate, vainilla.',
        10,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        3,
        'Pinot Noir',
        'Elegante, ligero, frutos rojos, tierra, especias.',
        10,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        4,
        'Syrah',
        'Audaz, especiado, moras, pimienta, notas ahumadas.',
        10,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        5,
        'Malbec',
        'Robusto, frutado, ciruela, zarzamora, taninos firmes.',
        10,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        6,
        'Tempranillo',
        'España, cereza, cuero, vainilla, acidez equilibrada.',
        10,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        7,
        'Sangiovese',
        'Italiano, cereza, ciruela, hierbas, taninos moderados.',
        20,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        8,
        'Zinfandel',
        'Rico, afrutado, moras, especias, toque dulce.',
        20,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        9,
        'Carmenere',
        'Chile, pimientos rojos, frutos oscuros, especias, textura suave.',
        20,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        10,
        'Nebbiolo',
        'Italiano, cereza, rosa, regaliz, taninos astringentes.',
        20,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        11,
        'Grenache',
        'Medio cuerpo, frutos rojos, especias, toque dulce.',
        20,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        12,
        'Petite Sirah',
        'Intenso, robusto, arándanos, ciruelas, chocolate, especias.',
        20,
        'img/ejemplo.png',
        'Tinto',
    ),
    new Producto(
        13,
        'Chardonnay',
        'Cuerpo, manzana, pera, melocotón, roble, mantequilla.',
        25,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        14,
        'Sauvignon Blanc',
        'Refrescante, cítricos, hierbas, maracuyá, notas herbáceas.',
        25,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        15,
        'Riesling',
        'Aromático, ácido, frutas tropicales, cítricos, toques minerales.',
        25,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        16,
        'Pinot Grigio',
        'Seco, ligero, pera, manzana, cítricos, almendra.',
        25,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        17,
        'Gewürztraminer',
        'Fragante, lichis, rosas, especias, sabores tropicales.',
        25,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        18,
        'Chenin Blanc',
        'Versátil, melocotón, pera, miel, acidez refrescante.',
        25,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        19,
        'Viognier',
        'Exuberante, albaricoque, melocotón, flores blancas, toque especiado.',
        30,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        20,
        'Albariño',
        'Fresco, crujiente, cítricos, melocotón, mariscos, final salino.',
        30,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        21,
        'Grüner Veltliner',
        'Austria, pimienta blanca, cítricos, notas herbáceas, acidez vibrante.',
        30,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        22,
        'Muscadet',
        'Francia, limpio, fresco, notas cítricas, mariscos, final mineral.',
        30,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        23,
        'Vermentino',
        'Ligero, cítricos, melón, hierbas, mariscos, acidez brillante.',
        30,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto(
        24,
        'Sémillon',
        'Notas cítricas, melocotón, miel, cuerpo medio, acidez equilibrada.',
        30,
        'img/ejemplo.png',
        'Blanco',
    ),
    new Producto( 
        25,
        'Rosé de Provence',
        'Provenza, fresco, frutos rojos, notas florales, equilibrado.',
        30,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        26,
        'White Zinfandel',
        'Afrutado, dulce, fresas, frambuesas, fácil de beber.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        27,
        'Shiraz Rosado',
        'Especiado, frutas rojas, cuerpo medio, acidez refrescante.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        28,
        'Garnacha Rosado',
        'Frutos rojos, fresco, especiado, toque dulce, versátil.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        29,
        'Pinot Noir Rosado',
        'Delicado, frutos rojos, floral, acidez brillante, ligero.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        30,
        'Cabernet Sauvignon Rosado',
        'Elegante, grosella negra, especias, cuerpo medio, refrescante.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        31,
        'Cinsault Rosado',
        'Ligero, fresco, frutas rojas, floral, acidez suave.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        32,
        'Sangiovese Rosado',
        'Italiano, cereza, especias, cuerpo medio, final seco.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        33,
        'Tempranillo Rosado',
        'España, fresas, frutas rojas, especias, acidez equilibrada.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        34,
        'Malbec Rosado',
        'Frutas rojas, floral, especiado, acidez refrescante, final seco.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        35,
        'Merlot Rosado',
        'Suave, frutos rojos, notas herbáceas, equilibrado, fácil de beber.',
        40,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto(
        36,
        'Grenache Rosado',
        'Fresco, frutos rojos, especias, toque dulce, versátil.',
        12,
        'img/ejemplo.png',
        'Rosado',
    ),
    new Producto( 
        37,
        'Champagne',
        'Prestigioso, burbujas finas, manzana, brioche, elegante.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        38,
        'Cava',
        'España, burbujas, manzana, pera, tostado, refrescante.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        39,
        'Prosecco',
        'Italia, burbujas, melocotón, pera, ligero, refrescante.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        40,
        'Franciacorta',
        'Italiano, burbujas, manzana, pera, pan tostado, elegante.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        41,
        "Moscato d'Asti",
        'Dulce, aromático, notas de albaricoque y flores, bajo contenido alcohólico.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        42,
        'Lambrusco',
        'Italiano, semidulce, frutos rojos, burbujas, refrescante.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        43,
        'Crémant de Loire',
        'Francés, burbujas, manzana, cítricos, fresco, elegante.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        44,
        'Sekt',
        'Alemán, burbujas, manzana, cítricos, refrescante, seco o dulce.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        45,
        ' English Sparkling Wine',
        'Inglaterra, burbujas, manzana, cítricos, elegante, creciente calidad.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        46,
        'Blanquette de Limoux',
        'Francés, burbujas, manzana, pera, fresco, más asequible.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        47,
        'Asti Spumante',
        'Italiano, burbujas, albaricoque, melocotón, dulce, bajo contenido alcohólico.',
        12,
        'img/ejemplo.png',
        'Espumoso',
    ),
    new Producto(
        48,
        "Cremant d'Alsace",
        'Francés, burbujas, manzana, pera, pan tostado, elegante.',
        120,
        'img/ejemplo.png',
        'Espumoso',
    ),
];


let total = 0;


function generarCards() {
    const containerId = 'slideContainer';
    const container = document.getElementById(containerId);
    container.innerHTML = '';
  
    const filtroCategorias = document.getElementById('filtroCategorias');
    const categoriaSeleccionada = filtroCategorias.value;
    const productosFiltrados = categoriaSeleccionada === 'Todos' ? productos : productos.map(producto => {
        if (producto.categoria === categoriaSeleccionada) {
          return producto;
        }
      });
      

    productosFiltrados.sort(() => Math.random() - 0.5);
  
    productosFiltrados.forEach(producto => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const circulo = document.createElement('div');
      circulo.classList.add('circulo');
      const imagen = document.createElement('img');
      imagen.src = producto.imagen;
      circulo.appendChild(imagen);
  
      const infoCard = document.createElement('div');
      infoCard.classList.add('info-card');
  
      const nombre = document.createElement('h4');
      nombre.textContent = producto.nombre;
  
      const precio = document.createElement('p');
      precio.classList.add('precio');
      precio.textContent = `$${producto.precio}`;
  
      const categoriaElement = document.createElement('p');
      categoriaElement.textContent = producto.categoria;
  
      const descripcion = document.createElement('p');
      descripcion.textContent = producto.descripcion;
  
      const cantidadDiv = document.createElement('div');
      cantidadDiv.classList.add('cantidad-div');
  
      const cantidad = document.createElement('input');
      cantidad.type = 'number';
      cantidad.value = 1;
      cantidad.min = 1;
      cantidad.classList.add('cantidad');
  
      const masBtn = document.createElement('button');
      masBtn.textContent = '+';
      masBtn.classList.add('mas');
      masBtn.addEventListener('click', () => {
        cantidad.value = parseInt(cantidad.value) + 1;
      });
  
      const menosBtn = document.createElement('button');
      menosBtn.textContent = '-';
      menosBtn.classList.add('menos');
      menosBtn.addEventListener('click', () => {
        const currentValue = parseInt(cantidad.value);
        if (currentValue > 1) {
          cantidad.value = currentValue - 1;
        }
      });
  
      cantidadDiv.appendChild(menosBtn);
      cantidadDiv.appendChild(cantidad);
      cantidadDiv.appendChild(masBtn);
  
      const agregarCarrito = document.createElement('a');
      agregarCarrito.href = '#';
      agregarCarrito.classList.add('u-full-width', 'button-primary', 'button', 'input', 'agregar-carrito');
      agregarCarrito.dataset.id = producto.id;
      agregarCarrito.textContent = 'Agregar al Carrito';
  
      infoCard.appendChild(nombre);
      infoCard.appendChild(precio);
      infoCard.appendChild(categoriaElement);
      infoCard.appendChild(descripcion);
      infoCard.appendChild(cantidadDiv);
      infoCard.appendChild(agregarCarrito);
  
      card.appendChild(circulo);
      card.appendChild(infoCard);
  
      container.appendChild(card);
    });
  }
  const filtroCategorias = document.getElementById('filtroCategorias');
  filtroCategorias.addEventListener('change', generarCards);
  
  generarCards();
  
  
  
  
  
  
  




$(document).ready(function() {
    $('.slideHorizontal').slick({
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      slidesToShow: 3,
      slidesToScroll: 1
    });
  });
  
  const agregarCarritoButtons = document.querySelectorAll('.agregar-carrito');
  
  agregarCarritoButtons.forEach(button => {
    button.addEventListener('click', function() {
      const buttonText = this.textContent; 
      this.textContent = '<i class="fa-regular fa-circle-check"></i>';
      setTimeout(() => {
        this.textContent = buttonText;
      }, 1000);
    });
  });
  






const carritoid = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

eventslisteners();

function eventslisteners() 
{
    cursos.addEventListener('click', comprarCurso);

    carritoid.addEventListener('click', eliminarCurso);

    vaciarCarritoBtn.addEventListener('click', vaciarcarrito);

    document.addEventListener('DOMContentLoaded', leerLS)

}

let contador = 0;

function comprarCurso(e) 
{
    e.preventDefault();
    if (e.target.classList.contains("agregar-carrito")) {
        const curso = e.target.parentElement.parentElement;
        leerDatosCurso(curso);
        contador++; 
        document.getElementById('contador-carrito').textContent = contador;
    }    
}


function leerDatosCurso(curso) {
    const infoCurso = {
      imagen: curso.querySelector('img').src,
      titulo: curso.querySelector('h4').textContent,
      precio: curso.querySelector('.precio').textContent,
      id: curso.querySelector('a').getAttribute('data-id'),
      cantidad: parseInt(curso.querySelector('.cantidad').value)
    };
    insertarCurso(infoCurso);
  }
  



function insertarCurso(curso) {
    const precio = parseFloat(curso.precio.substring(1));
    const subtotal = precio * curso.cantidad;
    total += subtotal;
    const row = document.createElement('tr');
    row.insertAdjacentHTML('beforeend', `
      <td><img src="${curso.imagen}" width="100"></td>
      <td>${curso.titulo}</td>
      <td>${curso.precio}</td>
      <td>${curso.cantidad}</td> <!-- Nueva línea -->
      <td><a href="#" class="borrar-curso" data-id="${curso.id}"><i class="fa-regular fa-circle-xmark"></i></a></td>
      `);
    listaCursos.appendChild(row);
    guardarCursoLocalStorage(curso);
    document.getElementById('precio-total').textContent = `$${total.toFixed(2)}`;
  }
  
  

function eliminarCurso(e) {
    e.preventDefault();
  
    let curso, cursoId;
  
    if (e.target.classList.contains('fa-circle-xmark')) {
      curso = e.target.parentElement.parentElement.parentElement;
      cursoId = curso.querySelector('a').getAttribute('data-id');
      const cantidadCurso = parseInt(curso.querySelector('td:nth-child(4)').textContent);
      const precioCurso = parseFloat(curso.querySelector('td:nth-child(3)').textContent.substring(1));
      const subtotalCurso = precioCurso * cantidadCurso;
      total -= subtotalCurso;
  
      eliminarCursoLS(cursoId);
  
      contador--;
      document.getElementById('contador-carrito').textContent = contador;
  
      document.getElementById('precio-total').textContent = `$${total.toFixed(2)}`;
  
      curso.remove();

    }
  }
  
  
  



function guardarCursoLocalStorage(curso)
{
    let cursos;
    cursos = obtenerCursosLocalStorage();

    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));
}



function obtenerCursosLocalStorage() 
{
    let cursosLS;
    
    if (localStorage.getItem('cursos') === null) {
        cursosLS = [];        
    } else {
        cursosLS = JSON.parse(localStorage.getItem('cursos'));
    }
    return cursosLS;
}


function leerLS() {
    let cursosLS;
  
    cursosLS = obtenerCursosLocalStorage();
  
    cursosLS.forEach(function(curso) {
    
      const row = document.createElement("tr");
      row.insertAdjacentHTML("beforeend", `
        <td><img src="${curso.imagen}" width="100"></td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>
      `);
      listaCursos.appendChild(row);
    });
  }
  


function eliminarCursoLS(curso) {
    let cursosLS;
   
    cursosLS = obtenerCursosLocalStorage();
    
    cursosLS = cursosLS.filter(cursoLS => cursoLS.id !== curso);
  
    localStorage.setItem('cursos', JSON.stringify(cursosLS));
  }
  


function vaciarLs() {
    localStorage.clear();
}


function vaciarcarrito() {
    while (listaCursos.firstChild) {
      listaCursos.removeChild(listaCursos.firstChild);
    }
  

    vaciarLs();
  
    contador = 0;
    document.getElementById('contador-carrito').textContent = contador;
    total = 0;
    document.getElementById('precio-total').textContent = '$0.00';
  
    return false;
  }
  
  


const carritoElement = document.getElementById('carrito');
const carritoIcono = document.getElementById('carrito-icono');


carritoIcono.addEventListener('click', () => {
  carritoElement.style.display = carritoElement.style.display === 'none' ? 'block' : 'none';
});





window.onload = function() {
    const form = document.querySelector('form');
    const mensajeCompra = document.getElementById('mensaje-compra');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el envío del formulario
      
      // Aquí puedes realizar validaciones del formulario si es necesario
      
      // Mostrar el mensaje de compra realizada
      mensajeCompra.style.display = 'flex';
    });
  };











  function fValidarTarjeta(){
    var opt = $("#lstTipoTarjeta option:selected").val();
    codigo = $("#nro_tarjeta").val().replace('-', '');
    var msg = "Valor incorrecto";
    VISA = /^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/;
    MASTERCARD = /^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]   {4}$/;
    AMEX = /^3[47][0-9-]{16}$/;
    CABAL = /^(6042|6043|6044|6045|6046|5896){4}[0-9]{12}$/;
    NARANJA =   /^(589562|402917|402918|527571|527572|0377798|0377799)[0-9]*$/;

    $("#err_nro_tarjeta").html("");
    if(luhn(codigo)){
        if(opt == "VISA" && !codigo.match(VISA)){
            alert(msg);
        }
        if(opt == "MASTERCARD" && !codigo.match(MASTERCARD)){
            alert(msg);
        }
        if(opt == "NARANJA" && !codigo.match(NARANJA)){
            alert(msg);
        }
        if(opt == "CABAL" && !codigo.match(CABAL)){
            alert(msg);
        }
        if(opt == "AMEX" && !codigo.match(AMEX)){
            alert(msg);
        }
    } else {
        alert(msg);
    }
}
function luhn(value) {
    // Accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(value)) return false;
    // The Luhn Algorithm. It's so pretty.
    let nCheck = 0, bEven = false;
    value = value.replace(/\D/g, "");
    for (var n = value.length - 1; n >= 0; n--) {
        var cDigit = value.charAt(n),
        nDigit = parseInt(cDigit, 10);
        if (bEven && (nDigit *= 2) > 9) nDigit -= 9; nCheck +=  nDigit; bEven = !bEven;
    }
    return (nCheck % 10) == 0;
}