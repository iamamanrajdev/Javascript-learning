document.querySelector('button').addEventListener('click',()=>{

    const place = document.getElementById('location').value;
    const prom=fetch(`http://api.weatherapi.com/v1/current.json?key=74615a01e6ea4205b96150144252607&q=${place}&aqi=no`)
    
    function updateTemp(data){
       const element = document.getElementById('weatherInfo');
       element.innerHTML = `Today's Temperature: ${data.current.temp_c}`;
    }


    prom
    .then(response=>response.json())
    .then(data=> updateTemp(data));



})