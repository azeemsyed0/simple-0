import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponent } from './shared.component';


@NgModule({
  imports: [
    SharedComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SharedComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class SharedModule {}