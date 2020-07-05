import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterUserComponent } from './components/register-user/register-user.component';


const routes: Routes = [


  {path: 'login'          ,   component: LoginComponent},


  
  {path: 'profile'        ,   component: ProfileComponent         , canActivate: [AuthGuard]},
  {path: 'users'          ,   component: UsersComponent           , canActivate: [AuthGuard]},
  {path: 'register-user'  ,   component: RegisterUserComponent    , canActivate: [AuthGuard]},


  {path: '**', pathMatch: 'full', redirectTo: 'login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
