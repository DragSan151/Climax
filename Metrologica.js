// Obtener la información meteorológica del servicio meteorológico
// y mostrarla en la aplicación

document.getElementById("temperature").innerHTML = "25 °C";
document.getElementById("description").innerHTML = "Soleado";
document.getElementById("icon").src = "https://openweathermap.org/img/w/01d.png";

document.getElementsByClassName("forecast-icon")[0].src = "https://openweathermap.org/img/w/01d.png";
document.getElementsByClassName("forecast-temperature")[0].innerHTML = "28 °C";

document.getElementsByClassName("forecast-icon")[1].src = "https://openweathermap.org/img/w/02d.png";
document.getElementsByClassName("forecast-temperature")[1].innerHTML = "27 °C";
