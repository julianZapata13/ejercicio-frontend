import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  nombre="Julian Andres Zapata Londoño";
  private promedio=4.6;
  constructor() { }

  ngOnInit(): void {
  }

  getPromedio(){
    return this.promedio
  }
}
