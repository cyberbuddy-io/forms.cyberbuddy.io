let date = new Date();

function start() {
  var ele = document.querySelectorAll("input");
  ele.forEach((e) => {
    e.disabled = true;
    e.placeholder = "This form is closed.";
  });
};

function snackbar() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function send_message() {
  var name1 = document.getElementById("name1");
  var name2 = document.getElementById("name2");
  var name3 = document.getElementById("name3");
  var name4 = document.getElementById("name4");
  var number = document.getElementById("number");
  var team = document.getElementById("team");

  var bin = 0;
  var fields = [name1, number];
  for (var i = 0; i < fields.length ; i++) {
    if (fields[i].value == '') {
      fields[i].focus();
      snackbar();
      break;
    }
  }
  if (name1.value != '' && number.value != '') {
    bin = 1;
  }

  var p_key = name1.value;
  if (bin == 1) {
    var db = firebase.database();
    db.ref("1/" + p_key).set({
      date : date,
      name1: name1.value,
      name2: name2.value,
      name3: name3.value,
      name4: name4.value,
      number : number.value,
      team : team.value
    })
    .then( (onResolved) => {
      document.getElementById("form-1").style.display = "none";
      document.getElementById("form-2").style.display = "unset";
      document.getElementById("username").innerHTML = name1.value;
      window.scrollTo(0,0);
    });
  }
}

function white_bg() {
  document.getElementById("test").classList = null;
  var divs = document.querySelectorAll('#div-test');
  divs.forEach((e) => {
    e.classList = null;
  });
  var btns = document.querySelectorAll('#input-test');
  btns.forEach((e) => {
    e.classList = null;
  });
}

function green_bg() {
  white_bg();
  document.getElementById("test").classList.add("green-bg");
  var divs = document.querySelectorAll('#div-test');
  divs.forEach((e) => {
    e.classList.add("green-bg-div");
  });
  var btns = document.querySelectorAll('#input-test');
  btns.forEach((e) => {
    e.classList.add("green-bg-input");
  });
}

function dark_bg() {
  white_bg();
  document.getElementById("test").classList.add("dark-bg");
  var divs = document.querySelectorAll('#div-test');
  divs.forEach((e) => {
    e.classList.add("dark-bg-div");
  });
  var btns = document.querySelectorAll('#input-test');
  btns.forEach((e) => {
    e.classList.add("dark-bg-input");
  });
}

function peach_bg() {
  white_bg();
  document.getElementById("test").classList.add("peach-bg");
  var divs = document.querySelectorAll('#div-test');
  divs.forEach((e) => {
    e.classList.add("peach-bg-div");
  });
  var btns = document.querySelectorAll('#input-test');
  btns.forEach((e) => {
    e.classList.add("peach-bg-input");
  });
}

function purple_bg() {
  white_bg();
  document.getElementById("test").classList.add("purple-bg");
  var divs = document.querySelectorAll('#div-test');
  divs.forEach((e) => {
    e.classList.add("purple-bg-div");
  });
  var btns = document.querySelectorAll('#input-test');
  btns.forEach((e) => {
    e.classList.add("purple-bg-input");
  });
}

$( "aside img" ).click(function() {
  /*alert($( this ).css( "transform" ));*/
  if (  $( this ).css( "transform" ) == 'none' ){
      $(this).css("transform","rotate(180deg)");
  } else {
      $(this).css("transform","" );
  }
});

