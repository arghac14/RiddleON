
var playername=document.getElementById("fullname");
var fpage=document.getElementById("fpage");
var spage=document.getElementById("troll");
var qpage=document.getElementById("quizpage");
var lpage=document.getElementById("2");
var wpage=document.getElementById("3");

var currentIndex=0;
var totq=questions.length;

var container=document.getElementById("questionplate");
var q=document.getElementById("question");
var o1=document.getElementById("op1");
var o2=document.getElementById("op2");
var o3=document.getElementById("op3");
var o4=document.getElementById("op4");
var sub=document.getElementById("nextButton");

// var x = document.getElementById("myAudio"); 
// var y = document.getElementById("myAudio1"); 
// var z = document.getElementById("myAudio2"); 
function playerName(){

	//var x = document.getElementById("myAudio"); 
   	//x.play();

	var playername=document.getElementById("fullname");
	if(playername.value=="" || playername.value==" " || playername.value=="  " || playername.value=="   "){
        playername.focus();
		playername.style.border="solid 4px red";
		return;
		}
	else{
		alert("Well! That was not beautiful. I take it back...");
		var fpage=document.getElementById("fpage");
		fpage.style.display="none";
		var spage=document.getElementById("troll");
		spage.style.display="block";
		var p=document.getElementById("troll1").innerHTML=`Hi ${playername.value} ! ,`;
		return;
    }
}
function startGame(){
	var spage=document.getElementById("troll");
	var qpage=document.getElementById("quizpage");
	spage.style.display="none";
	qpage.style.display="block";
	loadQuestion(currentIndex);	
	return;
}
function loadQuestion(questionIndex){
	var q=document.getElementById("question");
	var o1=document.getElementById("op1");
	var o2=document.getElementById("op2");
	var o3=document.getElementById("op3");
	var o4=document.getElementById("op4");
	var ql=questions[questionIndex];
	q.textContent=ql.question;
	o1.textContent=ql.option1;
	o2.textContent=ql.option2;
	o3.textContent=ql.option3;
	o4.textContent=ql.option4;
}
function loadNextQuestion(){

	//x.pause();
	var so=document.querySelector("input[type=radio]:checked");
	if(!so){
		alert("You have to select an answer darling!");
		return;
	}
	var ans=so.value;

	if(ans!=questions[currentIndex].answer){	
		var u= document.getElementById("myAudio4"); 
    	u.play();
		alert("LOL! Wrong answer");
		var qpage=document.getElementById("quizpage");
		var lpage=document.getElementById("2");
		

		
		qpage.style.display="none";
		lpage.style.display="block";

			var y = document.getElementById("myAudio1"); 
    		y.play();
		return;
	}
	var v= document.getElementById("myAudio3"); 
    v.play();
	alert("Correct!");
	so.checked=false;
	currentIndex++;
	//alert(`${currentIndex} ${so.value}`);
	if(currentIndex==totq){
		var qpage=document.getElementById("quizpage");
		
		var wpage=document.getElementById("3");
		qpage.style.display="none";
		wpage.style.display="block";
		var z = document.getElementById("myAudio2"); 
    	z.play();
		}
	
	loadQuestion(currentIndex);	
 }
loadQuestion(currentIndex);