{
  type Coffee = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): Coffee;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7;

    private coffeeBeans: number = 0;

    constructor(coffeeBeans?: number) {
      this.coffeeBeans = coffeeBeans ? coffeeBeans : 0;
    }

    static makeMachine(coffeeBeans?: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
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

    private extract(shots: number): number {
      console.log(`Pulling ${shots} shots...☕`);
      return shots;
    }

    makeCoffee(shots: number): Coffee {
      this.grindCoffeeBeans(shots);
      this.preHeat();
      const extracted = this.extract(shots);

      return {
        shots: extracted,
        hasMilk: false,
      };
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

  class CafeLatteMachine extends CoffeeMachine {
    constructor(coffeeBeans: number, public readonly serialNumber: string) {
      super(coffeeBeans);
    }

    private steamMilk(): void {
      console.log('Steaming some milk 🥛');
    }

    makeCoffee(shots: number): Coffee {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): Coffee {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CafeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CafeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach(machine => {
    console.log('-----------------------------');
    machine.makeCoffee(1);
  });
}
