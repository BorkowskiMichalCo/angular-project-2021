import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authState: any = null;

  constructor(private fireauth: AngularFireAuth, private router: Router) {
    this.fireauth.authState.subscribe(auth => {
      this.authState = auth;
    });
  }

  get isUserAnonymousLoggedIn(): boolean {
    return this.authState !== null ? this.authState.isAnonymous : false;
  }

  get currentUserId(): string {
    return this.authState !== null ? this.authState.uid : '';
  }

  get currentUserName(): string {
    // tslint:disable-next-line: no-string-literal
    return this.authState['email'];
  }

  get currentUser(): any {
    return this.authState !== null ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    if (this.authState !== null && !this.isUserAnonymousLoggedIn) {
      return true;
    } else {
      return false;
    }
  }

  registerWithEmail(email: string, password: string) {
    return this.fireauth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.authState = user;
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  }
  loginWithEmail(email: string, password: string) {
    return this.fireauth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.authState = user;
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  }
  singout(): void {
    this.fireauth.signOut();
    this.router.navigate(['/login']);
  }
}
