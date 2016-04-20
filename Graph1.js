function Vertex(value){
    this.value = value;
}

function Graph(v){
    this.vertexCount = v;
    this.edges = 0;
    this.adj = [];
    this.explored =[];

    //initialize agency matrix
    for(var i = 0; i< this.vertexCount; ++i){
        this.adj.push([])
    }
}

Graph.prototype.addEdge = function(a,b){
    this.adj[a].push(b);
    this.adj[b].push(a); //if not digraph
    ++this.edges;
};

Graph.prototype.toString = function(){
    var accum = "", s = "";
    for(var i=0; i<this.adj.length; ++i){
        s = this.adj[i].join(" ");
        accum += i.toString() + " => " + s + "\n";
    }

    return accum;
};


Graph.prototype.dfs = function(v){
    var nextV;
    this.explored.push(v);
    console.log("visited " + v);
    for(var i = 0; i < this.adj[v].length; ++i){
        nextV = this.adj[v][i];
        if(this.explored.indexOf(nextV) < 0){
            this.dfs(nextV);
        }
    }
};



Graph.prototype.bfs = function(v){
    var q = [v], currentV, i, childV;
    this.explored.push(v);
    console.log("visited " + v);

    while(q.length){
        currentV = q.shift();
        for(i=0; i<this.adj[currentV].length; ++i){
            childV = this.adj[currentV][i];
            if(this.explored.indexOf(childV) < 0) {
                this.explored.push(childV);
                console.log("visited " + childV);
                q.push(childV);
            }
        }
    }

};


var g = new Graph(5);
g.addEdge(0,1); g.addEdge(0,2); g.addEdge(1,3); g.addEdge(2,4);
g.bfs(0);

//g.dfs(0);
//console.log(g);
console.log(g.toString());