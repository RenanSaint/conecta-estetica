import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceDetail } from './resource-detail';

describe('ResourceDetail', () => {
  let component: ResourceDetail;
  let fixture: ComponentFixture<ResourceDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
