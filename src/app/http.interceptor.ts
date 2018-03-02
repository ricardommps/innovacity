import {Injectable, Injector} from "@angular/core";
import {Http, RequestOptionsArgs, Response, RequestOptions, ConnectionBackend, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import {environment} from "../environments/environment";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {AuthService} from "../services/auth.service";

const asyncLocalStorage = {
  getItem: function (key) {
    return Promise.resolve().then(function () {
      return JSON.parse(window.localStorage.getItem(key))

    });
  }
};


@Injectable()
export class InterceptedHttp extends Http {
  constructor(connectionBackend: ConnectionBackend, requestOptions: RequestOptions, public inj: Injector) {
    super(connectionBackend, requestOptions);
  }


  public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return Observable.fromPromise(
      this.getRequestOptionArgs(options)
    ).mergeMap((options) => {
     // return super.get(url,options)
      return this.intercept(super.get(url, options));
    });
  }

  public post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return Observable.fromPromise(
      this.getRequestOptionArgs(options)
    ).mergeMap((options) => {
     // return super.post(url, body,options)
      return this.intercept(super.post(url, body,options));
    })
  }

  public put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return Observable.fromPromise(
      this.getRequestOptionArgs(options)
    ).mergeMap((options) => {
      //return super.put(url, body,options)
      return this.intercept(super.put(url, body,options));
    })
  }

  public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return Observable.fromPromise(
      this.getRequestOptionArgs(options)
    ).mergeMap((options) => {
     // return super.delete(url,options)
      return this.intercept(super.delete(url, options));
    });
  }

  private getRequestOptionArgs(options?: RequestOptionsArgs) {
    return asyncLocalStorage.getItem('id_token').then((token) => {
      if (options == null) {
        options = new RequestOptions();
      }
      if (options.headers == null) {
        options.headers = new Headers();
      }
      if (token !== null) {
        options.headers.append('Authorization', token);
      }
      options.headers.append('Content-Type', 'application/json');
      console.log(">>>>",options)
      return options;
    }).catch((err) => {
      console.log("------",err)
      console.log("------",options)
      return options;
    });
  }

  private updateUrl(req: string) {
    return  environment.origin + req;
  }

  private isUnauthorized(status: number): boolean {
    console.log(">>>isUnauthorized<<<",status)
    return status === 0 || status === 401 || status === 403;
  }

  intercept(observable: Observable<Response>): Observable<Response> {
    return observable.catch((err, source) => {
      console.log("-------err",err)
      console.log("-------source",source)
      if (this.isUnauthorized(err.status)) {
        let auth = this.inj.get(AuthService)
        auth.logout();
        //logout the user or do what you want
        //this.authService.logout();
        if (err instanceof Response) {
          return Observable.throw(err.json().message || 'backend server error');
        }
        return Observable.empty();
      } else {
        return Observable.throw(err);
      }
    });

  }

}
