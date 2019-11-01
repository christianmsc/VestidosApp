import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VestidoDetalhesPage } from './vestido-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: VestidoDetalhesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VestidoDetalhesPage]
})
export class VestidoDetalhesPageModule {}
