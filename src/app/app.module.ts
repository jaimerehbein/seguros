import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { MoreComponent } from './components/more/more.component';
import { GridcardsComponent } from './components/gridcards/gridcards.component';
import { ParalaxComponent } from './components/paralax/paralax.component';
import { FormComponent } from './components/form/form.component';
import { SeparatorComponent } from './components/separator/separator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarrouselComponent,
    MoreComponent,
    GridcardsComponent,
    ParalaxComponent,
    FormComponent,
    SeparatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
