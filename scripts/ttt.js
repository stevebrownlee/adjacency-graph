
const squares = document.querySelectorAll(".square")
let turns = 0

// Generator function for whose turns it is
const currentPlayer = function* () {
    let turn = 0
    while (true) {
        turn = 1 - turn
        yield turn
    }
}()

configureToasts({
    deleteDelay: 300 // time until the toast is completely removed from the DOM after deleting.
});

new Toast("Welcome!", Toast.TYPE_INFO, Toast.TIME_SHORT)

for (const square of squares) {
    square.addEventListener("click", e => {
        let currentNodeCharacter = e.target.textContent

        if (currentNodeCharacter === "") {
            currentNodeCharacter = e.target.textContent = (currentPlayer.next().value === 1) ? "X" : "O"
            turns++
        }

        // Not possible to win in 4, or less, moves
        if (turns > 4) {
            // Get all adjacent nodes
            const adjacentNodes = adjacencyGraph.get(parseInt(e.target.id))

            // Set to contain all matching adjacent nodes
            const matchingAdjacentNodes = new Set()

            for (const node of adjacentNodes) {
                // Get content of adjacent node
                const adjacentNodeCharacter = document.getElementById(node[0]).textContent

                // If letters match, add neighbor to Set
                if (currentNodeCharacter === adjacentNodeCharacter) {
                    /*
                        Calculate current matching node to pre-existing matching nodes.
                        If abs() value of difference between any two edge weights is
                        4, then there are two matches in the same direction.
                    */
                    try {
                        for (const matchedNode of matchingAdjacentNodes) {
                            if (Math.abs((matchedNode[1]/45) - (node[1]/45)) === 4) {
                                document.getElementById(matchedNode[0]).classList.add("winner")
                                document.getElementById(node[0]).classList.add("winner")
                                e.target.classList.add("winner")
                                throw "Winner"
                            }
                        }
                        matchingAdjacentNodes.add(node)
                    } catch (error) {
                        if (error === "Winner") {
                            new Toast(`Winner is ${currentNodeCharacter}!`, Toast.TYPE_INFO, Toast.TIME_SHORT)
                        }
                    }
                }
            }
        }
    })
}
