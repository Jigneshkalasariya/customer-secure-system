import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  basePath: any = environment.baseUrl;
 // private dbPath = '/customer-list';

  //customersRef: AngularFirestoreCollection<Customer>;

  constructor(private http: HttpService) {
    //this.customersRef = db.collection(this.dbPath);
  }

  getAll() {
    const url = this.basePath + '/customers';
    return this.http
      .get(url, this.http.headers)
      .pipe(catchError(this.Errorhandling));
  }
  getAllReport() {
    const url = this.basePath + '/customers/report';
    return this.http
      .get(url, this.http.headers)
      .pipe(catchError(this.Errorhandling));
  }
  getById(id:string){
    const url = this.basePath + '/customers/'+ id;
    return this.http
      .get(url, this.http.headers)
      .pipe(catchError(this.Errorhandling));
  }
  getToken(id:string){
    const url = this.basePath + '/customers/token/'+ id;
    return this.http
      .get(url, this.http.headers)
      .pipe(catchError(this.Errorhandling));
  }
  update(id: string, data: any) {
    const url = this.basePath + '/customers/' + id;
    return this.http.put(url, data).pipe(catchError(this.Errorhandling));
  }

  Errorhandling(err: HttpErrorResponse) {
    return throwError(err);
  }
}
