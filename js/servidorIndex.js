
// 192.168.1.17
// 192.168.0.100
// var ip_url = 'http://192.168.0.134/';

function prueba(){
	var falencia = document.getElementById("selectFalencia").value;
	var tratamiento = document.getElementById("selectTratamiento").value;
	alert("falencia: "+ falencia +"; Tratamiento: "+ tratamiento)
}

// Funcion para desplegar un mensaje de descripción de cada falencia
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

// Funcion para desplegar un mensaje de descripción de cada Tratamiento
function selecionarTratamiento(){
	var falencia = document.getElementById("selectFalencia").value
	var tratamiento = document.getElementById("selectTratamiento").value

	switch(falencia){
		case "1":
			if(tratamiento=='1'){
				mensajeAlerta("Tratamiento 1", "Tratamiento falencia 1")
			}else{
				mensajeAlerta("Tratamiento 2", "Tratamiento falencia 1")
			}
			break;
		case "2":
			if(tratamiento=='1'){
				mensajeAlerta("Tratamiento 1", "Tratamiento falencia 2")
			}else{
				mensajeAlerta("Tratamiento 2", "Tratamiento falencia 2")
			}
			break;
		case "3":
			if(tratamiento=='1'){
				mensajeAlerta("Tratamiento 1", "Tratamiento falencia 3")
			}else{
				mensajeAlerta("Tratamiento 2", "Tratamiento falencia 3")
			}
			break;
		case "4":
			if(tratamiento=='1'){
				mensajeAlerta("Tratamiento 1", "Tratamiento falencia 4")
			}else{
				mensajeAlerta("Tratamiento 2", "Tratamiento falencia 4")
			}
			break;
		case "5":
			if(tratamiento=='1'){
				mensajeAlerta("Tratamiento 1", "Tratamiento falencia 5")
			}else{
				mensajeAlerta("Tratamiento 2", "Tratamiento falencia 5")
			}
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

// Toma los datos de los respectivos select
function tomaDeDatos() {
	var ip_url = 'http://192.168.43.86/';

	var falencia = document.getElementById("selectFalencia").value
	var tratamiento = document.getElementById("selectTratamiento").value

	envioDeDatos(ip_url, falencia+tratamiento)
	console.log(falencia+tratamiento)
}

// Envia los datos al ESP8266
function envioDeDatos(ip_url, dato) {  // eviar datos servidor
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", ip_url + dato, true);
	if (xhttp.send()) {
		console.log('Enviado');
	} else {
		console.log('Error');
	}

}

