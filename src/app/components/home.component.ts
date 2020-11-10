import { Component } from '@angular/core';

@Component(
  {
    selector: 'home',
    templateUrl: '../views/home.html'
  }
)
export class HomeComponent{
  public titulo: string;

  constructor(){
    this.titulo = 'WebApp de productos con angular 10';
  }

  ngOnInit() {
    console.log('Se ha cargado el componente homeComponent.ts');
  }

}
