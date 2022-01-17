import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NxCodeInputIntl } from './code-input-intl';
import { NxCodeInputComponent } from './code-input.component';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [NxCodeInputComponent],
    exports: [NxCodeInputComponent],
    providers: [NxCodeInputIntl],
})
export class NxCodeInputModule {}
