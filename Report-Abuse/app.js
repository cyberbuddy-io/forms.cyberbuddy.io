function snackbar(text) {
  var x = document.getElementById("snackbar");
  x.innerHTML = text;
  x.className = "show";
  setTimeout(function(){ x.className = x.classList.remove("show"); }, 3000);
}

function sendData() {
	const db = firebase.database();

	let form = document.getElementById("form");
	let opt = document.getElementById("opt");
	let comments = document.getElementById("comments");

	let bin = 1;

	if (form.value == "" || form.value.length < 18) {
		form.focus();
		snackbar("Please enter valid value.");
		bin = 0;
	} else if (opt.value == "0") {
		opt.focus();
		snackbar("Please select valid value.");
		bin = 0;
	} else if (comments.value == "") {
		comments.focus();
		snackbar("Please enter valid value.");
		bin = 0;
	}

	if (bin == 1) {
		db.ref("zz-reports/").push({
			form: form.value,
			type: opt.value,
			comments: comments.value
		}).then((onResolved) => {
			snackbar("Response Submitted");
			form.value = "";
			opt.value = "";
			comments.value = "";
		});
	}
}

document.getElementById('submit').onclick = sendData;