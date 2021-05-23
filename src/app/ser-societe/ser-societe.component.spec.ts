import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerSocieteComponent } from './ser-societe.component';

describe('SerSocieteComponent', () => {
  let component: SerSocieteComponent;
  let fixture: ComponentFixture<SerSocieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerSocieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
