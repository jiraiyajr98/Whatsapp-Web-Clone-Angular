import { Component, OnInit } from '@angular/core';
import { ChatListItem } from '../pojo/chat-list-item';
import { ChatSelectorService } from 'src/app/services/chat-selector.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  constructor(public chatSelectorService: ChatSelectorService) { }

  chatList: ChatListItem[] = [];

  ngOnInit() {
    this.chatList = this.chatSelectorService.getAllChats();
  }

  chatItemClicked(chatUserItem: ChatListItem) {

    this.chatSelectorService.chatClicked(chatUserItem);
  }

}
