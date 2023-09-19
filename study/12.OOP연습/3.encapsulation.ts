{
  // 캡슐화
  // 외부에서 클래스로부터 생성된 인스턴스의 프로퍼티에 접근범위를 지정하여
  // 더욱 안정적인 프로그래밍을 가능하게 해준다.
  // 예를들어 외부에서 고양이 객체의 감정을 직접 변경할수는없다.
  // 단지 고양이를 놀아주는 행위와 같은것으로 내부적으로 감정을 변화시켜야한다.

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // 외부에서 coffeeBeans에 유효하지 않은 값을 넣어선 안된다.
    // 외부에서 접근이 불가능하게 해주자!
    private coffeeBeans = 0;

    private static BEANS_GRAMM_PER_SHOT: number = 7;

    // 생성자에 private 키워드를 사용해 외부에서 new를 이용해 객체를 생성하지 못하도록 한다.
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 보통 클래스레벨에서 객체를 생성하는 메서드를 제공한다면
    // 생성자를 통해서 객체를 생성하지 못하도록 해준다.
    static makeMachine(shots: number): CoffeeMaker {
      return new CoffeeMaker(shots);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      console.log(`현재 커피콩:${this.coffeeBeans}`);
      return {
        shots,
        hasMilk: false,
      };
    }

    // 외부에서 직접 객체의 데이터를 변경못하게 하고
    // 외부에서 함수를 통해 객체 내부의 데이터를 변경하게 해주자!
    // 그 메서드에 다양한 유효검사를 해 더욱 안정성을 높여주자!
    fillCoffeeBeans(beans: number): void {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }
  }

  const maker = CoffeeMaker.makeMachine(30);

  const coffee = maker.makeCoffee(2);
  console.log(coffee);
  maker.fillCoffeeBeans(20);
}
