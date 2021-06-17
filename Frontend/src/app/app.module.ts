import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCartItemComponent } from './components/add-cart-item/add-cart-item.component';
import { ListCartItemsComponent } from './components/list-cart-items/list-cart-items.component';
import { ShoppingCartService } from './services/shopping-cart/shopping-cart.service';
import { InventoryService } from './services/inventory/inventory.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

//toast 
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    AddCartItemComponent,
    ListCartItemsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [ShoppingCartService, InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
