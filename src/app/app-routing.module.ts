import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { PlayDetailsComponent } from './play-library/play-details/play-details.component';
import { PlaysListComponent } from './play-library/plays-list/plays-list.component';
import { PlaysComponent } from './play-library/plays.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'plays', component: PlaysComponent },
  { path: 'library', component: PlaysListComponent },
  { path: 'add', component: PlayDetailsComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
