import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviedataComponent } from './user/user.component.spec';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MoviedataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // name = 'Monkey D Luffy🏴‍☠️🏴‍☠️🏴‍☠️';
  // url =
  //   'https://image.winudf.com/v2/image/Y29tLmJhbGVmb290Lk1vbmtleURMdWZmeVdhbGxwYXBlcl9zY3JlZW5fMF8xNTI0NTE5MTEwXzAyOA/screen-0.jpg?fakeurl=1&type=.jpg';
}
