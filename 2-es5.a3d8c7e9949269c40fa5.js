!function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{AqTC:function(t,e,i){"use strict";i.d(e,"b",function(){return l}),i.d(e,"a",function(){return c.a});var o,s=i("ofXK"),r=i("hbct"),a=i("mN63"),u=i("fXoL"),l=((o=function t(){n(this,t)}).\u0275fac=function(t){return new(t||o)},o.\u0275mod=u.Ob({type:o}),o.\u0275inj=u.Nb({imports:[[s.c,r.e,a.c],r.e]}),o),c=i("nK+a");i("YcJe")},YcJe:function(t,i,o){"use strict";o.d(i,"a",function(){return l});var s=o("FtGj"),r=o("fXoL"),a=o("u47x"),u=o("+vaC"),l=function(){var t=function(){function t(e,i,o){n(this,t),this._changeDetectorRef=e,this._elementRef=i,this._focusMonitor=o,this._currentIcon="password-show-o",this._pressed=!1,this._ariaLabel="Show password",this._focusMonitor.monitor(this._elementRef)}return e(t,[{key:"ariaLabel",get:function(){return this._ariaLabel},set:function(t){t!==this._ariaLabel&&(this._ariaLabel=t,this._changeDetectorRef.markForCheck())}},{key:"ngAfterViewInit",value:function(){this.control?this._currentIcon="password"===this.control.type?"password-show-o":"password-hide-o":console.warn("You need to pass an input as a control to the password toggle.")}},{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._elementRef)}},{key:"toggleInputType",value:function(){this.control&&(this.control.type="password"===this.control.type?"text":"password",this._pressed=!this._pressed,this.toggleIcon(),this._changeDetectorRef.markForCheck())}},{key:"toggleIcon",value:function(){this._currentIcon="password-show-o"===this._currentIcon?"password-hide-o":"password-show-o"}},{key:"_onKeydown",value:function(t){!t||t.keyCode!==s.f&&t.keyCode!==s.p||this.toggleInputType()}},{key:"tabindex",get:function(){return this.control?this.control.disabled?-1:0:null}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Qb(r.h),r.Qb(r.l),r.Qb(a.g))},t.\u0275cmp=r.Kb({type:t,selectors:[["nx-password-toggle"]],hostAttrs:["role","button"],hostVars:3,hostBindings:function(t,e){1&t&&r.dc("click",function(){return e.toggleInputType()})("keydown",function(t){return e._onKeydown(t)}),2&t&&r.Fb("aria-label",e.ariaLabel)("tabindex",e.tabindex)("aria-pressed",e._pressed)},inputs:{control:"control",ariaLabel:"ariaLabel"},decls:1,vars:1,consts:[["aria-hidden","true",3,"name"]],template:function(t,e){1&t&&r.Rb(0,"nx-icon",0),2&t&&r.nc("name",e._currentIcon)},directives:[u.a],styles:["[_nghost-%COMP%]{position:relative;display:inline-block;height:24px;width:24px;cursor:pointer}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]{color:buttonText!important}}[_nghost-%COMP%]:focus{outline:none}[_nghost-%COMP%]:hover{color:var(--hover-primary)}.cdk-keyboard-focused[_nghost-%COMP%]     nx-icon{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast:active){.cdk-keyboard-focused[_nghost-%COMP%]     nx-icon{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}.is-disabled[_nghost-%COMP%], .is-disabled   [_nghost-%COMP%]{pointer-events:none}@media screen and (-ms-high-contrast:active){.is-disabled[_nghost-%COMP%], .is-disabled   [_nghost-%COMP%]{color:GrayText!important}}"],changeDetection:0}),t}()},"nK+a":function(t,i,o){"use strict";o.d(i,"a",function(){return y}),o.d(i,"b",function(){return k});var s=o("8LU1"),r=o("nLfN"),a=o("fXoL"),u=o("XNiG"),l=o("hbct"),c=o("3Pt+"),h=o("zB3U"),d=o("EY2u");o("xgIS"),o("3UWI"),o("1G5W"),o("ofXK");var f,p,_=Object(r.f)({passive:!0}),b=((f=function(){function t(e,i){n(this,t),this._platform=e,this._ngZone=i,this._monitoredElements=new Map}return e(t,[{key:"monitor",value:function(t){var e=this;if(!this._platform.isBrowser)return d.a;var n=Object(s.d)(t),i=this._monitoredElements.get(n);if(i)return i.subject;var o=new u.a,r="cdk-text-field-autofilled",a=function(t){"cdk-text-field-autofill-start"!==t.animationName||n.classList.contains(r)?"cdk-text-field-autofill-end"===t.animationName&&n.classList.contains(r)&&(n.classList.remove(r),e._ngZone.run(function(){return o.next({target:t.target,isAutofilled:!1})})):(n.classList.add(r),e._ngZone.run(function(){return o.next({target:t.target,isAutofilled:!0})}))};return this._ngZone.runOutsideAngular(function(){n.addEventListener("animationstart",a,_),n.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(n,{subject:o,unlisten:function(){n.removeEventListener("animationstart",a,_)}}),o}},{key:"stopMonitoring",value:function(t){var e=Object(s.d)(t),n=this._monitoredElements.get(e);n&&(n.unlisten(),n.subject.complete(),e.classList.remove("cdk-text-field-autofill-monitored"),e.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(e))}},{key:"ngOnDestroy",value:function(){var t=this;this._monitoredElements.forEach(function(e,n){return t.stopMonitoring(n)})}}]),t}()).\u0275fac=function(t){return new(t||f)(a.ac(r.a),a.ac(a.B))},f.\u0275prov=Object(a.Mb)({factory:function(){return new f(Object(a.ac)(r.a),Object(a.ac)(a.B))},token:f,providedIn:"root"}),f),y=new a.s("NX_INPUT_VALUE_ACCESSOR"),g=["button","checkbox","file","hidden","image","radio","range","reset","submit"],m=["date","datetime","datetime-local","month","time","week"].filter(function(t){return Object(r.e)().has(t)}),v=0,k=((p=function(){function t(e,i,o,s,r,a,l,c){n(this,t),this._elementRef=e,this._platform=i,this.ngControl=o,this._parentForm=s,this._parentFormGroup=r,this._errorStateMatcher=a,this._autofillMonitor=c,this._type="text",this._uid="nx-input-"+v++,this._disabled=!1,this._required=!1,this._readonly=!1,this.errorState=!1,this.controlType="nx-input",this.autofilled=!1,this.stateChanges=new u.a,this.focused=!1,this.id=this.id,this._inputValueAccessor=l||this._elementRef.nativeElement,this._previousNativeValue=this.value,"textarea"===this._elementRef.nativeElement.nodeName.toLowerCase()&&(this.controlType="textarea")}return e(t,[{key:"id",get:function(){return this._id},set:function(t){this._id=t||this._uid}},{key:"value",get:function(){return this._inputValueAccessor.value},set:function(t){t!==this.value&&(this._inputValueAccessor.value=t)}},{key:"readonly",get:function(){return this._readonly},set:function(t){this._readonly=Object(s.b)(t),this.stateChanges.next()}},{key:"disabled",get:function(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled},set:function(t){this._disabled=Object(s.b)(t),this.focused&&(this.focused=!1,this.stateChanges.next())}},{key:"required",get:function(){return this._required},set:function(t){this._required=Object(s.b)(t)}},{key:"type",get:function(){return this._type},set:function(t){this._type=t||"text",this._validateType(),!this._isTextarea()&&Object(r.e)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}},{key:"placeholder",get:function(){return this.empty?this._placeholder:""},set:function(t){this._placeholder=t}},{key:"ngOnInit",value:function(){var t=this;this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(function(e){t.autofilled=e.isAutofilled,t.stateChanges.next()})}},{key:"elementRef",get:function(){return this._elementRef}},{key:"_onInput",value:function(){}},{key:"_focusChanged",value:function(t){t===this.focused||this.readonly||(this.focused=t,this.stateChanges.next())}},{key:"ngOnChanges",value:function(){this.stateChanges.next()}},{key:"ngOnDestroy",value:function(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)}},{key:"ngDoCheck",value:function(){this.ngControl&&this.updateErrorState(),this._dirtyCheckNativeValue()}},{key:"updateErrorState",value:function(){var t=this.errorState,e=this._errorStateMatcher.isErrorState(this.ngControl?this.ngControl.control:null,this._parentFormGroup||this._parentForm);e!==t&&(this.errorState=e,this.stateChanges.next())}},{key:"setDescribedByIds",value:function(t){this._ariaDescribedby=t.join(" ")}},{key:"setAriaLabel",value:function(t){this._ariaLabel=t}},{key:"_isBadInput",value:function(){var t=this._elementRef.nativeElement.validity;return t&&t.badInput}},{key:"empty",get:function(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}},{key:"_isNeverEmpty",value:function(){return m.indexOf(this._type)>-1}},{key:"_isTextarea",value:function(){var t=this._elementRef.nativeElement;return!!t.nodeName&&"textarea"===t.nodeName.toLowerCase()}},{key:"_validateType",value:function(){if(g.indexOf(this._type)>-1)throw new Error("Input of type '".concat(this._type,"' is not supported"))}},{key:"shouldLabelFloat",get:function(){return this.focused||!this.empty||this.placeholder&&this.placeholder.length>0}},{key:"_dirtyCheckNativeValue",value:function(){var t=this.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}}]),t}()).\u0275fac=function(t){return new(t||p)(a.Qb(a.l),a.Qb(r.a),a.Qb(c.o,10),a.Qb(c.r,8),a.Qb(c.i,8),a.Qb(h.a),a.Qb(y,10),a.Qb(b))},p.\u0275dir=a.Lb({type:p,selectors:[["input","nxInput",""],["textarea","nxInput",""],["select","nxInput",""]],hostVars:21,hostBindings:function(t,e){1&t&&a.dc("blur",function(){return e._focusChanged(!1)})("focus",function(){return e._focusChanged(!0)})("input",function(){return e._onInput()}),2&t&&(a.Fb("id",e.id)("disabled",e.disabled||null)("readonly",e.readonly||null)("required",e.required||null)("aria-label",e._ariaLabel||null)("aria-describedby",e._ariaDescribedby||null)("aria-invalid",e.errorState)("aria-required",e.required.toString())("placeholder",e.placeholder||null),a.Ib("c-input",!0)("nx-input",!0)("is-filled",!1===e.empty)("is-disabled",e.disabled)("has-error",e.errorState)("is-focused",e.focused))},inputs:{_ariaLabel:["nxAriaLabel","_ariaLabel"],id:"id",value:"value",readonly:"readonly",disabled:"disabled",required:"required",type:"type",placeholder:"placeholder"},exportAs:["nxInput"],features:[a.Db([{provide:l.c,useExisting:p}]),a.Cb]}),p)}}])}();