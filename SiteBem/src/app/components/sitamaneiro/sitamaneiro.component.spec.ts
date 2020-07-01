import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitamaneiroComponent } from './sitamaneiro.component';

describe('SitamaneiroComponent', () => {
  let component: SitamaneiroComponent;
  let fixture: ComponentFixture<SitamaneiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitamaneiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitamaneiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
