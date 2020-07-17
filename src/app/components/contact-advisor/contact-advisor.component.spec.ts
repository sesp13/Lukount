import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAdvisorComponent } from './contact-advisor.component';

describe('ContactAdvisorComponent', () => {
  let component: ContactAdvisorComponent;
  let fixture: ComponentFixture<ContactAdvisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactAdvisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
