"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[525],{525:(B,b,i)=>{i.d(b,{L$:()=>w,NM:()=>S,NN:()=>N,U4:()=>y});var n=i(4650),h=i(2693),_=i(6895),d=i(7823),u=i(3099),g=i(9195),s=i(1281),p=i(8929),k=i(7625),M=i(5260),l=i(4006);const C=["*"],O=["input"];function P(o,r){1&o&&n._UZ(0,"nx-icon",8)}function v(o,r){if(1&o&&(n.TgZ(0,"span",6),n.YNc(1,P,1,0,"nx-icon",7),n.qZA()),2&o){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",e.checked)}}function x(o,r){1&o&&n.Hsn(0,3,["*ngIf","_errorState"])}function f(o,r){1&o&&n._UZ(0,"nx-icon",9)}const m=[[["nx-card-header"]],"*",[["nx-card-footer"]],[["nx-error"]]],E=["nx-card-header","*","nx-card-footer","nx-error"];let y=(()=>{class o{constructor(e,t){this._elementRef=e,this._focusMonitor=t,this._focusMonitor.monitor(this._elementRef)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(n.SBq),n.Y36(h.tE))},o.\u0275cmp=n.Xpm({type:o,selectors:[["nx-card"]],hostAttrs:[1,"nx-card"],ngContentSelectors:C,decls:1,vars:0,template:function(e,t){1&e&&(n.F$t(),n.Hsn(0))},styles:["[_nghost-%COMP%]{background:var(--card-background-color);border-color:var(--card-border-color);border-width:var(--card-border-width);border-style:solid;border-radius:var(--card-border-radius);box-shadow:none;display:inline-block;padding:23px;transition:background-color .2s ease,box-shadow .2s ease}[_nghost-%COMP%]:hover, [_nghost-%COMP%]:focus{outline:none}.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast: active),(forced-colors: active){.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}"],changeDetection:0}),o})(),N=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["nx-card-header"]],ngContentSelectors:C,decls:1,vars:0,template:function(e,t){1&e&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),o})();class D{constructor(r,e,t){this.checked=r,this.value=e,this.card=t}}let I=0;const T=new n.OlP("SELECTABLE_CARD_DEFAULT_OPTIONS");let S=(()=>{class o{constructor(e,t,c,a,F,L,A){this._cdr=e,this._errorStateMatcher=t,this.ngControl=c,this._parentForm=a,this._parentFormGroup=F,this._focusMonitor=L,this._defaultOptions=A,this._errorListIds="",this._errorState=!1,this.selectionChange=new n.vpe,this.checkedChange=new n.vpe,this._id="nx-selectable-card-"+I++,this._checked=!1,this._value="",this._disabled=!1,this._negative=!1,this._name="",this._tabindex="0",this._destroyed=new p.xQ,this.onChangeCallback=R=>{},this.onTouchedCallback=R=>{},this.ngControl&&(this.ngControl.valueAccessor=this)}set appearance(e){e!==this.appearance&&(this._appearance=e,this._cdr.markForCheck())}get appearance(){var e;return this._appearance||(null===(e=this._defaultOptions)||void 0===e?void 0:e.appearance)||"default"}set id(e){e!==this._id&&(this._id=e,this._cdr.markForCheck())}get id(){return this._id}set checked(e){const t=(0,s.Ig)(e);t!==this._checked&&(this._checked=t,this._cdr.markForCheck())}get checked(){return this._checked}set value(e){e&&(this._value=e),this._cdr.markForCheck()}get value(){return this._value}set disabled(e){const t=(0,s.Ig)(e);t!==this._disabled&&(this._disabled=t,this._cdr.markForCheck())}get disabled(){return this._disabled}set negative(e){const t=(0,s.Ig)(e);t!==this._negative&&(this._negative=t,this._cdr.markForCheck())}get negative(){return this._negative}set required(e){this._required=(0,s.Ig)(e)}get required(){return!!this._required}set name(e){this._name=e}get name(){return this._name}set tabindex(e){this._tabindex=e}get tabindex(){return this.disabled?"-1":this._tabindex}get _isExpert(){return"expert"===this.appearance}ngAfterViewInit(){this._focusMonitor.monitor(this._nativeInput)}ngAfterContentInit(){this._errorList.changes.pipe((0,k.R)(this._destroyed)).subscribe(()=>{this._errorListIds=this._getErrorListIds(),this._cdr.markForCheck()}),this._errorListIds=this._getErrorListIds()}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this._focusMonitor.stopMonitoring(this._nativeInput)}registerOnChange(e){this.onChangeCallback=e}registerOnTouched(e){this.onTouchedCallback=e}setDisabledState(e){this.disabled=e}writeValue(e){this.checked=!!e}ngDoCheck(){this.ngControl&&this._updateErrorState()}_updateErrorState(){const e=this._errorState,a=this._errorStateMatcher.isErrorState(this.ngControl?this.ngControl.control:null,this._parentFormGroup||this._parentForm);a!==e&&(this._errorState=a,this._cdr.markForCheck())}toggle(){this.disabled||(this.checked=!this.checked)}_onInputClick(e){e.stopPropagation(),this.disabled||(this.toggle(),this._emitChangeEvent())}_onInteractionEvent(e){e.stopPropagation()}_emitChangeEvent(){const e=new D(this.checked,this.value,this);this.onChangeCallback(this.checked),this.selectionChange.emit(e),this.checkedChange.emit(this.checked)}_getErrorListIds(){return this._errorList.map(e=>e.id).join(" ")}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(n.sBO),n.Y36(M.rD),n.Y36(l.a5,10),n.Y36(l.F,8),n.Y36(l.sg,8),n.Y36(h.tE),n.Y36(T,8))},o.\u0275cmp=n.Xpm({type:o,selectors:[["nx-selectable-card"]],contentQueries:function(e,t,c){if(1&e&&n.Suo(c,d.vV,4),2&e){let a;n.iGM(a=n.CRH())&&(t._errorList=a)}},viewQuery:function(e,t){if(1&e&&n.Gf(O,5),2&e){let c;n.iGM(c=n.CRH())&&(t._nativeInput=c.first)}},hostAttrs:["attr.role","checkbox"],hostVars:8,hostBindings:function(e,t){2&e&&(n.uIk("aria-invalid",t._errorState)("aria-checked",t.checked),n.ekj("is-disabled",t.disabled)("has-error",t._errorState)("is-expert",t._isExpert))},inputs:{appearance:"appearance",id:"id",checked:"checked",value:"value",disabled:"disabled",negative:"negative",required:"required",name:"name",tabindex:"tabindex"},outputs:{selectionChange:"selectionChange",checkedChange:"checkedChange"},ngContentSelectors:E,decls:11,vars:14,consts:[["type","checkbox",3,"checked","value","required","change","blur","click"],["input",""],["class","checkbox",4,"ngIf","ngIfElse"],[1,"content"],[4,"ngIf"],["expert",""],[1,"checkbox"],["name","check","aria-hidden","true",4,"ngIf"],["name","check","aria-hidden","true"],["name","check-circle","size","s","aria-hidden","true",1,"checkmark"]],template:function(e,t){if(1&e&&(n.F$t(m),n.TgZ(0,"input",0,1),n.NdJ("change",function(a){return t._onInteractionEvent(a)})("blur",function(a){return t.onTouchedCallback(a)})("click",function(a){return t._onInputClick(a)}),n.qZA(),n.TgZ(2,"label"),n.YNc(3,v,2,1,"span",2),n.TgZ(4,"div",3),n.Hsn(5),n.Hsn(6,1),n.Hsn(7,2),n.qZA()(),n.YNc(8,x,1,0,"ng-content",4),n.YNc(9,f,1,0,"ng-template",null,5,n.W1O)),2&e){const c=n.MAs(10);n.Q6J("checked",t.checked)("value",t.value||null)("required",t.required),n.uIk("disabled",t.disabled||null)("id",t.id)("name",t.name)("aria-required",t.required)("tabindex",t.tabindex)("aria-invalid",t._errorState)("aria-describedby",t._errorListIds||null),n.xp6(2),n.uIk("for",t.id),n.xp6(1),n.Q6J("ngIf","default"===t.appearance)("ngIfElse",c),n.xp6(5),n.Q6J("ngIf",t._errorState)}},dependencies:[_.O5,g.O8],styles:['[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nx-error{margin-top:8px}[_nghost-%COMP%]     nx-error.nx-error--message{margin-top:12px}  nx-card-footer,   nx-card-content,   nx-card-header{display:block}.checkmark[_ngcontent-%COMP%]{float:right;position:relative;color:var(--selectable-card-icon-color)}[dir=rtl][_nghost-%COMP%]   .checkmark[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .checkmark[_ngcontent-%COMP%]{float:left}.checkmark[_ngcontent-%COMP%]:before, .checkmark[_ngcontent-%COMP%]     svg{display:none;z-index:1}.checkmark[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;width:22px;height:22px;border:1px solid var(--selectable-card-icon-placeholder-border-color);border-radius:50%}.checkbox[_ngcontent-%COMP%]{float:left;background-color:var(--checkbox-background-color);border-style:solid;border-width:var(--checkbox-border-width);border-color:var(--checkbox-border-color);border-radius:var(--checkbox-border-radius);color:var(--checkbox-icon-color);font-size:var(--checkbox-icon-size);height:var(--checkbox-control-size);width:var(--checkbox-control-size);min-width:var(--checkbox-control-size);display:flex;justify-content:center;align-items:center;z-index:0}[dir=rtl][_nghost-%COMP%]   .checkbox[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .checkbox[_ngcontent-%COMP%]{float:right}[_nghost-%COMP%]:not(.is-expert)   .content[_ngcontent-%COMP%]{overflow:hidden;padding-left:16px}[dir=rtl]   [_nghost-%COMP%]:not(.is-expert)   .content[_ngcontent-%COMP%]{padding-left:0;padding-right:16px}@media (max-width: 703px){[_nghost-%COMP%]:not(.is-expert)   .content[_ngcontent-%COMP%]{padding-left:8px}[dir=rtl]   [_nghost-%COMP%]:not(.is-expert)   .content[_ngcontent-%COMP%]{padding-right:8px}}.is-expert[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-expert-background-hover-color)}.is-expert[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover   .checkmark[_ngcontent-%COMP%]{color:var(--selectable-card-unchecked-icon-hover-color)}.is-expert[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover   .checkmark[_ngcontent-%COMP%]:before, .is-expert[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover   .checkmark[_ngcontent-%COMP%]     svg{display:block}.is-expert[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:var(--selectable-card-expert-background-selected-color)}.is-expert[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-expert-background-selected-hover-color)}input[_ngcontent-%COMP%]{position:absolute;height:0;width:0;overflow:hidden;opacity:0}input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:var(--selectable-card-background-selected-color);border-color:var(--selectable-card-border-selected-color)}input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:before, input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]     svg{display:block}input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-background-selected-hover-color)}input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover   .checkmark[_ngcontent-%COMP%]{color:var(--selectable-card-icon-color)}input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{background-color:var(--checkbox-selected-background-color);border-color:var(--checkbox-selected-border-color)}label[_ngcontent-%COMP%]{border:var(--selectable-card-border-width) solid var(--selectable-card-border-color);display:block;position:relative;padding:16px;cursor:pointer;width:100%;min-height:56px;border-radius:var(--selectable-card-border-radius);background:var(--selectable-card-background-color)}label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-background-hover-color);border-color:var(--selectable-card-border-hover-color)}@media (hover: none){label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-background-color);border-color:var(--selectable-card-border-color)}input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-background-selected-color)}}.is-disabled[_nghost-%COMP%]   label[_ngcontent-%COMP%]{border-color:var(--selectable-card-border-disabled-color);cursor:not-allowed}.is-disabled[_nghost-%COMP%]   .checkmark[_ngcontent-%COMP%]{opacity:40%}.is-disabled[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-background-disabled-color)}.is-disabled[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover   .checkmark[_ngcontent-%COMP%]:before, .is-disabled[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover   .checkmark[_ngcontent-%COMP%]     svg{display:none}.is-disabled[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:var(--selectable-card-background-disabled-selected-color);border-color:var(--selectable-card-border-disabled-selected-color)}.is-disabled[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{background-color:var(--checkbox-disabled-selected-background-color);border-color:var(--checkbox-disabled-border-color);color:var(--checkbox-disabled-icon-color)}.is-disabled[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:before, .is-disabled[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]     svg{display:block}.is-disabled.is-expert[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:var(--selectable-card-expert-background-disabled-selected-color)}.is-disabled[_nghost-%COMP%]   .checkbox[_ngcontent-%COMP%]{background-color:var(--checkbox-disabled-background-color);border-color:var(--checkbox-disabled-border-color);color:var(--checkbox-disabled-icon-color)}.has-error[_nghost-%COMP%]   label[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover, .has-error[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover{border-color:var(--selectable-card-border-error-color)}input.cdk-keyboard-focused[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast: active),(forced-colors: active){input.cdk-keyboard-focused[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   label[_ngcontent-%COMP%], [_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover, .has-error[_nghost-%COMP%]   label[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover{border-color:buttonText}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%], [_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover, .has-error[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover{border-width:3px;padding:14px;border-color:highlight}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%], [_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover   .checkmark[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover   .checkmark[_ngcontent-%COMP%]{color:CanvasText}.is-disabled[_nghost-%COMP%]   label[_ngcontent-%COMP%], .is-disabled[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{border-color:GrayText;color:GrayText}.is-disabled[_nghost-%COMP%]   label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%], .is-disabled[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]{color:GrayText}}'],changeDetection:0}),o})(),w=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[_.ez,g.cf,d.$N,u.R0,d.$N]}),o})()}}]);