import { Component } from '@angular/core';
import {Article} from '../../models/articulo';
import { ArticleItemComponent } from '../article-item/article-item.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleItemComponent, CommonModule, NavbarComponent],
  template: `
    <div>
<div class="article-list">
    <app-navbar></app-navbar>
    <h2>Article List</h2>
    <div *ngFor="let item of articles" TrackBy="trackItemId">
    <app-article-item
        [article]="item"
        (quantityChange)="onQuantityChange($event)">
      </app-article-item>

    </div>
  </div>
  `,
styles: [`
  h2 { 
    text-align: center; 
    font-family: "Open Sans", sans-serif;
    margin:0 auto;
  }

`]
})


export class ArticleListComponent {
  articles: Article[] = [
    { id: 1, name: 'Fender Custom Shop American Custom', imageUrl: 'https://www.stars-music.es/medias/fender/cropped-custom-shop-strat-american-custom-3s-trem-mn-xn15899-202542.png', price: 300, isOnSale: true, quantityInCart: 2 },
    { id: 2, name: 'Gibson Les Paul', imageUrl: '../assets/Gibson.png', price: 2500, isOnSale: true, quantityInCart: 1 },
    { id: 3, name: 'Yamaha Acoustic Guitar', imageUrl:'../assets/acoustic.png', price: 500, isOnSale: false, quantityInCart: 0 }
  ];



// Esta función manejará el cambio de cantidad
onQuantityChange(event: { articleId: number, newQuantity: number }) {
  const article = this.articles.find(a => a.id === event.articleId);
  if (article) {
    article.quantityInCart = event.newQuantity;
  }
}

//función que devuelve el elemento que cambia del array
trackItemId(index: number, article: Article): number {
  return article.id;
}



}