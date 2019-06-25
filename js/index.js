var showMenuBtn = document.querySelector('#showMenuBtn');
var hideMenuBtn = document.querySelector('#menuCloseBtn');
var showMenuIcon = document.querySelector('#showMenuIcon');
var hideMenuIcon = document.querySelector('#hideMenuIcon');
var nav = document.querySelector('nav');

// function to show menu
function showMenu(event) {
	// slide nav onto screen
	nav.style.right = "0";
	event.preventDefault();
	console.log("showMenu Started");
	return true;
}

// function to hide menu
function hideMenu(event) {
	// slide nav off screen
	nav.style.right = "-100vw";
	event.preventDefault();
	return true;
}

showMenuBtn.addEventListener("click", showMenu);
showMenuBtn.addEventListener("touchstart", showMenu);
showMenuIcon.addEventListener("touchstart", showMenu);
hideMenuBtn.addEventListener("click", hideMenu);
hideMenuBtn.addEventListener("touch", hideMenu);