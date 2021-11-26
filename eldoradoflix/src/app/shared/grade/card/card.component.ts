import { Component, OnInit } from '@angular/core';

const API = 'http://localhost:3000';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {
  }

}
