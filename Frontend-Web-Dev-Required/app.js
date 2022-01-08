const date = new Date();

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

function send_message1() {
  var name1 = document.getElementById("name");
  var number = document.getElementById("number");
  var email = document.getElementById("email");
  var linkedin = document.getElementById("linkedin");
  var college = document.getElementById("college");
  var branch = document.getElementById("branch");
  var whatsapp = "Yes";
  var instagram = "Yes";
  var linkedin1 = "Yes";
  var telegram = "Yes";
  var year = null;
  for (var i = 1; i <= 5; i++) {
    if (document.getElementById("year-"+i).checked == true) {
      year = "year" + i;
    }
  }
  if (document.getElementById("whatsapp").checked == false) {
      whatsapp = "No";
  }
  if (document.getElementById("instagram").checked == false) {
      instagram = "No";
  }
  if (document.getElementById("linkedin1").checked == false) {
      linkedin1 = "No";
  }
  if (document.getElementById("telegram").checked == false) {
      telegram = "No";
  }

  var bin = 0;
  var fields = [name1, number, email, linkedin, college, branch];
  for (var i = 0; i < fields.length ; i++) {
    if (fields[i].value == '') {
      fields[i].focus();
      snackbar();
      break;
    }
  }
  if (name1.value != '' && number.value != '' && email.value != '' && linkedin.value != '' && college.value != '' && branch.value != '') {
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
      linkedin : linkedin.value,
      college : college.value,
      branch : branch.value,
      whatsapp : whatsapp,
      instagram : instagram,
      linkedin1 : linkedin1,
      telegram : telegram
    })
    .then( (onResolved) => {
      document.getElementById("form-1").style.display = "none";
      document.getElementById("form-2").style.display = "unset";
      document.getElementById("username").innerHTML = name1.value;
      window.scrollTo(0,0);
    });
  }
}

function back() {
  document.getElementById("form-1").style.display = "unset";
  document.getElementById("form-2").style.display = "none";
  window.scrollTo(0,0);
}

function send_message2() {
  const name2 = document.getElementById("username").innerHTML; 
  var level = null;
  var tech = document.getElementById("tech").value;
  var language = ["html","js","python","cpp","java"];
  var language_push = "";
  var other_lang = document.getElementById("other_lang").value;
  var proj = document.getElementById("proj").value;
  var exp = document.getElementById("exp").value;
  var feed = document.getElementById("feed").value;
  var db = firebase.database();

  for (var i = 1; i <= 3; i++) {  //coding level
    if (document.getElementById("level-"+i).checked == true) {
      level = "level" + i;
    }
  }
  for (var i = 0; i < language.length; i++) {
    if(document.getElementById(language[i]).checked == true) {
      language_push = language_push + language[i] + ", ";
    }
  }

  language_push += other_lang;

  db.ref(name2).push({
    level : level,
    tech : tech,
    language : language_push,
    proj : proj,
    exp : exp,
    feed : feed
  })
  .then(
    (onResolved) => {
      document.getElementById("form-1").style.display = "none";
      document.getElementById("form-2").style.display = "none";
      document.getElementById("form-3").style.display = "unset";
      window.scrollTo(0,0);
  });
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

