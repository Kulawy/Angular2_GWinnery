import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePartComponent } from './title-part.component';

describe('TitlePartComponent', () => {
  let component: TitlePartComponent;
  let fixture: ComponentFixture<TitlePartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlePartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
