import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPagesRoutingModule } from "./login-pages-routing.module";
import { LoginPageComponent } from './login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';



@NgModule({
    imports: [
        CommonModule,
        LoginPagesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule
    ],
    declarations: [
        LoginPageComponent,
        RegisterPageComponent
    ]
})
export class LoginPagesModule { }
