const inventario = [
    {
        id:1, 
        nombre: "cepillo de bambu",
        precio: 300,
        stock: 20,
        cantidad: 0,
        precioCantidad: 0,
        img: "./assets/img/productos/cepillos_dientes.jpg",
    },
    {
        id:2, 
        nombre: "esponja vegetal",
        precio: 200,
        stock: 20,
        cantidad: 0,
        precioCantidad: 0,
        img: "./assets/img/productos/esponja_vegetal_cocina.jpg",
    },
    {
        id:3, 
        nombre: "maquina de afeitar",
        precio: 500,
        stock: 20,
        cantidad: 0,
        precioCantidad: 0,
        img: "./assets/img/productos/maquina_afeitar.jpg",
    },
    {
        id:4, 
        nombre: "hilo dental vegetal",
        precio: 350,
        stock: 20,
        cantidad: 0,
        precioCantidad: 0,
        img: "./assets/img/productos/hilo_dental.jpg",
    },
    {
        id:5, 
        nombre: "pasta dental",
        precio: 400,
        stock: 20,
        cantidad: 0,
        precioCantidad: 0,
        img: "./assets/img/productos/pasta_dental.jpg",
    },
    {
        id:6, 
        nombre: "detergente solido",
        precio: 250,
        stock: 20,
        cantidad: 0,
        precioCantidad: 0,
        img: "./assets/img/productos/detergente_solido.jpg",
    }
]

let inventarioLocal = []

const loadInventory = () => {localStorage.setItem("inventario", JSON.stringify(inventario))};
function getInventory(){
    inventarioLocal = JSON.parse(localStorage.getItem("inventario")); 
    return inventarioLocal;
};
const loadCart = () => {localStorage.setItem("carrito", JSON.stringify(cart))};

loadInventory();
getInventory();

let catalogo = document.getElementById("catalogo");
let carritoCompras = document.getElementById("mainCart");
let addBtn = document.getElementById("addBtn");
catalogo.className = "galeria";
carritoCompras.className = "styleCarrito";

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

const cart = [];

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
    renderCarrito();
}


function renderCarrito(){
    carritoCompras.innerHTML = "";
    cart.forEach((i) => {
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




