import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSecondComponentComponent } from './our-second-component.component';

describe('OurSecondComponentComponent', () => {
  let component: OurSecondComponentComponent;
  let fixture: ComponentFixture<OurSecondComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurSecondComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurSecondComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
