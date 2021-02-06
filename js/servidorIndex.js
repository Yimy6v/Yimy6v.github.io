function prueba(){
	var falencia = document.getElementById("selectFalencia").value;
	var tratamiento = document.getElementById("selectTratamiento").value;
	alert("falencia: "+ falencia +"; Tratamiento: "+ tratamiento)
}

// Funcion para desplegar un mensaje de descripción de cada falencia
function seleccionarFalencia(){
	var falencia = document.getElementById("selectFalencia").value
	document.getElementById("selectTratamiento").disabled = false

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
				datosTerapia("Modo 1", "00:01:00 min", "Nivel 2", "37° Centigrados", "00:10:00 min")
			}else{
				mensajeAlerta("Tratamiento 2", "Tratamiento falencia 1")
				datosTerapia("Modo 2", "00:01:00 min", "Nivel 2", "37° Centigrados", "00:10:00 min")
			}
			break;
		case "2":
			if(tratamiento=='1'){
				mensajeAlerta("Tratamiento 1", "Tratamiento falencia 2")
				datosTerapia("Modo 3", "00:01:00 min", "Nivel 2", "37° Centigrados", "00:10:00 min")
			}else{
				mensajeAlerta("Tratamiento 2", "Tratamiento falencia 2")
				datosTerapia("Modo 4", "00:01:00 min", "Nivel 2", "37° Centigrados", "00:10:00 min")
			}
			break;
		case "3":
			if(tratamiento=='1'){
				mensajeAlerta("Tratamiento 1", "Tratamiento falencia 3")
				datosTerapia("Modo 5", "00:01:00 min", "Nivel 2", "37° Centigrados", "00:10:00 min")
			}else{
				mensajeAlerta("Tratamiento 2", "Tratamiento falencia 3")
				datosTerapia("Modo 6", "00:01:00 min", "Nivel 2", "37° Centigrados", "00:10:00 min")
			}
			break;
		case "4":
			if(tratamiento=='1'){
				mensajeAlerta("Tratamiento 1", "Tratamiento falencia 4")
				datosTerapia("Modo 7", "00:01:00 min", "Nivel 2", "37° Centigrados", "00:10:00 min")
			}else{
				mensajeAlerta("Tratamiento 2", "Tratamiento falencia 4")
				datosTerapia("Modo 8", "00:01:00 min", "Nivel 2", "37° Centigrados", "00:10:00 min")
			}
			break;
		case "5":
			if(tratamiento=='1'){
				mensajeAlerta("Tratamiento 1", "Tratamiento falencia 5")
				datosTerapia("Modo 9", "00:01:00 min", "Nivel 2", "37° Centigrados", "00:10:00 min")
			}else{
				mensajeAlerta("Tratamiento 2", "Tratamiento falencia 5")
				datosTerapia("Modo 10", "00:01:00 min", "Nivel 2", "37° Centigrados", "00:10:00 min")
			}
			break;
	}
}


// Función para llenar los campos de muestra de tratamiento
function datosTerapia(modoOperacion, duracionOperacion, intensidad, temperatura, duracionTemperatura){
	document.getElementById("modo").value = modoOperacion
	document.getElementById("tiempoModo").value = duracionOperacion
	document.getElementById("intensidad").value = intensidad
	document.getElementById("temperatura").value = temperatura
	document.getElementById("tiempoTemperatura").value = duracionTemperatura
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

	if(falencia != 'nn' && tratamiento != 'nn'){
		envioDeDatos(ip_url, falencia+tratamiento)
		console.log(falencia+tratamiento)
	}else{
		mensajeAlerta("Error !!!", "Debe seleccionar una falencia y un tratamiento.")
	}
}

// funcion para mostrar un temporizador de timpo de modo
var a = 0;
function timerModo(){
	a = a + 1;
	console.log(a)
	//document.getElementById("tiempoModo").value = '00:'+a+':00 min' 
	setTimeout(timerModo(), 10000);
}


// Paro de emergencia
function paroEmergencia(){
	envioDeDatos('http://192.168.43.86/', '66');
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

