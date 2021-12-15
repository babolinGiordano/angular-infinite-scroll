import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInfiniteComponent } from './table-infinite.component';

describe('TableInfiniteComponent', () => {
  let component: TableInfiniteComponent;
  let fixture: ComponentFixture<TableInfiniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableInfiniteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInfiniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
