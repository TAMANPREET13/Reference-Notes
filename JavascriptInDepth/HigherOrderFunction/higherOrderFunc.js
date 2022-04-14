const radius = [3, 1, 2, 4];

const calculateArea = (radius) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

console.log(calculateArea(radius));

//We can optimize the above code by
const area = (radius) => {
  return Math.PI * radius * radius;
};

const diameter = (radius) => {
  return 2 * radius;
};

Array.prototype.calculate = (logic) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

//Alternate for above calculate function
console.log(radius.map(area));

console.log(radius.calculate(area));
console.log(radius.calculate(diameter));
