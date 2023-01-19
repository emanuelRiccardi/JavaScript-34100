let empresasGuardadas = JSON.parse(localStorage.getItem("empresas"));
// MENSAJE DE BIENVENIDA  
let bienvenida = document.getElementById("indexHeader")

let username = localStorage.getItem('email');
bienvenida.innerHTML = `<h1>Te damos la bienvenida, ${username}</h1>`;

// REDIRECCIONAMIENTO Y FILTRO A LA EMPRESA
const redireccion = (id) => {
    const empresa = document.getElementById(id).innerText
    localStorage.setItem("empresa", JSON.stringify(empresa));
    window.location = '../pages/empresa.html';
}

// FETCH JSON
const obtenerDatos = ()=>{
    fetch("../pages/empresas.json")
    .then(response => response.json())
    .then(resultado => JSON.parse(localStorage.getItem("empresas")) || localStorage.setItem("empresas", JSON.stringify(resultado.Empresa)))
    .then(mostrarEmpresas)
}

// MOSTRAR EMPRESAS
let divEmpresas = document.getElementById("empItems")
const mostrarEmpresas = () => {

    empresasGuardadas.forEach((empresa, i) => {
        divEmpresas.innerHTML += `
        <div class="itemCell2" onclick="redireccion(${i}); ">
        <h3 id="${i}" class="itemText">${empresa.nombre}</h3>
        <div class="venc">
            <h4>Dirección</h4>
            <h3 class="itemText">${empresa.direccion}</h3>
        </div>

        <div id="itemElim">
        <span class="itemIcon material-symbols-rounded" onclick="elimEmp(${i})">delete</span>
        </div>
        </div>
        `
    });

}

window.onload = obtenerDatos;

// ELIMINAR EMPRESAS
function elimEmp (i){
    let idx = i
    if (idx != -1) {
        empresasGuardadas.splice(idx, 1);
    }
    localStorage.setItem("empresas", JSON.stringify(empresasGuardadas))
    window.location.reload();
}
