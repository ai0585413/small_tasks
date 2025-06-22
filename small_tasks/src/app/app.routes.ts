import { Routes } from '@angular/router';
import { BindingsComponent } from './bindings/bindings.component';
import { DirectivesComponent } from './directives/directives.component';
import { LogoComponent } from './logo/logo.component';
import { PipesComponent } from './pipes/pipes.component';
import { DecoratorsComponent } from './decorators/decorators.component';

export const routes: Routes = [
    {path: '',  redirectTo: 'logo', pathMatch: 'full'},
    {path: 'logo',component: LogoComponent},
    {path: 'bindings',component: BindingsComponent},
    {path:'directives', component: DirectivesComponent},
    {path:'pipes', component: PipesComponent},
    {path:'decorators', component: DecoratorsComponent},



];
