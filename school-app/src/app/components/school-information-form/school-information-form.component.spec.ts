import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolInformationFormComponent } from './school-information-form.component';

describe('SchoolInformationFormComponent', () => {
  let component: SchoolInformationFormComponent;
  let fixture: ComponentFixture<SchoolInformationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolInformationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
