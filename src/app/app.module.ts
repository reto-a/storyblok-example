import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryblokDirective } from './directives/storyblok.directive';
import { SCuentaComponent } from './components/scuenta/scuenta.component';
import { BCabeceraComponent } from './components/bcabecera/bcabecera.component';
import { BBContenedorComponent } from './components/bbcontenedor/bbcontenedor.component';
import { BTarjetasComponent } from './components/btarjetas/btarjetas.component';
import { StoryblokService } from './services/storyblok.service';
import { DynamicModule } from 'ng-dynamic-component';

@NgModule({
    declarations: [
        AppComponent,
        StoryblokDirective,
        SCuentaComponent,
        BCabeceraComponent,
        BBContenedorComponent,
        BTarjetasComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DynamicModule.withComponents([
            SCuentaComponent,
            BCabeceraComponent,
            BBContenedorComponent,
            BTarjetasComponent
        ])
    ],
    providers: [StoryblokService],
    bootstrap: [AppComponent]
})
export class AppModule { }
