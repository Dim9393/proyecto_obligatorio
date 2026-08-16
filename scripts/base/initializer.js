function inicializarProductos() {
	let productos = leerDeStorage("productosRegistrados", []);

	// Si ya hay productos, no hace nada
	if (productos.length > 0) {
		return;
	}

	productos = [
		{
			nombreProducto: "Teclado mecanico Redragon Kumara K552",
			stockProducto: 12,
			precioProducto: 1890,
			ivaProducto: 10,
			imagenProducto: "img/Teclado mecanico Redragon Kumara K552.png",
			precioFinal: (1890 + (1890 * 10 / 100)).toFixed(2),
			tipoProducto: "teclados"
		},
		{
			nombreProducto: "Mouse Logitech G203 Lightsync",
			stockProducto: 15,
			precioProducto: 1299,
			ivaProducto: 22,
			imagenProducto: "img/Mouse Logitech G203 Lightsync.png",
			precioFinal: (1299 + (1299 * 22 / 100)).toFixed(2),
			tipoProducto: "mouses"
		},
		{
			nombreProducto: "Auriculares HyperX Cloud Stinger",
			stockProducto: 8,
			precioProducto: 2490,
			ivaProducto: 10,
			imagenProducto: "https://pro-gamer.uy/wp-content/uploads/2022/10/HyperX-Cloud-Stinger-web.png",
			precioFinal: (2490 + (2490 * 10 / 100)).toFixed(2),
			tipoProducto: "auriculares"
		},
		{
			nombreProducto: "Mousepad XL gamer",
			stockProducto: 20,
			precioProducto: 590,
			ivaProducto: 0,
			imagenProducto: "img/Mousepad XL gamer.png",
			precioFinal: (590 + (590 * 0 / 100)).toFixed(2),
			tipoProducto: "mouses"
		},
		{
			nombreProducto: "Teclado Logitech K120",
			stockProducto: 25,
			precioProducto: 899,
			ivaProducto: 22,
			imagenProducto: "img/Teclado Logitech K120.png",
			precioFinal: (899 + (899 * 22 / 100)).toFixed(2),
			tipoProducto: "teclados"
		},
		{
			nombreProducto: "Mouse inalambrico Logitech M185",
			stockProducto: 18,
			precioProducto: 990,
			ivaProducto: 10,
			imagenProducto: "img/Mouse inalambrico Logitech M185.png",
			precioFinal: (990 + (990 * 10 / 100)).toFixed(2),
			tipoProducto: "mouses"
		},
		{
			nombreProducto: "Auriculares Logitech H390 USB",
			stockProducto: 10,
			precioProducto: 1790,
			ivaProducto: 0,
			imagenProducto: "img/Auriculares Logitech H390 USB.png",
			precioFinal: (1790 + (1790 * 0 / 100)).toFixed(2),
			tipoProducto: "auriculares"
		},
		{
			nombreProducto: "Microfono Fifine K669",
			stockProducto: 6,
			precioProducto: 2990,
			ivaProducto: 10,
			imagenProducto: "img/Microfono Fifine K669.png",
			precioFinal: (2990 + (2990 * 10 / 100)).toFixed(2),
			tipoProducto: "microfonos"
		},
		{
			nombreProducto: "Webcam Full HD 1080p",
			stockProducto: 9,
			precioProducto: 2499,
			ivaProducto: 22,
			imagenProducto: "img/Webcam Full HD 1080p.png",
			precioFinal: (2499 + (2499 * 22 / 100)).toFixed(2),
			tipoProducto: "webcams"
		},
		{
			nombreProducto: "Joystick USB PC",
			stockProducto: 14,
			precioProducto: 1190,
			ivaProducto: 0,
			imagenProducto: "img/Joystick USB PC.png",
			precioFinal: (1190 + (1190 * 0 / 100)).toFixed(2),
			tipoProducto: "joysticks"
		}
	];

	guardarEnStorage("productosRegistrados",productos);
}

function inicializarFiltro() {
	let filtros = leerDeStorage("filtrosRegistrados", []);

	// Si ya hay productos, no hace nada
	if (filtros.length > 0) {
		return;
	}

	filtros = [
    { 
		nombreFiltro: "teclados" 
	},
    { 
		nombreFiltro: "mouses" 
	},
    {
		nombreFiltro: "auriculares" 
	},
    {
		nombreFiltro: "microfonos" 
	},
    {
		nombreFiltro: "webcams" 
	},
    {
		nombreFiltro: "joysticks" 
	}
]
	guardarEnStorage("filtrosRegistrados",filtros);
}