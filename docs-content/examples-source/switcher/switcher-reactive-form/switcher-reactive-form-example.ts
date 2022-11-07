import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

/** @title Switcher Reactive Form */
@Component({
    selector: 'switcher-reactive-form-example',
    templateUrl: './switcher-reactive-form-example.html',
    styleUrls: ['./switcher-reactive-form-example.css'],
})
export class SwitcherReactiveFormExampleComponent {
    readonly testForm = this.fb.group({
        switcherTestReactive: [false, Validators.requiredTrue],
    });

    isSubmitted = false;

    constructor(private readonly fb: UntypedFormBuilder) {}

    onSubmit() {
        this.isSubmitted = true;
    }
}
