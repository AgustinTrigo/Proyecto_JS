//const loadInventory = () => {localStorage.setItem("inventario", JSON.stringify(inventario))};
const getInventory = () => {
    return inventarioLocal = JSON.parse(localStorage.getItem("inventario")); 
    
}

const loadCart = () => {localStorage.setItem("carrito", JSON.stringify(carritoLocal))};
const getCart = () => {
    return carritoLocal = JSON.parse(localStorage.getItem("carrito")) || [];
}