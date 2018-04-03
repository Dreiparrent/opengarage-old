import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styles: [`
    ngb-accordion .card {
        border-bottom: none !important;
        background-color: #e91e63 !important;
    }
    .card-header {
        margin-bottom: 0;
        padding: 0;
    }
    .card-header.active {
        display: none;
    }
    ngb-accordion .card-body {
        background-color: #e91e63 !important;
    }`],
    encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent implements OnInit {

    constructor(private router: Router,
        private route: ActivatedRoute, private location: Location) { }

    ngOnInit() {
    }

    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }

    onCancel() {
        this.location.back();
    }
}
