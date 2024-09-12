const form = document.getElementById('form');
form.addEventListener('submit',function(e) {
    e.preventDefault();
    enviar();
});

let boton;

const addTitulo = document.getElementById('addTitulo');
const addParrafo = document.getElementById('addParrafo');

addButton();
crearParrafo();

function enviar(){
    let array = [];

    for (const element of form.elements) {
        array.push([element.className,element.value]);
    }

    fetch('http://localhost:3000/articuloCreado',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            nombre: array[0][1],
            contenido: array
        })
    }).then(response => response.json()).then(data => {
        console.log(data)
        window.location.href = '/articulos/'+data.titulo;
        
    }).catch(error => console.log(error));
}

addTitulo.addEventListener('click',function(e){
    crearTitulo();
});

addParrafo.addEventListener('click',function(e){
    crearParrafo();
});

function crearParrafo(e) {

    const newParrafo = document.createElement('textarea');

    let cantidad = +form.getElementsByClassName('parrafo').length+1;
    
    newParrafo.setAttribute('class','parrafo');
    newParrafo.setAttribute('name','parrafo'+cantidad);    
    newParrafo.setAttribute('id','parrafo'+cantidad);
    newParrafo.innerHTML = 'Nuevo parrafo';

    newParrafo.addEventListener('input',function(e) {
        newParrafo.style.height = 'auto';
        newParrafo.style.height = newParrafo.scrollHeight+'px';
    });

    form.removeChild(boton);
    form.appendChild(newParrafo);
    addButton();
}

function crearTitulo() {
    const newTitulo = document.createElement('input');
    let cantidad = +form.getElementsByClassName('titulo').length+1;
    
    newTitulo.setAttribute('class','titulo');
    newTitulo.setAttribute('type', 'text');
    newTitulo.setAttribute('name','titulo'+cantidad);    
    newTitulo.setAttribute('id','titulo'+cantidad);
    newTitulo.setAttribute('value','Nuevo titulo');

    form.removeChild(boton);
    form.appendChild(newTitulo);
    addButton();
}

function addButton() {
    boton = document.createElement('input');
    boton.setAttribute('type', 'submit');
    boton.setAttribute('value', 'Guardar');
    boton.setAttribute('id','boton');
    form.appendChild(boton);
}



