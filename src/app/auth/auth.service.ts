import {Injectable} from '@angular/core';

import * as firebase from 'firebase/app';
import {Observable, Subject} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import UserCredential = firebase.auth.UserCredential;

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  private userSubject = new Subject<firebase.User>();
  public userEmitter = this.userSubject.asObservable();
  constructor(public firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        } else {
          this.userDetails = null;
        }
        this.userSubject.next(user);
      }
    );
  }

  signInWithGoogle(): Promise<UserCredential> {
    return this.firebaseAuth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  isLoggedIn(): boolean {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  logout(): void {
    this.firebaseAuth.signOut()
      .then((res) => this.router.navigate(['/']));
  }

  getUserId(): string {
    if (this.userDetails) {
      return this.userDetails.uid;
    } else {
      return null;
    }
  }
}
