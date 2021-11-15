import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPO } from '../models/ipo';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IpoService {

  url: string;

    constructor(private http: HttpClient, private router: Router) {
      this.url = 'http://localhost:8080/ipos/';
    }

    public getIpos(): Observable<IPO[]> {
      return this.http.get<IPO[]>(this.url);
    }

    getIpo(id: string): Observable<IPO> {
      return this.http.get<IPO>(this.url + id);
    }

    addIpo(ipo: IPO) {
      this.http.post<IPO>(this.url, ipo)
        .subscribe((responseData) => {
          console.log(responseData);
          this.router.navigate(['/ipos']);
        });
    }

    updateIpo(ipo: IPO) {
      this.http.put(this.url, ipo)
        .subscribe(response => {
          console.log(response);
          this.router.navigate(['/ipos']);
        });
    }

    deleteIpo(id: string) {
      this.http.delete(this.url + id)
        .subscribe(response => {
          console.log(response);
          this.router.navigate(['/ipos']);
        });
    }
}
