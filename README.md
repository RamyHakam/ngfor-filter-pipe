# NgforPipe

This Module is a simple Custom pipe which can be used to filter ngFor input array with certin property on the elemnts


## Install 

Run `npm install ngfor-pipe`

## Usage
import  NgforPipeModule in your Project 
```typescript
 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 import{NgforPipeModule} from 'ngfor-pipe';
 import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgforPipeModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
```

Then Use the filter in ngFor in your component
With the property and the vaule as args to ngforFilter. 
```html
<li *ngFor="let trip of trips | ngforFilter: 'airport' : value ">
      <span>{{trip.From}}</span>
      <span>{{trip.to}}</span>
      <span>{{trip.airport}}</span>

</li>
   ```
 You can now use binding to filter ngFor with any value for this property.  
