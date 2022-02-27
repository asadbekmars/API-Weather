

const wContainer = document.querySelector(".w-container")


function renderMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const { latitude, longitude } = position.coords
            
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=50d88ccfc6689c4310586ac4386948bc&units=metric`)
            .then((response)=> response.json())
            .then(data =>
               // { console.log(data)} )
                {  
                    data.list.forEach(havo => {
                        const html =`
                        <div class="box">
                        <h5>${havo.dt_txt.slice(0,10)}</h5>
                        <img src=${"http://openweathermap.org/img/w/" + havo.weather[0].icon + ".png"}>                        
                        <h4>${havo.main.temp}&#176 <span>C</span></h4>
                        <p>${havo.weather[0].description}</p>
                        <h3>${havo.weather[0].main}</h3>
                        </div> 
                        `
                        wContainer.insertAdjacentHTML("beforeend", html)
                    })
                    
            })//data  

        })//geolocation
    }//if navigator

}//fetchWeather

renderMap()
                // Click ---------------->
        const body = document.body
        
        const darkTheme = document.querySelector(".dark-theme")
        const dark = document.querySelector(".dark")

        darkTheme.addEventListener("click", function (){
            body.classList.toggle("dark-body")
        })
                
                
           
                
            
        
