import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComentarioCrearPage } from './comentario-crear.page';

describe('ComentarioCrearPage', () => {
  let component: ComentarioCrearPage;
  let fixture: ComponentFixture<ComentarioCrearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarioCrearPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComentarioCrearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
