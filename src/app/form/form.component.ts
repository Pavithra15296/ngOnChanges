import { Component } from '@angular/core';
import { Model } from '../model';

@Component({
    selector:'app-form',
    templateUrl:'./form.component.html'
})
export class FormComponent {

    selectedGender:string = 'male';
    selectedYear:string = '1994';
    years:string[] = ['1994','1995'];
    firstName: string;
    lastName: string;
    gender: string[] = ['male','female'];
    models = new Model('','');
}
