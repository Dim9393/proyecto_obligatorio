let usuarioActual = validarSesion();
let productosCarrito = leerDeStorage("productosMiCarrito",[]);
let productos = leerDeStorage("productosRegistrados",[]);


let parametros = new URLSearchParams(window.location.search);

let nombreOriginal = parametros.get("nombre");
let nombreProducto = parametros.get("nombre");
let stockNombre = parametros.get("cantidadUser");
let precioNombre = parametros.get("precio");
let fotoProducto = parametros.get("img");

let suma = 0;

document.getElementById("nombreProducto").innerHTML = `Nombre del producto: ${nombreProducto}`
document.getElementById("cantidadProducto").value = stockNombre
document.getElementById("precioProducto").innerHTML = `Subtotal del producto: ${precioNombre}`
document.getElementById("imgProducto").src = fotoProducto

document.addEventListener("DOMContentLoaded", function() {
	let formEditarProducto = document.getElementById("form-editarProducto");
	
	if(formEditarProducto) {
		formEditarProducto.addEventListener("submit",function (e) {
			e.preventDefault();
			for(let i = 0; i < productosCarrito.length; i++) {
				let productoCarrito = productosCarrito[i];
				//Producto.nombre es el valor que tenemos guardado y nombreOriginal es el que traemos mediante parametros
				//Reutilizamos la función de devolver el producto cuando el carrito se elimina
				for(let j = 0; j < productos.length; j++) {
					let producto = productos[j];
					/*Tenia esta comparación: productoCarrito.nombre === producto.nombreProducto cambie debido
					a que si entraba Teclado tambien podía entrar Auricular entonces se rescribian, si ponia
					1 teclado, despues auriculares tambien tenia 1.
					*/
					if (nombreOriginal === productoCarrito.nombre && producto.nombreProducto === nombreOriginal) {
						let cantidadEditar = Number(document.getElementById("cantidadProducto").value);
						let stockDisponible = Number(producto.stockProducto) + Number(productoCarrito.cantidad);
						if(cantidadEditar <= stockDisponible) {
							//CantidadEditar es el stock que a la hora de hacer submit vamos a tener en la cantidad deseada
							//productoCarrito.cantidad es lo que tenemos actualmente en el carrito
							let diferencia = cantidadEditar - productoCarrito.cantidad;
							if(diferencia >= 0) {
								producto.stockProducto -= Number(diferencia);
							} else {
								//Hago * - porque sino me quedaba (Ej: 200 + (-15)) cuando lo que queria hacer era sumarlo
								//Por eso lo pase a positivo con el -
								producto.stockProducto += -(Number(diferencia));
							};
							//Le decimos que la cantidad que tenemos en el carrito sea igual a la que el cliente ingreso en editarProducto
							productoCarrito.cantidad = cantidadEditar;
							productoCarrito.precio = productoCarrito.precioUnitario * cantidadEditar;
							break;
						} else {
							alert("¡No tenemos esa cantidad de stock!");
							return;
						};
					};
				};
			};
			guardarEnStorage("productosRegistrados",productos);
			guardarEnStorage("productosMiCarrito",productosCarrito);
			window.location.href="carrito.html";
		});
	};
});


