import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent } from './components/page/page.js';

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
    const image = new ImageComponent(
      'Image Title',
      'https://picsum.photos/600/300'
    );
    image.attachTo(appRoot, 'beforeend');
    const note = new NoteComponent('Note Title', 'Note Body');
    note.attachTo(appRoot, 'beforeend');
    const todo = new TodoComponent('Todo Title', 'Todo');
    todo.attachTo(appRoot, 'beforeend');

    const video = new VideoComponent(
      'Video Title',
      'https://youtu.be/FQZhehVRSXQ'
    );
    video.attachTo(appRoot, 'beforeend');
  }
}

// 컴파일시점에 .document요소가 HTML요소인지 null인지 모르기에
// 우리는 static하게 작성해놓은 .document를 확신하기때문에
// 타입 assertion을 해주자!
new App(document.querySelector('.document')! as HTMLElement);
