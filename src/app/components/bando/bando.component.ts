import { Component, OnInit } from '@angular/core';
import {BlagueService} from "../../services/blague.service";

@Component({
  selector: 'app-bando',
  templateUrl: './bando.component.html',
  styleUrls: ['./bando.component.css']
})
export class BandoComponent implements OnInit {
  blague: Array<any>;

  constructor(private blagueService: BlagueService) {
    this.blague = Array<any>();
    this.blagueService.appelAPI().subscribe(
      (donnees) => this.blague = donnees.value,
      () => console.log("Ca se passe mal")
    );
  }

  ngOnInit(): void {
  }

}
