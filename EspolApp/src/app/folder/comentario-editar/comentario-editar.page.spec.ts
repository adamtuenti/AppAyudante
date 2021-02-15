import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComentarioEditarPage } from './comentario-editar.page';

describe('ComentarioEditarPage', () => {
  let component: ComentarioEditarPage;
  let fixture: ComponentFixture<ComentarioEditarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarioEditarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComentarioEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
