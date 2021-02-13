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
			mensajeAlerta("Debilidad muscular Cervical",
				"La debilidad muscular cervical es lo que le supone al paciente una \
				sensación de inestabilidad, como si le costase mantener la cabeza."
			)
			break;
		case "2":
			mensajeAlerta("Torticulis",
				"Es la distonía cervical más común, la contracción de los músculos \
				del cuello hace que éste se desvíe de su posición normal y cause dolor."
			)
			break;
		case "3":
			mensajeAlerta("Estrés", 
				"La tensión muscular por estrés se ha asociado con el dolor de cabeza \
				tensional, aunque también causa dolores musculares crónicos, contracturas e incluso espasmos musculares."
			)
			break;
		case "4":
			mensajeAlerta("Hiperextensión Cervical", 
				"Es una lesión del cuello por un movimiento excesivo que se produce \
				en la columna cervical a alta velocidad a causa de un traumatismo repentino."
			)
			break;
		case "5":
			mensajeAlerta("Cervicalgia por Factor Mecánico", 
				"La cervicalgia mecánica es la forma más frecuente de dolor cervical. \
				Los malos hábitos posturales constituyen los principales factores desencadenantes de cuadros de cervicalgia mecánica aguda."
			)
			break;
	}
}

// Funcion para desplegar un mensaje de descripción de cada Tratamiento
// variables tratamiento
function selecionarTratamiento(){
	var falencia = document.getElementById("selectFalencia").value
	var tratamiento = document.getElementById("selectTratamiento").value

	switch(falencia){
		case "1":
			if(tratamiento=='1'){
				mensajeAlerta("Tratamiento 1", falUnoTraUno)
				datosTerapia("Modo 1", "00:01:00 min", "Nivel 2", "37° Centigrados", "00:10:00 min")
			}else{
				mensajeAlerta("Tratamiento 2", falUnoTraDos)
				datosTerapia("Modo 2", "00:01:00 min", "Nivel 2", "37° Centigrados", "00:10:00 min")
			}
			break;
		case "2":
			if(tratamiento=='1'){
				mensajeAlerta("Tratamiento Primario", falDosTraUno)
				datosTerapia("Modo 3", "00:01:00 min", "Nivel 2", "37° Centigrados", "00:10:00 min")
			}else{
				mensajeAlerta("Tratamiento Secundario", falDosTraDos)
				datosTerapia("Modo 4", "00:01:00 min", "Nivel 2", "37° Centigrados", "00:10:00 min")
			}
			break;
		case "3":
			if(tratamiento=='1'){
				mensajeAlerta("Tratamiento Primario", falTresTraUno)
				datosTerapia("Modo 5", "00:01:00 min", "Nivel 2", "37° Centigrados", "00:10:00 min")
			}else{
				mensajeAlerta("Tratamiento Secundario", falTresTraDos)
				datosTerapia("Modo 6", "00:01:00 min", "Nivel 2", "37° Centigrados", "00:10:00 min")
			}
			break;
		case "4":
			if(tratamiento=='1'){
				mensajeAlerta("Tratamiento Primario", falCuatroTraUno)
				datosTerapia("Modo 7", "00:01:00 min", "Nivel 2", "37° Centigrados", "00:10:00 min")
			}else{
				mensajeAlerta("Tratamiento Secundario", falCuatroTraDos)
				datosTerapia("Modo 8", "00:01:00 min", "Nivel 2", "37° Centigrados", "00:10:00 min")
			}
			break;
		case "5":
			if(tratamiento=='1'){
				mensajeAlerta("Tratamiento Primario", falCincoTraUno)
				datosTerapia("Modo 9", "00:01:00 min", "Nivel 2", "37° Centigrados", "00:10:00 min")
			}else{
				mensajeAlerta("Tratamiento Secundario", falCincoTraDos)
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

