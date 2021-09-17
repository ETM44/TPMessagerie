import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlagueService {

  constructor(private http: HttpClient) {}

  public appelAPI(): Observable<any> {
    return this.http.get("https://api.chucknorris.io/jokes/random");
  }

}
