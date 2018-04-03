import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';

declare var jQuery: any;

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  styles: [`
    label {
        color: white !important;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class RegisterPageComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $.getScript('/assets/js/jquery.steps.min.js');
        $.getScript('/assets/js/wizard-steps.js');
  }
}
