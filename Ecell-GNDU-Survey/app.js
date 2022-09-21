var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');

function checkCondition(field, box) {
  document.getElementById(field).addEventListener('focus', function() {
    document.getElementById(box).checked = true;
  });

  document.getElementById(field).addEventListener('blur', function() {
    if (document.getElementById(field).value == "") {
      document.getElementById(box).checked = false;
    }
  });

  document.getElementById(box).addEventListener('click', function() {
    document.getElementById(field).focus();
  });
}

checkCondition("other_lang", "other_lang_check");
checkCondition("other_field", "other_field_check");

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

var name1;
var number;

function send_message1() {
  name1 = document.getElementById("name");
  number = document.getElementById("number");
  var linkedin = document.getElementById("linkedin");
  var branch = document.getElementById("branch");
  var year = null;
  for (var i = 1; i <= 5; i++) {
    if (document.getElementById("year-"+i).checked == true) {
      year = "year" + i;
    }
  }

  var bin = 0;
  var fields = [name1, number, email, branch];
  for (var i = 0; i < fields.length ; i++) {
    if (fields[i].value == '') {
      fields[i].focus();
      snackbar();
      break;
    }
  }
  if (name1.value != '' && number.value != '' && email.value != '' && branch.value != '') {
    bin = 1;
  }

  if (bin == 1) {
    document.getElementById("submit-btn").disabled = true;
    document.getElementById("submit-btn").innerHTML = "Loading <i style='margin-left:8px' class='fa fa-spinner spinner'></i>";
    var db = firebase.database();
    db.ref('ecell-gndu-survey/' + name1.value + number.value + "/").push({
      date : utc,
      name: name1.value,
      number: number.value,
      email : email.value,
      linkedin : linkedin.value,
      branch : branch.value,
      year: year
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
  document.getElementById("submit-btn").disabled = false;
  document.getElementById("submit-btn").innerHTML = "Next";
  window.scrollTo(0,0);
}

function send_message2() {
  var level = null;
  var tech = document.getElementById("tech").value;

  var language = ["html","js","python","cpp","java"];
  var skills = ["communication","Graphic Designing","Public Skills","Management","Entrepreneur Skills"];
  var language_push = "";
  var skills_push = "";
  var other_lang = document.getElementById("other_lang").value;
  var other_field = document.getElementById("other_field").value;

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

  for (var i = 0; i < skills.length; i++) {
    if(document.getElementById(skills[i]).checked == true) {
      skills_push = skills_push + skills[i] + ", ";
    }
  }

  language_push += other_lang;
  skills_push += other_field;

  document.getElementById("submit-btn2").disabled = true;
  document.getElementById("submit-btn2").innerHTML = "Loading <i style='margin-left:8px' class='fa fa-spinner spinner'></i>";
  db.ref('ecell-gndu-survey/' + name1.value + number.value + "/").push({
    level : level,
    tech : tech,
    language : language_push,
    skills : skills_push,
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

