import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockRemoveComponent } from './stock-remove.component';

describe('StockRemoveComponent', () => {
  let component: StockRemoveComponent;
  let fixture: ComponentFixture<StockRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockRemoveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
