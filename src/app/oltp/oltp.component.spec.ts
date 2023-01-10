import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OltpComponent } from './oltp.component';

describe('OltpComponent', () => {
  let component: OltpComponent;
  let fixture: ComponentFixture<OltpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OltpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OltpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
