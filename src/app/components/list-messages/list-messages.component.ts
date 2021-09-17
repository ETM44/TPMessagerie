import {Component, OnInit} from '@angular/core';
import {Message} from "../../modeles/Message";
import {Personne} from "../../modeles/Personne";
import {MessagesServiceService} from "../../services/messages-service.service";
import {messagesAdaptateur} from "../../modeles/messagesAdaptateur";

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent implements OnInit {
  listMessage: Array<Message>;

  constructor(private messagesService : MessagesServiceService) {
    this.listMessage = messagesService.messages;
    // this.messagesService.appelAPI().subscribe(
    //   (donnees) => this.listMessage = messagesAdaptateur.messageAPI(donnees),
    //   () => console.log("Ca se passe mal")
    // );
  }

  ngOnInit(): void {
    this.messagesService.dataEmetteur.subscribe((messages) => this.listMessage == messages);
  }

  ngOnDestroy(): void {
    this.messagesService.dataEmetteur.unsubscribe();
  }

}
