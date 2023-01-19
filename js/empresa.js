let divExtintor = document.querySelector("#items")
let empresaSeleccionada = JSON.parse(localStorage.getItem("empresa"));
const filtroNumero = document.getElementById("filterNumber");
let nombreEmpresa = document.getElementById("nombreEmpresa");
let dirEmpresa = document.getElementById("dirEmpresa");
let extintoresGuardados = JSON.parse(localStorage.getItem("extintores"));

nombreEmpresa.innerHTML = `${empresaSeleccionada}`;

// MOSTRAR SOLO LOS EXTINTORES PERTENECIENTES A "X" EMPRESA   
const mostrarExtintores = (empresa) => {
    var todayDate = new Date().toLocaleDateString();

    extintoresGuardados.forEach(extintor => {
        let fechaVenc = new Date(extintor.fechaVencCarga).toLocaleDateString();
        if (fechaVenc > todayDate) {
            extintor.vigente = "VIGENTE";
        } else {
            extintor.vigente = "VENCIDO";
        }
    })

    if (empresa) {
        extintoresGuardados = extintoresGuardados.filter(extintor => extintor.empresa == empresa);
    }

    if (sessionStorage.getItem('filtrado') !== null) {

        let filtro = JSON.parse(sessionStorage.getItem("filtrado"));
        
        divExtintor.innerHTML += ` 
        <div id="itemCell">
        <div id="itemSerial">
            <h4>Nro. de Serie:</h4>
            <h3>${filtro.numSerie}</h3>
        </div>

        <div id="itemType">
            <h4>Tipo</h4>
            <h3>${filtro.tipo} - ${filtro.peso}</h3>
        </div>

        <div id="itemState">
            <h4>Estado</h4>
            <h3>${filtro.vigente}</h3>
        </div>

        <div id="itemLocation">
            <h4>Ubicación</h4>
            <h3>${filtro.ubicacion}</h3>
        </div>

        <div id="itemDateFab">
            <h4>Fecha Fab.</h4>
            <h3>${filtro.fechaFab}</h3>
        </div>

        <div id="itemDateVenc">
            <h4>Venc. Carga</h4>
            <h3>${filtro.fechaVencCarga}</h3>
        </div>

        <div id="itemDateVencPh">
            <h4>Venc. PH</h4>
            <h3>${filtro.fechaVencPH}</h3>
        </div>

        <div class="botonRecarga">
            <span id="popperButton" class="itemIcon material-symbols-rounded">restart_alt</span>
            <div id="tooltip" role="tooltip">
            Recargar Extintor
            <div id="arrow" data-popper-arrow></div>
            </div>
        </div>

        <div id="itemElim">
            <span class="itemIcon material-symbols-rounded">delete</span>
        </div>
        </div>
        `

    } else {

        extintoresGuardados.forEach((extintor, i) => {

            divExtintor.innerHTML += ` 
            <div id="itemCell">
            <div id="itemSerial">
                <h4>Nro. de Serie:</h4>
                <h3>${extintor.numSerie}</h3>
            </div>
    
            <div id="itemType">
                <h4>Tipo</h4>
                <h3>${extintor.tipo} - ${extintor.peso}</h3>
            </div>
    
            <div id="itemState">
                <h4>Estado</h4>
                <h3>${extintor.vigente}</h3>
            </div>
    
            <div id="itemLocation">
                <h4>Ubicación</h4>
                <h3>${extintor.ubicacion}</h3>
            </div>
    
            <div id="itemDateFab">
                <h4>Fecha Fab.</h4>
                <h3>${extintor.fechaFab}</h3>
            </div>

            <div id="itemDateVenc">
                <h4>Venc. Carga</h4>
                <h3>${extintor.fechaVencCarga}</h3>
            </div>

            <div id="itemDateVencPh">
                <h4>Venc. PH</h4>
                <h3>${extintor.fechaVencPH}</h3>
            </div>

            <div class="botonRecarga">
                <span id="popperButton" class="itemIcon material-symbols-rounded" onclick="recargaExt(${i})">restart_alt</span>
                <div id="tooltip" role="tooltip">
                Recargar Extintor
                <div id="arrow" data-popper-arrow></div>
            </div>
            </div>

            <div id="itemElim">
                <span id="${i}" class="itemIcon material-symbols-rounded" onclick="elimProducto(${i})">delete</span>
            </div>
        </div>
        `
        });

    }
}


window.onload = mostrarExtintores(empresaSeleccionada);

// RECARGAR EXTINTORES
function recargaExt(i){
    var d = new Date();
    var anio = d.getFullYear();
    var mes = d.getMonth();
    var dia = d.getDate();
    var nuevoVencimiento = new Date(anio + 1, mes, dia).toLocaleDateString();
    extintoresGuardados[i].fechaVencCarga = nuevoVencimiento;
    localStorage.setItem("extintores", JSON.stringify(extintoresGuardados))
    mostrarExtintores(empresaSeleccionada);
    window.location.reload();
}

// ELIMINAR EXTINTORES
function elimProducto (i){
    let idx = i
    if (idx != -1) {
        extintoresGuardados.splice(idx, 1);
    }
    localStorage.setItem("extintores", JSON.stringify(extintoresGuardados))
    window.location.reload();
}

// BUSCAR EXTINTOR POR NUMERO
function buscarExt() {
    let busquedaUsuario = filtroNumero.value;
    const busqueda = listaExtintores.find(extintor => extintor.numSerie == busquedaUsuario);
    sessionStorage.setItem("filtrado", JSON.stringify(busqueda));
    mostrarExtintores(empresaSeleccionada);
    window.location.reload();
}

filtroNumero.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        buscarExt();
    }
});


// ELIMINAR FILTRO

const eliminarFiltro = document.getElementById("eraseFilter");

eliminarFiltro.addEventListener('click', (e) => {
    e.preventDefault();
    elimFiltro();
});

function elimFiltro() {
    sessionStorage.removeItem('filtrado');
    mostrarExtintores(empresaSeleccionada);
    window.location.reload();
}