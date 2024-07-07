import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedOpComponent } from './advanced-op.component';

describe('AdvancedOpComponent', () => {
  let component: AdvancedOpComponent;
  let fixture: ComponentFixture<AdvancedOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedOpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
