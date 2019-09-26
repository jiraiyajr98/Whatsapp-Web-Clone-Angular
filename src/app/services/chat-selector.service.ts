import { Injectable } from '@angular/core';
import { ChatListItem } from '../components/pojo/chat-list-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatSelectorService {

  constructor() { }

  private chatListItem: ChatListItem[] = [
    {
      userName: 'Test1',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test2',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test3',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test4',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test5',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test6',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test7',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test8',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test8',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test8',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test8',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test8',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test8',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test8',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test8',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test8',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test8',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test8',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test8',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test8',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test8',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test8',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test8',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test8',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    },
    {
      userName: 'Test9',
      userlastMessage: 'Tata',
      userLastMessageSeen: true,
      userLastMessageTime: '10:42 PM',
      userLastMessageType: 'Photo'
    }
  ];

  private chatClickedSubject = new Subject<ChatListItem>();

  getAllChats() {

    return [...this.chatListItem];

  }

  chatClicked(chat: ChatListItem) {

    this.chatClickedSubject.next(chat);

  }

  chatClickedListener() {

    return this.chatClickedSubject.asObservable();
  }

}
