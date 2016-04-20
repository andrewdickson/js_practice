function HashTable(){
    this.table = new Array(137);
    this.values = [];

    this.put = function(key, data){
        var pos = this.hash(key);

        while(this.table[pos] !== undefined) {
            ++pos;
        }
        this.table[pos] = key;
        this.table[pos] = data;
    };

    this.putData = function(data){
        this.put(data, data);
    };

    this.hash = function(key){
        var i = 0, total = 0;
        const primeFactor = 31;

        if(typeof key === "string") {
            for (i = 0; i < key.length; ++i) {
                total += total * primeFactor + key.charCodeAt(i);
            }
        }
        else if(typeof key === "number"){
            total = Math.floor(key * primeFactor);
        }
        total = total % this.table.length;

        return parseInt(total);
    };

    this.get = function(key){
        var hash = -1;
        hash = this.hash(key);

        if(hash > -1){
            for(var i = hash; this.table[hash] != undefined; ++i){
                if(this.table[hash] == key){
                    return this.values[hash];
                }
            }
        }
        return undefined;
    };

  this.display = function(){
    for(var i = 0; i < this.table.length; ++i){    
        if(this.table[i] != null){
            console.log( i.toString() + ": " + this.table[i].toString());
      }
    }
  };
}

var ht = new HashTable();
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan", "test", "test2", "test3", "asdfasdfsadfsadfsd"];

for (var i = 0; i < someNames.length; ++i) {
    ht.putData(someNames[i]);
}

ht.display();

