
// start home
let widhtSidebar = $(".sidebar").innerWidth();
$(".sidebar").css("left",-widhtSidebar)

$(".sidebar span").click(function(){
    $(".sidebar").animate({left:"0px"},1000);
    
})

$(".sidebar i").click(function(){
    console.log("hello");
    $(".sidebar").animate({left:-widhtSidebar},1000);

})
// end home


// start duration
$("#comment2").css("display","none")
$("#comment3").css("display","none")
$("#comment4").css("display","none")

$("#click1").click(function(){
    $("#comment1").slideToggle(500);
    
})
$("#click2").click(function(){
    $("#comment2").slideToggle(500);
    
})
$("#click3").click(function(){
    $("#comment3").slideToggle(500);
    
})
$("#click4").click(function(){
    $("#comment4").slideToggle(500);
    
})
// end duration


// start details
let countDownDate = new Date("Aug 30 , 2023 23:59:59").getTime();

let counter = setInterval(()=>{
let dateNow = new Date().getTime();
let dateDiff = countDownDate - dateNow;

let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)); 
let minutes = Math.floor(dateDiff % (1000 * 60 * 60 ) / (1000 * 60)); 
let seconds = Math.floor(dateDiff % (1000 * 60  ) / (1000));


document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

},1000)

// end details

// start footer


let userInput = document.getElementById("input");
let footerSpan  = document.getElementById("span")

userInput.addEventListener("input",function(){
    footerSpan.innerHTML = 100-this.value.length;
    if(footerSpan.innerHTML<0){
       footerSpan.innerHTML = `your available character finished`;
    }

})

// end footer





// start  scroll smooth
$(" sidebar , a").click(function(eventInfo){
    let Herf = $(eventInfo.target).attr("href");
    let spaceTop = $(Herf).offset().top;
    $("html , body").animate({scrollTop:spaceTop},1000);
})
// end scroll smooth




