import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HwreactiveformComponent } from './hwreactiveform.component';

describe('HwreactiveformComponent', () => {
  let component: HwreactiveformComponent;
  let fixture: ComponentFixture<HwreactiveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HwreactiveformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HwreactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
