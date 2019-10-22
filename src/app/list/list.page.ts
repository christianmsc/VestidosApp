import { Component, OnInit } from '@angular/core';
import { VestidoService } from '../services/vestido.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  
  public vestidos: any[];
  public carregando: boolean;
  
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private vestidoService: VestidoService) { 
    this.vestidos = [];
    this.carregando = false;
  }

  ngOnInit() {
    this.carregando = true;
    this.vestidoService.getVestidos().subscribe((data: any) => {
      data = JSON.parse(data._body);
      this.vestidos = data.vestidos;
      this.carregando = false;
    }, err => {
      this.carregando = false;
      alert(err);
    });
  }
}
