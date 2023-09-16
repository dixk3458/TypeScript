import { Component } from './components/component.js';
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
    const note = new NoteComponent('Note Title', 'Note Body');

    const todo = new TodoComponent('Todo Title', 'Todo');

    const video = new VideoComponent(
      'Video Title',
      'https://youtu.be/FQZhehVRSXQ'
    );

    this.page.addChild(image);
    this.page.addChild(note);
    this.page.addChild(todo);
    this.page.addChild(video);
  }
}

// 컴파일시점에 .document요소가 HTML요소인지 null인지 모르기에
// 우리는 static하게 작성해놓은 .document를 확신하기때문에
// 타입 assertion을 해주자!
new App(document.querySelector('.document')! as HTMLElement);
