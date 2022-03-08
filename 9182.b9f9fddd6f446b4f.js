"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[9182],{9182:(st,D,s)=>{s.d(D,{EU:()=>X,_R:()=>tt,ey:()=>u,Kl:()=>w});var C=s(5583),e=s(5e3),S=s(2916),O=s(2654),d=s(8929),T=s(8514),h=s(6787),b=s(1086),y=s(3753),E=s(3191),r=s(1159),M=s(3252),c=s(9808),m=s(1314),I=s(1713),R=s(7429),F=s(3075),g=s(2986),P=s(7545),v=s(2198),L=s(13),B=s(7224),k=s(2868),N=s(8583),K=s(226),W=s(4608);const A=["*"],V=["panel"];function U(n,a){if(1&n&&(e.TgZ(0,"nx-autocomplete-option",4),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function H(n,a){if(1&n&&(e.ynx(0),e.YNc(1,U,2,2,"nx-autocomplete-option",3),e.BQk()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.items)}}function Y(n,a){1&n&&(e.ynx(0),e.Hsn(1),e.BQk())}function j(n,a){if(1&n&&(e.TgZ(0,"div",0,1),e.YNc(2,H,2,1,"ng-container",2),e.YNc(3,Y,2,0,"ng-container",2),e.qZA()),2&n){const t=e.oxw();e.ekj("nx-autocomplete-panel--in-outline-field",t._isInOutlineField),e.Q6J("id",t.id)("ngClass",t._classList),e.xp6(2),e.Q6J("ngIf",t.hasItems),e.xp6(1),e.Q6J("ngIf",!t.hasItems)}}class Q{constructor(a,t=!1){this.source=a,this.isUserInput=t}}let G=0,u=(()=>{class n{constructor(t,o){this.elementRef=t,this._cdr=o,this._id="nx-autocomplete-option-"+G++,this._selected=!1,this._active=!1,this._disabled=!1,this.onSelectionChange=new e.vpe}get id(){return this._id}get selected(){return this._selected}get active(){return this._active}get disabled(){return this._disabled}set disabled(t){const o=(0,E.Ig)(t);this._disabled!==o&&(this._disabled=o)}_handleKeydown(t){(t.keyCode===r.K5||t.keyCode===r.L_)&&(this._selectViaInteraction(),t.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=!0,this._cdr.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_emitSelectionChangeEvent(t=!1){this.onSelectionChange.emit(new Q(this,t))}get viewValue(){return(this.elementRef.nativeElement.textContent||"").trim()}setActiveStyles(){this._active||(this._active=!0,this._cdr.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._cdr.markForCheck())}getLabel(){return this.viewValue}select(){this._selected=!0,this._cdr.markForCheck(),this._emitSelectionChangeEvent()}deselect(){this._selected=!1,this._cdr.markForCheck(),this._emitSelectionChangeEvent()}focus(){const t=this.elementRef.nativeElement;"function"==typeof t.focus&&t.focus()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["nx-autocomplete-option"]],hostAttrs:["role","option"],hostVars:10,hostBindings:function(t,o){1&t&&e.NdJ("click",function(){return o._selectViaInteraction()})("keydown",function(l){return o._handleKeydown(l)}),2&t&&(e.Ikx("id",o.id),e.uIk("tabindex",o._getTabIndex())("aria-selected",o.selected.toString())("aria-disabled",o.disabled.toString()),e.Udp("display","block"),e.ekj("nx-active",o.active)("nx-disabled",o.disabled))},inputs:{disabled:"disabled",value:"value"},outputs:{onSelectionChange:"onSelectionChange"},ngContentSelectors:A,decls:3,vars:2,consts:[[1,"nx-autocomplete-option"],[1,"nx-autocomplete-option__label"]],template:function(t,o){1&t&&(e.F$t(),e.TgZ(0,"div",0)(1,"div",1),e.Hsn(2),e.qZA()()),2&t&&e.ekj("nx-active",o.active)},styles:["[_nghost-%COMP%]:focus{outline:none}[_nghost-%COMP%]:first-child   .nx-autocomplete-option[_ngcontent-%COMP%]{padding-top:16px}[_nghost-%COMP%]:last-child   .nx-autocomplete-option[_ngcontent-%COMP%]{padding-bottom:16px}[_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]{font-size:var(--dropdown-item-font-size);line-height:var(--dropdown-item-line-height);font-weight:var(--dropdown-item-font-weight);letter-spacing:var(--dropdown-item-letter-spacing);cursor:pointer;position:relative;display:flex;max-width:100%;white-space:nowrap;padding:8px 32px}[dir=rtl]   [_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]{padding:8px 8px 8px 32px}[_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]:hover   .nx-autocomplete-option__label[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{color:var(--dropdown-item-hover-color)}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]:hover   .nx-autocomplete-option__label[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{color:highlightText;background-color:highlight;border-radius:4px}}[_nghost-%COMP%]   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{border-radius:4px;box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}[dir=rtl]   [_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]{padding-right:32px}[_nghost-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{padding:0 12px;margin:0 -12px;color:var(--dropdown-item-text-color)}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{-ms-high-contrast-adjust:none;color:buttonText;background-color:buttonFace;border-radius:4px}}"],changeDetection:0}),n})(),J=0;class z{constructor(a,t){this.source=a,this.option=t}}let X=(()=>{class n{constructor(t,o,i){this._cdr=t,this._elementRef=o,this.formFieldComponent=i,this.showPanel=!1,this._isOpen=!1,this._items=null,this._hasItems=!1,this.optionSelected=new e.vpe,this.opened=new e.vpe,this.closed=new e.vpe,this._classList={},this.id="nx-autocomplete-"+J++,this.valueFormatter=l=>l?l.toString():null}get isOpen(){return this._isOpen&&this.showPanel}set items(t){if(this._hasItems=!0,Array.isArray(t))this._items=t;else if(t instanceof S.y)this._itemsSubscription&&this._itemsSubscription.unsubscribe(),this._itemsSubscription=t.subscribe(o=>{this._items=o,this._cdr.markForCheck(),setTimeout(()=>this._setVisibility())});else{if(null!==t)throw new Error("Invalid argument for autocomplete items. It has to be Array<string> or Observable<Array<string>>");this._items=t}}get items(){return this._items}get hasItems(){return this._hasItems}get options(){return this.hasItems?this._vOptions:this._cOptions}set classList(t){(null==t?void 0:t.length)&&(t.split(" ").forEach(o=>this._classList[o.trim()]=!0),this._elementRef.nativeElement.className="")}ngAfterViewInit(){this._keyManager=new C.s1(this.options).withWrap(),this._setVisibility()}ngOnDestroy(){this._itemsSubscription&&this._itemsSubscription.unsubscribe()}_setScrollTop(t){this.panel&&(this.panel.nativeElement.scrollTop=t)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){var t;this.showPanel=!!(null===(t=this.options)||void 0===t?void 0:t.length),this._classList["nx-autocomplete-visible"]=this.showPanel,this._classList["nx-autocomplete-hidden"]=!this.showPanel,this._cdr.markForCheck()}_emitSelectEvent(t){const o=new z(this,t);this.optionSelected.emit(o)}get _isInOutlineField(){return null!==this.formFieldComponent&&"outline"===this.formFieldComponent.appearance}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO),e.Y36(e.SBq),e.Y36(M.VM,8))},n.\u0275cmp=e.Xpm({type:n,selectors:[["nx-autocomplete"]],contentQueries:function(t,o,i){if(1&t&&e.Suo(i,u,5),2&t){let l;e.iGM(l=e.CRH())&&(o._cOptions=l)}},viewQuery:function(t,o){if(1&t&&(e.Gf(e.Rgc,5),e.Gf(V,5),e.Gf(u,5)),2&t){let i;e.iGM(i=e.CRH())&&(o.template=i.first),e.iGM(i=e.CRH())&&(o.panel=i.first),e.iGM(i=e.CRH())&&(o._vOptions=i)}},hostAttrs:[1,"nx-autocomplete"],inputs:{items:"items",classList:["class","classList"],valueFormatter:["nxValueFormatter","valueFormatter"]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed"},exportAs:["nxAutocomplete"],ngContentSelectors:A,decls:1,vars:0,consts:[["role","listbox",1,"nx-autocomplete-panel",3,"id","ngClass"],["panel",""],[4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,o){1&t&&(e.F$t(),e.YNc(0,j,4,6,"ng-template"))},directives:[u,c.mk,c.O5,c.sg],styles:["[_nghost-%COMP%]     .c-input::-ms-clear{width:0;height:0}.nx-autocomplete-panel[_ngcontent-%COMP%]{background-color:var(--dropdown-panel-background-color);box-shadow:var(--shadow-small);overflow-y:auto;overflow-x:hidden;max-height:280px;width:100%;border-radius:4px}.nx-autocomplete-panel.nx-autocomplete-visible[_ngcontent-%COMP%]{visibility:visible}.nx-autocomplete-panel.nx-autocomplete-hidden[_ngcontent-%COMP%]{visibility:hidden}.nx-autocomplete-panel--in-outline-field[_ngcontent-%COMP%]     nx-autocomplete-option .nx-autocomplete-option, .nx-autocomplete-panel--in-outline-field[_ngcontent-%COMP%]     nx-autocomplete-option .nx-autocomplete-option__label{font-size:var(--dropdown-item-outline-font-size);line-height:var(--dropdown-item-outline-line-height);font-weight:var(--dropdown-item-outline-font-weight);letter-spacing:var(--dropdown-item-outline-letter-spacing)}@media screen and (-ms-high-contrast: active){.nx-autocomplete-panel[_ngcontent-%COMP%]{box-shadow:0 0 0 1px windowText}}"],changeDetection:0}),n})();const Z={provide:F.JU,useExisting:(0,e.Gpc)(()=>w),multi:!0};let w=(()=>{class n{constructor(t,o,i,l,f,x,p,et,ot,it){this._element=t,this._overlay=o,this._viewContainerRef=i,this._zone=l,this._cdr=f,this._dir=x,this._nxFormField=p,this._nxWordField=et,this._document=ot,this._viewportRuler=it,this._componentDestroyed=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=O.w.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new d.xQ,this._valueChanges=new d.xQ,this._dirChangeSubscription=O.w.EMPTY,this._debounce=400,this._autocompleteDisabled=!1,this._overlayAttached=!1,this.optionSelections=(0,T.P)(()=>{var _;return(null===(_=this.autocomplete)||void 0===_?void 0:_.options)?(0,h.T)(...this.autocomplete.options.map(nt=>nt.onSelectionChange)):this._zone.onStable.asObservable().pipe((0,g.q)(1),(0,P.w)(()=>this.optionSelections))}),this._windowBlurHandler=()=>{this._canOpenOnNextFocus=document.activeElement!==this._element.nativeElement||this.panelOpen},this._onChange=_=>{this._valueChanges.next(_)},this._onTouched=()=>{},"undefined"!=typeof window&&l.runOutsideAngular(()=>{window.addEventListener("blur",this._windowBlurHandler)})}set itemsCb(t){if("function"!=typeof t)throw new Error("Wrong value type for nxAutocompleteItems");this._itemsCb=t}get itemsCb(){return this._itemsCb}set debounce(t){this._debounce=(0,E.su)(t)}set autocompleteDisabled(t){this._autocompleteDisabled=t,this._bindAutocompleteItems()}get autocompleteDisabled(){return this._autocompleteDisabled}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}get activeOption(){var t;return(null===(t=this.autocomplete)||void 0===t?void 0:t._keyManager)?this.autocomplete._keyManager.activeItem:null}get _outsideClickStream(){return this._document?(0,h.T)((0,y.R)(this._document,"mouseup"),(0,y.R)(this._document,"touchend")).pipe((0,v.h)(t=>{const o=t.target,i=this._formField?this._formField.elementRef.nativeElement:null;return this._overlayAttached&&o!==this._element.nativeElement&&(!i||!i.contains(o))&&!!this._overlayRef&&!this._overlayRef.overlayElement.contains(o)})):(0,b.of)(null)}get _formField(){return this._nxFormField?this._nxFormField:this._nxWordField}ngOnInit(){this._dirChangeSubscription=this._dir.change.subscribe(()=>{this._flipDirection(),this._cdr.markForCheck()})}ngOnDestroy(){var t,o,i;"undefined"!=typeof window&&window.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),null===(t=this._controlValueChangesSubscription)||void 0===t||t.unsubscribe(),null===(o=this._itemsSubscription)||void 0===o||o.unsubscribe(),null===(i=this._dirChangeSubscription)||void 0===i||i.unsubscribe()}ngOnChanges(){this._bindAutocompleteItems()}ngAfterViewInit(){this._bindAutocompleteItems()}_bindAutocompleteItems(){var t,o,i;if(this._controlValueChangesSubscription&&this._controlValueChangesSubscription.unsubscribe(),"function"==typeof this._itemsCb&&this.autocomplete&&!this.autocompleteDisabled){const l=new d.xQ;this.autocomplete.items=l;const f=(null===(i=null===(o=null===(t=this._formField)||void 0===t?void 0:t._control)||void 0===o?void 0:o.ngControl)||void 0===i?void 0:i.valueChanges)||this._valueChanges;this._controlValueChangesSubscription=f.pipe((0,L.b)(this._debounce)).subscribe(x=>{this._itemsSubscription&&this._itemsSubscription.unsubscribe(),this._itemsSubscription=this._itemsCb(x).pipe((0,B.P)()).subscribe(p=>{l.next(p)},p=>{l.next([])})})}}openPanel(){this.autocompleteDisabled||(this._attachOverlay(),this._floatLabel())}closePanel(){var t;this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this.autocomplete.closed.emit(),this.autocomplete._isOpen=this._overlayAttached=!1,(null===(t=this._overlayRef)||void 0===t?void 0:t.hasAttached())&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._componentDestroyed||this._cdr.detectChanges())}get panelClosingActions(){return(0,h.T)(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe((0,v.h)(()=>this._overlayAttached)),this._closeKeyEventStream,this._outsideClickStream,this._overlayRef?this._overlayRef.detachments().pipe((0,v.h)(()=>this._overlayAttached)):(0,b.of)())}writeValue(t){Promise.resolve(null).then(()=>this._setTriggerValue(t))}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this._element.nativeElement.disabled=t}_handleKeydown(t){const o=t.keyCode;if(o===r.hY&&t.preventDefault(),this.panelOpen&&(o===r.hY||o===r.LH&&t.altKey))this._resetActiveItem(),this._closeKeyEventStream.next(),t.stopPropagation();else if(this.activeOption&&o===r.K5&&this.panelOpen)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else{const i=this.autocomplete._keyManager.activeItem,l=o===r.LH||o===r.JH;this.panelOpen||o===r.Mf?this.autocomplete._keyManager.onKeydown(t):l&&this._isFieldEnabled()&&this.openPanel(),(l||this.autocomplete._keyManager.activeItem!==i)&&this._scrollToOption()}}_handleInput(t){const o=t.target;let i=o.value;"number"===o.type&&(i=""===i?null:parseFloat(i)),this._isFieldEnabled()&&this._previousValue!==i&&this._rootElement().activeElement===t.target&&(this._previousValue=i,this._onChange(i),this.openPanel())}_rootElement(){return this._element.nativeElement.getRootNode()}_handleFocus(){this._canOpenOnNextFocus?this._isFieldEnabled()&&(this._previousValue=this._element.nativeElement.value,this.openPanel()):this._canOpenOnNextFocus=!0}_floatLabel(){this._nxFormField&&"auto"===this._nxFormField.floatLabel&&(this._nxFormField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._nxFormField.floatLabel="auto",this._manuallyFloatingLabel=!1)}_scrollToOption(){if(0===this.autocomplete.options.length)return;let t=0,o=this.autocomplete.options.first.elementRef.nativeElement.offsetHeight;this.autocomplete._keyManager.activeItem&&(t=this.autocomplete._keyManager.activeItem.elementRef.nativeElement.offsetTop,o=this.autocomplete._keyManager.activeItem.elementRef.nativeElement.offsetHeight);const i=this.autocomplete.panel.nativeElement.offsetTop,l=function q(n,a,t,o){return n<t?n:n+a>t+o?Math.max(0,n-o+a):t}(t,o,this.autocomplete._getScrollTop()+i,this.autocomplete.panel.nativeElement.offsetHeight);this.autocomplete._setScrollTop(l-i)}_subscribeToClosingActions(){const t=this._zone.onStable.asObservable().pipe((0,g.q)(1)),o=this.autocomplete.options.changes.pipe((0,k.b)(()=>this._positionStrategy.reapplyLastPosition()),(0,N.g)(0));return(0,h.T)(t,o).pipe((0,P.w)(()=>(this._resetActiveItem(),this.autocomplete._setVisibility(),this.panelClosingActions)),(0,g.q)(1)).subscribe(i=>this._setValueAndClose(i))}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_setTriggerValue(t){var o;const i=(null===(o=this.autocomplete)||void 0===o?void 0:o.valueFormatter)?this.autocomplete.valueFormatter(t):t,l=null!=i?i:"";this._formField?this._formField._control.value=l:this._element.nativeElement.value=l}_setValueAndClose(t){(null==t?void 0:t.source)&&(this._clearPreviousSelectedOption(t.source),this._setTriggerValue(t.source.value),this._onChange(t.source.value),this._element.nativeElement.focus(),this.autocomplete._emitSelectEvent(t.source)),this.closePanel()}_clearPreviousSelectedOption(t){this.autocomplete.options.forEach(o=>{o!==t&&o.selected&&o.deselect()})}_attachOverlay(){if(!this.autocomplete)throw function $(){return Error("Attempting to open an undefined instance of `nx-autocomplete`. Make sure that the id passed to the `nxAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();this._overlayRef?this._overlayRef.updateSize({minWidth:this._getHostWidth()}):(this._portal=new R.UE(this.autocomplete.template,this._viewContainerRef),this._overlayRef=this._overlay.create(this._getOverlayConfig()),this._viewportRuler&&(this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&this._overlayRef&&this._overlayRef.updateSize({minWidth:this._getHostWidth()})}))),this._overlayRef&&!this._overlayRef.hasAttached()&&(this._overlayRef.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());const t=this.panelOpen;this.autocomplete._setVisibility(),this.autocomplete._isOpen=this._overlayAttached=!0,this.panelOpen&&t!==this.panelOpen&&this.autocomplete.opened.emit()}_getOverlayConfig(){var t;return new m.X_({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),minWidth:this._getHostWidth(),direction:(null===(t=this._dir)||void 0===t?void 0:t.value)||"ltr"})}_getOverlayPosition(){var t;const i="rtl"===(null===(t=this._dir)||void 0===t?void 0:t.value)?0:16;return this._positionStrategy=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withViewportMargin(i).withPush(!1).withGrowAfterOpen(!0).withPositions([{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"}]),this._positionStrategy}_scrollStrategy(){return this._overlay.scrollStrategies.reposition()}_getConnectedElement(){return this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){this.autocomplete._keyManager.setActiveItem(-1)}_isFieldEnabled(){const t=this._element.nativeElement;return!t.readOnly&&!t.disabled}_flipDirection(){var t,o;null===(t=this._overlayRef)||void 0===t||t.setDirection(this._dir.value),null===(o=this._overlayRef)||void 0===o||o.updatePositionStrategy(this._getOverlayPosition())}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(m.aV),e.Y36(e.s_b),e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(K.Is),e.Y36(M.VM,9),e.Y36(W.u7,9),e.Y36(c.K0,8),e.Y36(I.rL))},n.\u0275dir=e.lG2({type:n,selectors:[["input","nxAutocomplete",""],["textarea","nxAutocomplete",""]],hostAttrs:["role","combobox","autocomplete","off","aria-autocomplete","list"],hostVars:3,hostBindings:function(t,o){1&t&&e.NdJ("focusin",function(){return o._handleFocus()})("blur",function(){return o._onTouched()})("input",function(l){return o._handleInput(l)})("keydown",function(l){return o._handleKeydown(l)}),2&t&&e.uIk("aria-activedescendant",null==o.activeOption?null:o.activeOption.id)("aria-expanded",o.panelOpen.toString())("aria-owns",null==o.autocomplete?null:o.autocomplete.id)},inputs:{autocomplete:["nxAutocomplete","autocomplete"],itemsCb:["nxAutocompleteItems","itemsCb"],debounce:["nxAutocompleteDebounce","debounce"],autocompleteDisabled:["nxAutocompleteDisabled","autocompleteDisabled"]},exportAs:["nxAutocompleteTrigger"],features:[e._Bn([Z]),e.TTD]}),n})(),tt=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[c.ez,m.U8,C.rt]]}),n})()}}]);