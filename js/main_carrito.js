let carritoCompras = document.getElementById("mainCart");
carritoCompras.className = "styleCarrito";

function renderCarrito(){
    getCart();
    carritoLocal.forEach((i) => {
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
                <button type="button" value="" id="trashBtn" ><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>`
    })
}

renderCarrito();