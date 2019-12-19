import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './tabs/tabs.module#TabsPageModule'
  }
  ,
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListPageModule) },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'vestido-detalhes/:id', loadChildren: './vestido-detalhes/vestido-detalhes.module#VestidoDetalhesPageModule' },
  { path: 'img-full-modal', loadChildren: './img-full-modal/img-full-modal.module#ImgFullModalPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'aluguel', loadChildren: './aluguel/aluguel.module#AluguelPageModule' },
  { path: 'notificacoes', loadChildren: './notificacoes/notificacoes.module#NotificacoesPageModule' },
  { path: 'cadastro-usuario', loadChildren: './cadastro-usuario/cadastro-usuario.module#CadastroUsuarioPageModule' }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
