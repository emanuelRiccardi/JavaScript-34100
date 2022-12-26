let divExtintor = document.querySelector("#items")
let empresaSeleccionada = JSON.parse(localStorage.getItem("empresa"));


// MOSTRAR SOLO LOS EXTINTORES PERTENECIENTES A "X" EMPRESA   
const mostrarExtintores = (empresa, vencidos) => {
    let extintoresGuardados = JSON.parse(localStorage.getItem("extintores"));

    var todayDate = new Date().toLocaleDateString();

    extintoresGuardados.forEach(extintor  => {
        let fechaVenc = new Date(extintor.fechaVencCarga).toLocaleDateString();
        if (fechaVenc > todayDate) {
            extintor.vigente = "VIGENTE";
        } else {
            extintor.vigente = "VENCIDO";
        }
    })

    if (empresa){
        extintoresGuardados = extintoresGuardados.filter( extintor => extintor.empresa == empresa);
        console.log(extintoresGuardados)
    }

    

    extintoresGuardados.forEach(extintor => {
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

        <div id="itemMore">
            <span class="itemIcon material-symbols-rounded">more_vert</span>
        </div>
        </div>
        `
    });
}


window.onload = mostrarExtintores(empresaSeleccionada);