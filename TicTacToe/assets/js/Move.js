var Move = {
    signs   : {
        'x': 'o',
        'o': 'x',
    },
    sign    : 'x',
    cells   : {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
    },
    filled  : 0,
    finished: false,
    check   : function(cell) {
        if (Move.finished === false) {
            if (Move.cells[cell] == '') {
                Move.cells[cell]                             = Move.sign;
                document.getElementById('' + cell).innerHTML = Move.sign;
                Move.filled++;
                Move.sign = Move.signs[Move.sign];
                return Move.checkWin();
            }
            else if (Move.filled >= 9) {
                Move.finished = true;
                return 'draw';
            }
            else {
                return 'filled';
            }
        }
        else {
            return 'won';
        }
    },
    checkWin: function() {
        if (Move.filled < 3) {

            return false;
        }
        if (Move.finished == true) {
            return "won";
        }
        var possibleCombos = ['123', '147', '159', '258', '369', '357', '456', '789'];
        for (var i in possibleCombos) {
            var cells    = possibleCombos[i].split('');
            var lastSign = '';
            var count    = 1;
            for (var cell in cells) {
                if (lastSign == '') {
                    // count++;
                    lastSign = document.getElementById(cells[cell]).innerHTML;
                }
                else {
                    if (lastSign == document.getElementById(cells[cell]).innerHTML) {
                        count++;
                        continue;
                    }
                    else {
                        break;
                    }
                }
            }

            if (count == 3) {
                var winningRow = parseInt(possibleCombos[i]);
                alert('Winning player ' + lastSign + '\n row: ' + winningRow);
                Move.finished = true;
                return 'won';
                break;
            }
        }
        return false;
    }
}