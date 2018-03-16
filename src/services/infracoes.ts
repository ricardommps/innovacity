import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InfracoesService {
  constructor(private http: Http) {

  }

  public getInfrcoes(): Observable<any>  {
    let url:string = `/infracoes`
    return this.http.get(url).map((res:Response) => res.json());
    //return this.http.get(`/ocorrencias/${userId}`).toPromise();
  }


}
