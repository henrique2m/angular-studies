import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionDirectiveModule } from './action.module';
import { ActionDirective } from './action.directive';
import { By } from '@angular/platform-browser';

describe(ActionDirective.name, () => {
  let fixture: ComponentFixture<ActionDirectiveTestComponent>;
  let component: ActionDirectiveTestComponent;
  let elements: { [key: string]: HTMLElement } = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionDirectiveTestComponent],
      imports: [ActionDirectiveModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionDirectiveTestComponent);
    component = fixture.componentInstance;

    elements.divEl = fixture.nativeElement.querySelector('.dummy-component');
    elements.divElWithDebugElement = fixture.debugElement.query(
      By.directive(ActionDirective)
    ).nativeElement;
  });

  it(`(D) (@Output appAction) should emit event with payload when ENTER key is pressed`, () => {
    const event = new KeyboardEvent('keyup', { key: 'Enter' });

    elements.divElWithDebugElement.dispatchEvent(event);
    expect(component.hasEvent()).toBeTrue();
  });

  it(`(D) (@Output appAction) should emit event with payload when clicked`, () => {
    const event = new Event('click');

    elements.divEl.dispatchEvent(event);
    expect(component.hasEvent()).toBeTrue();
  });

  it(`(D) (@Output appAction) should emit event with payload when clicked and when ENTER key is pressed`, () => {
    const clickEvent = new Event('click');
    const keyBoardEvent = new KeyboardEvent('keyup', { key: 'Enter' });

    elements.divEl.dispatchEvent(clickEvent);
    expect(component.hasEvent()).withContext('Click event').toBeTrue();

    component.resetForNewExpectation();
    elements.divEl.dispatchEvent(keyBoardEvent);
    expect(component.hasEvent())
      .withContext('Keyboard event "keyup"')
      .toBeTrue();
  });
});

@Component({
  template: `<div
    class="dummy-component"
    (appAction)="actionHandle($event)"
  ></div>`,
})
class ActionDirectiveTestComponent {
  private event: Event = null;

  public actionHandle(event: Event): void {
    this.event = event;
  }

  public hasEvent(): boolean {
    return !!this.event;
  }

  public resetForNewExpectation(): void {
    this.event = null;
  }
}
