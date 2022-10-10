let menu = document.querySelector(".menu");


const menuHandler = (e) => {
	if (!e.target.closest("div.header__burger")) {
		menu.classList.remove("active");        
		return;
	}
	menu.classList.add("active");   
};

document.body.addEventListener("click", menuHandler);
