import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SingleAdvertComponent} from './single-advert.component';

describe('SingleAdvertComponent', () => {
  let component: SingleAdvertComponent;
  let fixture: ComponentFixture<SingleAdvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleAdvertComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SingleAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
