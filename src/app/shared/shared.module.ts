import { NgModule } from '@angular/core';
 import { CommonModule } from "@angular/common";
 import { RouterModule } from "@angular/router";

 import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ProfileCardComponent } from './cards/profile-card/profile-card.component';
import { ToggleFullscreenDirective } from "./directives/toggle-fullscreen.directive";

@NgModule({
    exports: [
        CommonModule,
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        ProfileCardComponent,
        ToggleFullscreenDirective,
        NgbModule
    ],
    imports:[
        RouterModule,
        CommonModule,
        NgbModule
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        ProfileCardComponent,
        ToggleFullscreenDirective
        ]
})
export class SharedModule { }
