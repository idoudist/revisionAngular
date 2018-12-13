import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageParentComponent } from './affichage-parent.component';

describe('AffichageParentComponent', () => {
  let component: AffichageParentComponent;
  let fixture: ComponentFixture<AffichageParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
