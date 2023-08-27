{
  type Coffee = {
    shots: number;
    milk: boolean;
  };

  class CoffeeMachine {
    static BEANS_GRAMM_PER_SHOT = 7;

    coffeeBeans: number = 0;

    constructor(coffeeBeans?: number) {
      this.coffeeBeans = coffeeBeans ? coffeeBeans : 0;
    }

    static makeMachine(coffeeBeans?: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    makeCoffee(shots: number, milk: boolean): Coffee {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error(
          `커피콩이 너무 적습니다. 현재 커피콩:${this.coffeeBeans}`
        );
      }
      this.coffeeBeans -= CoffeeMachine.BEANS_GRAMM_PER_SHOT;

      return {
        shots,
        milk,
      };
    }

    showCoffeeBeans(): void {
      console.log(this.coffeeBeans);
    }

    supplyCoffeeBeans(coffeeBeans: number): number {
      this.coffeeBeans += coffeeBeans;
      return this.coffeeBeans;
    }
  }

  const machine1 = new CoffeeMachine();
  const machine2 = CoffeeMachine.makeMachine();

  console.log(machine1);

  machine1.showCoffeeBeans();

  machine1.supplyCoffeeBeans(40);

  machine1.showCoffeeBeans();

  const coffee: Coffee = machine1.makeCoffee(2, false);
  console.log(coffee);
}
