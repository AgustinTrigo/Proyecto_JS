getCart();
console.log(carritoLocal);

let catalogo = document.getElementById("catalogo");
catalogo.className = "galeria";

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

getInventory().forEach((producto, index) => {
    
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

function addProduct(index){
    let findI = carritoLocal.findIndex(elemento =>{
        return elemento.id === inventarioLocal[index].id;
    })
    if(findI === -1){
        inventarioLocal[index].cantidad += 1;
        inventarioLocal[index].precioCantidad = inventarioLocal[index].cantidad * inventarioLocal[index].precio;
        carritoLocal.push(inventarioLocal[index]);
    } else if(carritoLocal.length > 0){
        carritoLocal[findI].cantidad += 1;
        carritoLocal[findI].precioCantidad = carritoLocal[findI].cantidad * carritoLocal[findI].precio;
    }
    loadCart();
    Toastify({
        text: "PRODUCTO AGREGADO AL CARRITO",
        duration: 1500,
        position: "top",
        position: "left",
        style: {
            background: 'linear-gradient(to top left, rgb(57, 175, 155), rgb(186, 228, 178))'
        }
    }).showToast();
    sumarCantidad(carritoLocal);
}

function sumarCantidad(array){
    let contador = document.getElementById("contar");
    let sumarQty = array.reduce((a,b) =>a + b.cantidad, 0);
    if(sumarQty >= 1){
        contador.className = ("contadorCarrito");
        contador.innerHTML = "";
        contador.innerHTML += `<h6>${sumarQty}</h6>`;
        console.log(sumarQty);
    }
}









