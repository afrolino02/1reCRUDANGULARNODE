import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavBatComponent } from './header-nav-bat.component';

describe('HeaderNavBatComponent', () => {
  let component: HeaderNavBatComponent;
  let fixture: ComponentFixture<HeaderNavBatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderNavBatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNavBatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
