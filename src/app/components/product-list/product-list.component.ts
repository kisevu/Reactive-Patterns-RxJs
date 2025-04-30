import { Component } from '@angular/core';
import { Product } from '../product/product.model';
import { ProductComponent } from "../product/product.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Array<Product>;
  returnedValue: boolean = true;


  constructor(){
    this.products = [
      new Product('Cookery 1','lorem','/assets/images/cookery4.png'),
      new Product('Cookery 4','a phone gadget','/assets/images/cookery4.png'),
      new Product('Dance 1','a phone gadget','/assets/images/cookery4.png'),
      new Product('notifications','a phone gadget','/assets/images/cookery4.png'),
      new Product('Iphone 6','a phone gadget','/assets/images/cookery4.png'),
    ];


  }

    myFunc(): boolean {
     return this.returnedValue;
    }

    clickHighlight(value:string) : void {
      console.log(`After clicking card: ${value}`);
    }
}
