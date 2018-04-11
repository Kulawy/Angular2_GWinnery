import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWineComponent } from './about-wine.component';

describe('AboutWineComponent', () => {
  let component: AboutWineComponent;
  let fixture: ComponentFixture<AboutWineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutWineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
