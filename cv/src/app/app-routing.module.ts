import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArbetslivserfarenhetComponent } from './views/arbetslivserfarenhet/arbetslivserfarenhet.component';
import { KontaktComponent } from './views/kontakt/kontakt.component';
import { OmMigComponent } from './views/om-mig/om-mig.component';
import { UtbildningComponent } from './views/utbildning/utbildning.component';

const routes: Routes = [
  {path: '', component: OmMigComponent },
  {path: 'utbildning', component: UtbildningComponent },
  {path: 'arbetslivserfarenhet', component: ArbetslivserfarenhetComponent },
  {path: 'kontakt', component: KontaktComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
