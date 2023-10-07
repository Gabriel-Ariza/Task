

/* ==============================  FUNCION CHANGE BACKGROUND  ============================== */
const backgrounds = [
    'url(background1.jpg)',
    'url(background2.jpg)',
    'url(background3.jpg)'
];
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



const form = document.getElementById('formulario');
const taskInput = document.getElementById('nombre_tarea');
const taskList = document.getElementById('lista_tareas');
const addTaskLink = document.getElementById('btn_add_tarea');


addTaskLink.addEventListener('click', function (e) {
    e.preventDefault(); // Previene la acción predeterminada del enlace
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert("EL CAMPO SE ENCUENTRA VACÍO");
    } else {
        addTask(taskText);
        taskInput.value = '';
    }
});

/* form.addEventListener('submit', function (e) {
    e.preventDefault(); //prevents the page from reloading
    const taskText = taskInput.value.trim();

    if(taskText==0){
        alert("EL CAMPO SE ENCUENTRA VACIO")
    }

    else {
        addTask(taskText);
        taskInput.value = '';
    }
}); */

/* ==============================  FUNCION MOSTRAR ALERTA  ============================== */
function enfocarInput() {
    const input = document.getElementById('nombre_tarea');
    input.focus();
}
/* ==============================  FUNCION AÑADIR TASK  ============================== */

function addTask(taskText) {

    const saveData = document.createElement('div');
    const checkbox = document.createElement('input');
    const taskLabel = document.createElement('label');
    const deleteButton = document.createElement('button');


    taskLabel.textContent = taskText;
    checkbox.type = 'checkbox';
    deleteButton.textContent = 'Eliminar';

    //style
    checkbox.classList.add('check')
    taskLabel.classList.add('label')


    //save in the content pepe
    saveData.appendChild(checkbox);
    saveData.appendChild(taskLabel);
    saveData.appendChild(deleteButton);
    saveData.classList.add('nueva_tarea');
    taskList.appendChild(saveData);


    deleteButton.addEventListener('click', function () {
        saveData.remove();
    });

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            taskLabel.classList.add('completed');
        } else {
            taskLabel.classList.remove('completed');
        }
    });
}
