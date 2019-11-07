import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children:
            [
                {
                    path: 'inicio',
                    children:
                        [
                            {
                                path: '',
                                loadChildren: '../home/home.module#HomePageModule'
                            }
                        ]
                },
                {
                    path: 'vestidos',
                    children:
                        [
                            {
                                path: '',
                                loadChildren: '../list/list.module#ListPageModule'
                            }
                        ]
                },
                {
                    path: 'perfil',
                    children:
                        [
                            {
                                path: '',
                                loadChildren: '../perfil/perfil.module#PerfilPageModule'
                            }
                        ]
                },
                {
                    path: 'notificacoes',
                    children:
                        [
                            {
                                path: '',
                                loadChildren: '../notificacoes/notificacoes.module#NotificacoesPageModule'
                            }
                        ]
                },
                {
                    path: '',
                    redirectTo: '/tabs/inicio',
                    pathMatch: 'full'
                }
            ]
    },
    {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full'
    }
];

@NgModule({
    imports:
        [
            RouterModule.forChild(routes)
        ],
    exports:
        [
            RouterModule
        ]
})
export class TabsPageRoutingModule { }