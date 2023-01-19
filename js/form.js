// CONSTRUCTOR DE EXTINTOR
class Extintor {
    constructor(numSerie, dps, tipo, peso, fechaFab, fechaVencCarga, fechaVencPH, ubicacion, empresa) {
        this.numSerie = numSerie;
        this.dps = dps;
        this.tipo = tipo;
        this.peso = peso;
        this.fechaFab = new Date(fechaFab).toLocaleDateString();
        this.fechaVencCarga = new Date(fechaVencCarga).toLocaleDateString();
        this.fechaVencPH = new Date(fechaVencPH).toLocaleDateString();
        this.ubicacion = ubicacion;
        this.empresa = empresa;
    }

}

// LISTA DE EXTINTORES
const listaExtintores = JSON.parse(localStorage.getItem("extintores"))

// FORMULARIO PARA AGREGAR EXTINTORES MANUALMENTE   
const agregarExt = () => {
    let numSerie = document.getElementById("nroext").value;
    let dps = document.getElementById("dps").value;
    let tipo = document.getElementById("tipoExt").value;
    let peso = document.getElementById("capExt").value;
    let fechaFab = document.getElementById("fab").value;
    let fechaVencCarga = document.getElementById("carga").value;
    let fechaVencPH = document.getElementById("ph").value;
    let ubicacion = document.getElementById("ubi").value;
    let empresa = document.getElementById("emp").value;

    let extNuevo = new Extintor(numSerie, dps, tipo, peso, fechaFab, fechaVencCarga, fechaVencPH, ubicacion, empresa);
    listaExtintores.push(extNuevo);
    localStorage.setItem("extintores", JSON.stringify(listaExtintores))

    return listaExtintores;
}

const botonForm = document.getElementById("botonContenido");
botonForm.addEventListener("click", (e) => {
    e.preventDefault();
    agregarExt();
})




