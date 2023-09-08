{
  /**
   * Type assertion
   * 타입이 100% 맞다를 주장하는것으로
   * 타입이 불확실한 시점에 해당 타입의 매서드 등을 이용하는데 사용
   */

  // Javascript
  // 자바스크립트는 타입이 없어 any 타입을 리턴하는것으로 암묵적으로 지정
  function jsFunction(): any {
    return 3;
  }

  const jsValue = jsFunction();
  console.log(jsValue);
  // 즉 any타입으로 지정되어있어, string에서 사용하는 length 등이 활성화가 안되어있다.
  // 그리고 number타입에 length 프로퍼티가 없어 undefined를 리턴하는것을 볼수있다.
  console.log(jsValue.length);

  // as 키워드를 이용해 타입을 주장하는것이다.
  // <type>변수이름
  // 마찬가지로 주장과 일치하지않아 undefined
  console.log((jsValue as string).length);
  console.log(<string>jsValue.length);

  //   어플리케이션이 죽는경우
  const wrong: any = '잘못됨';
  //   (wrong as number[]).push(1);

  // 유니온 타입에서 타입주장
  function findNumber(): number[] | undefined {
    return undefined;
  }

  const number = findNumber();
  // number.push(); number[]일수도 있지만, undefined일수도 있어. 정해지지 않은 상태에서 배열 매서드를 사용하면 에러
  // !를 붙이면 null,undefined값이 무조건 아니다 즉 다른 타입이다를 주장해서 나머지 타입인 배열 매서드 가능
  //   number!.push();

  //   optional parameter와 비교
  function print(text?: string) {
    console.log(text);
  }

  print();
}
