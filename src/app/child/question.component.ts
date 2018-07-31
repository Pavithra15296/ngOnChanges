import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Model } from '../model';

@Component({
    selector:'app-ques',
    templateUrl:'./question.component.html'
})
export class QuestionComponent implements OnChanges{

    @Input() model: Model;
    @Input() year: string;
    @Input() gender: string;

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
        for (let modelName in changes) {
            console.log(modelName);
            let change = changes[modelName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            if (current !== previous) {
                console.log(`${modelName} is changed`);
            }
        }

    }    
}
