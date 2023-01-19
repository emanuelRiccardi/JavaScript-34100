    // MENSAJE DE BIENVENIDA  
    let bienvenida = document.getElementById("indexHeader")

    let username = localStorage.getItem('email');
    bienvenida.innerHTML = `<h1>Te damos la bienvenida, ${username}</h1>`;



// MOSTRAR SOLO EXTINTORES VENCIDOS  
let divExtVencidos = document.querySelector("#itemsIndex")

// FETCH JSON
const obtenerDatos = ()=>{
    fetch("./pages/data.json")
    .then(response => response.json())
    .then(resultado => JSON.parse(localStorage.getItem("extintores")) ||localStorage.setItem("extintores", JSON.stringify(resultado.Extintor)))
    .then(mostrarExtintores)
}

const mostrarExtintores = (empresa, vencidos) => {
    let extintoresGuardados = JSON.parse(localStorage.getItem("extintores"));

    var todayDate = new Date().toLocaleDateString();

    extintoresGuardados.forEach(extintor  => {
        let fechaVenc = new Date(extintor.fechaVencCarga).toLocaleDateString();
        if (fechaVenc < todayDate) {
            divExtVencidos.innerHTML+= `
            <div class="itemCell">
            <h3 class="itemText">${extintor.empresa}</h3>
            
            <div class="numSerie">
                <h4>Num. Serie</h4>
                <h3 class="itemNumSerie">${extintor.numSerie}</h3>
            </div>
            
            <div class="venc">
                <h4>Venció el:</h4>
                <h3 class="itemText">${extintor.fechaVencCarga}</h3>
            </div>
        
            <div class="itemExpand">
                <span class="itemIcon material-symbols-rounded">arrow_forward_ios</span>
            </div>
            
            </div>
            `
        } 
    })

}


window.onload = obtenerDatos;













