import { BaseComponent } from '../component.js';

export class PageComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    super('<ul class="page">This is PageComponent</ul>');
  }
}

// this.element = document.createElement('ul');
//     this.element.setAttribute('class', 'page');
//     this.element.textContent = 'This is PageComponent';
