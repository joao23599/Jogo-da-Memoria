const input = document.querySelector('.loginInput'); 
const button = document.querySelector('.loginButton'); 
const form = document.querySelector('.loginForm'); 

const validarInput = ({target}) => {
	if (target.value.length > 2) {
		button.removeAttribute('disabled'); 
	} else {
		button.setAttribute('disabled', ''); 
	}
}

const handleSubmit = (event) => {
	event.preventDefault(); 
	localStorage.setItem('player', input.value); 
	window.location.href="jogar.html"; 
}

input.addEventListener('input', validarInput); 
form.addEventListener('submit', handleSubmit); 