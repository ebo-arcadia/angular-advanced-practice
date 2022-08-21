import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'message-receiver',
  templateUrl: './message-receiver.component.html',
  styleUrls: ['./message-receiver.component.css']
})
export class MessageReceiverComponent implements OnDestroy {
  message: any;
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    // subscribe to message-sender component messages
    this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message });
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      console.log("-----ng on destory is triggered---!! kill the instance!!")
      this.subscription.unsubscribe();
  }
}
