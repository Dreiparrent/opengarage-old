import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor() { }

    ngOnInit() {
        $.getScript('/assets/js/scroll.js');
    }

    onExplore() {
        let offsetTop = $('#explore').offset().top - 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 500);
    }

}
