"use strict";(self.webpackChunkng_aquila=self.webpackChunkng_aquila||[]).push([[3149],{29508:function(e,t,n){n.d(t,{f:function(){return h}});var i=n(50214),s=n(76198),o=n(77549),c=n(79661),r=n(38583),a=n(3679),l=n(37716);let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[],r.ez,a.u5,a.UX,c.ru,o.X,s.K,i.TW]}),e})()},53149:function(e,t,n){n.r(t),n.d(t,{SwitcherExamplesModule:function(){return w}});var i=n(97983),s=n(37716),o=n(48198);let c=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["switcher-default-example"]],decls:2,vars:1,consts:[[3,"checked"]],template:function(e,t){1&e&&(s.TgZ(0,"nx-switcher",0),s._uU(1,"Switcher default"),s.qZA()),2&e&&s.Q6J("checked",!0)},directives:[o.A],styles:[""]}),e})();var r=n(3679),a=n(90722);let l=(()=>{class e{constructor(e){this.fb=e,this.checked=!0,this.templateModel=!1,this.createForm(),this.testForm.disable()}createForm(){this.testForm=this.fb.group({switcherDisabledReactive:[!1,r.kI.requiredTrue]})}switchStatusClick(){this.testForm.disabled?this.testForm.enable():this.testForm.disable()}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(r.qu))},e.\u0275cmp=s.Xpm({type:e,selectors:[["switcher-disabled-example"]],decls:5,vars:1,consts:[["novalidate","",3,"formGroup"],["nxBig","true","formControlName","switcherDisabledReactive"],["nxButton","primary small","type","button",1,"nx-margin-top-m",3,"click"]],template:function(e,t){1&e&&(s.TgZ(0,"form",0),s.TgZ(1,"nx-switcher",1),s._uU(2," big disabled switcher "),s.qZA(),s.qZA(),s.TgZ(3,"button",2),s.NdJ("click",function(){return t.switchStatusClick()}),s._uU(4,"Toggle disabled"),s.qZA()),2&e&&s.Q6J("formGroup",t.testForm)},directives:[r._Y,r.JL,r.sg,o.A,r.JJ,r.u,a.X],styles:[""]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["switcher-label-left-example"]],decls:2,vars:1,consts:[["labelPosition","left",3,"checked"]],template:function(e,t){1&e&&(s.TgZ(0,"nx-switcher",0),s._uU(1,"Switcher label left"),s.qZA()),2&e&&s.Q6J("checked",!0)},directives:[o.A],styles:[""]}),e})(),g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["switcher-label-small-example"]],decls:2,vars:1,consts:[["labelSize","small",3,"checked"]],template:function(e,t){1&e&&(s.TgZ(0,"nx-switcher",0),s._uU(1,"Switcher label small"),s.qZA()),2&e&&s.Q6J("checked",!0)},directives:[o.A],styles:[""]}),e})(),_=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["switcher-large-example"]],decls:2,vars:2,consts:[[3,"nxBig","checked"]],template:function(e,t){1&e&&(s.TgZ(0,"nx-switcher",0),s._uU(1,"Switcher large"),s.qZA()),2&e&&s.Q6J("nxBig",!0)("checked",!0)},directives:[o.A],styles:[""]}),e})(),d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["switcher-negative-example"]],decls:3,vars:2,consts:[[1,"docs-inverse-container"],[3,"checked","nxNegative"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"nx-switcher",1),s._uU(2,"Switcher negative"),s.qZA(),s.qZA()),2&e&&(s.xp6(1),s.Q6J("checked",!0)("nxNegative",!0))},directives:[o.A],styles:[""]}),e})();var b=n(38583);let u=(()=>{class e{constructor(e){this.fb=e,this.isSubmitted=!1,this.createForm()}createForm(){this.testForm=this.fb.group({switcherTestReactive:[!1,r.kI.requiredTrue]})}onSubmit(){this.isSubmitted=!0}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(r.qu))},e.\u0275cmp=s.Xpm({type:e,selectors:[["switcher-reactive-form-example"]],decls:13,vars:8,consts:[[3,"formGroup","ngSubmit"],["name","reactiveTest","formControlName","switcherTestReactive"],["nxButton","primary small","type","submit",1,"nx-margin-top-m"],[1,"nx-margin-bottom-0"],[1,"nx-margin-y-0"]],template:function(e,t){1&e&&(s.TgZ(0,"form",0),s.NdJ("ngSubmit",function(){return t.onSubmit()}),s.TgZ(1,"nx-switcher",1),s._uU(2," switcher label "),s.qZA(),s.TgZ(3,"button",2),s._uU(4,"submit"),s.qZA(),s.TgZ(5,"p",3),s._uU(6),s.ALo(7,"json"),s.qZA(),s.TgZ(8,"p",4),s._uU(9),s.ALo(10,"json"),s.qZA(),s.TgZ(11,"p",4),s._uU(12),s.qZA(),s.qZA()),2&e&&(s.Q6J("formGroup",t.testForm),s.xp6(6),s.hij("Form value: ",s.lcZ(7,4,t.testForm.value),""),s.xp6(3),s.hij("Form status: ",s.lcZ(10,6,t.testForm.status),""),s.xp6(3),s.hij("Form is ",t.isSubmitted?"":" not "," submitted"))},directives:[r._Y,r.JL,r.sg,o.A,r.JJ,r.u,a.X],pipes:[b.Ts],styles:[""]}),e})(),C=(()=>{class e{constructor(){this.templateModel=!0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["switcher-template-driven-example"]],decls:5,vars:2,consts:[["name","templateTest",3,"ngModel","ngModelChange"],[1,"nx-margin-bottom-0"]],template:function(e,t){1&e&&(s.TgZ(0,"form"),s.TgZ(1,"nx-switcher",0),s.NdJ("ngModelChange",function(e){return t.templateModel=e}),s._uU(2," switcher label "),s.qZA(),s.TgZ(3,"p",1),s._uU(4),s.qZA(),s.qZA()),2&e&&(s.xp6(1),s.Q6J("ngModel",t.templateModel),s.xp6(3),s.hij("Model Value: ",t.templateModel,""))},directives:[r._Y,r.JL,r.F,o.A,r.JJ,r.On],styles:[""]}),e})();var x=n(29508);let w=(()=>{class e{static components(){return{"switcher-default":c,"switcher-disabled":l,"switcher-label-left":h,"switcher-label-small":g,"switcher-large":_,"switcher-negative":d,"switcher-reactive-form":u,"switcher-template-driven":C}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[i.g,x.f]]}),e})()},97983:function(e,t,n){n.d(t,{g:function(){return r}});var i=n(38583),s=n(42677),o=n(18553),c=n(37716);let r=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[i.ez,s.cf,o.Q8]]}),e})();n(48198)},48198:function(e,t,n){n.d(t,{A:function(){return C}});var i=n(37716),s=n(39490),o=n(3679),c=n(23674),r=n(4765),a=n(38583),l=n(18553),h=n(90805);const g=["switcherLabelWrapper"],_=["input"];function d(e,t){1&e&&i._UZ(0,"nx-icon",8)}const b=["*"];let u=0,C=(()=>{class e{constructor(e,t,n,s,o,c){this._changeDetectorRef=e,this.ngControl=t,this._errorStateMatcher=n,this._parentForm=s,this._parentFormGroup=o,this._focusMonitor=c,this._id="nx-switcher-"+u++,this.errorState=!1,this._labelPosition="right",this._name=null,this._checked=!1,this._big=!1,this._labelSize="large",this._negative=!1,this._disabled=!1,this.checkedChange=new i.vpe,this.onChangeCallback=e=>{},this.onTouchedCallback=()=>{},this.ngControl&&(this.ngControl.valueAccessor=this)}set id(e){this._id=e,this._changeDetectorRef.markForCheck()}get id(){return this._id}set labelPosition(e){this._labelPosition=e,this._changeDetectorRef.markForCheck()}get labelPosition(){return this._labelPosition}set name(e){this._name=e,this._changeDetectorRef.markForCheck()}get name(){return this._name}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}get checked(){return this._checked}set big(e){const t=(0,s.Ig)(e);this._big=t,this._changeDetectorRef.markForCheck()}get big(){return this._big}set labelSize(e){this._labelSize=e,this._changeDetectorRef.markForCheck()}get labelSize(){return this._labelSize}set negative(e){const t=(0,s.Ig)(e);this._negative=t,this._changeDetectorRef.markForCheck()}get negative(){return this._negative}set disabled(e){const t=(0,s.Ig)(e);this._disabled=t,this._changeDetectorRef.markForCheck()}get disabled(){return this._disabled}ngAfterViewInit(){this._focusMonitor.monitor(this._nativeInput)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._nativeInput)}toggle(){this.disabled||(this.checked=!this.checked,this.onChangeCallback(this.checked),this.checkedChange.emit(this.checked),this.onTouchedCallback&&this.onTouchedCallback())}writeValue(e){null===e&&(e=!1),e!==this.checked&&(this.checked=e)}registerOnChange(e){this.onChangeCallback=e}registerOnTouched(e){this.onTouchedCallback=e}ngDoCheck(){this.ngControl&&this.updateErrorState()}setDisabledState(e){this.disabled=e}touch(){this.onTouchedCallback()}updateErrorState(){const e=this.errorState,t=this._errorStateMatcher.isErrorState(this.ngControl?this.ngControl.control:null,this._parentFormGroup||this._parentForm);t!==e&&(this.errorState=t)}get labelHasContent(){return!!this._switcherLabelWrapper.nativeElement.innerHTML.trim()}labelContentChanged(){this._changeDetectorRef.detectChanges()}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(i.sBO),i.Y36(o.a5,10),i.Y36(c.rD),i.Y36(o.F,8),i.Y36(o.sg,8),i.Y36(r.tE))},e.\u0275cmp=i.Xpm({type:e,selectors:[["nx-switcher"]],viewQuery:function(e,t){if(1&e&&(i.Gf(g,7),i.Gf(_,5)),2&e){let e;i.iGM(e=i.CRH())&&(t._switcherLabelWrapper=e.first),i.iGM(e=i.CRH())&&(t._nativeInput=e.first)}},hostVars:18,hostBindings:function(e,t){2&e&&(i.uIk("id",null)("aria-invalid",t.errorState),i.ekj("is-negative",t.negative)("is-checked",t.checked)("is-big",t.big)("nx-switcher--small-label","small"===t.labelSize)("nx-switcher--large-label","large"===t.labelSize)("is-disabled",t.disabled)("is-swapped","left"===t.labelPosition)("has-error",t.errorState))},inputs:{id:"id",labelPosition:"labelPosition",name:"name",checked:"checked",big:["nxBig","big"],labelSize:"labelSize",negative:["nxNegative","negative"],disabled:"disabled"},outputs:{checkedChange:"checkedChange"},ngContentSelectors:b,decls:9,vars:9,consts:[["type","checkbox","role","switch",1,"nx-switcher__input",3,"id","disabled","checked","click","blur"],["input",""],[1,"nx-switcher__label"],[1,"nx-switcher__toggle"],[1,"nx-switcher__dot"],["name","check",4,"ngIf"],[1,"nx-switcher__label-text",3,"cdkObserveContent"],["switcherLabelWrapper",""],["name","check"]],template:function(e,t){1&e&&(i.F$t(),i.TgZ(0,"input",0,1),i.NdJ("click",function(){return t.toggle()})("blur",function(){return t.touch()}),i.qZA(),i.TgZ(2,"label",2),i.TgZ(3,"div",3),i.TgZ(4,"div",4),i.YNc(5,d,1,0,"nx-icon",5),i.qZA(),i.qZA(),i.TgZ(6,"div",6,7),i.NdJ("cdkObserveContent",function(){return t.labelContentChanged()}),i.Hsn(8),i.qZA(),i.qZA()),2&e&&(i.Q6J("id",t.id)("disabled",t.disabled)("checked",t.checked),i.uIk("name",t.name)("aria-checked",t.checked),i.xp6(2),i.ekj("has-label",t.labelHasContent),i.uIk("for",t.id),i.xp6(3),i.Q6J("ngIf",t.big))},directives:[a.O5,l.wD,h.O],styles:["[_nghost-%COMP%]{position:relative;display:flex}.is-swapped[_nghost-%COMP%]   .nx-switcher__label[_ngcontent-%COMP%]{flex-direction:row-reverse}.is-swapped[_nghost-%COMP%]   .nx-switcher__label.has-label[_ngcontent-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%]{margin-left:12px}[dir=rtl]   .is-swapped[_nghost-%COMP%]   .nx-switcher__label.has-label[_ngcontent-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%]{margin-right:12px;margin-left:initial}.nx-switcher__input[_ngcontent-%COMP%]{opacity:0;position:absolute}.nx-switcher__label[_ngcontent-%COMP%]{font-size:var(--switcher-large-font-size);line-height:var(--switcher-large-line-height);font-weight:var(--switcher-large-font-weight);letter-spacing:var(--switcher-large-letter-spacing);cursor:pointer;display:flex;position:relative}.nx-switcher__toggle[_ngcontent-%COMP%]{position:relative;display:inline-block;width:48px;min-width:48px;height:24px;background-color:var(--switcher-unchecked-background-color);border-radius:16px;transition:background-color .2s ease}[_nghost-%COMP%]:not(.is-swapped)   .has-label[_ngcontent-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%]{margin-right:12px}[dir=rtl]   [_nghost-%COMP%]:not(.is-swapped)   .has-label[_ngcontent-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%]{margin-right:initial;margin-left:12px}.nx-switcher__dot[_ngcontent-%COMP%]{position:absolute;height:20px;width:20px;left:2px;bottom:2px;background-color:var(--switcher-dot-background-color);border-radius:16px;transform:translate(0);transition:transform .2s ease}[dir=rtl][_nghost-%COMP%]   .nx-switcher__dot[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-switcher__dot[_ngcontent-%COMP%]{right:2px;left:auto}.is-checked[_nghost-%COMP%]   .nx-switcher__dot[_ngcontent-%COMP%]{transform:translate(24px)}[dir=rtl]   .is-checked[_nghost-%COMP%]   .nx-switcher__dot[_ngcontent-%COMP%]{transform:translate(-24px)}.is-checked[_nghost-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%]{background-color:var(--switcher-checked-background-color)}.is-checked.is-negative[_nghost-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%]{background-color:var(--negative-dimmed)}.is-big[_nghost-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%]{width:56px;min-width:56px;height:32px}.is-big[_nghost-%COMP%]   .nx-switcher__dot[_ngcontent-%COMP%]{height:28px;width:28px}.is-big[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{position:absolute;top:2px;left:2px;font-size:24px;opacity:0;color:var(--switcher-checked-icon-color)}[dir=rtl]   .is-big[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{right:2px;left:auto}.is-big.is-checked[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{opacity:1;transition:opacity .2s ease}.is-big.nx-switcher--large-label[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-switcher__label-text[_ngcontent-%COMP%]{margin-top:var(--switcher-big-large-label-text-margin-top)}.is-big.nx-switcher--large-label[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%]{margin-top:var(--switcher-big-large-label-control-margin-top)}.is-big.nx-switcher--small-label[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-switcher__label-text[_ngcontent-%COMP%]{margin-top:var(--switcher-big-small-label-text-margin-top)}.is-big.nx-switcher--small-label[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%]{margin-top:var(--switcher-big-small-label-control-margin-top)}.nx-switcher--large-label[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-switcher__label-text[_ngcontent-%COMP%]{margin-top:var(--switcher-large-label-text-margin-top)}.nx-switcher--large-label[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%]{margin-top:var(--switcher-large-label-control-margin-top)}.nx-switcher--small-label[_nghost-%COMP%]   .nx-switcher__label[_ngcontent-%COMP%]{font-size:var(--switcher-small-font-size);line-height:var(--switcher-small-line-height);font-weight:var(--switcher-small-font-weight);letter-spacing:var(--switcher-small-letter-spacing)}.nx-switcher--small-label[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-switcher__label-text[_ngcontent-%COMP%]{margin-top:var(--switcher-small-label-text-margin-top)}.nx-switcher--small-label[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%]{margin-top:var(--switcher-small-label-control-margin-top)}.is-negative[_nghost-%COMP%]   .nx-switcher__label[_ngcontent-%COMP%]{color:var(--negative)}.is-negative[_nghost-%COMP%]   .nx-switcher__dot[_ngcontent-%COMP%]{background-color:var(--negative)}.is-negative[_nghost-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%]{background-color:var(--negative-dimmed)}[_nghost-%COMP%]   .nx-switcher__input.cdk-keyboard-focused[_ngcontent-%COMP%] + .nx-switcher__label[_ngcontent-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   .nx-switcher__input.cdk-keyboard-focused[_ngcontent-%COMP%] + .nx-switcher__label[_ngcontent-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}.is-disabled[_nghost-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%]{background-color:var(--switcher-disabled-background-color)}.is-disabled[_nghost-%COMP%]   .nx-switcher__dot[_ngcontent-%COMP%]{background-color:var(--switcher-disabled-dot-background-color)}.is-disabled[_nghost-%COMP%]   .nx-switcher__label[_ngcontent-%COMP%]{cursor:not-allowed;color:var(--switcher-disabled-text-color)}.is-disabled[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{color:var(--switcher-disabled-icon-color)}.has-error[_nghost-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%]{background-color:var(--danger)}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   .nx-switcher__label[_ngcontent-%COMP%], .is-negative[_nghost-%COMP%]   .nx-switcher__label[_ngcontent-%COMP%]{color:buttonText}[_nghost-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%], .is-negative[_nghost-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%]{forced-color-adjust:none;color:highlightText;background-color:highlight}[_nghost-%COMP%]:not(.is-checked)   .nx-switcher__toggle[_ngcontent-%COMP%], .is-negative[_nghost-%COMP%]:not(.is-checked)   .nx-switcher__toggle[_ngcontent-%COMP%]{background-color:buttonFace;border:2px solid buttonText;color:buttonText}[_nghost-%COMP%]:not(.is-checked)   .nx-switcher__dot[_ngcontent-%COMP%], .is-negative[_nghost-%COMP%]:not(.is-checked)   .nx-switcher__dot[_ngcontent-%COMP%]{left:0;bottom:0;box-shadow:0 0 0 2px buttonText;background-color:buttonText}.is-checked[_nghost-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%], .is-negative.is-checked[_nghost-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%]{background-color:highlight}.is-checked[_nghost-%COMP%]   .nx-switcher__dot[_ngcontent-%COMP%], .is-negative.is-checked[_nghost-%COMP%]   .nx-switcher__dot[_ngcontent-%COMP%]{background-color:highlightText}.is-checked[_nghost-%COMP%]   .nx-switcher__dot[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%], .is-negative.is-checked[_nghost-%COMP%]   .nx-switcher__dot[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%]{color:highlight}.is-disabled[_nghost-%COMP%]   .nx-switcher__label[_ngcontent-%COMP%], .is-negative.is-disabled[_nghost-%COMP%]   .nx-switcher__label[_ngcontent-%COMP%]{color:GrayText}.is-disabled[_nghost-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%], .is-negative.is-disabled[_nghost-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%]{color:GrayText}.is-disabled[_nghost-%COMP%]   .nx-switcher__dot[_ngcontent-%COMP%], .is-negative.is-disabled[_nghost-%COMP%]   .nx-switcher__dot[_ngcontent-%COMP%]{opacity:1;background-color:GrayText}.is-disabled[_nghost-%COMP%]:not(.is-checked)   .nx-switcher__toggle[_ngcontent-%COMP%], .is-negative.is-disabled[_nghost-%COMP%]:not(.is-checked)   .nx-switcher__toggle[_ngcontent-%COMP%]{border:2px solid GrayText}.is-disabled[_nghost-%COMP%]:not(.is-checked)   .nx-switcher__dot[_ngcontent-%COMP%], .is-negative.is-disabled[_nghost-%COMP%]:not(.is-checked)   .nx-switcher__dot[_ngcontent-%COMP%]{box-shadow:0 0 0 2px GrayText}.is-disabled.is-checked[_nghost-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%], .is-negative.is-disabled.is-checked[_nghost-%COMP%]   .nx-switcher__toggle[_ngcontent-%COMP%]{background-color:GrayText}.is-disabled.is-checked[_nghost-%COMP%]   .nx-switcher__dot[_ngcontent-%COMP%], .is-negative.is-disabled.is-checked[_nghost-%COMP%]   .nx-switcher__dot[_ngcontent-%COMP%]{background-color:window}.is-disabled.is-checked[_nghost-%COMP%]   .nx-switcher__dot[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%], .is-negative.is-disabled.is-checked[_nghost-%COMP%]   .nx-switcher__dot[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%]{color:GrayText}}"],changeDetection:0}),e})()}}]);