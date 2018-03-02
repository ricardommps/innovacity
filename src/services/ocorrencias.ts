import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OcorrenciasService {
  constructor(private http: Http) {

  }

  public getOcorrencias(userId): Observable<any>  {
    let url:string = `/ocorrencias/${userId}`
    return this.http.get(url).map((res:Response) => res.json());
    //return this.http.get(`/ocorrencias/${userId}`).toPromise();
  }

  public closeOccurence(occurenceData): Promise<any>{
    let url:string = `/closeOcorrencia`
    return this.http.post(url,occurenceData).toPromise();
    //return this.http.get(`/ocorrencias/${userId}`).toPromise();
  }




}
