import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIPOComponent } from './edit-ipo.component';

describe('EditIPOComponent', () => {
  let component: EditIPOComponent;
  let fixture: ComponentFixture<EditIPOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditIPOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIPOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
