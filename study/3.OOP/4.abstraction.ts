{
  type Coffee = {
    shots: number;
    milk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number, milk: boolean): Coffee;
  }
  interface CommercialCoffeeMaker {
    makeCoffee(shots: number, milk: boolean): Coffee;
    fillCoffeeBeans(coffeeBeans: number): void;
    cleanMachine(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7;

    private coffeeBeans: number = 0;

    private constructor(coffeeBeans?: number) {
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

    makeCoffee(shots: number, milk: boolean): Coffee {
      this.grindCoffeeBeans(shots);
      this.preHeat();
      const extracted = this.extract(shots);

      return {
        shots: extracted,
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

    cleanMachine(): void {
      console.log('cleaning the machine 🧹');
    }
  }

  // 같은 instance일지라도 추상화 하는 interface에 따라 제약사항을 지정할수있다.

  const machine1 = CoffeeMachine.makeMachine(20);
  console.log(machine1);
  machine1.makeCoffee(2, true);
  machine1.fillCoffeeBeans(40);
  machine1.showCoffeeBeans();
  machine1.cleanMachine();

  const machine2: CoffeeMaker = CoffeeMachine.makeMachine(20);
  console.log(machine2);
  machine2.makeCoffee(2, false);

  const machine3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(20);
  console.log(machine3);
  machine3.fillCoffeeBeans(20);
  machine3.makeCoffee(2, false);
  machine3.cleanMachine();

  class AmateurUser {
    constructor(private coffeeMachine: CoffeeMaker) {}
    makeCoffee(): void {
      const coffee = this.coffeeMachine.makeCoffee(2, false);
      console.log('AmateurUser:', coffee);
    }
  }

  class ProBarista {
    constructor(private coffeeMaker: CommercialCoffeeMaker) {}
    makeCoffee(): void {
      const coffee = this.coffeeMaker.makeCoffee(1, true);
      console.log(coffee);
      this.coffeeMaker.fillCoffeeBeans(20);
      this.coffeeMaker.cleanMachine();
    }
  }

  const coffeeMaker = CoffeeMachine.makeMachine(20);

  const amateur = new AmateurUser(coffeeMaker);
  amateur.makeCoffee();

  const pro = new ProBarista(coffeeMaker);
  pro.makeCoffee();
}
