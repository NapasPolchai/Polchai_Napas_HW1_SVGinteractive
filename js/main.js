// this is JS comment
/* this is a longer JS comment
commenting your code is very important for you and your teamates
keep your file descriptive!!
*/
console.log('Javascript is running');

let score = 100;
console.log(score);
score = 200;
console.log(score);

const playerName = 'Randy';
console.log(playerName);
//playerName = 'Bob';
console.log(playerName);

const buy = document.querySelector('#buyButton');
const controlButtons = document.querySelectorAll('#player button');

console.log(buy);
console.log(controlButtons);

function showPlayerScore(){
    console.log('Name: ' + playerName + ', Score: ' + score)
}

function addNumbers(num1, num2) {
    let total = num1 + num2;

    return total;
}

function buyProduct() {
    console.log('user click bought button');
}

function logMyId() {
    console.log(this.id);
}

showPlayerScore();
console.log(addNumbers(5, 10));
console.log(addNumbers(5, 11));
console.log(addNumbers(5, 12));
console.log(addNumbers(5, 13));

buy.addEventListener('click', buyProduct);
controlButtons.forEach(function(button){
    button.addEventListener('click', logMyId);
});

//controlButtons.forEach(button => button.addEventListener('click', logMyId));