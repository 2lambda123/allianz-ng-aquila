import {
    NX_TOOLTIP_DEFAULT_OPTIONS,
    NxTooltipDefaultOptions,
} from '@allianz/ng-aquila/tooltip';
import { Component } from '@angular/core';

const myDefaultOptions: NxTooltipDefaultOptions = {
    position: 'right',
    showDelay: 500,
    hideDelay: 0,
    touchendHideDelay: 1500,
};

/**
 * @title Tooltip global settings
 */
@Component({
    selector: 'tooltip-settings-example',
    templateUrl: './tooltip-settings-example.html',
    styleUrls: ['./tooltip-settings-example.css'],
    providers: [
        { provide: NX_TOOLTIP_DEFAULT_OPTIONS, useValue: myDefaultOptions },
    ],
})
export class TooltipSettingsExampleComponent {}
