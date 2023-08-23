type Operator = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(operator: Operator, first: number, second: number): number {
  switch (operator) {
    case 'add':
      return first + second;
    case 'substract':
      return first - second;
    case 'multiply':
      return first * second;
    case 'divide':
      return first / second;
    case 'remainder':
      return first % second;
    default:
      throw new Error('unknown operator');
  }
}

console.log(calculate('add', 2, 3)); //5
console.log(calculate('substract', 2, 3)); //5
console.log(calculate('multiply', 2, 3)); //5
console.log(calculate('divide', 2, 3)); //5
console.log(calculate('remainder', 2, 3)); //5
