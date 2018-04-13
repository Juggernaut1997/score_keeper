var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Button");
var reset = document.querySelector("#reset");
var p1Score = document.querySelector("#p1Score");
var p2Score = document.querySelector("#p2Score");
var input = document.querySelector("input");
var maxNum = document.querySelector("#maxNum");
var score1 = 0;
var score2 = 0;
var maximumScore = 5;
var endGame = false;


p1Button.addEventListener("click", function(){
	if(!endGame){
		score1++;
		if(score1 === maximumScore){
			endGame=true;
			p1Score.style.color = "green";
		}
	}
	p1Score.textContent = score1;
});

p2Button.addEventListener("click", function(){
	if(!endGame){
		score2++;
		if(score2 === maximumScore){
			endGame=true;
			p2Score.style.color = "green";
		}
	}
	p2Score.textContent = score2;
});

reset.addEventListener("click", function(){
	score1 = 0;
	score2 = 0;
	input.value = 0;
	p1Score.textContent = score1;
	p2Score.textContent = score2;
	p1Score.style.color = "black";
	p2Score.style.color = "black";
	endGame=false;	
});

// function reset(){
// 	score1 = 0;
// 	score2 = 0;
// 	p1Score.textContent = score1;
// 	p2Score.textContent = score2;
// 	p1Score.style.color = "black";
// 	p2Score.style.color = "black";
// 	endGame=false;	
// }

input.addEventListener("click", function(){
	maxNum.textContent = this.value;
	maximumScore = Number(this.value);
	score1 = 0;
	score2 = 0;
	p1Score.textContent = score1;
	p2Score.textContent = score2;
	p1Score.style.color = "black";
	p2Score.style.color = "black";
	endGame=false;	
});
