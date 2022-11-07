"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[5373],{5373:(J,T,n)=>{n.d(T,{Fc:()=>z,NE:()=>K,XO:()=>d,_r:()=>C,iP:()=>b,xY:()=>D});var f=n(9521),o=n(4650),p=n(8929),a=n(7625),I=n(4850),F=n(2198),_=n(6895),M=n(9195),u=n(8184),x=n(655),y=n(1281),L=n(4080),B=n(1481),k=n(2693),Y=n(3353),A=n(445);function N(s,e){if(1&s){const t=o.EpF();o.TgZ(0,"span",6),o.NdJ("click",function(){o.CHM(t);const r=o.oxw(2);return o.KtG(r.emitCloseButtonClick())})("keyup",function(r){o.CHM(t);const l=o.oxw(2);return o.KtG(l._onCloseKeyup(r))}),o._UZ(1,"nx-icon",7),o.qZA()}if(2&s){const t=o.oxw(2);o.uIk("aria-label",t._intl.closeIconLabel)}}function X(s,e){if(1&s){const t=o.EpF();o.TgZ(0,"div",0),o.NdJ("click",function(r){o.CHM(t);const l=o.oxw();return o.KtG(l._onClick(r))}),o.TgZ(1,"div",1),o._UZ(2,"div",2),o.YNc(3,N,2,1,"span",3),o.TgZ(4,"span",4),o.Hsn(5),o.GkF(6,5),o.qZA()()()}if(2&s){const t=o.oxw();let i;o.Q6J("ngClass",t.classList),o.xp6(2),o.Q6J("ngStyle",t.arrowStyle),o.xp6(1),o.Q6J("ngIf",t.showCloseButton),o.xp6(1),o.Q6J("id",t.id),o.xp6(2),o.Q6J("ngTemplateOutlet",null!==(i=null==t._lazyContent?null:t._lazyContent._template)&&void 0!==i?i:null)}}const V=["*"];let D=(()=>{class s{constructor(t){this._template=t}}return s.\u0275fac=function(t){return new(t||s)(o.Y36(o.Rgc))},s.\u0275dir=o.lG2({type:s,selectors:[["ng-template","nxPopoverContent",""]]}),s})(),b=(()=>{class s{constructor(){this.changes=new p.xQ,this.closeIconLabel="close"}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275prov=o.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})(),K=(()=>{class s{constructor(t,i){this._intl=t,this._cdr=i,this.closed=new o.vpe,this.closeButtonClick=new p.xQ,this.showCloseButton=!1,this.arrowStyle={},this._destroyed=new p.xQ}ngOnInit(){this._intl.changes.pipe((0,a.R)(this._destroyed)).subscribe(()=>{this._cdr.markForCheck()})}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this.closed.complete()}emitCloseButtonClick(){this.closeButtonClick.next()}_onCloseKeyup(t){t&&(t.keyCode===f.K5||t.keyCode===f.L_)&&this.emitCloseButtonClick(),t.preventDefault()}emitClosedEvent(){this.closed.emit()}get classList(){return this.direction?`nx-popover--${this.direction}`:""}_onClick(t){t.stopPropagation()}}return s.\u0275fac=function(t){return new(t||s)(o.Y36(b),o.Y36(o.sBO))},s.\u0275cmp=o.Xpm({type:s,selectors:[["nx-popover"]],contentQueries:function(t,i,r){if(1&t&&o.Suo(r,D,5),2&t){let l;o.iGM(l=o.CRH())&&(i._lazyContent=l.first)}},viewQuery:function(t,i){if(1&t&&o.Gf(o.Rgc,5),2&t){let r;o.iGM(r=o.CRH())&&(i.templateRef=r.first)}},outputs:{closed:"nxClosed"},exportAs:["nxPopover"],ngContentSelectors:V,decls:1,vars:0,consts:[["role","tooltip","aria-hidden","false",1,"nx-popover",3,"ngClass","click"],["tabindex","0",1,"nx-popover__content"],[1,"nx-popover__arrow",3,"ngStyle"],["tabindex","0","role","button","class","nx-popover__close-icon",3,"click","keyup",4,"ngIf"],[3,"id"],[3,"ngTemplateOutlet"],["tabindex","0","role","button",1,"nx-popover__close-icon",3,"click","keyup"],["aria-hidden","true","name","close"]],template:function(t,i){1&t&&(o.F$t(),o.YNc(0,X,7,5,"ng-template"))},dependencies:[_.mk,_.O5,_.tP,_.PC,M.O8],styles:[".nx-popover__content[_ngcontent-%COMP%]{font-size:var(--popover-content-font-size);line-height:var(--popover-content-line-height);font-weight:var(--popover-content-font-weight);letter-spacing:var(--popover-content-letter-spacing);background-color:var(--popover-background-color);color:var(--popover-text-color);border:1px solid var(--popover-border-color);border-radius:4px;box-shadow:var(--shadow-small);padding:23px;display:block}.nx-popover__content[_ngcontent-%COMP%]:focus{outline:none}.nx-popover__content[_ngcontent-%COMP%]::-moz-focus-inner{border:0}.nx-popover__close-icon[_ngcontent-%COMP%]{display:flex;position:absolute;top:4px;right:4px;cursor:pointer;font-size:var(--popover-close-icon-size);color:var(--popover-close-icon-color);border-radius:2px}[dir=rtl][_ngcontent-%COMP%]   .nx-popover__close-icon[_ngcontent-%COMP%]{right:auto;left:4px}.nx-popover__close-icon[_ngcontent-%COMP%]:focus{outline:none}.nx-popover__close-icon[_ngcontent-%COMP%]::-moz-focus-inner{border:0}@media screen and (-ms-high-contrast: active){.nx-popover__close-icon[_ngcontent-%COMP%]{color:buttonText}}.nx-popover__content.cdk-keyboard-focused[_ngcontent-%COMP%], .nx-popover__close-icon.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast: active),(forced-colors: active){.nx-popover__content.cdk-keyboard-focused[_ngcontent-%COMP%], .nx-popover__close-icon.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}.nx-popover__arrow[_ngcontent-%COMP%]{width:12px;height:12px;background-color:inherit;position:absolute;transform:translate(-50%);border-top:1px solid var(--popover-border-color);border-left:1px solid var(--popover-border-color)}.nx-popover--top[_ngcontent-%COMP%]   .nx-popover__arrow[_ngcontent-%COMP%]{transform:translate(-50%) rotate(225deg);bottom:-5px;box-shadow:2px 2px 1px 1px var(--popover-background-color),-2px -2px -4px var(--shadow-small-color)}.nx-popover--right[_ngcontent-%COMP%]   .nx-popover__arrow[_ngcontent-%COMP%]{transform:translateY(-50%) rotate(-45deg);left:-5px}.nx-popover--bottom[_ngcontent-%COMP%]   .nx-popover__arrow[_ngcontent-%COMP%]{transform:translate(-50%) rotate(45deg);top:-5px}.nx-popover--left[_ngcontent-%COMP%]   .nx-popover__arrow[_ngcontent-%COMP%]{transform:translateY(-50%) rotate(135deg);right:-5px}"],changeDetection:0}),s})();var v;let W=0;const C=new o.OlP("nx-popover-scroll-strategy"),Q={provide:C,useFactory:function U(s){return()=>s.scrollStrategies.close()},deps:[u.aV]};function O(s){return Error(`Popover direction "${s}" is invalid.`)}class d{constructor(e,t,i,r,l,h,g,m,H,G,Z){var w;this.overlay=e,this.elementRef=t,this.viewContainerRef=i,this.eventManager=r,this._focusTrapFactory=l,this._focusMonitor=h,this._ngZone=g,this._platform=m,this._dir=H,this._defaultScrollStrategyFactory=G,this._cdr=Z,this._overlayDestroyed=new p.xQ,this._elementFocusedBeforePopoverWasOpened=null,this._manualListeners=new Map,this._possiblePopoverDirections=["bottom","top","left","right"],this.closeOnLeftViewport=new IntersectionObserver(c=>{c.forEach(E=>{E.isIntersecting||this._ngZone.run(()=>{var R;return null===(R=this.overlayRef)||void 0===R?void 0:R.detach()}),this.closeOnLeftViewport.disconnect()})},{threshold:.2}),this.id="nx-popover-"+W++,this.changeShow=new o.vpe,this._show=!1,this._closeable=null,this._closeOnClickOutside=!0,this.direction="right",this.popoverInitialVisible=!1,this.visibleChange=new o.vpe,this._modal=!1,this.trigger="click",v.set(this,void 0),this._destroyed=new p.xQ,this._scrollStrategyFactory=this._defaultScrollStrategyFactory;const S=t.nativeElement;this._platform.IOS||this._platform.ANDROID?this._manualListeners.set("touchstart",()=>{"hover"===this.trigger&&(this.show=!0)}):this._manualListeners.set("mouseenter",()=>{"hover"===this.trigger&&(this.show=!0)}).set("mouseleave",()=>{"hover"===this.trigger&&(this.show=!1)}).set("keydown",c=>{switch(c.keyCode){case f.L_:case f.K5:this.handleClick()}}),this._manualListeners.forEach((c,E)=>S.addEventListener(E,c)),this._focusMonitor.monitor(S).pipe((0,a.R)(this._destroyed)).subscribe(c=>{"keyboard"===c&&"hover"===this.trigger&&this._ngZone.run(()=>this.show=!0)}),null===(w=this._dir)||void 0===w||w.change.pipe((0,a.R)(this._destroyed)).subscribe(this._dirChangeHandler.bind(this))}set show(e){e=(0,y.Ig)(e),this._show!==e&&(this._show=e,this._show?this.openPopover():this.closePopover())}get show(){return this._show}set closeable(e){this._closeable=(0,y.Ig)(e),this.popover&&(this.popover.showCloseButton=this.isCloseable())}get closeable(){return this._closeable}set closeOnClickOutside(e){this._closeOnClickOutside=(0,y.Ig)(e)}get closeOnClickOutside(){return this._closeOnClickOutside}set modal(e){this._modal=(0,y.Ig)(e)}get modal(){return this._modal}set scrollStrategy(e){(0,x.Q_)(this,v,"f")!==e&&((0,x.YH)(this,v,e,"f"),this._scrollStrategyFactory=e?this.getScrollStrategyFactory(e):this._defaultScrollStrategyFactory,this._cdr.markForCheck())}get scrollStrategy(){return(0,x.Q_)(this,v,"f")}ngOnInit(){this.popover.showCloseButton=this.isCloseable()}ngAfterViewInit(){this.popover.id=this.id,this._removeEventListener=this.eventManager.addGlobalEventListener("window","keyup.esc",()=>{this.isOpen&&(this.show=!1)}),this.popover.closeButtonClick.pipe((0,a.R)(this._destroyed)).subscribe(()=>{this.show=!1}),(this.popoverInitialVisible||this._show)&&(this.show=!0)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this.show=!1,this._removeEventListener(),this._focusMonitor.stopMonitoring(this.elementRef.nativeElement),this._manualListeners.forEach((e,t)=>{this.elementRef.nativeElement.removeEventListener(t,e)}),this.overlayRef&&this.overlayRef.dispose(),this._manualListeners.clear(),this._overlayDestroyed.next(),this._overlayDestroyed.complete()}get isOpen(){return this.overlayRef&&this.createOverlay().hasAttached()}isCloseable(){return"click"===this.trigger&&null===this._closeable||!!this._closeable}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}handleClick(){"click"===this.trigger?this.show=!this.isOpen:"hover"===this.trigger&&(this.show=!0)}open(){this.show=!0}close(){this.show=!1}toggle(){this.show=!this.show}openPopover(){if(!this.createOverlay().hasAttached()){this._embeddedViewRef=this.createOverlay().attach(this.portal);const e=this.getPopoverContainer();this._focusTrap=this._focusTrapFactory.create(e),this._elementFocusedBeforePopoverWasOpened=this.elementRef.nativeElement,this._focusMonitor.monitor(e.querySelector(".nx-popover__content"));const t=e.querySelector(".nx-popover__close-icon");t&&this._focusMonitor.monitor(t),this._autoFocusFirstTabbableElement(e),this.closeOnClickOutside&&this.waitForClose()}}_autoFocusFirstTabbableElement(e){this._focusTrap.focusInitialElementWhenReady().then(t=>{t||e.focus()})}closePopover(){if(this.overlayRef.hasAttached()){const e=this.getPopoverContainer();this._focusMonitor.stopMonitoring(e.querySelector(".nx-popover__content")),this._focusMonitor.stopMonitoring(e.querySelector(".nx-popover__close-icon")),this._returnFocusAfterPopover(),this.overlayRef.detach(),this._embeddedViewRef=null,this._focusTrap.destroy()}}getScrollStrategyFactory(e){return"reposition"===e?this.overlay.scrollStrategies.reposition:this.overlay.scrollStrategies.close}createOverlay(){if(!this.overlayRef){var e;this.portal=new L.UE(this.popover.templateRef,this.viewContainerRef);const t=new u.X_;t.positionStrategy=this.getPosition(),this._positionStrategy=t.positionStrategy,t.scrollStrategy=this._scrollStrategyFactory(),t.scrollStrategy.enable(),t.direction=(null===(e=this._dir)||void 0===e?void 0:e.value)||"ltr",this._modal&&(t.hasBackdrop=!0),this.overlayRef=this.overlay.create(t),this.subscribeToPositions(t.positionStrategy),this._subscribeToAttach(),this._subscribeToDetach(),this._modal&&this._closeOnClickOutside&&this._subscribeToBackdropClick()}return this.overlayRef}subscribeToPositions(e){e.positionChanges.pipe((0,a.R)(this._overlayDestroyed)).subscribe(t=>{const i=t.connectionPair;this.positionOverlay(i),this.positionArrow(i),this.closeOnLeftViewport.observe(this.elementRef.nativeElement),this._embeddedViewRef&&!this._embeddedViewRef.destroyed&&this._embeddedViewRef.detectChanges()})}_subscribeToBackdropClick(){this.overlayRef.backdropClick().pipe((0,a.R)(this._overlayDestroyed)).subscribe(e=>{this.show=!1})}_subscribeToDetach(){this.overlayRef.detachments().pipe((0,a.R)(this._overlayDestroyed)).subscribe(e=>{this.show&&(this.show=!1),this.changeShow.emit(this._show),this.popover.emitClosedEvent()})}_subscribeToAttach(){this.overlayRef.attachments().pipe((0,a.R)(this._overlayDestroyed)).subscribe(e=>{this.changeShow.emit(this._show)})}waitForClose(){return this.overlayRef.outsidePointerEvents().pipe((0,I.U)(e=>e.target),(0,F.h)(e=>!this.elementRef.nativeElement.contains(e)),(0,a.R)(this.popover.closed)).subscribe(()=>{this.show=!1})}positionOverlay(e){"end"===e.originX&&"start"===e.overlayX?this.popover.direction=this.isRtl?"left":"right":"bottom"===e.originY&&"top"===e.overlayY?this.popover.direction="bottom":"start"===e.originX&&"end"===e.overlayX?this.popover.direction=this.isRtl?"right":"left":"top"===e.originY&&"bottom"===e.overlayY&&(this.popover.direction="top")}positionArrow(e){const h=this.elementRef.nativeElement.getBoundingClientRect().left+this.elementRef.nativeElement.getBoundingClientRect().width/2-(this.overlayRef.overlayElement.parentElement.offsetLeft+this.overlayRef.overlayElement.offsetLeft);if(e.originX===e.overlayX){const m={left:"0"};m.left=h+"px",this.popover.arrowStyle=m}("bottom"===e.originY||"top"===e.originY)&&"center"===e.overlayX&&(this.popover.arrowStyle={left:h+"px"}),("end"===e.originX||"start"===e.originX)&&"center"===e.overlayY&&(this.popover.arrowStyle={top:"50%"})}getPosition(){const e=this._getOrigin(this.direction),t=this._getOverlayPosition(this.direction),i=this._getOffset(this.direction),r=this._getFallbackPositions(this.direction);return this.overlay.position().flexibleConnectedTo(this.elementRef).withPositions([{...e,...t,...i},...r]).withFlexibleDimensions(!1)}_returnFocusAfterPopover(){const e=this._elementFocusedBeforePopoverWasOpened;e&&"function"==typeof e.focus&&e.focus()}getPopoverContainer(){return this.overlayRef.overlayElement.querySelector(".nx-popover")}_getOrigin(e){switch(e){case"top":case"bottom":return{originX:"center",originY:e};case"left":return{originX:this.isRtl?"end":"start",originY:"center"};case"right":return{originX:this.isRtl?"start":"end",originY:"center"};default:throw O(e)}}_getOverlayPosition(e){switch(e){case"top":case"bottom":return{overlayX:"center",overlayY:this._getInversePosition(e)};case"left":return{overlayX:this.isRtl?"start":"end",overlayY:"center"};case"right":return{overlayX:this.isRtl?"end":"start",overlayY:"center"};default:throw O(e)}}_getOffset(e){switch(e){case"top":return{offsetY:-16};case"bottom":return{offsetY:16};case"left":return{offsetX:-16};case"right":return{offsetX:16};default:throw O(e)}}_getInversePopoverDirection(e){return{top:"bottom",right:"left",bottom:"top",left:"right"}[e]}_getInversePosition(e){return{top:"bottom",bottom:"top",start:"end",end:"start",center:"center"}[e]}_getFallbackPositions(e,t=this._possiblePopoverDirections){if(!e)return[];const i=t.filter(g=>g!==e);let r=[];switch(e){case"top":case"bottom":r=this._getVerticalFallbackPositionPairs(e);break;case"left":case"right":r=this._getHorizontalFallbackPositionPairs(e)}const l=this._getInversePopoverDirection(e),h=i.includes(l)?l:t[0];return[...r,...this._getFallbackPositions(h,i)]}_getVerticalFallbackPositionPairs(e){const t=e===this.direction,i=[],r={...this._getOrigin(e),...this._getOverlayPosition(e),...this._getOffset(e)};return t||i.push(r),i.push({...r,originX:"start",overlayX:"start"},{...r,originX:"end",overlayX:"end"}),i}_getHorizontalFallbackPositionPairs(e){const t=this._getOffset(e);return[{...this._getOrigin(e),...this._getOverlayPosition(e),...t}]}_dirChangeHandler(){this.overlayRef&&(this.closePopover(),this.overlayRef.dispose(),this.overlayRef=null,this._overlayDestroyed.next())}get isRtl(){var e;return"rtl"===(null===(e=this._dir)||void 0===e?void 0:e.value)}}v=new WeakMap,d.\u0275fac=function(e){return new(e||d)(o.Y36(u.aV),o.Y36(o.SBq),o.Y36(o.s_b),o.Y36(B.Qz),o.Y36(k.vO),o.Y36(k.tE),o.Y36(o.R0b),o.Y36(Y.t4),o.Y36(A.Is,8),o.Y36(C),o.Y36(o.sBO))},d.\u0275dir=o.lG2({type:d,selectors:[["","nxPopoverTriggerFor",""]],hostAttrs:["aria-haspopup","true"],hostVars:2,hostBindings:function(e,t){1&e&&o.NdJ("click",function(){return t.handleClick()}),2&e&&o.uIk("aria-expanded",t.isOpen)("aria-describedby",t.isOpen?t.id:null)},inputs:{show:["nxPopoverShow","show"],closeable:["nxPopoverCloseable","closeable"],closeOnClickOutside:"closeOnClickOutside",popover:["nxPopoverTriggerFor","popover"],direction:["nxPopoverDirection","direction"],popoverInitialVisible:["nxPopoverInitialVisible","popoverInitialVisible"],visibleChange:["nxPopoverVisibleChange","visibleChange"],modal:["nxPopoverModal","modal"],trigger:["nxPopoverTrigger","trigger"],scrollStrategy:["nxPopoverScrollStrategy","scrollStrategy"]},outputs:{changeShow:"nxPopoverShowChange"},exportAs:["nxPopoverTrigger"]});let z=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({providers:[b,Q],imports:[_.ez,u.U8,M.cf]}),s})()}}]);