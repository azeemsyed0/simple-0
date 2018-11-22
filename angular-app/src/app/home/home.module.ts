import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { homeRouting } from './home.routing';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    homeRouting
  ],
  exports: [
    HomeComponent
  ],
  entryComponents: [
    HomeComponent
  ]
})
export class HomeModule {}