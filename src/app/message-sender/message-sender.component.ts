import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.css']
})
export class MessageSenderComponent implements OnInit {
  constructor(private messageService: MessageService) { }
  ngOnInit(): void {}

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage("you get a new message!")
  }

  clearMessage(): void {
    this.messageService.clearMessage();
  }

}
