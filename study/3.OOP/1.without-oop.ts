{
  type CoffeeCup = {
    shots: number;
    milk: boolean;
  };
  const BEANS_GRAMM_PER_SHOT = 7;

  let coffeeBeans: number = 20;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error('가지고있는 콩으로 커피를 만들수없습니다.');
    }

    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;

    return {
      shots: shots,
      milk: false,
    };
  }

  console.log(makeCoffee(2));
}
