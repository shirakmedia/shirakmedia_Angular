import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewProductComponent } from './add-new-product.component';

describe('AddNewProductComponent', () => {
  let component: AddNewProductComponent;
  let fixture: ComponentFixture<AddNewProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewProductComponent]
    });
    fixture = TestBed.createComponent(AddNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
