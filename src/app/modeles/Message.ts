import {Personne} from "./Personne";

export class Message {
  private _personne: Personne;
  private _date: number;
  private _message: String;

  constructor(personne: Personne, date: number, message: String) {
    this._personne = personne;
    this._date = date;
    this._message = message;
  }

  get personne(): Personne {
    return this._personne;
  }

  set personne(value: Personne) {
    this._personne = value;
  }

  get date(): number {
    return this._date;
  }

  set date(value: number) {
    this._date = value;
  }

  get message(): String {
    return this._message;
  }

  set message(value: String) {
    this._message = value;
  }
}
