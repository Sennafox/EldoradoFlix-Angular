import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public listas : any = [
    {title: 'Rambo 1'},
    {title: 'Rambo 2'},
    {title: 'Rambo 3'},
    {title: 'Rambo 4'},
    {title: 'Rambo 5'},
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
