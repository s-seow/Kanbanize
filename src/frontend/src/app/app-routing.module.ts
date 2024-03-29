import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardViewComponent } from './pages/board-view/board-view.component';
import { KanbanViewComponent } from './pages/kanban-view/kanban-view.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'board-view', component: BoardViewComponent },
  { path: 'kanban-view', component: KanbanViewComponent },
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/kanban-view', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
