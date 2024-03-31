import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellinComponent } from './sellin.component';

describe('SellinComponent', () => {
  let component: SellinComponent;
  let fixture: ComponentFixture<SellinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
