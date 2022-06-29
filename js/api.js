const API_KEY = "cb1d3d6ededfaa9a2a071f317de88cc6";
const URL = "http://api.weatherstack.com/";

let query_type = "current";
let city = "Annecy";

let full_url = URL + query_type + "?access_key=" + API_KEY + "&query=" + city;


// let city_annecy = {
// 	name : "Annecy",
// 	location: {
// 		long: "6.129384",
// 		lat: "45.899247"
// 	}
// }

// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
// console.log(date + 'T' + time + 'Z');

const info_temp = document.querySelector('.info_temp');
const info_city = document.querySelector('.info_city');
const info_day = document.querySelector('.info_day');
const info_weather_img = document.querySelector('.info_weather_img');
const info_weather_txt = document.querySelector('.info_weather_txt');


document.addEventListener("DOMContentLoaded", function() {

	axios.get(full_url).then(function(response) {
        console.log(response);

		info_temp.appendChild(document.createTextNode(response.data.current.temperature + "°"));
		info_city.appendChild(document.createTextNode(response.data.location.name));

	})

})







function create(tag, parent, content=null, classs=null, id=null) {

	let element = document.createElement(tag)

	if (content)
		element.appendChild(document.createTextNode(content))
	if (id)
		element.id = id
	if (classs)
		element.classList.add(classs)

	parent.appendChild(element)

	return element
}