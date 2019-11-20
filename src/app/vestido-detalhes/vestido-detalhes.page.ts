import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VestidoService } from '../services/vestido.service';
import { ModalController, LoadingController } from '@ionic/angular';
import { ImgFullModalPage } from '../img-full-modal/img-full-modal.page';

@Component({
  selector: 'app-vestido-detalhes',
  templateUrl: './vestido-detalhes.page.html',
  styleUrls: ['./vestido-detalhes.page.scss'],
})
export class VestidoDetalhesPage implements OnInit {

  public id: number;
  public vestido: any;
  public loading: any;

  constructor(private router: ActivatedRoute, 
              private vestidoService: VestidoService, 
              public modalController: ModalController,
              public loadingController: LoadingController) { }

  ngOnInit() {
    this.showLoading();
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    this.vestidoService.getVestidos(this.id).subscribe((data: any) => {

      data = JSON.parse(data._body);

      if (data.sucesso) {
        this.vestido = data.vestido;
      }

      this.dismissLoading();

    }, err => {
      this.dismissLoading();
      alert(err);
    });
  }

  async ampliarFotos(fotos) {
    const modal = await this.modalController.create({
      component: ImgFullModalPage,
      componentProps: {
        'fotos': fotos
      }
    });
    return await modal.present();
  }

  async showLoading() {
    this.loading = await this.loadingController.create({
      message: 'ta saindo do armário o vestido =D',
      translucent: true,
      cssClass: 'loading'
    });
    return await this.loading.present();
  }

  async dismissLoading(){
    return await this.loading.dismiss();
  }

}
