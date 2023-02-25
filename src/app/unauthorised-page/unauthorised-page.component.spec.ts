import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorisedPageComponent } from './unauthorised-page.component';

describe('UnauthorisedPageComponent', () => {
  let component: UnauthorisedPageComponent;
  let fixture: ComponentFixture<UnauthorisedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthorisedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnauthorisedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
