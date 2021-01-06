/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gameOver;

function hideDice(){
    document.querySelector('.dice').style.display= 'none';
}

function newGame(){
    hideDice();
    scores = [0,0];
    for(var i = 0; i < scores.length;i++)
        {
            document.getElementById('name-' + i).textContent = 'Player ' + (i + 1);
            document.querySelector('.player-' + i + '-panel').classList.remove('winner');
            document.querySelector('.player-' + i + '-panel').classList.remove('active');
            document.getElementById('score-' + i).textContent = 0;
            document.getElementById('current-' + i).textContent = 0;
        }

    document.querySelector('.player-0-panel').classList.add('active');

    roundScore = 0;
    activePlayer = 0;
    gameOver = 0;
}
newGame();

function changePlayer(){
    //Next player
    hideDice();
    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    activePlayer = (activePlayer === 0 ? 1 : 0);
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
}

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-' + activePlayer).textContent;
// console.log(x);


document.querySelector('.btn-roll').addEventListener('click', function(){

    if (gameOver === 1) return;

    var diceDOM = document.querySelector('.dice');

    // 1. Random numbrer.
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result.
    if(scores[activePlayer] === 0)
        diceDOM.style.display= 'block';

    diceDOM.setAttribute('src','dice-' + dice + '.png');

    // 3. Update the round score IF the rolled number was NOT a 1
    if(dice !== 1)
    {
        //Add score.
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else{
        //Next player
        changePlayer();
    }


});


document.querySelector('.btn-new').addEventListener('click',newGame);

document.querySelector('.btn-hold').addEventListener('click', function(){

    if(gameOver === 1) return; 

    // 1. Add CURRENT score to GLOBAL score.
    scores[activePlayer] += roundScore;

    // 2. Update the UI.
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    //3. Check if player won the game.
    if(scores[activePlayer] >= 100){
        hideDice();
        document.getElementById('name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        gameOver = 1;
    }
    else
    {
        changePlayer();
    }
});