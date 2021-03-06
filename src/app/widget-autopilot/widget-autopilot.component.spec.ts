import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetAutopilotComponent } from './widget-autopilot.component';

describe('WidgetAutopilotComponent', () => {
  let component: WidgetAutopilotComponent;
  let fixture: ComponentFixture<WidgetAutopilotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetAutopilotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetAutopilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
