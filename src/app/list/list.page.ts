import { Component, OnInit, ViewChild } from '@angular/core';
import { VestidoService } from '../services/vestido.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  public vestidos: any[];
  public carregando: boolean;
  public refresher;
  public isRefreshing: boolean = false;
  public offset: number = 0;
  public results: number = 10;
  public infiniteScroll;
  public acabaramVestidos: boolean = false;

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
    this.carregarVestidos();
  }

  doRefresh(event) {
    this.offset = 0;
    this.refresher = event;
    this.isRefreshing = true;
    this.carregarVestidos();
  }

  loadData(event) {
    this.offset = this.offset + this.results;
    this.infiniteScroll = event;
    this.carregarVestidos(true);
  }

  carregarVestidos(newPage: boolean = false) {
    this.vestidoService.getVestidosPaginacao(this.offset, this.results).subscribe((data: any) => {

      data = JSON.parse(data._body);

      if (newPage) {
        if (data.sucesso) {
          this.vestidos = this.vestidos.concat(data.vestidos);
        }
        else {
          this.infiniteScroll.disabled = true;
          this.acabaramVestidos = true;
        }
        this.infiniteScroll.target.complete();
      }
      else {
        this.vestidos = data.vestidos;
      }

      this.carregando = false;
      if (this.isRefreshing) {
        this.refresher.target.complete();
        this.isRefreshing = false;
      }
    }, err => {
      this.carregando = false;
      if (this.isRefreshing) {
        this.refresher.target.complete();
        this.isRefreshing = false;
      }
      alert(err);
    });
  }

}
