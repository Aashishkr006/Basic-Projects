const cityName = document.getElementById('cityName');
const search = document.getElementById('button');

const city = document.getElementById('city');
const region = document.getElementById('region');
const temperature = document.getElementById('temperature');
const time = document.getElementById('time');

async function getdata(cityname){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=703425363a2f4d3997b45549250406&q=${cityname}&aqi=yes`
    );
    return await promise.json();
}

search.addEventListener("click", async()=>{
    const value = cityName.value;
    const result = await getdata(value);
    console.log(result);

    city.innerText= `Location:- ${result.location.name}`;
    region.innerText= `Region:- ${result.location.region}`;
    temperature.innerHTML= `Temperature:- ${result.current.temp_c} &#8451;`;
    time.innerText= `Local time:- ${result.location.localtime}`
    
    
    
    
})
