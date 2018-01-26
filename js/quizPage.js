$(document).ready(function(){
 
    
$(document).on("click", "#enterbuttona", submitAnswer);

startTimer();    
document.getElementById('timer').innerHTML = 01 + ":" + 59;


//----setup submit function---------------------------
function submitAnswer(event){
 event.preventDefault();

activeAll();    

}//submitAnswer function

function activeAll(){
var correct = 0;
var wrong = 0;
var choices = [];
var ans = ["2","3","3","2","3","2","3","2","1","3"];

var $q1 = $('input[name=qq1]:checked', '#questions1').val();
var $q2 = $('input[name=qq2]:checked', '#questions2').val();
var $q3 = $('input[name=qq3]:checked', '#questions3').val();
var $q4 = $('input[name=qq4]:checked', '#questions4').val();
var $q5 = $('input[name=qq5]:checked', '#questions5').val();
var $q6 = $('input[name=qq6]:checked', '#questions6').val();
var $q7 = $('input[name=qq7]:checked', '#questions7').val();
var $q8 = $('input[name=qq8]:checked', '#questions8').val();
var $q9 = $('input[name=qq9]:checked', '#questions9').val();
var $q10 = $('input[name=qq10]:checked', '#questions10').val();

var choices = [$q1,$q2,$q3,$q4,$q5,$q6,$q7,$q8,$q9,$q10];


$("#quizIt").hide();
$("#result").show();
compareAns(choices, ans, correct, wrong);
}    
    
    
//-------Compare answers to user's choices ---------------
function compareAns(choices, ans, correct, wrong){
    for(var i =0; i < ans.length; i++){
        if(choices[i] === ans[i]){
            correct++;
        } else {
            wrong++;
        }
    }
    printPopup(correct, wrong);
};

//--------check correct amount and link to different pages-------------------------------
function printPopup(correct, wrong){
    var pro;
    var link;

    switch (correct) {
    case 6:
        pro = "Product Manager";
        link = "https://www.indeed.com/jobs?q=product+manager&l=Atlanta%2C+GA";
        offer = 78;     
        break;
    case 7:
        pro = "Project Manager";
        link = "https://www.indeed.com/jobs?q=project+manager&l=Atlanta%2C+GA";
        offer = 89;     
        break;
    case 8:
        pro = "Staff Software Engineer";
        link = "https://www.indeed.com/jobs?q=staff+software+engineer&l=Atlanta%2C+GA";
        offer = 120;     
        break;  
    case 9:
        pro = "Junior Software Engineer";
        link = "https://www.indeed.com/jobs?q=junior+software+engineer&l=Atlanta%2C+GA";
        offer = 219;    
        break;
    case 10:
        pro = "Senior Software Engineer";
        link = "https://www.indeed.com/jobs?q=senior+software+engineer&l=Atlanta%2C+GA";
        offer = 286;    
        break;        
    default:
        pro = "STUDY AND TRY AGAIN";
        link = "https://pe.gatech.edu/courses/georgia-tech-coding-boot-camp";
        offer = 0;
  }
    classToAdd(correct, wrong, pro, link);
} //printPopup function end

//--------display results -----------------------------------------------------------
function classToAdd(correct, wrong, pro, link){
        $(".results1").append("<h3>" + correct + " of 10</h3>");
        $(".results2").append("<h3>" + pro + "</h3>");
        $(".results3").append("<h3>Offers: " + offer + "</h3>");
        $(".results4").append("<h3><a href="+link+"> see jobs you qualify for </a></h3>");
    $("#timer").hide();
};//function classToAdd

//--------timer -----------------------------------------------------------    

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
    subAtZero(m);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}    

function subAtZero(m){
 if(m === -1){
    activeAll();
    }
};    
    
$("#result").hide();    
});//document.ready


