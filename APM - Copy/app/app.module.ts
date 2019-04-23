// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserService } from './shared/services/user.service';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './routing/app-routing.module';
// components
import { AppComponent } from './app.component';
import { UsersComponent } from './users/user.component'
import { ProductsComponent } from './products/products.component'
import { SelectedUserComponent } from './users/selected-user.component'
import { ProductComponent } from './products/product.component'

// directives and pipes
import { ProductService } from './shared/services/product.service';
import { AutoGrowDirective } from './shared/directives/auto-grow.directive';
import { FilterPipe } from './shared/pipes/filter.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  declarations: [
    AppComponent,
    SelectedUserComponent,
    UsersComponent,
    AutoGrowDirective,
    FilterPipe,
    ProductsComponent,
    ProductComponent
  ],
  providers: [UserService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
