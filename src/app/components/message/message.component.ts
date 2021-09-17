import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../modeles/Message";
import {Personne} from "../../modeles/Personne";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input()
  msg : Message;

  constructor() {
    this.msg = new Message(0, new Personne(0,''),new Date(),'');
  }

  ngOnInit(): void {
  }

}
