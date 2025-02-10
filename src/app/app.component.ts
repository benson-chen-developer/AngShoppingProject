import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  imports: [SideBarComponent, ItemsListComponent, ShoppingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopping-cart-app';

  sizes: string[] = [
    "XS", "S", "M", "ML", "L", "XL", "XXL"
  ]
  pickedSizes: string[] = []
  cart: Product[] = [];

  sizeClick(size:string){
    for(let i=0; i<this.pickedSizes.length; i++){
      const s = this.pickedSizes[i];

      if(s == size){
         this.pickedSizes.splice(i, 1);
         return;
      }
    }

    this.pickedSizes.push(size)
  }

  addCart(i: Product){
    this.cart = [...this.cart, i];
    this.openSidebar();
  }

  addItem(i: Product){
    this.cart = [...this.cart, i];
  }
  delItem(i: Product){
    const index = this.cart.findIndex(item => item.id === i.id);

    if (index !== -1) {
      this.cart = this.cart.filter((_, idx) => idx !== index);
    }
  }
  deleteAllItem(i: Product){
    this.cart = [...this.cart.filter(item => item.id !== i.id)];
  }

  openSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    if (sidebar && overlay) {
      sidebar.classList.add('show');
      overlay.classList.add('show');
    }
  }

  closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    if (sidebar && overlay) {
      sidebar.classList.remove('show');
      overlay.classList.remove('show');
    }
  }

  get productsFound(): number {
    return this.cart.length;
  }

}
