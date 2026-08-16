function login(email,contrasenia,destino) {
	let usuario = sesionActiva(email);
	if(!usuario) {
		alert("Los datos ingresados son incorrectos. Intente de nuevo");
		return;
	};
	
	if(usuario.contrasenia === contrasenia) {
		guardarEnStorage("sesionActual",usuario);
		window.location.href = destino;
	} else {
		alert("Los datos ingresados son incorrectos. Intente de nuevo");
		return;
	};
};

function validarSesion() {
	//Al poner null en el parametro "valorDefecto" confirmo que no tengo ninguna sesión iniciada
	let userActual = leerDeStorage("sesionActual",null);
	if(!userActual) {
		window.location.href = "login.html";
	};
	return userActual;
};

function cerrarSesion() {
	//Al poner null en el parametro "valor" reescribo el valor que tenia "sesionActual"
	let userActual = guardarEnStorage("sesionActual",null);
	window.location.href = "login.html";
};

//Nos devuelve el correo y contraseña para verificar que los datos ingresados en Login.html sean correctos
function sesionActiva(correo) {
	let usuarios = leerDeStorage("usuariosRegistrados",[]);
	for(let i = 0; i < usuarios.length; i++) {
		if(usuarios[i].correo === correo) {
			return usuarios[i];
		};
	};
	return false;
};