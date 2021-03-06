function startGame() {

    for (var index = 1; index <= 9; index++) {
        clearBox(index); 
    }

    document.turn = "X";
    document.winner = null;
    setMessage("Alright " + document.turn + ", start things off.")
}

function setMessage(msg) {
    document.getElementById('message').innerText = msg;
}

function nextMove(square) {
    if (document.winner != null) {
        setMessage(document.turn = "Try hitting that button down there...");
    }else if (square.innerText == '') {
        square.innerText = document.turn;
        switchTurn();  
    } else {
        setMessage("Square is already selected.")
    }
}

function switchTurn() {
    if (checkWinner(document.turn)) {
        setMessage("Congrats " + document.turn + "! You are victorious!");
        document.winner = document.turn;
    } else if (document.turn == "X") {
        document.turn = "O";
        setMessage('Your turn ' + document.turn);
    } else {
        document.turn = "X";
        setMessage('Your turn ' + document.turn);
    } 
}

function checkWinner(move) {
    var result = false;
    if (checkRow(1,2,3, move) || 
        checkRow(4,5,6, move) || 
        checkRow(7,8,9, move) || 
        checkRow(1,4,7, move) ||
        checkRow(2,5,8, move) || 
        checkRow(3,6,9, move) || 
        checkRow(1,5,9, move) || 
        checkRow(3,5,7, move)) {
        result = true;
    } 
    return result;
}

function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function getBox(number) {
    return document.getElementById('s' + number).innerText;
}

function clearBox(number) {
    document.getElementById('s' + number).innerText = '';
}

startGame();