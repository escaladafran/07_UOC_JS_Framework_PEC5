import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ArticleListComponent } from '../src/article-list/article-list.component';




bootstrapApplication(ArticleListComponent)
  .catch((err) => console.error(err));
