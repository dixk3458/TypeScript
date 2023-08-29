{
  type Coffee = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): Coffee;
  }

  interface MilkFrother {
    makeMilk(coffee: Coffee): Coffee;
  }

  interface Sugar {
    addSugar(coffee: Coffee): Coffee;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7;

    private coffeeBeans: number = 0;

    constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: Sugar
    ) {
      this.coffeeBeans = coffeeBeans ? coffeeBeans : 0;
    }

    private grindCoffeeBeans(shots: number): void {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error(
          `커피콩이 너무 적습니다. 현재 커피콩:${this.coffeeBeans}`
        );
      }
      this.coffeeBeans -= CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preHeat(): void {
      console.log('Heating...🔥');
    }

    private extract(shots: number): Coffee {
      console.log(`Pulling ${shots} shots...☕`);
      return {
        shots,
      };
    }

    makeCoffee(shots: number): Coffee {
      this.grindCoffeeBeans(shots);
      this.preHeat();

      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(coffee);
    }

    fillCoffeeBeans(coffeeBeans: number): number {
      if (coffeeBeans < 0) {
        throw new Error('value for coffeeBeans should be greater than 0');
      }
      this.coffeeBeans += coffeeBeans;
      return this.coffeeBeans;
    }

    cleanMachine(): void {
      console.log('cleaning the machine 🧹');
    }
  }

  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Steaming some cheap milk 🥛');
    }

    makeMilk(coffee: Coffee): Coffee {
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }
  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Steaming some fancy milk 🥛');
    }

    makeMilk(coffee: Coffee): Coffee {
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(coffee: Coffee): Coffee {
      return coffee;
    }
  }

  class WhiteSugarMixer implements Sugar {
    private getSugar(): boolean {
      console.log('Getting some white sugar from jar 🧂');
      return true;
    }

    addSugar(coffee: Coffee): Coffee {
      const sugar = this.getSugar();
      return {
        ...coffee,
        hasSugar: sugar,
      };
    }
  }

  class BlackSugarMixer implements Sugar {
    private getSugar(): boolean {
      console.log('Getting some black sugar from jar 🧂');
      return true;
    }

    addSugar(coffee: Coffee): Coffee {
      const sugar = this.getSugar();
      return {
        ...coffee,
        hasSugar: sugar,
      };
    }
  }

  class NoSugar implements Sugar {
    addSugar(coffee: Coffee): Coffee {
      return coffee;
    }
  }

  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const noMilk = new NoMilk();
  const whiteSugar = new WhiteSugarMixer();
  const blackSugar = new BlackSugarMixer();
  const noSugar = new NoSugar();

  // 값싸고 ,백설탕을 사용하는 Machine
  // 비싸고, 흑설탕 사용하는 Machine
  // 즉 같은 클래스를 사용하더라도, 사용자들은 내부 구현 사항을 자세히 알지 않고도
  // 원하는 부품들만 전달하여 같은 클래스를 이용해 다양한 인스턴스를 만들수있다.
  const cheapWhiteMachine = new CoffeeMachine(40, cheapMilkMaker, whiteSugar);

  cheapWhiteMachine.makeCoffee(2);

  const fancyBlackMachine = new CoffeeMachine(40, fancyMilkMaker, blackSugar);

  const simpleCoffeeMachine = new CoffeeMachine(40, noMilk, noSugar);
  simpleCoffeeMachine.makeCoffee(2);

  // 만약 cheapMilkFrother를 사용하지 못하고, fancyMilkFrother만 사용가능하다면, 사용하는곳에서 다 바꾸어야 한다.
  // 번거로운 일을 해결하기 위해선 interface를 활용해보자.
  // const cafeLatteMachine = new CafeLatteMachine(40, 'SS', cheapMilkFrother);
}
