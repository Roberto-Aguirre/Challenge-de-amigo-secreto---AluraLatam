// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigosSorteo = []

const agregarAmigo = () => {
    const amigoIngresado = document.getElementById('amigo');
    if (amigoIngresado.value == "") {
        alert("Ningun nombre escrito, favor de escribir el nombre de tu amigo.")
    } else {
        listaAmigosSorteo.push(amigoIngresado.value);
        amigoIngresado.value = "";
        amigoIngresado.focus();
        imprimirAmigos(listaAmigosSorteo);
    }
};

const imprimirAmigos = (listaDeAmigos) => {
    const elementlistaAmigos = getElementListaAmigos();
    let template = "";
    listaDeAmigos.forEach((element, index) => {
        console.log(`Index: ${index}, elemento: ${element}`);
        template += `<li>${element}</li>`;
    });
    elementlistaAmigos.innerHTML = template;
};

const sortearAmigo = () => {
    const elementResultado = getElementResultados();
    const listaAmigos = getElementListaAmigos();
    listaAmigos.innerHTML = "";
    if (listaAmigosSorteo.length == 0) {
        alert("No tienen ningun amigo agregado a la lista.")
    } else {
        let numeroAleatorio = Math.floor(Math.random() * listaAmigosSorteo.length);
        elementResultado.innerHTML = `<li>El amigo secreto sorteado es: ${listaAmigosSorteo[numeroAleatorio]}</li>`;
    }
}

const getElementListaAmigos = () => {
    return document.getElementById('listaAmigos');
}
const getElementResultados = () => {
    return document.getElementById('resultado');
}

const resetSorteo = () => {
    getElementListaAmigos().innerHTML = ""
    getElementResultados().innerHTML = ""
    listaAmigosSorteo = []
}