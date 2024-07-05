let frutas=['Platano', 'Naranja', 'Manzana', 'Mango', 'Fresa', 'Uva', 'Granadilla'];
function verFrutas() {
    const listaElement= document.getElementById('frutas-lista');
    listaElement.innerHTML = '';
    frutas.forEach(fruta => {
        const li = document.createElement('li');
        li.textContent = fruta;
        listaElement.appendChild(li);
    });
}
function ordenarFrutas() {
    frutas.sort();
    verFrutas();
}

function invertirFrutas() {
    frutas.reverse();
    verFrutas();
}

function mostrarLongitud() {
    alert(`La longitud del arreglo es: ${frutas.length}`);
}

function insertarFruta() {
    const nuevaFruta = prompt("Ingrese el nombre de la nueva fruta:");
    if (nuevaFruta) {
        frutas.push(nuevaFruta);
        verFrutas();
    }
}

function eliminarFruta() {
    const frutaAEliminar = prompt("Ingrese el nombre de la fruta a eliminar:");
    const index = frutas.indexOf(frutaAEliminar);
    if (index !== -1) {
        frutas.splice(index, 1);
        verFrutas();
    } else {
        alert("Fruta no encontrada en el arreglo.");
    }
}
verFrutas();