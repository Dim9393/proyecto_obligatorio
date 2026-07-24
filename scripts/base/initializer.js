function inicializarProductos() {
	let productos = leerDeStorage("productosRegistrados", []);

	if (productos.length > 0) {
		return;
	}

	productos = [
		{
			nombreProducto: "Teclado mecanico Redragon Kumara K552",
			stockProducto: 12,
			precioProducto: 1890,
			ivaProducto: 10,
			imagenProducto: "img/teclado-mecanico-redragon-kumara-k552.png",
			precioFinal: (1890 + (1890 * 10 / 100)).toFixed(2),
			tipoProducto: "teclados"
		},
		{
			nombreProducto: "Mouse Logitech G203 Lightsync",
			stockProducto: 15,
			precioProducto: 1299,
			ivaProducto: 22,
			imagenProducto: "img/mouse-logitech-g203-lightsync.png",
			precioFinal: (1299 + (1299 * 22 / 100)).toFixed(2),
			tipoProducto: "mouses"
		},
		{
			nombreProducto: "Auriculares HyperX Cloud Stinger",
			stockProducto: 8,
			precioProducto: 2490,
			ivaProducto: 10,
			imagenProducto: "img/hyperx-cloud-stinger.png",
			precioFinal: (2490 + (2490 * 10 / 100)).toFixed(2),
			tipoProducto: "auriculares"
		},
		{
			nombreProducto: "Mousepad XL gamer",
			stockProducto: 20,
			precioProducto: 590,
			ivaProducto: 0,
			imagenProducto: "img/mousepad-xl-gamer.png",
			precioFinal: (590 + (590 * 0 / 100)).toFixed(2),
			tipoProducto: "mouses"
		},
		{
			nombreProducto: "Teclado Logitech K120",
			stockProducto: 25,
			precioProducto: 899,
			ivaProducto: 22,
			imagenProducto: "img/teclado-logitech-k120.png",
			precioFinal: (899 + (899 * 22 / 100)).toFixed(2),
			tipoProducto: "teclados"
		},
		{
			nombreProducto: "Mouse inalambrico Logitech M185",
			stockProducto: 18,
			precioProducto: 990,
			ivaProducto: 10,
			imagenProducto: "img/mouse-inalambrico-logitech-m185.png",
			precioFinal: (990 + (990 * 10 / 100)).toFixed(2),
			tipoProducto: "mouses"
		},
		{
			nombreProducto: "Auriculares Logitech H390 USB",
			stockProducto: 10,
			precioProducto: 1790,
			ivaProducto: 0,
			imagenProducto: "img/auriculares-logitech-h390-usb.png",
			precioFinal: (1790 + (1790 * 0 / 100)).toFixed(2),
			tipoProducto: "auriculares"
		},
		{
			nombreProducto: "Microfono Fifine K669",
			stockProducto: 6,
			precioProducto: 2990,
			ivaProducto: 10,
			imagenProducto: "img/microfono-fifine-k669.png",
			precioFinal: (2990 + (2990 * 10 / 100)).toFixed(2),
			tipoProducto: "microfonos"
		},
		{
			nombreProducto: "Webcam Full HD 1080p",
			stockProducto: 9,
			precioProducto: 2499,
			ivaProducto: 22,
			imagenProducto: "img/webcam-full-hd-1080p.png",
			precioFinal: (2499 + (2499 * 22 / 100)).toFixed(2),
			tipoProducto: "webcams"
		},
		{
			nombreProducto: "Joystick USB PC",
			stockProducto: 14,
			precioProducto: 1190,
			ivaProducto: 0,
			imagenProducto: "img/joystick-usb-pc.png",
			precioFinal: (1190 + (1190 * 0 / 100)).toFixed(2),
			tipoProducto: "joysticks"
		}
	];

	guardarEnStorage("productosRegistrados",productos);
}

function inicializarFiltro() {
	let filtros = leerDeStorage("filtrosRegistrados", []);

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