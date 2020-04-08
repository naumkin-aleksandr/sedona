// import jQuery from "jquery";
// import popper from "popper.js";
// import bootstrap from "bootstrap";

// jQuery(function() {
//   jQuery("body").css("color", "blue");
// });


console.log("okey");

var openForm = document.querySelector("#open-form"); 
var form = document.querySelector("#form");

if (document.querySelector("#open-form")) {
openForm.addEventListener("click", function(evt){
    evt.preventDefault();
    form.classList.toggle("none");

});
}