import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConctactAdvisor2Component } from './conctact-advisor2.component';

describe('ConctactAdvisor2Component', () => {
  let component: ConctactAdvisor2Component;
  let fixture: ComponentFixture<ConctactAdvisor2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConctactAdvisor2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConctactAdvisor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
