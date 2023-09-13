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
  var phone = document.getElementById("phone");
  var year = document.getElementById("year");
  var feed = document.getElementById("feed");

  var fields = [name1, mail, phone, year];
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].value == '') {
      fields[i].focus();
      snackbar();
      return;
    }
  }

  var team = '';
  var web = document.getElementById('Web Development');
  var android = document.getElementById('Android Development');
  var machine = document.getElementById('Machine Learning');
  var iot = document.getElementById('IOT');
  var graphics = document.getElementById('Graphics and Promotions');

  if (web.checked == true) team = 'Web Development';
  else if (android.checked == true) team = 'Android Development';
  else if (machine.checked == true) team = 'Machine Learning';
  else if (iot.checked == true) team = 'IOT';
  else if (graphics.checked == true) team = 'Graphics and Promotions';
  else {
    web.focus();
    snackbar();
    return;
  }

  var laptop = '';
  if(document.getElementById('yes').checked == true) {
    laptop = 'yes';
  } else if (document.getElementById('no').checked == true) {
    laptop = 'no';
  } else {
    document.getElementById('yes').focus();
    snackbar();
    return;
  }

  document.getElementById("submit_btn").disabled = true;
  document.getElementById("submit_btn").innerHTML = "Loading <i style='margin-left:8px' class='fa fa-spinner spinner'></i>";
  var db = firebase.database();
  db.ref("GDSC-amritsar/offline-ml-web-workshop").push({
      name1: name1.value,
      mail: mail.value,
      phone: phone.value,
      year: year.value,
      team: team,
      feed: feed.value
    })
    .then(() => {
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
  const ref = firebase.storage().ref("GDSC-amritsar/apply");
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