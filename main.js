    // MENSAJE DE BIENVENIDA  
    let bienvenida = document.getElementById("indexHeader")

    let username = localStorage.getItem('email');
    bienvenida.innerHTML = `<h1>Te damos la bienvenida, ${username}</h1>`;



// MOSTRAR SOLO EXTINTORES VENCIDOS  
let divExtVencidos = document.querySelector("#itemsIndex")

const mostrarExtintores = (empresa, vencidos) => {
    let extintoresGuardados = JSON.parse(localStorage.getItem("extintores"));

    var todayDate = new Date().toLocaleDateString();

    extintoresGuardados.forEach(extintor  => {
        let fechaVenc = new Date(extintor.fechaVencCarga).toLocaleDateString();
        if (fechaVenc < todayDate) {
            divExtVencidos.innerHTML+= `
            <div class="itemCell">
            <h3 class="itemText">${extintor.empresa}</h3>
            <div class="venc">
                <h4>Venció el:</h4>
                <h3 class="itemText">${extintor.fechaVencCarga}</h3>
            </div>
        
            <div class="itemExpand">
                <span class="itemIcon material-symbols-rounded">expand_more</span>
            </div>
            
            </div>
            `
        } 
    })

}


window.onload = mostrarExtintores;















    //<====================================== FILTROS (TODAVÍA NO ESTÁN EN USO)=======================================================================================================================>

// BUSCAR EXTINTOR POR NUMERO
// function buscarExt() {
//     let busquedaUsuario = prompt("Número del extintor")
//     const busqueda = listaExtintores.find(extintor => extintor.numSerie == busquedaUsuario);
//     console.log(busqueda)
// }

// // FILTRAR POR TIPO DE EXTINTOR
// function filtrarTipo() {
//     let filtroUsuario = prompt("filtrar por tipo de extitor:").toUpperCase();
//     const filtraPorTipo = listaExtintores.filter(extintor => extintor.tipo == filtroUsuario)
//     console.log(filtraPorTipo)
// }

// // FILTRAR POR PESO
// function filtrarPeso() {
//     let filtroUsuario = prompt("filtrar por peso de extitor:").toUpperCase();
//     const filtraPorPeso = listaExtintores.filter(extintor => extintor.peso == filtroUsuario)
//     console.log(filtraPorPeso)
// }

// // ORDERNAR POR FECHA
// function ordernarPorFecha() {
//     listaExtintores.sort(function(a,b){
//         if (a.fechaFab > b.fechaFab){
//             return 1
//         }
//         if (a.fechaFab < b.fechaFab){
//             return -1
//         }
//         return 0;
//     });
    
//     console.log(listaExtintores)
// }


