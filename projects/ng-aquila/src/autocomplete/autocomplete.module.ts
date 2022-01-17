import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxAutocompleteOptionComponent } from './autocomplete-option.component';
import { NxAutocompleteTriggerDirective } from './autocomplete-trigger.directive';
import { NxAutocompleteComponent } from './autocomplete.component';

@NgModule({
    declarations: [NxAutocompleteComponent, NxAutocompleteOptionComponent, NxAutocompleteTriggerDirective],
    exports: [NxAutocompleteComponent, NxAutocompleteOptionComponent, NxAutocompleteTriggerDirective],
    imports: [CommonModule, OverlayModule, A11yModule],
})
export class NxAutocompleteModule {}
