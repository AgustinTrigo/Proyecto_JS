let navBar = document.getElementById("navbar");
let navBarBtn = document.getElementById("navbar--btn");
let navUl = document.getElementById("navUl");

navBarBtn.innerHTML = `<button id="iconoAbrir" type="button" onClick="desplegarMenu()"><i class="fa-solid fa-bars"></i></button>`

function desplegarMenu(){
    navBar.className = "navbar__menu hidden__menu";
    navUl.innerHTML = `
    <ul>
        <li><a href="./index.html">inicio</a></li>
        <li><a href="./carrito.html">carrito de compras</a></li>
    </ul>
    `
    navBarBtn.innerHTML = `<button id="iconoCerrar" onClick="cerrarMenu()"><i class="fa-solid fa-xmark"></i></button>`;
}

function cerrarMenu(){
    navBar.className = "navbar__menu";
    navUl.innerHTML = "";
    navBarBtn.innerHTML = `<button id="iconoAbrir" type="button" onClick="desplegarMenu()"><i class="fa-solid fa-bars"></i></button>`
}