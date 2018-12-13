import { Component, OnInit, ModuleWithProviders } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AffichageParentComponent } from './studentProject/affichage-parent/affichage-parent.component';
import { CrudStudentComponent } from './studentProject/crud-student/crud-student.component';



const appRoutes: Routes = [
    {
        path : '' ,
        component : AffichageParentComponent
        // component : UserFormsComponent
    }
    ,
    {
        path : 'student' ,
        component : AffichageParentComponent
    }
    ,
    {
        path : 'autre' ,
        component : CrudStudentComponent
    }
    ,
    {
        path : '' ,
        redirectTo : '/' ,
        pathMatch : 'full'
    }
    ,
    {
        path : '**' ,
        component : AppComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
