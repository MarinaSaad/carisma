import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/services/product.service';

@Component({
    moduleId: module.id,
    selector: 'pm-product',
    template: '{{product.name}}'
})
export class ProductComponent{
    constructor(private actRoute: ActivatedRoute, private productService: ProductService) { }
    productId: number;
    product: any;
    ngOnChanges() {
        this.productId = this.actRoute.snapshot.params["id"];
        this.productService.getById(this.productId).subscribe(x => this.product = x);
    }
}
