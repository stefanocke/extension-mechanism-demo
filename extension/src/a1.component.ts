import { Component } from '@angular/core';

@Component({
    selector: 'comp-a1',
    template: `
        I am widget Component A1   
        <button mat-raised-button color="primary">Material Button</button> 
        <button pButton type="button" label="PrimeNg Button" ></button>
        <div *ngIf="true">ngIf test </div>
    `
})
export class ComponentA1 {

}