/**
 * Type inference
 * 타입 추론
 * 개발자가 타입을 명시하지않아도 타입스크립트가 자동으로 타입을 추론해 정의하는것이다.
 * 
 * 타입추론은 되도록 사용하지 않는것이 좋다
 * 간단한것에 대해서는 상관이 없겠지만, 복잡해진코드를 보면 특정변수와 함수가 뭘 의미하는지 모르기때문
 *
 */

let message = 'hello';
// message = 123; 위에서 string을 할당해주었기때문에, 타입스크립트가 message 변수의 타입을 string으로 정의


// 타입없는 인자를 작성하면, 자동으로 any타입이 되어 타입스크립트의 타입으로 인한 안정성보장을 살릴수없다.
function print(element) {
  console.log(element);
}

function add(num1: number, num2: number) {
  return num1 + num2;
}

const result = add(1, 2); // add함수의 인자들이 number타입이고 return 값이 그 두값을 더하는것이기에 자동으로 result변수의 타입이 정해짐


