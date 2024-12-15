import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Article} from '../models/articulo';



@Component({
  selector: 'app-article-new-template',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './article-new-template.component.html',
  styleUrl: './article-new-template.component.css'
})

export class ArticleNewTemplateComponent {
  article: Article ={
    id:0,
    name: '',
    imageUrl: '',
    price: null,
    isOnSale: false,
    quantityInCart: 0 ,
  }; 



  



//metodo para mostrar por consola el objeto json 
toConsole() {
  console.log('Article object:', this.article);
}

}
