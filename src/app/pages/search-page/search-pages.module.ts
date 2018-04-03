import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { SearchPagesRoutingModule } from './search-pages-routing.module';
import { SearchPageComponent } from './search-page.component';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        SearchPagesRoutingModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        SearchPageComponent
    ]
})
export class SearchPagesModule { }
