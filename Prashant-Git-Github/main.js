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
  var batch = 1;
  var db = firebase.database();
  if(document.getElementById("1").checked == true){
    batch = 1;
  }
  else if(document.getElementById("2").checked == true){
    batch = 2;
  }
  else{}

  db.ref(name + number + date).set({
    username: name,
    number: number,
    email: email,
    batch: batch,
    message: message
  })
  .then(
    (onResolved) => {
      window.alert("Your response has been sent. We'll contact you soon on your Whatsapp. You can contact us on contact@cyberbuddy.io")
    }
  );
}

function white_bg() {
  document.getElementById("test").classList = null;
  var divs = document.querySelectorAll('#div-test');
  divs.forEach((e) => {
    e.classList = null;
  });
  document.getElementById("input-test").classList = null;
}

function green_bg() {
  white_bg();
  document.getElementById("test").classList.add("green-bg");
  var divs = document.querySelectorAll('#div-test');
  divs.forEach((e) => {
    e.classList.add("green-bg-div");
  });
  document.getElementById("input-test").classList.add("green-bg-input");
}

function dark_bg() {
  white_bg();
  document.getElementById("test").classList.add("dark-bg");
  var divs = document.querySelectorAll('#div-test');
  divs.forEach((e) => {
    e.classList.add("dark-bg-div");
  });
  document.getElementById("input-test").classList.add("dark-bg-input");
}

function peach_bg() {
  white_bg();
  document.getElementById("test").classList.add("peach-bg");
  var divs = document.querySelectorAll('#div-test');
  divs.forEach((e) => {
    e.classList.add("peach-bg-div");
  });
  document.getElementById("input-test").classList.add("peach-bg-input");
}

function purple_bg() {
  white_bg();
  document.getElementById("test").classList.add("purple-bg");
  var divs = document.querySelectorAll('#div-test');
  divs.forEach((e) => {
    e.classList.add("purple-bg-div");
  });
  document.getElementById("input-test").classList.add("purple-bg-input");
}

$( "aside img" ).click(function() {
  //alert($( this ).css( "transform" ));
  if (  $( this ).css( "transform" ) == 'none' ){
      $(this).css("transform","rotate(180deg)");
  } else {
      $(this).css("transform","" );
  }
});