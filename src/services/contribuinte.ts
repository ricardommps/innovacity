import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContribuinteService {
  constructor(private http: Http) {

  }

  public getContribuinte(data): Promise<any>{
    console.log(">>>getContribuinte>>>", data)
    let url:string = `/contribuinte`
    return this.http.post(url,data).toPromise();
    //return this.http.get(`/ocorrencias/${userId}`).toPromise();
  }

}
