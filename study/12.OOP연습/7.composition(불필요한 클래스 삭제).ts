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

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  class CheapMilkSteamer {
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
  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
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

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  class CoffeeMachine implements CoffeeMaker {
    private coffeeBeans = 0;

    private static BEANS_GRAMM_PER_SHOT: number = 7;

    public constructor(
      coffeeBeans: number,
      private milkFrother: MilkFrother,
      private sugarProvider: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
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
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      return this.milkFrother.makeMilk(this.sugarProvider.addSugar(coffee));
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

  //
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  //
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  //

  // 클래스를 통해 필요한 기능을 하는 작은단위의 composition을 만들어놓았고
  // interface의 계약에 따라 다른 기능을 하도록했다면
  // 다양한 클래스를 만들필요없이 기능들을 조합해서 구현할수있다.

  // 상속이 무조건적으로 나쁜것은 아니다.
  // 상속에의해 수직적으로 깊이가 너무 깊어져 복잡해질때 
  // composition 즉 작은단위의 기능을 하는 클래스들을 정의해 조립해나가
  // 코드의 중복을 피하고 재사용성을 높여보자.

  const fancyCandyMaker = new CoffeeMachine(20, fancyMilkMaker, candySugar);
  console.log(fancyCandyMaker.makeCoffee(2));
}
