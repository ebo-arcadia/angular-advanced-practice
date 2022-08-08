import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  constructor() { }
  private subject = new Subject<any>();

  sendMessage(message: string) {
    this.subject.next( { text: message })
  }

  clearMessage() {
    this.subject.next("");
  }

  getMessage():  Observable<any> {
    return this.subject.asObservable();
  }

}

// reference for revise key concept
// https://medium.com/mobiosolutions/angular-communicating-between-components-with-observable-827180e43eb5#:~:text=The%20observable%20subscribe%20method%20is,are%20sent%20to%20an%20observable.&text=The%20subject%20next%20method%20is,are%20subscribers%20of%20that%20observable.