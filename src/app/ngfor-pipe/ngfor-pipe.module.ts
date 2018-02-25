import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgforFilterPipe } from './ngfor-filter.pipe';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ NgforFilterPipe],
  exports:[NgforFilterPipe]
})
export class NgforPipeModule { }
