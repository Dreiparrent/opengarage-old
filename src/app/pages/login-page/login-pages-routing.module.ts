import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';


const routes: Routes = [
    {
        path: '',
        component: LoginPageComponent,
        data: {
            title: 'Login'
        },
    },
    {
        path: 'register',
        component: RegisterPageComponent,
        data: {
            title: 'Register'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LoginPagesRoutingModule { }
