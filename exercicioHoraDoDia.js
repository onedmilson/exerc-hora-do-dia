var data = new Date()
var hora = data.getHours()

function time() {
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    hora = (hora < 10 ? "0" : "") + hora
    min = (min < 10 ? "0" : "") + min
    seg = (seg < 10 ? "0" : "") + seg
    var horaAtual = hora + ":" + min + ":" + seg
    document.getElementById("hora").innerHTML = horaAtual
    setTimeout(time, 500)
}

function fotoHora() {
    if (hora >= 4 && hora <= 12) {
        document.getElementById("msg").innerHTML = "BOM DIA!"
        document.getElementById("foto").innerHTML = '<img src="./img/manha.png" alt="Foto do dia">'
        document.body.style.background ="#e2cd9f"
    }
    else if (hora > 12 && hora <= 18) {
        document.getElementById("msg").innerHTML = "BOA TARDE!"
        document.getElementById("foto").innerHTML = '<img src="./img/tarde.png" alt="Foto do dia">'
        document.body.style.background ="#b9846f"
    }
    else {
        document.getElementById("msg").innerHTML = "BOA NOITE!"
        document.getElementById("foto").innerHTML = '<img src="./img/noite.png" alt="Foto do dia">' 
        document.body.style.background ="#515154"  
    }  
}

