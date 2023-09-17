import { BaseComponent, Component } from '../component.js';
import { Composable } from '../page/page.js';

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export interface MediaData {
  readonly title: string;
  readonly url: string;
}
export interface TextData {
  readonly title: string;
  readonly body: string;
}
export class InputDialog
  extends BaseComponent<HTMLElement>
  implements Composable
{
  private closeListener?: OnCloseListener;
  private submitListener?: OnSubmitListener;
  constructor() {
    super(`
        <dialog class="dialog">
            <div class="dialog__container">
                <button class="close">X</button>
                <div class="dialog__body"></div>
                <button class="button__submit">ADD</button>
            </div>
        </dialog>
        `);

    const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };

    const submitBtn = this.element.querySelector(
      '.button__submit'
    )! as HTMLButtonElement;
    submitBtn.onclick = () => {
      this.submitListener && this.submitListener();
    };
  }

  addChild(child: Component): void {
    const body = this.element.querySelector('.dialog__body')! as HTMLElement;
    child.attachTo(body);
  }

  setCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }

  setSubmitListener(listener: OnSubmitListener) {
    this.submitListener = listener;
  }
}
