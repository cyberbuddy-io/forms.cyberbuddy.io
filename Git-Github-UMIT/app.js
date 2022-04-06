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

document.getElementById('other_field_check').addEventListener('click', function() {
  document.getElementById('other_field').focus();
});

document.getElementById('other_field').addEventListener('focus', function() {
  document.getElementById('other_field_check').checked = true;
});

document.getElementById('other_field').addEventListener('blur', function() {
  document.getElementById('other_field_check').checked = false;
  if (document.getElementById('other_field').value == "") {
    document.getElementById('other_field_check').checked = false;
  } else {
    document.getElementById('other_field_check').checked = true;
  }
});

document.getElementById('other_field_check').addEventListener('click', function() {
  document.getElementById('other_field').focus();
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

  var git = document.getElementById('yes_git');
  var git_no = document.getElementById('no_git');
  
  let gitcheck = 'yes';
  if (!git.checked) {
    gitcheck = 'no';
  }

  let git_done = true; 
  if (git.checked == false && git_no.checked == false) {
    git.focus();
    snackbar();
    git_done = false;
  }

  var html = document.getElementById("html");
  var cpp = document.getElementById("cpp");
  var python = document.getElementById("python");
  var java = document.getElementById("java");
  var other_lang = document.getElementById("other_lang");
  var other_lang_check = document.getElementById("other_lang_check");
  var ques = document.getElementById("ques");

  var checkboxes = [html, js, cpp, python, java, other_lang_check];
  var check_done = true;
  var languages = "";
  for (var i = 0; i < checkboxes.length ; i++) {
    if (checkboxes[0].checked == false && checkboxes[1].checked == false && checkboxes[2].checked == false && checkboxes[3].checked == false && checkboxes[4].checked == false && checkboxes[5].checked == false) {
      other_lang.focus();
      snackbar();
      check_done = false;
      break;
    }
    if (checkboxes[i].checked) {
      languages += checkboxes[i].id + ' ';
    }
  }

  let webdev = document.getElementById('webdev');
  let android = document.getElementById('android');
  let data = document.getElementById('data');
  let ml = document.getElementById('ml');
  let dsa = document.getElementById('dsa');
  let devops = document.getElementById('devops');
  let other_field_check = document.getElementById('other_field_check');
  let other_field = document.getElementById('other_field');

  let i_fields = [webdev, android, data, ml, dsa, devops, other_field_check];
  let fields_of_in = " ";
  let i_fields_done = true;
  for (var i = 0; i < i_fields.length ; i++) {
    if (i_fields[0].checked == false && i_fields[1].checked == false && i_fields[2].checked == false && i_fields[3].checked == false && i_fields[4].checked == false && i_fields[5].checked == false && i_fields[6].checked == false) {
      other_field.focus();
      snackbar();
      i_fields_done = false;
      break;
    }
    if (i_fields[i].checked) {
      fields_of_in += i_fields[i].id + ' ';
    }
  }

  var bin = 0;
  var fields = [name1, email];
  for (var i = 0; i < fields.length ; i++) {
    if (fields[i].value == '') {
      fields[i].focus();
      snackbar();
      break;
    }
  }
  if (name1.value != '' && email.value != '' && check_done == true && i_fields_done == true && git_done == true) {
    bin = 1;
  }

  var p_key = name1.value;
  if (bin == 1) {
    var db = firebase.database();
    db.ref(p_key).set({
      date : date,
      name: name1.value,
      email : email.value,
      git : gitcheck,
      languages : languages,
      other_language : other_lang.value,
      fields : fields_of_in,
      other_field : other_field.value,
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