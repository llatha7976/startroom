import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubInitiativeModalpopupPage } from './sub-initiative-modalpopup.page';

describe('SubInitiativeModalpopupPage', () => {
  let component: SubInitiativeModalpopupPage;
  let fixture: ComponentFixture<SubInitiativeModalpopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubInitiativeModalpopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubInitiativeModalpopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

