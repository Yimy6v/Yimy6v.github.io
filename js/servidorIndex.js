
//var ip_url = 'http://192.168.43.225/';
// 192.168.1.17
// 192.168.0.100
// var ip_url = 'http://192.168.0.134/';

function prueba(){
	var falencia = document.getElementById("selectFalencia").value;
	var tratamiento = document.getElementById("selectTratamiento").value;
	alert("falencia: "+ falencia +"; Tratamiento: "+ tratamiento)
}

function seleccionarFalencia(){
	var falencia = document.getElementById("selectFalencia").value

	switch(falencia){
		case "1":
			mensajeAlerta("Falencia 1", "Descripcion falencia 1")
			break;
		case "2":
			mensajeAlerta("Falencia 2", "Descripcion falencia 2")
			break;
		case "3":
			mensajeAlerta("Falencia 3", "Descripcion falencia 3")
			break;
		case "4":
			mensajeAlerta("Falencia 4", "Descripcion falencia 4")
			break;
		case "5":
			mensajeAlerta("Falencia 5", "Descripcion falencia 5")
			break;
	}
}

// Funcion para enviar mensaje de alerta dependiendo su activación
function mensajeAlerta(titulo, mensaje){
	bootbox.dialog({ 
		size: "small",
		title: titulo,
		message: mensaje,
		closeButton: false,
		buttons: {
			Aceptar: {
				label: 'Aceptar',
				className: 'btn-danger',
			}
		}
	})
}

function tomaDeDatos() {

	var dato = document.getElementById('dato').value;
	document.getElementById('dato').value = '';
	switch (dato) {
		case 'w':    // movimiento del carro ******************************************************
			console.log('Delante: ' + dato);
			envioDeDatos(ip_url, 'datos=' + dato);
			break;
		case 's':
			console.log('Atras: ' + dato);
			envioDeDatos(ip_url, 'datos=' + dato);
			break;
		case 'a':
			console.log('Izquierda: ' + dato);
			envioDeDatos(ip_url, 'datos=' + dato);
			break;
		case 'd':
			console.log('Derecha: ' + dato);
			envioDeDatos(ip_url, 'datos=' + dato);
			break;
		case 'p':    // movimiento de la cámara   *************************************************
			console.log('mDerecha: ' + dato);
			envioDeDatos(ip_url, 'datos=' + dato);
			break;
		case 'l':
			console.log('mIzquierda: ' + dato);
			envioDeDatos(ip_url, 'datos=' + dato);
			break;
		case 'o':
			console.log('mDetener: ' + dato);
			envioDeDatos(ip_url, 'datos=' + dato);
			break;

		default:
			alert("El caracter [" + dato + "] no es un dato válido.\nRecomendación: Revisar la ayuda.")
			break;
	}
}

function envioDeDatos(ip_url, dato) {  // eviar datos servidor
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", ip_url + dato, true);
	if (xhttp.send()) {
		console.log('Enviado');
	} else {
		console.log('Error');
	}

}

