//          JS de Teo                                       

//                                  Estructura de datos y funciones de filtrado.                                         #1
// Estructura de datos
const articulosDeportivos = [
    {
        id: 1,
        titulo: "España gana la Eurocopa 2024",
        descripcion: "La Selección Española se impone a Inglaterra en la final de la Eurocopa 2024 por 2-1.",
        visitas: 1500
    },
    {
        id: 2,
        titulo: "Celtics se corona campeón de la NBA",
        descripcion: "Los Boston Celtics terminan con una sequía de 16 años y se convierten en el equipo más ganador de la historia.",
        visitas: 1200
    },
    {
        id: 3,
        titulo: "Inició La Copa Mundo de Billar Bogotá 2024",
        descripcion: "En el Coliseo El Salitre, se iniciaron los encuentros de la primera fase de la Copa Mundo de Billar.",
        visitas: 800
    },
    {
        id: 4,
        titulo: "Calendario snooker 2024",
        descripcion: "Consulta cómo seguir por televisión en Eurosport todos los campeonatos de snooker.",
        visitas: 600
    }
];

// Función para filtrar artículos por visitas
function filtrarArticulosPorVisitas(minVisitas) {
    const articulosFiltrados = articulosDeportivos.filter(articulo => articulo.visitas >= minVisitas);
    console.log("Artículos con más de " + minVisitas + " visitas:", articulosFiltrados);
}

// Función para ordenar artículos por título
function ordenarArticulosPorTitulo() {
    const articulosOrdenados = [...articulosDeportivos].sort((a, b) => a.titulo > b.titulo ? 1 : -1);
    console.log("Artículos ordenados por título:", articulosOrdenados);
}

// Función para ordenar artículos por visitas
function ordenarArticulosPorVisitas() {
    const articulosOrdenados = [...articulosDeportivos].sort((a, b) => b.visitas - a.visitas);
    console.log("Artículos ordenados por visitas:", articulosOrdenados);
}




//Funciones para cambiar el color del fondo.                        #3
function modoOscuro() {
    const main = document.querySelector('main');
        main.classList.add('containerOscuro');
        main.classList.remove('containerClaro');
    
    document.getElementById('modoOscuro').disabled = true;
    document.getElementById('modoClaro').disabled = false;
}

function modoClaro() {
    const main = document.querySelector('.main_luca') || document.querySelector('main');
    if (main) {
        main.classList.add('containerClaro');
        main.classList.remove('containerOscuro');
    } else {
        console.error('No se encontró .main_luca ni main en la página.');
    }
    document.getElementById('modoOscuro').disabled = false;
    document.getElementById('modoClaro').disabled = true;
}

//Fin de JS de Teo


//JS DE PEDRO

// Punto 2 del ejercicio //

// Funciones para ocultar y mostrar información en el índice.
function mostrarInfo(num) {
    let botonOcultar, botonMostrar, cuadroTexto, foto;
  
    // Selecciona los elementos correspondientes según el número de sección
    if (num == 1) {
      botonOcultar = document.getElementById("botonInfo1");
      botonMostrar = document.getElementById("botonInfo-oculto1");
      cuadroTexto = document.querySelectorAll(".cuadrado-negro")[0];
      foto = document.querySelectorAll(".foto-indice")[0];
    } else if (num == 2) {
      botonOcultar = document.getElementById("botonInfo2");
      botonMostrar = document.getElementById("botonInfo-oculto2");
      cuadroTexto = document.querySelectorAll(".cuadrado-negro")[1];
      foto = document.querySelectorAll(".foto-indice")[1];
    } else if (num == 3) {
      botonOcultar = document.getElementById("botonInfo3");
      botonMostrar = document.getElementById("botonInfo-oculto3");
      cuadroTexto = document.querySelectorAll(".cuadrado-negro")[2];
      foto = document.querySelectorAll(".foto-indice")[2];
    } else if (num == 4) {
      botonOcultar = document.getElementById("botonInfo4");
      botonMostrar = document.getElementById("botonInfo-oculto4");
      cuadroTexto = document.querySelectorAll(".cuadrado-negro")[3];
      foto = document.querySelectorAll(".foto-indice")[3];
    }
  
    // Obtenemos el display actual del cuadro de texto
    // Esto es necesario porque el tamaño viene del CSS
    let cssActual = window.getComputedStyle(cuadroTexto).display;
  
    if (cssActual !== "none") {
      // Si el texto está visible: ocultarlo, cambiar botones y ampliar la imagen
      cuadroTexto.style.display = "none";
      botonOcultar.style.display = "none";
      botonMostrar.style.display = "flex"; // Se usa "flex" para mantener el estilo definido en CSS
      foto.style.width = "600px";
    } else {
      // Si el texto está oculto: mostrarlo, revertir botones y restaurar el tamaño de la imagen
      cuadroTexto.style.display = "block";
      botonOcultar.style.display = "flex";
      botonMostrar.style.display = "none";
      foto.style.width = "400px"; // Ajusta este valor al tamaño original que necesites
    }
  }

  // Punto 5 del ejercicio //

  //Función para para cambiar el color de fondo del botón al pasar por encima
  function cambiarColorHover(boton, color) {
    boton.style.backgroundColor = color;
}

