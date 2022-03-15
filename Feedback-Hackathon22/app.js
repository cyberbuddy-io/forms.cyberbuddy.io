var date = new Date();

document.getElementById('enjoy5').addEventListener('focus', function() {
  document.getElementById('enjoy4').checked = true;
});

document.getElementById('enjoy5').addEventListener('blur', function() {
  document.getElementById('enjoy4').checked = false;
  if (document.getElementById('enjoy5').value == "") {
    document.getElementById('enjoy4').checked = false;
  } else {
    document.getElementById('enjoy4').checked = true;
  }
});

document.getElementById('enjoy4').addEventListener('click', function() {
  document.getElementById('enjoy5').focus();
});

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
  var name1 = document.getElementById("name");
  var email = document.getElementById("email");
  var remark = document.getElementById("remark");
  var feedback = document.getElementById("feedback");
  var enjoy1 = document.getElementById("enjoy1");
  var enjoy2 = document.getElementById("enjoy2");
  var enjoy3 = document.getElementById("enjoy3");
  var enjoy4 = document.getElementById("enjoy4");
  var enjoy5 = document.getElementById("enjoy5");

  var checkboxes = [enjoy1,enjoy2,enjoy3,enjoy4];
  var check_done = true;
  var languages = "";
  for (var i = 0; i < checkboxes.length ; i++) {
    if (checkboxes[0].checked == false && checkboxes[1].checked == false && checkboxes[2].checked == false && checkboxes[3].checked == false) {
      enjoy5.focus();
      snackbar();
      check_done = false;
      break;
    }
    if (checkboxes[i].checked) {
      languages += checkboxes[i].id + ' ';
    }
  }

  var bin = 0;
  var fields = [name1, email, feedback];
  for (var i = 0; i < fields.length ; i++) {
    if (fields[i].value == '') {
      fields[i].focus();
      snackbar();
      break;
    }
  }
  if (name1.value != '' && feedback.value != '' && email.value != '' && check_done == true) {
    bin = 1;
  }

  var p_key = name1.value;
  if (bin == 1) {
    var db = firebase.database();
    db.ref().push({
      date : date,
      name: name1.value,
      email : email.value,
      remark : remark.value,
      feedback : feedback.value,
      languages : languages,
      other : enjoy5.value
    })
    .then( (onResolved) => {
      document.getElementById("form-1").style.display = "none";
      document.getElementById("form-2").style.display = "unset";
      document.getElementById("name-enter").innerHTML = name1.value;
      window.scrollTo(0,0);
    });
  }
}

function back() {
  document.getElementById("form-1").style.display = "unset";
  document.getElementById("form-2").style.display = "none";
  window.scrollTo(0,0);
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

