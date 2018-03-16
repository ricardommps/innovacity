import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NotificacaoService {
  constructor(private http: Http) {

  }

  public notification(notification): Promise<any>{
    let url:string = `/notification`
    return this.http.post(url,notification).toPromise();
    //return this.http.get(`/ocorrencias/${userId}`).toPromise();
  }

  public getNotification(userId): Observable<any>  {
    let url:string = `/notification/${userId}`
    return this.http.get(url).map((res:Response) => res.json());
  }

  public getNotificationOverdue(userId): Observable<any>  {
    let url:string = `/notificationOverdue/${userId}`
    return this.http.get(url).map((res:Response) => res.json());
  }

  public notificationAlertRead(userId): Observable<any>  {
    let url:string = `/notificationAlertRead/${userId}`
    return this.http.get(url).map((res:Response) => res.json());
    //return this.http.get(`/ocorrencias/${userId}`).toPromise();
  }

  public notificationRead(idNotification): Observable<any>  {
    let url:string = `/notificationRead/${idNotification}`
    return this.http.get(url).map((res:Response) => res.json());
    //return this.http.get(`/ocorrencias/${userId}`).toPromise();
  }

}
