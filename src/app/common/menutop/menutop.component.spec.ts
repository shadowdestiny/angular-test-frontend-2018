import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu.TopComponent } from './menu.top.component';

describe('Menu.TopComponent', () => {
  let component: Menu.TopComponent;
  let fixture: ComponentFixture<Menu.TopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu.TopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu.TopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
