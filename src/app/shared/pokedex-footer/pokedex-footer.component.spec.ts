import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexFooterComponent } from './pokedex-footer.component';

describe('PokedexFooterComponent', () => {
  let component: PokedexFooterComponent;
  let fixture: ComponentFixture<PokedexFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokedexFooterComponent]
    });
    fixture = TestBed.createComponent(PokedexFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
