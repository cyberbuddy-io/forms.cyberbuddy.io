var database = firebase.database();

const date = new Date();

function start() {
  var ele = document.querySelectorAll("input");
  ele.forEach((e) => {
    e.disabled = true;
    e.placeholder = "This form is closed.";
  });
}

function send_message() {
  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;
  var email = document.getElementById("email").value;

  var yes_mlsa = document.getElementById("yes_mlsa");
  var no_mlsa = document.getElementById("no_mlsa");
  var maybe_mlsa = document.getElementById("maybe_mlsa");

  var yes_git = document.getElementById("yes_git");
  var no_git = document.getElementById("no_git");

  var institute = document.getElementById("institute").value;

  var btech = document.getElementById("btech");
  var bca = document.getElementById("bca");
  var bcom = document.getElementById("bcom");
  var other_branch = document.getElementById("other_branch");

  var db = firebase.database();

  if (name == "") {
    alert("Please enter your name.")
  }

  else if (email == "") {
    alert("Please enter your email.")
  }

  else {
    if (yes_mlsa.checked == true) {
      db.ref(name + date).push({work : yes_mlsa.id})
    }
    else if (no_mlsa.checked == true) {
      db.ref(name + date).push({work : no_mlsa.id})
    }
    else if (maybe_mlsa.checked == true){
      db.ref(name + date).push({work : maybe_mlsa.id})
    }
    else {
      
    }

    if (btech.checked == true) {
      db.ref(name + date).push({work : btech.id})
    }
    else if (bca.checked == true) {
      db.ref(name + date).push({work : bca.id})
    }
    else if (bcom.checked == true){
      db.ref(name + date).push({work : bcom.id})
    }
    else if (other_branch.checked == true){
      db.ref(name + date).push({work : other_branch.id})
    }
    else {
      
    }

    if (yes_git.checked == true) {
      db.ref(name + date).push({work : yes_git.id})
    }
    else if (no_git.checked == true) {
      db.ref(name + date).push({work : no_git.id})
    }
    else {

    }

    db.ref(name + date).push({
      username: name,
      message: message,
      email : email,
      institute : institute
    })
    .then(
      (onResolved) => {
        window.alert("Great!! You are registered for the session. Youl'll recieve a mail from our side soon. You can contact us on contact@cyberbuddy.io")
      }
    );
  }

  var ele = document.querySelectorAll("input");
  ele.forEach((e) => {
    e.value = null;
    e.checked = false;
  });
  
  var sub = document.getElementById("submit");
  if (sub.value == "") {sub.value = "Awesome!!";}
}
/*
function white_bg() {
  var color_body = document.querySelector("#test").classList.value;
  document.getElementById("test").classList.remove(color_body);
  var color_div = document.querySelector("#div-test").classList.value;
  var color_input = document.querySelector("#input-test").classList.value;
  var divs = document.querySelectorAll('#div-test');
  divs.forEach((e) => {
    e.classList.remove(color_div);
  });
  document.getElementById("input-test").classList.remove(color_input);
}

function green_bg() {
  document.getElementById("test").classList.add("green-bg");
  var divs = document.querySelectorAll('#div-test');
  divs.forEach((e) => {
    e.classList.add("green-bg-div");
  });
  document.getElementById("input-test").classList.add("green-bg-input");
}*/