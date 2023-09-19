{
  // 추상화
  // 복잡한 클래스 내부를 정말 필요한것들만 공개해 사용자가 클래스를 사용하기 쉽게 만들어주자!
  // 사용자가 클래스 내부의 모든것을 알 필요는 없다.
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // interface
  // 얼마만큼의 행동을 약속하고 보장할것인지를 정해놓는 규약
  // 나와 의사소통하려면 이 규약을 지켜야해

  // interface는 규약이다.
  // 더욱 상세한 사항을 작성해야한다.
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // 커피머신은 커피메이커를 따라야한다.
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private coffeeBeans = 0;

    private static BEANS_GRAMM_PER_SHOT: number = 7;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    // 커피를 만들기 위해 사용자가 grindBeans부터해서 모든것을 알 필요가 있을까?
    // 그럴 필요없다.
    // 추상화는 인터페이스를 굉장히 간편하게 만듬으로서 사용자가 쉽게 사용할수있게해준다.
    // 추상화를 하는 방법으로는 다양한 방식이 있다.
    // 1. 캡슐화를 통한 추상화
    // 2. interface를 통한 추상화

    private grindBeans(shots: number): void {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      console.log(`현재 커피콩:${this.coffeeBeans}`);
    }

    private preheat(): void {
      console.log(`heating up... 🔥`);
    }

    private extract(shots: number): CoffeeCup {
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

  // 추상화는 외부에서 클래스를 어떠한 형태로 이용할것인지를 고민하는것이다.

  // maker1은 커피머신 만들어주기때문에 타입이 CoffeeMachine이 될수있다.
  // maker1은 타입을 CoffeeMachine으로 지정했다.
  // CoffeeMachine클래스를 모든것이 갖춰진 형태로 이용가능하게 추상화한것
  const maker1: CoffeeMachine = CoffeeMachine.makeMachine(30);
  const coffee = maker1.makeCoffee(2);
  console.log(coffee);
  maker1.fillCoffeeBeans(20);

  // 커피머신은 커피메이커를 구현했다. 즉 그렇기에 maker2는 커피메이커라고도 할수있다.
  // maker2는 CoffeeMaker타입으로 지정했다.
  // CoffeeMachine이라는 클래스를 CoffeeMaker형태로 사용하는것이다.
  // 그렇기에 makeCoffee()만 가능하다.
  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(30);
  maker2.makeCoffee(2);

  // maker3은 CommercialCoffeeMaker형태로 사용하는것으로 추상화를 하였다.
  // 추상화를 통해 사용자가 클래스를 어떻게 이용할것인지를 결정
  const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(30);
  maker3.clean();
  maker3.makeCoffee(2);
  maker3.fillCoffeeBeans(20);

  console.clear();

  // interface로 타입을 제한해서 받게되면,
  // 그 interface에서 정의된 데이터,메서드만 사용가능하게한다.

  // 다른 예시

  // 아마추어는 생성자로 커피머신을 전달받아 커피를 만든다.
  // 커피머신을 전달받을때 정의한 interface에따라서 같은 오브젝트를 전달받을지라도
  // 다양한 형태를 만들수있다.
  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  // 프로는 생성자로 커피머신을 전달받을때 CommercialCoffeeMaker로 한정했기때문에
  // 해당하는 기능을 사용할수있다.
  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.clean();
      this.machine.fillCoffeeBeans(20);
    }
  }

  // 모든것을 구현하는 machine이다.
  const machine = CoffeeMachine.makeMachine(30);

  // 같은 machine을 전달해도
  // 다른 형태의 machine을 사용한다.
  const amateur = new AmateurUser(machine);
  const pro = new ProBarista(machine);

  amateur.makeCoffee();
  pro.makeCoffee();

  // 아마추어나 프로는 machine의 내부interface가 어떻게 구현되어있는지 전혀몰라도
  // machine의 인터페이스에 규약된 함수만 이용해서 machine과 아마추어,프로가 의사소통하는것이다.
  // 따라서 사용자는 머신클래스 내부의 모든것을 알 필요없이 머신클래스를 구현한 인터페이스만을 알아도
  // 의사소통이 가능하다.
}
