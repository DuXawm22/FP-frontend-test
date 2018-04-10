import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSearchComponent } from './game-search.component';

describe('GameSearchComponent', () => {
  let component: GameSearchComponent;
  let fixture: ComponentFixture<GameSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
