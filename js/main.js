const inventario = [
    {
        id:1, 
        nombre: "producto 1",
        precio: 250,
        stock: 20,
        cantidad: 0,
        precioCantidad: 0,
        img: "./assets/img/productos/cepillos_dientes.jpg",
    },
    {
        id:2, 
        nombre: "producto 2",
        precio: 250,
        stock: 20,
        cantidad: 0,
        precioCantidad: 0,
        img: "./assets/img/productos/esponja_vegetal_cocina.jpg",
    },
    {
        id:3, 
        nombre: "producto 3",
        precio: 250,
        stock: 20,
        cantidad: 0,
        precioCantidad: 0,
        img: "./assets/img/productos/maquina_afeitar.jpg",
    },
    {
        id:4, 
        nombre: "producto 4",
        precio: 250,
        stock: 20,
        cantidad: 0,
        precioCantidad: 0,
        img: "./assets/img/productos/hilo_dental.jpg",
    },
    {
        id:5, 
        nombre: "producto 4",
        precio: 250,
        stock: 20,
        cantidad: 0,
        precioCantidad: 0,
        img: "./assets/img/productos/pasta_dental.jpg",
    },
    {
        id:6, 
        nombre: "producto 6",
        precio: 250,
        stock: 20,
        cantidad: 0,
        precioCantidad: 0,
        img: "./assets/img/productos/detergente_solido.jpg",
    }
]

let catalogo = document.getElementById("catalogo");
catalogo.className = "galeria";

inventario.forEach(i => {
    catalogo.innerHTML += `
    <div id="card" class="productCard">
        <div class="productCard__img">
            <img src="${i.img}">
        </div>
        <div class="productCard__text">
            <h5>${i.nombre}</h5>
            <h5>precio contado</h5>
            <h5>$: ${i.precio}</h5>
        </div>
        <div>
            <input type="button" value="AGREGAR" class="productCard__btn">
        </div>
    </div>`
})