import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';

fdescribe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MessagesComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Tour of Heroes`, () => {
    expect(component.title).toEqual('Tour of Heroes');
  });

  it('should contain two <a> tags', () => {
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.nativeElement;
    expect(compiled.querySelectorAll('a').length).toBe(2);
  });
  
  it('should have <a> tag with "Heroes', () => {
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.nativeElement;
    expect(compiled.querySelector('a')?.textContent).toContain('Heroes');
  })
  
  it('should have <a> tag with "Dashboard"', () => {
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.nativeElement;
    expect(compiled.querySelectorAll('a')[1]?.textContent).toContain('Dashboard');
  })
  
  it('should have <app-messages> tag', () => {
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.nativeElement;
    expect(compiled.querySelector('app-messages')).toBeDefined();
  })
  
});
