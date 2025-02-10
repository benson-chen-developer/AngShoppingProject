import { ChangeDetectorRef, Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-shopping',
  imports: [CommonModule],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent {
  items: Product[] =  [
    {
      "availableSizes": ["X", "L", "XL", "XXL"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "14/15 s/nº",
      "id": 0,
      "installments": 9,
      "isFreeShipping": true,
      "price": 10.9,
      "sku": 8552515751438644,
      "style": "White T-shirt",
      "title": "Cropped Stay Groovy off white"
    },
    {
      "availableSizes": ["X", "ML", "L"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "",
      "id": 11,
      "installments": 3,
      "isFreeShipping": true,
      "price": 13.25,
      "sku": 39876704341265610,
      "style": "Wine",
      "title": "Basic Cactus White T-shirt"
    },
    {
      "availableSizes": ["XL"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "14/15 s/nº - Jogador",
      "id": 4,
      "installments": 12,
      "isFreeShipping": false,
      "price": 25.9,
      "sku": 9197907543445676,
      "style": "Tony Hawk",
      "title": "Skater Black Sweatshirt"
    },
    {
      "availableSizes": ["M", "ML"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "",
      "id": 13,
      "installments": 5,
      "isFreeShipping": true,
      "price": 29.45,
      "sku": 51498472915966370,
      "style": "Tule",
      "title": "Black Tule Oversized"
    },
    {
      "availableSizes": ["S", "XS"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "4 MSL",
      "id": 12,
      "installments": 9,
      "isFreeShipping": true,
      "price": 10.9,
      "sku": 12064273040195392,
      "style": "Really Cool T-shirt",
      "title": "Black Batman T-shirt"
    },
    {
      "availableSizes": ["X", "L", "XL"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "GPX Poly 1",
      "id": 14,
      "installments": 3,
      "isFreeShipping": true,
      "price": 9,
      "sku": 10686354557628304,
      "style": "Mark Zuck have 365 of this one",
      "title": "Blue T-Shirt"
    },
    {
      "availableSizes": ["X", "L", "XL", "XXL"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "Treino 2014",
      "id": 15,
      "installments": 5,
      "isFreeShipping": true,
      "price": 14,
      "sku": 11033926921508488,
      "style": "",
      "title": "Loose Black T-shirt"
    },
    {
      "availableSizes": ["X", "L", "XL", "XXL"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "14/15 s/nº",
      "id": 1,
      "installments": 9,
      "isFreeShipping": true,
      "price": 10.9,
      "sku": 18644119330491310,
      "style": "White T-shirt",
      "title": "Ringer Hall Pass"
    },
    {
      "availableSizes": ["X", "L"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "14/15 s/nº",
      "id": 2,
      "installments": 7,
      "isFreeShipping": true,
      "price": 14.9,
      "sku": 11854078013954528,
      "style": "You will like this one",
      "title": "Grey T-shirt"
    },
    {
      "availableSizes": ["X", "L"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "2014 s/nº",
      "id": 3,
      "installments": 7,
      "isFreeShipping": true,
      "price": 14.9,
      "sku": 876661122392077,
      "style": "Adidas originals",
      "title": "Black T-shirt with white stripes"
    },
    {
      "availableSizes": ["X", "L", "XL"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "14/15 + Camiseta 1º Mundial",
      "id": 5,
      "installments": 9,
      "isFreeShipping": false,
      "price": 10.9,
      "sku": 10547961582846888,
      "style": "Cowabunga!",
      "title": "Turtles Ninja T-shirt"
    },
    {
      "availableSizes": ["XL", "XXL"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "T-shirt 13/14",
      "id": 6,
      "installments": 0,
      "isFreeShipping": true,
      "price": 49.9,
      "sku": 6090484789343891,
      "style": "When you wish well",
      "title": "Slim black T-shirt"
    },
    {
      "availableSizes": ["S"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "1977 Infantil",
      "id": 7,
      "installments": 4,
      "isFreeShipping": true,
      "price": 22.5,
      "sku": 18532669286405344,
      "style": "Very comfy",
      "title": "Blue Sweatshirt"
    },
    {
      "availableSizes": ["XL"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "",
      "id": 8,
      "installments": 4,
      "isFreeShipping": false,
      "price": 18.7,
      "sku": 5619496040738316,
      "style": "Girl the future is all your",
      "title": "White T-shirt Gucci"
    },
    {
      "availableSizes": ["L", "XL"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "",
      "id": 9,
      "installments": 5,
      "isFreeShipping": true,
      "price": 134.9,
      "sku": 11600983276356164,
      "style": "",
      "title": "Tropical Wine T-shirt"
    },
    {
      "availableSizes": ["L", "XL"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "",
      "id": 10,
      "installments": 9,
      "isFreeShipping": true,
      "price": 49,
      "sku": 27250082398145996,
      "style": "",
      "title": "Marine Blue T-shirt"
    }
  ]
  @Input() cart: Product[] = [];
  @Input() closeSidebar!: () => void;
  @Output() addItem = new EventEmitter<Product>();  
  @Output() delItem = new EventEmitter<Product>();  
  @Output() deleteAllItem = new EventEmitter<Product>();  

  onAddItem(product: Product) {
    this.addItem.emit(product);  
  }
  onDelItem(product: Product) {
    this.delItem.emit(product);  
  }
  onDeleteAllItem(product: Product) {
    this.deleteAllItem.emit(product);  
  }
  myCart: {product: Product, quantity: number, price: number}[] = []
  uniqueCart: any[] = []


  get productsFound(): number {
    return this.cart.length;
  }

  get totalPrice(): number {
    return this.cart.reduce(((acc, item) => item.price+acc), 0);
  }
  get totalInstallment(): string {
    if(this.cart.length > 0){
      let timesBy = this.cart[0].installments;
      let total = this.cart.reduce(((acc, item) => item.price+acc), 0);
      let divide = total / timesBy;
      return `OR UP TO ${timesBy} x ${divide.toFixed(2)}`;
    }

    return '';
  }

  clickCloseSidebar(){
    this.closeSidebar();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cart'] && changes['cart'].currentValue) {
      this.updateMyCart(changes['cart'].currentValue);
    }
  }

  updateMyCart(cart: Product[]): void {
    this.myCart = [];

    cart.forEach((newItem) => {
      const existingItem = this.myCart.find(item => item.product.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.price = existingItem.product.price * existingItem.quantity
      } else {
        this.myCart.push({ product: newItem, quantity: 1, price: newItem.price});
      }
    });

  }

  generatePDF() {
    const doc = new jsPDF();
    let y = 20;

    doc.setFontSize(12);
    doc.text('Customer Details', 10, y);
    y += 10;
    doc.text(`Name: Benson Chen`, 10, y);
    y += 7;
    doc.text(`Address: ABC Lane NJ-08825`, 10, y);
    y += 7;
    doc.text(`Email: aqa@gmail.com`, 10, y);
    y += 7;
    doc.text(`Phone: 111-111-1111`, 10, y);
    y += 7;
    doc.text(`Date: ${new Date().toLocaleString()}`, 10, y);
    y += 7;
    doc.text(`Bill No: 11`, 10, y);

    y += 15;
    doc.text('Order Details', 10, y);
    y += 10;

    doc.text('Product', 10, y);
    doc.text('Price', 70, y);
    doc.text('Quantity', 100, y);
    doc.text('Amount', 140, y);
    y += 5;

    let totalAmount = 0;
    this.myCart.forEach(item => {
      const amount = item.product.price * item.quantity;
      totalAmount += amount;

      doc.text(item.product.title, 10, y);
      doc.text(`$${item.product.price.toFixed(2)}`, 70, y);
      doc.text(`${item.quantity}`, 100, y);
      doc.text(`$${amount.toFixed(2)}`, 140, y);
      y += 7;
    });

    y += 10;
    doc.text(`Total Amount: $${totalAmount.toFixed(2)}`, 10, y);
    y += 20;
    doc.text('Signature', 10, y);

    window.open(doc.output('bloburl'), '_blank');
  }
  
}
