import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';


@Component({
    moduleId: module.id,
    selector: 'plot-test',
    templateUrl: 'plot-test.component.html'
})
export class PlotTestComponent implements OnInit {
    constructor() { }

    ngOnInit() { 
        let numbers: number[] = [1,2,3,4];
        let data = [
            { date: '2014-01-01', amount: 10 },
            { date: '2014-02-01', amount: 20 },
            { date: '2014-03-01', amount: 40 },
            { date: '2014-04-01', amount: 80 }
        ];

        console.log(d3.max(numbers));
        console.log(d3.min(data.map(x =>x.date)));
        
    }
}