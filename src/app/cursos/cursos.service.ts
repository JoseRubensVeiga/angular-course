import { Curso } from './../models/curso';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(): Curso[] {
    return [
      {description: 'HTML'},
      {description: 'CSS'},
      {description: 'JavaScript'},
      {description: 'SASS'}
    ];
  };
}
