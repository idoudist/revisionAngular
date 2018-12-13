import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageChildComponent } from './affichage-child.component';

describe('AffichageChildComponent', () => {
  let component: AffichageChildComponent;
  let fixture: ComponentFixture<AffichageChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
