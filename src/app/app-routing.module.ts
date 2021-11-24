import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'initial',
    pathMatch: 'full'
  },
  {
    path: 'initial',
    loadChildren: () => import('./initial/initial.module').then( m => m.InitialPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'create-board',
    loadChildren: () => import('./create-board/create-board.module').then( m => m.CreateBoardPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'create-task',
    loadChildren: () => import('./create-task/create-task.module').then( m => m.CreateTaskPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'to-do',
    loadChildren: () => import('./to-do/to-do.module').then( m => m.ToDoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'invite',
    loadChildren: () => import('./invite/invite.module').then( m => m.InvitePageModule),
    canActivate: [AuthGuard]
  },  {
    path: 'edit-task',
    loadChildren: () => import('./edit-task/edit-task.module').then( m => m.EditTaskPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
