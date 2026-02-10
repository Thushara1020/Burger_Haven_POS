import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovitemsComponent } from './removitems.component';

describe('RemovitemsComponent', () => {
  let component: RemovitemsComponent;
  let fixture: ComponentFixture<RemovitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemovitemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
