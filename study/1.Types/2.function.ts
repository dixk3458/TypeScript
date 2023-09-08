{
  // JavaScript 💩
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }

  //   //   TypeScript ✨
  //   function add(num1: number, num2: number): number {
  //     return num1 + num2;
  //   }

  //   // JavaScript 💩
  //   function jsFetchNum(id) {
  //     // code...
  //     // code...
  //     // code...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }
  //   // TypeScript ✨
  //   function fetchNum(id: string): Promise<number> {
  //     // code...
  //     // code...
  //     // code...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //   Optional Parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName('재웅', '정');
  printName('재웅');
  printName('재웅', undefined);

  function printMessage(message: string = 'default message') {
    console.log(message);
  }

  printMessage();
  printMessage('인자로 전달');

  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2, 3));
}
