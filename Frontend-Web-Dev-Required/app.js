var date = new Date();

document.getElementById('other_lang').addEventListener('focus', function() {
  document.getElementById('other_lang_check').checked = true;
});

document.getElementById('other_lang').addEventListener('blur', function() {
  document.getElementById('other_lang_check').checked = false;
  if (document.getElementById('other_lang').value == "") {
    document.getElementById('other_lang_check').checked = false;
  } else {
    document.getElementById('other_lang_check').checked = true;
  }
});

document.getElementById('other_lang_check').addEventListener('click', function() {
  document.getElementById('other_lang').focus();
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
  var number = document.getElementById("number");
  var email = document.getElementById("email");
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var other_lang = document.getElementById("other_lang");
  var other_lang_check = document.getElementById("other_lang_check");
  var other_tech = document.getElementById("other_tech");
  var ques = document.getElementById("ques");

  var checkboxes = [html,css,js,other_lang_check];
  var check_done = true;
  var languages = "";
  for (var i = 0; i < checkboxes.length ; i++) {
    if (checkboxes[0].checked == false && checkboxes[1].checked == false && checkboxes[2].checked == false && checkboxes[3].checked == false) {
      other_lang.focus();
      snackbar();
      check_done = false;
      break;
    }
    if (checkboxes[i].checked) {
      languages += checkboxes[i].id + ' ';
    }
  }

  var bin = 0;
  var fields = [name1, number, email];
  for (var i = 0; i < fields.length ; i++) {
    if (fields[i].value == '') {
      fields[i].focus();
      snackbar();
      break;
    }
  }
  if (name1.value != '' && number.value != '' && email.value != '' && check_done == true) {
    bin = 1;
  }

  var p_key = name1.value;
  if (bin == 1) {
    var db = firebase.database();
    db.ref(p_key).set({
      date : date,
      name: name1.value,
      number: number.value,
      email : email.value,
      languages : languages,
      other_lang : other_lang.value,
      other_tech : other_tech.value,
      ques : ques.value
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

