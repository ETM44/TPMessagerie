import { Component, OnInit } from '@angular/core';
import {Message} from "../../modeles/Message";
import {Personne} from "../../modeles/Personne";
import {MessagesServiceService} from "../../services/messages-service.service";

@Component({
  selector: 'app-nouveau-message',
  templateUrl: './nouveau-message.component.html',
  styleUrls: ['./nouveau-message.component.css']
})
export class NouveauMessageComponent implements OnInit {
  private _idMessage: number = 1;
  private _idPersonne: number = 1;

  constructor(private messagesService : MessagesServiceService) {}

  ngOnInit(): void {
  }

  nouveauMessage(nouveauMessageFormulaire: any) {
    this.messagesService.addMessage(new Message(this._idMessage++, new Personne(this._idPersonne++,nouveauMessageFormulaire.pseudo), new Date(), nouveauMessageFormulaire.message));

    let data: Object =
      {"auteur" : {"pseudo":nouveauMessageFormulaire.pseudo},
        "dateMessage" : new Date().toLocaleDateString(),
        "textMessage" : nouveauMessageFormulaire.message};
    this.messagesService.envoisAPI(data).subscribe();
  }
}
