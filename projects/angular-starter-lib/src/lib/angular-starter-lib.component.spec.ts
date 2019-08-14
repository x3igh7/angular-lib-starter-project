import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularStarterLibComponent } from './angular-starter-lib.component';

describe('AngularStarterLibComponent', () => {
  let component: AngularStarterLibComponent;
  let fixture: ComponentFixture<AngularStarterLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularStarterLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularStarterLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
