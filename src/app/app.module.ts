import { AppComponent } from './app.component';
import { NgforPipeModule } from './ngfor-pipe/ngfor-pipe.module';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
     ],
  imports: [
    CommonModule,
    NgforPipeModule
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
