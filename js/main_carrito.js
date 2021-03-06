let carritoCompras = document.getElementById("mainCart");
carritoCompras.className = "styleCarrito";

function renderCarrito(){
    carritoCompras.innerHTML = "";
    carritoCompras.innerHTML = `
    <div class="carrito__panel">
        <div class="carrito__text">
            <h5>total $: ${carritoLocal.reduce((a,b) => a + b.precioCantidad, 0)}</h5>
        </div>
        <div class="carrito__panel--btn">
            <button type="button" value="" id="finalizarBtn">finalizar compra</button>
            <button type="button" value="" id="vaciarBtn" onClick="vaciarCarrito()">vaciar carrito</button>
        </div>
    </div>`;
    carritoLocal.forEach((i, index) => {
        carritoCompras.innerHTML += `
        <div class="carrito__card">
            <div class="carrito__img">
                <img src="${i.img}">
            </div>
            <div class="carrito__text">
                <h5>${i.nombre}</h5>
                <h5>precio $: ${i.precio}</h5>
                <h5>unidades: ${i.cantidad}</h5>
                <h5>subtotal $: ${i.precioCantidad}</h5>
            </div>
            <div class="carrito__btn">
                <button type="button" value="" id="trashBtn" onClick="quitarProducto(${index})"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>`;
        
    })
    
}

getCart();
renderCarrito();

function quitarProducto(index){
    if(carritoLocal[index].cantidad > 0){
        getContador();
        contadorQty--;
        carritoLocal[index].cantidad--;
        carritoLocal[index].precioCantidad = carritoLocal[index].precio * carritoLocal[index].cantidad;
    }
    carritoLocal[index].cantidad === 0 && carritoLocal.splice(index, 1);
    loadContador();
    loadCart();
    renderCarrito();
}

function vaciarCarrito(){
    getContador();
    carritoLocal = [];
    localStorage.removeItem("carrito");
    contadorQty = 0;
    localStorage.removeItem("contador");
    renderCarrito();
    Toastify({
        text: "VACIASTE EL CARRITO",
        duration: 2000,
        position: "top",
        position: "left",
        style: {
            background: 'linear-gradient(to top left, rgb(247, 163, 160), rgb(204, 28, 21))'
        }
    }).showToast();
}