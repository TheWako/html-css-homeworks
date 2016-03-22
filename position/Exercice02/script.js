window.onload = function(){
	var popup = document.getElementById('popup');
	var cover = document.getElementById('cover');
	var button = document.getElementById('ok');
	document.forms['loginForm'].onsubmit = function(){
		popup.style.display = 'block';
		cover.style.display = 'block';
		return false;
	}
	button.onclick = function(){
		popup.style.display = 'none';
		cover.style.display = 'none';
	}
};