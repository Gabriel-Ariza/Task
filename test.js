
/* ==============================  FUNCION CHANGE BACKGROUND  ============================== */
const backgrounds = ['url(background1.jpg)', 'url(background2.jpg)', 'url(background3.jpg)'];
let fondo_actual = 0;
const contenedor = document.querySelector('.contenedor');

function changeBackground() {
    fondo_actual++;
    if (fondo_actual >= backgrounds.length) {
        fondo_actual = 0;
    }

    contenedor.style.backgroundImage = backgrounds[fondo_actual];

}
setInterval(changeBackground, 15000);
changeBackground();


/* ==============================  FUNCION FOCUS EN EL INPUT  ============================== */
function enfocarInput() {
    const input = document.getElementById('nombre_tarea');
    input.focus();
}

/* ==============================  FUNCION CREAR CUADRO CHECKBOX  ============================== */
function crearCheckbox() {
    let label = document.createElement("label");
    label.classList.add("checkBox");

    let creando_checkbox = document.createElement("input");
    creando_checkbox.type = "checkbox";
    let transitionDiv = document.createElement("div");
    transitionDiv.classList.add("transition");


    label.appendChild(creando_checkbox);
    label.appendChild(transitionDiv);
    return label;
}

/* ==============================  FUNCION CREAR NUEVA TAREA  ============================== */

function crearNuevaTarea(nombre_de_la_tarea) {

    let nuevaTarea = document.createElement("div");
    nuevaTarea.classList.add("nueva_tarea");

    // Creamos el elemento checkbox
    let checkbox = crearCheckbox();


    // Creamos elemento con el nombre de la tarea
    let label = document.createElement("label");
    label.textContent = nombre_de_la_tarea;

    // Crear el botón y definir su contenido
    let botonEliminar = document.createElement("button");
    botonEliminar.classList.add("btn_eliminar");
    botonEliminar.innerHTML = `
        <span class="text">Eliminar</span>
        <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
            </svg>
        </span>
    `;

    // Agregamos todos estos elementos a un div contenedor
    nuevaTarea.appendChild(checkbox);
    nuevaTarea.appendChild(label);
    nuevaTarea.appendChild(botonEliminar);
    // Le damos una clase a este div contenedor
    nuevaTarea.classList.add('nueva_tarea')

    // Agregamos el div a la lista de tareas
    let listaTareas = document.getElementById("lista_tareas");
    listaTareas.appendChild(nuevaTarea);


    botonEliminar.addEventListener('click', function() {
        nuevaTarea.remove();
        // Si presiona el boton, elimina la tarea
    });

    checkbox.addEventListener('change', function (event) {
        if (event.target.checked) {
            label.classList.add('tarea_realizada');
        } else {
            label.classList.remove('tarea_realizada');
        }
    });
}


/* ==============================  FUNCION AÑADIR NUEVA TAREA AL HTML  ============================== */
const alerta = document.getElementById('custom_alert');
const formulario = document.getElementById('formulario');
const nombre_tarea = document.getElementById('nombre_tarea');

const lista_tareas = document.getElementById('lista_tareas');
const boton_añadir_tarea = document.getElementById('btn_add_tarea');


nombre_tarea.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
    }
});
formulario.addEventListener('submit', function (e) {
    e.preventDefault(); 
});


boton_añadir_tarea.addEventListener('click', function (e) {
    e.preventDefault(); // Evitamos que se envie la tarea

    if (nombre_tarea.value.trim() === "") {
        alert("EL CAMPO SE ENCUENTRA VACÍO");

    } else {
        console.log("prueba si dejo crear tarea")
        crearNuevaTarea(nombre_tarea.value)
        nombre_tarea.value = "";
        //Creamos una nueva tarea y dejamos el input vacio
    }
});
