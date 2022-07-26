const loadCart = () => {localStorage.setItem("carrito", JSON.stringify(carritoLocal))};
const getCart = () => {
    return carritoLocal = JSON.parse(localStorage.getItem("carrito")) || [];
}