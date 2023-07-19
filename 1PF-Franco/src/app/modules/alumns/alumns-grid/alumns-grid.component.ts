import { Component } from '@angular/core';
import { AlumnModel } from 'src/app/interfaces/alumns/alumn.model';

const ALUMNS_DATA: AlumnModel[] = [
  {id:1, lastname: 'Franco', firstname: 'Elias'},
  {id:2, lastname: 'Ferreyra', firstname: 'Camila'},
];

@Component({
  selector: 'app-alumns-grid',
  templateUrl: './alumns-grid.component.html',
  styleUrls: ['./alumns-grid.component.scss']
})

export class AlumnsGridComponent {
  displayedColumns: string[] = ['id','lastname','firstname'];
  alumnsData = ALUMNS_DATA;

}
