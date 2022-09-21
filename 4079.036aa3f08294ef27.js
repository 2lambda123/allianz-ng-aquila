"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[4079],{9508:(W,b,s)=>{s.d(b,{f:()=>a});var d=s(4152),c=s(7294),g=s(7993),_=s(8685),m=s(9808),e=s(3075),h=s(5e3);let a=(()=>{class l{}return l.\u0275fac=function(C){return new(C||l)},l.\u0275mod=h.oAB({type:l}),l.\u0275inj=h.cJS({imports:[[],m.ez,e.u5,e.UX,d.ru,_.X,c.K,g.TW]}),l})()},4079:(W,b,s)=>{s.r(b),s.d(b,{NumberExamplesModule:()=>ce});var d=s(7280),c=s(3394),g=s(8474),_=s(2218),m=s(3191),e=s(5e3),h=s(9349),a=s(3075),l=s(2691),f=s(8929),C=s(7625),E=s(4152),x=s(9808),Q=s(9666);const q=["customLabel"],G=["nativeInput"];function X(n,i){if(1&n&&(e.TgZ(0,"div",12)(1,"label",13),e._uU(2),e.qZA()()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("for",t.inputId),e.xp6(1),e.hij(" ",t.label," ")}}function Y(n,i){if(1&n&&(e.TgZ(0,"div",14,15),e.Hsn(2,2),e.qZA()),2&n){const t=e.oxw();e.Q6J("id",t.ariaDescribedBy)}}const j=[[["nx-number-stepper-prefix"]],[["nx-number-stepper-suffix"]],"*"],K=["nx-number-stepper-prefix","nx-number-stepper-suffix","*"];let y=(()=>{class n{constructor(t,r,p){this._element=t,this._renderer=r,this._cdr=p,this._resize=!0,this.updateInputWidth=this.updateInputWidth.bind(this)}set resize(t){this._resize=(0,m.Ig)(t),this._resize?(this._addEventListener(),this.updateInputWidth()):this._removeEventListener()}get resize(){return this._resize}ngAfterViewInit(){this.resize&&this._addEventListener()}ngOnDestroy(){this._removeEventListener()}updateInputWidth(){const r=this._renderer.createElement("canvas").getContext("2d"),p=window.getComputedStyle(this._element.nativeElement);r.font=(0,_.N1)(p);const o=r.measureText(this._element.nativeElement.value),_e=this.sumStyles(p.paddingLeft,p.paddingRight),xe=this.sumStyles(p.borderLeftWidth,p.borderRightWidth),be=o.width+_e+xe+16,B=parseFloat(p.minWidth);this.width=Math.max(Number.isNaN(B)?0:B,be),this._cdr.markForCheck()}_addEventListener(){this._element.nativeElement.addEventListener("input",this.updateInputWidth,!0),this._element.nativeElement.addEventListener("change",this.updateInputWidth,!0)}_removeEventListener(){this._element.nativeElement.removeEventListener("input",this.updateInputWidth,!0),this._element.nativeElement.removeEventListener("change",this.updateInputWidth,!0)}sumStyles(t,r){return(parseInt(t,10)||0)+(parseInt(r,10)||0)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(e.sBO))},n.\u0275dir=e.lG2({type:n,selectors:[["input","nxAutoResize",""]],hostVars:2,hostBindings:function(t,r){2&t&&e.Udp("width",r.width,"px")},inputs:{resize:["nxAutoResize","resize"]}}),n})(),v=(()=>{class n{constructor(){this.changes=new f.xQ,this.decrementAriaLabel="Decrement",this.incrementAriaLabel="Increment"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();const H={big:"nx-stepper--big",normal:""},$=["nx-stepper"],ee=["nx-stepper__input"],te=new RegExp(/^-?\d+(\.\d+)?$/g),ne={provide:a.JU,useExisting:(0,e.Gpc)(()=>u),multi:!0},re={provide:a.Cf,useExisting:(0,e.Gpc)(()=>u),multi:!0};let ie=0,u=(()=>{class n extends h.$E{constructor(t,r,p,o){super(H,p,r,$),this._cdr=t,this._intl=o,this.inputClassNames=(0,_.ES)("regular",ee),this.inputId="nx-number-stepper-"+ie++,this.ariaDescribedBy=null,this.valueChange=new e.vpe,this._resize=!1,this._incrementAriaLabel="",this._decrementAriaLabel="",this._inputAriaLabel="",this._step=1,this._min=0,this._max=100,this._value=0,this._negative=!1,this._leadingZero=!0,this._disabled=!1,this._destroyed=new f.xQ,this.onChangeCallback=()=>{},this.onTouchedCallback=()=>{},this._intl.changes.pipe((0,C.R)(this._destroyed)).subscribe(()=>this._cdr.markForCheck())}set resize(t){this._resize=(0,m.Ig)(t),this._cdr.markForCheck()}get resize(){return this._resize}set label(t){this._label!==t&&(this._label=t,this._cdr.markForCheck())}get label(){return this._label}set incrementAriaLabel(t){this._incrementAriaLabel=t}get incrementAriaLabel(){return this._incrementAriaLabel}set decrementAriaLabel(t){this._decrementAriaLabel=t}get decrementAriaLabel(){return this._decrementAriaLabel}set inputAriaLabel(t){this._inputAriaLabel=t}get inputAriaLabel(){return this._inputAriaLabel}set step(t){this._step=Number(t)}get step(){return this._step}set min(t){this._min=Number(t)}get min(){return this._min}set max(t){this._max=Number(t)}get max(){return this._max}set value(t){this._value=t,this.setInputValue(this._value?this._value:0),this._cdr.markForCheck()}get value(){return this._value}set negative(t){this._negative!==t&&(this._negative=(0,m.Ig)(t),this._cdr.markForCheck())}get negative(){return this._negative}set leadingZero(t){this._leadingZero!==t&&(this._leadingZero=(0,m.Ig)(t),this.setInputValue(this.value),this._cdr.markForCheck())}get leadingZero(){return this._leadingZero}set disabled(t){this._disabled=(0,m.Ig)(t)}get disabled(){return this._disabled}ngAfterViewInit(){this.ngContentWrapper&&(this.ariaDescribedBy=this.ngContentWrapper.nativeElement.children.length>0?`label-for-${this.inputId}`:""),this.setInputValue(this._value)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}setInputValue(t){const r=t||0;this.numberInputValue=this.leadingZero?(0,_.vk)(r.toString(),2):r.toString(),this.nativeInput&&(this.nativeInput.nativeElement.value=this.numberInputValue),setTimeout(()=>{this.triggerResize()})}writeValue(t){this.value=t}registerOnChange(t){this.onChangeCallback=t}registerOnTouched(t){this.onTouchedCallback=t}setDisabledState(t){this._disabled=t,this._cdr.markForCheck()}onInputChange(t){this._value=this.validateUserInput(t.target.value)?Number(t.target.value):null,null!==this._value&&this.setInputValue(this._value),this.valueChange.emit(this._value),this.onChangeCallback(this._value)}validateUserInput(t){return!!t.match(te)}incrementOnClick(){this._increment(),this.onTouchedCallback()}incrementOnKey(t){this._increment(),t.preventDefault()}_increment(){let t;t=this.isBetweenLimits(this._value||0)?this.getNextGreaterValue(this._value||0):this.enforceLimits(this._value||0),this.value=t,this.setInputValue(this.value),this.valueChange.emit(this._value),this.onChangeCallback(this._value)}triggerResize(){this.resize&&(this.autoResize.updateInputWidth(),this._cdr.markForCheck())}decrementOnClick(){this._decrement(),this.onTouchedCallback()}decrementOnKey(t){this._decrement(),t.preventDefault()}_decrement(){let t;t=this.isBetweenLimits(this._value||0)?this.getNextLowerValue(this._value||0):this.enforceLimits(this._value||0),this.value=t,this.setInputValue(this.value),this.valueChange.emit(this._value),this.onChangeCallback(this._value)}enforceLimits(t){return t>this._max?this._max:t<this._min?this._min:t}getNextLowerValue(t){let r;return t||(t=0),r=this.isValidStep(t)?new l.Decimal(t).minus(new l.Decimal(this._step)).toNumber():new l.Decimal(t).toNearest(this._step,l.Decimal.ROUND_DOWN).toNumber(),this.enforceLimits(r)}getNextGreaterValue(t){let r;return t||(t=0),r=this.isValidStep(t)?new l.Decimal(t).plus(new l.Decimal(this._step)).toNumber():new l.Decimal(t).toNearest(this._step,l.Decimal.ROUND_UP).toNumber(),this.enforceLimits(r)}isBetweenLimits(t){return t<=this._max&&t>=this._min}isMinimum(){return this._value===this._min}isMaximum(){return this._value===this._max}isValidStep(t){null===t&&(t=new l.Decimal(0));const r=new l.Decimal(this._min),p=new l.Decimal(t),o=r.minus(p).mod(new l.Decimal(this._step)).toNumber();return!(!this.isBetweenLimits(t)||!this.isMinimum()&&!this.isMaximum()&&0!==o)}userInputToNumber(t){return parseInt(t,10)||0}_validateFn(){return this.isValidStep(this._value)?null===this._value?{nxNumberStepperFormatError:"Not a valid number"}:null:{nxNumberStepperStepError:"Value is not a valid step"}}validate(t){return this._validateFn()}get _buttonType(){return"secondary"+(this.negative?" negative":"")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO),e.Y36(e.Qsj),e.Y36(e.SBq),e.Y36(v))},n.\u0275cmp=e.Xpm({type:n,selectors:[["nx-number-stepper"]],viewQuery:function(t,r){if(1&t&&(e.Gf(q,5),e.Gf(y,7),e.Gf(G,5)),2&t){let p;e.iGM(p=e.CRH())&&(r.ngContentWrapper=p.first),e.iGM(p=e.CRH())&&(r.autoResize=p.first),e.iGM(p=e.CRH())&&(r.nativeInput=p.first)}},hostVars:4,hostBindings:function(t,r){2&t&&e.ekj("is-negative",r.negative)("is-disabled",r.disabled)},inputs:{classNames:["nxSize","classNames"],resize:["nxResize","resize"],label:["nxLabel","label"],incrementAriaLabel:"incrementAriaLabel",decrementAriaLabel:"decrementAriaLabel",inputAriaLabel:"inputAriaLabel",step:["nxStep","step"],min:["nxMin","min"],max:["nxMax","max"],value:["nxValue","value"],negative:"negative",leadingZero:"leadingZero",disabled:["nxDisabled","disabled"]},outputs:{valueChange:"nxValueChange"},features:[e._Bn([ne,re]),e.qOj],ngContentSelectors:K,decls:14,vars:14,consts:[["class","nx-stepper__label",4,"ngIf"],["class","nx-stepper__label",3,"id",4,"ngIf"],[1,"nx-stepper__input-container"],["type","button",1,"nx-stepper__down","nx-stepper__control",3,"nxButton","disabled","click"],["name","minus","size","s"],[1,"nx-stepper__input-wrapper"],[1,"nx-stepper__inner-wrapper"],["type","number","spellcheck","false",3,"nxAutoResize","id","ngClass","disabled","input","blur","keydown.arrowup","keydown.arrowdown"],["nativeInput",""],[1,"nx-stepper__input-underline"],["type","button",1,"nx-stepper__up","nx-stepper__control",3,"nxButton","disabled","click"],["name","plus","size","s"],[1,"nx-stepper__label"],[3,"for"],[1,"nx-stepper__label",3,"id"],["customLabel",""]],template:function(t,r){1&t&&(e.F$t(j),e.YNc(0,X,3,2,"div",0),e.YNc(1,Y,3,1,"div",1),e.TgZ(2,"div",2)(3,"button",3),e.NdJ("click",function(){return r.decrementOnClick()}),e._UZ(4,"nx-icon",4),e.qZA(),e.TgZ(5,"div",5)(6,"div",6),e.Hsn(7),e.TgZ(8,"input",7,8),e.NdJ("input",function(o){return r.onInputChange(o)})("blur",function(){return r.onTouchedCallback()})("keydown.arrowup",function(o){return r.incrementOnKey(o)})("keydown.arrowdown",function(o){return r.decrementOnKey(o)}),e.qZA(),e.Hsn(10,1),e.qZA(),e._UZ(11,"div",9),e.qZA(),e.TgZ(12,"button",10),e.NdJ("click",function(){return r.incrementOnClick()}),e._UZ(13,"nx-icon",11),e.qZA()()),2&t&&(e.Q6J("ngIf",r.label),e.xp6(1),e.Q6J("ngIf",!r.label),e.xp6(2),e.Q6J("nxButton",r._buttonType)("disabled",r.disabled||(r.value||0)<=r.min),e.uIk("aria-label",r.decrementAriaLabel||r._intl.decrementAriaLabel),e.xp6(5),e.Q6J("nxAutoResize",r.resize)("id",r.inputId)("ngClass",r.inputClassNames)("disabled",r.disabled),e.uIk("aria-describedby",r.ariaDescribedBy)("aria-label",r.inputAriaLabel),e.xp6(4),e.Q6J("nxButton",r._buttonType)("disabled",r.disabled||(r.value||0)>=r.max),e.uIk("aria-label",r.incrementAriaLabel||r._intl.incrementAriaLabel))},directives:[E.XV,c.O8,x.O5,y,x.mk],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, [_nghost-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}[_nghost-%COMP%]   input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}[_nghost-%COMP%]   input[type=number][_ngcontent-%COMP%]:invalid{box-shadow:none}[_nghost-%COMP%]   label[_ngcontent-%COMP%]:not(:empty) + .nx-stepper__input-container[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-stepper__label[_ngcontent-%COMP%]:not(:empty) + .nx-stepper__input-container[_ngcontent-%COMP%]{margin-top:12px}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{padding:0}.nx-stepper__input-container[_ngcontent-%COMP%]{align-items:flex-end;display:flex}.nx-stepper__label[_ngcontent-%COMP%]{display:flex;font-size:var(--number-stepper-label-font-size);line-height:var(--number-stepper-label-line-height);font-weight:var(--number-stepper-label-font-weight);letter-spacing:var(--number-stepper-label-letter-spacing)}.nx-stepper__control[_ngcontent-%COMP%]{width:32px;height:32px;min-height:32px;font-size:24px;margin:0;padding:0}.nx-stepper__input[_ngcontent-%COMP%]{width:56px;min-width:56px}.nx-stepper__input[_ngcontent-%COMP%]:disabled{color:var(--number-stepper-disabled-color);-webkit-text-fill-color:var(--number-stepper-disabled-color);cursor:not-allowed}.nx-stepper__input[_ngcontent-%COMP%],   .nx-stepper__prefix,   .nx-stepper__suffix{font-size:var(--number-stepper-small-font-size);line-height:var(--number-stepper-small-line-height);font-weight:var(--number-stepper-small-font-weight);letter-spacing:var(--number-stepper-small-letter-spacing);color:var(--number-stepper-color);background:0 0;outline:0;border:0;text-align:center}  .nx-stepper__suffix{margin-left:4px}[dir=rtl][_nghost-%COMP%]     .nx-stepper__suffix, [dir=rtl]   [_nghost-%COMP%]     .nx-stepper__suffix{margin-left:0;margin-left:initial;margin-right:4px}  .nx-stepper__prefix{margin-right:4px}[dir=rtl][_nghost-%COMP%]     .nx-stepper__prefix, [dir=rtl]   [_nghost-%COMP%]     .nx-stepper__prefix{margin-right:0;margin-right:initial;margin-left:4px}.nx-stepper__input-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;margin:0 16px}.nx-stepper__inner-wrapper[_ngcontent-%COMP%]{height:28px;display:flex;align-items:baseline}.nx-stepper__input-underline[_ngcontent-%COMP%]{width:100%;margin-top:2px;height:2px;background:var(--number-stepper-underline-color)}.nx-stepper__input-underline--disabled[_ngcontent-%COMP%]{background:var(--number-stepper-disabled-underline-color)}.nx-stepper--big[_nghost-%COMP%]   .nx-stepper__control[_ngcontent-%COMP%]{width:72px;min-height:48px;margin-bottom:0}.nx-stepper--big[_nghost-%COMP%]   .nx-stepper__input[_ngcontent-%COMP%]{width:72px;min-width:72px}.nx-stepper--big[_nghost-%COMP%]   .nx-stepper__input[_ngcontent-%COMP%], .nx-stepper--big[_nghost-%COMP%]     .nx-stepper__prefix, .nx-stepper--big[_nghost-%COMP%]     .nx-stepper__suffix{font-size:var(--number-stepper-large-font-size);line-height:var(--number-stepper-large-line-height);font-weight:var(--number-stepper-large-font-weight);letter-spacing:var(--number-stepper-large-letter-spacing);height:48px;padding:0;margin-bottom:0}.nx-stepper--big[_nghost-%COMP%]   .nx-stepper__input-wrapper[_ngcontent-%COMP%]{margin:0 24px}.nx-stepper--big[_nghost-%COMP%]   .nx-stepper__input-underline[_ngcontent-%COMP%]{margin-top:-nx-spacer(4xs)}.nx-stepper--big[_nghost-%COMP%]   .nx-stepper__inner-wrapper[_ngcontent-%COMP%]{height:48px}.is-negative[_nghost-%COMP%]   .nx-stepper__label[_ngcontent-%COMP%], .is-negative[_nghost-%COMP%]     .nx-stepper__prefix, .is-negative[_nghost-%COMP%]     .nx-stepper__suffix{color:var(--negative)}.is-negative[_nghost-%COMP%]   .nx-stepper__input[_ngcontent-%COMP%]{color:var(--negative)}.is-negative[_nghost-%COMP%]   .nx-stepper__input-underline[_ngcontent-%COMP%]{background:var(--negative)}.is-disabled[_nghost-%COMP%]   .nx-stepper__input-underline[_ngcontent-%COMP%]{background:var(--number-stepper-disabled-underline-color)}.is-disabled[_nghost-%COMP%]     .nx-stepper__prefix, .is-disabled[_nghost-%COMP%]     .nx-stepper__suffix{color:var(--number-stepper-disabled-color)}@media screen and (-ms-high-contrast: active){button.nx-stepper__control[_ngcontent-%COMP%]:disabled{border-color:GrayText;color:GrayText;opacity:1}.nx-stepper__input[_ngcontent-%COMP%]{color:buttonText}.nx-stepper__input[_ngcontent-%COMP%]:disabled{color:GrayText;-webkit-text-fill-color:GrayText}  .nx-stepper__prefix,   .nx-stepper__suffix, .nx-stepper--big[_nghost-%COMP%]     .nx-stepper__prefix, .nx-stepper--big[_nghost-%COMP%]     .nx-stepper__suffix{-ms-high-contrast-adjust:none;color:windowText}.nx-stepper__inner-wrapper[_ngcontent-%COMP%]{background:buttonFace}.nx-stepper__input-underline[_ngcontent-%COMP%], .is-negative[_nghost-%COMP%]   .nx-stepper__input-underline[_ngcontent-%COMP%]{background:buttonText}.is-disabled[_nghost-%COMP%]   .nx-stepper__input-underline[_ngcontent-%COMP%]{background:GrayText}.is-disabled[_nghost-%COMP%]     .nx-stepper__prefix, .is-disabled[_nghost-%COMP%]     .nx-stepper__suffix{color:GrayText}}"],changeDetection:0}),n})(),N=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.lG2({type:n,selectors:[["nx-number-stepper-prefix"]],hostAttrs:[1,"nx-stepper__prefix"]}),n})(),S=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.lG2({type:n,selectors:[["nx-number-stepper-suffix"]],hostAttrs:[1,"nx-stepper__suffix"]}),n})(),pe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[v],imports:[[Q.ZI,a.u5,c.cf,E.ru,x.ez]]}),n})();var M=s(3988),se=s(9508);let A=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["number-stepper-a11y-example"]],decls:3,vars:0,consts:[["inputAriaLabel","Number of travellers","incrementAriaLabel","Increase number of travellers","decrementAriaLabel","Decrease number of travellers"]],template:function(t,r){1&t&&(e.TgZ(0,"nx-number-stepper",0)(1,"label"),e._uU(2,"Number of travellers"),e.qZA()())},directives:[u],styles:[""]}),n})(),O=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["number-stepper-additions-example"]],decls:7,vars:0,consts:[["nxResize","true","leadingZero","false","inputAriaLabel","Sum of Expenses"],["nxSize","big","nxResize","true","leadingZero","false","inputAriaLabel","Sum of Expenses"]],template:function(t,r){1&t&&(e.TgZ(0,"nx-number-stepper",0)(1,"nx-number-stepper-suffix"),e._uU(2,"$"),e.qZA()(),e._UZ(3,"br"),e.TgZ(4,"nx-number-stepper",1)(5,"nx-number-stepper-prefix"),e._uU(6,"\u20ac"),e.qZA()())},directives:[u,S,N],styles:[""]}),n})(),T=(()=>{class n{constructor(){this.number=1e3}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["number-stepper-auto-resizing-example"]],decls:3,vars:1,consts:[["nxResize","true","nxSize","big","nxStep","1000","nxMax","10000000","inputAriaLabel","Number of Kilometers",3,"ngModel","ngModelChange"],["nxResize","true","nxSize","big","nxStep","0.03","nxMin","0.06","inputAriaLabel","Distance in Meters"]],template:function(t,r){1&t&&(e.TgZ(0,"nx-number-stepper",0),e.NdJ("ngModelChange",function(o){return r.number=o}),e.qZA(),e._UZ(1,"br")(2,"nx-number-stepper",1)),2&t&&e.Q6J("ngModel",r.number)},directives:[u,a.JJ,a.On],styles:[""]}),n})(),L=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["number-stepper-custom-label-example"]],decls:9,vars:1,consts:[["nxSize","big","name","testStepper","inputAriaLabel","Number of travellers"],["nxPopoverTrigger","hover","name","info-circle-o","size","s",1,"info-icon","nx-margin-left-2xs",3,"nxPopoverTriggerFor"],["popoverHover",""]],template:function(t,r){if(1&t&&(e.TgZ(0,"nx-number-stepper",0)(1,"label"),e._uU(2,"Number of travellers"),e.qZA(),e._UZ(3,"nx-icon",1),e.qZA(),e.TgZ(4,"nx-popover",null,2)(6,"div")(7,"span"),e._uU(8,"Custom help text as popover"),e.qZA()()()),2&t){const p=e.MAs(5);e.xp6(3),e.Q6J("nxPopoverTriggerFor",p)}},directives:[u,c.O8,M.XO,M.NE],styles:[".info-icon[_ngcontent-%COMP%]{align-self:center}"]}),n})(),z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["number-stepper-disabled-explicit-example"]],decls:7,vars:2,consts:[["nxSize","big","inputAriaLabel","Sum of Expenses",3,"nxDisabled"],["nxSize","normal","inputAriaLabel","Sum of Expenses",3,"nxDisabled"]],template:function(t,r){1&t&&(e.TgZ(0,"nx-number-stepper",0)(1,"nx-number-stepper-suffix"),e._uU(2,"$"),e.qZA()(),e._UZ(3,"br"),e.TgZ(4,"nx-number-stepper",1)(5,"nx-number-stepper-prefix"),e._uU(6,"\u20ac"),e.qZA()()),2&t&&(e.Q6J("nxDisabled",!0),e.xp6(4),e.Q6J("nxDisabled",!0))},directives:[u,S,N],styles:[""]}),n})(),P=(()=>{class n{constructor(){this.fb=new a.cw({amount:new a.NI({value:"",disabled:!0})})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["number-stepper-disabled-implicit-example"]],decls:8,vars:1,consts:[[3,"formGroup"],["formControlName","amount","nxSize","big","inputAriaLabel","Sum of Expenses"],["formControlName","amount","nxSize","normal","inputAriaLabel","Sum of Expenses"]],template:function(t,r){1&t&&(e.TgZ(0,"form",0)(1,"nx-number-stepper",1)(2,"nx-number-stepper-suffix"),e._uU(3,"$"),e.qZA()(),e._UZ(4,"br"),e.TgZ(5,"nx-number-stepper",2)(6,"nx-number-stepper-prefix"),e._uU(7,"\u20ac"),e.qZA()()()),2&t&&e.Q6J("formGroup",r.fb)},directives:[a._Y,a.JL,a.sg,u,a.JJ,a.u,S,N],styles:[""]}),n})(),Z=(()=>{class n{constructor(){this.number=0}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["number-stepper-floating-point-example"]],decls:3,vars:0,consts:[["nxSize","big","nxStep","0.5","nxMin","0.5","inputAriaLabel","Distance in meters"],["nxSize","big","nxStep","0.03","nxMin","0.06","inputAriaLabel","Distance in meters"]],template:function(t,r){1&t&&e._UZ(0,"nx-number-stepper",0)(1,"br")(2,"nx-number-stepper",1)},directives:[u],styles:[""]}),n})();var ae=s(7294);let w=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["number-stepper-formatting-example"]],decls:7,vars:0,consts:[["nxCopytext","large",1,"label"],["nxSize","normal","inputAriaLabel","Number of travellers"],["nxSize","normal","leadingZero","false","inputAriaLabel","Number of travellers"]],template:function(t,r){1&t&&(e.TgZ(0,"p",0),e._uU(1,"With leading zero:"),e.qZA(),e._UZ(2,"nx-number-stepper",1)(3,"br"),e.TgZ(4,"p",0),e._uU(5,"Without leading zero:"),e.qZA(),e._UZ(6,"nx-number-stepper",2))},directives:[ae.v,u],styles:[".label[_ngcontent-%COMP%]{margin-bottom:8px}"]}),n})(),le=(()=>{class n extends v{constructor(){super(...arguments),this.decrementAriaLabel="verringern",this.incrementAriaLabel="erh\xf6hen"}}return n.\u0275fac=function(){let i;return function(r){return(i||(i=e.n5z(n)))(r||n)}}(),n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),D=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["number-stepper-localize-example"]],features:[e._Bn([{provide:v,useClass:le}])],decls:1,vars:0,template:function(t,r){1&t&&e._UZ(0,"nx-number-stepper")},directives:[u],styles:[""]}),n})(),I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["number-stepper-negative-example"]],decls:3,vars:0,consts:[[1,"docs-inverse-container"],["nxSize","big","negative","true","nxLabel","Number of travellers",1,"nx-margin-bottom-s"],["nxSize","normal","negative","true","nxLabel","Number of travellers"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"nx-number-stepper",1)(2,"nx-number-stepper",2),e.qZA())},directives:[u],styles:[""]}),n})(),F=(()=>{class n{constructor(t){this.fb=t,this.testForm=this.fb.group({stepperTestReactive:3})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["number-stepper-reactive-example"]],decls:10,vars:11,consts:[[3,"formGroup"],["nxLabel","Number of travellers","nxSize","big","formControlName","stepperTestReactive",3,"nxStep","nxMin","nxMax"]],template:function(t,r){1&t&&(e.TgZ(0,"form",0),e._UZ(1,"nx-number-stepper",1),e.TgZ(2,"p"),e._uU(3),e.ALo(4,"json"),e.qZA(),e.TgZ(5,"p"),e._uU(6),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.ALo(9,"json"),e.qZA()()),2&t&&(e.Q6J("formGroup",r.testForm),e.xp6(1),e.Q6J("nxStep",1)("nxMin",-3)("nxMax",20),e.xp6(2),e.hij("Form value: ",e.lcZ(4,7,r.testForm.value),""),e.xp6(3),e.hij("Form status: ",r.testForm.status,""),e.xp6(2),e.hij(" Form errors: ",e.lcZ(9,9,r.testForm.controls.stepperTestReactive.errors)," "))},directives:[a._Y,a.JL,a.sg,u,a.JJ,a.u],pipes:[x.Ts],styles:[""]}),n})(),U=(()=>{class n{constructor(){this.number=1}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["number-stepper-simple-binding-example"]],decls:3,vars:2,consts:[["nxSize","big","nxStep","2","inputAriaLabel","Number of travellers",3,"nxValue","nxValueChange"]],template:function(t,r){1&t&&(e.TgZ(0,"nx-number-stepper",0),e.NdJ("nxValueChange",function(o){return r.number=o}),e.qZA(),e.TgZ(1,"p"),e._uU(2),e.qZA()),2&t&&(e.Q6J("nxValue",r.number),e.xp6(2),e.hij("Value is: ",r.number,""))},directives:[u],styles:[""]}),n})(),V=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["number-stepper-sizes-example"]],decls:3,vars:0,consts:[["nxSize","big","inputAriaLabel","Number of travellers"],["nxSize","normal","inputAriaLabel","Number of travellers"]],template:function(t,r){1&t&&e._UZ(0,"nx-number-stepper",0)(1,"br")(2,"nx-number-stepper",1)},directives:[u],styles:[""]}),n})(),k=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["number-stepper-standalone-example"]],decls:1,vars:0,consts:[["nxLabel","Number of travellers","nxSize","big","name","testStepper"]],template:function(t,r){1&t&&e._UZ(0,"nx-number-stepper",0)},directives:[u],styles:[""]}),n})(),R=(()=>{class n{constructor(){this.number=3}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["number-stepper-template-driven-example"]],decls:4,vars:2,consts:[["nxLabel","Number of travellers","nxSize","big","name","testStepper",3,"ngModel","ngModelChange"]],template:function(t,r){1&t&&(e.TgZ(0,"form")(1,"nx-number-stepper",0),e.NdJ("ngModelChange",function(o){return r.number=o}),e.qZA(),e.TgZ(2,"p"),e._uU(3),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("ngModel",r.number),e.xp6(2),e.hij("Current value: ",r.number,""))},directives:[a._Y,a.JL,a.F,u,a.JJ,a.On],styles:[""]}),n})();function oe(n,i){1&n&&(e.TgZ(0,"nx-message",4),e._uU(1," This is a hint. This message will disappear once you get an error from parsing or when the input is missing altogether.\n"),e.qZA())}function ue(n,i){1&n&&(e.TgZ(0,"nx-error",5),e._uU(1," That's not a valid step\n"),e.qZA())}function me(n,i){1&n&&(e.TgZ(0,"nx-error",5),e._uU(1," That's not a valid number\n"),e.qZA())}let J=(()=>{class n{constructor(){this.number=0}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["number-stepper-validation-example"]],decls:5,vars:4,consts:[["nxSize","big","nxStep","2","inputAriaLabel","Number of travellers",3,"ngModel","ngModelChange"],["stepperValidModel","ngModel"],["nxContext","info","class","nx-margin-top-xs",4,"ngIf"],["class","nx-margin-top-xs",4,"ngIf"],["nxContext","info",1,"nx-margin-top-xs"],[1,"nx-margin-top-xs"]],template:function(t,r){if(1&t&&(e.TgZ(0,"nx-number-stepper",0,1),e.NdJ("ngModelChange",function(o){return r.number=o}),e.qZA(),e.YNc(2,oe,2,0,"nx-message",2),e.YNc(3,ue,2,0,"nx-error",3),e.YNc(4,me,2,0,"nx-error",3)),2&t){const p=e.MAs(1);e.Q6J("ngModel",r.number),e.xp6(2),e.Q6J("ngIf",!p.errors),e.xp6(1),e.Q6J("ngIf",p.errors&&p.errors.nxNumberStepperStepError),e.xp6(1),e.Q6J("ngIf",p.errors&&p.errors.nxNumberStepperFormatError)}},directives:[u,a.JJ,a.On,x.O5,g.wM,d.vV],styles:[""]}),n})(),ce=(()=>{class n{static components(){return{"number-stepper-a11y":A,"number-stepper-additions":O,"number-stepper-auto-resizing":T,"number-stepper-custom-label":L,"number-stepper-disabled-explicit":z,"number-stepper-disabled-implicit":P,"number-stepper-floating-point":Z,"number-stepper-formatting":w,"number-stepper-localize":D,"number-stepper-negative":I,"number-stepper-reactive":F,"number-stepper-simple-binding":U,"number-stepper-sizes":V,"number-stepper-standalone":k,"number-stepper-template-driven":R,"number-stepper-validation":J}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[pe,c.cf,M.Fc,d.$N,g.Ee,se.f]]}),n})()}}]);