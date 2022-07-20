loadInventory();
getCart();
console.log(carritoLocal);

let catalogo = document.getElementById("catalogo");
let addBtn = document.getElementById("addBtn");
catalogo.className = "galeria";


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
        console.log(carritoLocal);
        console.log("prueba 1");
    } else if(carritoLocal.length > 0){
        carritoLocal[findI].cantidad += 1;
        carritoLocal[findI].precioCantidad = carritoLocal[findI].cantidad * carritoLocal[findI].precio;
        console.log(carritoLocal);
        console.log(carritoLocal[findI]);
    }
    loadCart();
}






