import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Http} from "@angular/http";
import {App} from "ionic-angular";

@Injectable()
export class AuthService {
  constructor(private http: Http, private app: App) {

  }

  public getStorageVariable(name) {
    if(!JSON.parse(window.localStorage.getItem(name))){
      this.logout()
    }
    return JSON.parse(window.localStorage.getItem(name));
  }

  public getuserId(){
    const user = JSON.parse(window.localStorage.getItem('profile'))
    if(!user){
      this.logout()
    }
    return user.id
  }

  public setStorageVariable(name, data) {
    window.localStorage.setItem(name, JSON.stringify(data));
  }

  public isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return Date.now() < expiresAt;
  }

  public login(user): Promise<any>  {
    console.log("Login",user);
   return this.http.post('/login',user).toPromise();
    //this.nav.setRoot("DashboardPage");
  }

  public updatePassword(user): Promise<any> {
    return this.http.post('/updatePassword',user).toPromise();
  }

  public newPassword(userInfo): Promise<any>{
    return this.http.post('/newPassword',userInfo).toPromise();
  }

  public requireAuth(){
    return this.isLoggedIn()
  }

  private isLoggedIn(){
    const idToken = this.getStorageVariable('id_token');
    const profile = this.getStorageVariable('profile');
    if(!idToken && !profile){
      return false
    }else{
      return true
    }
  }

  public logout() {
    console.log(">>>logout");
    window.localStorage.removeItem('profile');
    window.localStorage.removeItem('access_token');
    window.localStorage.removeItem('id_token');
    window.localStorage.removeItem('expires_at');
    this.app.getActiveNav().setRoot("LoginPage")
  }

}
