let usuarioActual = validarSesion()

document.addEventListener('DOMContentLoaded', function () {
	inicializarProductos()
})

if (usuarioActual) {
	document.getElementById('usuarioActual').innerHTML =
		'¡Bienvenido <b>' + usuarioActual.nombre + '</b> a Mundo Periféricos!'
}

if (usuarioActual.admin == true) {
	document.getElementById('administrador').innerHTML = `
                                            <button class="btn btn-small" onclick="window.location.href='admin.html'">
												Agregar productos
											</button> 
                                            <button class="btn btn-small" onclick="window.location.href='ventas_admin.html'">
												Ventas realizadas
											</button>`
} else {
	document.getElementById('usuario').innerHTML =
		`<button class="btn btn-small" onclick="window.location.href='venta_usuario.html'">Mis compras</button>`
}



// Mostrar el botón cuando se baja 300px
const boton = document.getElementById('boton-subir')

window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		boton.classList.remove('oculto')
	} else {
		boton.classList.add('oculto')
	}
})

// Acción del botón
boton.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
})
