import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { ProductComponent } from '../products/product.component';
//import { UsersComponent } from '../users/user.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'products' },
    { path: 'products', component: ProductsComponent },
    //{ path: 'product/:id', component: ProductComponent },
   // { path: 'users', component: UsersComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

