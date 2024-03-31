import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosmComponent } from './posm.component';

describe('PosmComponent', () => {
  let component: PosmComponent;
  let fixture: ComponentFixture<PosmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PosmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
