"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[9194],{9194:(N,v,a)=>{a.d(v,{Wi:()=>C,n9:()=>u,R0:()=>G});var l=a(3191),n=a(5e3),_=a(4204),p=a(8929),d=a(5423),h=a(3075),s=a(9808),m=a(5583),x=a(9209),g=a(7144);function M(o,i){1&o&&(n.TgZ(0,"div",3),n.Hsn(1,2),n.qZA())}const O=[[["nx-label"]],"*",[["nx-error"]]],P=["nx-label","*","nx-error"],f=["checkboxLabelWrapper"],S=["input"];function T(o,i){1&o&&n._UZ(0,"nx-icon",8)}function I(o,i){1&o&&n._UZ(0,"div",9)}const E=["*"];let k=0;class D{constructor(i,e,t){this.checked=i,this.value=e,this.checkbox=t}}class y{constructor(i,e){this.value=i,this.checkboxGroup=e}}let u=(()=>{class o{constructor(e,t,c,r,b){this._cdr=e,this._errorStateMatcher=t,this._parentForm=c,this._parentFormGroup=r,this.ngControl=b,this._stateChanges=new p.xQ,this.errorState=!1,this.selectionChange=new n.vpe,this._id="nx-checkbox-group-"+k++,this._name="",this._disabled=!1,this._negative=!1,this._onChange=()=>{},this._onTouched=()=>{},this.ngControl&&(this.ngControl.valueAccessor=this)}set id(e){this._id!==e&&(this._id=e,this._cdr.markForCheck())}get id(){return this._id}set name(e){this._name=e,this._cdr.markForCheck()}get name(){return this._name}set disabled(e){this._disabled=(0,l.Ig)(e),this._label&&(this._label.disabled=this._disabled),this._stateChanges.next()}get disabled(){return this._disabled}set negative(e){this._negative=(0,l.Ig)(e),this._cdr.markForCheck(),this._stateChanges.next()}get negative(){return this._negative}set labelSize(e){this._labelSize=e,this._stateChanges.next()}get labelSize(){return this._labelSize}get required(){return!!this._required}set required(e){this._required=(0,l.Ig)(e)}ngAfterContentInit(){setTimeout(()=>{this._updateSelectedCheckboxFromValue(!0)}),this._checkboxes.changes.subscribe(()=>{this._value=this._checkboxes.filter(e=>e.checked).map(e=>e.value),this.ngControl&&this.ngControl.control.setValue(this._value),this._updateSelectedCheckboxFromValue()})}ngDoCheck(){this.ngControl&&this.updateErrorState()}ngOnDestroy(){this._stateChanges.complete()}writeValue(e){this._value!==e&&(this._value=e,this._updateSelectedCheckboxFromValue())}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_updateSelectedCheckboxFromValue(e=!1){var t;(null===(t=this._checkboxes)||void 0===t?void 0:t.length)&&(e?this._value&&this._value.length:this._value)&&this._checkboxes.map(r=>{r.checked=this._value.includes(r.value)})}change(e){const t=this._checkboxes.filter(c=>c.checked).map(c=>c.value);this._onChange(t),this._onTouched&&this._onTouched(),this.selectionChange.emit(new y(t,this))}get checkboxes(){return this._checkboxes.toArray()}updateErrorState(){const e=this.errorState,r=this._errorStateMatcher.isErrorState(this.ngControl?this.ngControl.control:null,this._parentFormGroup||this._parentForm);r!==e&&(this.errorState=r,this._cdr.markForCheck())}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(n.sBO),n.Y36(d.rD),n.Y36(h.F,8),n.Y36(h.sg,8),n.Y36(h.a5,10))},o.\u0275cmp=n.Xpm({type:o,selectors:[["nx-checkbox-group"]],contentQueries:function(e,t,c){if(1&e&&(n.Suo(c,_.UD,5),n.Suo(c,C,5)),2&e){let r;n.iGM(r=n.CRH())&&(t._label=r.first),n.iGM(r=n.CRH())&&(t._checkboxes=r)}},hostVars:9,hostBindings:function(e,t){2&e&&(n.uIk("id",t.id)("required",t.required)("disabled",t.disabled||null)("aria-labelledby",(null==t._label?null:t._label.id)||null)("role","group"),n.ekj("nx-checkbox-group",!0)("nx-checkbox-group--negative",t.negative))},inputs:{id:"id",name:"name",disabled:"disabled",negative:"negative",labelSize:"labelSize",required:"required"},outputs:{selectionChange:"selectionChange"},ngContentSelectors:P,decls:6,vars:1,consts:[[1,"nx-checkbox-group__label"],["class","nx-checkbox-group__errors",4,"ngIf"],[1,"nx-checkbox-group__controls"],[1,"nx-checkbox-group__errors"]],template:function(e,t){1&e&&(n.F$t(O),n.TgZ(0,"div")(1,"div",0),n.Hsn(2),n.qZA(),n.YNc(3,M,2,0,"div",1),n.TgZ(4,"div",2),n.Hsn(5,1),n.qZA()()),2&e&&(n.xp6(3),n.Q6J("ngIf",t.errorState))},directives:[s.O5],styles:["[_nghost-%COMP%]     nx-error{margin-bottom:8px}[_nghost-%COMP%]     nx-label{margin-bottom:16px;display:block}.nx-checkbox-group--negative[_nghost-%COMP%]     nx-error, .nx-checkbox-group--negative[_nghost-%COMP%]     nx-label, .nx-checkbox-group--negative[_nghost-%COMP%]     nx-icon.nx-error__icon{color:var(--negative)}"],changeDetection:0}),o})(),C=(()=>{class o{constructor(e,t,c,r,b,F,w){this._cdr=e,this._errorStateMatcher=t,this.checkboxGroup=c,this.ngControl=r,this._parentForm=b,this._parentFormGroup=F,this._focusMonitor=w,this._id=(k++).toString(),this._disabled=!1,this._negative=!1,this._labelSize="small",this._checked=!1,this._name=null,this._indeterminate=!1,this._value="",this.indeterminateChange=new n.vpe(!1),this.checkedChange=new n.vpe(!1),this.checkboxChange=new n.vpe,this.onChangeCallback=z=>{},this.onTouchedCallback=()=>{},this.ngControl&&(this.ngControl.valueAccessor=this)}set id(e){e!==this._id&&(this._id=e,this._cdr.markForCheck())}get id(){return`nx-checkbox-${this._id}`}set name(e){this._name=e}get name(){var e;return(null===(e=this.checkboxGroup)||void 0===e?void 0:e.name)||this._name}set disabled(e){const t=(0,l.Ig)(e);t!==this._disabled&&(this._disabled=t,this._cdr.markForCheck())}get disabled(){var e;return(null===(e=this.checkboxGroup)||void 0===e?void 0:e.disabled)||this._disabled}set labelSize(e){this._labelSize=e,this._cdr.markForCheck()}get labelSize(){var e;return(null===(e=this.checkboxGroup)||void 0===e?void 0:e.labelSize)||this._labelSize}set negative(e){const t=(0,l.Ig)(e);t!==this._negative&&(this._negative=t,this._cdr.markForCheck())}get negative(){var e;return(null===(e=this.checkboxGroup)||void 0===e?void 0:e.negative)||this._negative}set checked(e){const t=(0,l.Ig)(e);t!==this._checked&&(this._indeterminate&&this._setIndeterminate(!1),this._setChecked(t))}get checked(){return this._checked}set indeterminate(e){const t=(0,l.Ig)(e);this._indeterminate!==t&&(this._checked&&this._setChecked(!1),this._setIndeterminate(t)),this._cdr.markForCheck()}get indeterminate(){return this._indeterminate}get required(){return!!this._required}set required(e){this._required=(0,l.Ig)(e)}get value(){return this._value?this._value:this.checked.toString()}set value(e){this._value=e,this._cdr.markForCheck()}get labelHasContent(){return!!this._checkboxLabelWrapper.nativeElement.innerHTML.trim()}labelContentChanged(){this._cdr.detectChanges()}_controlInvalid(){var e;let c=null;return c=(null===(e=this.checkboxGroup)||void 0===e?void 0:e.ngControl)?this.checkboxGroup.ngControl:this.ngControl?this.ngControl.control:null,this._errorStateMatcher.isErrorState(c,this._parentFormGroup||this._parentForm)}ngOnInit(){this.checkboxGroup&&(this.name=this.checkboxGroup.name,this._parentChangeSubscription=this.checkboxGroup._stateChanges.subscribe(()=>{this._cdr.markForCheck()}))}ngAfterViewInit(){this._focusMonitor.monitor(this._nativeInput)}ngOnDestroy(){this._parentChangeSubscription&&this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._nativeInput)}_setIndeterminate(e){this._indeterminate=e,this.indeterminateChange.emit(this._indeterminate),this._cdr.markForCheck()}_setChecked(e){this._checked=e,this._cdr.markForCheck()}toggle(){this.checked=!this.checked,this.onChangeCallback(this.checked),null!==this.checkboxGroup&&this.checkboxGroup.change(this)}writeValue(e){null===e&&(e=!1),e!==this.checked&&(this.checked=e)}registerOnChange(e){this.onChangeCallback=e}registerOnTouched(e){this.onTouchedCallback=e}setDisabledState(e){this.disabled=e}focus(e){this._focusMonitor.focusVia(this._nativeInput,e)}touch(){this.onTouchedCallback()}_onInputClick(e){e.stopPropagation(),this.disabled||(this.toggle(),this.checkedChange.emit(this._checked),this.checkboxChange.emit(this._createChangeEvent(this._checked)))}_createChangeEvent(e){const t=new D(e,this.value,this);return t.checked=e,t.value=this.value,t.checkbox=this,t}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(n.sBO),n.Y36(d.rD),n.Y36(u,8),n.Y36(h.a5,10),n.Y36(h.F,8),n.Y36(h.sg,8),n.Y36(m.tE))},o.\u0275cmp=n.Xpm({type:o,selectors:[["nx-checkbox"]],viewQuery:function(e,t){if(1&e&&(n.Gf(f,7),n.Gf(S,5)),2&e){let c;n.iGM(c=n.CRH())&&(t._checkboxLabelWrapper=c.first),n.iGM(c=n.CRH())&&(t._nativeInput=c.first)}},hostVars:14,hostBindings:function(e,t){2&e&&(n.uIk("required",t.required)("aria-invalid",t._controlInvalid()||null),n.ekj("nx-checkbox",!0)("disabled",t.disabled)("nx-checkbox--label-large","large"===t.labelSize)("nx-checkbox--label-small","small"===t.labelSize)("nx-checkbox--negative",t.negative)("has-error",t._controlInvalid()||null))},inputs:{id:"id",name:"name",disabled:"disabled",labelSize:"labelSize",negative:"negative",checked:"checked",indeterminate:"indeterminate",required:"required",value:"value"},outputs:{indeterminateChange:"indeterminateChange",checkedChange:"checkedChange",checkboxChange:"checkboxChange"},ngContentSelectors:E,decls:9,vars:13,consts:[["type","checkbox",1,"nx-checkbox__input",3,"id","name","checked","indeterminate","disabled","value","blur","click"],["input",""],[1,"nx-checkbox__label",3,"id"],[1,"nx-checkbox__control"],["name","check","aria-hidden","true",4,"ngIf"],["class","nx-checkbox__indeterminate-indicator",4,"ngIf"],[1,"nx-checkbox__label-text",3,"cdkObserveContent"],["checkboxLabelWrapper",""],["name","check","aria-hidden","true"],[1,"nx-checkbox__indeterminate-indicator"]],template:function(e,t){1&e&&(n.F$t(),n.TgZ(0,"input",0,1),n.NdJ("blur",function(){return t.touch()})("click",function(r){return t._onInputClick(r)}),n.qZA(),n.TgZ(2,"label",2)(3,"span",3),n.YNc(4,T,1,0,"nx-icon",4),n.YNc(5,I,1,0,"div",5),n.qZA(),n.TgZ(6,"div",6,7),n.NdJ("cdkObserveContent",function(){return t.labelContentChanged()}),n.Hsn(8),n.qZA()()),2&e&&(n.Q6J("id",t.id)("name",t.name)("checked",t.checked)("indeterminate",t.indeterminate)("disabled",t.disabled)("value",t.value),n.uIk("aria-labelledby",t.id+"-label"),n.xp6(2),n.ekj("has-label",t.labelHasContent),n.Q6J("id",t.id+"-label"),n.uIk("for",t.id),n.xp6(2),n.Q6J("ngIf",t.checked),n.xp6(1),n.Q6J("ngIf",t.indeterminate))},directives:[x.O8,s.O5,g.wD],styles:["[_nghost-%COMP%]{display:block;position:relative}.has-error[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--danger);border-color:var(--danger)}.has-error[_nghost-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{border-color:var(--danger)}.has-error[_nghost-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{background-color:var(--danger)}.nx-checkbox__input[_ngcontent-%COMP%]{opacity:0;position:absolute}.nx-checkbox__label[_ngcontent-%COMP%]{font-size:var(--checkbox-small-label-font-size);line-height:var(--checkbox-small-label-line-height);font-weight:var(--checkbox-small-label-font-weight);letter-spacing:var(--checkbox-small-label-letter-spacing);color:var(--checkbox-label-color);cursor:pointer;display:flex}.nx-checkbox--label-large[_nghost-%COMP%]   .nx-checkbox__label[_ngcontent-%COMP%]{font-size:var(--checkbox-large-label-font-size);line-height:var(--checkbox-large-label-line-height);font-weight:var(--checkbox-large-label-font-weight);letter-spacing:var(--checkbox-large-label-letter-spacing)}.nx-checkbox--label-large[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{margin-top:var(--checkbox-large-label-text-margin-top)}.nx-checkbox--label-large[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{margin-top:var(--checkbox-large-label-control-margin-top)}.nx-checkbox--label-large[_nghost-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{margin-left:var(--checkbox-large-label-text-margin-left)}[dir=rtl]   .nx-checkbox--label-large[_nghost-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{margin-left:0;margin-left:initial;margin-right:var(--checkbox-large-label-text-margin-left)}.nx-checkbox--label-small[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{margin-top:var(--checkbox-small-label-text-margin-top)}.nx-checkbox--label-small[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{margin-top:var(--checkbox-small-label-control-margin-top)}.nx-checkbox__label-text[_ngcontent-%COMP%]{padding:0;margin-left:var(--checkbox-small-label-text-margin-left)}.nx-checkbox__label-text[_ngcontent-%COMP%]:empty{display:none}[dir=rtl][_nghost-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{margin-left:0;margin-left:initial;margin-right:var(--checkbox-small-label-text-margin-left)}.nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-background-color);border-style:solid;border-width:var(--checkbox-border-width);border-color:var(--checkbox-border-color);border-radius:var(--checkbox-border-radius);color:var(--checkbox-icon-color);font-size:var(--checkbox-icon-size);height:var(--checkbox-control-size);width:var(--checkbox-control-size);min-width:var(--checkbox-control-size);display:flex;justify-content:center;align-items:center;z-index:0;cursor:pointer}.nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{color:var(--checkbox-indeterminate-color);background-color:var(--checkbox-indeterminate-color);box-sizing:content-box;height:0;width:8px;border:1px solid;border-radius:2px}.nx-checkbox__input[_ngcontent-%COMP%]:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-selected-background-color);border-color:var(--checkbox-selected-border-color)}.nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-disabled-background-color);border-color:var(--checkbox-disabled-border-color);color:var(--checkbox-disabled-icon-color);cursor:not-allowed}.nx-checkbox__input[_ngcontent-%COMP%]:checked:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-disabled-selected-background-color)}.nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]{cursor:not-allowed;color:var(--checkbox-label-disabled-color)}.nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{color:var(--checkbox-disabled-border-color);background-color:var(--checkbox-disabled-border-color)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{border-color:var(--negative);background-color:transparent}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__label[_ngcontent-%COMP%]{color:var(--negative)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{color:var(--negative-accent);background-color:var(--negative);border-color:var(--negative)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:checked:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{color:var(--negative-dimmed);border-color:transparent;background-color:var(--negative-02-dimmed)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{color:var(--negative);background-color:var(--negative)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]{color:var(--negative-dimmed)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-disabled-negative-background-color);border-color:var(--negative-01-dimmed)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{color:var(--negative-01-dimmed);background-color:var(--negative-01-dimmed)}[_nghost-%COMP%]:not(.nx-checkbox--negative):not(.has-error):hover   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-hover-background-color)}[_nghost-%COMP%]:not(.nx-checkbox--negative):not(.has-error):hover   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{background-color:var(--checkbox-hover-background-color)}[_nghost-%COMP%]:not(.nx-checkbox--negative):not(.has-error):hover   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]) + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{border-color:var(--checkbox-hover-border-color)}[_nghost-%COMP%]:not(.nx-checkbox--negative):active   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-active-background-color)}[_nghost-%COMP%]:not(.nx-checkbox--negative):active   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{background-color:var(--checkbox-active-background-color)}[_nghost-%COMP%]:not(.nx-checkbox--negative):active   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]) + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{border-color:var(--checkbox-active-border-color)}.nx-checkbox__input.cdk-keyboard-focused[_ngcontent-%COMP%] + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast: active){.nx-checkbox__input.cdk-keyboard-focused[_ngcontent-%COMP%] + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{forced-color-adjust:none;border-color:buttonText!important;background-color:buttonFace!important}[_nghost-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{color:buttonText!important}[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:highlight!important;border-color:highlight!important;color:highlightText!important}[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:indeterminate + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{color:buttonText!important}[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%]{color:GrayText!important}[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled:indeterminate + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{color:GrayText!important}[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{border-color:GrayText!important}[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:buttonFace!important;border-color:GrayText!important;color:GrayText!important}}"],changeDetection:0}),o})(),G=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[s.ez,x.cf,g.Q8],_.WI,_.$N]}),o})()}}]);