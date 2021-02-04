import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GruposEstudiosPage } from './grupos-estudios.page';

describe('GruposEstudiosPage', () => {
  let component: GruposEstudiosPage;
  let fixture: ComponentFixture<GruposEstudiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposEstudiosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GruposEstudiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
