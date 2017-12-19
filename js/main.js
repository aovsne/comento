var button = document.getElementById('button')

button.addEventListener('click', function getInfo(){
	var ming = document.getElementById('ming').value
	var com = document.getElementById('komento').value
	var main = document.getElementById('gone')
	var result = document.getElementById('result')
	var head = document.getElementById('header')
	var par = document.getElementById('para')

	gone.style.display = "none"
	head.innerHTML = "Name: " + ming
	par.innerHTML = "Comment: " + com
	result.style.display = 'block'

}
)


