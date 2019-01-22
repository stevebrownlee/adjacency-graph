
const squares = document.querySelectorAll(".square")
let turns = 0

const turn = function* () {
    let turn = 0

    while (true) {
        turn = 1 - turn
        yield turn
    }
}()

const nodes = function (neighbor) {
    adjacencyGraph.get(neighbor)
}

for (const square of squares) {
    square.addEventListener("click", e => {
        const content = e.target.textContent

        if (content === "") {
            e.target.textContent = (turn.next().value === 1) ? "X" : "O"
            turns++
        }
        if (turns > 4) {
            const edges = adjacencyGraph.get(parseInt(e.target.id))
            const paths = new Map()
            for (const edge of edges) {
                const neighbor = document.getElementById(edge[0])
                if (e.target.textContent === neighbor.textContent) {
                    if (paths.has(edge)) {
                        path.set(edge, paths.get(edge)++)
                    } else {
                        paths.set(edge, 1)
                    }
                }
            }

            // Are there two neighbors? Check if victory.
            if (paths.size >= 2) {
                for (const path of paths) {
                    // If the difference between the two (angles/45) is 3, it's a winner
                    console.log(`Angle: ${path[0][1]}`)
                }
            }
        }
    })
}





