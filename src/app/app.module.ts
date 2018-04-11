import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { TitlePartComponent } from './title-part/title-part.component';
import { TypesOfWineComponent } from './types-of-wine/types-of-wine.component';
import { AboutWineComponent } from './about-wine/about-wine.component';
import { AboutWineryComponent } from './about-winery/about-winery.component';
import { OneTypeComponent } from './types-of-wine/oneType.component';
import { AboutLocationComponent } from './about-location/about-location.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyFooterComponent,
    TitlePartComponent,
    TypesOfWineComponent,
    AboutWineComponent,
    AboutWineryComponent,
    OneTypeComponent,
    AboutLocationComponent
  ],
 
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
