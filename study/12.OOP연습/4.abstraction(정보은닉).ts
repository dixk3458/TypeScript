{
  // 추상화
  // 복잡한 클래스 내부를 정말 필요한것들만 공개해 사용자가 클래스를 사용하기 쉽게 만들어주자!
  // 사용자가 클래스 내부의 모든것을 알 필요는 없다.
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    private coffeeBeans = 0;

    private static BEANS_GRAMM_PER_SHOT: number = 7;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(shots: number): CoffeeMaker {
      return new CoffeeMaker(shots);
    }

    // 커피를 만들기 위해 사용자가 grindBeans부터해서 모든것을 알 필요가 있을까?
    // 그럴 필요없다.
    // 추상화는 인터페이스를 굉장히 간편하게 만듬으로서 사용자가 쉽게 사용할수있게해준다.
    // 추상화를 하는 방법으로는 다양한 방식이 있다.
    // 1. 캡슐화를 통한 추상화
    // 2. interface를 통한 추상화

    private grindBeans(shots: number): void {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      console.log(`현재 커피콩:${this.coffeeBeans}`);
    }

    private preheat(): void {
      console.log(`heating up... 🔥`);
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots}shots...☕`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }

    fillCoffeeBeans(beans: number): void {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }
  }

  // 정보은닉을 통한 추상화를 통해 커피머신을 사용하는 사람이 makeCoffee,fillCoffeeBeans라는것만보고도 커피머신을 손쉽게 사용하게 해준다.
  // 정말 필요한 함수만을 노출해 추상화를진행
  const maker = CoffeeMaker.makeMachine(30);

  const coffee = maker.makeCoffee(2);
  console.log(coffee);
  maker.fillCoffeeBeans(20);
}
