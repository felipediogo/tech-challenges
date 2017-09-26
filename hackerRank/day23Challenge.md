# HackerRank - Challenges

**Day 23: BST Level-Order Traversal**

Challenge [link]


```javascript
const nodeValues = [];
const printTree = (node, level) => {
  const leftNode = node.left;
  const rightNode = node.right;
  if (rightNode || leftNode) level++;
  if (leftNode) {
    nodeValues.push({level: level, value:leftNode.data});
  }
  if (rightNode) {
    nodeValues.push({level: level, value:rightNode.data});
  }
  if (leftNode) {
    printTree(leftNode, level);
  }
  if (rightNode) {
    printTree(rightNode, level);
  }
};
const sortTree = tree => tree.sort((a, b) => {
  if (a.level===b.level){
    return (a.value-b.value);
  } else if(a.level>b.level){
    return 1;
  } else if(a.level<b.level){
    return -1;
  }
}).map(a => a.value).join(' ');
nodeValues.push({level: 0, value:root.data});
printTree(root, 0);
console.log(sortTree(nodeValues));
```

   [link]: <https://www.hackerrank.com/challenges/30-binary-trees/problem>