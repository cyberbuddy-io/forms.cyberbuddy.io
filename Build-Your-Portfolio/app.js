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
  var mail = document.getElementById("mail");
  var ques = document.getElementById("ques");

  var year1 = document.getElementById("year1");
  var year2 = document.getElementById("year2");
  var year3 = document.getElementById("year3");
  var year4 = document.getElementById("year4");

  var year_radio = [year1,year2,year3,year4];
  var check_done1 = true;
  var year = "";
  for (var i = 0; i < year_radio.length ; i++) {
    if (year_radio[0].checked == false && year_radio[1].checked == false && year_radio[2].checked == false && year_radio[3].checked == false) {
      year1.focus();
      snackbar();
      check_done1 = false;
      break;
    }
    if (year_radio[i].checked) {
      year += year_radio[i].id + ' ';
    }
  }

  var bin = 0;
  var fields = [name1, mail];
  for (var i = 0; i < fields.length ; i++) {
    if (fields[i].value == '') {
      fields[i].focus();
      snackbar();
      break;
    }
  }

  if (mail.value != '' && check_done1 == true) {
    bin = 1;
  }

  if (bin == 1) {
    var db = firebase.database();
    db.ref("Portfolio-Form/").push({
      name: name1.value,
      mail: mail.value,
      year: year,
      ques: ques.value
    })
    .then( (onResolved) => {
      document.getElementById("form-1").style.display = "none";
      document.getElementById("form-2").style.display = "unset";
      document.getElementById("name-enter").innerHTML = name1.value;
      window.scrollTo(0,0);
    });
  }
  else {
    console.log("hi");
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

