import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PopularBlockComponent} from './popular-block.component';

describe('PopularBlockComponent', () => {
  let component: PopularBlockComponent;
  let fixture: ComponentFixture<PopularBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularBlockComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PopularBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
