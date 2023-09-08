// interface Employee {
//   pay(): void;
// }

// class FullTimeEmployee implements Employee {
//   pay(): void {
//     console.log('FullTime Employee');
//   }
//   workFullTime() {}
// }

// class PartTimeEmployee implements Employee {
//   pay(): void {
//     console.log('PartTime Employee');
//   }

//   workPartTime() {}
// }

// function pay(employee: Employee) {
//   employee.pay();
//   return employee;
// }

// const jaewoong = new FullTimeEmployee();
// const jaewoongAfterPay = pay(jaewoong);
// // 돈을 받고 난 후 workFullTime()이 사라진것을 볼수있다.
// // pay()함수는 인자로 구체적인것부터 추상적인것까지 받을수있다. 하지만 return은 employee타입 즉 추상적인것을 리턴하기에
// // interface에서 규약한내용만 구현한 instance가 반환된다.
// jaewoongAfterPay.pay();

// --------------------------------------------------------------------------------------------

interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay(): void {
    console.log('FullTime Employee');
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay(): void {
    console.log('PartTime Employee');
  }

  workPartTime() {}
}

function pay<T extends Employee>(employee: T) {
  employee.pay();
  return employee;
}

const jaewoong = new FullTimeEmployee();
const jaewoongAfterPay = pay(jaewoong);

jaewoongAfterPay.pay();
jaewoongAfterPay.workFullTime();
