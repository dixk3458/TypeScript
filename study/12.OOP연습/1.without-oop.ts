{
  // 타입 스크립트를 이용해서 절차지향 방식의 프로그래밍을 이용해
  // 커피머신을 만들어보자
  // 커피머신은 인자로 얼마만큼의 shot을 내릴지를 받고
  // 만들어진 coffee를 리턴해준다.
  // 전역변수로 지정한 커피콩을 선언하고
  // 커피머신은 1shot당 10개의 커피콩을 사용한다.

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7;
  let coffeeBeans: number = 0;

  // makeCoffee()는 Coffee타입의 coffee를 리턴한다.
  // Coffee라는 타입은 shot은 얼마들어있고 우유가 들어있는지 없는지에 대한 값을 담는 타입이다.
  function makeCoffee(shots: number): CoffeeCup {
    // 사용자가 원하는 shots을 현재 커피콩으로 만들수있는지 검사 먼저 해주자!
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error('Not enough coffee beans!!');
    }

    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;

    return {
      shots,
      hasMilk: false,
    };
  }

  // 커피 컵에 커피를 따라보자
  // 커피를 만들때 사용자가 얼만큼의 샷을 만들지 결정할수있어야한다.
  coffeeBeans += 30;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
