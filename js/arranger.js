

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop:true,
  autoplay:{
    delay: 3000,
    disableOnInteraction:false,
  }
});



function sendEmail(){

  Email.send({
// Host : "smtp.elasticemail.com",
// Username : "yadvendra8959@gmail.com",
// Password : "4A86141793627238915836557AB355BB068A",
SecureToken : "e3518621-0a49-4d6e-8a53-494ccba243e6",
To : 'yadvendra8959@gmail.com',
From : document.getElementById("email").value,
Subject : document.getElementById("subject").value,
Body : "name :" +document.getElementById("name").value
+ "<br> Email: " + document.getElementById("email").value
+ "<br> Message: " + document.getElementById("message").value
}).then(
message => alert("Message Sent Successfully")
);
}