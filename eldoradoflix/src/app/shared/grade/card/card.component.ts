import { Component, Input, OnInit } from '@angular/core';

const API = 'http://localhost:3001';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() titulo = '';

  constructor() {}

  ngOnInit(): void {
  }

}
