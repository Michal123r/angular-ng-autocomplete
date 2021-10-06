import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteModuleComponent } from './autocomplete-module.component';

describe('AutocompleteModuleComponent', () => {
  let component: AutocompleteModuleComponent;
  let fixture: ComponentFixture<AutocompleteModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
