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
            <div class="carrito__btn--plusMinus">
                <button type="button" value="" id="plusBtn" onClick="sumarProducto(${index})" class="plusBtn"><i class="fa-solid fa-circle-plus"></i></button>
                <button type="button" value="" id="plusBtn" onClick="quitarProducto(${index})" class="minusBtn"><i class="fa-solid fa-circle-minus"></i></button>
            </div>
            <div class="carrito__btn">
                <button type="button" value="" id="trashBtn" onClick="eliminarProducto(${index})"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>`;
        
    })
    
}

getCart();
renderCarrito();

function sumarProducto(index){
    if(carritoLocal[index].cantidad < carritoLocal[index].stock){
        if(carritoLocal[index].cantidad > 0){
            getContador();
            callToastAgregar(carritoLocal[index].nombre);
            contadorQty++;
            carritoLocal[index].cantidad++;
            carritoLocal[index].precioCantidad = carritoLocal[index].precio * carritoLocal[index].cantidad;
        }
        loadContador();
        loadCart();
        renderCarrito();
    }else if(carritoLocal[index].cantidad === carritoLocal[index].stock){
        Toastify({
            text: `lo sentimos no contamos con mas stock del producto que desea adquirir`,
            className: "toastifyCard-stock",
            duration: 2000,
            gravity: "bottom",
            position: "right",
        }).showToast();
    }
}

function callToastAgregar(producto){
    Toastify({
        text: `se agrego al carrito: \n${producto}`,
        className: "toastifyCard",
        duration: 1500,
        gravity: "bottom",
        position: "right",
    }).showToast();
}

function quitarProducto(index){
    if(carritoLocal[index].cantidad > 0){
        getContador();
        callToastify(1, carritoLocal[index].nombre);
        contadorQty--;
        carritoLocal[index].cantidad--;
        carritoLocal[index].precioCantidad = carritoLocal[index].precio * carritoLocal[index].cantidad;
    }
    carritoLocal[index].cantidad === 0 && carritoLocal.splice(index, 1);
    loadContador();
    loadCart();
    renderCarrito();
}

function eliminarProducto(index){
    getContador();
    callToastify(carritoLocal[index].cantidad, carritoLocal[index].nombre);
    contadorQty -= carritoLocal[index].cantidad;
    carritoLocal.splice(index, 1);
    loadContador();
    loadCart();
    renderCarrito();
}

function callToastify(cantidad, producto){
    Toastify({
        text: `se elimino del carrito: \nx${cantidad} ${producto}`,
        className: "toastifyCard-eliminar",
        duration: 2000,
        gravity: "bottom",
        position: "right",
    }).showToast();
}

function vaciarCarrito(){
    if(getContador() > 0){
        carritoLocal = [];
        localStorage.removeItem("carrito");
        contadorQty = 0;
        localStorage.removeItem("contador");
        renderCarrito();
        Toastify({
            text: "VACIASTE EL CARRITO",
            duration: 2000,
            gravity: "bottom",
            position: "right",
            className: "toastifyCard-eliminar"
        }).showToast();
    }else{
        Toastify({
            text: "no hay productos en su carrito",
            duration: 2000,
            gravity: "bottom",
            position: "right",
            className: "toastifyCard-eliminar"
        }).showToast();
    }
}