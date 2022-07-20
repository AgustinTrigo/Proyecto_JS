loadInventory();
getInventory();
getCart();

let catalogo = document.getElementById("catalogo");
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
    let findI = cartLocal.findIndex(elemento =>{
        return elemento.id === inventarioLocal[index].id;
    })
    if(findI === -1){
        inventarioLocal[index].cantidad += 1;
        inventarioLocal[index].precioCantidad = inventarioLocal[index].cantidad * inventarioLocal[index].precio;
        cartLocal.push(inventarioLocal[index]);
        console.log(cartLocal);
        console.log("prueba 1");
    }else if(cartLocal.length > 0){
        cartLocal[index].cantidad += 1;
        cartLocal[index].precioCantidad = cartLocal[index].cantidad * cartLocal[index].precio;
        console.log(cartLocal);
        console.log("prueba 2");
    }
    loadCart();
}






