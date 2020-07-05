import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ProjectInfoCardComponent } from './project-info-card/project-info-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent, ProjectInfoCardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
