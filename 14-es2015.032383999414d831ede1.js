(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"3Jzs":function(e,t,n){"use strict";n.d(t,"a",function(){return b});var o=n("u47x"),i=n("fXoL"),s=n("SNKa"),r=n("HDdC"),a=n("hbct"),l=n("ofXK");const c=["panel"];function h(e,t){if(1&e&&(i.Wb(0,"nx-autocomplete-option",4),i.Jc(1),i.Vb()),2&e){const e=t.$implicit;i.nc("value",e),i.Eb(1),i.Lc(" ",e," ")}}function u(e,t){if(1&e&&(i.Ub(0),i.Hc(1,h,2,2,"nx-autocomplete-option",3),i.Tb()),2&e){const e=i.hc(2);i.Eb(1),i.nc("ngForOf",e.items)}}function p(e,t){1&e&&(i.Ub(0),i.lc(1),i.Tb())}function d(e,t){if(1&e&&(i.Wb(0,"div",0,1),i.Hc(2,u,2,1,"ng-container",2),i.Hc(3,p,2,0,"ng-container",2),i.Vb()),2&e){const e=i.hc();i.Ib("nx-autocomplete-panel--in-outline-field",e._isInOutlineField),i.nc("id",e.id)("ngClass",e._classList),i.Eb(2),i.nc("ngIf",e.hasItems),i.Eb(1),i.nc("ngIf",!e.hasItems)}}const g=["*"];let _=0;class m{constructor(e,t){this.source=e,this.option=t}}let b=(()=>{class e{constructor(e,t,n){this._changeDetectorRef=e,this._elementRef=t,this.formFieldComponent=n,this.showPanel=!1,this._isOpen=!1,this._items=null,this._hasItems=!1,this.optionSelected=new i.o,this.opened=new i.o,this.closed=new i.o,this._classList={},this.id="nx-autocomplete-"+_++,this.valueFormatter=e=>e?e.toString():null}get isOpen(){return this._isOpen&&this.showPanel}set items(e){if(this._hasItems=!0,Array.isArray(e))this._items=e;else if(e instanceof r.a)this._itemsSubscription&&this._itemsSubscription.unsubscribe(),this._itemsSubscription=e.subscribe(e=>{this._items=e,this._changeDetectorRef.markForCheck(),setTimeout(()=>this._setVisibility())});else{if(null!==e)throw new Error("Invalid argument for autocomplete items. It has to be Array<string> or Observable<Array<string>>");this._items=e}}get items(){return this._items}get hasItems(){return this._hasItems}get options(){return this.hasItems?this._vOptions:this._cOptions}set classList(e){e&&e.length&&(e.split(" ").forEach(e=>this._classList[e.trim()]=!0),this._elementRef.nativeElement.className="")}ngAfterViewInit(){this._keyManager=new o.b(this.options).withWrap(),this._setVisibility()}ngOnDestroy(){this._itemsSubscription&&this._itemsSubscription.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!(!this.options||!this.options.length),this._classList["nx-autocomplete-visible"]=this.showPanel,this._classList["nx-autocomplete-hidden"]=!this.showPanel,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){const t=new m(this,e);this.optionSelected.emit(t)}get _isInOutlineField(){return null!==this.formFieldComponent&&"outline"===this.formFieldComponent.appearance}}return e.\u0275fac=function(t){return new(t||e)(i.Qb(i.h),i.Qb(i.l),i.Qb(a.b,8))},e.\u0275cmp=i.Kb({type:e,selectors:[["nx-autocomplete"]],contentQueries:function(e,t,n){if(1&e&&i.Jb(n,s.a,1),2&e){let e;i.tc(e=i.ec())&&(t._cOptions=e)}},viewQuery:function(e,t){if(1&e&&(i.Nc(i.O,1),i.Nc(c,1),i.Nc(s.a,1)),2&e){let e;i.tc(e=i.ec())&&(t.template=e.first),i.tc(e=i.ec())&&(t.panel=e.first),i.tc(e=i.ec())&&(t._vOptions=e)}},hostAttrs:[1,"nx-autocomplete"],inputs:{items:"items",classList:["class","classList"],valueFormatter:["nxValueFormatter","valueFormatter"]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed"},exportAs:["nxAutocomplete"],ngContentSelectors:g,decls:1,vars:0,consts:[["role","listbox",1,"nx-autocomplete-panel",3,"id","ngClass"],["panel",""],[4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(i.mc(),i.Hc(0,d,4,6,"ng-template"))},directives:[l.n,l.q,l.p,s.a],styles:["[_nghost-%COMP%]     .c-input::-ms-clear{width:0;height:0}.nx-autocomplete-panel[_ngcontent-%COMP%]{background-color:var(--dropdown-panel-background-color);box-shadow:0 2px 4px rgba(65,65,65,.5);overflow-y:auto;overflow-x:hidden;max-height:280px;width:100%;border-radius:4px}.nx-autocomplete-panel.nx-autocomplete-visible[_ngcontent-%COMP%]{visibility:visible}.nx-autocomplete-panel.nx-autocomplete-hidden[_ngcontent-%COMP%]{visibility:hidden}.nx-autocomplete-panel--in-outline-field[_ngcontent-%COMP%]     nx-autocomplete-option .nx-autocomplete-option, .nx-autocomplete-panel--in-outline-field[_ngcontent-%COMP%]     nx-autocomplete-option .nx-autocomplete-option__label{font-size:var(--dropdown-item-outline-font-size);line-height:var(--dropdown-item-outline-line-height);font-weight:var(--dropdown-item-outline-font-weight);letter-spacing:var(--dropdown-item-outline-letter-spacing)}@media screen and (-ms-high-contrast:active){.nx-autocomplete-panel[_ngcontent-%COMP%]{box-shadow:0 0 0 1px windowText}}"],changeDetection:0}),e})()},Dr49:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var o=n("8LU1"),i=n("XNiG"),s=n("quSY"),r=n("VRyK"),a=n("1G5W"),l=n("gcYM"),c=n("3E0/"),h=n("tg6J"),u=n("fXoL");const p=["*"];let d=(()=>{class e{constructor(e,t){this._changeDetectorRef=e,this._ngZone=t,this._negative=!1,this.resizeEvent$=new i.a,this._destroyed=new i.a,this.updatePopoversSubscription=s.a.EMPTY,this._size="large",this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.pipe(Object(a.a)(this._destroyed)).subscribe(()=>{this.updatePositionPopovers()})})}set negative(e){this._negative=Object(o.b)(e)}get negative(){return this._negative}set size(e){this._size=e,this._changeDetectorRef.markForCheck()}get size(){return this._size}onResize(e){this.resizeEvent$.next()}ngAfterContentInit(){const e=this._words.map(e=>e.inputChanges),t=Object(r.a)(...e);this.updatePopoversSubscription=t.subscribe(()=>{this.updatePositionPopovers()}),this.resizeObservable=this.resizeEvent$.pipe(Object(l.a)(500),Object(c.a)(100)),this.resizeObservable.subscribe(()=>this.resizeWords())}resizeWords(){this._words.forEach(e=>{e.updateCurrentTextWidth()})}ngOnDestroy(){this.updatePopoversSubscription.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}updatePositionPopovers(){this._words&&this._words.forEach(e=>{e.repositionError()})}}return e.\u0275fac=function(t){return new(t||e)(u.Qb(u.h),u.Qb(u.B))},e.\u0275cmp=u.Kb({type:e,selectors:[["nx-natural-language-form"]],contentQueries:function(e,t,n){if(1&e&&u.Jb(n,h.a,0),2&e){let e;u.tc(e=u.ec())&&(t._words=e)}},hostVars:6,hostBindings:function(e,t){1&e&&u.dc("orientationchange",function(e){return t.onResize(e)},!1,u.xc)("resize",function(e){return t.onResize(e)},!1,u.xc),2&e&&u.Ib("is-negative",t.negative)("nx-natural-language-form--small","small"===t.size)("nx-natural-language-form--large","large"===t.size)},inputs:{negative:["nxNegative","negative"],size:"size"},ngContentSelectors:p,decls:2,vars:0,consts:[[1,"nx-natural-language-form__wrapper"]],template:function(e,t){1&e&&(u.mc(),u.Wb(0,"div",0),u.lc(1),u.Vb())},styles:["[_nghost-%COMP%]{display:block;font-size:var(--natural-language-form-large-font-size);line-height:var(--natural-language-form-large-line-height);font-weight:var(--natural-language-form-large-font-weight);letter-spacing:var(--natural-language-form-large-letter-spacing);color:var(--natural-language-form-text-color);padding-top:72px;padding-bottom:80px}[_nghost-%COMP%]     .c-input{font-size:inherit;line-height:inherit}[_nghost-%COMP%]     nx-word+nx-word{margin-left:2px}[dir=rtl]   [_nghost-%COMP%]     nx-word+nx-word{margin-right:2px;margin-left:0}.is-negative[_nghost-%COMP%]{color:var(--negative)}@media (max-width:991px){[_nghost-%COMP%]{font-size:var(--natural-language-form-small-font-size);line-height:var(--natural-language-form-small-line-height);font-weight:var(--natural-language-form-small-font-weight);letter-spacing:var(--natural-language-form-small-letter-spacing)}}.nx-natural-language-form__wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.nx-natural-language-form__wrapper[_ngcontent-%COMP%] >   *{margin-bottom:8px}.nx-natural-language-form--small[_nghost-%COMP%]{font-size:var(--natural-language-form-small-font-size);line-height:var(--natural-language-form-small-line-height);font-weight:var(--natural-language-form-small-font-weight);letter-spacing:var(--natural-language-form-small-letter-spacing)}.nx-natural-language-form--small[_nghost-%COMP%]     .c-input{font-size:inherit;line-height:inherit}"],changeDetection:0}),e})()},SNKa:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var o=n("fXoL"),i=n("FtGj"),s=n("8LU1");const r=["*"];class a{constructor(e,t=!1){this.source=e,this.isUserInput=t}}let l=0,c=(()=>{class e{constructor(e,t){this.elementRef=e,this._changeDetectorRef=t,this._id="nx-autocomplete-option-"+l++,this._selected=!1,this._active=!1,this._disabled=!1,this.onSelectionChange=new o.o}get id(){return this._id}get selected(){return this._selected}get active(){return this._active}get disabled(){return this._disabled}set disabled(e){const t=Object(s.b)(e);this._disabled!==t&&(this._disabled=t)}_handleKeydown(e){e.keyCode!==i.f&&e.keyCode!==i.p||(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new a(this,e))}get viewValue(){return(this.elementRef.nativeElement.textContent||"").trim()}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}select(){this._selected=!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent()}deselect(){this._selected=!1,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent()}focus(){const e=this.elementRef.nativeElement;"function"==typeof e.focus&&e.focus()}}return e.\u0275fac=function(t){return new(t||e)(o.Qb(o.l),o.Qb(o.h))},e.\u0275cmp=o.Kb({type:e,selectors:[["nx-autocomplete-option"]],hostAttrs:["role","option"],hostVars:10,hostBindings:function(e,t){1&e&&o.dc("click",function(){return t._selectViaInteraction()})("keydown",function(e){return t._handleKeydown(e)}),2&e&&(o.Zb("id",t.id),o.Fb("tabindex",t._getTabIndex())("aria-selected",t.selected.toString())("aria-disabled",t.disabled.toString()),o.Ec("display","block"),o.Ib("nx-active",t.active)("nx-disabled",t.disabled))},inputs:{disabled:"disabled",value:"value"},outputs:{onSelectionChange:"onSelectionChange"},ngContentSelectors:r,decls:3,vars:2,consts:[[1,"nx-autocomplete-option"],[1,"nx-autocomplete-option__label"]],template:function(e,t){1&e&&(o.mc(),o.Wb(0,"div",0),o.Wb(1,"div",1),o.lc(2),o.Vb(),o.Vb()),2&e&&o.Ib("nx-active",t.active)},styles:["[_nghost-%COMP%]:focus{outline:none}[_nghost-%COMP%]:first-child   .nx-autocomplete-option[_ngcontent-%COMP%]{padding-top:16px}[_nghost-%COMP%]:last-child   .nx-autocomplete-option[_ngcontent-%COMP%]{padding-bottom:16px}[_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]{font-size:var(--dropdown-item-font-size);line-height:var(--dropdown-item-line-height);font-weight:var(--dropdown-item-font-weight);letter-spacing:var(--dropdown-item-letter-spacing);cursor:pointer;position:relative;display:flex;max-width:100%;white-space:nowrap;padding:8px 32px}[dir=rtl]   [_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]{padding:8px 8px 8px 32px}[_nghost-%COMP%]   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]:hover   .nx-autocomplete-option__label[_ngcontent-%COMP%]{color:var(--dropdown-item-hover-color)}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]:hover   .nx-autocomplete-option__label[_ngcontent-%COMP%]{color:highlightText;background-color:highlight;border-radius:4px}}[_nghost-%COMP%]   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{border-radius:4px;box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}[dir=rtl]   [_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]{padding-right:32px}[_nghost-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{padding:0 12px;margin:0 -12px;color:var(--dropdown-item-text-color)}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{-ms-high-contrast-adjust:none;color:buttonText;background-color:buttonFace;border-radius:4px}}"],changeDetection:0}),e})()},ZczJ:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n("u47x"),i=n("rDax"),s=n("ofXK"),r=n("fXoL");let a=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Ob({type:e}),e.\u0275inj=r.Nb({imports:[[s.c,i.f,o.a]]}),e})();n("SNKa"),n("3Jzs"),n("g+D5")},"g+D5":function(e,t,n){"use strict";n.d(t,"a",function(){return E});var o=n("8LU1"),i=n("FtGj"),s=n("rDax"),r=n("+rOU"),a=n("ofXK"),l=n("fXoL"),c=n("3Pt+"),h=n("quSY"),u=n("XNiG"),p=n("NXyV"),d=n("VRyK"),g=n("LRne"),_=n("xgIS"),m=n("IzEk"),b=n("eIep"),v=n("pLZG"),f=n("Kj3r"),x=n("SxV6"),w=n("vkgz"),C=n("3E0/"),O=n("vxfF"),y=n("cH1L"),P=n("hbct"),M=n("p9I2");const S={provide:c.n,useExisting:Object(l.W)(()=>E),multi:!0};let E=(()=>{class e{constructor(e,t,n,o,i,s,r,a,l,c){this._element=e,this._overlay=t,this._viewContainerRef=n,this._zone=o,this._changeDetectorRef=i,this._dir=s,this._nxFormField=r,this._nxWordField=a,this._document=l,this._viewportRuler=c,this._componentDestroyed=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=h.a.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new u.a,this._valueChanges=new u.a,this._dirChangeSubscription=h.a.EMPTY,this._itemsCb=null,this._debounce=400,this._autocompleteDisabled=!1,this._overlayAttached=!1,this.optionSelections=Object(p.a)(()=>this.autocomplete&&this.autocomplete.options?Object(d.a)(...this.autocomplete.options.map(e=>e.onSelectionChange)):this._zone.onStable.asObservable().pipe(Object(m.a)(1),Object(b.a)(()=>this.optionSelections))),this._windowBlurHandler=()=>{this._canOpenOnNextFocus=document.activeElement!==this._element.nativeElement||this.panelOpen},this._onChange=e=>{this._valueChanges.next(e)},this._onTouched=()=>{},"undefined"!=typeof window&&o.runOutsideAngular(()=>{window.addEventListener("blur",this._windowBlurHandler)})}set itemsCb(e){if("function"!=typeof e)throw new Error("Wrong value type for nxAutocompleteItems");this._itemsCb=e}get itemsCb(){return this._itemsCb}set debounce(e){this._debounce=Object(o.e)(e)}set autocompleteDisabled(e){this._autocompleteDisabled=e,this._bindAutocompleteItems()}get autocompleteDisabled(){return this._autocompleteDisabled}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}get _outsideClickStream(){return this._document?Object(d.a)(Object(_.a)(this._document,"mouseup"),Object(_.a)(this._document,"touchend")).pipe(Object(v.a)(e=>{const t=e.target,n=this._formField?this._formField.elementRef.nativeElement:null;return this._overlayAttached&&t!==this._element.nativeElement&&(!n||!n.contains(t))&&!!this._overlayRef&&!this._overlayRef.overlayElement.contains(t)})):Object(g.a)(null)}get _formField(){return this._nxFormField?this._nxFormField:this._nxWordField?this._nxWordField:void 0}ngOnInit(){this._dirChangeSubscription=this._dir.change.subscribe(()=>{this._flipDirection(),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){var e,t,n;"undefined"!=typeof window&&window.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),null===(e=this._controlValueChangesSubscription)||void 0===e||e.unsubscribe(),null===(t=this._itemsSubscription)||void 0===t||t.unsubscribe(),null===(n=this._dirChangeSubscription)||void 0===n||n.unsubscribe()}ngOnChanges(){this._bindAutocompleteItems()}ngAfterViewInit(){this._bindAutocompleteItems()}_bindAutocompleteItems(){if(this._controlValueChangesSubscription&&this._controlValueChangesSubscription.unsubscribe(),"function"==typeof this._itemsCb&&this.autocomplete&&!this.autocompleteDisabled){const e=new u.a;this.autocomplete.items=e,this._controlValueChangesSubscription=(this._formField&&this._formField._control&&this._formField._control.ngControl&&this._formField._control.ngControl.valueChanges?this._formField._control.ngControl.valueChanges:this._valueChanges).pipe(Object(f.a)(this._debounce)).subscribe(t=>{this._itemsSubscription&&this._itemsSubscription.unsubscribe(),this._itemsSubscription=this._itemsCb(t).pipe(Object(x.a)()).subscribe(t=>{e.next(t)},t=>{e.next([])})})}}openPanel(){this.autocompleteDisabled||(this._attachOverlay(),this._floatLabel())}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this.autocomplete.closed.emit(),this.autocomplete._isOpen=this._overlayAttached=!1,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._componentDestroyed||this._changeDetectorRef.detectChanges())}get panelClosingActions(){return Object(d.a)(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Object(v.a)(()=>this._overlayAttached)),this._closeKeyEventStream,this._outsideClickStream,this._overlayRef?this._overlayRef.detachments().pipe(Object(v.a)(()=>this._overlayAttached)):Object(g.a)())}writeValue(e){Promise.resolve(null).then(()=>this._setTriggerValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){const t=e.keyCode;if(t===i.g&&e.preventDefault(),this.panelOpen&&(t===i.g||t===i.r&&e.altKey))this._resetActiveItem(),this._closeKeyEventStream.next(),e.stopPropagation();else if(this.activeOption&&t===i.f&&this.panelOpen)this.activeOption._selectViaInteraction(),this._resetActiveItem(),e.preventDefault();else{const n=this.autocomplete._keyManager.activeItem,o=t===i.r||t===i.d;this.panelOpen||t===i.q?this.autocomplete._keyManager.onKeydown(e):o&&this._isFieldEnabled()&&this.openPanel(),(o||this.autocomplete._keyManager.activeItem!==n)&&this._scrollToOption()}}_handleInput(e){const t=e.target;let n=t.value;"number"===t.type&&(n=""===n?null:parseFloat(n)),this._isFieldEnabled()&&this._previousValue!==n&&document.activeElement===e.target&&(this._previousValue=n,this._onChange(n),this.openPanel())}_handleFocus(){this._canOpenOnNextFocus?this._isFieldEnabled()&&(this._previousValue=this._element.nativeElement.value,this.openPanel()):this._canOpenOnNextFocus=!0}_floatLabel(){this._nxFormField&&"auto"===this._nxFormField.floatLabel&&(this._nxFormField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._nxFormField.floatLabel="auto",this._manuallyFloatingLabel=!1)}_scrollToOption(){if(0===this.autocomplete.options.length)return;let e=0,t=this.autocomplete.options.first.elementRef.nativeElement.offsetHeight;this.autocomplete._keyManager.activeItem&&(e=this.autocomplete._keyManager.activeItem.elementRef.nativeElement.offsetTop,t=this.autocomplete._keyManager.activeItem.elementRef.nativeElement.offsetHeight);const n=this.autocomplete.panel.nativeElement.offsetTop,o=function(e,t,n,o){return e<n?e:e+t>n+o?Math.max(0,e-o+t):n}(e,t,this.autocomplete._getScrollTop()+n,this.autocomplete.panel.nativeElement.offsetHeight);this.autocomplete._setScrollTop(o-n)}_subscribeToClosingActions(){const e=this._zone.onStable.asObservable().pipe(Object(m.a)(1)),t=this.autocomplete.options.changes.pipe(Object(w.a)(()=>this._positionStrategy.reapplyLastPosition()),Object(C.a)(0));return Object(d.a)(e,t).pipe(Object(b.a)(()=>(this._resetActiveItem(),this.autocomplete._setVisibility(),this.panelClosingActions)),Object(m.a)(1)).subscribe(e=>this._setValueAndClose(e))}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_setTriggerValue(e){const t=this.autocomplete&&this.autocomplete.valueFormatter?this.autocomplete.valueFormatter(e):e,n=null!=t?t:"";this._formField?this._formField._control.value=n:this._element.nativeElement.value=n}_setValueAndClose(e){e&&e.source&&(this._clearPreviousSelectedOption(e.source),this._setTriggerValue(e.source.value),this._onChange(e.source.value),this._element.nativeElement.focus(),this.autocomplete._emitSelectEvent(e.source)),this.closePanel()}_clearPreviousSelectedOption(e){this.autocomplete.options.forEach(t=>{t!==e&&t.selected&&t.deselect()})}_attachOverlay(){if(!this.autocomplete)throw Error("Attempting to open an undefined instance of `nx-autocomplete`. Make sure that the id passed to the `nxAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.");this._overlayRef?this._overlayRef.updateSize({minWidth:this._getHostWidth()}):(this._portal=new r.i(this.autocomplete.template,this._viewContainerRef),this._overlayRef=this._overlay.create(this._getOverlayConfig()),this._viewportRuler&&(this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&this._overlayRef&&this._overlayRef.updateSize({minWidth:this._getHostWidth()})}))),this._overlayRef&&!this._overlayRef.hasAttached()&&(this._overlayRef.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());const e=this.panelOpen;this.autocomplete._setVisibility(),this.autocomplete._isOpen=this._overlayAttached=!0,this.panelOpen&&e!==this.panelOpen&&this.autocomplete.opened.emit()}_getOverlayConfig(){var e;return new s.d({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),minWidth:this._getHostWidth(),direction:(null===(e=this._dir)||void 0===e?void 0:e.value)||"ltr"})}_getOverlayPosition(){var e;const t="rtl"===(null===(e=this._dir)||void 0===e?void 0:e.value)?0:16;return this._positionStrategy=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withViewportMargin(t).withPush(!1).withGrowAfterOpen(!0).withPositions([{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"}]),this._positionStrategy}_scrollStrategy(){return this._overlay.scrollStrategies.reposition()}_getConnectedElement(){return this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){this.autocomplete._keyManager.setActiveItem(-1)}_isFieldEnabled(){const e=this._element.nativeElement;return!e.readOnly&&!e.disabled}_flipDirection(){var e,t;null===(e=this._overlayRef)||void 0===e||e.setDirection(this._dir.value),null===(t=this._overlayRef)||void 0===t||t.updatePositionStrategy(this._getOverlayPosition())}}return e.\u0275fac=function(t){return new(t||e)(l.Qb(l.l),l.Qb(s.c),l.Qb(l.S),l.Qb(l.B),l.Qb(l.h),l.Qb(y.c),l.Qb(P.b,9),l.Qb(M.b,9),l.Qb(a.d,8),l.Qb(O.e))},e.\u0275dir=l.Lb({type:e,selectors:[["input","nxAutocomplete",""],["textarea","nxAutocomplete",""]],hostAttrs:["role","combobox","autocomplete","off","aria-autocomplete","list"],hostVars:3,hostBindings:function(e,t){1&e&&l.dc("focusin",function(){return t._handleFocus()})("blur",function(){return t._onTouched()})("input",function(e){return t._handleInput(e)})("keydown",function(e){return t._handleKeydown(e)}),2&e&&l.Fb("aria-activedescendant",null==t.activeOption?null:t.activeOption.id)("aria-expanded",t.panelOpen.toString())("aria-owns",null==t.autocomplete?null:t.autocomplete.id)},inputs:{autocomplete:["nxAutocomplete","autocomplete"],itemsCb:["nxAutocompleteItems","itemsCb"],debounce:["nxAutocompleteDebounce","debounce"],autocompleteDisabled:["nxAutocompleteDisabled","autocompleteDisabled"]},exportAs:["nxAutocompleteTrigger"],features:[l.Db([S]),l.Cb]}),e})()},ierq:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var o=n("tgBs"),i=n("/sJ9"),s=n("eV8M"),r=n("gkbm"),a=n("ofXK"),l=n("3Pt+"),c=n("fXoL");let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Ob({type:e}),e.\u0275inj=c.Nb({imports:[[],a.c,l.k,l.v,r.b,s.a,i.a,o.a]}),e})()},p9I2:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return l.a});var o=n("+Gny"),i=n("AqTC"),s=n("ofXK"),r=n("fXoL");let a=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Ob({type:e}),e.\u0275inj=r.Nb({imports:[[s.c,i.b,o.a]]}),e})();n("Dr49");var l=n("tg6J")},tg6J:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var o=n("hbct"),i=n("zB3U"),s=n("rDax"),r=n("JX91"),a=n("quSY"),l=n("XNiG"),c=n("HMmR"),h=n("+rOU"),u=n("fXoL"),p=n("ofXK"),d=n("gt5x");const g=["popover"];function _(e,t){1&e&&(u.Wb(0,"div",2),u.lc(1,2),u.Vb())}const m=[[["nx-dropdown"]],[["","nxError",""]],[["","nxInput",""]]],b=["nx-dropdown","[nxError]","[nxInput]"];let v=(()=>{class e{constructor(e,t,n,o,i,s){this.elementRef=e,this._changeDetectorRef=t,this._renderer=n,this._overlay=o,this._viewContainerRef=i,this._overlayPositionBuilder=s,this.subscription=a.a.EMPTY,this.subscriptionValues=a.a.EMPTY,this.inputChanges=new l.a,this._hasErrors=!1,this.currentTextWidth=0,this.size="regular"}ngOnInit(){this.setupErrorPopover()}ngAfterContentInit(){this._validateControlChild(),this.subscription=this._control.stateChanges.pipe(Object(r.a)(null)).subscribe(()=>{this._hasErrors=this._control.errorState,this.updateErrorPopoverState(),this._changeDetectorRef.markForCheck()}),this.subscriptionValues=this._control.ngControl?this._control.ngControl.valueChanges.subscribe(e=>{this.updateCurrentTextWidth(),this.inputChanges.next()}):this._control.stateChanges.subscribe(e=>{this.updateCurrentTextWidth(),this.inputChanges.next()}),this._control.setAriaLabel(this.label)}ngOnDestroy(){this._overlayRef&&this._overlayRef.dispose(),this.subscription.unsubscribe()}updateCurrentTextWidth(){this.measureCanvas||(this.measureCanvas=this._renderer.createElement("canvas"));const e=this.measureCanvas.getContext("2d"),t=window.getComputedStyle(this._control.elementRef.nativeElement);e.font=Object(i.g)(t);const n=e.measureText(this._control.value).width+parseInt(t.paddingRight,10)+parseInt(t.paddingLeft,10)+1,o=this.elementRef.nativeElement.parentElement.getBoundingClientRect();this.currentTextWidth=Math.max(parseInt(t.minWidth,10),n),this.currentTextWidth=Math.min(this.currentTextWidth,o.width),this._overlayRef.hasAttached()&&this._overlayState.positionStrategy.apply()}repositionError(){this._overlayRef.hasAttached()&&this._overlayState.positionStrategy.apply()}_validateControlChild(){if(!this._control)throw new Error("NxWordComponent requires an NxFormfieldControl compatible input.")}getConnectedOverlayOrigin(){return this.elementRef}get isFocused(){return this._control.focused}get isFilled(){return!this._control.empty}get hasDropdown(){return Boolean(this._dropdown)}updateErrorPopoverState(){this._hasErrors&&this._errorChildren.length>0?this.showPopover():this.hidePopover()}setupErrorPopover(){const e=this._overlayPositionBuilder.flexibleConnectedTo(this.elementRef).withLockedPosition(!0).withFlexibleDimensions(!1).withPush(!0).withPositions([{originX:"center",originY:"top",overlayX:"center",overlayY:"bottom"},{originX:"center",originY:"bottom",overlayX:"center",overlayY:"top"}]).withDefaultOffsetY(-8);this._overlayState=new s.d,this._overlayState.positionStrategy=e,this._overlayState.scrollStrategy=this._overlay.scrollStrategies.reposition(),this._overlayRef=this._overlay.create(this._overlayState),this._overlayState.positionStrategy.positionChanges.subscribe(e=>{this.positionArrow(e.connectionPair),this._embeddedViewRef&&!this._embeddedViewRef.destroyed&&this._embeddedViewRef.detectChanges()})}positionArrow(e){const t=this.elementRef.nativeElement.getBoundingClientRect().left+this.elementRef.nativeElement.getBoundingClientRect().width/2-(this._overlayRef.overlayElement.parentElement.offsetLeft+this._overlayRef.overlayElement.offsetLeft);this._popover.direction="top"===e.originY&&"bottom"===e.overlayY?"top":"bottom",this._popover.arrowStyle={left:t+"px"}}showPopover(){if(!this._overlayRef.hasAttached()){const e=new h.i(this._popover.templateRef,this._viewContainerRef);this._embeddedViewRef=this._overlayRef.attach(e)}}hidePopover(){this._overlayRef.detach()}}return e.\u0275fac=function(t){return new(t||e)(u.Qb(u.l),u.Qb(u.h),u.Qb(u.H),u.Qb(s.c),u.Qb(u.S),u.Qb(s.g))},e.\u0275cmp=u.Kb({type:e,selectors:[["nx-word"]],contentQueries:function(e,t,n){if(1&e&&(u.Jb(n,o.c,1),u.Jb(n,c.a,1),u.Jb(n,o.d,0)),2&e){let e;u.tc(e=u.ec())&&(t._control=e.first),u.tc(e=u.ec())&&(t._dropdown=e.first),u.tc(e=u.ec())&&(t._errorChildren=e)}},viewQuery:function(e,t){if(1&e&&u.Nc(g,3),2&e){let e;u.tc(e=u.ec())&&(t._popover=e.first)}},hostVars:16,hostBindings:function(e,t){2&e&&(u.Ec("width",t.currentTextWidth,"px"),u.Ib("size-short","short"==t.size)("size-regular","regular"==t.size)("size-long","long"==t.size)("has-error",t._hasErrors)("is-focused",t.isFocused)("is-filled",t.isFilled)("has-dropdown",t.hasDropdown))},inputs:{size:["nxSize","size"],label:["nxLabel","label"]},ngContentSelectors:b,decls:6,vars:1,consts:[["class","nx-word__inner-wrapper",4,"ngIf"],["popover",""],[1,"nx-word__inner-wrapper"]],template:function(e,t){1&e&&(u.mc(m),u.Wb(0,"div"),u.Hc(1,_,2,0,"div",0),u.lc(2),u.Vb(),u.Wb(3,"nx-popover",null,1),u.lc(5,1),u.Vb()),2&e&&(u.Eb(1),u.nc("ngIf",!t.hasDropdown))},directives:[p.q,d.a],styles:["[_nghost-%COMP%]{display:inline-block;position:relative;font-weight:400;text-align:center;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;width:100%;margin:0 4px}[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%]{border-bottom:2px solid var(--natural-language-form-border-color)}.size-short[_nghost-%COMP%]{min-width:80px}.size-regular[_nghost-%COMP%]{min-width:152px}.size-long[_nghost-%COMP%]{min-width:360px}@media (max-width:991px){.size-long[_nghost-%COMP%]{min-width:280px}}@media (max-width:703px){.size-long[_nghost-%COMP%]{min-width:248px}}[_nghost-%COMP%]     .c-input{display:inline-block;text-align:inherit;font-size:inherit;line-height:inherit;background:0 0;color:inherit;border:none;outline:0;margin:0;width:100%;max-width:100%;height:auto;box-shadow:none;padding:0 8px}[_nghost-%COMP%]     .c-input.is-focused{outline:none;box-shadow:none}[_nghost-%COMP%]     .c-input.is-filled, [_nghost-%COMP%]     .c-input.is-focused{color:var(--natural-language-form-active-color);font-weight:400}[_nghost-%COMP%]     .c-input.is-disabled{cursor:not-allowed}[_nghost-%COMP%]     .c-input::-ms-clear{display:none}[_nghost-%COMP%]     nx-dropdown{position:relative;border-bottom:2px solid var(--natural-language-form-border-color)}[_nghost-%COMP%]     nx-dropdown .nx-dropdown__container{font-size:inherit;margin-bottom:-2px}@media (max-width:991px){[_nghost-%COMP%]     nx-dropdown .nx-dropdown__container{font-size:26px}}[_nghost-%COMP%]     nx-dropdown.has-focus, [_nghost-%COMP%]     nx-dropdown.is-filled{color:var(--natural-language-form-active-color);border-color:var(--natural-language-form-active-border-color)}[_nghost-%COMP%]     nx-dropdown .nx-dropdown__icon{line-height:inherit}[_nghost-%COMP%]     .nx-word__input-wrapper{width:100%}.is-filled[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%], .is-focused[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%]{border-color:var(--natural-language-form-active-border-color)}.has-error[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]     nx-dropdown{border-color:var(--natural-language-form-error-border-color)}.has-error[_nghost-%COMP%]     .c-input.has-error, .has-error[_nghost-%COMP%]     nx-dropdown{color:var(--natural-language-form-error-color)}.is-negative[_nghost-%COMP%]     .nx-dropdown, .is-negative   [_nghost-%COMP%]     .nx-dropdown, .is-negative[_nghost-%COMP%]     nx-dropdown, .is-negative   [_nghost-%COMP%]     nx-dropdown, .is-negative[_nghost-%COMP%]     nx-dropdown.is-filled, .is-negative   [_nghost-%COMP%]     nx-dropdown.is-filled{border-color:var(--negative);color:var(--negative)}.is-negative[_nghost-%COMP%]     .c-input, .is-negative   [_nghost-%COMP%]     .c-input, .is-negative[_nghost-%COMP%]     .c-input.has-error, .is-negative   [_nghost-%COMP%]     .c-input.has-error{color:var(--negative)}.is-negative[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%], .is-negative   [_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%]{border-color:var(--negative)}.nx-word__inner-wrapper[_ngcontent-%COMP%]{height:var(--natural-language-form-large-line-height)}@media (max-width:991px){.nx-word__inner-wrapper[_ngcontent-%COMP%]{height:var(--natural-language-form-small-line-height)}}.nx-natural-language-form--small[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%], .nx-natural-language-form--small   [_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%]{height:var(--natural-language-form-small-line-height)}@media screen and (-ms-high-contrast:active){.nx-word__inner-wrapper[_ngcontent-%COMP%],   nx-dropdown{border-bottom-color:buttonText!important}.is-focused[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%], .is-focused[_nghost-%COMP%]     nx-dropdown{border-bottom-color:highlight!important}}"],changeDetection:0}),e})()}}]);