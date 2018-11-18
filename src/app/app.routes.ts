
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTES: Routes = [
  { path: 'Historia', component: HistoriaComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'Historia' },
  { path: '', pathMatch: 'full', redirectTo: 'Historia' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
