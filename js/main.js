class Producto{
    constructor(id, nombre, precio, cantidad, precioCantidad){
        this.id = parseInt(id);
        this.nombre = nombre.toUpperCase();
        this.precio = parseInt(precio);
        this.cantidad = parseInt(cantidad);
        this.precioCantidad = parseInt(precioCantidad);
    }
}

let vistaPreviaTotal = 0; 
let vistaPreviaCarrito = "";
let opciones = "";

// Array de objetos (productos).
const inventario = [];
// Array de para mostrar los productos disponibles.
const listado = [];
// Array guardar los productos confirmados para comprar.
const carrito = [];

inventario.push(new Producto(1, "cepillo", 500, 0, 0));
inventario.push(new Producto(2, "esponja", 650, 0, 0));
inventario.push(new Producto(3, "shampoo", 700, 0, 0));
inventario.push(new Producto(4, "acondicionador", 800, 0, 0));
inventario.push(new Producto(5, "afeitadora", 1000, 0, 0));
inventario.push(new Producto(6, "botella", 2500, 0, 0));


// Clico para agregar en forma de string los datos de cada objeto.
for(const producto of inventario){
    listado.push(`${producto.id}) ${producto.nombre} ($${producto.precio})`);
}

function saludo(){
    alert("Bienvenid@ a nuestro ecommerce de productos sustentables");
    alert("A continuacion te mostramos nuestro catalogo");
}

// Funcion para mostrar el listado, agregar productos y acceder al carrito.
function menu(){
    opciones = prompt(`Ingrese el numero del producto que quiera comprar: \n(Si desea mas de uno solo ingrese el numero nuevamente) \n${listado.join("\n")} \nIngrese "carrito" para una vista previa. \nIngrese "salir" para terminar.`)
    inventario.find(i => {
        if(opciones == i.id){
            i.cantidad += 1;
            i.precioCantidad = i.precio * i.cantidad;
            vistaPreviaCarrito += `${i.nombre} ($${i.precio}) \n`
            vistaPreviaTotal += i.precio;
            alert(`Se agrego: ${i.nombre} al carrito`)
        }}
    )
    
    if(opciones == "carrito"){
        mostrarCarrito();
    }

    if(opciones == "salir"){
        alert("Vuelva pronto.")
    }
}

// Funcion para mostrar el carrito y mostrar opciones.
function mostrarCarrito(){
    alert(`Vista previa de su carrito: \n${vistaPreviaCarrito} \nTotal a pagar: ${vistaPreviaTotal}`);
    opciones = prompt("Por favor elija una opcion \nPara continuar comprando: ingrese 'si' \nPara finalizar la compra: ingrese 'finalizar' \nPara vaciar el carrito: ingrese 'vaciar' \nPara salir: ingrese 'cancelar'").toLowerCase();;
    if(opciones === "si"){
        menu();
    }else if(opciones.toLowerCase() === "finalizar"){
        for(const seleccionados of inventario){
            if(seleccionados.cantidad >= 1){
                carrito.push(`${seleccionados.nombre}- $${seleccionados.precio} (x${seleccionados.cantidad}) ($${seleccionados.precioCantidad})`)
            }
        }
        alert(`Gracias por su compra: \n${carrito.join("\n")} \n\nTOTAL PAGADO: $${inventario.reduce((a,b) => a + b.precioCantidad, 0)} \nVuelva pronto.`);
    }else if(opciones.toLowerCase() === "vaciar"){
        vistaPreviaTotal = 0; 
        vistaPreviaCarrito = "";
        for(const seleccionados of inventario){
            seleccionados.cantidad = 0;
            seleccionados.precioCantidad = 0;
        }
        alert("Carrito vacio.");
        menu();
    }else if(opciones.toLowerCase() === "cancelar"){       
        alert("Vuelva pronto.");
    }
}

// Ciclo para llamar a la funcion menu();
saludo();

do{
    menu();
}while((opciones != "salir") && (opciones != "no") && (opciones != "finalizar") && (opciones != "cancelar"))
