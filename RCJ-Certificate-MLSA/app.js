let d = new Date();
let date = d.toString();

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
  var email = document.getElementById("email");
  var pull = document.getElementById("pull");

  var bin = 0;
  var fields = [name1, email, pull];
  for (var i = 0; i < fields.length ; i++) {
    if (fields[i].value == '') {
      fields[i].focus();
      snackbar();
      break;
    }
  }
  if (name1.value != '' && email.value != '' && pull.value != '') {
    bin = 1;
  }

  if (bin == 1) {
    document.getElementById("submit_btn").disabled = true;
    document.getElementById("submit_btn").innerHTML = "Loading <i style='margin-left:8px' class='fa fa-spinner spinner'></i>";
    var db = firebase.database();
    db.ref("rcj-mlsa-certificate/").push({
      date : date,
      name: name1.value,
      email : email.value,
      pull : pull.value
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

$( "aside img" ).click(function() {
  /*alert($( this ).css( "transform" ));*/
  if (  $( this ).css( "transform" ) == 'none' ){
      $(this).css("transform","rotate(180deg)");
  } else {
      $(this).css("transform","" );
  }
});