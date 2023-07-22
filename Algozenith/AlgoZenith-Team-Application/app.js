let date = new Date();

// document.getElementById('form-1').style.display = 'none';

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
  setTimeout(function () {
    x.className = x.classList.remove("show");
  }, 3000);
}

var refLink = "undefined";

function send_message() {
  var name1 = document.getElementById("name");
  var mail = document.getElementById("mail");
  var year = document.getElementById("year");
  var experience = document.getElementById("experience");
  var why = document.getElementById("why");
  var different = document.getElementById("different");
  var feed = document.getElementById("feed");

  var checkboxes = document.querySelectorAll("input[type='checkbox']");
  var team = [];

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == true) {
      team.push(checkboxes[i].id);
    }
  }

  var fields = [name1, mail, year, why, different];
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].value == '') {
      fields[i].focus();
      snackbar();
      return;
    }
  }

  if (team.length == 0) {
    checkboxes[0].focus();
    snackbar();
    return;
  }

  document.getElementById("submit_btn").disabled = true;
  document.getElementById("submit_btn").innerHTML = "Loading <i style='margin-left:8px' class='fa fa-spinner spinner'></i>";
  var db = firebase.database();
  db.ref("algozenith/").push({
      name1: name1.value,
      mail: mail.value,
      year: year.value,
      experience: experience.value,
      why: why.value,
      different: different.value,
      team: team,
      ref: refLink,
      feed: feed.value
    })
    .then((onResolved) => {
      document.getElementById("form-1").style.display = "none";
      document.getElementById("form-2").style.display = "unset";
      document.getElementById("username").innerHTML = name1.value;
      window.scrollTo(0, 0);
    });
}

function preventDefault(e) {
  e.preventDefault();
}

// function upload_check() {
//   var usr = document.getElementById("name");
//   if (usr.value == "") {
//     $("#resume").bind("click", preventDefault);
//     usr.focus();
//     snackbar();
//   } else {
//     $("#resume").unbind("click", preventDefault);
//   }
// }

function upload_file() {
  const ref = firebase.storage().ref("algozenith/");
  const file = document.querySelector('#resume').files[0];
  document.getElementById("file-name").innerHTML = file.name;
  var usr = document.getElementById("name");
  const name = (+new Date()) + '-' + usr.value;
  const metadata = {
    contentType: file.type
  };
  const task = ref.child(name).put(file, metadata);

  document.getElementById("file-upload").innerHTML = "Please Wait <i class='fa fa-spinner spinner'></i>";
  task
    .then(async snapshot => {
      refLink = await ref.child(name).getDownloadURL();
      document.getElementById("file-upload").innerHTML = "File Uploaded!!";
    })
    .catch(console.error);
}

function white_bg() { //to reset the colors
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

$("aside img").click(function () {
  /*alert($( this ).css( "transform" ));*/
  if ($(this).css("transform") == 'none') {
    $(this).css("transform", "rotate(180deg)");
  } else {
    $(this).css("transform", "");
  }
});

function modal_dis() {
  document.getElementById("modal").style.display = "none";
}

function modal() {
  document.getElementById("modal").style.display = "grid";
}