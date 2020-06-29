import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-btarjetas',
    templateUrl: './btarjetas.component.html',
    styleUrls: ['./btarjetas.component.css']
})
export class BTarjetasComponent implements OnInit {


    @Input() texto_1: string;
    @Input() texto_2: string;
    @Input() texto_3: string;
    @Input() imagen: any;
    @Input() _editable: any;

    constructor() { }

    ngOnInit() {
    }

}
