{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    get size(): number {
      return this._size;
    }

    private head?: StackNode<T>;

    push(value: T): void {
      const node = {
        value,
        next: this.head,
      };

      this.head = node;
      this._size++;
    }
    pop(): T {
      this._size--;
      if (this.head == null) {
        throw new Error('스택이 비어있습니다.');
      }
      const node: StackNode<T> = {
        value: this.head.value,
        next: this.head.next,
      };

      if (node.value == null) {
        throw new Error('잘못된 값');
      }

      this.head = node.next;
      return node.value;
    }
  }

  const stack = new StackImpl<string>();
  stack.push('정재웅 1');
  stack.push('김지헌 2');
  stack.push('이승현 3');

  while (stack.size) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>();
  stack2.push(1);
  stack2.push(3);
  stack2.push(4);

  while (stack2.size) {
    console.log(stack2.pop());
  }
}
