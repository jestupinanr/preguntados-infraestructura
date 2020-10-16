import { Routes, RouterModule } from "@angular/router";

import { RankingComponent } from "./pages/ranking/ranking.component";
import { PagPrincipalComponent } from "./pages/pag-principal/pag-principal.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { PlayComponent } from './pages/play/play.component';
import { PagesComponent } from './pages/pages.component';

const APP_ROUTING: Routes = [

  {
    path: '', component: PagesComponent,
    children: [
      { path: 'play', component: PlayComponent },
      { path: 'play/:id', component: PlayComponent },
      { path: 'ranking', component: RankingComponent },
      { path: 'home', component: PagPrincipalComponent },
      { path: '', component: PagPrincipalComponent }
    ]
  },
  { path: 'login', component: SignInComponent },
  { path: '', component: SignInComponent },


];

export const APP_ROUTES = RouterModule.forRoot( APP_ROUTING, { useHash: true } );
