import {Message} from "./Message";
import {Personne} from "./Personne";

export class messagesAdaptateur {
  static _idMessage: number = 1;
  static _idPersonne: number = 1;

  constructor() {
   }

   static messageAPI(listMessage: Array<any>): Array<Message> {
    let newListMessage: Array<Message> = new Array<Message>();
    for (const message of listMessage) {
      newListMessage.push(new Message(this._idMessage++, new Personne(this._idPersonne++,message.auteur.pseudo), new Date(), message.textMessage))
     }
    return newListMessage;
   }
}
