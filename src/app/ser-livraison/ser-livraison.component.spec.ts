import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerLivraisonComponent } from './ser-livraison.component';

describe('SerLivraisonComponent', () => {
  let component: SerLivraisonComponent;
  let fixture: ComponentFixture<SerLivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerLivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
