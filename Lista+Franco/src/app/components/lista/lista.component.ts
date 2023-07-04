import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  alumn: string[] = ['Elias', 'Camila', 'Joel', 'Roberto'];
  showBackground = false;

  changeBackground(): void {
    this.showBackground = !this.showBackground;
  }
}
