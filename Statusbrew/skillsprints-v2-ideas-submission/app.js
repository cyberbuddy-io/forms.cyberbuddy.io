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
setupDynamicInput('yearOther', 'yearRadio', 'yearLabel');

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

function sendMessage() {
  const teamField = document.getElementById("team");
  const memField1 = document.getElementById("mem1");
  const memField2 = document.getElementById("mem2");
  const memField3 = document.getElementById("mem3");
  const memField4 = document.getElementById("mem4");
  const memField5 = document.getElementById("mem5");
  const contactField = document.getElementById("number");
  const emailField1 = document.getElementById("mail1");
  const emailField2 = document.getElementById("mail2");
  const emailField3 = document.getElementById("mail3");
  const emailField4 = document.getElementById("mail4");
  const emailField5 = document.getElementById("mail5");
  const githubField1 = document.getElementById("github1");
  const githubField2 = document.getElementById("github2");
  const githubField3 = document.getElementById("github3");
  const githubField4 = document.getElementById("github4");
  const githubField5 = document.getElementById("github5");
  const projectField = document.getElementById("project");
  const feedbackField = document.getElementById("feed");

  const fields = [teamField, memField1, memField2, memField3, contactField, emailField1, emailField2, emailField3, githubField1, githubField2, githubField3, projectField];
  for (const field of fields) {
    if (field.value.trim() === '') {
      field.focus();
      snackbar("Please fill fields marked *");
      return;
    }
  }

  document.getElementById("submit_btn").disabled = true;
  document.getElementById("submit_btn").innerHTML = "Loading <i style='margin-left:8px' class='fa fa-spinner spinner'></i>";

  const db = firebase.database();
  db.ref("statusbrew/skillsprints-v2-ideas-submission").push({
    team: teamField.value,
    mem1: memField1.value,
    mem2: memField2.value,
    mem3: memField3.value,
    mem4: memField4.value,
    mem5: memField5.value,
    contact: contactField.value,
    email1: emailField1.value,
    email2: emailField2.value,
    email3: emailField3.value,
    email4: emailField4.value,
    email5: emailField5.value,
    github1: githubField1.value,
    github2: githubField2.value,
    github3: githubField3.value,
    github4: githubField4.value,
    github5: githubField5.value,
    project: projectField.value,
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

// document.getElementById("file-upload").addEventListener("click", uploadCheck);

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
  const ref = firebase.storage().ref("");
  const fileInput = document.querySelector('#resume');
  const file = fileInput.files[0];

  if (!file) {
    snackbar("Please select a file to upload.");
    return;
  }

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
      snackbar(`File uploaded successfully! URL: ${refLink}`);
    })
    .catch(error => {
      console.error(error);
      document.getElementById("file-upload").innerHTML = "Upload";
      snackbar("Failed to upload file. Please try again.");
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