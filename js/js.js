function startGame() {

    for (var i = 1; i < 10; i++) {
        clearBox(i);
    }
    if (Math.random() < 0.5) {
        document.turn = "X";
    } else {
        document.turn = "O";
    }
    document.winner = null;
    setMessage(document.turn + ' gets to start first');
}

function setMessage(msg) {
    document.getElementById('message').innerText = msg;
}

function nextMove(square) {
    if (document.winner != null) {
        setMessage(document.turn + ' already Won');
    } else if (square.innerText === "") {
        square.innerText = document.turn;
        switchTurn();
    } else {
        setMessage('Space Already used')
    }

}

function switchTurn() {
    if (checkWinner(document.turn)) {
        setMessage('Congratulation ' + document.turn + ' wins');
        document.winner = document.turn;
    } else if (document.turn === 'X') {
        document.turn = 'O';
        setMessage("Its " + document.turn + " turn");

    } else {
        document.turn = 'X';
        setMessage("Its " + document.turn + " turn");

    }
}

function checkWinner(move) {
    var result = false;
    if (checkRow(1, 2, 3, move) || checkRow(4, 5, 6, move) || checkRow(7, 8, 9, move) || checkRow(1, 4, 7, move) || checkRow(2, 5, 8, move) || checkRow(3, 6, 9, move) || checkRow(1, 5, 9, move) || checkRow(3, 5, 7, move)) {
        result = true;
    }
    return result;
}

function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
        result = true;
    }
    return result;
}

function getBox(number) {
    return document.getElementById('s' + number).innerText;
}

function clearBox(number) {
    document.getElementById('s' + number).innerText = "";
}