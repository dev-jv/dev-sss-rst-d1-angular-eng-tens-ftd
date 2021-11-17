import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVerbComponent } from './form-verb.component';

describe('FormVerbComponent', () => {
  let component: FormVerbComponent;
  let fixture: ComponentFixture<FormVerbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVerbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVerbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
