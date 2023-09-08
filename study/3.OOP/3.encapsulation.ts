{
  type Coffee = {
    shots: number;
    milk: boolean;
  };

  class CoffeeMachine {
    private static BEANS_GRAMM_PER_SHOT = 7;

    private coffeeBeans: number = 0;

    private constructor(coffeeBeans?: number) {
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

    fillCoffeeBeans(coffeeBeans: number): number {
      if (coffeeBeans < 0) {
        throw new Error('value for coffeeBeans should be greater than 0');
      }
      this.coffeeBeans += coffeeBeans;
      return this.coffeeBeans;
    }
  }

  const machine1 = CoffeeMachine.makeMachine(20);
  machine1.fillCoffeeBeans(20);
}
