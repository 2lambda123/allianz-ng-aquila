import { Component, Type, ViewChild, Directive } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import * as axe from 'axe-core';
import { NxMenuComponent } from './menu.component';
import { NxMenuModule } from './menu.module';

// For better readablity here, We can safely ignore some conventions in our specs
// tslint:disable:component-class-suffix

@Directive()
abstract class MenuTest {
  open: boolean = false;
  @ViewChild(NxMenuComponent) menuInstance: NxMenuComponent;
}

describe(NxMenuComponent.name, () => {
  let fixture: ComponentFixture<MenuTest>;
  let testInstance: MenuTest;
  let menuInstance: NxMenuComponent;
  let menuNativeElement: HTMLElement;

  function createTestComponent(component: Type<MenuTest>) {
    fixture = TestBed.createComponent(component);
    fixture.detectChanges();
    testInstance = fixture.componentInstance;
    menuInstance = testInstance.menuInstance;
    menuNativeElement = <HTMLElement>fixture.nativeElement.querySelector('nx-menu');
  }

  function getMenuWrapper() {
    return menuNativeElement.querySelector('.nx-menu__wrapper');
  }

  function expectOpenMenu(open: boolean) {
    expect(menuInstance.open).toBe(open);
    expect(getMenuWrapper() !== null).toBe(open);
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BasicMenu
      ],
      imports: [
        NoopAnimationsModule,
        NxMenuModule
      ]
    }).compileComponents();
  }));

  describe('basic menu', () => {
    beforeEach(() => {
      createTestComponent(BasicMenu);
    });

    it('creates the menu', async(() => {
      expect(menuInstance).toBeTruthy();
    }));

    it('menu is closed', () => {
      expectOpenMenu(false);
    });

    describe('when opened', () => {
      beforeEach(() => {
        testInstance.open = true;
        fixture.detectChanges();
      });

      it('menu is open', () => {
        expectOpenMenu(true);
      });

      it('contains the content', () => {
        expect(getMenuWrapper().textContent.trim()).toBe('examplecontent');
      });
    });
  });

  describe('programatic tests', () => {
    beforeEach(() => {
      createTestComponent(BasicMenu);
    });

    describe('when opened', () => {
      beforeEach(() => {
        menuInstance.open = true;
        fixture.detectChanges();
      });

      it('menu is open', () => {
        expectOpenMenu(true);
      });
    });

    describe('when toggled', () => {
      beforeEach(() => {
        menuInstance.toggle();
        fixture.detectChanges();
      });

      it('menu is open', () => {
        expectOpenMenu(true);
      });
    });
  });

  describe('a11y', () => {
    it('has no accessibility violations', function(done) {
      createTestComponent(BasicMenu);
      menuInstance.open = true;
      fixture.detectChanges();

      axe.run(fixture.nativeElement, {},  (_: Error, results: axe.AxeResults) => {
        expect(results.violations.length).toBe(0);
        const violationMessages = results.violations.map(item => item.description);
        if (violationMessages.length) {
          console.log(JSON.stringify(results.violations, null, 2));
          console.log(violationMessages);
        }
        done();
      });
    });
  });
});

@Component({
  template: `
    <nx-menu [open]="open">
      <div nxMenuItem>example</div>
      <div nxMenuItem>content</div>
    </nx-menu>
  `
})
class BasicMenu extends MenuTest {}
