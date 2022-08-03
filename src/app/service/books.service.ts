import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor() {}
  hideDetails: boolean = false;

  toggleDetails() { this.hideDetails = !this.hideDetails}
  
}
