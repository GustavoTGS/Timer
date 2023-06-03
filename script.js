let dd = document.getElementById("Dias");
let hh = document.getElementById("horas");
let mm = document.getElementById("minutos");
let ss = document.getElementById("segundos");

let ponto_dias = document.querySelector(".ponto_dia");
let ponto_horas = document.querySelector(".ponto_horas");
let ponto_minutos = document.querySelector(".ponto_minutos");
let ponto_segundos = document.querySelector(".ponto_segundos");

let anoNovo = "01-01-2024 00:00:00";

let x = setInterval(function () {
    let agora = new Date(anoNovo).getTime();
    let regressiva = new Date().getTime();
    let distancia = agora - regressiva;

    let d = Math.floor(distancia / (1000 * 60 * 60 * 24));
    let h = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distancia % (1000 * 60)) / 1000);

    dias.innerHTML = d + "<br><span>Dias</span>";
    horas.innerHTML = h + "<br><span>Horas</span>";
    minutos.innerHTML = m + "<br><span>Minutos</span>";
    segundos.innerHTML = s + "<br><span>Segundos</span>";

    dd.style.strokeDashoffset = 440 - (440 *d) / 365; 
    hh.style.strokeDashoffset = 440 - (440 *h) / 24; 
    mm.style.strokeDashoffset = 440 - (440 *m) / 60; 
    ss.style.strokeDashoffset = 440 - (440 *s) / 60; 
})