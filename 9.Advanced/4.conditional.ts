// conditional 타입은 타입의 조건에 따라 다른 타입을 지정해줄수있다.

type Check<T> = T extends string ? string : null;

type T1 = Check<'문자열'>; // string

type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object';

type T2 = TypeName<() => void>; //function
