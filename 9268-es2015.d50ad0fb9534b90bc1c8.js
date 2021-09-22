"use strict";(self.webpackChunkng_aquila=self.webpackChunkng_aquila||[]).push([[9268],{96109:function(e,t,i){i.d(t,{Lq:function(){return _},IC:function(){return p},Ky:function(){return m}});var s=i(80521),n=i(37716),r=i(39490),o=i(59193),a=i(79765),h=i(22759),l=i(25124),d=i(46782),c=i(38583);const u=(0,s.i$)({passive:!0});let _=(()=>{class e{constructor(e,t){this._platform=e,this._ngZone=t,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return o.E;const t=(0,r.fI)(e),i=this._monitoredElements.get(t);if(i)return i.subject;const s=new a.xQ,n="cdk-text-field-autofilled",h=e=>{"cdk-text-field-autofill-start"!==e.animationName||t.classList.contains(n)?"cdk-text-field-autofill-end"===e.animationName&&t.classList.contains(n)&&(t.classList.remove(n),this._ngZone.run(()=>s.next({target:e.target,isAutofilled:!1}))):(t.classList.add(n),this._ngZone.run(()=>s.next({target:e.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{t.addEventListener("animationstart",h,u),t.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(t,{subject:s,unlisten:()=>{t.removeEventListener("animationstart",h,u)}}),s}stopMonitoring(e){const t=(0,r.fI)(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(s.t4),n.LFG(n.R0b))},e.\u0275prov=n.Yz7({factory:function(){return new e(n.LFG(s.t4),n.LFG(n.R0b))},token:e,providedIn:"root"}),e})(),p=(()=>{class e{constructor(e,t,i,s){this._elementRef=e,this._platform=t,this._ngZone=i,this._destroyed=new a.xQ,this._enabled=!0,this._previousMinRows=-1,this._isViewInited=!1,this._handleFocusEvent=e=>{this._hasFocus="focus"===e.type},this._document=s,this._textareaElement=this._elementRef.nativeElement}get minRows(){return this._minRows}set minRows(e){this._minRows=(0,r.su)(e),this._setMinHeight()}get maxRows(){return this._maxRows}set maxRows(e){this._maxRows=(0,r.su)(e),this._setMaxHeight()}get enabled(){return this._enabled}set enabled(e){e=(0,r.Ig)(e),this._enabled!==e&&((this._enabled=e)?this.resizeToFitContent(!0):this.reset())}get placeholder(){return this._textareaElement.placeholder}set placeholder(e){this._cachedPlaceholderHeight=void 0,this._textareaElement.placeholder=e,this._cacheTextareaPlaceholderHeight()}_setMinHeight(){const e=this.minRows&&this._cachedLineHeight?this.minRows*this._cachedLineHeight+"px":null;e&&(this._textareaElement.style.minHeight=e)}_setMaxHeight(){const e=this.maxRows&&this._cachedLineHeight?this.maxRows*this._cachedLineHeight+"px":null;e&&(this._textareaElement.style.maxHeight=e)}ngAfterViewInit(){this._platform.isBrowser&&(this._initialHeight=this._textareaElement.style.height,this.resizeToFitContent(),this._ngZone.runOutsideAngular(()=>{const e=this._getWindow();(0,h.R)(e,"resize").pipe((0,l.e)(16),(0,d.R)(this._destroyed)).subscribe(()=>this.resizeToFitContent(!0)),this._textareaElement.addEventListener("focus",this._handleFocusEvent),this._textareaElement.addEventListener("blur",this._handleFocusEvent)}),this._isViewInited=!0,this.resizeToFitContent(!0))}ngOnDestroy(){this._textareaElement.removeEventListener("focus",this._handleFocusEvent),this._textareaElement.removeEventListener("blur",this._handleFocusEvent),this._destroyed.next(),this._destroyed.complete()}_cacheTextareaLineHeight(){if(this._cachedLineHeight)return;let e=this._textareaElement.cloneNode(!1);e.rows=1,e.style.position="absolute",e.style.visibility="hidden",e.style.border="none",e.style.padding="0",e.style.height="",e.style.minHeight="",e.style.maxHeight="",e.style.overflow="hidden",this._textareaElement.parentNode.appendChild(e),this._cachedLineHeight=e.clientHeight,this._textareaElement.parentNode.removeChild(e),this._setMinHeight(),this._setMaxHeight()}_measureScrollHeight(){const e=this._textareaElement,t=e.style.marginBottom||"",i=this._platform.FIREFOX,s=i&&this._hasFocus,n=i?"cdk-textarea-autosize-measuring-firefox":"cdk-textarea-autosize-measuring";s&&(e.style.marginBottom=`${e.clientHeight}px`),e.classList.add(n);const r=e.scrollHeight-4;return e.classList.remove(n),s&&(e.style.marginBottom=t),r}_cacheTextareaPlaceholderHeight(){if(!this._isViewInited||null!=this._cachedPlaceholderHeight)return;if(!this.placeholder)return void(this._cachedPlaceholderHeight=0);const e=this._textareaElement.value;this._textareaElement.value=this._textareaElement.placeholder,this._cachedPlaceholderHeight=this._measureScrollHeight(),this._textareaElement.value=e}ngDoCheck(){this._platform.isBrowser&&this.resizeToFitContent()}resizeToFitContent(e=!1){if(!this._enabled||(this._cacheTextareaLineHeight(),this._cacheTextareaPlaceholderHeight(),!this._cachedLineHeight))return;const t=this._elementRef.nativeElement,i=t.value;if(!e&&this._minRows===this._previousMinRows&&i===this._previousValue)return;const s=this._measureScrollHeight(),n=Math.max(s,this._cachedPlaceholderHeight||0);t.style.height=`${n}px`,this._ngZone.runOutsideAngular(()=>{"undefined"!=typeof requestAnimationFrame?requestAnimationFrame(()=>this._scrollToCaretPosition(t)):setTimeout(()=>this._scrollToCaretPosition(t))}),this._previousValue=i,this._previousMinRows=this._minRows}reset(){void 0!==this._initialHeight&&(this._textareaElement.style.height=this._initialHeight)}_noopInputHandler(){}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_scrollToCaretPosition(e){const{selectionStart:t,selectionEnd:i}=e;!this._destroyed.isStopped&&this._hasFocus&&e.setSelectionRange(t,i)}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(n.SBq),n.Y36(s.t4),n.Y36(n.R0b),n.Y36(c.K0,8))},e.\u0275dir=n.lG2({type:e,selectors:[["textarea","cdkTextareaAutosize",""]],hostAttrs:["rows","1",1,"cdk-textarea-autosize"],hostBindings:function(e,t){1&e&&n.NdJ("input",function(){return t._noopInputHandler()})},inputs:{minRows:["cdkAutosizeMinRows","minRows"],maxRows:["cdkAutosizeMaxRows","maxRows"],enabled:["cdkTextareaAutosize","enabled"],placeholder:"placeholder"},exportAs:["cdkTextareaAutosize"]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[s.ud]]}),e})()},20693:function(e,t,i){i.d(t,{G:function(){return c},a:function(){return m}});var s=i(39490),n=i(80521),r=i(37716),o=i(79765),a=i(95599),h=i(3679),l=i(23674),d=i(96109);const c=new r.OlP("NX_INPUT_VALUE_ACCESSOR"),u=["button","checkbox","file","hidden","image","radio","range","reset","submit"],_=["date","datetime","datetime-local","month","time","week"].filter(e=>(0,n.qK)().has(e));let p=0,m=(()=>{class e{constructor(e,t,i,s,n,r,a,h){this._elementRef=e,this._platform=t,this.ngControl=i,this._parentForm=s,this._parentFormGroup=n,this._errorStateMatcher=r,this._autofillMonitor=h,this._type="text",this._uid="nx-input-"+p++,this._disabled=!1,this._required=!1,this._readonly=!1,this.errorState=!1,this.controlType="nx-input",this.autofilled=!1,this.stateChanges=new o.xQ,this.focused=!1,this.id=this.id,this._inputValueAccessor=a||this._elementRef.nativeElement,this._previousNativeValue=this.value,"textarea"===this._elementRef.nativeElement.nodeName.toLowerCase()&&(this.controlType="textarea")}get id(){return this._id}set id(e){this._id=e||this._uid}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e)}get readonly(){return this._readonly}set readonly(e){this._readonly=(0,s.Ig)(e),this.stateChanges.next()}get disabled(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=(0,s.Ig)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get required(){return this._required}set required(e){this._required=(0,s.Ig)(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea()&&(0,n.qK)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get placeholder(){return this.empty?this._placeholder:""}set placeholder(e){this._placeholder=e}ngOnInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}get elementRef(){return this._elementRef}_onInput(){}_focusChanged(e){e!==this.focused&&!this.readonly&&(this.focused=e,this.stateChanges.next())}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)}ngDoCheck(){this.ngControl&&this.updateErrorState(),this._dirtyCheckNativeValue()}updateErrorState(){const e=this.errorState,t=this._errorStateMatcher.isErrorState(this.ngControl?this.ngControl.control:null,this._parentFormGroup||this._parentForm);t!==e&&(this.errorState=t,this.stateChanges.next())}setDescribedByIds(e){this._ariaDescribedby=e.join(" ")}setAriaLabel(e){this._ariaLabel=e}_isBadInput(){const e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}_isNeverEmpty(){return _.indexOf(this._type)>-1}_isTextarea(){const e=this._elementRef.nativeElement;return!!e.nodeName&&"textarea"===e.nodeName.toLowerCase()}_validateType(){if(u.indexOf(this._type)>-1)throw new Error(`Input of type '${this._type}' is not supported`)}get shouldLabelFloat(){return!!(this.focused||!this.empty||this.placeholder&&this.placeholder.length>0)}_dirtyCheckNativeValue(){const e=this.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(r.SBq),r.Y36(n.t4),r.Y36(h.a5,10),r.Y36(h.F,8),r.Y36(h.sg,8),r.Y36(l.rD),r.Y36(c,10),r.Y36(d.Lq))},e.\u0275dir=r.lG2({type:e,selectors:[["input","nxInput",""],["textarea","nxInput",""],["select","nxInput",""]],hostVars:21,hostBindings:function(e,t){1&e&&r.NdJ("blur",function(){return t._focusChanged(!1)})("focus",function(){return t._focusChanged(!0)})("input",function(){return t._onInput()}),2&e&&(r.uIk("id",t.id)("disabled",t.disabled||null)("readonly",t.readonly||null)("required",t.required||null)("aria-label",t._ariaLabel||null)("aria-describedby",t._ariaDescribedby||null)("aria-invalid",t.errorState)("aria-required",t.required.toString())("placeholder",t.placeholder||null),r.ekj("c-input",!0)("nx-input",!0)("is-filled",!1===t.empty)("is-disabled",t.disabled)("has-error",t.errorState)("is-focused",t.focused))},inputs:{_ariaLabel:["nxAriaLabel","_ariaLabel"],id:"id",value:"value",readonly:"readonly",disabled:"disabled",required:"required",type:"type",placeholder:"placeholder"},exportAs:["nxInput"],features:[r._Bn([{provide:a.iC,useExisting:e}]),r.TTD]}),e})()},8995:function(e,t,i){i.d(t,{I:function(){return h}});var s=i(36461),n=i(37716),r=i(4765),o=i(90805);const a="password-show-o";let h=(()=>{class e{constructor(e,t,i){this._changeDetectorRef=e,this._elementRef=t,this._focusMonitor=i,this._currentIcon=a,this._pressed=!1,this._ariaLabel="Show password",this._focusMonitor.monitor(this._elementRef)}set ariaLabel(e){e!==this._ariaLabel&&(this._ariaLabel=e,this._changeDetectorRef.markForCheck())}get ariaLabel(){return this._ariaLabel}ngAfterViewInit(){this.control?this._currentIcon="password"===this.control.type?a:"password-hide-o":console.warn("You need to pass an input as a control to the password toggle.")}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}toggleInputType(){this.control&&(this.control.type="password"===this.control.type?"text":"password",this._pressed=!this._pressed,this.toggleIcon(),this._changeDetectorRef.markForCheck())}toggleIcon(){this._currentIcon=this._currentIcon===a?"password-hide-o":a}_onKeydown(e){e&&(e.keyCode===s.K5||e.keyCode===s.L_)&&this.toggleInputType()}get tabindex(){return this.control?this.control.disabled?-1:0:null}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(n.sBO),n.Y36(n.SBq),n.Y36(r.tE))},e.\u0275cmp=n.Xpm({type:e,selectors:[["nx-password-toggle"]],hostAttrs:["role","button"],hostVars:3,hostBindings:function(e,t){1&e&&n.NdJ("click",function(){return t.toggleInputType()})("keydown",function(e){return t._onKeydown(e)}),2&e&&n.uIk("aria-label",t.ariaLabel)("tabindex",t.tabindex)("aria-pressed",t._pressed)},inputs:{control:"control",ariaLabel:"ariaLabel"},decls:1,vars:1,consts:[["aria-hidden","true",3,"name"]],template:function(e,t){1&e&&n._UZ(0,"nx-icon",0),2&e&&n.Q6J("name",t._currentIcon)},directives:[o.O],styles:["[_nghost-%COMP%]{position:relative;display:inline-block;height:24px;width:24px;cursor:pointer}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]{color:buttonText!important}}[_nghost-%COMP%]:focus{outline:none}[_nghost-%COMP%]:hover{color:var(--hover-primary)}.cdk-keyboard-focused[_nghost-%COMP%]     nx-icon{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast: active){.cdk-keyboard-focused[_nghost-%COMP%]     nx-icon{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}.is-disabled[_nghost-%COMP%], .is-disabled   [_nghost-%COMP%]{pointer-events:none}@media screen and (-ms-high-contrast: active){.is-disabled[_nghost-%COMP%], .is-disabled   [_nghost-%COMP%]{color:GrayText!important}}"],changeDetection:0}),e})()},79268:function(e,t,i){i.d(t,{GH:function(){return h.G},ZI:function(){return a}});var s=i(38583),n=i(95599),r=i(42677),o=i(37716);let a=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[s.ez,n._0,r.cf],n._0]}),e})();var h=i(20693);i(8995)}}]);