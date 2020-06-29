import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'app-bcabecera',
    templateUrl: './bcabecera.component.html',
    styleUrls: ['./bcabecera.component.css']
})
export class BCabeceraComponent implements OnInit {

    @Input() titulo_1: string;
    @Input() titulo_2: string;
    @Input() titulo_3: string;
    @Input() texto_boton: any;
    @Input() imagenSrc: string;
    @Input() _editable: any;

    constructor() { }

    ngOnInit() {
    }

}
