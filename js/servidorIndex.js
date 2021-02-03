document.getElementById('url_server').focus();

var ip_url;
//var ip_url = 'http://192.168.43.225/';
// 192.168.1.17
// 192.168.0.100
// var ip_url = 'http://192.168.0.134/';

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

function generarIframe() {    // mostrar pagina de ipwebcam
    var url = document.getElementById('url_cam').value;
    document.getElementById('ipWebCam').src = 'http://' + url + '/video';
    document.getElementById('tools').src = 'http://' + url + '/settings_window.html';
    document.getElementById('sonido').src = 'http://' + url + '/audio.wav';
    document.getElementById('dato').focus();
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

function conect_server() {
    ip_url = document.getElementById('url_server').value;
    ip_url = 'http://' + ip_url + '/';
    console.log(ip_url);
    document.getElementById('url_cam').focus();

}

function on() {   // encender carro
    console.log('Encender: ' + '1');
    envioDeDatos(ip_url, 'datos=' + '1');
}

function off() {  // apagar carro
    console.log('Apagar: ' + '0');
    envioDeDatos(ip_url, 'datos=' + '0');
}

function ayuda() {
    window.open("../html/ayuda.html", "Manual de Ayuda", "width=380,height=575, top=50,left=512");
}