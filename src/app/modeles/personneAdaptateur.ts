import {Personne} from "./Personne";

export class personneAdaptateur {
  static _idMessage: number = 1;
  static _idPersonne: number = 1;

  constructor() {
   }

   static messageAPI(listMessage: Array<any>): Array<Personne> {
    let listPersonne: Array<Personne> = new Array<Personne>();
    for (const message of listMessage) {
      listPersonne.push(new Personne(this._idPersonne++,message.auteur.pseudo));
     }
    return listPersonne;
   }
}
