import {Personne} from "./Personne";

export class Message {
  private _id: number;
  private _personne: Personne;
  private _date: Date;
  private _message: String;

  constructor(id: number, personne: Personne, date: Date, message: String) {
    this._id = id;
    this._personne = personne;
    this._date = date;
    this._message = message;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get personne(): Personne {
    return this._personne;
  }

  set personne(value: Personne) {
    this._personne = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get message(): String {
    return this._message;
  }

  set message(value: String) {
    this._message = value;
  }
}
