{
  // 상속
  // 부모 클래스의 기능을 확장하여 자식클래스를 만든다.
  // 그렇게 함으로써 코드의 재사용성을 늘리고 더욱 다양한 형태의 객체를 만드는것이 가능하다.
  // 상속을 통해서 추상화 또한 가능하다.
  // 외부에서 어떻게 이 클래스를 사용할것인가를 상속을 통해서 고민

  // 상속을 이용하면, 부모 클래스에 있는 기능을 사용하면서
  // 자식클래스에 특화된 기능까지 사용해볼수있다.

  // 자식 클래스에서 따로 생성자를 정의하는 경우에는 부모의 생성자를 호출해야한다.

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private coffeeBeans = 0;

    private static BEANS_GRAMM_PER_SHOT: number = 7;

    protected constructor(coffeeBeans: number) {
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

  const maker1: CoffeeMachine = CoffeeMachine.makeMachine(30);
  const coffee = maker1.makeCoffee(2);
  console.log(coffee);
  maker1.fillCoffeeBeans(20);

  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(30);
  maker2.makeCoffee(2);

  const cafeLatteMaker = new CafeLatteMachine(30, 'JJW');
  console.log(cafeLatteMaker.serialNumber);
  const cafeLatte = cafeLatteMaker.makeCoffee(2);
  console.log(cafeLatte);
}
