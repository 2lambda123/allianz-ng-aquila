import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxIconModule } from '@aposin/ng-aquila/icon';
import { NxPopoverContentDirective } from './popover-content';
import { NxPopoverIntl } from './popover-intl';
import { NxPopoverTriggerDirective } from './popover-trigger.directive';
import { NxPopoverComponent } from './popover.component';

@NgModule({
    imports: [CommonModule, OverlayModule, NxIconModule],
    declarations: [NxPopoverTriggerDirective, NxPopoverComponent, NxPopoverContentDirective],
    exports: [NxPopoverTriggerDirective, NxPopoverComponent, NxPopoverContentDirective],
    providers: [NxPopoverIntl],
})
export class NxPopoverModule {}
