let date = new Date();

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
  x.className = "show";
  setTimeout(function () {
    x.className = x.classList.remove("show");
  }, 3000);
}

function sendMessage() {
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("mail");
  const departmentField = document.getElementById("department");
  const feedbackField = document.getElementById("feed");

  const fields = [nameField, emailField, departmentField];
  for (const field of fields) {
    if (field.value.trim() === '') {
      field.focus();
      snackbar("Please fill fields marked *");
      return;
    }
  }

  const pc = getRadioValue('pc');
  if (!pc) {
    document.querySelector('input[name="pc"]').focus();
    snackbar("Please select your PC preference.");
    return;
  }

  const computerLab = getRadioValue('computerLab');
  if (!computerLab) {
    document.querySelector('input[name="computerLab"]').focus();
    snackbar("Please select your computer lab preference.");
    return;
  }

  document.getElementById("submit_btn").disabled = true;
  document.getElementById("submit_btn").innerHTML = "Loading <i style='margin-left:8px' class='fa fa-spinner spinner'></i>";

  const db = firebase.database();
  db.ref("internal/gndu-students-laptop-requirement-check-24").push({
    name: nameField.value,
    email: emailField.value,
    department: departmentField.value,
    pc: pc,
    computerLab: computerLab,
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