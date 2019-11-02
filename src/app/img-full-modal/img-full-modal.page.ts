import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-img-full-modal',
  templateUrl: './img-full-modal.page.html',
  styleUrls: ['./img-full-modal.page.scss'],
})
export class ImgFullModalPage implements OnInit {

  // Data passed in by componentProps
  @Input() fotos;

  constructor(
    public modalController: ModalController
    //navParams: NavParams
  ) {
    // componentProps can also be accessed at construction time using NavParams
    //console.log(navParams.get('fotos'));

  }

  ngOnInit() {
  }

  desfazModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
