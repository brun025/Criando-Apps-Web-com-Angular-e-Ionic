import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './guards/authorized.guard';
import { FramePage } from './pages/shared/frame/frame.page';

const routes: Routes = [
  { path: 'login', loadChildren: './pages/account/login/login.module#LoginPageModule' },
  {
    path: '',
    component: FramePage,
    canActivate: [AuthorizedGuard],
    children: [
      { path: '', loadChildren: './pages/home/home.module#HomePageModule' },
      { path: 'orders', loadChildren: './pages/store/orders/orders.module#OrdersPageModule' },
      { path: 'orders/:number', loadChildren: './pages/store/order-details/order-details.module#OrderDetailsPageModule' },
      { path: 'clients', loadChildren: './pages/client/clients/clients.module#ClientsPageModule' },
      { path: 'clients/:id', loadChildren: './pages/client/client-details/client-details.module#ClientDetailsPageModule' },
    ]
  },
  { path: 'client-details', loadChildren: './pages/client/client-details/client-details.module#ClientDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
