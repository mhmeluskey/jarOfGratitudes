import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJarComponent } from './my-jar.component';

describe('MyJarComponent', () => {
  let component: MyJarComponent;
  let fixture: ComponentFixture<MyJarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyJarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyJarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
