/*
    Define directed graph of vertices and edges
*/
const adjacencyGraph = new Map()

adjacencyGraph.set({s:1,e:2}, 0)
adjacencyGraph.set({s:1,e:4}, 90)
adjacencyGraph.set({s:1,e:5}, 45)
adjacencyGraph.set({s:1,e:7}, 90)
adjacencyGraph.set({s:1,e:9}, 45)
adjacencyGraph.set({s:1,e:3}, 0)
adjacencyGraph.set({s:2,e:3}, 0)
adjacencyGraph.set({s:2,e:5}, 90)
adjacencyGraph.set({s:2,e:8}, 90)
adjacencyGraph.set({s:3,e:5}, 45)
adjacencyGraph.set({s:3,e:6}, 90)
adjacencyGraph.set({s:3,e:7}, 45)
adjacencyGraph.set({s:3,e:9}, 90)
adjacencyGraph.set({s:4,e:5}, 0)
adjacencyGraph.set({s:4,e:7}, 90)
adjacencyGraph.set({s:5,e:6}, 0)
adjacencyGraph.set({s:5,e:7}, 45)
adjacencyGraph.set({s:5,e:8}, 90)
adjacencyGraph.set({s:5,e:9}, 45)
adjacencyGraph.set({s:6,e:4}, 0)
adjacencyGraph.set({s:6,e:9}, 90)
adjacencyGraph.set({s:7,e:8}, 0)
adjacencyGraph.set({s:7,e:9}, 0)
adjacencyGraph.set({s:8,e:9}, 0)
