const createStep = (count) =>
  Array.apply(null, Array(count)).map(function() { return '#' }).join('');
const createPad = (count) =>
  Array.apply(null, Array(count)).map(function() { return ' ' }).join('');

const process = (length) => {
  let stair = '';
  const pad = createPad(length);

  for (var i=1; i<= length; i++) {
    let step = (pad + createStep(i)).slice(-(length));
    stair += `${step}\n`;
  }
  return stair.substring(0, stair.length-1);
};

module.exports = process;