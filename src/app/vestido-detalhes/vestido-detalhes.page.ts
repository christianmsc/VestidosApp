import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VestidoService } from '../services/vestido.service';
import { ModalController } from '@ionic/angular';
import { ImgFullModalPage } from '../img-full-modal/img-full-modal.page';

@Component({
  selector: 'app-vestido-detalhes',
  templateUrl: './vestido-detalhes.page.html',
  styleUrls: ['./vestido-detalhes.page.scss'],
})
export class VestidoDetalhesPage implements OnInit {

  public id: number;
  public vestido: any;

  constructor(private router: ActivatedRoute, private vestidoService: VestidoService, public modalController: ModalController) { }

  ngOnInit() {
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    this.vestidoService.getVestidos(this.id).subscribe((data: any) => {

      data = JSON.parse(data._body);

      if (data.sucesso) {
        this.vestido = data.vestido;
        console.log(this.vestido);
        
      }

    }, err => {
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
}
