import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarirComponent } from './karir.component';

describe('KarirComponent', () => {
  let component: KarirComponent;
  let fixture: ComponentFixture<KarirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KarirComponent]
    });
    fixture = TestBed.createComponent(KarirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
