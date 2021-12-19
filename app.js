// let a=document.createElement('a');
// a.target='_blank';
// a.href='http://cors-anywhere.herokuapp.com/corsdemo';
// if (window.confirm('Nhấn OK để xin quyền truy cập của proxy Cors-Anywhere, nhấn Cancel nếu đã thực hiện.'))
// {
// a.click();
// };

window.addEventListener('load',()=>{    //load khi window đc mở
    let long 
    let lat
    const temperatureDesscription = document.querySelector(".temperature-description")
    const temperatureDegree = document.querySelector(".temperature-degree")
    const locationTimezone = document.querySelector(".location-timezone")
    let temperatureSection = document.querySelector(".temperature")
    const temperatureSpan = document.querySelector(".temperature span")

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{      //arrowfuction không có argument(i.e chỉ sự dụng được ở đó?)
            //console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';       //thông qua template string để tiện thay đổi về sau
            const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}` 

            fetch(api)
            .then(response =>{
                return response.json()
            })
            .then(data =>{
                console.log(api);
                console.log(data);
                const {temperature,summary,icon} = data.currently

                // DOM elements từ API 
                temperatureDegree.textContent = temperature
                temperatureDesscription.textContent = summary
                locationTimezone.textContent= data.timezone

                //công thức đổi Celcius
                let celcius = (temperature-32)*(5/9)

                //đặt Icon
                setIcons(icon, document.querySelector(".icon"))

                //đổi nhiệt độ giữa Celcius/Farenheit
                temperatureSection.addEventListener("click",()=>{
                    if(temperatureSpan.textContent === "F"){
                        temperatureSpan.textContent = "C"
                        temperatureDegree.textContent = celcius.toFixed(2)
                        console.log(celcius);
                    } else{
                        temperatureSpan.textContent = "F"
                        temperatureDegree.textContent = temperature
                    }
                })
            })
        })
    }

    function setIcons (icon, iconId){
        const skycons = new Skycons({color: "white"})
        const currentIcon = icon.replace(/-/g,"_").toUpperCase() 
        //thay thế - bằng _ rồi viết hoa toàn bộ để đồng nhất giữa query canvas và api   
        console.log(currentIcon);
        skycons.play()
        return skycons.set(iconId,Skycons[currentIcon])
    }
}); 

