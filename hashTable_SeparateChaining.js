function HashTable(){
    this.table = new Array(19); //for testing use smaller #, for prod use high prime


    this.put = function(key, data){
        var pos = this.hash(key);

        //if no array is created yet set it to a 1-item array
        if(this.table[pos] === undefined) {
            this.table[pos] = [data];
        }
        else{
            this.table[pos].push(data);
        }
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
        return this.table[this.hash(key)];
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

