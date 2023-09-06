{
  type Todo = {
    title: string;
    description: string;
    deadline: Date;
    priority: 'high' | 'low';
  };

  function updateTodo(todo: Todo, filedsTodoUpdate: Partial<Todo>): Todo {
    return { ...todo, ...filedsTodoUpdate };
  }

  const todo: Todo = {
    title: 'Learn TypeScript',
    description: 'Study hard',
    deadline: new Date(new Date().setDate(new Date().getDate() + 7)),
    priority: 'high',
  };

  console.log(todo);

  // 새롭게 변경된 todo object를 만들어 반환
  const updated = updateTodo(todo, { priority: 'low', title: 'updated' });

  console.log(updated);
}
