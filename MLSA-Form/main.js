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

  var yes_mlsa = document.getElementById("yes-mlsa");
  var no_mlsa = document.getElementById("no-mlsa");
  var maybe_mlsa = document.getElementById("maybe-mlsa");

  var yes_git = document.getElementById("yes-git");
  var no_git = document.getElementById("no-git");

  var db = firebase.database();

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
    email : email
  })
  .then(
    (onResolved) => {
      window.alert("Great!! You are registered for the session. You can contact us on contact@cyberbuddy.io")
    }
  );
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