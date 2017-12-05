const countFruits = ({ startHouse, endHouse, treePosition, fruits }) => {
  return fruits.reduce((acc, fruit) => {
    let fruitPosition = treePosition + fruit;
    return acc + (((fruitPosition >= startHouse && fruitPosition <= endHouse)) ? 1 : 0);
  }, 0);
}

const processInput = ({ startHouse, endHouse, appleTree, orangeTree, apples, oranges }) => {
  return {
    apples: countFruits({ startHouse, endHouse, treePosition: appleTree, fruits: apples }),
    oranges: countFruits({ startHouse, endHouse, treePosition: orangeTree, fruits: oranges })
  }
};

module.exports = processInput;