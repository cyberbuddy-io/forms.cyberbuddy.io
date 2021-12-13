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
  var number = document.getElementById("number").value;
  var message = document.getElementById("message").value;
  var email = document.getElementById("email").value;
  var yes = document.getElementById("yes");
  var no = document.getElementById("no");
  var maybe = document.getElementById("maybe");
  var html = document.getElementById("html");
  var js = document.getElementById("js");
  var python = document.getElementById("python");
  var cpp = document.getElementById("cpp");
  var java = document.getElementById("java");
  var db = firebase.database();
  if (yes.checked == true) {
    db.ref(name + number).push({work : yes.id})
  }
  else if (no.checked == true) {
    db.ref(name + number).push({work : no.id})
  }
  else {
    db.ref(name + number).push({work : maybe.id})
  }
  if (html.checked == true) {
    db.ref(name + number).push({language : html.id})
  }
  if (js.checked == true) {
    db.ref(name + number).push({language : js.id})
  }
  if (python.checked == true) {
    db.ref(name + number).push({language : python.id})
  }
  if (cpp.checked == true) {
    db.ref(name + number).push({language : cpp.id})
  }
  if (java.checked == true) {
    db.ref(name + number).push({language : java.id})
  }
  db.ref(name + number + date).push({
    username: name,
    number: number,
    message: message,
    email : email
  })
  .then(
    (onResolved) => {
      window.alert("Your response has been sent. We'll contact you soon on your Email ID. You can contact us on contact@cyberbuddy.io")
    }
  );
}

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
}

function dark_bg() {
  document.getElementById("test").classList.add("dark-bg");
  var divs = document.querySelectorAll('#div-test');
  divs.forEach((e) => {
    e.classList.add("dark-bg-div");
  });
  document.getElementById("input-test").classList.add("dark-bg-input");
}

$( "aside img" ).click(function() {
  //alert($( this ).css( "transform" ));
  if (  $( this ).css( "transform" ) == 'none' ){
      $(this).css("transform","rotate(180deg)");
  } else {
      $(this).css("transform","" );
  }
});