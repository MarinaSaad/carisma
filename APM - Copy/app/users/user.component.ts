import { Component } from '@angular/core'
import { IUser } from '../infrastructure/user';
import { Http } from '@angular/http';
import { UserService } from '../shared/services/user.service';

@Component({
    moduleId: module.id,
    providers: [Http],
    selector: 'pm-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent {
    selected = '';
    myFilterKey = '';
    isActive = true;
    myClasses = "btn btn-success";
    myClasses2 = "btn-lg";
    cond = false;
    myColor = 'yellow';
    imgUrl = "../app/assets/images/logo.jpg";
    imgWidth = "200px";
    mysub: any;
    user = {
        name: "hamada",
        age: 27,
        address: {
            city: 'cairo',
            country: 'Egypt '
        }
    }

    users: IUser[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.mysub = this.userService.getUsers().subscribe(x => this.users = x, e => alert(e), () => console.log("complete"));
        //  console.log(this.users);
        this.userService.getUserById(1);
    }

    onClick(e: any) {
        console.log(e);
        this.mysub.unsubscribe();
    }

    onKeyUp(e: any) {
        console.log(e.key);
    }
    onMessage(e: any) {
        alert(e);
    }

}