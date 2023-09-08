const obj = {
  name: '정재웅',
  age: 25,
};

// O타입의 키중 하나인 K 타입 즉 string literal type 형태가 되버리는것이다.
// 따라서 obj.'key' 라는 property가 없기때문에
// 에러가 발생
// 하지만 obj['key'] 해당 값을 읽어 value에 접근
function getValue<O, K extends keyof O>(obj: O, key: K): O[K] {
  return obj[key];
}

console.log(getValue(obj, 'name'));
console.log(getValue(obj, 'age'));

const taewoong = {
  name: 'taewoong',
};

console.log(taewoong['name']);
