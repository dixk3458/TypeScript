class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @loggedMethod
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const jaewoong = new Person('정재웅');
jaewoong.greet();

function loggedMethod(originalMethod: any, _context: any) {
  // originalMethod에는 @function밑에 작성한 greet()이다.
  console.log(originalMethod);

  // greet()함수에대한 실행 컨텍스트이다.
  // 즉 실행될 함수에대한 환경정보를 모아놓은 객체이다.
  console.log(_context);

  function replacementMethod(this: any, ...args: any[]) {
    console.log('LOG: Entering method.');

    // 호출한 인스턴스를 가리킨다.
    console.log('this: ', this);

    console.log('args: ', ...args);

    const result = originalMethod.call(this, ...args);

    console.log('LOG: Exiting method');

    console.log('result: ', result);

    return result;
  }

  return replacementMethod;
}
