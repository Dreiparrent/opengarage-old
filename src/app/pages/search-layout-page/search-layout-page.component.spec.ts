import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLayoutPageComponent } from './search-layout-page.component';

describe('SearchLayoutPageComponent', () => {
  let component: SearchLayoutPageComponent;
  let fixture: ComponentFixture<SearchLayoutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLayoutPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
