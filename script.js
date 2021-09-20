function myColour() {

	let red = document.getElementById('red').value;
	let green = document.getElementById('green').value;
	let blue = document.getElementById('blue').value;
	let colour = 'RGB(' + red + ',' + green + ',' + blue + ')';
	document.body.style.backgroundColor = colour;
	document.getElementById('box').value = colour;

}
document.getElementById('red')
	.addEventListener('input', myColour);
document.getElementById('green')
	.addEventListener('input', myColour);
document.getElementById('blue')
	.addEventListener('input', myColour);
