"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[9328],{9328:(pt,A,s)=>{s.d(A,{EU:()=>$,Kl:()=>P,VX:()=>g,_R:()=>nt,ey:()=>p});var v=s(2693),e=s(4650),c=s(8929),D=s(6498),T=s(2654),w=s(8514),h=s(6787),O=s(1086),x=s(3753),C=s(1281),r=s(9521),b=s(6566),_=s(6895),u=s(8184),R=s(7376),S=s(3353),I=s(4080),F=s(4006),d=s(2986),E=s(7545),L=s(4850),m=s(2198),y=s(7625),B=s(13),N=s(7224),K=s(2868),k=s(8583),U=s(445),V=s(9349),W=s(5602);const M=["*"],H=["panel"];function Y(i,l){if(1&i&&(e.TgZ(0,"nx-autocomplete-option",4),e._uU(1),e.qZA()),2&i){const t=l.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function j(i,l){if(1&i&&(e.ynx(0),e.YNc(1,Y,2,2,"nx-autocomplete-option",3),e.BQk()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.items)}}function Q(i,l){1&i&&(e.ynx(0),e.Hsn(1),e.BQk())}function G(i,l){if(1&i&&(e.TgZ(0,"div",0,1),e.YNc(2,j,2,1,"ng-container",2),e.YNc(3,Q,2,0,"ng-container",2),e.qZA()),2&i){const t=e.oxw();e.ekj("nx-autocomplete-panel--in-outline-field",t._isInOutlineField),e.Q6J("id",t.id)("ngClass",t._classList),e.xp6(2),e.Q6J("ngIf",t.hasItems),e.xp6(1),e.Q6J("ngIf",!t.hasItems)}}class X{constructor(l,t=!1){this.source=l,this.isUserInput=t}}let J=0,p=(()=>{class i{constructor(t,o){this.elementRef=t,this._cdr=o,this._id="nx-autocomplete-option-"+J++,this._selected=!1,this._active=!1,this._disabled=!1,this.onSelectionChange=new e.vpe}get id(){return this._id}get selected(){return this._selected}get active(){return this._active}set disabled(t){const o=(0,C.Ig)(t);this._disabled!==o&&(this._disabled=o)}get disabled(){return this._disabled}_handleKeydown(t){(t.keyCode===r.K5||t.keyCode===r.L_)&&(this._selectViaInteraction(),t.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=!0,this._cdr.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_emitSelectionChangeEvent(t=!1){this.onSelectionChange.emit(new X(this,t))}get viewValue(){return(this.elementRef.nativeElement.textContent||"").trim()}setActiveStyles(){this._active||(this._active=!0,this._cdr.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._cdr.markForCheck())}getLabel(){return this.viewValue}select(){this._selected=!0,this._cdr.markForCheck(),this._emitSelectionChangeEvent()}deselect(){this._selected=!1,this._cdr.markForCheck(),this._emitSelectionChangeEvent()}focus(){const t=this.elementRef.nativeElement;"function"==typeof t.focus&&t.focus()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.sBO))},i.\u0275cmp=e.Xpm({type:i,selectors:[["nx-autocomplete-option"]],hostAttrs:["role","option"],hostVars:10,hostBindings:function(t,o){1&t&&e.NdJ("click",function(){return o._selectViaInteraction()})("keydown",function(a){return o._handleKeydown(a)}),2&t&&(e.Ikx("id",o.id),e.uIk("tabindex",o._getTabIndex())("aria-selected",o.selected.toString())("aria-disabled",o.disabled.toString()),e.Udp("display","block"),e.ekj("nx-active",o.active)("nx-disabled",o.disabled))},inputs:{disabled:"disabled",value:"value"},outputs:{onSelectionChange:"onSelectionChange"},ngContentSelectors:M,decls:3,vars:2,consts:[[1,"nx-autocomplete-option"],[1,"nx-autocomplete-option__label"]],template:function(t,o){1&t&&(e.F$t(),e.TgZ(0,"div",0)(1,"div",1),e.Hsn(2),e.qZA()()),2&t&&e.ekj("nx-active",o.active)},styles:["[_nghost-%COMP%]:focus{outline:none}[_nghost-%COMP%]:first-child   .nx-autocomplete-option[_ngcontent-%COMP%]{padding-top:16px}[_nghost-%COMP%]:last-child   .nx-autocomplete-option[_ngcontent-%COMP%]{padding-bottom:16px}[_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]{font-size:var(--dropdown-item-font-size);line-height:var(--dropdown-item-line-height);font-weight:var(--dropdown-item-font-weight);letter-spacing:var(--dropdown-item-letter-spacing);cursor:pointer;position:relative;display:flex;max-width:100%;white-space:nowrap;padding:8px 32px}[dir=rtl]   [_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]{padding:8px 8px 8px 32px}[_nghost-%COMP%]   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{border-radius:4px;box-shadow:var(--focus-box-shadow)}@media screen and (forced-colors: active),(forced-colors: active){[_nghost-%COMP%]   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px CanvasText;outline:4px solid CanvasText;outline-offset:2px}}[dir=rtl]   [_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]{padding-right:32px}[_nghost-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{padding:0 12px;margin:0 -12px;color:var(--dropdown-item-text-color)}@media screen and (forced-colors: active){[_nghost-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{forced-colors-adjust:none;color:buttonText;background-color:buttonFace;border-radius:4px}}[_nghost-%COMP%]:not(.nx-disabled)   .nx-autocomplete-option[_ngcontent-%COMP%]:hover   .nx-autocomplete-option__label[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.nx-disabled)   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{color:var(--dropdown-item-hover-color)}@media screen and (forced-colors: active){[_nghost-%COMP%]:not(.nx-disabled)   .nx-autocomplete-option[_ngcontent-%COMP%]:hover   .nx-autocomplete-option__label[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.nx-disabled)   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{color:highlightText;background-color:highlight;border-radius:4px;forced-color-adjust:none}}@media screen and (forced-colors: active){.nx-disabled[_nghost-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{color:GrayText}}.nx-disabled[_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]{cursor:not-allowed}.nx-disabled[_nghost-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{color:var(--dropdown-item-text-color-disabled)}"],changeDetection:0}),i})(),z=0;class Z{constructor(l,t){this.source=l,this.option=t}}let $=(()=>{class i{constructor(t,o,n){this._cdr=t,this._elementRef=o,this.formFieldComponent=n,this.showPanel=!1,this._isOpen=!1,this._items=null,this._hasItems=!1,this.optionSelected=new e.vpe,this.opened=new e.vpe,this.closed=new e.vpe,this._classList={},this.id="nx-autocomplete-"+z++,this._destroyed=new c.xQ,this.valueFormatter=a=>a?a.toString():null}get isOpen(){return this._isOpen&&this.showPanel}set items(t){if(this._hasItems=!0,Array.isArray(t))this._items=t;else if(t instanceof D.y)this._itemsSubscription?.unsubscribe(),this._itemsSubscription=t.subscribe(o=>{this._items=o,this._cdr.markForCheck(),setTimeout(()=>this._setVisibility())});else{if(null!==t)throw new Error("Invalid argument for autocomplete items. It has to be Array<string> or Observable<Array<string>>");this._items=t}}get items(){return this._items}get hasItems(){return this._hasItems}get options(){return this.hasItems?this._vOptions:this._cOptions}set classList(t){t?.length&&(t.split(" ").forEach(o=>this._classList[o.trim()]=!0),this._elementRef.nativeElement.className="")}ngAfterViewInit(){this._keyManager=new v.s1(this.options).withWrap(),this._setVisibility()}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this._itemsSubscription?.unsubscribe()}_setScrollTop(t){this.panel&&(this.panel.nativeElement.scrollTop=t)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._classList["nx-autocomplete-visible"]=this.showPanel,this._classList["nx-autocomplete-hidden"]=!this.showPanel,this._cdr.markForCheck()}_emitSelectEvent(t){const o=new Z(this,t);this.optionSelected.emit(o)}get _isInOutlineField(){return null!==this.formFieldComponent&&"outline"===this.formFieldComponent.appearance}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.sBO),e.Y36(e.SBq),e.Y36(b.VM,8))},i.\u0275cmp=e.Xpm({type:i,selectors:[["nx-autocomplete"]],contentQueries:function(t,o,n){if(1&t&&e.Suo(n,p,5),2&t){let a;e.iGM(a=e.CRH())&&(o._cOptions=a)}},viewQuery:function(t,o){if(1&t&&(e.Gf(e.Rgc,5),e.Gf(H,5),e.Gf(p,5)),2&t){let n;e.iGM(n=e.CRH())&&(o.template=n.first),e.iGM(n=e.CRH())&&(o.panel=n.first),e.iGM(n=e.CRH())&&(o._vOptions=n)}},hostAttrs:[1,"nx-autocomplete"],inputs:{items:"items",classList:["class","classList"],valueFormatter:["nxValueFormatter","valueFormatter"]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed"},exportAs:["nxAutocomplete"],ngContentSelectors:M,decls:1,vars:0,consts:[["role","listbox",1,"nx-autocomplete-panel",3,"id","ngClass"],["panel",""],[4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,o){1&t&&(e.F$t(),e.YNc(0,G,4,6,"ng-template"))},dependencies:[_.mk,_.sg,_.O5,p],styles:["[_nghost-%COMP%]     .c-input::-ms-clear{width:0;height:0}.nx-autocomplete-panel[_ngcontent-%COMP%]{background-color:var(--dropdown-panel-background-color);box-shadow:var(--shadow-small);overflow-y:auto;overflow-x:hidden;max-height:280px;width:100%;border-radius:4px}.nx-autocomplete-panel.nx-autocomplete-visible[_ngcontent-%COMP%]{visibility:visible}.nx-autocomplete-panel.nx-autocomplete-hidden[_ngcontent-%COMP%]{visibility:hidden}.nx-autocomplete-panel--in-outline-field[_ngcontent-%COMP%]     nx-autocomplete-option .nx-autocomplete-option, .nx-autocomplete-panel--in-outline-field[_ngcontent-%COMP%]     nx-autocomplete-option .nx-autocomplete-option__label{font-size:var(--dropdown-item-outline-font-size);line-height:var(--dropdown-item-outline-line-height);font-weight:var(--dropdown-item-outline-font-weight);letter-spacing:var(--dropdown-item-outline-letter-spacing)}@media screen and (forced-colors: active){.nx-autocomplete-panel[_ngcontent-%COMP%]{box-shadow:0 0 0 1px CanvasText}}"],changeDetection:0}),i})();const q={provide:F.JU,useExisting:(0,e.Gpc)(()=>P),multi:!0},g=new e.OlP("nx-autocomplete-scroll-strategy"),et={provide:g,useFactory:function tt(i){return()=>i.scrollStrategies.reposition()},deps:[u.aV]};let P=(()=>{class i{constructor(t,o,n,a,st,lt,at,rt,ct,_t,ht,ut){this._element=t,this._overlay=o,this._viewContainerRef=n,this._zone=a,this._cdr=st,this._dir=lt,this._autofillMonitor=at,this._nxFormField=rt,this._nxWordField=ct,this._document=_t,this._defaultScrollStrategyFactory=ht,this._viewportRuler=ut,this._componentDestroyed=!1,this._isAutofill=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=T.w.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new c.xQ,this._valueChanges=new c.xQ,this._scrollStrategyFactory=this._defaultScrollStrategyFactory,this._debounce=400,this._autocompleteDisabled=!1,this._overlayAttached=!1,this.optionSelections=(0,w.P)(()=>this.autocomplete?.options?(0,h.T)(...this.autocomplete.options.map(f=>f.onSelectionChange)):this._zone.onStable.asObservable().pipe((0,d.q)(1),(0,E.w)(()=>this.optionSelections))),this._destroyed=new c.xQ,this._windowBlurHandler=()=>{this._canOpenOnNextFocus=document.activeElement!==this._element.nativeElement||this.panelOpen},this._onChange=f=>{this._valueChanges.next(f)},this._onTouched=()=>{},typeof window<"u"&&a.runOutsideAngular(()=>{window.addEventListener("blur",this._windowBlurHandler)})}set itemsCb(t){if("function"!=typeof t)throw new Error("Wrong value type for nxAutocompleteItems");this._itemsCb=t}get itemsCb(){return this._itemsCb}set debounce(t){this._debounce=(0,C.su)(t)}set autocompleteDisabled(t){this._autocompleteDisabled=t,this._bindAutocompleteItems()}get autocompleteDisabled(){return this._autocompleteDisabled}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}get activeOption(){return this.autocomplete?._keyManager?this.autocomplete._keyManager.activeItem:null}get _outsideClickStream(){return this._document?(0,h.T)((0,x.R)(this._document,"mouseup"),(0,x.R)(this._document,"touchend")).pipe((0,L.U)(t=>(0,S.sA)(t)),(0,m.h)(t=>{const o=t,n=this._formField?this._formField.elementRef.nativeElement:null;return this._overlayAttached&&!this._element.nativeElement.contains(t)&&(!n||!n.contains(o))&&!!this._overlayRef&&!this._overlayRef.overlayElement.contains(o)})):(0,O.of)(null)}get _formField(){return this._nxFormField?this._nxFormField:this._nxWordField}ngOnInit(){this._dir.change.pipe((0,y.R)(this._destroyed)).subscribe(()=>{this._flipDirection(),this._cdr.markForCheck()}),this._autofillMonitor.monitor(this._element.nativeElement).pipe((0,y.R)(this._destroyed)).subscribe(t=>{this._isAutofill=t.isAutofilled})}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),typeof window<"u"&&window.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._controlValueChangesSubscription?.unsubscribe(),this._itemsSubscription?.unsubscribe(),this._autofillMonitor.stopMonitoring(this._element.nativeElement)}ngOnChanges(){this._bindAutocompleteItems()}ngAfterViewInit(){this._bindAutocompleteItems()}_bindAutocompleteItems(){if(this._controlValueChangesSubscription&&this._controlValueChangesSubscription.unsubscribe(),"function"==typeof this._itemsCb&&this.autocomplete&&!this.autocompleteDisabled){const t=new c.xQ;this.autocomplete.items=t,this._controlValueChangesSubscription=(this._formField?._control?.ngControl?.valueChanges||this._valueChanges).pipe((0,B.b)(this._debounce)).subscribe(n=>{this._itemsSubscription&&this._itemsSubscription.unsubscribe(),this._itemsSubscription=this._itemsCb(n).pipe((0,N.P)()).subscribe(a=>{t.next(a)},a=>{t.next([])})})}}openPanel(){this.autocompleteDisabled||(this._attachOverlay(),this._floatLabel())}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this.autocomplete.closed.emit(),this.autocomplete._isOpen=this._overlayAttached=!1,this._overlayRef?.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._componentDestroyed||this._cdr.detectChanges())}get panelClosingActions(){return(0,h.T)(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe((0,m.h)(()=>this._overlayAttached)),this._closeKeyEventStream,this._outsideClickStream,this._overlayRef?this._overlayRef.detachments().pipe((0,m.h)(()=>this._overlayAttached)):(0,O.of)())}writeValue(t){Promise.resolve(null).then(()=>this._setTriggerValue(t))}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this._element.nativeElement.disabled=t}_handleKeydown(t){const o=t.keyCode;if(o===r.hY&&t.preventDefault(),this.panelOpen&&(o===r.hY||o===r.LH&&t.altKey))this._resetActiveItem(),this._closeKeyEventStream.next(),t.stopPropagation();else if(this.activeOption&&o===r.K5&&this.panelOpen)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else{const n=this.autocomplete._keyManager.activeItem,a=o===r.LH||o===r.JH;this.panelOpen||o===r.Mf?this.autocomplete._keyManager.onKeydown(t):a&&this._isFieldEnabled()&&this.openPanel(),(a||this.autocomplete._keyManager.activeItem!==n)&&this._scrollToOption()}}_handleInput(t){const o=t.target;let n=o.value;if("number"===o.type&&(n=""===n?null:parseFloat(n)),this._isFieldEnabled()&&this._previousValue!==n&&this._isAutofill)return this._previousValue=n,this._onChange(n),void(this._isAutofill=!1);this._isFieldEnabled()&&this._previousValue!==n&&this._rootElement().activeElement===t.target&&(this._previousValue=n,this._onChange(n),this.openPanel())}_rootElement(){return this._element.nativeElement.getRootNode()}_handleFocus(){this._canOpenOnNextFocus?this._isFieldEnabled()&&(this._previousValue=this._element.nativeElement.value,this.openPanel()):this._canOpenOnNextFocus=!0}_floatLabel(){this._nxFormField&&"auto"===this._nxFormField.floatLabel&&(this._nxFormField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._nxFormField&&this._manuallyFloatingLabel&&(this._nxFormField.floatLabel="auto",this._manuallyFloatingLabel=!1)}_scrollToOption(){if(0===this.autocomplete.options.length)return;let t=0,o=this.autocomplete.options.first.elementRef.nativeElement.offsetHeight;this.autocomplete._keyManager.activeItem&&(t=this.autocomplete._keyManager.activeItem.elementRef.nativeElement.offsetTop,o=this.autocomplete._keyManager.activeItem.elementRef.nativeElement.offsetHeight);const n=this.autocomplete.panel.nativeElement.offsetTop,a=function it(i,l,t,o){return i<t?i:i+l>t+o?Math.max(0,i-o+l):t}(t,o,this.autocomplete._getScrollTop()+n,this.autocomplete.panel.nativeElement.offsetHeight);this.autocomplete._setScrollTop(a-n)}_subscribeToClosingActions(){const t=this._zone.onStable.asObservable().pipe((0,d.q)(1)),o=this.autocomplete.options.changes.pipe((0,K.b)(()=>this._positionStrategy.reapplyLastPosition()),(0,k.g)(0));return(0,h.T)(t,o).pipe((0,E.w)(()=>(this._resetActiveItem(),this.autocomplete._setVisibility(),this.panelClosingActions)),(0,d.q)(1)).subscribe(n=>this._setValueAndClose(n))}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_setTriggerValue(t){const n=(this.autocomplete?.valueFormatter?this.autocomplete.valueFormatter(t):t)??"";this._formField?this._formField._control.value=n:this._element.nativeElement.value=n}_setValueAndClose(t){t?.source&&(this._clearPreviousSelectedOption(t.source),this._setTriggerValue(t.source.value),this._onChange(t.source.value),this._element.nativeElement.focus(),this.autocomplete._emitSelectEvent(t.source)),this.closePanel()}_clearPreviousSelectedOption(t){this.autocomplete.options.forEach(o=>{o!==t&&o.selected&&o.deselect()})}_attachOverlay(){if(!this.autocomplete)throw function ot(){return Error("Attempting to open an undefined instance of `nx-autocomplete`. Make sure that the id passed to the `nxAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();this._overlayRef?this._overlayRef.updateSize({minWidth:this._getHostWidth()}):(this._portal=new I.UE(this.autocomplete.template,this._viewContainerRef),this._overlayRef=this._overlay.create(this._getOverlayConfig()),this._viewportRuler&&(this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&this._overlayRef&&this._overlayRef.updateSize({minWidth:this._getHostWidth()})}))),this._overlayRef&&!this._overlayRef.hasAttached()&&(this._overlayRef.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());const t=this.panelOpen;this.autocomplete._setVisibility(),this.autocomplete._isOpen=this._overlayAttached=!0,this.panelOpen&&t!==this.panelOpen&&this.autocomplete.opened.emit()}_getOverlayConfig(){return new u.X_({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategyFactory(),minWidth:this._getHostWidth(),direction:this._dir?.value||"ltr"})}_getOverlayPosition(){const o="rtl"===this._dir?.value?0:16;return this._positionStrategy=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withViewportMargin(o).withPush(!1).withGrowAfterOpen(!0).withPositions([{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"}]),this._positionStrategy}_getConnectedElement(){return this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){this.autocomplete._keyManager.setActiveItem(-1)}_isFieldEnabled(){const t=this._element.nativeElement;return!t.readOnly&&!t.disabled}_flipDirection(){this._overlayRef?.setDirection(this._dir.value),this._overlayRef?.updatePositionStrategy(this._getOverlayPosition())}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(u.aV),e.Y36(e.s_b),e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(U.Is),e.Y36(V.Lq),e.Y36(b.VM,9),e.Y36(W.u7,9),e.Y36(_.K0,8),e.Y36(g),e.Y36(R.rL))},i.\u0275dir=e.lG2({type:i,selectors:[["input","nxAutocomplete",""],["textarea","nxAutocomplete",""]],hostAttrs:["role","combobox","autocomplete","off","aria-autocomplete","list"],hostVars:3,hostBindings:function(t,o){1&t&&e.NdJ("focusin",function(){return o._handleFocus()})("blur",function(){return o._onTouched()})("input",function(a){return o._handleInput(a)})("keydown",function(a){return o._handleKeydown(a)}),2&t&&e.uIk("aria-activedescendant",null==o.activeOption?null:o.activeOption.id)("aria-expanded",o.panelOpen.toString())("aria-owns",null==o.autocomplete?null:o.autocomplete.id)},inputs:{autocomplete:["nxAutocomplete","autocomplete"],itemsCb:["nxAutocompleteItems","itemsCb"],debounce:["nxAutocompleteDebounce","debounce"],autocompleteDisabled:["nxAutocompleteDisabled","autocompleteDisabled"]},exportAs:["nxAutocompleteTrigger"],features:[e._Bn([q]),e.TTD]}),i})(),nt=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[et],imports:[_.ez,u.U8,v.rt]}),i})()}}]);