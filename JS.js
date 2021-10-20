
// Contact page button

document.querySelector("li .contact-btn").onclick=function (){
  
  document.querySelector(".landpage-contact").style.display = "block";
   document.querySelector(".landing-laftpartofpage").style.display = "block";

  

   
  document.querySelector(".Classess-hidden").style.display = "none";
  document.querySelector(".Aboutus-hidden").style.display = "none";

  document.querySelector(".show-hidden").style.display = "none";


  };


//====================

// Classes page button

document.querySelector("li .classes-btn").onclick=function (){
  document.querySelector(".Classess-hidden").style.display = "block";

  document.querySelector(".landpage-contact").style.display = "none";
  document.querySelector(".landing-laftpartofpage").style.display = "none";
  document.querySelector(".Aboutus-hidden").style.display = "none";

  document.querySelector(".show-hidden").style.display = "none"; 
 };




//==================

document.querySelector("li .about-btn").onclick=function (){
  
  document.querySelector(".Aboutus-hidden").style.display = "block";
  
  document.querySelector(".Classess-hidden").style.display = "none";
  document.querySelector(".landpage-contact").style.display = "none";
  document.querySelector(".landing-laftpartofpage").style.display = "none";
  document.querySelector(".show-hidden").style.display = "none"; 
 };



 document.querySelector("li .home-btn").onclick=function (){



  document.querySelector(".Aboutus-hidden").style.display = "none";
  document.querySelector(".Classess-hidden").style.display = "none";
  document.querySelector(".landpage-contact").style.display = "none";
  document.querySelector(".landing-laftpartofpage").style.display = "none";

  document.querySelector(".show-hidden").style.display = "block"; 


};



// let map;

  // function initMap() {
  //   map = new google.maps.Map(document.getElementById("map"), {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8,
  //   });
  // }
