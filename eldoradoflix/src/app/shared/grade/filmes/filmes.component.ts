import { Component, Input, OnInit } from '@angular/core';

const API = 'http://localhost:3001'

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {

  private urlOriginal ='';
  
  @Input() descricao =''; 

  @Input() set url(url: string){
    if (url.startsWith('data')){
      this.urlOriginal = url;
    } else {
      this.urlOriginal = `${API}/img/${url}`;
    }
  }

  get url(): string {
    return this.urlOriginal;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
