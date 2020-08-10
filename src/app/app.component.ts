import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'initial';
  onInput = e => {
    this.title = e.target.value;
  }
  bg = true;
  onChange = () => {
    this.bg = !this.bg;
  }
}