// Punto 7 del ejercicio //

function cambiarTamano() {
    var iconoFbmoll = document.querySelector(".logo");
    
    // Obtener el tamaño real de la imagen con getComputedStyle()
    // Esto es necesario porque el tamaño viene del CSS
    var width = parseInt(window.getComputedStyle(iconoFbmoll).width);

    // Alternar entre los tamaños 150px y 350px
    if (width === 350) {
        iconoFbmoll.style.width = "150px";  // Reducir tamaño
        iconoFbmoll.style.height = "150px";
    } else {
        iconoFbmoll.style.width = "350px";  // Ampliar tamaño
        iconoFbmoll.style.height = "350px";
    }
}

//Fin de JS de Pedro


//JS DE LUCA

// Actividad 6

// Array con los enlaces de las imágenes

const imageLinks = [
    "recursos/imagenes/descarga(1).jpg",
    "recursos/imagenes/descarga(2).jpg",
    "recursos/imagenes/descarga(3).jpg",
    "recursos/imagenes/descarga(4).jpg",
    "recursos/imagenes/descarga.jpg"
];

let slideIndex = 0;

// Función para cambiar la imagen
function changeImage() {
    const imageElement = document.getElementById("carouselImage");
    imageElement.src = imageLinks[slideIndex];
}

// Llama a la función cada 3 segundos para cambiar la imagen
setInterval(() => {
    slideIndex = (slideIndex + 1) % imageLinks.length; // Incrementa el índice de la imagen
    changeImage();
} , 3000);



// Obtener los elementos del DOM
const mostrarFormularioBtn = document.getElementById('mostrarFormulario');
const comentariosSeccion = document.getElementById('comentariosSeccion');
const formComentario = document.getElementById('formComentario');
const listaComentarios = document.getElementById('listaComentarios');

// Mostrar u ocultar el formulario de comentarios cuando se hace clic en el botón
mostrarFormularioBtn.addEventListener('click', function() {                             //Error
    // Alternar la visibilidad de la sección de comentarios
     if (comentariosSeccion.style.display === 'none' || comentariosSeccion.style.display === '') {
         comentariosSeccion.style.display = 'block'; // Mostrar la sección
     } else {
         comentariosSeccion.style.display = 'none'; // Ocultar la sección
     }
});

// Manejar el envío del comentario
formComentario.addEventListener('submit', function(event) {
     event.preventDefault(); // Evitar que el formulario recargue la página

    // Obtener el nombre y el comentario del formulario
     const nombre = document.getElementById('nombre').value;
     const comentario = document.getElementById('comentario').value;

    // Crear un nuevo elemento de lista para el comentario
     const nuevoComentario = document.createElement('li');
     nuevoComentario.textContent = `${nombre}: ${comentario}`;

    // Agregar el comentario a la lista
    listaComentarios.appendChild(nuevoComentario);

     // Limpiar el formulario
     formComentario.reset();
});

// Actividad 8

// Función de validación
function validarFormulario(event) {
    // Obtener los valores de los campos
    var plan = document.getElementById("plan").value;
    var tarjeta = document.getElementById("tarjeta").value;
    var fechaExp = document.getElementById("fechaExp").value;
    var checkboxes = document.getElementsByName("extras");
    var checkboxChecked = false;

    // Validación de plan
    if (plan === "") {
        alert("Por favor, elige un plan de suscripción.");
        event.preventDefault();
        return false;
    }

    // Validación de número de tarjeta (solo números y longitud de 16)
    if (!/^\d{16}$/.test(tarjeta)) {
        alert("Por favor, ingresa un número de tarjeta válido (16 dígitos).");
        event.preventDefault();
        return false;
    }

    // Validación de la fecha de expiración
    var fechaActual = new Date();
    var fechaExpiracion = new Date(fechaExp + "-01"); // Convertir el mes a fecha completa
    if (fechaExpiracion < fechaActual) {
        alert("La fecha de expiración de la tarjeta no puede ser anterior a la fecha actual.");
        event.preventDefault();
        return false;
    }

    // Validación de al menos un checkbox seleccionado
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkboxChecked = true;
            break;
        }
    }

    if (!checkboxChecked) {
        alert("Por favor, selecciona al menos una opción adicional.");
        event.preventDefault();
        return false;
    }

    return true; // Si todas las validaciones pasan, el formulario se envía
}
