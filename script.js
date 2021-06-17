// Slide Show

var slideshowCounter1 = 0;
var slideshowCounter2 = 1;

var slides = ["./pics/nitkkr.jpg","./pics/dirertor.jpg","./pics/inaug.jpeg","./pics/library.jpg","./pics/pond.jpg","./pics/nitkkr2.jpg","./pics/hostel1.jpg","./pics/hostel2.jpg","./pics/hostel3.jpg"]

const slide1 = document.querySelector('#slideshowimg1');
const slide2 = document.querySelector('#slideshowimg2');

const leftbtn = document.querySelector('#left');
leftbtn.addEventListener('click',leftShift);
function leftShift()
{
    slideshowCounter1 = Math.abs(slideshowCounter1-1)%slides.length;
    slideshowCounter2 = Math.abs(slideshowCounter2-1)%slides.length;
    slide1.src=slides[slideshowCounter1];
    slide2.src=slides[slideshowCounter2];
}

const rightbtn = document.querySelector('#right');
rightbtn.addEventListener('click',rightShift);
function rightShift()
{
    slideshowCounter1 = (slideshowCounter1+1)%slides.length;
    slideshowCounter2 = (slideshowCounter2+1)%slides.length;
    slide1.src=slides[slideshowCounter1];
    slide2.src=slides[slideshowCounter2];
    
}
    

setTimeout(slideshow,5000);
function slideshow()
{
    slideshowCounter1 = (slideshowCounter1+1)%slides.length;
    slideshowCounter2 = (slideshowCounter2+1)%slides.length;
    slide1.src=slides[slideshowCounter1];
    slide2.src=slides[slideshowCounter2];
    setTimeout(slideshow,5000);
}


//-----------

// const campmain = document.querySelector('#camp-main');
// campmain.addEventListener('click',function(e){
//     campmain.width = '100%';
//     campmain.heigth = 'auto';
// })