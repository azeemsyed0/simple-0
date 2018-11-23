import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedComponent,
    ReactiveFormsModule
  ],
  exports: [
    SharedComponent,
    ReactiveFormsModule 
  ]
})

export class SharedModule {}