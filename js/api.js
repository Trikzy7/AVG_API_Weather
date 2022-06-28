const API_KEY = "cb1d3d6ededfaa9a2a071f317de88cc6";
const URL = "http://api.weatherstack.com/";

let query_type = "current";
let city = "Annecy_le-Vieux";

let full_url = URL + query_type + "?access_key=" + API_KEY + "&query=" + city;


document.addEventListener("DOMContentLoaded", function() {

	axios.get(full_url).then(function(response) {
        console.log(response);
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