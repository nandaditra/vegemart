import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitusKamiComponent } from './situs-kami.component';

describe('SitusKamiComponent', () => {
  let component: SitusKamiComponent;
  let fixture: ComponentFixture<SitusKamiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SitusKamiComponent]
    });
    fixture = TestBed.createComponent(SitusKamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
