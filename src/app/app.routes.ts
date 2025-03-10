import { Routes } from '@angular/router';
import { LayoutClientComponent } from './components/layout-client/layout-client.component';

import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';

import { ProductAddComponent } from './pages/admin/product/product-add/product-add.component';

import { ProductEditComponent } from './pages/admin/product/product-edit/product-edit.component';
import { LoginComponent } from './pages/client/auth/login/login.component';
import { RegisterComponent } from './pages/client/auth/register/register.component';
import { ListProductsComponent } from './pages/admin/product/list-products/list-products.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { HomePageComponent } from './pages/client/home-page/home-page.component';
import { DetailComponent } from './pages/client/detail/detail.component';
import { SearchComponent } from './pages/client/search/search.component';
import { CartComponent } from './pages/client/cart/cart.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { DacsanComponent } from './pages/client/dacsan/dacsan.component';
import { AboutComponent } from './pages/client/about/about.component';
import { DetailDacsanComponent } from './pages/client/detail-dacsan/detail-dacsan.component';
import { ProductDistrictComponent } from './pages/client/product-district/product-district.component';
import { PaymentComponent } from './pages/client/payment/payment.component';


export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: LayoutClientComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'district/:id',
        component: ProductDistrictComponent,
      },


      {
        path: 'dacsan',
        component: DacsanComponent,
      },

      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
      },
      {
        path: 'dacsan/:id',
        component: DetailDacsanComponent,
      },

      {
        path: 'search',
        component: SearchComponent,
      },

      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'payment',
        component: PaymentComponent,
      },
      
    ],
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'list_products',
        component: ListProductsComponent,
      },
      {
        path: 'add_product',
        component: ProductAddComponent,
      },

      {
        path: 'edit_product/:id',
        component: ProductEditComponent,
      },
      {
        path: 'edit_product/:id',
        component: ProductEditComponent,
      },
      {
        path: 'edit_product/:id',
        component: ProductEditComponent,
      },

    ],
  },
];
