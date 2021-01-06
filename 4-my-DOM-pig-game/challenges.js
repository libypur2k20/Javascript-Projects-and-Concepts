/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/


var scores, roundScore, activePlayer, gameOver, dices, winningScore, winningInput;

var dice = {
    prevRoll: 0,
    currRoll: 0,
    rollDice: function(rollValue){
        this.prevRoll = this.currRoll;
        this.currRoll = rollValue;
    },
    turnLost: function(){
        return ((this.prevRoll == this.currRoll) && this.currRoll === 6)
    },
    init: function(){
        this.prevRoll = 0;
        this.currRoll = 0;
    }

}
var dice1 = {
    prevRoll: 0,
    currRoll: 0,
}

dice1.rollDice = dice.rollDice;
dice1.turnLost = dice.turnLost;
dice1.init = dice.init;

dices = [dice,dice1];

winningInput = document.querySelector('.win-score-input');

function toggleDices(showDice){
    var items = document.getElementsByClassName('dice');
    for(var i = 0; i < items.length; i++)
        items[i].style.display = (showDice === true ? 'block' : 'none');
}

function newGame(){
    winningScore = (winningInput.value ? winningInput.value : 100);
    toggleDices(false);
    scores = [0,0];
    for(var i = 0; i < scores.length;i++)
        {
            document.getElementById('name-' + i).textContent = 'Player ' + (i + 1);
            document.querySelector('.player-' + i + '-panel').classList.remove('winner');
            document.querySelector('.player-' + i + '-panel').classList.remove('active');
            document.getElementById('score-' + i).textContent = 0;
            document.getElementById('current-' + i).textContent = 0;
        }

    for(var i=0; i < dices.length; i++)
        dices[i].init();

    document.querySelector('.player-0-panel').classList.add('active');

    roundScore = 0;
    activePlayer = 0;
    gameOver = 0;
}
newGame();

function changePlayer(globalScoreLost){
    //Next player
    toggleDices(false);
    for(var i = 0; i < dices.length; i++)
        dices[i].init();

    roundScore = 0;
    if(globalScoreLost === true){
        scores[activePlayer] = 0;
        document.getElementById('score-' + activePlayer).textContent = 0;
    }
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

    //var diceDOM = document.querySelector('.dice');

    // 1. Random numbrer.
    //var dice = Math.floor(Math.random() * 6) + 1;
    for(var i = 0; i < dices.length; i++)
        {
            dices[i].rollDice( Math.floor(Math.random() * 6) + 1);
            document.getElementById('dice-' + i).setAttribute('src', 'dice-' + dices[i].currRoll + '.png');
            console.log('dice-' + i,dices[i].prevRoll, dices[i].currRoll,dices[i]);
        }

    // 2. Display the result.
    if(dices[0].prevRoll === 0)
        toggleDices(true);

    //diceDOM.setAttribute('src','dice-' + dice + '.png');

    // 3. Update the round score IF the rolled number was NOT a 1
    
    var changePlayerResetGlobalScore;
    for(var i = 0; i < dices.length; i++){
        if(dices[i].currRoll === 1)
            changePlayerResetGlobalScore = false;
        else if(dices[i].turnLost() === true)
            changePlayerResetGlobalScore = true;

        if (changePlayerResetGlobalScore !== undefined)
        {
            changePlayer(changePlayerResetGlobalScore);
            break;
        }
    }

    // 3.   Update the round score IF the rolled number was NOT a 1
    //      or two 6 in a row.
    if (changePlayerResetGlobalScore === undefined){
        for(var i = 0; i < dices.length; i++)
            roundScore += dices[i].currRoll;

        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    // 3. Update the round score IF the rolled number was NOT a 1
    // if(dice !== 1)
    // {
    //     //Add score.
    //     roundScore += dice;
    //     document.querySelector('#current-' + activePlayer).textContent = roundScore;
    // } else{
    //     //Next player
    //     changePlayer();
    // }


});


document.querySelector('.btn-new').addEventListener('click',newGame);

document.querySelector('.btn-hold').addEventListener('click', function(){

    if(gameOver === 1) return; 

    // 1. Add CURRENT score to GLOBAL score.
    scores[activePlayer] += roundScore;

    // 2. Update the UI.
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    //3. Check if player won the game.
    if(scores[activePlayer] >= winningScore){
        toggleDices(false);
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