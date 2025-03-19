const campoNombre = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultadoSorteo = document.getElementById("resultado");

let listaNombres = [];

function agregarAmigo() {
  const nombreIngresado = campoNombre.value.trim();

  if (nombreIngresado === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  const nombreNormalizado = nombreIngresado.toLowerCase();
  const nombresNormalizados = listaNombres.map((n) => n.toLowerCase());

  if (nombresNormalizados.includes(nombreNormalizado)) {
    alert("Ese nombre ya fue ingresado.");
    campoNombre.value = "";
    return;
  }

  listaNombres.push(nombreIngresado);
  campoNombre.value = "";
  renderizarLista();
}

function renderizarLista() {
  listaAmigos.innerHTML = "";
  listaNombres.forEach((nombre) => {
    const item = document.createElement("li");
    item.textContent = nombre;
    listaAmigos.appendChild(item);
  });
}

function sortearAmigo() {
  if (listaNombres.length === 0) {
    alert("Agrega al menos un nombre para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
  const nombreGanador = listaNombres[indiceAleatorio];

  resultadoSorteo.innerHTML = `<li class="ganador">🎉 El amigo secreto es: <strong>${nombreGanador}</strong> 🎉</li>`;
}

function reiniciarLista() {
  listaNombres = [];
  listaAmigos.innerHTML = "";
  resultadoSorteo.innerHTML = "";
}
