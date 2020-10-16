import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { APP_ROUTES } from '../app.routes';
import { AppComponent } from '../app.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { PlayComponent } from '../pages/play/play.component';
import { RankingComponent } from '../pages/ranking/ranking.component';

import {PersonService} from '../services/person.service';
import { PagPrincipalComponent } from '../pages/pag-principal/pag-principal.component';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { PagesComponent } from '../pages/pages.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PAGE_ROUTES } from './pages.routes';
import { CardQuestionComponent } from './card-question/card-question.component';
import { CreateQuestionsComponent } from './create-questions/create-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PlayComponent,
    RankingComponent,
    PagPrincipalComponent,
    SignInComponent,
    PagesComponent,
    FooterComponent,
    CardQuestionComponent,
    CreateQuestionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTES,
    RouterModule,
    PAGE_ROUTES,
    CardQuestionComponent
  ],
  providers: [
    PersonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
