// Slide Show

var slideshowCounter1 = 0;
var slideshowCounter2 = 1;

var slides = ["./pics/nitkkr.jpg","./pics/dirertor.jpg","./pics/inaug.jpeg","./pics/library.jpg","./pics/pond.jpg","./pics/nitkkr2.jpg","./pics/hostel1.jpg","./pics/hostel2.jpg","./pics/hostel3.jpg","./pics/background.jpg","./pics/headerimg.jpg"]

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



//Night mode
setTimeout(nightmode,6);
function nightmode()
{ 
    date = new Date;
    if(date.getHours()>18||date.getHours()<5)
    {
        console.log("d")
        document.body.classList.add('darkmode');
        let cardlist = document.querySelectorAll('.card');
        for(let card of cardlist)
        {
            card.classList.add('dark-card');
        }
        const alinks = document.querySelectorAll('.notify a');
        for(let link of alinks)
        {
            link.style.color = "white";
        }
        document.querySelector('marquee').style.backgroundColor="black";;
    }
    else
    {
        document.body.classList.remove('darkmode');
        let cardlist = document.querySelectorAll('.card');
        for(let card of cardlist)
        {
            card.classList.remove('dark-card');
        }
        const alinks = document.querySelectorAll('.notify a');
        for(let link of alinks)
        {
            link.style.color = "black";
        }
        document.querySelector('marquee').style.backgroundColor="rgb(46, 44, 44)";
    }
    
}

const nightmodeBtn = document.querySelector('#nightmode');
nightmodeBtn.addEventListener('click',function(e){
    document.body.classList.add('darkmode');
        let cardlist = document.querySelectorAll('.card');
        for(let card of cardlist)
        {
            card.classList.add('dark-card');
        }
        const alinks = document.querySelectorAll('.notify a');
        for(let link of alinks)
        {
            link.style.color = "white";
        }
        document.querySelector('marquee').style.backgroundColor="black";
})

const daymodeBtn = document.querySelector('#daymode');
daymodeBtn.addEventListener('click',function(e){
    document.body.classList.add('darkmode');
    document.body.classList.remove('darkmode');
    let cardlist = document.querySelectorAll('.card');
    for(let card of cardlist)
    {
        card.classList.remove('dark-card');
    }
    const alinks = document.querySelectorAll('.notify a');
    for(let link of alinks)
    {
        link.style.color = "black";
    }
    document.querySelector('marquee').style.backgroundColor="rgb(46, 44, 44)";
})


//on click event on menu btn for small screen devices
let menuState = false;
const menu = document.querySelector('#menubtn');
menu.addEventListener('click',function(e){
    if(!menuState)
    {
        document.querySelector('nav ul').style.display = 'block';
        menuState = true;
    }
    else{
        document.querySelector('nav ul').style.display = 'none';
        menuState = false;
    }
})