import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesOfWineComponent } from './types-of-wine.component';

describe('TypesOfWineComponent', () => {
  let component: TypesOfWineComponent;
  let fixture: ComponentFixture<TypesOfWineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesOfWineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesOfWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
