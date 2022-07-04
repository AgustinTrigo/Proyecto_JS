// CLASE PRODUCTO
class Producto{
    constructor(id, nombre, precio, cantidad, precioCantidad, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.precioCantidad = precioCantidad;
        this.stock = stock;
    }
}

// ARRAY DE INVENTARIO
const inventario = [];

inventario.push(new Producto(1, "producto 1", 200, 0, 0, 10));
inventario.push(new Producto(2, "producto 2", 350, 0, 0, 10));
inventario.push(new Producto(3, "producto 3", 500, 0, 0, 10));
inventario.push(new Producto(4, "producto 4", 650, 0, 0, 10));
inventario.push(new Producto(5, "producto 5", 800, 0, 0, 10));

