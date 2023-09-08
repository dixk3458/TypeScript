// ReadOnly<Type> 개발자들이 미리 만들어놓은 타입이다.
// 기존 타입을 유지하고 타입을 보장하면서, 새로운 성질의 타입을 만들어주는 타입

type Todo = {
  title: string;
  description: string;
};

// function display(todo: Todo) {
//   // 아래처럼 Todo 타입의 object를 받아 데이터를 변경하는것은 X
//   // 불변성을 유지해야한다.
//   //   todo.title = 'updated';
// }

function display(todo: Readonly<Todo>) {
  // todo.title = 'updated'; 에러
  console.log(todo.title);
  console.log(todo.description);
}
