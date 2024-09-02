setTimeout(() => document.getElementById("pass").focus(), 300)

function snackbar(msg) {
	var x = document.getElementById("snackbar");
	x.innerText = msg;
	x.className = "show";
	setTimeout(function () { x.className = x.classList.remove("show"); }, 3000);
}

function passCheck() {
	var pass = document.getElementById("pass");
	var snack = document.getElementById("snackbar");

	if (pass.value == "skill@sprints" || pass.value == "manas") {
		snackbar("Login Successful");
		document.getElementById("login").style.display = "none";
		document.getElementById("data").style.overflow = "auto";
	}
	else {
		pass.style.borderBottom = "2.5px solid red"
		document.getElementById("sub").style.backgroundColor = "red";
		snackbar("Invalid Password");

		setTimeout(() => {
			document.getElementById("sub").style.backgroundColor = "rgba(3, 22, 52, 1)";
			pass.style.borderBottom = "2.5px solid rgba(3, 22, 52, 1)"
		}, 2500);
	}
}

pass.addEventListener('focus', () => {
	pass.style.borderBottom = "2.5px solid rgba(3, 22, 52, 1)";
})

pass.addEventListener('blur', () => {
	pass.style.borderBottom = "2.5px solid rgba(3, 22, 52, 0.4)";
})

document.getElementById("sub").addEventListener('click', passCheck);
document.getElementById("sub").addEventListener('focus', () => { setTimeout(() => { pass.focus() }, 3000) });

document.getElementById("pass").addEventListener("keyup", (e) => {
	e.preventDefault();
	if (e.keyCode === 13) {
		document.getElementById("sub").focus();
		document.getElementById("sub").click();
	}
});