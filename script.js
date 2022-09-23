var scores, activePlayer, roundScore, gamePlay;

init();

function init(){
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlay = true;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';    
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    document.querySelector('.btn--hold').style.display = 'block';
    document.querySelector('.btn--roll').style.display = 'block';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('active');
    document.querySelector('.player--1').classList.remove('active');
    document.querySelector('.player--0').classList.add('active');
}

document.querySelector('.btn--roll').addEventListener('click', function(){
    if(gamePlay){
        // generate random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //display dice
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';

        //update round score
        if(dice !== 1){
            //Update score
            roundScore += dice;
            document.getElementById('current--' + activePlayer).textContent = roundScore;
        }else{
            //Next player
            nextPlayer();
        }
    }
});

document.querySelector('.btn--hold').addEventListener('click', function(){
    if(gamePlay){
        //update global score for the player
        scores[activePlayer] += roundScore;

        //update ui
        document.getElementById('score--' + activePlayer).textContent = scores[activePlayer];

        //check the winner
        if(scores[activePlayer] >= 10){
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.btn--hold').style.display = 'none';
            document.querySelector('.btn--roll').style.display = 'none';
            document.querySelector('.player--' + activePlayer).classList.add('player--winner');
            document.querySelector('.player--' + activePlayer).classList.remove('active');
            document.getElementById('name--' + activePlayer).textContent = 'Winner!';
            gamePlay = false;
        }else{
            //Next player
            nextPlayer();
        }
    }
});

function nextPlayer(){
    if(gamePlay){
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

        roundScore = 0;
        document.querySelector('.dice').style.display = 'none';
        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';
    
        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
    }
}

document.querySelector('.btn--new').addEventListener('click', init);