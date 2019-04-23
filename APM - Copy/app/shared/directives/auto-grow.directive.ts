import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector:'[autoGrow]',
    host:{
        '(click)':'onClick()',
        '(mouseover)':'onMouseOver()'
    }
})
export class AutoGrowDirective{

    constructor(private elem:ElementRef,private renderer:Renderer){

    }
    onClick(){
        this.renderer.setElementStyle(this.elem.nativeElement, 'color','green');
    }
    onMouseOver(){
        this.renderer.setElementStyle(this.elem.nativeElement, 'color','gray');

    }
}


