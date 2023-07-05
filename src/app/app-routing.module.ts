import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameListComponent } from './game-list/game-list.component';

const routes: Routes = [
  { path: '', component: GameListComponent },
  { path: 'game-detail/:id', component: GameDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
