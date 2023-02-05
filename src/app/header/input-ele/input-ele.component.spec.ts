import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEleComponent } from './input-ele.component';

describe('InputEleComponent', () => {
  let component: InputEleComponent;
  let fixture: ComponentFixture<InputEleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputEleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputEleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
