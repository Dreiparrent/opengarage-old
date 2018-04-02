import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
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
