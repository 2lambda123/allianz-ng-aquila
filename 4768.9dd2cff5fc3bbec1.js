"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[4768],{4768:(w,M,l)=>{l.r(M),l.d(M,{CodeExamplesModule:()=>T});var p=l(7823),E=l(1281),d=l(9521),e=l(4650),i=l(4006),Z=l(8929),F=l(5260),u=l(6895);function A(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"input",1),e.NdJ("ngModelChange",function(s){const c=e.CHM(t).index,N=e.oxw();return e.KtG(N._keyCode[c]=s)})("input",function(s){e.CHM(t);const a=e.oxw();return e.KtG(a._selectNextInput(s))})("paste",function(s){e.CHM(t);const a=e.oxw();return e.KtG(a._pasteClipboard(s))})("blur",function(){e.CHM(t);const s=e.oxw();return e.KtG(s._onBlur())})("focus",function(){e.CHM(t);const s=e.oxw();return e.KtG(s._setFocusState())})("click",function(s){e.CHM(t);const a=e.oxw();return e.KtG(a._selectText(s))})("keydown",function(s){e.CHM(t);const a=e.oxw();return e.KtG(a._keydownAction(s))}),e.qZA()}if(2&n){const t=r.index,o=e.oxw();e.Q6J("ngModel",o._keyCode[t])("ngClass",o._inputGap(t)),e.uIk("aria-label",o.getAriaLabel(t))("type",o.type)("tabindex",o.tabindex)("disabled",o.disabled?"":null)}}let x=(()=>{class n{constructor(){this.changes=new Z.xQ,this.inputFieldAriaLabel="Enter Key",this.ofLabel="of"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();const O="INPUT";let _=(()=>{class n{constructor(t,o,s,a,c,N,_e){this._cdr=t,this._el=o,this._control=s,this._intl=a,this._errorStateMatcher=c,this._parentForm=N,this._parentFormGroup=_e,this.errorState=!1,this._codeLength=6,this._type="text",this._tabindex=0,this._keyCode=new Array(6),this._focused=!1,this._negative=!1,this._disabled=!1,this._isUpDown=!1,this.propagateChange=me=>{},this.propagateTouch=me=>{},this._control&&(this._control.valueAccessor=this)}set codeLength(t){this._codeLength=t,this.setInputLength(),this._cdr.markForCheck()}get codeLength(){return this._codeLength}set type(t){this._type=t,this._cdr.markForCheck()}get type(){return this._type}set tabindex(t){this._tabindex=t,this._cdr.markForCheck()}get tabindex(){return this._tabindex}set convertTo(t){this._convertTo=t,this._cdr.markForCheck()}get convertTo(){return this._convertTo}set negative(t){const o=(0,E.Ig)(t);this._negative!==o&&(this._negative=o,this._cdr.markForCheck())}get negative(){return this._negative}set disabled(t){const o=(0,E.Ig)(t);this._disabled!==o&&(this._disabled=o,this._cdr.markForCheck())}get disabled(){return this._disabled}ngDoCheck(){this._control&&this.updateErrorState()}setInputLength(){this._keyCode=new Array(this.codeLength?this.codeLength:6)}_convertLetterSize(t){return"\xdf"===t?t:"string"==typeof t?"upper"===this.convertTo?t.toUpperCase():"lower"===this.convertTo?t.toLowerCase():t:void 0}_keydownAction(t){const o=t.target,s=o.previousElementSibling,a=o.nextElementSibling;switch(t.keyCode){case d.L_:return!1;case d.ZH:""===o.value&&s&&s.tagName===O&&this.selectInput(s);break;case d.oh:s&&s.tagName===O&&(t.preventDefault(),this.selectInput(s));break;case d.SV:a&&a.tagName===O&&this.selectInput(a),t.preventDefault();break;case d.JH:this._isUpDown=!0,"number"===this._type&&(""===o.value||"0"===o.value)&&t.preventDefault();break;case d.LH:this._isUpDown=!0,"number"===this._type&&"9"===o.value&&t.preventDefault()}}_selectText(t){this.selectInput(t.target)}_selectNextInput(t){const o=t.target;o.value=this._convertLetterSize(o.value.slice(0,1));const s=Number(this._getFocusedInputIndex(t));if(this._keyCode[s]=o.value,this.propagateChange(this._keyCode.join("")),o.value&&(!this._isUpDown||"number"!==this.type)){const c=o.nextSibling;null!==c&&c.tagName===O&&(c.focus(),""!==c.value&&this.selectInput(c))}this._isUpDown=!1}_pasteClipboard(t){let o=(t.clipboardData||window.clipboardData).getData("text"),s=0;const a=Number(this._getFocusedInputIndex(t));o="number"===this.type?this._formatNumberInput(o):o;for(let c=a;c<this.codeLength;c++)this._keyCode[c]=this._convertLetterSize(o[s]),s++;this.propagateChange(this._keyCode.join("")),a+o.length<this.codeLength?this._el.nativeElement.children.item(a+o.length).focus():this._el.nativeElement.children.item(this.codeLength-1).focus(),t.preventDefault()}_getFocusedInputIndex(t){let o;for(let s=0;s<this._el.nativeElement.children.length;s++)t.srcElement===this._el.nativeElement.children.item(s)&&(o=s);return o}_formatNumberInput(t){let o="";for(let s=0;s<t.length;s++)t[s].match(/\d$/)&&(o+=t[s]);return o}_onBlur(){this._focused=!1,setTimeout(()=>{this._focused||this.propagateTouch(this._keyCode.join("")),this._cdr.markForCheck()})}_setFocusState(){this._focused=!0}setDisabledState(t){this.disabled=t,this._cdr.markForCheck()}writeValue(t){if(t){const o=t.split("").slice(0,this.codeLength);for(let s=0;s<this.codeLength;s++)this._keyCode[s]=o[s]}else this.setInputLength();this._cdr.markForCheck()}_trackByKeyCode(t,o){return t}_inputGap(t){switch(this.codeLength){case 4:case 6:case 8:return t===this.codeLength/2?"nx-code-input--field-with-gap":"";default:return""}}registerOnChange(t){this.propagateChange=t}registerOnTouched(t){this.propagateTouch=t}updateErrorState(){const t=this.errorState,a=this._errorStateMatcher.isErrorState(this._control?this._control.control:null,this._parentFormGroup||this._parentForm);a!==t&&(this.errorState=a)}getAriaLabel(t){return`${this._intl.inputFieldAriaLabel} ${t+1} ${this._intl.ofLabel} ${this._keyCode.length}`}selectInput(t){t.focus();try{t.setSelectionRange(0,t.value.length)}catch(o){if(!(o instanceof DOMException&&"InvalidStateError"===o.name))throw o}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO),e.Y36(e.SBq),e.Y36(i.a5,10),e.Y36(x),e.Y36(F.rD),e.Y36(i.F,8),e.Y36(i.sg,8))},n.\u0275cmp=e.Xpm({type:n,selectors:[["nx-code-input"]],hostVars:9,hostBindings:function(t,o){2&t&&(e.uIk("tabindex",-1),e.ekj("nx-code-input",!0)("has-error",o.errorState)("is-negative",o.negative)("is-disabled",o.disabled))},inputs:{codeLength:["length","codeLength"],type:"type",tabindex:"tabindex",convertTo:["nxConvertTo","convertTo"],negative:"negative",disabled:"disabled"},decls:1,vars:2,consts:[["class","nx-code-input__field","maxlength","1",3,"ngModel","ngClass","ngModelChange","input","paste","blur","focus","click","keydown",4,"ngFor","ngForOf","ngForTrackBy"],["maxlength","1",1,"nx-code-input__field",3,"ngModel","ngClass","ngModelChange","input","paste","blur","focus","click","keydown"]],template:function(t,o){1&t&&e.YNc(0,A,1,6,"input",0),2&t&&e.Q6J("ngForOf",o._keyCode)("ngForTrackBy",o._trackByKeyCode)},dependencies:[u.mk,u.sg,i.Fj,i.JJ,i.nD,i.On],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{font-size:var(--code-input-font-size);line-height:var(--code-input-line-height);font-weight:var(--code-input-font-weight);letter-spacing:var(--code-input-letter-spacing);color:var(--code-input-color);margin:0 4px;text-align:center;border:0;outline:0;caret-color:var(--code-input-active-color);box-shadow:inset 0 -1px 0 0 var(--code-input-color);-webkit-appearance:none;width:32px;border-radius:0;padding:0;background:transparent;box-sizing:border-box}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:focus{margin-bottom:-nx-border-size(xs);color:var(--code-input-active-color);box-shadow:inset 0 -2px 0 0 var(--code-input-active-color)}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:first-child{margin-left:0}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:last-child{margin-right:0}[_nghost-%COMP%]   .nx-code-input--field-with-gap[_ngcontent-%COMP%]{margin-left:20px}[_nghost-%COMP%]:focus{outline:none}[dir=rtl]   [_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:first-child{margin-right:0;margin-left:4px}[dir=rtl]   [_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:last-child{margin-left:0;margin-right:4px}[dir=rtl]   [_nghost-%COMP%]   .nx-code-input--field-with-gap[_ngcontent-%COMP%]{margin-left:4px;margin-right:20px}.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{caret-color:var(--negative);box-shadow:inset 0 -1px 0 0 var(--negative);color:var(--negative)}.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:focus{box-shadow:inset 0 -2px 0 0 var(--negative)}.has-error[_nghost-%COMP%]:not(.is-negative)   .nx-code-input__field[_ngcontent-%COMP%]{margin-bottom:-nx-border-size(xs);font-weight:700;color:var(--code-input-error-color);box-shadow:inset 0 -1px 0 0 var(--code-input-error-color)}.has-error[_nghost-%COMP%]:not(.is-negative)   .nx-code-input__field[_ngcontent-%COMP%]:focus{box-shadow:inset 0 -2px 0 0 var(--code-input-error-color)}.has-error.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{font-weight:700}.is-disabled[_nghost-%COMP%]{cursor:not-allowed}.is-disabled[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{cursor:not-allowed;color:var(--code-input-disabled-color);box-shadow:inset 0 -1px 0 0 nx-theme-color(code-input-disabled-color);box-shadow:inset 0 -1px 0 0 var(--code-input-disabled-color)}.is-disabled.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{color:var(--negative-02-dimmed);box-shadow:inset 0 -1px 0 0 var(--negative-02-dimmed)}input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%], .nx-code-input__field[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}@media screen and (forced-colors: active){.nx-code-input__field[_ngcontent-%COMP%]{border-bottom:1px solid buttonText!important}.nx-code-input__field[_ngcontent-%COMP%]:focus{border-bottom:2px solid highlight!important}.is-disabled[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{border-bottom:1px solid GrayText!important}}@media screen and (-ms-high-contrast: active){.nx-code-input__field[_ngcontent-%COMP%]{box-shadow:inset 0 -1px 0 0 buttonText}.nx-code-input__field[_ngcontent-%COMP%]:focus{box-shadow:inset 0 -2px 0 0 buttonText}.is-disabled[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{color:GrayText;box-shadow:inset 0 -1px 0 0 GrayText;opacity:1}}"],changeDetection:0}),n})(),S=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[x],imports:[u.ez,i.u5,i.UX]}),n})();var q=l(9508),m=l(690);function D(n,r){1&n&&(e.TgZ(0,"nx-error",9),e._uU(1," Entry is required. "),e.qZA())}function Q(n,r){1&n&&(e.TgZ(0,"nx-error",9),e._uU(1," Entry must match pattern. "),e.qZA())}function Y(n,r){1&n&&(e.TgZ(0,"nx-error",9),e._uU(1," Entry is too short. "),e.qZA())}function G(n,r){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,D,2,0,"nx-error",8),e.YNc(2,Q,2,0,"nx-error",8),e.YNc(3,Y,2,0,"nx-error",8),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.keyCode?null:t.keyCode.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==t.keyCode?null:t.keyCode.hasError("pattern")),e.xp6(1),e.Q6J("ngIf",null==t.keyCode?null:t.keyCode.hasError("minlength"))}}class C{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.nJ({keyCode:new i.p4({value:this.inputValue,disabled:!0},{validators:[i.kI.required,i.kI.pattern("[A-Z]+"),i.kI.minLength(4)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}toggleDisabled(){var r,t;null!==(r=this.keyCode)&&void 0!==r&&r.disabled?this.keyCode.enable():null===(t=this.keyCode)||void 0===t||t.disable()}}function B(n,r){1&n&&(e.TgZ(0,"nx-error",8),e._uU(1," Entry is required. "),e.qZA())}function V(n,r){1&n&&(e.TgZ(0,"nx-error",8),e._uU(1," Entry must match pattern. "),e.qZA())}function K(n,r){1&n&&(e.TgZ(0,"nx-error",8),e._uU(1," Entry is too short. "),e.qZA())}function z(n,r){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,B,2,0,"nx-error",7),e.YNc(2,V,2,0,"nx-error",7),e.YNc(3,K,2,0,"nx-error",7),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.keyCode?null:t.keyCode.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==t.keyCode?null:t.keyCode.hasError("pattern")),e.xp6(1),e.Q6J("ngIf",null==t.keyCode?null:t.keyCode.hasError("minlength"))}}C.\u0275fac=function(r){return new(r||C)},C.\u0275cmp=e.Xpm({type:C,selectors:[["code-input-disabled-example"]],decls:13,vars:4,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["nxButton","primary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(r,t){if(1&r){const o=e.EpF();e.TgZ(0,"form",0,1),e._UZ(2,"nx-code-input",2,3),e.YNc(4,G,4,3,"div",4),e.TgZ(5,"p"),e._uU(6),e.qZA(),e.TgZ(7,"button",5),e._uU(8,"Submit"),e.qZA(),e.TgZ(9,"button",6),e.NdJ("click",function(){e.CHM(o);const a=e.MAs(1);return e.KtG(a.resetForm())}),e._uU(10," Clear "),e.qZA(),e.TgZ(11,"button",7),e.NdJ("click",function(){return t.toggleDisabled()}),e._uU(12," Toggle disabled "),e.qZA()()}if(2&r){const o=e.MAs(3);e.Q6J("formGroup",t.codeForm),e.xp6(2),e.Q6J("length",4),e.xp6(2),e.Q6J("ngIf",o.errorState),e.xp6(2),e.hij("Disabled: ",null==t.keyCode?null:t.keyCode.disabled,"")}},dependencies:[_,p.vV,u.O5,i._Y,i.JJ,i.JL,i.sg,i.u,m.XV],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]});class h{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.nJ({keyCode:new i.p4(this.inputValue,{validators:[i.kI.required,i.kI.pattern("[A-Z]+"),i.kI.minLength(4)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}}function X(n,r){1&n&&(e.TgZ(0,"nx-error",8),e._uU(1," Entry is required. "),e.qZA())}function H(n,r){1&n&&(e.TgZ(0,"nx-error",8),e._uU(1," Entry must match pattern. "),e.qZA())}function j(n,r){1&n&&(e.TgZ(0,"nx-error",8),e._uU(1," Entry is too short. "),e.qZA())}function R(n,r){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,X,2,0,"nx-error",7),e.YNc(2,H,2,0,"nx-error",7),e.YNc(3,j,2,0,"nx-error",7),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.keyCode?null:t.keyCode.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==t.keyCode?null:t.keyCode.hasError("pattern")),e.xp6(1),e.Q6J("ngIf",null==t.keyCode?null:t.keyCode.hasError("minlength"))}}h.\u0275fac=function(r){return new(r||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["code-input-four-char-example"]],decls:10,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(r,t){if(1&r){const o=e.EpF();e.TgZ(0,"form",0,1),e._UZ(2,"nx-code-input",2,3),e.YNc(4,z,4,3,"div",4),e._UZ(5,"br"),e.TgZ(6,"button",5),e._uU(7,"Submit"),e.qZA(),e.TgZ(8,"button",6),e.NdJ("click",function(){e.CHM(o);const a=e.MAs(1);return e.KtG(a.resetForm())}),e._uU(9," Clear "),e.qZA()()}if(2&r){const o=e.MAs(3);e.Q6J("formGroup",t.codeForm),e.xp6(2),e.Q6J("length",4),e.xp6(2),e.Q6J("ngIf",o.errorState)}},dependencies:[_,p.vV,u.O5,i._Y,i.JJ,i.JL,i.sg,i.u,m.XV],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]});class g extends x{constructor(){super(...arguments),this.inputFieldAriaLabel="Key eingeben",this.ofLabel="von"}}g.\u0275fac=function(){let n;return function(t){return(n||(n=e.n5z(g)))(t||g)}}(),g.\u0275prov=e.Yz7({token:g,factory:g.\u0275fac});class f{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.nJ({keyCode:new i.p4(this.inputValue,{validators:[i.kI.required,i.kI.pattern("[A-Z]+"),i.kI.minLength(5)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}}f.\u0275fac=function(r){return new(r||f)},f.\u0275cmp=e.Xpm({type:f,selectors:[["code-input-localize-example"]],features:[e._Bn([{provide:x,useClass:g}])],decls:10,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(r,t){if(1&r){const o=e.EpF();e.TgZ(0,"form",0,1),e._UZ(2,"nx-code-input",2,3),e.YNc(4,R,4,3,"div",4),e._UZ(5,"br"),e.TgZ(6,"button",5),e._uU(7,"Submit"),e.qZA(),e.TgZ(8,"button",6),e.NdJ("click",function(){e.CHM(o);const a=e.MAs(1);return e.KtG(a.resetForm())}),e._uU(9," Clear "),e.qZA()()}if(2&r){const o=e.MAs(3);e.Q6J("formGroup",t.codeForm),e.xp6(2),e.Q6J("length",5),e.xp6(2),e.Q6J("ngIf",o.errorState)}},dependencies:[_,p.vV,u.O5,i._Y,i.JJ,i.JL,i.sg,i.u,m.XV],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]});var W=l(7625);function $(n,r){1&n&&(e.TgZ(0,"nx-error",8),e._uU(1," Entry is required. "),e.qZA())}function ee(n,r){1&n&&(e.TgZ(0,"nx-error",8),e._uU(1," Entry is too short. "),e.qZA())}function te(n,r){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,$,2,0,"nx-error",7),e.YNc(2,ee,2,0,"nx-error",7),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.keyCode?null:t.keyCode.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==t.keyCode?null:t.keyCode.hasError("minlength"))}}class y{constructor(){this.inputValue="",this.codeForm=new i.nJ({keyCode:new i.p4(this.inputValue,{validators:[i.kI.required,i.kI.minLength(4)],updateOn:"change"})}),this._destroyed=new Z.xQ}get keyCode(){return this.codeForm.get("keyCode")}ngOnInit(){var r;null===(r=this.keyCode)||void 0===r||r.valueChanges.pipe((0,W.R)(this._destroyed)).subscribe(()=>{var t;null!==(t=this.keyCode)&&void 0!==t&&t.valid&&"1234"!==this.keyCode.value&&this.codeForm.setValue({keyCode:"1234"})})}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}}y.\u0275fac=function(r){return new(r||y)},y.\u0275cmp=e.Xpm({type:y,selectors:[["code-input-model-example"]],decls:12,vars:4,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(r,t){if(1&r){const o=e.EpF();e.TgZ(0,"form",0,1),e._UZ(2,"nx-code-input",2,3),e.YNc(4,te,3,2,"div",4),e._UZ(5,"br"),e.TgZ(6,"button",5),e._uU(7,"Submit"),e.qZA(),e.TgZ(8,"button",6),e.NdJ("click",function(){e.CHM(o);const a=e.MAs(1);return e.KtG(a.resetForm())}),e._uU(9," Clear "),e.qZA(),e.TgZ(10,"p"),e._uU(11),e.qZA()()}if(2&r){const o=e.MAs(3);e.Q6J("formGroup",t.codeForm),e.xp6(2),e.Q6J("length",4),e.xp6(2),e.Q6J("ngIf",o.errorState),e.xp6(7),e.hij("Code input value: '",null==t.keyCode?null:t.keyCode.value,"'")}},dependencies:[_,p.vV,u.O5,i._Y,i.JJ,i.JL,i.sg,i.u,m.XV],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]});class v{constructor(){this.inputValue=""}}function ne(n,r){1&n&&(e.TgZ(0,"nx-error",8),e._uU(1," Entry is required. "),e.qZA())}function oe(n,r){1&n&&(e.TgZ(0,"nx-error",8),e._uU(1," Entry must match pattern. "),e.qZA())}function re(n,r){1&n&&(e.TgZ(0,"nx-error",8),e._uU(1," Entry is too short. "),e.qZA())}function ie(n,r){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,ne,2,0,"nx-error",7),e.YNc(2,oe,2,0,"nx-error",7),e.YNc(3,re,2,0,"nx-error",7),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.keyCode?null:t.keyCode.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==t.keyCode?null:t.keyCode.hasError("pattern")),e.xp6(1),e.Q6J("ngIf",null==t.keyCode?null:t.keyCode.hasError("minlength"))}}v.\u0275fac=function(r){return new(r||v)},v.\u0275cmp=e.Xpm({type:v,selectors:[["code-input-negative-example"]],decls:2,vars:1,consts:[[1,"docs-inverse-container"],["negative","true",3,"length"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0),e._UZ(1,"nx-code-input",1),e.qZA()),2&r&&(e.xp6(1),e.Q6J("length",4))},dependencies:[_]});class I{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.nJ({keyCode:new i.p4(this.inputValue,{validators:[i.kI.required,i.kI.minLength(7)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}}function se(n,r){1&n&&(e.TgZ(0,"nx-error",8),e._uU(1," Entry is required. "),e.qZA())}function ae(n,r){1&n&&(e.TgZ(0,"nx-error",8),e._uU(1," Entry is too short. "),e.qZA())}function le(n,r){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,se,2,0,"nx-error",7),e.YNc(2,ae,2,0,"nx-error",7),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.keyCode?null:t.keyCode.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==t.keyCode?null:t.keyCode.hasError("minlength"))}}I.\u0275fac=function(r){return new(r||I)},I.\u0275cmp=e.Xpm({type:I,selectors:[["code-input-seven-char-example"]],decls:10,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","lower","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(r,t){if(1&r){const o=e.EpF();e.TgZ(0,"form",0,1),e._UZ(2,"nx-code-input",2,3),e.YNc(4,ie,4,3,"div",4),e._UZ(5,"br"),e.TgZ(6,"button",5),e._uU(7,"Submit"),e.qZA(),e.TgZ(8,"button",6),e.NdJ("click",function(){e.CHM(o);const a=e.MAs(1);return e.KtG(a.resetForm())}),e._uU(9," Clear "),e.qZA()()}if(2&r){const o=e.MAs(3);e.Q6J("formGroup",t.codeForm),e.xp6(2),e.Q6J("length",7),e.xp6(2),e.Q6J("ngIf",o.errorState)}},dependencies:[_,p.vV,u.O5,i._Y,i.JJ,i.JL,i.sg,i.u,m.XV],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]});class b{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.nJ({keyCode:new i.p4(this.inputValue,{validators:[i.kI.required,i.kI.minLength(6)],updateOn:"blur"})})}get keyCode(){return this.codeForm.get("keyCode")}}function ue(n,r){1&n&&(e.TgZ(0,"nx-error",8),e._uU(1," Entry is required. "),e.qZA())}function ce(n,r){1&n&&(e.TgZ(0,"nx-error",8),e._uU(1," Entry must match pattern. "),e.qZA())}function pe(n,r){1&n&&(e.TgZ(0,"nx-error",8),e._uU(1," Entry is too short. "),e.qZA())}function de(n,r){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,ue,2,0,"nx-error",7),e.YNc(2,ce,2,0,"nx-error",7),e.YNc(3,pe,2,0,"nx-error",7),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.keyCode?null:t.keyCode.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==t.keyCode?null:t.keyCode.hasError("pattern")),e.xp6(1),e.Q6J("ngIf",null==t.keyCode?null:t.keyCode.hasError("minlength"))}}b.\u0275fac=function(r){return new(r||b)},b.\u0275cmp=e.Xpm({type:b,selectors:[["code-input-six-char-example"]],decls:10,vars:2,consts:[[3,"formGroup"],["form","ngForm"],["formControlName","keyCode"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(r,t){if(1&r){const o=e.EpF();e.TgZ(0,"form",0,1),e._UZ(2,"nx-code-input",2,3),e.YNc(4,le,3,2,"div",4),e._UZ(5,"br"),e.TgZ(6,"button",5),e._uU(7,"Submit"),e.qZA(),e.TgZ(8,"button",6),e.NdJ("click",function(){e.CHM(o);const a=e.MAs(1);return e.KtG(a.resetForm())}),e._uU(9," Clear "),e.qZA()()}if(2&r){const o=e.MAs(3);e.Q6J("formGroup",t.codeForm),e.xp6(4),e.Q6J("ngIf",o.errorState)}},dependencies:[_,p.vV,u.O5,i._Y,i.JJ,i.JL,i.sg,i.u,m.XV],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"],changeDetection:0});class k{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.nJ({keyCode:new i.p4(this.inputValue,{validators:[i.kI.required,i.kI.pattern(/^\d*$/),i.kI.minLength(4)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}}k.\u0275fac=function(r){return new(r||k)},k.\u0275cmp=e.Xpm({type:k,selectors:[["code-input-type-example"]],decls:12,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["formControlName","keyCode","type","number",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(r,t){if(1&r){const o=e.EpF();e.TgZ(0,"form",0,1)(2,"label"),e._uU(3,"Enter PIN code"),e.qZA(),e._UZ(4,"nx-code-input",2,3),e.YNc(6,de,4,3,"div",4),e._UZ(7,"br"),e.TgZ(8,"button",5),e._uU(9,"Submit"),e.qZA(),e.TgZ(10,"button",6),e.NdJ("click",function(){e.CHM(o);const a=e.MAs(1);return e.KtG(a.resetForm())}),e._uU(11," Clear "),e.qZA()()}if(2&r){const o=e.MAs(5);e.Q6J("formGroup",t.codeForm),e.xp6(4),e.Q6J("length",4),e.xp6(2),e.Q6J("ngIf",o.errorState)}},dependencies:[_,p.vV,u.O5,i._Y,i.JJ,i.JL,i.sg,i.u,m.XV],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]});class T{static components(){return{"code-input-disabled":C,"code-input-four-char":h,"code-input-localize":f,"code-input-model":y,"code-input-negative":v,"code-input-seven-char":I,"code-input-six-char":b,"code-input-type":k}}}T.\u0275fac=function(r){return new(r||T)},T.\u0275mod=e.oAB({type:T}),T.\u0275inj=e.cJS({imports:[S,p.$N,q.f]})},9508:(w,M,l)=>{l.d(M,{f:()=>u});var p=l(6895),E=l(4006),d=l(690),e=l(1486),i=l(9561),Z=l(4188),F=l(4650);class u{}u.\u0275fac=function(x){return new(x||u)},u.\u0275mod=F.oAB({type:u}),u.\u0275inj=F.cJS({imports:[p.ez,E.u5,E.UX,d.ru,Z.X,e.K,i.TW]})}}]);