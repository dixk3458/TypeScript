// 일반적으로 module을 이용하지않으면, global scope로 책정된다.
// 그렇기에 다른 파일에서의 변수와 이름 충돌이 발생할수있다.
// 따라서 {}을 작성하여 local scope로 일단은 작성해주자.

{
  // javascript 복습

  // old version var
  // let 과 유사하지만
  // var는 호이스팅,scope관련해서 매우 좋지 않다.
  var poop = '💩';

  // let 키워드를 사용하면, 변수에 재할당이 가능
  let name = '정재웅';
  name = '바뀐 이름';

  // 반면 const 키워드를 사용하면, 재할당이 불가능
  const sex = '남자';
  // sex = "여자"

  //   number
  const id: number = 1234;

  //   string
  const address: string = '전라북도';

  //   boolean
  const isReal: boolean = true;

  //   undefined
  let age: undefined; // 💩 이렇게 타입을 결정하면, undefined 밖에 못함
  let age2: number | undefined;
  age2 = undefined;
  age2 = 25;

  function findBook(): string | undefined {
    return undefined;
  }

  //   null
  let person: null; //💩 역시 마찬가지
  let person2: string | null;
  person2 = '사람들';
  person = null;

  //   unknown 💩
  let unknown: unknown = 1;
  unknown = false;
  unknown = '음.. 어떤 타입인지 몰라';

  //   any 💩
  let any: any = '어떤것이든 다 돼';
  any = 1;

  //   void 함수에서 아무것도 return해주지않을때 void를 return함
  //   변수에서 사용하면, undefined밖에 못들어가 쓸모없음
  function print(): void {
    console.log('출력');
    return;
  }
  let unusable: void = undefined;

  //   never 함수에서 절대 return되지않는다는걸 명시
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error('message');
    while (true) {}
  }

  let neverEnding: never; //💩

  //   object 원시타입을 제외한 모든 object 타입을 받을수있다.
  //   즉 광범위하고 추상적인 타입을 담을수있기에 💩
  let obj: object = [1, 2, 3, 4];
  function printObj(obj: object) {}
  printObj({ name: '정재웅' });
  printObj({ age: 25 });
  //   printObj('정재웅');
}
