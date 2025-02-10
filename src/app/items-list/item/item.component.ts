import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Output() onAddCart = new EventEmitter<Product>();
  @Output() onOpenSidebar = new EventEmitter<Product>();
  @Input() pickedSizes: string[] = [];
  @Input() item: Product = {
    "availableSizes": [] ,
        "currencyFormat": '',
        "currencyId": '',
        "description": '',
        "id": -1,
        "installments": -1,
        "isFreeShipping": false,
        "price": -1,
        "sku": -1,
        "style": '',
        "title": ''
  };
  hovered = false;

  get installmentPrice() {
    return (this.item.price / this.item.installments).toFixed(1); 
  }

  addCart(item: Product) {
    this.onAddCart.emit(item);
    this.onOpenSidebar.emit();
  }
  openSidebar(){
    this.onOpenSidebar.emit();
  }
}
