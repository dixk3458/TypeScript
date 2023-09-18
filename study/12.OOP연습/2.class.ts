{
  // 객체지향 프로그래밍으로 앞에서 만든 절차지향형 프로그래밍을 개선해
  // 데이터가 따로 놀는 문제를 해결해보자.

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 커피머신은
  // 얼만큼의 커피콩을 가졌는지를 알고
  // 커피를 내릴수있어야한다.
  class CoffeeMaker {
    // 멤버변수를 정의할때에는 const,let과 같은 키워드를 안붙인다.
    coffeeBeans = 0;

    // 아래의 커피머신마다 고정된 상수를 만들어지는 커피머신마다 변수를 만들필요가 있을까?
    // 클래스 레벨로 정의해주자.
    static BEANS_GRAMM_PER_SHOT: number = 7;

    // 기계를 처음 만들때 뭔가 해야할게 있다면,
    // constructor 생성자에서 처리해주자.
    // 커피콩을 채워주자
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 클래스레벨로 정의해 보았다.
    static makeMachine(shots: number): CoffeeMaker {
      return new CoffeeMaker(shots);
    }

    // 커피머신은 커피를 만들는 동작을 한다.
    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      console.log(`현재 커피콩:${this.coffeeBeans}`);
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  // 커피머신 클래스를 이용해 커피머신 오브젝트 인스턴스를 만들었다.
  // 이제 아래의 커피머신을 가지고 의사소통하며 프로그래밍을 할수있다.
  const maker = new CoffeeMaker(30);

  // 커피머신아 커피를 만들어주라.
  maker.coffeeBeans += 30;
  const coffee = maker.makeCoffee(2);
  console.log(coffee);
}
