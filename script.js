var scores, activePlayer, roundScore;
scores = [0, 0];
activePlayer = 0;
roundScore = 0;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';

document.querySelector('.btn--roll').addEventListener('click', function(){

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
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

        roundScore = 0;
        document.querySelector('.dice').style.display = 'none';
        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';

        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
    }

});