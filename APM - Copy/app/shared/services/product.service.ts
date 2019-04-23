import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ProductService {

    constructor(private http: Http) { }

    getAllProducts() {
        return this.http.get("../../../api/products/products.json").map(x => x.json());
    }
    getById(id: number) {
        return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`).map(x => x.json())
    }

}