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

const loadInventory = () => {localStorage.setItem("inventario", JSON.stringify(inventario))};
const getInventory = () => {
    return inventarioLocal = JSON.parse(localStorage.getItem("inventario")) || []; 
    
};

const loadCart = () => {localStorage.setItem("carrito", JSON.stringify(cartLocal))};
const getCart = () => {
    return cartLocal = JSON.parse(localStorage.getItem("carrito")) || [];
}