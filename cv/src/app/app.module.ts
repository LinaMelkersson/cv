import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OmMigComponent } from './views/om-mig/om-mig.component';
import { UtbildningComponent } from './views/utbildning/utbildning.component';
import { ArbetslivserfarenhetComponent } from './views/arbetslivserfarenhet/arbetslivserfarenhet.component';
import { KontaktComponent } from './views/kontakt/kontakt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OmMigComponent,
    UtbildningComponent,
    ArbetslivserfarenhetComponent,
    KontaktComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
