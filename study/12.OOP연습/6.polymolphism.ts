{
  // 다형성
  // 추상화,상속 등으로 다양한 형태의 객체를 만들수있다.

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private coffeeBeans = 0;

    private static BEANS_GRAMM_PER_SHOT: number = 7;

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    protected grindBeans(shots: number): void {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      console.log(`현재 커피콩:${this.coffeeBeans}`);
    }

    protected preheat(): void {
      console.log(`heating up... 🔥`);
    }

    protected extract(shots: number): CoffeeCup {
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

    clean(): void {
      console.log('Cleaning the the machine...🧹');
    }
  }

  class CafeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    steamMilk(): void {
      console.log('Steaming some milk...🥛');
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  // SweetCoffeeMachine을 만들어보자.
  class SweetCoffeeMachine extends CoffeeMachine {
    // SweetCoffeeMachine은 기존 커피에 달달한 설탕을 넣어야한다.

    makeCoffee(shots: number): CoffeeCup {
      // 기존 커피를 먼저 만든후에
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  // CoffeeMachine을 상속하는 CafeLatteMachine과 SweetCoffeeMaker를 만들었다.
  // 다형성의 장점을 확인해보자.

  // 세가지의 각 다른 머신이 들어있는 배열이있다.
  const machines = [
    new CoffeeMachine(20),
    new CafeLatteMachine(20, 'Serical Number'),
    new SweetCoffeeMachine(20),
  ];

  // 아래와 같이 같은 부모를 상속하거나,한가지의 인터페이스를 구현하는 다양한 클래스들이
  // 동일한 함수를 어떤 클래스인지 구분하지 않고
  // 공통된 api를 호출할수있따.
  machines.forEach(machine => {
    machine.makeCoffee(2);
    console.log('-----------------------');
  });

  // 타입을 지정해 다양한 형태로 구현할수도있다.
  const machines2: CoffeeMaker[] = [
    new CoffeeMachine(20),
    new CafeLatteMachine(20, 'Serical Number'),
    new SweetCoffeeMachine(20),
  ];

  machines2.forEach(machine => {
    machine.makeCoffee(2);
    console.log('-----------------------');
  });

  // 이처럼 다형성이란 하나의 인터페이스나 부모의 클래스를 상속하는 자식 클래스들이
  // 인터페이스나 부모 클래스에 정의된 함수들을
  // 다양한 형태로 구현하는것을 말한다.
  // 동일한 함수 api를 통해서
  // 각각의 구현된 자식 클래스의 내부구현사항을 신경쓰지 않고 
  // 약속된 한가지의 api를 호출함으로서 사용자가 더욱 간편하게 다양한 사용가능하게 한다.
}
