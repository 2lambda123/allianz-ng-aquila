!function(){function e(t,n){return(e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(t,n)}function t(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var o,i=r(e);if(t){var c=r(this).constructor;o=Reflect.construct(i,arguments,c)}else o=i.apply(this,arguments);return n(this,o)}}function n(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"+IXF":function(e,t,n){"use strict";n.d(t,"c",function(){return l}),n.d(t,"a",function(){return d.a}),n.d(t,"b",function(){return d.b}),n.d(t,"e",function(){return h}),n.d(t,"d",function(){return f.a});var r,o,i=n("ofXK"),a=n("mN63"),s=n("SqJ0"),u=n("fXoL"),l=((r=function e(){c(this,e)}).\u0275fac=function(e){return new(e||r)},r.\u0275mod=u.Ob({type:r}),r.\u0275inj=u.Nb({imports:[[i.c,a.c,s.a]]}),r),d=n("aXeq"),h=((o=function e(){c(this,e)}).\u0275fac=function(e){return new(e||o)},o.\u0275mod=u.Ob({type:o}),o.\u0275inj=u.Nb({imports:[[i.c]]}),o),f=n("Q3ZH")},"7Ynf":function(n,r,o){"use strict";o.r(r),o.d(r,"CodeExamplesModule",function(){return me});var a,s,u=o("+IXF"),l=o("ofXK"),d=o("3Pt+"),h=o("XNiG"),f=o("fXoL"),b=((s=function e(){c(this,e),this.changes=new h.a,this.inputFieldAriaLabel="Enter Key",this.ofLabel="of"}).\u0275fac=function(e){return new(e||s)},s.\u0275prov=f.Mb({token:s,factory:s.\u0275fac}),s),g=((a=function e(){c(this,e)}).\u0275fac=function(e){return new(e||a)},a.\u0275mod=f.Ob({type:a}),a.\u0275inj=f.Nb({providers:[b],imports:[[l.c,d.k,d.v]]}),a),p=o("FtGj"),m=o("8LU1"),y=o("zB3U");function _(e,t){if(1&e){var n=f.Xb();f.Wb(0,"input",1),f.dc("ngModelChange",function(e){f.yc(n);var r=t.index;return f.hc()._keyCode[r]=e})("input",function(e){return f.yc(n),f.hc()._selectNextInput(e)})("paste",function(e){return f.yc(n),f.hc()._pasteClipboard(e)})("blur",function(){return f.yc(n),f.hc()._onBlur()})("focus",function(){return f.yc(n),f.hc()._setFocusState()})("click",function(e){return f.yc(n),f.hc()._selectText(e)})("keydown",function(e){return f.yc(n),f.hc()._keydownAction(e)}),f.Vb()}if(2&e){var r=t.index,o=f.hc();f.nc("ngModel",o._keyCode[r])("ngClass",o._inputGap(r)),f.Fb("aria-label",o.getAriaLabel(r))("type",o.type)("tabindex",o.tabindex)("disabled",o.disabled?"":null)}}var v,x=((v=function(){function e(t,n,r,o,i,a,s){c(this,e),this._changeDetectorRef=t,this._el=n,this._control=r,this._intl=o,this._errorStateMatcher=i,this._parentForm=a,this._parentFormGroup=s,this.errorState=!1,this._codeLength=6,this._type="text",this._isUpDown=!1,this._tabindex=0,this._keyCode=new Array(6),this._focused=!1,this._negative=!1,this._disabled=!1,this.propagateChange=function(e){},this.propagateTouch=function(e){},this._control&&(this._control.valueAccessor=this)}return i(e,[{key:"codeLength",get:function(){return this._codeLength},set:function(e){this._codeLength=e,this.setInputLength(),this._changeDetectorRef.markForCheck()}},{key:"type",get:function(){return this._type},set:function(e){this._type=e,this._changeDetectorRef.markForCheck()}},{key:"tabindex",get:function(){return this._tabindex},set:function(e){this._tabindex=e,this._changeDetectorRef.markForCheck()}},{key:"convertTo",get:function(){return this._convertTo},set:function(e){this._convertTo=e,this._changeDetectorRef.markForCheck()}},{key:"negative",get:function(){return this._negative},set:function(e){var t=Object(m.b)(e);this._negative!==t&&(this._negative=t,this._changeDetectorRef.markForCheck())}},{key:"disabled",get:function(){return this._disabled},set:function(e){var t=Object(m.b)(e);this._disabled!==t&&(this._disabled=t,this._changeDetectorRef.markForCheck())}},{key:"ngDoCheck",value:function(){this._control&&this.updateErrorState()}},{key:"setInputLength",value:function(){this._keyCode=new Array(this.codeLength?this.codeLength:6)}},{key:"_convertLetterSize",value:function(e){return"\xdf"===e?e:"string"==typeof e?"upper"===this.convertTo?e.toUpperCase():"lower"===this.convertTo?e.toLowerCase():e:void 0}},{key:"_keydownAction",value:function(e){var t=e.target.previousElementSibling,n=e.target.nextElementSibling;switch(e.keyCode){case p.p:return!1;case p.b:""===e.target.value&&t&&"INPUT"===t.tagName&&this.selectInput(t);break;case p.i:t&&"INPUT"===t.tagName&&(e.preventDefault(),this.selectInput(t));break;case p.n:n&&"INPUT"===n.tagName&&this.selectInput(n),e.preventDefault();break;case p.d:this._isUpDown=!0,"number"!==this._type||""!==e.target.value&&"0"!==e.target.value||e.preventDefault();break;case p.r:this._isUpDown=!0,"number"===this._type&&"9"===e.target.value&&e.preventDefault()}}},{key:"_selectText",value:function(e){this.selectInput(e.target)}},{key:"_selectNextInput",value:function(e){e.target.value=this._convertLetterSize(e.target.value.slice(0,1));var t=this._getFocusedInputIndex(e);if(this._keyCode[t]=e.target.value,this.propagateChange(this._keyCode.join("")),e.target.value&&(!this._isUpDown||"number"!==this.type)){var n=e.target.nextSibling;null!==n&&"INPUT"===n.tagName&&(n.focus(),""!==n.value&&this.selectInput(n))}this._isUpDown=!1}},{key:"_pasteClipboard",value:function(e){var t=(e.clipboardData||window.clipboardData).getData("text"),n=0,r=this._getFocusedInputIndex(e);t="number"===this.type?this._formatNumberInput(t):t;for(var o=r;o<this.codeLength;o++)this._keyCode[o]=this._convertLetterSize(t[n]),n++;this.propagateChange(this._keyCode.join("")),r+t.length<this.codeLength?this._el.nativeElement.children.item(r+t.length).focus():this._el.nativeElement.children.item(this.codeLength-1).focus(),e.preventDefault()}},{key:"_getFocusedInputIndex",value:function(e){for(var t,n=0;n<this._el.nativeElement.children.length;n++)e.srcElement===this._el.nativeElement.children.item(n)&&(t=n);return t}},{key:"_formatNumberInput",value:function(e){for(var t="",n=0;n<e.length;n++)e[n].match(/[0-9]{1}$/)&&(t+=e[n]);return t}},{key:"_onBlur",value:function(){var e=this;this._focused=!1,setTimeout(function(){e._focused||e.propagateTouch(e._keyCode.join("")),e._changeDetectorRef.markForCheck()})}},{key:"_setFocusState",value:function(){this._focused=!0}},{key:"setDisabledState",value:function(e){this.disabled=e,this._changeDetectorRef.markForCheck()}},{key:"writeValue",value:function(e){if(e)for(var t=e.split("").slice(0,this.codeLength),n=0;n<this.codeLength;n++)this._keyCode[n]=t[n];else this.setInputLength();this._changeDetectorRef.markForCheck()}},{key:"_trackByKeyCode",value:function(e,t){return e}},{key:"_inputGap",value:function(e){switch(this.codeLength){case 4:case 6:case 8:if(e===this.codeLength/2)return"nx-code-input--field-with-gap";break;default:return}}},{key:"registerOnChange",value:function(e){this.propagateChange=e}},{key:"registerOnTouched",value:function(e){this.propagateTouch=e}},{key:"updateErrorState",value:function(){var e=this.errorState,t=this._errorStateMatcher.isErrorState(this._control?this._control.control:null,this._parentFormGroup||this._parentForm);t!==e&&(this.errorState=t)}},{key:"getAriaLabel",value:function(e){return"".concat(this._intl.inputFieldAriaLabel," ").concat(e+1," ").concat(this._intl.ofLabel," ").concat(this._keyCode.length)}},{key:"selectInput",value:function(e){e.focus();try{e.setSelectionRange(0,e.value.length)}catch(t){if(!(t instanceof DOMException&&"InvalidStateError"===t.name))throw t}}}]),e}()).\u0275fac=function(e){return new(e||v)(f.Qb(f.h),f.Qb(f.l),f.Qb(d.o,10),f.Qb(b),f.Qb(y.a),f.Qb(d.r,8),f.Qb(d.i,8))},v.\u0275cmp=f.Kb({type:v,selectors:[["nx-code-input"]],hostVars:9,hostBindings:function(e,t){2&e&&(f.Fb("tabindex",-1),f.Ib("nx-code-input",!0)("has-error",t.errorState)("is-negative",t.negative)("is-disabled",t.disabled))},inputs:{codeLength:["length","codeLength"],type:"type",tabindex:"tabindex",convertTo:["nxConvertTo","convertTo"],negative:"negative",disabled:"disabled"},decls:1,vars:2,consts:[["class","nx-code-input__field","maxlength","1",3,"ngModel","ngClass","ngModelChange","input","paste","blur","focus","click","keydown",4,"ngFor","ngForOf","ngForTrackBy"],["maxlength","1",1,"nx-code-input__field",3,"ngModel","ngClass","ngModelChange","input","paste","blur","focus","click","keydown"]],template:function(e,t){1&e&&f.Hc(0,_,1,6,"input",0),2&e&&f.nc("ngForOf",t._keyCode)("ngForTrackBy",t._trackByKeyCode)},directives:[l.p,d.a,d.l,d.p,d.s,l.n],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{font-size:var(--code-input-font-size);line-height:var(--code-input-line-height);font-weight:var(--code-input-font-weight);letter-spacing:var(--code-input-letter-spacing);color:var(--code-input-color);margin:0 4px;text-align:center;border:0;outline:0;caret-color:var(--code-input-active-color);box-shadow:inset 0 -1px 0 0 var(--code-input-color);-webkit-appearance:none;width:32px;border-radius:0;padding:0;background:transparent;box-sizing:border-box}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:focus{margin-bottom:-1px;color:var(--code-input-active-color);box-shadow:inset 0 -2px 0 0 var(--code-input-active-color)}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:first-child{margin-left:0}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:last-child{margin-right:0}[_nghost-%COMP%]   .nx-code-input--field-with-gap[_ngcontent-%COMP%]{margin-left:20px}[_nghost-%COMP%]:focus{outline:none}[dir=rtl]   [_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:first-child{margin-right:0;margin-left:4px}[dir=rtl]   [_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:last-child{margin-left:0;margin-right:4px}[dir=rtl]   [_nghost-%COMP%]   .nx-code-input--field-with-gap[_ngcontent-%COMP%]{margin-left:4px;margin-right:20px}.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{caret-color:var(--negative);box-shadow:inset 0 -1px 0 0 var(--negative);color:var(--negative)}.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:focus{box-shadow:inset 0 -2px 0 0 var(--negative)}.has-error[_nghost-%COMP%]:not(.is-negative)   .nx-code-input__field[_ngcontent-%COMP%]{margin-bottom:-1px;font-weight:700;color:var(--code-input-error-color);box-shadow:inset 0 -1px 0 0 var(--code-input-error-color)}.has-error[_nghost-%COMP%]:not(.is-negative)   .nx-code-input__field[_ngcontent-%COMP%]:focus{box-shadow:inset 0 -2px 0 0 var(--code-input-error-color)}.has-error.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{font-weight:700}.is-disabled[_nghost-%COMP%]{cursor:not-allowed}.is-disabled[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{cursor:not-allowed;color:var(--code-input-disabled-color);box-shadow:inset 0 -1px 0 0 nx-theme-color(code-input-disabled-color);box-shadow:inset 0 -1px 0 0 var(--code-input-disabled-color)}.is-disabled.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{color:var(--negative-02-dimmed);box-shadow:inset 0 -1px 0 0 var(--negative-02-dimmed)}input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.nx-code-input__field[type=number][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}@media screen and (forced-colors:active){.nx-code-input__field[_ngcontent-%COMP%]{border-bottom:1px solid buttonText!important}.nx-code-input__field[_ngcontent-%COMP%]:focus{border-bottom:2px solid highlight!important}.is-disabled[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{border-bottom:1px solid GrayText!important}}@media screen and (-ms-high-contrast:active){.nx-code-input__field[_ngcontent-%COMP%]{box-shadow:inset 0 -1px 0 0 buttonText}.nx-code-input__field[_ngcontent-%COMP%]:focus{box-shadow:inset 0 -2px 0 0 buttonText}.is-disabled[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{color:GrayText;box-shadow:inset 0 -1px 0 0 GrayText;opacity:1}}"],changeDetection:0}),v),C=o("LTpZ"),k=o("aXeq");function O(e,t){1&e&&(f.Wb(0,"nx-error",9),f.Jc(1," Entry is required. "),f.Vb())}function w(e,t){1&e&&(f.Wb(0,"nx-error",9),f.Jc(1," Entry must match pattern. "),f.Vb())}function E(e,t){1&e&&(f.Wb(0,"nx-error",9),f.Jc(1," Entry is too short. "),f.Vb())}function I(e,t){if(1&e&&(f.Wb(0,"div"),f.Hc(1,O,2,0,"nx-error",8),f.Hc(2,w,2,0,"nx-error",8),f.Hc(3,E,2,0,"nx-error",8),f.Vb()),2&e){var n=f.hc();f.Eb(1),f.nc("ngIf",n.keyCode.hasError("required")),f.Eb(1),f.nc("ngIf",n.keyCode.hasError("pattern")),f.Eb(1),f.nc("ngIf",n.keyCode.hasError("minlength"))}}var P,M=((P=function(){function e(){c(this,e),this.inputValue=""}return i(e,[{key:"ngOnInit",value:function(){this.codeForm=new d.h({keyCode:new d.e({value:this.inputValue,disabled:!0},{validators:[d.y.required,d.y.pattern("[A-Z]+"),d.y.minLength(4)],updateOn:"submit"})})}},{key:"keyCode",get:function(){return this.codeForm.get("keyCode")}},{key:"toggleDisabled",value:function(){this.keyCode.disabled?this.keyCode.enable():this.keyCode.disable()}}]),e}()).\u0275fac=function(e){return new(e||P)},P.\u0275cmp=f.Kb({type:P,selectors:[["code-input-disabled-example"]],decls:13,vars:4,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["nxButton","primary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){var n=f.Xb();f.Wb(0,"form",0,1),f.Rb(2,"nx-code-input",2,3),f.Hc(4,I,4,3,"div",4),f.Wb(5,"p"),f.Jc(6),f.Vb(),f.Wb(7,"button",5),f.Jc(8,"Submit"),f.Vb(),f.Wb(9,"button",6),f.dc("click",function(){return f.yc(n),f.uc(1).resetForm()}),f.Jc(10,"Clear"),f.Vb(),f.Wb(11,"button",7),f.dc("click",function(){return t.toggleDisabled()}),f.Jc(12,"Toggle disabled"),f.Vb(),f.Vb()}if(2&e){var r=f.uc(3);f.nc("formGroup",t.codeForm),f.Eb(2),f.nc("length",4),f.Eb(2),f.nc("ngIf",r.errorState),f.Eb(2),f.Lc("Disabled: ",t.keyCode.disabled,"")}},directives:[d.z,d.q,d.i,x,d.p,d.g,l.q,C.a,k.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),P);function V(e,t){1&e&&(f.Wb(0,"nx-error",8),f.Jc(1," Entry is required. "),f.Vb())}function F(e,t){1&e&&(f.Wb(0,"nx-error",8),f.Jc(1," Entry must match pattern. "),f.Vb())}function W(e,t){1&e&&(f.Wb(0,"nx-error",8),f.Jc(1," Entry is too short. "),f.Vb())}function L(e,t){if(1&e&&(f.Wb(0,"div"),f.Hc(1,V,2,0,"nx-error",7),f.Hc(2,F,2,0,"nx-error",7),f.Hc(3,W,2,0,"nx-error",7),f.Vb()),2&e){var n=f.hc();f.Eb(1),f.nc("ngIf",n.keyCode.hasError("required")),f.Eb(1),f.nc("ngIf",n.keyCode.hasError("pattern")),f.Eb(1),f.nc("ngIf",n.keyCode.hasError("minlength"))}}var T,q=((T=function(){function e(){c(this,e),this.inputValue=""}return i(e,[{key:"ngOnInit",value:function(){this.codeForm=new d.h({keyCode:new d.e(this.inputValue,{validators:[d.y.required,d.y.pattern("[A-Z]+"),d.y.minLength(4)],updateOn:"submit"})})}},{key:"keyCode",get:function(){return this.codeForm.get("keyCode")}}]),e}()).\u0275fac=function(e){return new(e||T)},T.\u0275cmp=f.Kb({type:T,selectors:[["code-input-four-char-example"]],decls:10,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){var n=f.Xb();f.Wb(0,"form",0,1),f.Rb(2,"nx-code-input",2,3),f.Hc(4,L,4,3,"div",4),f.Rb(5,"br"),f.Wb(6,"button",5),f.Jc(7,"Submit"),f.Vb(),f.Wb(8,"button",6),f.dc("click",function(){return f.yc(n),f.uc(1).resetForm()}),f.Jc(9,"Clear"),f.Vb(),f.Vb()}if(2&e){var r=f.uc(3);f.nc("formGroup",t.codeForm),f.Eb(2),f.nc("length",4),f.Eb(2),f.nc("ngIf",r.errorState)}},directives:[d.z,d.q,d.i,x,d.p,d.g,l.q,C.a,k.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),T);function D(e,t){1&e&&(f.Wb(0,"nx-error",8),f.Jc(1," Entry is required. "),f.Vb())}function S(e,t){1&e&&(f.Wb(0,"nx-error",8),f.Jc(1," Entry must match pattern. "),f.Vb())}function J(e,t){1&e&&(f.Wb(0,"nx-error",8),f.Jc(1," Entry is too short. "),f.Vb())}function R(e,t){if(1&e&&(f.Wb(0,"div"),f.Hc(1,D,2,0,"nx-error",7),f.Hc(2,S,2,0,"nx-error",7),f.Hc(3,J,2,0,"nx-error",7),f.Vb()),2&e){var n=f.hc();f.Eb(1),f.nc("ngIf",n.keyCode.hasError("required")),f.Eb(1),f.nc("ngIf",n.keyCode.hasError("pattern")),f.Eb(1),f.nc("ngIf",n.keyCode.hasError("minlength"))}}var z,H,N=((z=function(n){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}(o,n);var r=t(o);function o(){var e;return c(this,o),(e=r.apply(this,arguments)).inputFieldAriaLabel="Key eingeben",e.ofLabel="von",e}return o}(b)).\u0275fac=function(e){return B(e||z)},z.\u0275prov=f.Mb({token:z,factory:z.\u0275fac}),z),B=f.Yb(N),G=((H=function(){function e(){c(this,e),this.inputValue=""}return i(e,[{key:"ngOnInit",value:function(){this.codeForm=new d.h({keyCode:new d.e(this.inputValue,{validators:[d.y.required,d.y.pattern("[A-Z]+"),d.y.minLength(5)],updateOn:"submit"})})}},{key:"keyCode",get:function(){return this.codeForm.get("keyCode")}}]),e}()).\u0275fac=function(e){return new(e||H)},H.\u0275cmp=f.Kb({type:H,selectors:[["code-input-localize-example"]],features:[f.Db([{provide:b,useClass:N}])],decls:10,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){var n=f.Xb();f.Wb(0,"form",0,1),f.Rb(2,"nx-code-input",2,3),f.Hc(4,R,4,3,"div",4),f.Rb(5,"br"),f.Wb(6,"button",5),f.Jc(7,"Submit"),f.Vb(),f.Wb(8,"button",6),f.dc("click",function(){return f.yc(n),f.uc(1).resetForm()}),f.Jc(9,"Clear"),f.Vb(),f.Vb()}if(2&e){var r=f.uc(3);f.nc("formGroup",t.codeForm),f.Eb(2),f.nc("length",5),f.Eb(2),f.nc("ngIf",r.errorState)}},directives:[d.z,d.q,d.i,x,d.p,d.g,l.q,C.a,k.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),H);function X(e,t){1&e&&(f.Wb(0,"nx-error",8),f.Jc(1," Entry is required. "),f.Vb())}function j(e,t){1&e&&(f.Wb(0,"nx-error",8),f.Jc(1," Entry is too short. "),f.Vb())}function K(e,t){if(1&e&&(f.Wb(0,"div"),f.Hc(1,X,2,0,"nx-error",7),f.Hc(2,j,2,0,"nx-error",7),f.Vb()),2&e){var n=f.hc();f.Eb(1),f.nc("ngIf",n.keyCode.hasError("required")),f.Eb(1),f.nc("ngIf",n.keyCode.hasError("minlength"))}}var U,A,Q=((A=function(){function e(){c(this,e),this.inputValue=""}return i(e,[{key:"ngOnInit",value:function(){var e=this;this.codeForm=new d.h({keyCode:new d.e(this.inputValue,{validators:[d.y.required,d.y.minLength(4)],updateOn:"change"})}),this.keyCode.valueChanges.subscribe(function(){e.keyCode.valid&&"1234"!==e.keyCode.value&&e.codeForm.setValue({keyCode:"1234"})})}},{key:"keyCode",get:function(){return this.codeForm.get("keyCode")}}]),e}()).\u0275fac=function(e){return new(e||A)},A.\u0275cmp=f.Kb({type:A,selectors:[["code-input-model-example"]],decls:12,vars:4,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){var n=f.Xb();f.Wb(0,"form",0,1),f.Rb(2,"nx-code-input",2,3),f.Hc(4,K,3,2,"div",4),f.Rb(5,"br"),f.Wb(6,"button",5),f.Jc(7,"Submit"),f.Vb(),f.Wb(8,"button",6),f.dc("click",function(){return f.yc(n),f.uc(1).resetForm()}),f.Jc(9,"Clear"),f.Vb(),f.Wb(10,"p"),f.Jc(11),f.Vb(),f.Vb()}if(2&e){var r=f.uc(3);f.nc("formGroup",t.codeForm),f.Eb(2),f.nc("length",4),f.Eb(2),f.nc("ngIf",r.errorState),f.Eb(7),f.Lc(" Code input value: '",t.keyCode.value,"' ")}},directives:[d.z,d.q,d.i,x,d.p,d.g,l.q,C.a,k.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),A),Z=((U=function e(){c(this,e),this.inputValue=""}).\u0275fac=function(e){return new(e||U)},U.\u0275cmp=f.Kb({type:U,selectors:[["code-input-negative-example"]],decls:2,vars:1,consts:[[1,"docs-inverse-container"],["negative","true",3,"length"]],template:function(e,t){1&e&&(f.Wb(0,"div",0),f.Rb(1,"nx-code-input",1),f.Vb()),2&e&&(f.Eb(1),f.nc("length",4))},directives:[x],styles:[""]}),U);function Y(e,t){1&e&&(f.Wb(0,"nx-error",8),f.Jc(1," Entry is required. "),f.Vb())}function $(e,t){1&e&&(f.Wb(0,"nx-error",8),f.Jc(1," Entry must match pattern. "),f.Vb())}function ee(e,t){1&e&&(f.Wb(0,"nx-error",8),f.Jc(1," Entry is too short. "),f.Vb())}function te(e,t){if(1&e&&(f.Wb(0,"div"),f.Hc(1,Y,2,0,"nx-error",7),f.Hc(2,$,2,0,"nx-error",7),f.Hc(3,ee,2,0,"nx-error",7),f.Vb()),2&e){var n=f.hc();f.Eb(1),f.nc("ngIf",n.keyCode.hasError("required")),f.Eb(1),f.nc("ngIf",n.keyCode.hasError("pattern")),f.Eb(1),f.nc("ngIf",n.keyCode.hasError("minlength"))}}var ne,re=((ne=function(){function e(){c(this,e),this.inputValue=""}return i(e,[{key:"ngOnInit",value:function(){this.codeForm=new d.h({keyCode:new d.e(this.inputValue,{validators:[d.y.required,d.y.minLength(7)],updateOn:"submit"})})}},{key:"keyCode",get:function(){return this.codeForm.get("keyCode")}}]),e}()).\u0275fac=function(e){return new(e||ne)},ne.\u0275cmp=f.Kb({type:ne,selectors:[["code-input-seven-char-example"]],decls:10,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","lower","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){var n=f.Xb();f.Wb(0,"form",0,1),f.Rb(2,"nx-code-input",2,3),f.Hc(4,te,4,3,"div",4),f.Rb(5,"br"),f.Wb(6,"button",5),f.Jc(7,"Submit"),f.Vb(),f.Wb(8,"button",6),f.dc("click",function(){return f.yc(n),f.uc(1).resetForm()}),f.Jc(9,"Clear"),f.Vb(),f.Vb()}if(2&e){var r=f.uc(3);f.nc("formGroup",t.codeForm),f.Eb(2),f.nc("length",7),f.Eb(2),f.nc("ngIf",r.errorState)}},directives:[d.z,d.q,d.i,x,d.p,d.g,l.q,C.a,k.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),ne);function oe(e,t){1&e&&(f.Wb(0,"nx-error",8),f.Jc(1," Entry is required. "),f.Vb())}function ie(e,t){1&e&&(f.Wb(0,"nx-error",8),f.Jc(1," Entry is too short. "),f.Vb())}function ce(e,t){if(1&e&&(f.Wb(0,"div"),f.Hc(1,oe,2,0,"nx-error",7),f.Hc(2,ie,2,0,"nx-error",7),f.Vb()),2&e){var n=f.hc();f.Eb(1),f.nc("ngIf",n.keyCode.hasError("required")),f.Eb(1),f.nc("ngIf",n.keyCode.hasError("minlength"))}}var ae,se=((ae=function(){function e(){c(this,e),this.inputValue=""}return i(e,[{key:"ngOnInit",value:function(){this.codeForm=new d.h({keyCode:new d.e(this.inputValue,{validators:[d.y.required,d.y.minLength(6)],updateOn:"blur"})})}},{key:"keyCode",get:function(){return this.codeForm.get("keyCode")}}]),e}()).\u0275fac=function(e){return new(e||ae)},ae.\u0275cmp=f.Kb({type:ae,selectors:[["code-input-six-char-example"]],decls:10,vars:2,consts:[[3,"formGroup"],["form","ngForm"],["formControlName","keyCode"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){var n=f.Xb();f.Wb(0,"form",0,1),f.Rb(2,"nx-code-input",2,3),f.Hc(4,ce,3,2,"div",4),f.Rb(5,"br"),f.Wb(6,"button",5),f.Jc(7,"Submit"),f.Vb(),f.Wb(8,"button",6),f.dc("click",function(){return f.yc(n),f.uc(1).resetForm()}),f.Jc(9,"Clear"),f.Vb(),f.Vb()}if(2&e){var r=f.uc(3);f.nc("formGroup",t.codeForm),f.Eb(4),f.nc("ngIf",r.errorState)}},directives:[d.z,d.q,d.i,x,d.p,d.g,l.q,C.a,k.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"],changeDetection:0}),ae);function ue(e,t){1&e&&(f.Wb(0,"nx-error",8),f.Jc(1," Entry is required. "),f.Vb())}function le(e,t){1&e&&(f.Wb(0,"nx-error",8),f.Jc(1," Entry must match pattern. "),f.Vb())}function de(e,t){1&e&&(f.Wb(0,"nx-error",8),f.Jc(1," Entry is too short. "),f.Vb())}function he(e,t){if(1&e&&(f.Wb(0,"div"),f.Hc(1,ue,2,0,"nx-error",7),f.Hc(2,le,2,0,"nx-error",7),f.Hc(3,de,2,0,"nx-error",7),f.Vb()),2&e){var n=f.hc();f.Eb(1),f.nc("ngIf",n.keyCode.hasError("required")),f.Eb(1),f.nc("ngIf",n.keyCode.hasError("pattern")),f.Eb(1),f.nc("ngIf",n.keyCode.hasError("minlength"))}}var fe,be,ge=((fe=function(){function e(){c(this,e),this.inputValue=""}return i(e,[{key:"ngOnInit",value:function(){this.codeForm=new d.h({keyCode:new d.e(this.inputValue,{validators:[d.y.required,d.y.pattern(RegExp("^[0-9]*$")),d.y.minLength(4)],updateOn:"submit"})})}},{key:"keyCode",get:function(){return this.codeForm.get("keyCode")}}]),e}()).\u0275fac=function(e){return new(e||fe)},fe.\u0275cmp=f.Kb({type:fe,selectors:[["code-input-type-example"]],decls:12,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["formControlName","keyCode","type","number",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){var n=f.Xb();f.Wb(0,"form",0,1),f.Wb(2,"label"),f.Jc(3,"Enter PIN code"),f.Vb(),f.Rb(4,"nx-code-input",2,3),f.Hc(6,he,4,3,"div",4),f.Rb(7,"br"),f.Wb(8,"button",5),f.Jc(9,"Submit"),f.Vb(),f.Wb(10,"button",6),f.dc("click",function(){return f.yc(n),f.uc(1).resetForm()}),f.Jc(11,"Clear"),f.Vb(),f.Vb()}if(2&e){var r=f.uc(5);f.nc("formGroup",t.codeForm),f.Eb(4),f.nc("length",4),f.Eb(2),f.nc("ngIf",r.errorState)}},directives:[d.z,d.q,d.i,x,d.p,d.g,l.q,C.a,k.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),fe),pe=o("ierq"),me=((be=function(){function e(){c(this,e)}return i(e,null,[{key:"components",value:function(){return{"code-input-disabled":M,"code-input-four-char":q,"code-input-localize":G,"code-input-model":Q,"code-input-negative":Z,"code-input-seven-char":re,"code-input-six-char":se,"code-input-type":ge}}}]),e}()).\u0275fac=function(e){return new(e||be)},be.\u0275mod=f.Ob({type:be}),be.\u0275inj=f.Nb({imports:[[g,u.c,pe.a]]}),be)},Q3ZH:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n("fXoL"),o=n("8LU1"),a=n("XNiG"),s=["*"],u=0,l=new r.s("LABEL_DEFAULT_OPTIONS"),d=function(){var e=function(){function e(t){c(this,e),this._defaultOptions=t,this._stateChanges=new a.a,this._disabled=!1,this._negative=!1,this._id="nx-label-"+u++}return i(e,[{key:"disabled",get:function(){return this._disabled},set:function(e){this._disabled=Object(o.b)(e),this._stateChanges.next()}},{key:"negative",get:function(){return this._negative},set:function(e){this._negative=Object(o.b)(e),this._stateChanges.next()}},{key:"id",get:function(){return this._id},set:function(e){this._id!==e&&(this._id=e)}},{key:"size",get:function(){return this._size||this._defaultOptions&&this._defaultOptions.size||"large"},set:function(e){this._size=e,this._stateChanges.next()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Qb(l,8))},e.\u0275cmp=r.Kb({type:e,selectors:[["nx-label"]],hostVars:9,hostBindings:function(e,t){2&e&&(r.Fb("disabled",t.disabled)("aria-labelledby",t.id||null)("id",t.id),r.Ib("nx-label--negative",t.negative)("nx-label--large","large"===t.size)("nx-label--small","small"===t.size))},inputs:{disabled:"disabled",negative:"negative",id:"id",size:"size"},ngContentSelectors:s,decls:2,vars:0,consts:[[1,"nx-label__content"]],template:function(e,t){1&e&&(r.mc(),r.Wb(0,"label",0),r.lc(1),r.Vb())},styles:["[_nghost-%COMP%]{display:block;color:var(--text-01)}.nx-label--small[_nghost-%COMP%]{font-size:var(--base-label-small-font-size);line-height:var(--base-label-small-line-height);font-weight:var(--base-label-small-font-weight);letter-spacing:var(--base-label-small-letter-spacing)}.nx-label--large[_nghost-%COMP%]{font-size:var(--base-label-large-font-size);line-height:var(--base-label-large-line-height);font-weight:var(--base-label-large-font-weight);letter-spacing:var(--base-label-large-letter-spacing)}[disabled=true][_nghost-%COMP%]   label[_ngcontent-%COMP%]{cursor:not-allowed}.nx-label--negative[_nghost-%COMP%]{color:var(--negative)}"],changeDetection:0}),e}()},aXeq:function(e,t,n){"use strict";n.d(t,"a",function(){return y}),n.d(t,"b",function(){return _});var r=n("fXoL"),o=n("8LU1"),a=n("XNiG"),s=n("1G5W"),u=n("ofXK"),l=n("+vaC"),d=n("Xe60");function h(e,t){1&e&&r.Rb(0,"nx-icon",7),2&e&&r.nc("name","exclamation-triangle")}function f(e,t){if(1&e&&(r.Ub(0),r.Hc(1,h,1,1,"nx-icon",3),r.Wb(2,"div",4),r.Wb(3,"div",5),r.Sb(4,6),r.Vb(),r.Vb(),r.Tb()),2&e){var n=r.hc(),o=r.uc(3);r.Eb(1),r.nc("ngIf",n.showIcon),r.Eb(3),r.nc("ngTemplateOutlet",o)}}function b(e,t){if(1&e&&(r.Wb(0,"nx-message",8),r.Sb(1,6),r.Vb()),2&e){r.hc();var n=r.uc(3);r.Eb(1),r.nc("ngTemplateOutlet",n)}}function g(e,t){1&e&&r.lc(0)}var p=["*"],m=0,y=new r.s("ERROR_DEFAULT_OPTIONS"),_=function(){var e=function(){function e(t,n){var r=this;c(this,e),this._changeDetectorRef=t,this._defaultOptions=n,this._showIcon=!0,this._id="nx-error-"+m++,this._destroyed=new a.a,this._defaultOptions&&this._defaultOptions.changes&&this._defaultOptions.changes.pipe(Object(s.a)(this._destroyed)).subscribe(function(){r._changeDetectorRef.markForCheck()})}return i(e,[{key:"showIcon",get:function(){return this._showIcon},set:function(e){this._showIcon=Object(o.b)(e),this._changeDetectorRef.markForCheck()}},{key:"id",get:function(){return this._id},set:function(e){e&&e!==this._id&&(this._id=e,this._changeDetectorRef.markForCheck())}},{key:"appearance",get:function(){return this._appearance||this._defaultOptions&&this._defaultOptions.appearance||"message"},set:function(e){e!==this.appearance&&(this._appearance=e,this._changeDetectorRef.markForCheck())}},{key:"ngOnDestroy",value:function(){this._destroyed.next(),this._destroyed.complete()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Qb(r.h),r.Qb(y,8))},e.\u0275cmp=r.Kb({type:e,selectors:[["nx-error"]],hostVars:4,hostBindings:function(e,t){2&e&&(r.Fb("role","alert")("id",t.id),r.Ib("nx-error--message","message"==t.appearance))},inputs:{showIcon:"showIcon",id:"id",appearance:"appearance"},ngContentSelectors:p,decls:4,vars:2,consts:[[4,"ngIf"],["nxContext","error",4,"ngIf"],["errorContent",""],["class","nx-error__icon",3,"name",4,"ngIf"],[1,"nx-error__content-wrapper"],[1,"nx-error__content"],[3,"ngTemplateOutlet"],[1,"nx-error__icon",3,"name"],["nxContext","error"]],template:function(e,t){1&e&&(r.mc(),r.Hc(0,f,5,2,"ng-container",0),r.Hc(1,b,2,1,"nx-message",1),r.Hc(2,g,1,0,"ng-template",null,2,r.Ic)),2&e&&(r.nc("ngIf","text"===t.appearance),r.Eb(1),r.nc("ngIf","message"===t.appearance))},directives:[u.q,u.u,l.a,d.a],styles:["[_nghost-%COMP%]{font-size:var(--base-error-simple-font-size);font-weight:var(--base-error-simple-font-weight);letter-spacing:var(--base-error-simple-letter-spacing);color:var(--base-error-color);width:100%;display:flex;text-align:left}[_nghost-%COMP%], [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{line-height:var(--base-error-simple-line-height)}[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{font-size:var(--base-error-simple-icon-size);margin-right:8px}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{color:windowText}}[_nghost-%COMP%]   .nx-error__content-wrapper[_ngcontent-%COMP%]{max-width:100%}[dir=rtl]   [_nghost-%COMP%]{text-align:right}[dir=rtl]   [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{margin-right:0;margin-left:8px}"],changeDetection:0}),e}()},ierq:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n("tgBs"),o=n("/sJ9"),i=n("eV8M"),a=n("gkbm"),s=n("ofXK"),u=n("3Pt+"),l=n("fXoL"),d=function(){var e=function e(){c(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Ob({type:e}),e.\u0275inj=l.Nb({imports:[[],s.c,u.k,u.v,a.b,i.a,o.a,r.a]}),e}()}}])}();