{
  // 스택
  // 스택을 구현하자
  // 스택의 규격사항을 먼저 만들어주자.

  interface Stack {
    // 내부데이터를 외부에서 변경하지 못하도록
    readonly size: number;

    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    // 데이터를 담아 만들고
    // 그 데이터를 변경할 필요가없다.
    readonly value: string;
    readonly next?: StackNode;
  };

  // 스택 규격사항을 준수하는 StackImpl을 만들자.

  class StackImpl implements Stack {
    constructor(private capacity: number) {}

    // 아래 처럼 바로 readonly를 하면 내부에서도 변경할수없다.
    // readonly size:number;

    // getter를 이용하자.

    private _size: number = 0;

    private top?: StackNode;

    get size(): number {
      return this._size;
    }

    push(value: string): void {
      if (this._size >= this.capacity) {
        throw new Error('용량을 초과하여 push 할수없습니다.');
      }
      // 데이터를 담는 노드를 만들어 push해야한다.
      // 데이터를 담는 노드를 만들자.
      const newNode: StackNode = { value, next: this.top };
      this.top = newNode;
      this._size++;
    }

    pop(): string {
      this._size--;
      // 항상 pop이 string을 반환할수있도록 해줄것이다.
      // 사용자가 string인지 undefined를 반환했는지 안했는지검사 안하게
      // 하지만 사용자가 Stack이 비었는지 안비었는지는 검사해야함

      if (this.top == null) {
        //undefeind와 null은 타입은 다르다. 따라서 값만 비교해줬다.
        throw new Error('스택이 비어있습니다.');
      }
      const returnNode = { value: this.top?.value, next: this.top?.next };
      this.top = returnNode.next;
      return returnNode.value;
    }
  }

  const stack = new StackImpl(10);

  stack.push('정재웅');
  stack.push('김백현');
  stack.push('김지헌');
  stack.push('이승현');
  stack.push('정수환');
  stack.push('정주화');

  while (stack.size) {
    console.log(stack.pop());
  }

  console.log(stack);
}
