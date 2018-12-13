import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AffichageParentComponent } from './studentProject/affichage-parent/affichage-parent.component';
import { AffichageChildComponent } from './studentProject/affichage-child/affichage-child.component';

import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { CrudStudentComponent } from './studentProject/crud-student/crud-student.component';

@NgModule({
  declarations: [
    AppComponent,
    AffichageParentComponent,
    AffichageChildComponent,
    CrudStudentComponent
  ],
  imports: [
    BrowserModule , FormsModule , HttpModule , routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
