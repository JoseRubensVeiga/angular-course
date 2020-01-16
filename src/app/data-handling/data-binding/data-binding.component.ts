import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  title: string;

  constructor() {
    this.title = 'Esta é a variável title =)';
  }

  ngOnInit() {
  }

  getValor() {
    return "Este é o valor retornado por uma função";
  }

}
