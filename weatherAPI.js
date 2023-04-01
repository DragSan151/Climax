const mainContent = document.getElementById('mainContent');


window.addEventListener("load", () =>{
    if(navigator.geolocation){
        try{
            navigator.geolocation.getCurrentPosition(position=>{
                console.log(position);
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=477c9d1b215f96c9f87aae802148c8b7`;

                fetch(url)
                    .then(res => res.json())
                    .then(data =>{
                        console.log(data);

                        mainContent.textContent = Math.round(data.current.temp)+"°C";
                    })
            })
        }
        catch(error){
            console.log("ERROR: "+error);
        }
    }
});