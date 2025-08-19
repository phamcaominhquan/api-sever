import { Injectable } from '@angular/core';
import {Auth, signInWithPopup, GoogleAuthProvider} from '@angular/fire/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  async login() {
    const credential= await signInWithPopup(this.auth, new GoogleAuthProvider());

  let idToken=await credential.user.getIdToken();
  console.log(credential.user);
  console.log(idToken);
  }

  async logout() {
  await this.auth.signOut();
  }
}
