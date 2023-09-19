{
  // Composition
  // 필요한 기능을 따로 클래스로 정의한 후 외부로부터 받아와
  // 가져다 사용하는것을 말한다.
  // 이렇게해주면 클래스마다 그 기능을 내부에서 일일이 구현할 필요없이
  // 한번만 정의하면 된다.

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // 우유를 만들때 지켜야하는 계약서를 만들어 의사소통해보자
  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  class CheapMilkSteamer {
    // 내부구현 동작은 private
    private steamMilk(): void {
      console.log('Steaming some milk...🥛');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Fancy Steaming some milk...🥛');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Fancy Steaming some milk...🥛');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class CandySugarMixer implements SugarProvider {
    private getSugar(): void {
      console.log('Getting some sugar from candy...🍭');
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      this.getSugar();
      return {
        ...cup,
        hasSugar: true,
      };
    }
  }
  class SugarMixer implements SugarProvider {
    private getSugar(): void {
      console.log('Getting some sugar from jar...🧂');
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      this.getSugar();
      return {
        ...cup,
        hasSugar: true,
      };
    }
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
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milkFrother: MilkFrother
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    constructor(coffeeBeans: number, private sugarMaker: SugarProvider) {
      super(coffeeBeans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugarMaker.addSugar(coffee);
    }
  }

  // 이제 SweetCafeLatteMachine은 외부로부터
  // 우유를 만들어주는 거품기와
  // 설탕을 추가해주는 슈가믹서를 받아와 sweetCafeLatte를 만들수있다.

  class SweetCafeLatteMachine extends CoffeeMachine {
    // 클래스들끼리 의사소통을 할때
    // 클래스 자신을 노출하지말고 계약서 interface를 이용하자.
    constructor(
      private beans: number,
      private milkFrother: MilkFrother,
      private sugarMaker: SugarProvider
    ) {
      super(beans);
    }
    // makeCoffee()를 오버라이딩해주자
    makeCoffee(shots: number): CoffeeCup {
      // 기본 커피를 만들고 설탕과 우유를 추가해야한다.
      // 그렇게하기위해서 외부로부터 필요한 기능을 받아오자.
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(this.sugarMaker.addSugar(coffee));
    }
  }

  // 아래의 maker는 우유를 어떻게 얻는지 설탕을 어떻게 얻는지 몰라도된다.
  // 단순히 필요한 기능이 있다면 그것을 받아서 사용하기만 하면됨

  //
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();

  //
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();

  //

  const coldSugarMaker = new SweetCafeLatteMachine(30, coldMilkMaker, sugar);
  const coldSugarCoffee = coldSugarMaker.makeCoffee(2);
  console.log(coldSugarCoffee);

  const cheapCandyMaker = new SweetCafeLatteMachine(
    30,
    cheapMilkMaker,
    candySugar
  );

  const cheapCandyCoffee = cheapCandyMaker.makeCoffee(2);
  console.log(cheapCandyCoffee);

  // 그러나 문제가 있다.
  // 클래스들끼리 너무 커플링 되어있어, 위의 경우에는 싸구려거품기만사용가능하고,사탕설탕만 사용가능하다.
  // 클래스들끼리 서로 얽혀있는것은 좋지않다.

  // 위 처럼 동일한 클래스라도 필요한 기능을 주입해 서로다른 인스턴스를 만들수있다.
  // 클래스들끼리 의사소통할때에는 인스턴스라는 계약을 이용하자.
}
