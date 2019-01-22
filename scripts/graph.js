/*
    Define directed graph of vertices and edges
*/
const adjacencyGraph = new Map()

adjacencyGraph.set(1, new Map([[2,0], [4,270], [5,315], [7,90], [9,135], [3,180]]))
adjacencyGraph.set(2, new Map([[3,0], [5,270], [8,90], [1,180]]))
adjacencyGraph.set(3, new Map([[5,225], [6,270], [9,90], [7,45], [1,0], [2,180]]))
adjacencyGraph.set(4, new Map([[5,0], [7,270], [1,90], [6,180]]))
adjacencyGraph.set(5, new Map([[6,0], [7,225], [8,90], [9,315], [1,135], [2,90], [3,45], [4,180]]))
adjacencyGraph.set(6, new Map([[4,0], [9,270], [3,90], [5,180]]))
adjacencyGraph.set(7, new Map([[8,0], [9,180], [1,270], [4,90], [3,225], [5,45]]))
adjacencyGraph.set(8, new Map([[9,0], [7,180], [5,90], [2,270]]))
adjacencyGraph.set(9, new Map([[1,315], [8,180], [5,135], [6,90], [3,270], [7,0]]))

