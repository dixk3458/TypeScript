{
  // type alias 새로운 타입을 만들어준다. 나만의 타입
  type Text = string;
  const message: Text = '메세지';

  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: '정재웅',
    age: 25,
  };

  // String Literal Types

  type Name = 'name';
  let jaewoongName: Name;
  jaewoongName = 'name';

  type Boal = true;
  const isCat: Boal = true;
}
