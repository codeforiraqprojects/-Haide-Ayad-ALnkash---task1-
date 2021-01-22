var Sliderimage=Array.from(document.querySelectorAll('.slider-container img'));
var sliderCount=Sliderimage.lenght;
// Set Current Sliderimage
var currentSlide=1;
// Slider Numbers Element
var sliderNumberElement=document.getElementById('slider-number');

// Handle Next & Prev Click Bottom

 var nextButton=document.getElementById('next');
 var prevButton=document.getElementById('prev');
	 nextButton.onclick= nextslide;
	 prevButton.onclick= prevslide;
 function nextslide() {
 	console.log('next');
 }
  function prevslide() {
 	console.log('prev');
 }