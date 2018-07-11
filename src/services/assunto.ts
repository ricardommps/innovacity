import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AssuntoService {
  constructor(private http: Http) {

  }

  public list(): Observable<any>  {
    let url:string = `/listAssuntos`
    return this.http.get(url).map((res:Response) => res.json());
    //return this.http.get(`/ocorrencias/${userId}`).toPromise();
  }


}
