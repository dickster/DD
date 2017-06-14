import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'forms', component: FormsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
