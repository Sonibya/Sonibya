// Toggle class active
const navbarNav = document.querySelector('ul');

// Ketika hambuger menu diklik
document.querySelector("#hamburger-menu").onclick = function() {myFunction()};

function myFunction() {
 navbarNav.classList.toggle("active");
}




// klik di luar sidebar untuk menghilangkan navbarNav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
	if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
		navbarNav.classList.remove('active');
	}
});