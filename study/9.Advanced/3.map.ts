// map type
// 타입의 재사용성을 높여준다.
// 기존 타입을 이용해 새로운 타입을 만들때 유용

// 이럴때 사용
// 기존 타입으로 새로운 타입을 만들었는데,
// 1. 기존 타입에 변경사항이있어. 활용한 타입들 마다 수정?
// 2. 타입을 처음 만들던것처럼 새로 작성?

// 위의 사항들을 해결해준다.

// 즉 기존 타입을 활용해서 다른 성질을 갖는 타입으로 만들어준다.

type Video = {
  name: string;
  description: string;
};

// 위의 Video 타입을 이용해 option 형식을 갖는 VideoOptional타입을 만들자.

type Optional<T> = {
  [K in keyof T]?: T[K]; // for..in
};

// Optional type을 만들었기때문에 해당 optional로 설정해야할때 여러 타입에서 재사용가능

type VideoOptional = Optional<Video>;
// VideoOptional = {name?:string;description?:string}

const videoOp: VideoOptional = {
  name: '비디오 이름 옵션', // 없어도됨
  //   animal: 'Video 타입에 없던 key' // 없어야됨
  // description key를 정의하지않아도됨
};

// Readonly 를 만들어주는 type을 만들어보자

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

const videoReadOnly: ReadOnly<Video> = {
  name: 'readonly 이름',
  description: 'readonly 설명',
};

// readonly이기때문에 읽기만 가능
console.log(videoReadOnly.description);

// readonly이기때문에 변경X
// videoReadOnly.name = '변경'

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

const videoNull: Nullable<Video> = {
  name: 'name',
  description: null,
};

type Wrapper<T> = {
  wrap(value: T): Wrapper<T>;
  rip(value: Wrapper<T>): keyof T;
};
