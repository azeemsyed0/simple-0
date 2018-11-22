import { NgModule } from '@angular/core';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    appRouting,
    BrowserModule,
    MatCheckboxModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
