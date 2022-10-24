let menu = document.querySelector(".menu");

console.log(menu.firstElementChild.offsetHeight);

const menuHandler = (e) => {
	if (!e.target.closest("div.header__burger")) {
		// menu.classList.remove("active");
		menu.style.maxHeight = "0px";
		return;
	}
	// menu.classList.add("active");
	menu.style.maxHeight = menu.firstElementChild.offsetHeight + "px";
};

document.body.addEventListener("click", menuHandler);
