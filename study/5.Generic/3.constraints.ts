// 세부적인 타입을 인자로 받아서 다시 추상적인 타입을 return 하는것은 💩💩💩

// 안좋은 예시

// 다양한 직원을 구현해주는 Employee
interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay(): void {
    console.log('Full Time!');
  }

  workFullTime(): void {
    console.log('Full Time Work');
  }
}

class PartTimeEmployee implements Employee {
  pay(): void {
    console.log('Part Time!');
  }

  workPartTime(): void {
    console.log('Part Time Work');
  }
}

// 일반적인 타입이긴한데, Employee를 확장한 타입만 가능하도록 계약해주자.

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const jaewoong = new FullTimeEmployee();
const bob = new PartTimeEmployee();

const jaewoongAfterPay = pay(jaewoong);
const bobAfterPay = pay(bob);
jaewoongAfterPay.workFullTime();
bobAfterPay.workPartTime();

class AnotherPerson {
  constructor(private name: string, private age: number) {}
  greeting(): void {
    console.log(`안녕 나는 ${this.name}이야`);
  }
  pay(): void {
    console.log(this.name);
  }
}

const jaehyeon = new AnotherPerson('재현', 25);
const jaehyeonAfterPay = pay(jaehyeon);

