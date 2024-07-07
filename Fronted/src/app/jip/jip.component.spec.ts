import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JipComponent } from './jip.component';

describe('JipComponent', () => {
  let component: JipComponent;
  let fixture: ComponentFixture<JipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
