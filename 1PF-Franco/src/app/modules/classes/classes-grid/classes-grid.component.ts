import { Component } from '@angular/core';
import { ClassModel } from 'src/app/interfaces/classes/class.model';

const COURSES_DATA: ClassModel[] = [
  {id:1, name: 'Algoritmos I'},
  {id:2, name: 'Bases de Datos'},
];

@Component({
  selector: 'app-classes-grid',
  templateUrl: './classes-grid.component.html',
  styleUrls: ['./classes-grid.component.scss']
})
export class ClassesGridComponent {
  displayedColumns: string[] = ['id','name'];
  coursesData = COURSES_DATA;

}
