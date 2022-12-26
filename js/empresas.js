// MENSAJE DE BIENVENIDA  
let bienvenida = document.getElementById("indexHeader")

let username = localStorage.getItem('email');
bienvenida.innerHTML = `<h1>Te damos la bienvenida, ${username}</h1>`;

let empresa ="";

// REDIRECCIONAMIENTO Y FILTRO A LA EMPRESA   
const divEmpresa = document.getElementById("empresa1");
divEmpresa.addEventListener("click", (e) => {
    e.preventDefault();
    window.location='../pages/empresa.html';
    empresa = "Pepsi";
    localStorage.setItem("empresa", JSON.stringify(empresa));
})

// REDIRECCIONAMIENTO Y FILTRO A LA EMPRESA N2  
const divEmpresa2 = document.getElementById("empresa2");
divEmpresa2.addEventListener("click", (e) => {
    e.preventDefault();
    window.location='../pages/empresa.html';
    empresa = "Antares";
    localStorage.setItem("empresa", JSON.stringify(empresa));
})