import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InboxComponent } from './inbox.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'inbox', component: InboxComponent }
    ])
  ],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
