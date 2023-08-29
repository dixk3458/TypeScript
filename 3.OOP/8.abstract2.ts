{
  type Coffee = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): Coffee;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7;

    private coffeeBeans: number = 0;

    constructor(coffeeBeans?: number) {
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

    protected abstract extract(shots: number): Coffee;

    makeCoffee(shots: number): Coffee {
      this.grindCoffeeBeans(shots);
      this.preHeat();
      const coffee = this.extract(shots);

      return {
        ...coffee,
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

    protected extract(shots: number): Coffee {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): Coffee {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  //   const machines: CoffeeMaker[] = [
  //     new CafeLatteMachine(16, '1'),
  //     new SweetCoffeeMaker(16),
  //     new CafeLatteMachine(16, '1'),
  //     new SweetCoffeeMaker(16),
  //   ];

  //   machines.forEach(machine => {
  //     console.log('-----------------------------');
  //     machine.makeCoffee(1);
  //   });

  const sc = new CafeLatteMachine(16, '1');
  sc.makeCoffee(2);
}
