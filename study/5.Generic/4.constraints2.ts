const obj = {
  name: 'jaewoong',
  age: 25,
};

const obj2 = {
  emoji: '🐯',
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, 'name')); // jaewoong;
console.log(getValue(obj, 'age')); // 25;

console.log(getValue(obj2, 'emoji'));
