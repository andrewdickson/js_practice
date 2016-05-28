function Node(data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;

    this.toString = function(){
        return this.data.toString();
    }
}

function BST(){
    this.root = null;
    this.insert = function(item){
        if(this.root == null){
            this.root = new Node(item, null, null);
            return this.root;
        }
        else{
            var currentNode = this.root;
            while(currentNode != null){
                if(currentNode.data > item){
                    if(currentNode.left == null){
                        currentNode.left = new Node(item);
                        return currentNode.left;
                    }
                    else{
                        currentNode = currentNode.left;
                    }
                }
                else if(currentNode.data < item){
                    if(currentNode.right == null){
                        currentNode.right = new Node(item);
                        return currentNode.right;
                    }
                    else{
                        currentNode = currentNode.right;
                    }
                }
                else{ //case when already exists
                    return currentNode;
                }
            }
        }
    };

    this.inOrderRecur = function(node, accum){
        if(node.left != null){
            this.inOrderRecur(node.left, accum);
        }
        accum.push(node);
        if(node.right != null){
            this.inOrderRecur(node.right, accum);
        }
    };

    this.preOrderRecur = function(node, accum){
        accum.push(node);
        if(node.left != null){
            this.preOrderRecur(node.left,accum);
        }
        if(node.right != null){
            this.preOrderRecur(node.right,accum)
        }
    };

    this.postOrderRecur = function(node, accum){
        if(node.left != null){
            this.postOrderRecur(node.left, accum);
        }
        if(node.right != null){
            this.postOrderRecur(node.right, accum);
        }
        accum.push(node);
    };

    //left parent right
    this.inOrderLoop = function(){
        var list = [],
            currentNode = this.root,
            parentNodes = [];

        for(;;){
            if(currentNode.left !== null){
                parentNodes.push(currentNode);
                currentNode = currentNode.left;
            }
            else{
                list.push(currentNode);
                if(currentNode.right !== null){
                    currentNode = currentNode.right;
                }
                else{ //case leaf node
                    currentNode = parentNodes.pop();
                }
            }
        }
    };

   this.remove = function(data){
       this.removeNodeRecur(this.root, data);
   };

    this.removeNodeRecur = function(node,data){
        if(node == null){
            return null;
        }
        if(data == node.data){

            if(node.left == null && node.right == null){
                return null;
            }

            if(node.left == null){
                return node.right;
            }

            if(node.right == null){
                return node.left;
            }

            var tempNode = this.getSmallest(node.right);
            node.right = this.removeNode(node.right, tempNode.data);
        }
        else if(data < node.data){
            node.left = this.removeNodeRecur(node.left, data);
        }
        else{
            node.right = this.removeNodeRecur(node.right, data);
        }
    };

    this.order = function(orderType){
        var accum = [];
        if(this.root == null){

        }
        else if(orderType == "inorder") {
            this.inOrderRecur(this.root, accum);
        }
        else if(orderType == "preorder") {
            this.preOrderRecur(this.root, accum);
        }
        else if(orderType == "postorder") {
            this.postOrderRecur(this.root, accum);
        }
        return accum;
    };

}


var getHeight = function(subtreeRoot){
//terminating condition
    if(subtreeRoot == null){
        return 0;
    }

    var leftHeight = getHeight(left);
    var rightHeight = getHeight(right);

    //the key part there is the 1, when you get to the leaf it will return 0 + 0 + 1;
    return leftHeight + rightHeight + 1;

};

prototype.BST.isBalanced = function(subtreeRoot){
    if(subtreeRoot == null){
        return true;
    }

    var heightDiff = getHeight(subtreeRoot.left) - getHeight(subtreeRoot.right);
    if(heightDiff > 1 || heightDiff < 1){
        return false;
    }

    return this.isBalanced(subtree.left) && this.isBalanced(subtree.right);
};



var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
var list = nums.order('inorder');
var list2 = nums.order('preorder');
var list3 = nums.order('postorder');

console.log("INORDER");
console.log(list.join(" "));

console.log("PREORDER");
console.log(list2.join(" "));

console.log("POSTORDER");
console.log(list3.join(" "));


