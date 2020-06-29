import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SCuentaComponent } from './components/scuenta/scuenta.component';

const routes: Routes = [
    {
        path: 'cuenta',
        component: SCuentaComponent,
    },
    { path: '**', redirectTo: 'centa' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
