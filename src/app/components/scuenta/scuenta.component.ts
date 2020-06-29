import { Component, OnInit } from '@angular/core';
import { components } from '../components';
import { StoryblokService } from 'src/app/services/storyblok.service';

@Component({
    selector: 'app-scuenta',
    templateUrl: './scuenta.component.html',
    styleUrls: ['./scuenta.component.css']
})
export class SCuentaComponent implements OnInit {

    body: any;
    _editable: any;
    // components = components;
    components: any;

    constructor(private storyblokService: StoryblokService) {
        import('src/app/components/components').then(cp => {
            this.components = cp.components;
            // console.log(cp);
            
        });
        // console.log(this.components);
        
        window.storyblok.init();
        window.storyblok.on(['change', 'published'], () => {
            location.reload();
        });
    }

    ngOnInit() {
        this.storyblokService.getStory('cuenta', { version: 'draft' })
            .then(data => {
                // console.log('DATA: ', data);
                this._editable = data._editable;
                this.body = data.body;
            });
    }

}
