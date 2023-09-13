interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

/**
 * element를 만들는것을 캡슐화함
 * 사용자가 내부적으로 어떻게 element가 만들어지는지 모른다.
 * 단지 뭘 만들지만 전달하면됨
 */
export class BaseComponent<T extends HTMLElement> implements Component {
  protected readonly element: T;
  constructor(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
