import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatSelectorService } from 'src/app/services/chat-selector.service';
import { Subscription } from 'rxjs';
import { ChatListItem } from '../pojo/chat-list-item';

@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.css']
})
export class ChatBodyComponent implements OnInit, OnDestroy {

  chatBody: ChatListItem;

  constructor(public chatSelectorService: ChatSelectorService) { }

  private postSubscription: Subscription;

  ngOnInit() {

    this.postSubscription =  this.chatSelectorService.chatClickedListener()
        .subscribe((chat: ChatListItem) => {
          console.log(chat);
          this.chatBody = chat;
        });

  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }


}
