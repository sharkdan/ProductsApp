import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId);
  }
  
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  
  getProducts() {
    return this.http.get('https://productsapp-thedanjamieson220596.codeanyapp.com/api/products');
    //return this.http.get('http://localhost:3000/products');  
  }
  
}
