import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ImgFullModalPage } from './img-full-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ImgFullModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ImgFullModalPage],
  entryComponents: [ImgFullModalPage],
  exports: [ImgFullModalPage]
})
export class ImgFullModalPageModule {}
