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
const listaExtintores = JSON.parse(localStorage.getItem("extintores")) || [
    new Extintor('450895', 'C042300546', 'PBP', '5KG', '2010/07/30', '2023/12/31', '2025/12/31', 'entrada', 'Pepsi'),
    new Extintor('890562', 'C042300845', 'PBP', '10KG', '2012/12/31', '2023/12/31', '2027/12/31', 'entrada', 'Pepsi'),
    new Extintor('45432', 'C042302648', 'PBP', '5KG', '2008/01/30', '2023/11/30', '2023/11/30', 'cocina', 'Antares'),
    new Extintor('6458', 'C042373402', 'K', '5KG', '2010/10/01', '2023/10/01', '2025/10/01', 'cocina', 'Antares'),
    new Extintor('6049', 'C042343124', 'CO2', '3,5KG', '2005/05/01', '2023/05/01', '2025/05/01', 'computadoras', 'Antares')
]

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

