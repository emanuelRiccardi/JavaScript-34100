// CONSTRUCTOR DE EMPRESAS
class Empresa {
    constructor(nombre, direccion){
        this.nombre = nombre;
        this.direccion = direccion;
    }
}

// LISTA DE EMPRESAS
const listaEmpresas = JSON.parse(localStorage.getItem("empresas"))

// FORMULARIO PARA AGREGAR EMPRESAS MANUALMENTE
const agregarEmp = () => {
    let nombre = document.getElementById("nombreEmpresa").value;
    let direccion = document.getElementById("direcEmpresa").value;
    let empNueva = new Empresa(nombre, direccion);
    listaEmpresas.push(empNueva);
    localStorage.setItem("empresas", JSON.stringify(listaEmpresas))

    return listaEmpresas;
}

const botonForm = document.getElementById("botonContenido");
botonForm.addEventListener("click", (e) => {
    e.preventDefault();
    agregarEmp();
})