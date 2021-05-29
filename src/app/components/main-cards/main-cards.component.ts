import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-main-cards',
  templateUrl: './main-cards.component.html',
  styleUrls: ['./main-cards.component.scss'],
})
export class MainCardsComponent implements OnInit {
  names: any = [];

  constructor(private name: CryptoService) {}

  ngOnInit(): void {
    this.name.getName().subscribe(data => {
      console.log(...data);
      this.names = data;
    });
  }
}
