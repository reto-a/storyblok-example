import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-bbcontenedor',
    templateUrl: './bbcontenedor.component.html',
    styleUrls: ['./bbcontenedor.component.css']
})
export class BBContenedorComponent implements OnInit {

    @Input() texto_1: string;
    @Input() texto_2: string;
    @Input() texto_3: string;
    @Input() imagen: any;
    @Input() _editable: any;
    @Input() tarjetas: any;

    components: any;

    constructor() {
        import('src/app/components/components').then(cp => {
            this.components = cp.components;
        });
    }

    ngOnInit() {
        console.log('img: ', this.tarjetas);
    }
}
