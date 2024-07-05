function generarLista(min, max, cantidad = 20) {
    let lista = [];
    for (let i = 0; i < cantidad; i++) {
        let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        lista.push(numeroAleatorio);
    }
    return lista;
}

function mostrarNumeros() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const lista = generarLista(min, max);
    const listaElement = document.getElementById('numeros-lista');
    listaElement.innerHTML = '';
    lista.forEach((valor, indice) => {
        const li = document.createElement('li');
        li.textContent = `${indice + 1} - ${valor}`;
        listaElement.appendChild(li);
    });
}