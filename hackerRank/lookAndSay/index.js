const process = (input) => {
  let values = input.split(' ');
  const times = values.shift();

  for (var i=0; i< times; i++) {
    values = lookAndSay(values);
  }
  return values;
};

const lookAndSay = (values) => {
  let letter = values[0];
  let count = 0;
  let response = '';
  for (var i=0; i<values.length; i++) {
      if (letter === values[i]) {
          count ++;
      } else {
          response+=`${count} ${letter} `;
          count = 1;
          letter=values[i];
      }
  }
  response+=`${count} ${letter}`;

  return response.split(' ');
}

module.exports = process;
