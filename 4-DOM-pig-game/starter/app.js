/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundscore, activePlayer;

scores = [0,0];
roundscore = 0;
activePlayer = 0;
var gamePlaying = true;
var six_counter1 = 0;
var temp = 0;
var predefined = document.createElement("input").value = prompt("value for user");


document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0'

document.querySelector('.btn-roll').addEventListener('click', function(){
	if ( gamePlaying === true){
		temp = six_counter1;
		var dice = Math.floor(Math.random()* 6) + 1;
		six_counter1 = dice;
		var diceDOM = document.querySelector('.dice');
		var roundDOM = document.querySelector("#current-" + activePlayer);
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';
		if ( (dice != 1) && ( false === (temp === 6 && six_counter1 === 6) )){
			roundscore += dice;
			
		}
		else{
			scores[activePlayer] = 0;
			document.querySelector("#score-" + activePlayer).innerHTML = scores[activePlayer];
			nextPlayer();
		}
		
		roundDOM.textContent = roundscore;
		console.log(six_counter1);
		console.log(temp);
		console.log("-------");
	}
	
});

document.querySelector(".btn-hold").addEventListener('click',function(){
	//Add CURRENT score to GLOBAL score
	if (gamePlaying === true){
		scores[activePlayer] += roundscore;

		//Update the UI
		document.querySelector("#score-" + activePlayer).innerHTML = scores[activePlayer];

		if (scores[activePlayer] >= predefined ){
			document.querySelector('#name-'+ activePlayer).textContent = 'Winner!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		}
		else{
			nextPlayer();
		}
	}
})

document.querySelector(".btn-new").addEventListener('click', function(){
	scores[0] = 0;
	scores [1] = 0;
	activePlayer = 0;
	roundscore = 0;
	gamePlaying = true;
	//document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-1').textContent = '0'
	document.getElementById('current-0').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	//document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');


	//document.querySelector('.player-0-panel').classList.add('active');

});

function nextPlayer(){
	if ( activePlayer === 0){
			activePlayer = 1;
		}
		else{
			activePlayer = 0;
		}
		roundscore = 0;
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');


}



