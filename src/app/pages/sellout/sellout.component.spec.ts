import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelloutComponent } from './sellout.component';

describe('SelloutComponent', () => {
  let component: SelloutComponent;
  let fixture: ComponentFixture<SelloutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelloutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelloutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
