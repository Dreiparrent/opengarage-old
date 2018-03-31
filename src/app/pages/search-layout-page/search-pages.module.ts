import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { ContentPagesRoutingModule } from "./search-pages-routing.module";
import { SearchLayoutPageComponent } from './search-layout-page.component';



@NgModule({
    imports: [
        CommonModule,
        ContentPagesRoutingModule,
        FormsModule
    ],
    declarations: [
        SearchLayoutPageComponent
    ]
})
export class ContentPagesModule { }
