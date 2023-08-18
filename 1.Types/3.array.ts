{
  // Array를 표현하는 두가지 방법
  const array1: number[] = [1, 2, 3, 4];
  const array2: Array<number> = [1, 2, 3, 4];

  //   차이점
  //   첫번째 표기법이 Object의 불변성을 보장해준다.
  //   readeonly라는 키워드 지원
  //   function printArray1(array: readonly number[], number: number) {
  //     array.push(number); // readonly 적용
  //   }
  //   function printArray2(array: readonly Array<number>, number: number) {
  //     array.push(number); // readonly 에러
  //   }

  // Tuple 서로다른 타입을 함께 가질수있는 배열
  // 되도록 interface, type alias, class 로 대체해주자
  // 동적으로 데이터를 받아오는데, 서로 연관은 있지만, 다른 타입일때
  // class 등 다른것으로 묶어주기 곤란할때 사용

  const student: [string, number] = ['정재웅', 25];
  student[0]; // 정재웅
  student[1]; // 25
  const [name, age] = student; // 오브젝트 destructuring
}
