$(document).ready(function(){
  $(".status").val("light");
});

$(document).ready(function(){
  $("input").addClass("ios-control",1000);
});

function dark(){
  $( "body" ).toggleClass( "dark", 1000 );
    $( ".container" ).toggleClass( "dark", 1000 );
    $( ".popup" ).toggleClass( "popup-dark", 1000 );
    $( ".ddp" ).toggleClass( "ddp-dark", 1000 );
    $( ".text-iosdark" ).toggleClass( "text-ioslight", 1000 );
    $(".navi").toggleClass("navdark ",1000);
    $("ul").toggleClass("uldark",1000);
    $(".navsm").toggleClass("nasdark",1000);
    $(".navsm2").toggleClass("nasdark",1000);
    $(".table").toggleClass("text-light",1000);
    $(".sidebar-ios").toggleClass("sidebar-dark",1000);
    $(".ios-control").toggleClass("ios-control-dark",1000);
    $(".ios-control-textarea").toggleClass("ios-control-textarea-dark",1000);
    $(".ios-pr-light").toggleClass("ios-pr-dark",1000);
    $(".card").toggleClass("card-dark",1000);
    $(".fa-moon-o").toggleClass("hide",1000);
    $(".tab").toggleClass("tab-dark",1000);  
    $(".cardx").toggleClass("cardx-dark",1000);
    $(".bg").toggleClass("bg-dark",1000);
    $(".bg-light").toggleClass("bg-dark",1000);
    $(".bg-op").toggleClass("bg-dark-op",1000);
    $(".border").toggleClass("border-dark",1000);
};
$( function() {
  $( "#dark" ).on( "click", function() {
  dark()   
  });
} );

  $(document).ready(function(){
    // Add smooth scrolling to all links
    var dt = new Date();
    var hrs = dt.getHours();
    var mins = dt.getMinutes();
    var secs = dt.getSeconds();


if(hrs>17){
   dark()
}else if (hrs<8){
  dark()
}else{
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    dark()
  }
}
  });
    