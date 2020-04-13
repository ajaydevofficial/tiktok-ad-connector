import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdConnectorService {

  constructor(private http:HttpClient) {

  }
  connectDataSource(endpoint){
    this.http.get(endpoint)
  }
}
