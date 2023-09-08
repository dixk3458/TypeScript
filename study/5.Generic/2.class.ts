interface Either {
  left: () => number;
  right: () => number;
}

// SimpleEither로 만들어진 인스턴스는 숫자를 받아서 숫자만 리턴을 해준다.
// left,right가 숫자만 받아서 리턴을 하는데, 숫자가 아닌 다른 타입을 받고싶을때는 어떻게해야할까?
// 또는 서로 다른 타입을 리턴 하고싶을때는 어떻게해야할까?

class SimpleEither implements Either {
  constructor(private leftValue: number, private rightValue: number) {}
  left(): number {
    return this.leftValue;
  }

  right(): number {
    return this.rightValue;
  }
}

interface EitherGeneric<L, R> {
  left: () => L;
  right: () => R;
}

class GenericEither<L, R> implements EitherGeneric<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left() {
    return this.leftValue;
  }
  right() {
    return this.rightValue;
  }
}

const generic = new GenericEither(123, 'String');
console.log(generic);
