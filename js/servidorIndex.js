
//var ip_url = 'http://192.168.43.225/';
// 192.168.1.17
// 192.168.0.100
// var ip_url = 'http://192.168.0.134/';

function prueba(){
	var falencia = document.getElementById("selectFalencia").value;
	var tratamiento = document.getElementById("selectTratamiento").value;
	alert("falencia: "+ falencia +"; Tratamiento: "+ tratamiento)
}

function modificarOpciones(){
	var falencia = document.getElementById("selectTratamiento").value
	bootbox.alert({
		size: "small",
		title: "Your Title",
		message: "Your message here…",
		closeButton: false 
	})

	switch(falencia){
		case 1:
		
			break;
		case 2:
			break;
		case 3:
			break;
		case 4:
			break;
		case 5:
			break;
	}
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

