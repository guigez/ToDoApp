import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { take, map, switchMap } from 'rxjs/operators';


const helper = new JwtHelperService();
const TOKEN_KEY = 'jwt-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string;
  public user: Observable<any>;
  private userData = new BehaviorSubject(null);

  constructor(private storage: Storage, private http: HttpClient,
    private plt: Platform, private router: Router) {
    this.storage.create();
    this.loadStoredToken();
  }

  loadStoredToken() {
    let platformObs = from(this.plt.ready());

    this.user = platformObs.pipe(
      switchMap(() => {
        return from(this.storage.get(TOKEN_KEY))
      }),

      map(token => {
        this.token = token;
        console.log('Token from storage: ', token);
        if (token) {
          let decoded = helper.decodeToken(token);
          this.userData.next(decoded);
          console.log('User decoded Data: ', this.userData);
          return true;
        }
        else {
          return null;
        }
      })
    );
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post('http://localhost:3333/login', credentials).pipe(
      take(1),
      map(res => {
        console.log(res)
        if(res) return JSON.stringify(res);
        else null;
      }),
      switchMap(token => {
        let decoded = helper.decodeToken(token);
        this.userData.next(decoded);
        console.log('User decoded Data: ', this.userData);

        let storageObs = from(this.storage.set(TOKEN_KEY, token));
        return storageObs;
      })
    );
  }

  getUser() {
    return this.userData.getValue();
  }

  getToken(){
    return this.token;
  }

  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.router.navigateByUrl('/initial');
      this.userData.next(null);
    });
  }
}
