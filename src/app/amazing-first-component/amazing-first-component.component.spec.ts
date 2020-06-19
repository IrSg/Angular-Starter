import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazingFirstComponentComponent } from './amazing-first-component.component';

describe('AmazingFirstComponentComponent', () => {
  let component: AmazingFirstComponentComponent;
  let fixture: ComponentFixture<AmazingFirstComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmazingFirstComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazingFirstComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
