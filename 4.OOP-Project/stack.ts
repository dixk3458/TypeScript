// 스택
interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;

  get size(): number {
    return this._size;
  }

  push(value: string): void {
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): string {
    this._size--;
    if (this.head == null) {
      throw new Error('스택이 비어있습니다.');
    }
    const node: StackNode = { value: this.head?.value, next: this.head?.next };
    this.head = node.next;
    return node.value;
  }
}

const stack = new StackImpl();
stack.push('정재웅 1');
stack.push('김지헌 2');
stack.push('이승현 3');

while (stack.size) {
  console.log(stack.pop());
}
