// Record 타입은 자료구조 Map과 비슷하다.
// 여러가지 타입을 연결할때 사용한다.

type PageInfo = {
  title: string;
};

type Page = 'home' | 'about' | 'contact';

const nav: Record<Page, PageInfo> = {
  home: { title: 'home' },
  about: { title: 'about' },
  contact: { title: 'contact' },
};
