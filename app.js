let nombresSecretos = [];

function agregarAmigo() {
    let nombres = document.getElementById("cajaNombres").value.trim();

    if (nombres === "") {
        return alert("Por favor escriba un nombre.");
    }

    if (nombresSecretos.includes(nombres)) {
        return alert("Este nombre ya fue agregado.");
    }
    
    nombresSecretos.push(nombres);
    actualizarLista();
    document.getElementById("cajaNombres").value = "";
    console.log(nombresSecretos);
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    
    for (let i = 0; i < nombresSecretos.length; i++) { // por cada nombre del array, creamos una nueva etiqueta <li>
        let nombre = nombresSecretos[i];              
        lista.innerHTML += `<li>${nombre}</li>`;
    }
}

function sortearAmigo() {
    if (nombresSecretos.length === 0) {
        return alert("No hay amigos para sortear");    
    }
    
    const amigoSecreto = nombresSecretos[Math.floor(Math.random() * nombresSecretos.length)];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
    console.log("Amigo secreto sorteado:", amigoSecreto);
}

function reiniciarJuego() {
    nombresSecretos = [];
    actualizarLista();
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("cajaNombres").value = "";
}