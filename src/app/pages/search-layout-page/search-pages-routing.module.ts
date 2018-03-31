import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchLayoutPageComponent } from './search-layout-page.component';


const routes: Routes = [
  {
    path: '',
    component: SearchLayoutPageComponent,
    data: {
      title: 'Search'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentPagesRoutingModule { }
