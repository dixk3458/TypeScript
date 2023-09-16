import { Component } from './components/component.js';
import { InputDialog } from './components/dialog/dialog.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from './components/page/page.js';

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      'Image Title',
      'https://picsum.photos/600/300'
    );
    this.page.addChild(image);

    const note = new NoteComponent('Note Title', 'Note Body');
    this.page.addChild(note);

    const todo = new TodoComponent('Todo Title', 'Todo');
    this.page.addChild(todo);

    const video = new VideoComponent(
      'Video Title',
      'https://youtu.be/FQZhehVRSXQ'
    );
    this.page.addChild(video);

    const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
    imageBtn.addEventListener('click', () => {
      const dialog = new InputDialog();

      dialog.setCloseListener(() => {
        dialog.removeFrom(document.body);
      });

      dialog.setSubmitListener(() => {
        dialog.removeFrom(document.body);
      });

      dialog.attachTo(document.body);
    });
  }
}

// 컴파일시점에 .document요소가 HTML요소인지 null인지 모르기에
// 우리는 static하게 작성해놓은 .document를 확신하기때문에
// 타입 assertion을 해주자!
new App(document.querySelector('.document')! as HTMLElement);
