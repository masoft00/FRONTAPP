import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerPartenaireComponent } from './lister-partenaire.component';

describe('ListerPartenaireComponent', () => {
  let component: ListerPartenaireComponent;
  let fixture: ComponentFixture<ListerPartenaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerPartenaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerPartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
