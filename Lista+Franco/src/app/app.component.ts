import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista-Franco';
  showList = true;
  listButton = "Ocultar Lista";

  changeShowList(): void {
    if (this.showList) {
      this.listButton = 'Mostrar Lista';
      this.showList = false;
    } else {
      this.listButton = 'Ocultar Lista';
      this.showList = true;
    }
  }
}
