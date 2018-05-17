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

  public getOccurencesClose(userId): Observable<any>  {
    let url:string = `/ocorrencesClose/${userId}`
    return this.http.get(url).map((res:Response) => res.json());
    //return this.http.get(`/ocorrencias/${userId}`).toPromise();
  }

  public closeOccurence(occurenceData): Promise<any>{
    let url:string = `/closeOcorrenciaV2`
    return this.http.post(url,occurenceData).toPromise();
    //return this.http.get(`/ocorrencias/${userId}`).toPromise();
  }

  public occurenceRead(idOccurence): Observable<any>  {
    let url:string = `/occurenceRead/${idOccurence}`
    return this.http.get(url).map((res:Response) => res.json());
    //return this.http.get(`/ocorrencias/${userId}`).toPromise();
  }

  public occurenceClose(idOccurence): Observable<any>  {
    let url:string = `/ocorrenceClose/${idOccurence}`
    return this.http.get(url).map((res:Response) => res.json());
    //return this.http.get(`/ocorrencias/${userId}`).toPromise();
  }

  public occurenceClosedRead(idOccurence): Observable<any>  {
    console.log("----occurenceClosedRead----")
    let url:string = `/occurenceClosedRead/${idOccurence}`
    return this.http.get(url).map((res:Response) => res.json());
    //return this.http.get(`/ocorrencias/${userId}`).toPromise();
  }

  public occurence(idOccurence): Observable<any>  {
    let url:string = `/ocorrence/${idOccurence}`
    return this.http.get(url).map((res:Response) => res.json());
    //return this.http.get(`/ocorrencias/${userId}`).toPromise();
  }


}
