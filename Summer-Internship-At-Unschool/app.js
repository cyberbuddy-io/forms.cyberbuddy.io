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
  setTimeout(function(){ x.className = x.classList.remove("show"); }, 3000);
}

function send_message() {
  var name1 = document.getElementById("name");
  var mail = document.getElementById("mail");
  var number = document.getElementById("number");
  var clgName = document.getElementById("clgName");
  var clgDegree = document.getElementById("clgDegree");
  var clgCity = document.getElementById("clgCity");
  var refer = document.getElementById("refer");

  let courses = document.querySelectorAll("input[type=checkbox]");
  let interest = [];
  let interestCheck = document.getElementById("Android App Development using Android Studio");

  for (var i = 0; i < courses.length; i++) {
    if (courses[i].checked == true) {
      interest.push(courses[i].id);
    }    
  }

  var bin = 0;
  var fields = [name1, mail, number, clgName, clgDegree, clgCity, refer];
  for (var i = 0; i < fields.length ; i++) {
    if (fields[i].value == '') {
      fields[i].focus();
      snackbar();
      break;
    }
    else if (interest.length == 0) {
      interestCheck.focus();
      snackbar();
    }
  }

  if (name1.value != '' && number.value != '' && mail.value != '' && clgName.value != '' && clgDegree.value != '' && clgCity.value != '' && refer.value != '' && interest.length != 0) {
    bin = 1;
  }


  if (bin == 1) {
    document.getElementById("submit_btn").disabled = true;
    document.getElementById("submit_btn").innerHTML = "Loading <i style='margin-left:8px' class='fa fa-spinner spinner'></i>";
    var db = firebase.database();
    db.ref("unschool-summer-internship/").push({
      name1: name1.value,
      number : number.value,
      mail : mail.value,
      clgCity : clgCity.value,
      clgName : clgName.value,
      clgDegree : clgDegree.value,
      courses: interest,
      refer : refer.value
    })
    .then( (onResolved) => {
      document.getElementById("form-1").style.display = "none";
      document.getElementById("form-2").style.display = "unset";
      document.getElementById("username").innerHTML = name1.value;
      window.scrollTo(0,0);
    });
  }
}

// function upload_file() {
//   const ref = firebase.storage().ref("aap-mock-interviews");
//   const file = document.querySelector('#resume').files[0];
//   document.getElementById("file-name").innerHTML = file.name;
//   const name = (+new Date()) + '-' + file.name;
//   const metadata = {
//     contentType: file.type
//   };
//   const task = ref.child(name).put(file, metadata);

//   document.getElementById("file-upload").innerHTML = "Please Wait <i class='fa fa-spinner spinner'></i>";
//   task
//     .then(snapshot => {
//       document.getElementById("file-upload").innerHTML = "File Uploaded!!";
//     })
//     .catch(console.error);
// }

function white_bg() {   //to reset the colors
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

