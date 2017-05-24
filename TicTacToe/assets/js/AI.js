var AI = {
    sign: "x",
    easy: {
        move: function() {
            var cell = Math.floor((Math.random() * 9) +1);
            var moved = Move.check(cell);
            switch (moved) {
                case "filled":
                    // console.log("moving again");
                    AI.easy.move();
                break;
                default:

                break;
            }
            return moved;
        }
    }
}

