import { Component, Input, Output, EventEmitter , OnInit } from '@angular/core';


@Component({
    selector:'pm-selected',
    template:`<h2 *ngIf="selectedUser">You Selected: {{selectedUser}}</h2>
                <button class="btn btn-success" (click)="onClick()">Favorite</button>

    `
})
export class SelectedUserComponent implements OnInit{
    @Input() selectedUser:string;
    @Output() msg= new EventEmitter<string>();

    onClick(){
        this.msg.emit("Child Speaking");
    }
    ngOnChanges(){
        console.log("On Changes");
        
    }
    ngOnDestroy(){
        console.log("On Destroy");
        
    }
    ngOnInit(){
        console.log("On Init");
    }
}
