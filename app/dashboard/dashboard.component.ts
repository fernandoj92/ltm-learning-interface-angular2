import { Component, OnInit } from '@angular/core';

declare var Split: any;

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [
        './dashboard.component.css',
        './resources/css/normalize.css'
    ]
})

export class DashboardComponent implements OnInit {
    constructor() { }

    ngOnInit() {

        Split(['#a1', '#b1'], {
        gutterSize: 8,
        sizes: [75, 25],
        cursor: 'col-resize'
        });

        Split(['#c1', '#d1'], {
        direction: 'vertical',
        sizes: [75, 25],
        gutterSize: 8,
        cursor: 'row-resize'
        });

        Split(['#e1', '#f1'], {
        direction: 'vertical',
        sizes: [50, 50],
        gutterSize: 8,
        cursor: 'row-resize'
        });

    }
}
