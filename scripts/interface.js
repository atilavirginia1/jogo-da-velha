document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
});

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    let gameOver = handleMove(position);
    updateSquare(position);

    setTimeout(() => {
        if (gameOver) {
            alert("Fim de Jogo! Jogador " + (playerTime+1) + " venceu!")
        }
    }, 10);

}

function updateSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`;
        } else {
            square.innerHTML = `<div class=''></div>`;
        }

    })
}

function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;
    updateSquares();
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}