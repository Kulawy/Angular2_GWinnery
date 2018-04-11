import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWineryComponent } from './about-winery.component';

describe('AboutWineryComponent', () => {
  let component: AboutWineryComponent;
  let fixture: ComponentFixture<AboutWineryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutWineryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutWineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
