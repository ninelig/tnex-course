const numbers = [3, 7, 15, 22];

const binaryNumbers = numbers.map(num => num.toString(2));
console.log(binaryNumbers);

const highestValue = numbers.reduce((max, current) => current > max ? current : max, numbers[0]);
console.log(highestValue);