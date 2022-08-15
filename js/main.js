getCart();
getContador();

let contador = document.getElementById("contar");
let catalogo = document.getElementById("catalogo");
catalogo.className = "galeria";
let select = document.getElementById("filtro");
let navbarbtn = document.getElementById("navbar--btn");
let navbar = document.getElementById("navbar");
let iconoNavbar = document.getElementById("iconoAbrir");

navbarbtn.addEventListener("click", desplegarMenu);

function desplegarMenu(){
    navbarbtn.innerHTML = `<button id="iconoCerrar" onClick="cerrarMenu()"><i class="fa-solid fa-xmark"></i></button>`
    navbar.className += (" hidden__menu");
    navbar.innerHTML += `
    <div class="navbar__menu--list">
        <ul>
            <li><a href="./index.html">inicio</a></li>
            <li><a href="./carrito.html">carrito de compras</a></li>
        </ul>   
    </div>`
    console.log("funciona")
}

function cerrarMenu(){
    navbar.className = ("navbar__menu");
    navbar.innerHTML = `
    <div id="navbar--btn" class="navbar__menu--btn">
        <button id="iconoAbrir"><i class="fa-solid fa-bars"></i></button>
    </div>
    `
    navbarbtn.addEventListener("click", desplegarMenu);
}

if(contadorQty >= 1){
    contador.className = ("contadorCarrito");
    contador.innerHTML = "";
    contador.innerHTML += `<h6>${contadorQty}</h6>`;
}

fetch('./js/inventario.json')
    .then((resultado) => resultado.json())
    .then((inventario) => {
        inventario.forEach((producto, index) => {
            catalogo.innerHTML += `
            <div id="card" class="productCard">
                <div class="productCard__img">
                    <img src="${producto.img}">
                </div>
                <div class="productCard__text">
                    <h5>${producto.nombre.toUpperCase()}</h5>
                    <h5>precio contado</h5>
                    <h5>$: ${producto.precio}</h5>
                </div>
                <div>
                    <input type="button" value="AGREGAR" id="addBtn" class="productCard__btn" onClick="addProduct(${index})">
                </div>
            </div>`
        })
    }) 



function addProduct(index){
    fetch('./js/inventario.json')
        .then((resultado) => resultado.json())
        .then((inventario) => {
        let findI = carritoLocal.findIndex(elemento =>{
            return elemento.id === inventario[index].id;
        })
        if(findI === -1){
            inventario[index].cantidad += 1;
            inventario[index].precioCantidad = inventario[index].cantidad * inventario[index].precio;
            carritoLocal.push(inventario[index]);
            callToastify();
        } else if((carritoLocal[findI].cantidad < carritoLocal[findI].stock) && (carritoLocal.length > 0)){
            carritoLocal[findI].cantidad += 1;
            carritoLocal[findI].precioCantidad = carritoLocal[findI].cantidad * carritoLocal[findI].precio;
            callToastify();
        }
        loadCart();
        sumarCantidad(carritoLocal);
        })
}

function callToastify(){
    Toastify({
        text: "PRODUCTO AGREGADO AL CARRITO",
        duration: 1500,
        position: "top",
        position: "left",
        style: {
            background: 'linear-gradient(to top left, rgb(57, 175, 155), rgb(186, 228, 178))'
        }
    }).showToast();
}

function sumarCantidad(array){
    contadorQty = array.reduce((a,b) =>a + b.cantidad, 0);
    if(contadorQty >= 1){
        contador.className = ("contadorCarrito");
        contador.innerHTML = "";
        contador.innerHTML += `<h6>${contadorQty}</h6>`;
        console.log(contadorQty);
    }
    loadContador();
}








