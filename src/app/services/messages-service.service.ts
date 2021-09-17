import {EventEmitter, Injectable} from '@angular/core';
import {Message} from "../modeles/Message";
import {Personne} from "../modeles/Personne";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessagesServiceService {
  public dataEmetteur: EventEmitter<Array<Message>> = new EventEmitter();
  private _messages: Array<Message>;

  constructor(private http: HttpClient) {
    this._messages = new Array<Message>();
  }

  public appelAPI(): Observable<any> {
    return this.http.get("http://10.21.0.254:8080/");
  }

  public envoisAPI(data: any): Observable<any> {
    return this.http.post("http://10.21.0.254:8080/",data);
  }

  public notifier(): void {
    this.dataEmetteur.emit(this._messages);
  }

  get messages(): Array<Message> {
    return this._messages;
  }

  set messages(value: Array<Message>) {
    this._messages = value;
  }

  addMessage(message: Message) {
    this._messages.push(message);
    this.notifier();
  }
}
