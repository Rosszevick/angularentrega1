import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmlistaComponent } from './abmlista.component';

describe('AbmlistaComponent', () => {
  let component: AbmlistaComponent;
  let fixture: ComponentFixture<AbmlistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmlistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
