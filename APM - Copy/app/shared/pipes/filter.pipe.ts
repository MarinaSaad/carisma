import { Pipe , PipeTransform } from '@angular/core';

@Pipe({
    name:'filter'
})
export class FilterPipe implements PipeTransform{
  transform(arr:any[],listfilter :string){
    if(!arr || !listfilter ){
      return arr;
     }
   return arr.filter(p=>p.productName.indexOf(listfilter )>-1);
   }
}



  //<input [(ngModel)]="listFilter" placeholder="search text goes here">
  //<ul>
   // <li *ngFor="let c of characters | filter : listFilter">
   //   {{c}}
   // </li>
 // </ul>