import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jdata } from 'src/data/Jdata';
import { Book } from './BooksDetail';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  // s:string="sanket";
  configData:any = Jdata;
 
  constructor(private http: HttpClient) { }

  getBookDetails(): Observable<Book[]>
  {
   return this.http.get<Book[]>(this.configData);
  }
  
}
