let arrowState = false;
let crossState = false;
let requireState = false;

let n_field = 2

document.querySelector('.arrow').addEventListener('click', (e) => {
	if (arrowState == true) {
		document.querySelector('.arrow').classList.remove('arrow-active');
		arrowState = false;
		document.querySelector('#cat-menu').style.animation = 'disappear 1s ease-in-out';
		setTimeout((e) => {
			document.querySelector('#cat-menu').style.display = 'none';
		},1000)
	} else {
		document.querySelector('.arrow').classList.add('arrow-active');
		arrowState = true;
		document.querySelector('#cat-menu').style.display = 'unset';
		document.querySelector('#cat-menu').style.animation = 'appear 0.5s ease-in-out';
	}
});

document.querySelector('#cross' + n_field).addEventListener('click', () => {
	if (crossState == true) {
		document.querySelector('#cross' + n_field).classList.remove('cross-active');
		crossState = false;
	} else {
		document.querySelector('#cross' + n_field).classList.add('cross-active');
		crossState = true;
	}

	document.getElementById('field' + n_field).style.opacity = '0';
	setTimeout((e) => {
			document.querySelector('#field' + n_field).remove();
	},1000)
});

document.querySelector('.slider').addEventListener('click', () => {
	if (document.querySelector('#qrcheck').checked == false) {
		document.querySelector('#r_tab').style.fontWeight = '600';
		document.querySelector('#q_tab').style.fontWeight = '300';
	} else {
		document.querySelector('#q_tab').style.fontWeight = '600';
		document.querySelector('#r_tab').style.fontWeight = '300';
	}
});

function requireCheck() {
	if (requireState == false) {
		document.getElementById('tick' + n_field).style.display = 'none';
		requireState = true;
		document.getElementById('check_req_box' + n_field).checked = false;
	} else {
		document.getElementById('tick' + n_field).style.display = 'unset';
		requireState = false;
		document.getElementById('check_req_box' + n_field).checked = true;
	}
}

document.querySelector('.require' + n_field).onclick = requireCheck;
document.getElementById('labelForReq' + n_field).onclick = requireCheck;