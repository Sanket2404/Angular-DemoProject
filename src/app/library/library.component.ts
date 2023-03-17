import { Component, OnInit } from '@angular/core';
import { Book } from '../BooksDetail';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  BookData!: Book[];
  constructor(private lib:LibraryService){}

    ngOnInit(): void {
             this.lib.getBookDetails().subscribe(data=>this.BookData=data);
    }

}
