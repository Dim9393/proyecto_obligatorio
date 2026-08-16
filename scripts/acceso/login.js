let parametros = new URLSearchParams(window.location.search);
let correo = parametros.get("correo");
const admin = {
    email: "admin@admin",
    password: "admin123",
    nombre: "admin"
};

document.getElementById("correo").value = correo;

document.addEventListener("DOMContentLoaded",function() {
	let formLogin = document.getElementById("form-login");
	if(formLogin) {
		formLogin.addEventListener("submit",function(e) {
			e.preventDefault();
			
			let correoUsuario = document.getElementById("correo").value;
			let contraseniaUsuario = document.getElementById("contrasenia").value;
			
			if (correoUsuario === admin.email && contraseniaUsuario === admin.password) {
                let sesionAdmin = {
                    nombre: admin.nombre,
                    email: admin.email,
                    admin: true
                };
                guardarEnStorage("sesionActual",sesionAdmin);
                window.location.href = "menu.html";
                return;
            };
			login(correoUsuario,contraseniaUsuario,"menu.html");
		});
	};
});