"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[6566],{7823:(S,D,s)=>{s.d(D,{$N:()=>z,UD:()=>P,WI:()=>y,hZ:()=>w,vV:()=>k});var e=s(1281),t=s(4650),g=s(8929),F=s(7625),m=s(6895),_=s(9195),p=s(8468);function v(l,d){1&l&&t._UZ(0,"nx-icon",7),2&l&&t.Q6J("name","exclamation-triangle")}function O(l,d){if(1&l&&(t.ynx(0),t.YNc(1,v,1,1,"nx-icon",3),t.TgZ(2,"div",4)(3,"div",5),t.GkF(4,6),t.qZA()(),t.BQk()),2&l){const o=t.oxw(),a=t.MAs(3);t.xp6(1),t.Q6J("ngIf",o.showIcon),t.xp6(3),t.Q6J("ngTemplateOutlet",a)}}function M(l,d){if(1&l&&(t.TgZ(0,"nx-message",8),t.GkF(1,6),t.qZA()),2&l){t.oxw();const o=t.MAs(3);t.xp6(1),t.Q6J("ngTemplateOutlet",o)}}function E(l,d){1&l&&t.Hsn(0)}const b=["*"];let N=0;const w=new t.OlP("ERROR_DEFAULT_OPTIONS");let k=(()=>{class l{constructor(o,a){var u,x;this._cdr=o,this._defaultOptions=a,this._showIcon=!0,this._id="nx-error-"+N++,this._destroyed=new g.xQ,null===(u=this._defaultOptions)||void 0===u||null===(x=u.changes)||void 0===x||x.pipe((0,F.R)(this._destroyed)).subscribe(()=>{this._cdr.markForCheck()})}set showIcon(o){this._showIcon=(0,e.Ig)(o),this._cdr.markForCheck()}get showIcon(){return this._showIcon}set id(o){o&&o!==this._id&&(this._id=o,this._cdr.markForCheck())}get id(){return this._id}set appearance(o){o!==this.appearance&&(this._appearance=o,this._cdr.markForCheck())}get appearance(){var o;return this._appearance||(null===(o=this._defaultOptions)||void 0===o?void 0:o.appearance)||"message"}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}}return l.\u0275fac=function(o){return new(o||l)(t.Y36(t.sBO),t.Y36(w,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nx-error"]],hostVars:4,hostBindings:function(o,a){2&o&&(t.uIk("role","alert")("id",a.id),t.ekj("nx-error--message","message"==a.appearance))},inputs:{showIcon:"showIcon",id:"id",appearance:"appearance"},ngContentSelectors:b,decls:4,vars:2,consts:[[4,"ngIf"],["nxContext","error",4,"ngIf"],["errorContent",""],["class","nx-error__icon",3,"name",4,"ngIf"],[1,"nx-error__content-wrapper"],[1,"nx-error__content"],[3,"ngTemplateOutlet"],[1,"nx-error__icon",3,"name"],["nxContext","error"]],template:function(o,a){1&o&&(t.F$t(),t.YNc(0,O,5,2,"ng-container",0),t.YNc(1,M,2,1,"nx-message",1),t.YNc(2,E,1,0,"ng-template",null,2,t.W1O)),2&o&&(t.Q6J("ngIf","text"===a.appearance),t.xp6(1),t.Q6J("ngIf","message"===a.appearance))},dependencies:[m.O5,m.tP,_.O8,p.wM],styles:["[_nghost-%COMP%]{font-size:var(--base-error-simple-font-size);line-height:var(--base-error-simple-line-height);font-weight:var(--base-error-simple-font-weight);letter-spacing:var(--base-error-simple-letter-spacing);color:var(--base-error-color);width:100%;display:flex;text-align:left}[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{font-size:var(--base-error-simple-icon-size);line-height:var(--base-error-simple-line-height);margin-right:8px}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{color:windowText}}[_nghost-%COMP%]   .nx-error__content-wrapper[_ngcontent-%COMP%]{max-width:100%}[dir=rtl]   [_nghost-%COMP%]{text-align:right}[dir=rtl]   [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{margin-right:0;margin-right:initial;margin-left:8px}"],changeDetection:0}),l})(),z=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[m.ez,_.cf,p.Ee]}),l})(),T=0;const C=new t.OlP("LABEL_DEFAULT_OPTIONS");let P=(()=>{class l{constructor(o,a){this._defaultOptions=o,this._cdr=a,this._stateChanges=new g.xQ,this._disabled=!1,this._negative=!1,this._id="nx-label-"+T++,this._for=null}set disabled(o){this._disabled=(0,e.Ig)(o),this._stateChanges.next()}get disabled(){return this._disabled}set negative(o){this._negative=(0,e.Ig)(o),this._stateChanges.next()}get negative(){return this._negative}set id(o){this._id=o}get id(){return this._id}set size(o){this._size=o,this._stateChanges.next()}get size(){var o;return this._size||(null===(o=this._defaultOptions)||void 0===o?void 0:o.size)||"large"}set for(o){this._for=o,this._cdr.markForCheck(),this._stateChanges.next()}get for(){return this._for}}return l.\u0275fac=function(o){return new(o||l)(t.Y36(C,8),t.Y36(t.sBO))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nx-label"]],hostVars:7,hostBindings:function(o,a){2&o&&(t.uIk("disabled",a.disabled),t.ekj("nx-label--negative",a.negative)("nx-label--large","large"===a.size)("nx-label--small","small"===a.size))},inputs:{disabled:"disabled",negative:"negative",id:"id",size:"size",for:"for"},ngContentSelectors:b,decls:2,vars:2,consts:[[1,"nx-label__content",3,"for","id"]],template:function(o,a){1&o&&(t.F$t(),t.TgZ(0,"label",0),t.Hsn(1),t.qZA()),2&o&&t.Q6J("for",a.for)("id",a.id)},styles:["[_nghost-%COMP%]{display:block;color:var(--text-01)}.nx-label--small[_nghost-%COMP%]{font-size:var(--base-label-small-font-size);line-height:var(--base-label-small-line-height);font-weight:var(--base-label-small-font-weight);letter-spacing:var(--base-label-small-letter-spacing)}.nx-label--large[_nghost-%COMP%]{font-size:var(--base-label-large-font-size);line-height:var(--base-label-large-line-height);font-weight:var(--base-label-large-font-weight);letter-spacing:var(--base-label-large-letter-spacing)}[disabled=true][_nghost-%COMP%]   label[_ngcontent-%COMP%]{cursor:not-allowed}.nx-label--negative[_nghost-%COMP%]{color:var(--negative)}"],changeDetection:0}),l})(),y=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[m.ez]}),l})()},6566:(S,D,s)=>{s.d(D,{BE:()=>o,J2:()=>B,Sr:()=>y,VM:()=>Q,W7:()=>A,XO:()=>x,_0:()=>U,hL:()=>a,i7:()=>R,iC:()=>l,nZ:()=>C});var e=s(4650),t=s(5260),g=s(8929),F=s(6787),m=s(1059),_=s(7625),p=s(6895),v=s(7823);const O=["connectionContainer"];function M(i,f){1&i&&(e.TgZ(0,"div",15),e.Hsn(1,2),e.qZA())}function E(i,f){if(1&i&&(e.ynx(0),e._uU(1),e.BQk()),2&i){const n=e.oxw();e.xp6(1),e.hij(" ",n.label," ")}}function b(i,f){1&i&&(e.TgZ(0,"div",16),e.Hsn(1,3),e.qZA())}function N(i,f){1&i&&(e.TgZ(0,"div",17),e.Hsn(1,4),e.qZA())}function L(i,f){1&i&&(e.TgZ(0,"div",18),e.Hsn(1,5),e.qZA())}function w(i,f){1&i&&(e.TgZ(0,"div",19),e.Hsn(1,6),e.qZA())}function k(i,f){1&i&&(e.TgZ(0,"div",19),e.Hsn(1,7),e.qZA())}const z=[[["nx-formfield-label"]],"*",[["","nxFormfieldPrefix",""]],[["","nxFormfieldSuffix",""]],[["","nxFormfieldHint",""]],[["","nxFormfieldAppendix",""]],[["","nxFormfieldError",""]],[["","nxFormfieldNote",""]]],T=["nx-formfield-label","*","[nxFormfieldPrefix]","[nxFormfieldSuffix]","[nxFormfieldHint]","[nxFormfieldAppendix]","[nxFormfieldError]","[nxFormfieldNote]"];let I=0,C=(()=>{class i{constructor(){this.id="nx-formfield-appendix-"+I++}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275dir=e.lG2({type:i,selectors:[["","nxFormfieldAppendix",""]],hostVars:1,hostBindings:function(n,r){2&n&&e.uIk("id",r.id)},inputs:{id:"id"}}),i})(),P=0,y=(()=>{class i{constructor(){this.id="nx-formfield-error-"+P++}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275dir=e.lG2({type:i,selectors:[["","nxFormfieldError",""],["","nxError",""]],hostAttrs:["role","alert"],hostVars:1,hostBindings:function(n,r){2&n&&e.uIk("id",r.id)},inputs:{id:"id"}}),i})(),l=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275dir=e.lG2({type:i}),i})(),d=0,o=(()=>{class i{constructor(){this.id="nx-formfield-hint-"+d++}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275dir=e.lG2({type:i,selectors:[["","nxFormfieldHint",""]],hostVars:3,hostBindings:function(n,r){2&n&&(e.uIk("id",r.id),e.ekj("nx-formfield-hint",!0))},inputs:{id:"id"}}),i})(),a=(()=>{class i{constructor(n){this.el=n}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(e.SBq))},i.\u0275dir=e.lG2({type:i,selectors:[["nx-formfield-label"]]}),i})(),u=0,x=(()=>{class i{constructor(){this.id="nx-formfield-note-"+u++}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275dir=e.lG2({type:i,selectors:[["","nxFormfieldNote",""]],hostVars:1,hostBindings:function(n,r){2&n&&e.uIk("id",r.id)},inputs:{id:"id"}}),i})(),A=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275dir=e.lG2({type:i,selectors:[["","nxFormfieldPrefix",""]]}),i})(),B=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275dir=e.lG2({type:i,selectors:[["","nxFormfieldSuffix",""]]}),i})();const H={negative:"nx-formfield--negative"};let Z=0;const R=new e.OlP("FORMFIELD_DEFAULT_OPTIONS");let Q=(()=>{class i{constructor(n,r,h,c){this.elementRef=n,this.renderer=r,this._cdr=h,this._defaultOptions=c,this._styles="",this.labelId="nx-formfield-label-"+Z++,this._destroyed=new g.xQ}set floatLabel(n){n!==this._floatLabel&&(this._floatLabel=n||"auto",this._cdr.markForCheck())}get floatLabel(){var n;return this._floatLabel||(null===(n=this._defaultOptions)||void 0===n?void 0:n.nxFloatLabel)||"auto"}set styles(n){this._styles!==n&&((0,t.mK)(n,H).forEach(h=>{this.renderer.addClass(this.elementRef.nativeElement,h)}),this._styles=n)}set appearance(n){this._appearance!==n&&(this._appearance=n,this._cdr.markForCheck())}get appearance(){var n;return this._appearance||(null===(n=this._defaultOptions)||void 0===n?void 0:n.appearance)||"auto"}get _shouldAlwaysFloat(){return"always"===this.floatLabel}get shouldLabelFloat(){return this._control.shouldLabelFloat||this._shouldAlwaysFloat}get control(){return this._control}ngAfterContentInit(){this._validateControlChild(),this._control.controlType&&this.elementRef.nativeElement.classList.add(`nx-formfield--type-${this._control.controlType}`),this._control.stateChanges.pipe((0,m.O)(null),(0,_.R)(this._destroyed)).subscribe(()=>{Promise.resolve().then(()=>{this._syncDescribedByIds(),this._cdr.markForCheck()})}),(0,F.T)(this._hintChildren.changes,this._appendixChildren.changes,this._prefixChildren.changes,this._suffixChildren.changes,this._noteChildren.changes).pipe((0,m.O)(null),(0,_.R)(this._destroyed)).subscribe(()=>{this._cdr.markForCheck()}),this._errorChildren.changes.pipe((0,m.O)(null),(0,_.R)(this._destroyed)).subscribe(()=>{Promise.resolve().then(()=>{this._syncDescribedByIds(),this._cdr.markForCheck()})})}ngAfterContentChecked(){this._validateControlChild()}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}getDisplayedMessage(){return this._control.errorState&&this._errorChildren&&this._errorChildren.length>0?"error":this._noteChildren&&this._noteChildren.length>0?"note":""}_syncDescribedByIds(){if(this._control){let n=[];n=this._hintChildren.map(r=>r.id),"note"===this.getDisplayedMessage()?n=[...this._noteChildren.map(r=>r.id),...n]:this._errorChildren&&(n=[...this._errorChildren.map(r=>r.id),...n]),this._control.setDescribedByIds(n)}}_validateControlChild(){if(!this._control)throw new Error("Formfield must contain a NxFormfieldControl like input[nxInput] or a custom implementation")}getConnectedOverlayOrigin(){return this._connectionContainerRef||this.elementRef}_hasLabel(){return!!this._labelChild||!!this.label}_hideControlPlaceholder(){return!this.shouldLabelFloat&&this._hasLabel()||!this._control.empty}_getTitle(){var n,r;return this._labelChild?null===(n=this._labelChild.el.nativeElement)||void 0===n?void 0:n.innerText:null!==(r=this.label)&&void 0!==r?r:""}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(R,8))},i.\u0275cmp=e.Xpm({type:i,selectors:[["nx-formfield"]],contentQueries:function(n,r,h){if(1&n&&(e.Suo(h,l,5),e.Suo(h,a,5),e.Suo(h,o,4),e.Suo(h,x,4),e.Suo(h,y,4),e.Suo(h,B,4),e.Suo(h,A,4),e.Suo(h,C,4)),2&n){let c;e.iGM(c=e.CRH())&&(r._control=c.first),e.iGM(c=e.CRH())&&(r._labelChild=c.first),e.iGM(c=e.CRH())&&(r._hintChildren=c),e.iGM(c=e.CRH())&&(r._noteChildren=c),e.iGM(c=e.CRH())&&(r._errorChildren=c),e.iGM(c=e.CRH())&&(r._suffixChildren=c),e.iGM(c=e.CRH())&&(r._prefixChildren=c),e.iGM(c=e.CRH())&&(r._appendixChildren=c)}},viewQuery:function(n,r){if(1&n&&e.Gf(O,7),2&n){let h;e.iGM(h=e.CRH())&&(r._connectionContainerRef=h.first)}},hostVars:18,hostBindings:function(n,r){2&n&&e.ekj("nx-formfield",!0)("is-disabled",r._control.disabled)("is-readonly",r._control.readonly)("is-filled",!1===r._control.empty)("is-focused",r._control.focused)("is-floating",r.shouldLabelFloat)("has-error",r._control.errorState)("has-outline","outline"===r.appearance)("has-hint",(null==r._hintChildren?null:r._hintChildren.length)>0)},inputs:{label:["nxLabel","label"],floatLabel:["nxFloatLabel","floatLabel"],styles:["nxStyle","styles"],appearance:"appearance"},ngContentSelectors:T,decls:18,vars:12,consts:[[1,"nx-formfield__wrapper"],[1,"nx-formfield__row"],[1,"nx-formfield__flexfield"],[1,"nx-formfield__input-container"],["connectionContainer",""],["class","nx-formfield__prefix",4,"ngIf"],[1,"nx-formfield__input",3,"title"],[1,"nx-formfield__label-holder"],[1,"nx-formfield__label",3,"id"],[4,"ngIf"],["class","nx-formfield__suffix",4,"ngIf"],["class","nx-formfield__hints",4,"ngIf"],["class","nx-formfield__appendix",4,"ngIf"],[3,"ngSwitch"],["class","nx-formfield__message",4,"ngSwitchCase"],[1,"nx-formfield__prefix"],[1,"nx-formfield__suffix"],[1,"nx-formfield__hints"],[1,"nx-formfield__appendix"],[1,"nx-formfield__message"]],template:function(n,r){1&n&&(e.F$t(z),e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3,4),e.YNc(5,M,2,0,"div",5),e.TgZ(6,"div",6)(7,"span",7)(8,"label",8),e.YNc(9,E,2,1,"ng-container",9),e.Hsn(10),e.qZA()(),e.Hsn(11,1),e.qZA(),e.YNc(12,b,2,0,"div",10),e.qZA(),e.YNc(13,N,2,0,"div",11),e.qZA(),e.YNc(14,L,2,0,"div",12),e.qZA(),e.ynx(15,13),e.YNc(16,w,2,0,"div",14),e.YNc(17,k,2,0,"div",14),e.BQk(),e.qZA()),2&n&&(e.xp6(5),e.Q6J("ngIf",r._prefixChildren.length),e.xp6(1),e.Q6J("title",r._getTitle()),e.xp6(2),e.Q6J("id",r.labelId),e.uIk("aria-owns",r._control.id)("for",r._control.id),e.xp6(1),e.Q6J("ngIf",!r._labelChild),e.xp6(3),e.Q6J("ngIf",r._suffixChildren.length),e.xp6(1),e.Q6J("ngIf",r._hintChildren.length),e.xp6(1),e.Q6J("ngIf",r._appendixChildren.length),e.xp6(1),e.Q6J("ngSwitch",r.getDisplayedMessage()),e.xp6(1),e.Q6J("ngSwitchCase","error"),e.xp6(1),e.Q6J("ngSwitchCase","note"))},dependencies:[p.O5,p.RF,p.n9],styles:['.nx-formfield{display:block;color:var(--text-01)}.nx-formfield nx-message{margin-top:12px}.nx-formfield__wrapper{padding-bottom:var(--formfield-bottom-padding);padding-top:var(--formfield-label-height)}.has-hint .nx-formfield__wrapper{padding-bottom:0}.nx-formfield__row{min-height:var(--formfield-control-height);background-color:var(--formfield-background-color);display:flex;align-items:stretch;width:100%}.nx-formfield__row:after{content:"";font-size:0;display:block;min-height:inherit}.nx-formfield__flexfield{font-size:var(--formfield-control-font-size);line-height:var(--formfield-control-line-height);font-weight:var(--formfield-control-font-weight);letter-spacing:var(--formfield-control-letter-spacing);align-items:stretch;flex-direction:column;display:inline-flex;width:100%;position:relative;min-width:0;flex:0 1 auto}.nx-formfield__input-container{display:flex;border-bottom:var(--formfield-border-width) solid var(--formfield-border-color);height:var(--formfield-control-height);flex:auto;padding:var(--formfield-input-padding)}.nx-formfield__input{position:relative;flex:auto;min-width:0;display:flex;text-align:left}[dir=rtl] .nx-formfield__input{text-align:right}.nx-formfield__label-holder{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}[dir=rtl] .nx-formfield__label-holder{right:0;left:auto}.nx-formfield__label{font-size:var(--formfield-placeholder-label-font-size);line-height:var(--formfield-placeholder-label-line-height);font-weight:var(--formfield-placeholder-label-font-weight);letter-spacing:var(--formfield-placeholder-label-letter-spacing);color:var(--formfield-label-color);display:block;position:absolute;left:0;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform .15s ease-out,font-size .15s ease-out;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;text-align:left}[dir=rtl] .nx-formfield__label{right:0;left:auto;text-align:right}.nx-formfield__appendix,.nx-formfield__prefix,.nx-formfield__suffix{align-items:center;flex:none;white-space:nowrap;color:var(--formfield-control-color)}.nx-formfield__appendix nx-icon.nx-icon--auto,.nx-formfield__prefix nx-icon.nx-icon--auto,.nx-formfield__suffix nx-icon.nx-icon--auto{font-size:var(--formfield-icon-size)}.nx-formfield__appendix nx-icon,.nx-formfield__prefix nx-icon,.nx-formfield__suffix nx-icon{display:block}.nx-formfield__prefix,.nx-formfield__suffix{display:inline-flex}.nx-formfield__appendix{height:var(--formfield-control-height);margin-left:8px;display:flex;border-bottom-style:solid;border-bottom-color:transparent;border-bottom-width:var(--formfield-border-width);padding:var(--formfield-input-padding)}[dir=rtl] .nx-formfield__appendix{margin-right:8px;margin-left:0;margin-left:initial}.nx-formfield__prefix{margin-right:8px}[dir=rtl] .nx-formfield__prefix{margin-right:0;margin-right:initial;margin-left:8px}.nx-formfield__suffix{margin-left:8px}[dir=rtl] .nx-formfield__suffix{margin-right:8px;margin-left:0;margin-left:initial}.nx-formfield__hints{color:var(--text-01);font-size:var(--formfield-hint-font-size);line-height:var(--formfield-hint-line-height);font-weight:var(--formfield-hint-font-weight);letter-spacing:var(--formfield-hint-letter-spacing);padding-top:8px;text-align:right}[dir=rtl] .nx-formfield__hints{text-align:left}.nx-formfield-hint{display:block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.nx-formfield__message{margin-top:4px}.nx-formfield:not(.nx-formfield--negative) .nx-formfield__appendix nx-icon{color:var(--formfield-active-color)}.nx-formfield.is-focused .nx-formfield__label{text-overflow:ellipsis}.nx-formfield.is-focused:not(.nx-formfield--negative):not(.has-error){color:var(--formfield-active-color)}.nx-formfield.is-focused:not(.nx-formfield--negative):not(.has-error) .nx-formfield__input-container{border-bottom-color:var(--formfield-active-border-color)}.nx-formfield.is-focused:not(.nx-formfield--negative):not(.has-error).nx-formfield--negative{color:var(--negative)}.nx-formfield:not(.nx-formfield--negative):not(.has-error):not(.is-disabled):not(.is-focused):not(.has-outline) .nx-formfield__row:hover .nx-formfield__input-container{border-bottom-color:var(--formfield-hover-border-color)}.nx-formfield.is-focused:not(.nx-formfield--negative).has-outline .nx-formfield__input-container{border-color:var(--formfield-outline-active-border-color);box-shadow:var(--formfield-outline-focus-box-shadow)}@media screen and (-ms-high-contrast: active){.nx-formfield.is-focused:not(.nx-formfield--negative).has-outline .nx-formfield__input-container{box-shadow:0 0 0 2px highlight;border:1px solid highlight}}.nx-formfield.is-focused:not(.nx-formfield--negative).has-outline.has-error .nx-formfield__input-container{border-bottom-color:var(--danger)}.nx-formfield.has-outline{font-size:var(--formfield-outline-control-font-size);line-height:var(--formfield-outline-control-line-height);font-weight:var(--formfield-outline-control-font-weight);letter-spacing:var(--formfield-outline-control-letter-spacing)}.nx-formfield.has-outline.nx-formfield--type-textarea .nx-formfield__input-container{height:auto}.nx-formfield.has-outline .nx-formfield__wrapper{padding-top:var(--formfield-outline-label-height)}.nx-formfield.has-outline .nx-formfield__row{min-height:var(--formfield-outline-control-height)}.nx-formfield.has-outline .nx-formfield__flexfield{font-size:var(--formfield-outline-control-font-size);line-height:var(--formfield-outline-control-line-height);font-weight:var(--formfield-outline-control-font-weight);letter-spacing:var(--formfield-outline-control-letter-spacing);padding:0}.nx-formfield.has-outline .nx-formfield__input-container{padding:0;border-width:var(--formfield-border-width);border-color:var(--formfield-outline-border-color);background-color:var(--formfield-outline-background-color);border-style:solid;border-radius:4px;height:var(--formfield-outline-control-height)}.nx-formfield.has-outline input,.nx-formfield.has-outline nx-dropdown .nx-dropdown__container,.nx-formfield.has-outline nx-multi-select .value{padding:0 7px}.nx-formfield.has-outline .nx-formfield__suffix{margin-right:7px;margin-left:0}[dir=rtl] .nx-formfield.has-outline .nx-formfield__suffix{margin-right:0;margin-left:7px}.nx-formfield.has-outline .nx-formfield__prefix{margin-left:7px;margin-right:0}[dir=rtl] .nx-formfield.has-outline .nx-formfield__prefix{margin-right:7px;margin-left:0}.nx-formfield.has-outline .nx-formfield__input textarea.nx-input{line-height:24px;padding:7px;min-height:var(--formfield-outline-control-line-height)}.nx-formfield.has-outline .nx-formfield__appendix{height:var(--formfield-outline-control-height);margin-left:8px;display:flex;border-top:var(--formfield-border-width) solid transparent;border-bottom:var(--formfield-border-width) solid transparent;padding:0}[dir=rtl] .nx-formfield.has-outline .nx-formfield__appendix{margin-left:0;margin-left:initial;margin-right:8px}.nx-formfield.has-outline .nx-formfield__hints{text-align:left;font-size:var(--formfield-outline-hint-font-size);line-height:var(--formfield-outline-hint-line-height);font-weight:var(--formfield-outline-hint-font-weight);letter-spacing:var(--formfield-outline-hint-letter-spacing)}[dir=rtl] .nx-formfield.has-outline .nx-formfield__hints{text-align:right}.nx-formfield.has-outline input::placeholder,.nx-formfield.has-outline textarea::placeholder{font-size:var(--formfield-outline-input-native-placeholder-font-size);line-height:var(--formfield-outline-input-native-placeholder-line-height);font-weight:var(--formfield-outline-input-native-placeholder-font-weight);letter-spacing:var(--formfield-outline-input-native-placeholder-letter-spacing);color:var(--formfield-input-native-placeholder-color)}.nx-formfield.has-outline input::placeholder,.nx-formfield.has-outline textarea::placeholder{opacity:1}.nx-formfield.has-outline input::-moz-placeholder{line-height:calc(var(--formfield-outline-control-height) - 2 * var(--formfield-border-width))}.nx-formfield.has-outline.is-readonly:not(.is-disabled) .nx-formfield__input-container{border-color:var(--formfield-readonly-border-color);background-color:var(--formfield-readonly-background-color)}.nx-formfield:not(.has-outline).is-readonly:not(.is-disabled) .nx-formfield__input-container{border-bottom-color:var(--formfield-readonly-border-color)}.nx-formfield.is-floating .nx-formfield__label{transform:translateY(var(--formfield-floating-distance));font-size:var(--formfield-label-font-size);line-height:var(--formfield-label-line-height);font-weight:var(--formfield-label-font-weight);letter-spacing:var(--formfield-label-letter-spacing)}.nx-formfield.is-floating.is-filled .nx-formfield__label{transition:none}.nx-formfield.is-floating.has-outline .nx-formfield__label{padding-top:0;transform:translateY(var(--formfield-outline-floating-distance));font-size:var(--formfield-outline-label-font-size);line-height:var(--formfield-outline-label-line-height);font-weight:var(--formfield-outline-label-font-weight);letter-spacing:var(--formfield-outline-label-letter-spacing)}.nx-formfield.is-floating.has-outline .nx-formfield__prefix~.nx-formfield__input .nx-formfield__label{padding:0}.nx-formfield.is-floating.has-outline .nx-formfield__input-container{position:relative}.nx-formfield.is-floating.has-outline .nx-formfield__input{position:static;position:initial}.nx-formfield.has-error:not(.has-outline):not(.is-floating) .nx-formfield__label{font-weight:var(--formfield-error-input-font-weight)}.nx-formfield.has-error:not(.has-outline) .nx-formfield__prefix,.nx-formfield.has-error:not(.has-outline) .nx-formfield__suffix{font-weight:var(--formfield-error-input-font-weight)}.nx-formfield.has-error:not(.has-outline) .nx-formfield__input input.nx-input{font-weight:var(--formfield-error-input-font-weight)}.nx-formfield.has-error:not(.nx-formfield--negative){color:var(--danger)}.nx-formfield.has-error:not(.nx-formfield--negative):not(.has-outline) .nx-formfield__prefix,.nx-formfield.has-error:not(.nx-formfield--negative):not(.has-outline) .nx-formfield__suffix,.nx-formfield.has-error:not(.nx-formfield--negative):not(.has-outline) .nx-formfield__label{color:var(--danger)}.nx-formfield.has-error:not(.nx-formfield--negative) .nx-formfield__input-container{border-bottom-color:var(--danger)}.nx-formfield.has-error:not(.nx-formfield--negative).is-floating .nx-formfield__label{color:var(--formfield-label-color)}.nx-formfield.has-error:not(.nx-formfield--negative).has-outline{color:var(--text-01)}.nx-formfield.has-error:not(.nx-formfield--negative).has-outline .nx-formfield__input-container{border-color:var(--danger)}.nx-formfield.is-disabled{color:var(--formfield-disabled-text-color);-webkit-text-fill-color:var(--formfield-disabled-text-color);cursor:not-allowed}.nx-formfield.is-disabled .nx-formfield__hints{color:inherit}.nx-formfield.is-disabled .nx-formfield__input-container{border-bottom-color:var(--formfield-disabled-border-color)}.nx-formfield.is-disabled.has-outline .nx-formfield__input-container{border-color:var(--formfield-disabled-border-color)}.nx-formfield.is-disabled nx-datepicker-toggle button{color:var(--formfield-disabled-text-color)}.nx-formfield.is-readonly:not(.is-disabled) nx-datepicker-toggle button{color:var(--formfield-disabled-text-color)}.nx-formfield--negative{color:var(--negative)}.nx-formfield--negative .nx-formfield__hints{color:inherit}.nx-formfield--negative .nx-formfield__input-container,.nx-formfield--negative.has-outline .nx-formfield__input-container{border-color:var(--negative)}.nx-formfield--negative .nx-formfield__appendix,.nx-formfield--negative .nx-formfield__prefix,.nx-formfield--negative .nx-formfield__suffix,.nx-formfield--negative .nx-formfield__label{color:var(--negative)}.nx-formfield--type-nx-dropdown .nx-formfield__label,.nx-formfield--type-nx-multi-select .nx-formfield__label{width:calc(100% - var(--formfield-icon-size))}.nx-formfield__input textarea.nx-input{vertical-align:bottom;min-height:var(--formfield-control-line-height);resize:vertical}@media screen and (-ms-high-contrast: active){.nx-formfield__input-container,.nx-formfield.nx-formfield--negative .nx-formfield__input-container,.nx-formfield:not(.nx-formfield--negative):not(.has-error):not(.is-disabled):not(.is-focused):not(.has-outline) .nx-formfield__row:hover .nx-formfield__input-container,.nx-formfield.has-error:not(.nx-formfield--negative) .nx-formfield__input-container{border-bottom-color:buttonText}.nx-formfield.has-outline .nx-formfield__input-container{border-color:buttonText}.nx-formfield.has-outline .nx-formfield__appendix{border-bottom-color:window;border-top-color:window}.nx-formfield.is-disabled{color:GrayText;-webkit-text-fill-color:GrayText}.nx-formfield.is-disabled .nx-formfield__input-container{border-bottom-color:GrayText}.nx-formfield.is-disabled .nx-formfield__hints{color:windowText}.nx-formfield.is-disabled.has-outline .nx-formfield__input-container{border-color:GrayText}.nx-formfield.is-focused:not(.has-outline) .nx-formfield__input-container,.nx-formfield.is-focused:not(.nx-formfield--negative):not(.has-error) .nx-formfield__input-container{border-bottom-color:highlight}.nx-formfield:not(.nx-formfield--negative) .nx-formfield__appendix nx-icon{color:inherit}}.nx-formfield--type-textarea .nx-formfield__flexfield{padding:0}.nx-formfield--type-textarea .nx-formfield__input-container{height:auto}input:-webkit-autofill{-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s}input:-webkit-autofill:first-line{font-size:var(--formfield-control-font-size);line-height:var(--formfield-control-line-height);font-weight:var(--formfield-control-font-weight);letter-spacing:var(--formfield-control-letter-spacing);font-family:var(--font-family);color:var(--formfield-control-color)}.nx-formfield.has-outline input:-webkit-autofill:first-line{font-size:var(--formfield-outline-control-font-size);line-height:var(--formfield-outline-control-line-height);font-weight:var(--formfield-outline-control-font-weight);letter-spacing:var(--formfield-outline-control-letter-spacing)}\n',"@keyframes cdk-text-field-autofill-start{}@keyframes cdk-text-field-autofill-end{}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}textarea.cdk-textarea-autosize{resize:none;box-sizing:content-box}textarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}.c-input{text-align:inherit;font-size:inherit;font-weight:inherit;background:0 0;color:inherit;border:none;outline:0;padding:0;margin:0;width:100%;max-width:100%}.c-input::-ms-clear{display:none}.c-input::-webkit-search-decoration,.c-input::-webkit-search-cancel-button,.c-input::-webkit-search-results-button,.c-input::-webkit-search-results-decoration{display:none;-webkit-appearance:none}.c-input::placeholder{-webkit-user-select:none;user-select:none;font-size:var(--formfield-input-native-placeholder-font-size);line-height:var(--formfield-input-native-placeholder-line-height);font-weight:var(--formfield-input-native-placeholder-font-weight);letter-spacing:var(--formfield-input-native-placeholder-letter-spacing);color:var(--formfield-input-native-placeholder-color);transition:color ease-in .1s .2s}.c-input::placeholder:-ms-input-placeholder{-ms-user-select:text}.c-input::-moz-placeholder{user-select:none;font-size:var(--formfield-input-native-placeholder-font-size);line-height:var(--formfield-input-native-placeholder-line-height);font-weight:var(--formfield-input-native-placeholder-font-weight);letter-spacing:var(--formfield-input-native-placeholder-letter-spacing);color:var(--formfield-input-native-placeholder-color);-moz-transition:color ease-in .1s .2s;transition:color ease-in .1s .2s}.c-input::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.c-input::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;font-size:var(--formfield-input-native-placeholder-font-size);line-height:var(--formfield-input-native-placeholder-line-height);font-weight:var(--formfield-input-native-placeholder-font-weight);letter-spacing:var(--formfield-input-native-placeholder-letter-spacing);color:var(--formfield-input-native-placeholder-color);-webkit-transition:color ease-in .1s .2s;transition:color ease-in .1s .2s}.c-input::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.c-input:-ms-input-placeholder{user-select:none;font-size:var(--formfield-input-native-placeholder-font-size);line-height:var(--formfield-input-native-placeholder-line-height);font-weight:var(--formfield-input-native-placeholder-font-weight);letter-spacing:var(--formfield-input-native-placeholder-letter-spacing);color:var(--formfield-input-native-placeholder-color);-ms-transition:color ease-in .1s .2s;transition:color ease-in .1s .2s}.c-input:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.c-input::-moz-placeholder{line-height:calc(var(--formfield-control-height) - var(--formfield-border-width))}textarea.c-input{height:auto;font-family:inherit}.c-input.is-focused{border:none;outline:none;box-shadow:none}.c-input.is-focused::placeholder{opacity:1;transition:opacity ease-in .2s .15s}.c-input.is-focused::-moz-placeholder{opacity:1;-moz-transition:opacity ease-in .2s .15s;transition:opacity ease-in .2s .15s}.c-input.is-focused::-webkit-input-placeholder{opacity:1;-webkit-transition:opacity ease-in .2s .15s;transition:opacity ease-in .2s .15s}.c-input.is-focused:-ms-input-placeholder{opacity:1;-ms-transition:opacity ease-in .2s .15s;transition:opacity ease-in .2s .15s}.c-input.is-disabled{cursor:not-allowed}textarea.nx-input-element{resize:vertical;overflow:auto}.c-input:invalid,.c-input:required{box-shadow:none}\n"],encapsulation:2,changeDetection:0}),i})(),U=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.ez,v.$N,v.WI]}),i})()}}]);