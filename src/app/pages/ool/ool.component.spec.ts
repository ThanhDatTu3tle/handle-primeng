import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OolComponent } from './ool.component';

describe('OolComponent', () => {
  let component: OolComponent;
  let fixture: ComponentFixture<OolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
