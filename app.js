// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if (!nombreAmigo) {
        alert ("Debes Ingresar un nombre");
        return;
    
    } else {
        for (let i = 0; i < amigo.length; i++) {
            if (amigo[i] === nombreAmigo) {
                alert("Este amigo ya fue agregado");
                return;
            }
        }
    }

    amigo.push (nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizacionAmigos()
}


function renderizacionAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
    if(amigo.length === 0) {
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo es : ${amigoSorteado}`; 
    let limpiar = document.getElementById("listaAmigos");
    limpiar.innerHTML = "";
    amigo = [];
}
     


