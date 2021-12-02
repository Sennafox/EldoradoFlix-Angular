import { Component, Input, OnInit } from '@angular/core';
import { Filmes } from './filmes/filmes';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {

  @Input() filmes!: Filmes;
  constructor() { }

  ngOnInit(): void {
  }

}
