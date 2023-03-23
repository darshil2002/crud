import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndButtonComponent } from './search-and-button.component';

describe('SearchAndButtonComponent', () => {
  let component: SearchAndButtonComponent;
  let fixture: ComponentFixture<SearchAndButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAndButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAndButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
