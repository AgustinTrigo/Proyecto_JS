loadInventory();
getInventory();

let catalogo = document.getElementById("catalogo");
let addBtn = document.getElementById("addBtn");
catalogo.className = "galeria";


inventarioLocal.forEach((producto, index) => {
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
    let findI = cart.findIndex(elemento =>{
        return elemento.id === inventarioLocal[index].id;
    })
    if(findI === -1){
        inventarioLocal[index].cantidad += 1;
        inventarioLocal[index].precioCantidad = inventarioLocal[index].cantidad * inventarioLocal[index].precio;
        cart.push(inventarioLocal[index]);
    }else if(cart.includes(inventarioLocal[index])){
        inventarioLocal[index].cantidad += 1;
        inventarioLocal[index].precioCantidad = inventarioLocal[index].cantidad * inventarioLocal[index].precio;
    }
    loadCart();
}






