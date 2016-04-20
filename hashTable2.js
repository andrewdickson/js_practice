function HashTable(){
    this.table = new Array(137);
  
  this.put = function(key, data){
    var pos = this.hash(key);
    this.table[pos] = data;
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
ht.put("a", 234243);
ht.put("d", 9999);

ht.display();



