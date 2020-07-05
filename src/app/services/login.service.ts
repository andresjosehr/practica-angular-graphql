import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUrl: string;

  constructor(
    private router: Router,
    private authGuard: AuthGuard
    ) { }

  logout(){
    localStorage.removeItem('tokenJWT');
    this.authGuard.loggedIn=false;
    this.router.navigate(['/login']);
  }


}
