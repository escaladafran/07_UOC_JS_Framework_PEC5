import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-item',
  standalone: true, // Es standalone
  imports: [CommonModule], // Importa CommonModule para usar directivas como ngClass
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent {
  article = {
    name: 'Fender Custom Shop American Custom',
    imageUrl: 'https://www.stars-music.es/medias/fender/cropped-custom-shop-strat-american-custom-3s-trem-mn-xn15899-202542.png',
    price: 300,
    isOnSale: true,
    quantityInCart: 2
  };

  getCssClass(): string {
    return this.article.isOnSale ? 'on-sale' : 'outOfStock';
  }


  increaseQuantity(){
    this.article.quantityInCart++;
  }    

  decreaseQuantity(){
    if(this.article.quantityInCart > 0){
      this.article.quantityInCart--;
    }
  }

}