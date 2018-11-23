import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { homeRouting } from './home.routing';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    homeRouting,
    SharedModule
  ],
  exports: [
    HomeComponent
  ],
  entryComponents: [
    HomeComponent
  ]
})
export class HomeModule {}