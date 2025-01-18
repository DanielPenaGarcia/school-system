import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSettingsFormComponent } from './school-settings-form.component';

describe('SchoolSettingsFormComponent', () => {
  let component: SchoolSettingsFormComponent;
  let fixture: ComponentFixture<SchoolSettingsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolSettingsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolSettingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
