import { Injectable } from '@angular/core';
import { IUser } from '../../infrastructure/user';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {

    users: IUser[];
    constructor(private http: Http) { }
    getUsers() {
        return this.http.get("../../../api/products/users.json").map(x => x.json());
    }
    getUserById(userId:number){
        this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    }
}