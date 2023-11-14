// 제네릭은 일반적인 통상적인이란 뜻으로 컴파일시간에 타입을 보장하고 재사용성을 높여준다.

// 안좋은 예시 💩💩💩

// type마다 함수 정의
// 재사용성을 떨어뜨린다.
// 비효율적이다.
function checkNotNullBad(arg: number | null): number {
  if (arg === null) {
    throw new Error('not valid number');
  }
  return arg;
}

const badResult = checkNotNullBad(20);
console.log(badResult);

// any를 이용한 재사용성?
function checkNotNullAnyBad(arg: any | null): any {
  if (arg === null) {
    throw new Error('not valid');
  }
  return arg;
}

const anyResult = checkNotNullAnyBad('Any 안좋은 예시');
const anyNumber = checkNotNullAnyBad(123);

// 제네릭을 이용해서 컴파일시에 타입을 보장해주고 재사용성을 높이자.
function checkNotNull<T>(arg: T | null): T {
  if (arg === null) {
    throw new Error('not valid argument');
  }
  return arg;
}

const result = checkNotNull('123');
const bool: Boolean = checkNotNull(true);
