import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    { title: 'Learn Angular', text: 'Some text', id: 1 },
    { title: 'Learn RxJS', text: 'Some text', id: 2 },
  ];

  // tslint:disable-next-line:typedef
  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
}
