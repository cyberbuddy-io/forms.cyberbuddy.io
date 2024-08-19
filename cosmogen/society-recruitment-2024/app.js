let date = new Date();

function setupDynamicInput(inputFieldId, radioButtonId, labelId) {
  const inputField = document.getElementById(inputFieldId);
  const radioButton = document.getElementById(radioButtonId);

  inputField.addEventListener('focus', function () {
    radioButton.checked = true;
  });

  inputField.addEventListener('input', function () {
    if (this.value.trim() !== "") {
      radioButton.checked = true;
    }
  });

  inputField.addEventListener('blur', function () {
    if (this.value.trim() === "") {
      radioButton.checked = false;
    }
  });

  const label = document.getElementById(labelId);

  inputField.addEventListener('keyup', function () {
      label.textContent = inputField.value;
  });
}

setupDynamicInput('departmentOther', 'departmentRadio', 'departmentLabel');
setupDynamicInput('teamOther', 'teamRadio', 'teamLabel');
setupDynamicInput('domainOther', 'domainRadio', 'domainLabel');

// document.getElementById('form-1').style.display = 'none';

function start() {
  var ele = document.querySelectorAll("input");
  ele.forEach((e) => {
    e.disabled = true;
    e.placeholder = "This form is closed.";
  });
};

function snackbar(message) {
  var x = document.getElementById("snackbar");
  x.innerText = message;
  x.classList.add("show");
  setTimeout(function () {
    x.classList.remove("show");
  }, 3000);
}

let resumeLink = ""

function sendMessage() {
  const nameField = document.getElementById("name");
  const mailField = document.getElementById("mail");
  const contactField = document.getElementById("phone");
  const feedbackField = document.getElementById("feed");

  const fields = [nameField, mailField, contactField];
  for (const field of fields) {
    if (field.value.trim() === '') {
      field.focus();
      snackbar("Please fill fields marked *");
      return;
    }
  }

  const department = getRadioValue('department');
  if (!department) {
    document.querySelector('input[name="department"]').focus();
    snackbar("Please select your department preference.");
    return;
  }

  const year = getRadioValue('year');
  if (!year) {
    document.querySelector('input[name="year"]').focus();
    snackbar("Please select your year preference.");
    return;
  }

  const team = getRadioValue('team');
  if (!team) {
    document.querySelector('input[name="team"]').focus();
    snackbar("Please select your team preference.");
    return;
  }

  const domain = getRadioValue('domain');
  if (!domain) {
    document.querySelector('input[name="domain"]').focus();
    snackbar("Please select your domain preference.");
    return;
  }

  if (resumeLink == "") {
    document.querySelector('#file-upload').focus();
    snackbar("Please add your resume");
    return;
  }

  document.getElementById("submit_btn").disabled = true;
  document.getElementById("submit_btn").innerHTML = "Loading <i style='margin-left:8px' class='fa fa-spinner spinner'></i>";

  const db = firebase.database();
  db.ref("cosmogen/society-recruitment-2024").push({
    name: nameField.value,
    mail: mailField.value,
    contact: contactField.value,
    department: department,
    year: year,
    team: team,
    domain: domain,
    resume: resumeLink,
    feedback: feedbackField.value
  })
    .then(() => {
      document.getElementById("form-1").style.display = "none";
      document.getElementById("form-2").style.display = "unset";
      document.getElementById("username").textContent = nameField.value;
      window.scrollTo(0, 0);
    })
    .catch(error => {
      console.error(error);
      document.getElementById("submit_btn").disabled = false;
      document.getElementById("submit_btn").innerHTML = "Submit";
      snackbar("Failed to submit. Please try again.");
    });
}

function getRadioValue(name) {
  const selectedOption = document.querySelector(`input[name="${name}"]:checked`);
  if (selectedOption) {
    const label = document.querySelector(`label[for="${selectedOption.id}"]`);
    return label ? label.textContent : null;
  }
  return null;
}

function preventDefault(e) {
  e.preventDefault();
}

document.getElementById("file-upload").addEventListener("click", uploadCheck);

function uploadCheck(event) {
  const usr = document.getElementById("name");
  if (usr.value === "") {
    event.preventDefault();
    usr.focus();
    snackbar("Please enter your name.");
  } else {
    uploadFile();
  }
}

function uploadFile() {
  const ref = firebase.storage().ref("cosmogen/society-recruitment-2024");
  const fileInput = document.querySelector('#resume');
  const file = fileInput.files[0];

  document.getElementById("file-name").innerHTML = file.name;
  const usr = document.getElementById("name");
  const name = (+new Date()) + '-' + usr.value;
  const metadata = {
    contentType: file.type
  };

  const task = ref.child(name).put(file, metadata);

  document.getElementById("file-upload").innerHTML = "Please Wait <i class='fa fa-spinner spinner'></i>";

  task
    .then(async snapshot => {
      const refLink = await ref.child(name).getDownloadURL();
      document.getElementById("file-upload").innerHTML = "File Uploaded!!";
      console.log(`File uploaded successfully! URL: ${refLink}`);
      resumeLink = refLink;
    })
    .catch(error => {
      console.error(error);
      document.getElementById("file-upload").innerHTML = "Upload";
      console.log("Failed to upload file. Please try again.");
    });
}

function resetClasses(elements) {
  elements.forEach((element) => {
    element.className = '';
  });
}

function applyClasses(elements, className) {
  elements.forEach((element) => {
    element.classList.add(className);
  });
}

function setBackgroundColor(color) {
  const testElement = document.getElementById("test");
  const divs = document.querySelectorAll('#div-test');
  const btns = document.querySelectorAll('#input-test');

  // Reset all classes
  testElement.className = '';
  resetClasses(divs);
  resetClasses(btns);

  // Apply new classes
  testElement.classList.add(`${color}-bg`);
  applyClasses(divs, `${color}-bg-div`);
  applyClasses(btns, `${color}-bg-input`);
}

function white_bg() {
  setBackgroundColor('white');
}

function green_bg() {
  setBackgroundColor('green');
}

function dark_bg() {
  setBackgroundColor('dark');
}

function peach_bg() {
  setBackgroundColor('peach');
}

function purple_bg() {
  setBackgroundColor('purple');
}


$("aside img").click(function () {
  /*alert($( this ).css( "transform" ));*/
  if ($(this).css("transform") == 'none') {
    $(this).css("transform", "rotate(180deg)");
  } else {
    $(this).css("transform", "");
  }
});

function modal_dis() {
  document.getElementById("modal").style.display = "none";
}

function modal() {
  document.getElementById("modal").style.display = "grid";
}