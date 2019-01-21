
const squares = document.querySelectorAll(".square")

const turn = function* () {
    let turn = 0

    while (true) {
        turn = 1 - turn
        yield turn
    }
}()

for (const square of squares) {
    square.addEventListener("click", e => {
        if (turn.next().value === 1) {
            e.target.innerHTML = "X"
        } else {
            e.target.innerHTML = "O"
        }
    })
}





