{
  interface Stack<T> {
    readonly size: number;

    push(value: T): void;
    pop(): T;
  }

  type Node<T> = {
    readonly value: T;
    readonly nextNode?: Node<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;

    get size(): number {
      return this._size;
    }

    private top?: Node<T>;

    push(value: T): void {
      const newNode: Node<T> = {
        value: value,
        nextNode: this.top,
      };
      this.top = newNode;
      this._size = this._size + 1;
    }

    pop(): T {
      if (this.top == null) {
        throw new Error('스택이 비어있습니다.');
      }
      const returnNode: Node<T> = {
        value: this.top?.value,
        nextNode: this.top?.nextNode,
      };

      this.top = returnNode.nextNode;
      this._size = this._size - 1;
      return returnNode.value;
    }
  }

  const unknownStack = new StackImpl();

  unknownStack.push('정재웅');
  unknownStack.push({ name: '이승현', age: 25 });
  unknownStack.push(['🐯']);
  unknownStack.push(5);

  while (unknownStack.size !== 0) {
    console.log(unknownStack.pop());
  }

  const stringStack = new StackImpl<string>();

  stringStack.push('정재웅');
  stringStack.push('이승현');
  stringStack.push('이승현');
  stringStack.push('이승현');

  while (stringStack.size !== 0) {
    console.log(stringStack.pop());
  }
}
