passwordSolver()

function passwordSolver() {
    var numbersTwice = [];
    var numbersAscending = [];
    var badNumbers = [];
    for (i = 246540; i <= 787419; i++) {
        for (k = 0; k <= 9; k++) {
            let kString = k.toString()
            let doubleString = kString + kString
            let tripleSting = kString + kString + kString
            if (i.toString().includes(doubleString) && !i.toString().includes(tripleSting)) {
                if (!numbersTwice.includes(i)) {
                    numbersTwice.push(i);
                }
            }

        }
    }
    for (i = 0; i < numbersTwice.length; i++) {

        iString = numbersTwice[i].toString()
        let one = parseInt(iString.charAt(0))
        let two = parseInt(iString.charAt(1))
        let three = parseInt(iString.charAt(2))
        let four = parseInt(iString.charAt(3))
        let five = parseInt(iString.charAt(4))
        let six = parseInt(iString.charAt(5))

        if (one <= two && two <= three && three <= four && four <= five && five <= six)
            numbersAscending.push([numbersTwice[i]])
    }
    // for (a = 0; a < numbersAscending.length; a++) {
    //     for (i = 0; i <= 10; i++) {
    //         for (j = 0; j <= 10; j++) {
    //             let doubleString = i.toString() + i.toString();
    //             let tripleString = (j).toString() + (j).toString() + (j).toString();
    //             if (numbersAscending[a].toString().includes(doubleString) && numbersAscending[a].toString().includes(tripleString) && !numbersAscending.includes(doubleString + i.toString())) {
    //                 console.log(numbersAscending[a]);
    //                 badNumbers.push(numbersAscending[a]);
    //             }

    //         }
    //     }
    // }
    console.log(numbersAscending.length);
    // console.table(badNumbers)
    // console.log(numbersAscending.length - badNumbers.length);
}