import { Component, OnInit } from '@angular/core';
import {Personne} from "../../modeles/Personne";
import {Message} from "../../modeles/Message";
import {MessagesServiceService} from "../../services/messages-service.service";
import {messagesAdaptateur} from "../../modeles/messagesAdaptateur";
import {personneAdaptateur} from "../../modeles/personneAdaptateur";

@Component({
  selector: 'app-list-personnes',
  templateUrl: './list-personnes.component.html',
  styleUrls: ['./list-personnes.component.css']
})
export class ListPersonnesComponent implements OnInit {
  listPersonne: Array<Personne>;

  constructor(private messagesService : MessagesServiceService) {
    this.listPersonne = new Array<Personne>();
    // this.messagesService.appelAPI().subscribe(
    //   (donnees) => this.listPersonne = personneAdaptateur.messageAPI(donnees),
    //   () => console.log("Ca se passe mal")
    // );
  }

  ngOnInit(): void {
    this.messagesService.dataEmetteur.subscribe((messages) => {
      for (const message of messages) {
        let dejaPresent = false;
        for (const personne of this.listPersonne) {
          if(personne.id === message.personne.id) {
            dejaPresent = true;
          }
        }
        if(!dejaPresent) {
          this.listPersonne.push(message.personne);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.messagesService.dataEmetteur.unsubscribe();
  }

}
