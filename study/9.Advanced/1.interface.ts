// Interface vs Type Alias

// Interface
// Interface는 서로가 의사소통할때 지켜야하는 규약이다.
// 즉 사용자가 interface(규약)을 구현해 무언가를 만들때 사용한다.

interface Animal {
  cry(): void;
  eat(feed: Feed): void;
}

class Dog implements Animal {
  cry(): void {
    console.log('멍멍!');
  }

  eat(feed: Feed): void {
    console.log(`${feed.name}먹는다.`);
  }
}

const dog = new Dog();
dog.eat({ name: '사료', taste: 'sweet' });
dog.cry()

// Type alias
// Type alias는 어떠한 형태의 데이터를 담을지 정의하는것이다.
// 즉 어떠한 데이터를 담을수있는지 데이터 타입을 결정하는것.

type Feed = {
  name: string;
  taste: 'salty' | 'bitter' | 'sweet' | 'spicy';
};
