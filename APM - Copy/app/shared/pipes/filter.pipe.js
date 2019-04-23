"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (arr, listfilter) {
        if (!arr || !listfilter) {
            return arr;
        }
        return arr.filter(function (p) { return p.productName.indexOf(listfilter) > -1; });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    core_1.Pipe({
        name: 'filter'
    })
], FilterPipe);
exports.FilterPipe = FilterPipe;
//<input [(ngModel)]="listFilter" placeholder="search text goes here">
//<ul>
// <li *ngFor="let c of characters | filter : listFilter">
//   {{c}}
// </li>
// </ul> 
//# sourceMappingURL=filter.pipe.js.map