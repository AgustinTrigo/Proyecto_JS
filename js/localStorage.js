const loadCart = () => {localStorage.setItem("carrito", JSON.stringify(carritoLocal))};
const getCart = () => {
    return carritoLocal = JSON.parse(localStorage.getItem("carrito")) || [];
}

const loadContador= () => {localStorage.setItem("contador", JSON.stringify(contadorQty))};
const getContador = () => {return contadorQty = JSON.parse(localStorage.getItem("contador")) || [];}