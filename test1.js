//TEST
function loadQuestion(questionIndex){
	var ql=questions[questionIndex];
	var q.textContent=ql.question;
	o1.textContent=ql.option1;
	o2.textContent=ql.option2;
	o3.textContent=ql.option3;
	o4.textContent=ql.option4;
}
function loadNextQuestion(){
	var so=document.getElementById("input[type=radio]:checked");
	if(!so){
		alert("You have to select an answer darling!");
		return false;
	}
	var ans=so.value;
	if(ans!==questions[currentIndex].answer){	
		alert("LOL! Wrong answer");
		fpage.style.display="none";
		spage.style.display="none";
		qpage.style.display="none";
		lpage.style.display="block";
	}
	fpage.style.display="none";
		spage.style.display="none";
		qpage.style.display="none";
		lpage.style.display="none";
		wpage.style.display="block";
	so.checked=false;
	currentIndex++;
	alert("Correct!")
	if(currentIndex==totq){
			surprisepage();
		}
	
	loadQuestion(currentIndex);	
 }
loadQuestion(currentIndex);	
