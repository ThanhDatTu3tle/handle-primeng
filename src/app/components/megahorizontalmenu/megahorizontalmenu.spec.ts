import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaHorizontalmenuComponent } from './megahorizontalmenu.component';

describe('PanelmenuComponent', () => {
  let component: MegaHorizontalmenuComponent;
  let fixture: ComponentFixture<MegaHorizontalmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MegaHorizontalmenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MegaHorizontalmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
