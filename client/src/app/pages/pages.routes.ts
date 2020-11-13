import { Routes, RouterModule } from "@angular/router";

import { RankingComponent } from "../pages/ranking/ranking.component";
import { PagPrincipalComponent } from "../pages/pag-principal/pag-principal.component";
import { SignInComponent } from "../components/sign-in/sign-in.component";
import { PlayComponent } from '../pages/play/play.component';
import { PagesComponent } from '../pages/pages.component';
import { AboutComponent } from '../pages/about/about.component';

const PAGES_ROUTING: Routes = [

  {
    path: '', component: PagesComponent,
    children: [
      { path: 'home', component: PagPrincipalComponent },
      { path: 'play', component: PlayComponent },
      { path: 'ranking', component: RankingComponent },
      { path: 'about', component: AboutComponent },

    ]
  },
  { path: 'login', component: SignInComponent },


];

export const PAGE_ROUTES = RouterModule.forRoot( PAGES_ROUTING, { useHash: true } );
