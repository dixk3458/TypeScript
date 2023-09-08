// Index Type
// 다른 Type의 key에 접근해 그 key의 type을 적용시킬수있다.

{
  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Person = {
    name: string;
    age: number;
    gender: Animal['gender'];
  };

  type Keys = keyof Person;
  const key: Keys = 'name'; // 'name'|'age'|'gender'

  type Name = Person['name'];

  //   const name:Name = 123 // string (X)
  const name: Name = '문자열만 가능'; // string
}
