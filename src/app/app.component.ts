import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic title';

  inputValue = '';
  // tslint:disable-next-line:typedef
  onInput(event: KeyboardEvent) {
    this.inputValue = (<HTMLInputElement> event.target).value;
  }
  showAlert = () => {
    alert('Hello');
  }

  onBlur = (str: string) => {
    this.inputValue = str;
  }
}
