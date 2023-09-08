function checkNotNullNumberBad(arg: number | null) {
  if (arg === null) {
    throw new Error('not valid argument');
  }
  return arg;
}

// 즉 checkNotNullNumberBad()는 숫자만 확인을 할수있어. 재사용성이 떨어진다.

const resultNumber = checkNotNullNumberBad(100);
console.log(resultNumber);

function checkNotNullAnyBad(arg: any | null) {
  if (arg === null) {
    throw new Error('not valid argument');
  }
  return arg;
}

// 인자로 any를 전달받아 체크를 하기때문에, 어느 타입이든 전달받을수있지만,
// 타입이 any로 타입보장성이 떨어진다.
// 타입은 구체적인것이 좋다.

const resultAny = checkNotNullAnyBad(123);
console.log(resultAny);

// 그럴때 제네릭을 사용할수있다.
// 제네릭은 코드를 작성할때 타입이 결정되어, 타입에 대한 보장성이 더욱 뛰어나다.
// 인자로 숫자가 전달되었기때문에, 숫자를 리턴하는것을 볼수있다.

// 즉 제네릭을 사용하면, 사용자가 타입을 결정할수있어 유연성이 뛰어나고,
// 타입을 보장해준다.
function checkNotNull<T>(arg: T): T {
  if (arg === null) {
    throw new Error('not valid argument');
  }
  return arg;
}
const result = checkNotNull(1000);
console.log(result);

const result2: boolean = checkNotNull(true);
console.log(result2);
