import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

//import { SearchPagesRoutingModule } from "./search-pages-routing.module";
import { SearchPagesRoutingModule } from './search-pages-routing.module';
import { SearchLayoutPageComponent } from './search-layout-page.component';



@NgModule({
    imports: [
        CommonModule,
        SearchPagesRoutingModule,
        FormsModule
    ],
    declarations: [
        SearchLayoutPageComponent
    ]
})
export class SearchPagesModule { }
