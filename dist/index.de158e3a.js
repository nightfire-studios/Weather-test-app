const show_weather = document.querySelector(".show_weather");
const getWeather = async ()=>{
    const response = await fetch(`/greetings`);
    const data = await response.text();
    console.log(data);
};
getWeather();

//# sourceMappingURL=index.de158e3a.js.map
