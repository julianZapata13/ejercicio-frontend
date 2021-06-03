import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.css']
})
export class ClaseComponent implements OnInit {
   
  clase="Electiva III";
  semestre="6° semestre";
  
  constructor() { }

  ngOnInit(): void {
  }

}
