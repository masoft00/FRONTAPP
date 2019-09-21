import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCaissierComponent } from './ajouter-caissier.component';

describe('AjouterCaissierComponent', () => {
  let component: AjouterCaissierComponent;
  let fixture: ComponentFixture<AjouterCaissierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterCaissierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCaissierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
