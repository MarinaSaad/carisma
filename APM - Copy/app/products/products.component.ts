import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';

@Component({
    moduleId: module.id,
    selector: 'pm-products',
    templateUrl: './products.component.html',
    styleUrls:['./products.component.css']

})
export class ProductsComponent implements OnInit {
    selected = '';
    MylistFilter='';
    products: any[];
    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.getAllProducts().subscribe(x => this.products = x);
    }
}