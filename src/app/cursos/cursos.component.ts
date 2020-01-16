import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../models/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  title: string;
  cursos: Curso[];

  constructor(private cursosService: CursosService) {
    this.title = 'Cursos';
    
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit() {
  }
}
