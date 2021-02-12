function callApi(city) {
    const web = "http://api.openweathermap.org/data/2.5/weather";
    const key = "108cf238dd5beb2cab700ba003f03797";
    const url = `${web}?q=${city}&appid=${key}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const userData=data;
        displayProperty(userData);
      })
      .catch(error =>alert("Wrong city Name"))
      
  }

  function getCityName() {
    const inputCity = document.getElementById("input-city").value;
    callApi(inputCity);
  }
 function displayProperty(dataAll){
   console.log(dataAll);
    const cityName = dataAll.name;
    document.getElementById("location").innerText = cityName;
    const currentTemp= dataAll.main.temp;
    const temperature = (currentTemp- 273.15);
    const fixTemp =temperature.toFixed(2);
    document.getElementById("current-temp").innerText = fixTemp;
    const skyType =dataAll['weather'][0]['description'];
    console.log(skyType);
    document.getElementById("sky").innerHTML =skyType;
   
    
 }