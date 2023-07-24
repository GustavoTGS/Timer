let dias = document.getElementById("dias");
let horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");

let dd = document.getElementById("dd");
let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let ponto_dias = document.querySelector(".ponto_dias");
let ponto_horas = document.querySelector(".ponto_horas");
let ponto_minutos = document.querySelector(".ponto_minutos");
let ponto_segundos = document.querySelector(".ponto_segundos");

let anoNovo = "01-01-2024 00:00:00";

let x = setInterval(function () {
    let now = new Date(anoNovo).getTime();
    let countDown = new Date().getTime();
    let distancia = now - countDown;

    let d = Math.floor(distancia / (1000 * 60 * 60 * 24));
    let h = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distancia % (1000 * 60)) / 1000);

    dias.innerHTML = d + "<br><span>dias</span>";
    horas.innerHTML = h + "<br><span>horas</span>";
    minutos.innerHTML = m + "<br><span>minutos</span>";
    segundos.innerHTML = s + "<br><span>segundos</span>";

    dd.style.strokeDashoffset = 440 - (440 * d) / 365; 
    hh.style.strokeDashoffset = 440 - (440 * h) / 24; 
    mm.style.strokeDashoffset = 440 - (440 * m) / 60; 
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
    
    ponto_dias.style.transform = `rotateZ(${d * 0.986}deg)`;
    ponto_horas.style.transform = `rotateZ(${h * 15}deg)`;
    ponto_minutos.style.transform = `rotateZ(${m * 6}deg)`;
    ponto_segundos.style.transform = `rotateZ(${s * 6}deg)`;

    if(distancia < 0 ){
        clearInterval(x);
        document.getElementById("time").style.display = "none";
        document.querySelector(".anoNovo").style.display = "block";
    }
})