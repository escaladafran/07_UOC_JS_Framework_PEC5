import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validator, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomValidator } from '../custom-validator';

@Component({
  selector: 'app-article-new-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.css'
})
export class ArticleNewReactiveComponent {

  myReactiveForm: FormGroup;  
Filed: any;


//getters

  get articleName(){
    return this.myReactiveForm.get('articleName')
  }

  get articlePrice(){
    return this.myReactiveForm.get('articlePrice')
  }

  get imageUrl(){
    return this.myReactiveForm.get('imageUrl')
  }


   urlPattern =  /^https:\/\/www\.[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}(\/[a-zA-Z0-9-_\/\.]+)\.(jpg|jpeg|png)$/;

   
  



constructor(private fb: FormBuilder) {
    //Inicializamos el FormGroup en el constructor
    this.myReactiveForm = this.fb.group({
      articleName: ['',[Validators.required,CustomValidator.NameArticleValidator(/^(prueba|test|mock|fake)$/i)]],              
      articlePrice: [null,[Validators.required,Validators.min(0.1)]],           
      imageUrl: ['',[Validators.required,Validators.pattern(this.urlPattern)]],                 
      isOnSale: [false]               
    
    });
  }







//metodo para mostrar por consola el objeto json 
toConsole() {
  console.log('Article object:', this.myReactiveForm.value);
}


}