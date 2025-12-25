/* 
Tree 

1. Invert Binary Tree



What is a class?
What is a constructor?
What is a static method?
What is spread operator?
-1e6 === -1000000






*/
import {Queue} from '../classes/queue.js';


console.log(-1e6 === -1000000)



class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {


    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    static invertTree(root) {
        console.log(root);
        if (root == null) return null;
        const queue = new Queue(root);

        console.log("IIII " +queue.items);



        while (!queue.isEmpty()) {
            let node = queue.pop();
            console.log(node)
            // [node.left, node.right] = [node.right, node.left];
            // if (node.left != null) queue.push(node.left);
            // if (node.right != null) queue.push(node.right);
        }
        return root;







    }
}
let s = Solution.invertTree([1,2,3])
console.log(s);