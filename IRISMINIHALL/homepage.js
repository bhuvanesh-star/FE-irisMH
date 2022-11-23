// code for automatic image slider using settimeout func
var slideImg = document.getElementById("sliderimg");
var images = new Array(
    "images/1X3A3779 (1).JPG",
    "images/1X3A3774.JPG",
    "images/20220828_171653.jpg"
);
var len = images.length;
var i= 0;
function slider(){
    if (i > len-1){
        i=0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 2000)
    // runs the func slider every 2 seconds 
}

//onscroll change text color
var header = document.querySelectorAll(".header")[0];
header.style.color='white';

//trigger this function on each scroll

window.onscroll = function(event){
    var scroll = window.pageYOffset;
    if(scrollY > 30){
        header.style.color='yellow';
    // }else if (scrollY >= 10 && scrollY < 20){
    //     header.style.color = 'black'
    }
    else{
        header.style.color='white'
    }
}

// function for popup form
function openForm() {
    document.getElementById("formGroup").style.display = "block"
    document.getElementById("bookbtn").style.display = "none"
}
function closeForm() {
    document.getElementById("formGroup").style.display = "none"
    document.getElementById("bookbtn").style.display = "block"
}

// function for Sending Email 

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "Bhuvanesh",
        Password : "password",//write the password
        To : 'bhuvaneshbtech99@gmail.com',// the mail id that recieves the mail
        From : document.getElementById("email").value,
        Subject : "New Enquiry",
        Body : "Name:" + document.getElementById("userName").value +
            "<br> Email:" + document.getElementById("email").value +
            "<br> Message:" + document.getElementById("Comment").value
    }).then(
      message => alert(" Message Sent Successfully")
    );
}