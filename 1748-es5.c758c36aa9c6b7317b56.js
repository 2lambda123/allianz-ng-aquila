!function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkng_aquila=self.webpackChunkng_aquila||[]).push([[1748],{81748:function(e,r,o){o.r(r),o.d(r,{CardExamplesModule:function(){return te}});var c,a=o(63423),i=o(5078),s=o(42677),l=o(38583),d=o(78459),h=o(37916),u=o(37716),g=((c=function e(){n(this,e)}).\u0275fac=function(e){return new(e||c)},c.\u0275mod=u.oAB({type:c}),c.\u0275inj=u.cJS({imports:[[l.ez,s.cf,d.$N,h.R0],d.$N]}),c),b=o(39490),p=function e(t,r,o){n(this,e),this.checked=t,this.value=r,this.card=o},_=o(23674),f=o(3679),m=o(4765),k=o(90805),v=["input"];function x(e,t){1&e&&u._UZ(0,"nx-icon",8)}function C(e,t){if(1&e&&(u.TgZ(0,"span",6),u.YNc(1,x,1,0,"nx-icon",7),u.qZA()),2&e){var n=u.oxw();u.xp6(1),u.Q6J("ngIf",n.checked)}}function O(e,t){1&e&&u.Hsn(0,3,["*ngIf","_errorState"])}function M(e,t){1&e&&u._UZ(0,"nx-icon",9)}var P=[[["nx-card-header"]],"*",[["nx-card-footer"]],[["nx-error"]]],Z=["nx-card-header","*","nx-card-footer","nx-error"],y=0,T=new u.OlP("SELECTABLE_CARD_DEFAULT_OPTIONS"),A=function(){var e=function(){function e(t,r,o,c,a,i,s){n(this,e),this._changeDetectorRef=t,this._errorStateMatcher=r,this.ngControl=o,this._parentForm=c,this._parentFormGroup=a,this._focusMonitor=i,this._defaultOptions=s,this._id="nx-selectable-card-"+y++,this._checked=!1,this._disabled=!1,this._value="",this._name="",this._negative=!1,this._tabindex="0",this._errorListIds="",this._errorState=!1,this.selectionChange=new u.vpe,this.checkedChange=new u.vpe,this.onChangeCallback=function(e){},this.onTouchedCallback=function(e){},this.ngControl&&(this.ngControl.valueAccessor=this)}return t(e,[{key:"appearance",get:function(){var e;return this._appearance||(null===(e=this._defaultOptions)||void 0===e?void 0:e.appearance)||"default"},set:function(e){e!==this.appearance&&(this._appearance=e,this._changeDetectorRef.markForCheck())}},{key:"id",get:function(){return this._id},set:function(e){e!==this._id&&(this._id=e,this._changeDetectorRef.markForCheck())}},{key:"checked",get:function(){return this._checked},set:function(e){var t=(0,b.Ig)(e);t!==this._checked&&(this._checked=t,this._changeDetectorRef.markForCheck())}},{key:"value",get:function(){return this._value},set:function(e){e&&(this._value=e),this._changeDetectorRef.markForCheck()}},{key:"disabled",get:function(){return this._disabled},set:function(e){var t=(0,b.Ig)(e);t!==this._disabled&&(this._disabled=t,this._changeDetectorRef.markForCheck())}},{key:"negative",get:function(){return this._negative},set:function(e){var t=(0,b.Ig)(e);t!==this._negative&&(this._negative=t,this._changeDetectorRef.markForCheck())}},{key:"required",get:function(){return!!this._required},set:function(e){this._required=(0,b.Ig)(e)}},{key:"name",get:function(){return this._name},set:function(e){this._name=e}},{key:"tabindex",get:function(){return this.disabled?"-1":this._tabindex},set:function(e){this._tabindex=e}},{key:"_isExpert",get:function(){return"expert"===this.appearance}},{key:"ngAfterViewInit",value:function(){this._focusMonitor.monitor(this._nativeInput)}},{key:"ngAfterContentInit",value:function(){var e=this;this._errorList.changes.subscribe(function(){e._errorListIds=e._getErrorListIds(),e._changeDetectorRef.markForCheck()}),this._errorListIds=this._getErrorListIds()}},{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._nativeInput)}},{key:"registerOnChange",value:function(e){this.onChangeCallback=e}},{key:"registerOnTouched",value:function(e){this.onTouchedCallback=e}},{key:"setDisabledState",value:function(e){this.disabled=e}},{key:"writeValue",value:function(e){this.checked=!!e}},{key:"ngDoCheck",value:function(){this.ngControl&&this._updateErrorState()}},{key:"_updateErrorState",value:function(){var e=this._errorState,t=this._errorStateMatcher.isErrorState(this.ngControl?this.ngControl.control:null,this._parentFormGroup||this._parentForm);t!==e&&(this._errorState=t,this._changeDetectorRef.markForCheck())}},{key:"toggle",value:function(){this.disabled||(this.checked=!this.checked)}},{key:"_onInputClick",value:function(e){e.stopPropagation(),this.disabled||(this.toggle(),this._emitChangeEvent())}},{key:"_onInteractionEvent",value:function(e){e.stopPropagation()}},{key:"_emitChangeEvent",value:function(){var e=new p(this.checked,this.value,this);this.onChangeCallback(this.checked),this.selectionChange.emit(e),this.checkedChange.emit(this.checked)}},{key:"_getErrorListIds",value:function(){return this._errorList.map(function(e){return e.id}).join(" ")}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Y36(u.sBO),u.Y36(_.rD),u.Y36(f.a5,10),u.Y36(f.F,8),u.Y36(f.sg,8),u.Y36(m.tE),u.Y36(T,8))},e.\u0275cmp=u.Xpm({type:e,selectors:[["nx-selectable-card"]],contentQueries:function(e,t,n){var r;(1&e&&u.Suo(n,d.vV,4),2&e)&&(u.iGM(r=u.CRH())&&(t._errorList=r))},viewQuery:function(e,t){var n;(1&e&&u.Gf(v,5),2&e)&&(u.iGM(n=u.CRH())&&(t._nativeInput=n.first))},hostAttrs:["attr.role","checkbox"],hostVars:8,hostBindings:function(e,t){2&e&&(u.uIk("aria-invalid",t._errorState)("aria-checked",t.checked),u.ekj("is-disabled",t.disabled)("has-error",t._errorState)("is-expert",t._isExpert))},inputs:{appearance:"appearance",id:"id",checked:"checked",value:"value",disabled:"disabled",negative:"negative",required:"required",name:"name",tabindex:"tabindex"},outputs:{selectionChange:"selectionChange",checkedChange:"checkedChange"},ngContentSelectors:Z,decls:11,vars:14,consts:[["type","checkbox",3,"checked","value","required","change","blur","click"],["input",""],["class","checkbox",4,"ngIf","ngIfElse"],[1,"content"],[4,"ngIf"],["expert",""],[1,"checkbox"],["name","check","aria-hidden","true",4,"ngIf"],["name","check","aria-hidden","true"],["name","check-circle","size","s","aria-hidden","true",1,"checkmark"]],template:function(e,t){if(1&e&&(u.F$t(P),u.TgZ(0,"input",0,1),u.NdJ("change",function(e){return t._onInteractionEvent(e)})("blur",function(e){return t.onTouchedCallback(e)})("click",function(e){return t._onInputClick(e)}),u.qZA(),u.TgZ(2,"label"),u.YNc(3,C,2,1,"span",2),u.TgZ(4,"div",3),u.Hsn(5),u.Hsn(6,1),u.Hsn(7,2),u.qZA(),u.qZA(),u.YNc(8,O,1,0,"ng-content",4),u.YNc(9,M,1,0,"ng-template",null,5,u.W1O)),2&e){var n=u.MAs(10);u.Q6J("checked",t.checked)("value",t.value||null)("required",t.required),u.uIk("disabled",t.disabled||null)("id",t.id)("name",t.name)("aria-required",t.required)("tabindex",t.tabindex)("aria-invalid",t._errorState)("aria-describedby",t._errorListIds||null),u.xp6(2),u.uIk("for",t.id),u.xp6(1),u.Q6J("ngIf","default"===t.appearance)("ngIfElse",n),u.xp6(5),u.Q6J("ngIf",t._errorState)}},directives:[l.O5,k.O],styles:['[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nx-error{margin-top:8px}[_nghost-%COMP%]     nx-error.nx-error--message{margin-top:12px}  nx-card-footer,   nx-card-content,   nx-card-header{display:block}.checkmark[_ngcontent-%COMP%]{float:right;position:relative;color:var(--selectable-card-icon-color)}[dir=rtl][_nghost-%COMP%]   .checkmark[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .checkmark[_ngcontent-%COMP%]{float:left}.checkmark[_ngcontent-%COMP%]:before, .checkmark[_ngcontent-%COMP%]     svg{display:none;z-index:1}.checkmark[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;width:22px;height:22px;border:1px solid var(--selectable-card-icon-placeholder-border-color);border-radius:50%}.checkbox[_ngcontent-%COMP%]{float:left;background-color:var(--checkbox-background-color);border-style:solid;border-width:var(--checkbox-border-width);border-color:var(--checkbox-border-color);border-radius:var(--checkbox-border-radius);color:var(--checkbox-icon-color);font-size:var(--checkbox-icon-size);height:var(--checkbox-control-size);width:var(--checkbox-control-size);min-width:var(--checkbox-control-size);display:flex;justify-content:center;align-items:center;z-index:0}[dir=rtl][_nghost-%COMP%]   .checkbox[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .checkbox[_ngcontent-%COMP%]{float:right}[_nghost-%COMP%]:not(.is-expert)   .content[_ngcontent-%COMP%]{overflow:hidden;padding-left:16px}[dir=rtl]   [_nghost-%COMP%]:not(.is-expert)   .content[_ngcontent-%COMP%]{padding-left:0;padding-right:16px}@media (max-width: 703px){[_nghost-%COMP%]:not(.is-expert)   .content[_ngcontent-%COMP%]{padding-left:8px}[dir=rtl]   [_nghost-%COMP%]:not(.is-expert)   .content[_ngcontent-%COMP%]{padding-right:8px}}.is-expert[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-expert-background-hover-color)}.is-expert[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover   .checkmark[_ngcontent-%COMP%]{color:var(--selectable-card-unchecked-icon-hover-color)}.is-expert[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover   .checkmark[_ngcontent-%COMP%]:before, .is-expert[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover   .checkmark[_ngcontent-%COMP%]     svg{display:block}.is-expert[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:var(--selectable-card-expert-background-selected-color)}.is-expert[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-expert-background-selected-hover-color)}input[_ngcontent-%COMP%]{position:absolute;height:0;width:0;overflow:hidden;opacity:0}input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:var(--selectable-card-background-selected-color);border-color:var(--selectable-card-border-selected-color)}input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:before, input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]     svg{display:block}input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-background-selected-hover-color)}input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover   .checkmark[_ngcontent-%COMP%]{color:var(--selectable-card-icon-color)}input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{background-color:var(--checkbox-selected-background-color);border-color:var(--checkbox-selected-border-color)}label[_ngcontent-%COMP%]{border:var(--selectable-card-border-width) solid var(--selectable-card-border-color);display:block;position:relative;padding:16px;cursor:pointer;width:100%;min-height:56px;border-radius:var(--selectable-card-border-radius);background:var(--selectable-card-background-color)}label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-background-hover-color);border-color:var(--selectable-card-border-hover-color)}@media (hover: none){label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-background-color);border-color:var(--selectable-card-border-color)}input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-background-selected-color)}}.is-disabled[_nghost-%COMP%]   label[_ngcontent-%COMP%]{border-color:var(--selectable-card-border-disabled-color);cursor:not-allowed}.is-disabled[_nghost-%COMP%]   .checkmark[_ngcontent-%COMP%]{opacity:40%}.is-disabled[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover{background:var(--selectable-card-background-disabled-color)}.is-disabled[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover   .checkmark[_ngcontent-%COMP%]:before, .is-disabled[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover   .checkmark[_ngcontent-%COMP%]     svg{display:none}.is-disabled[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:var(--selectable-card-background-disabled-selected-color);border-color:var(--selectable-card-border-disabled-selected-color)}.is-disabled[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{background-color:var(--checkbox-disabled-selected-background-color);border-color:var(--checkbox-disabled-border-color);color:var(--checkbox-disabled-icon-color)}.is-disabled[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:before, .is-disabled[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]     svg{display:block}.is-disabled.is-expert[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:var(--selectable-card-expert-background-disabled-selected-color)}.is-disabled[_nghost-%COMP%]   .checkbox[_ngcontent-%COMP%]{background-color:var(--checkbox-disabled-background-color);border-color:var(--checkbox-disabled-border-color);color:var(--checkbox-disabled-icon-color)}.has-error[_nghost-%COMP%]   label[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover, .has-error[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover{border-color:var(--selectable-card-border-error-color)}input.cdk-keyboard-focused[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast: active){input.cdk-keyboard-focused[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   label[_ngcontent-%COMP%], [_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover, .has-error[_nghost-%COMP%]   label[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]   label[_ngcontent-%COMP%]:hover{border-color:buttonText}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%], [_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover, .has-error[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover{border-width:3px;padding:14px;border-color:highlight}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%], [_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover   .checkmark[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:hover   .checkmark[_ngcontent-%COMP%]{color:CanvasText}.is-disabled[_nghost-%COMP%]   label[_ngcontent-%COMP%], .is-disabled[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{border-color:GrayText;color:GrayText}.is-disabled[_nghost-%COMP%]   label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%], .is-disabled[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]{color:GrayText}}'],changeDetection:0}),e}(),q=["*"],w=function(){var e=function(){function e(t,r){n(this,e),this._elementRef=t,this._focusMonitor=r,this._focusMonitor.monitor(this._elementRef)}return t(e,[{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._elementRef)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Y36(u.SBq),u.Y36(m.tE))},e.\u0275cmp=u.Xpm({type:e,selectors:[["nx-card"]],hostAttrs:[1,"nx-card"],ngContentSelectors:q,decls:1,vars:0,template:function(e,t){1&e&&(u.F$t(),u.Hsn(0))},styles:["[_nghost-%COMP%]{background:var(--card-background-color);border-color:var(--card-border-color);border-width:var(--card-border-width);border-style:solid;border-radius:var(--card-border-radius);box-shadow:none;display:inline-block;padding:23px;transition:background-color .2s ease,box-shadow .2s ease}[_nghost-%COMP%]:hover, [_nghost-%COMP%]:focus{outline:none}.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast: active){.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}"],changeDetection:0}),e}(),I=["*"],U=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u.Xpm({type:e,selectors:[["nx-card-header"]],ngContentSelectors:I,decls:1,vars:0,template:function(e,t){1&e&&(u.F$t(),u.Hsn(0))},encapsulation:2,changeDetection:0}),e}(),F=o(22822),J=o(25086),D=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u.Xpm({type:e,selectors:[["card-example"]],decls:8,vars:0,consts:[["nxHeadline","subsection-small",1,"nx-margin-bottom-2m"],["nxHeadline","subsection-xsmall",1,"nx-margin-bottom-m"],["nxCopytext","normal"]],template:function(e,t){1&e&&(u.TgZ(0,"nx-card"),u.TgZ(1,"nx-card-header"),u.TgZ(2,"h3",0),u._uU(3,"Card headline"),u.qZA(),u.qZA(),u.TgZ(4,"p",1),u._uU(5,"2,99\u20ac"),u.qZA(),u.TgZ(6,"p",2),u._uU(7," Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptate explicabo ad iste, ratione cupiditate eaque sapiente odit, accusamus placeat ipsam dolor sint voluptatibus nam? Recusandae accusamus iste sapiente necessitatibus? "),u.qZA(),u.qZA())},directives:[w,U,F.s,J.v],styles:[""]}),e}(),R=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u.Xpm({type:e,selectors:[["selectable-card-basic-example"]],decls:4,vars:0,consts:[[1,"nx-margin-bottom-2m"],[1,"content"],["checked",""]],template:function(e,t){1&e&&(u.TgZ(0,"nx-selectable-card",0),u._UZ(1,"div",1),u.qZA(),u.TgZ(2,"nx-selectable-card",2),u._UZ(3,"div",1),u.qZA())},directives:[A],styles:[".content[_ngcontent-%COMP%]{height:100px}"]}),e}(),N=o(68826),z=o(53234),S=o(37919),Y=o(90722);function E(e,t){if(1&e&&(u.TgZ(0,"div",8),u.TgZ(1,"nx-selectable-card",9),u.TgZ(2,"h3",10),u._uU(3,"Card headline"),u.qZA(),u.qZA(),u.qZA()),2&e){var n=t.index;u.xp6(1),u.Q6J("formControlName",n)}}var G=function(){var e=function(){function e(t){n(this,e),this.fb=t,this.cardArray=new f.Oe([new f.NI(!1),new f.NI(!1),new f.NI(!1)]),this.myFormGroup=this.fb.group({cards:this.cardArray})}return t(e,[{key:"addNewCard",value:function(){this.cardArray.push(new f.NI(!1))}},{key:"removeFirstCard",value:function(){this.cardArray.removeAt(0)}},{key:"cards",get:function(){return this.myFormGroup.get("cards")}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Y36(f.qu))},e.\u0275cmp=u.Xpm({type:e,selectors:[["selectable-card-dynamic-example"]],decls:14,vars:5,consts:[["nxLayout","grid"],["nxRow","",1,"nx-margin-bottom-s"],["nxCol","12,12,3"],["nxButton","primary small","type","button",3,"click"],["nxButton","secondary small","type","button",3,"click"],[3,"formGroup"],["nxRow","","formArrayName","cards"],["nxCol","12,12,12,4",4,"ngFor","ngForOf"],["nxCol","12,12,12,4"],[1,"nx-margin-bottom-xs",3,"formControlName"],["nxCopytext","",1,"nx-margin-bottom-2m"]],template:function(e,t){1&e&&(u.TgZ(0,"div",0),u.TgZ(1,"div",1),u.TgZ(2,"div",2),u.TgZ(3,"button",3),u.NdJ("click",function(){return t.addNewCard()}),u._uU(4," Add new card "),u.qZA(),u.qZA(),u.TgZ(5,"div",2),u.TgZ(6,"button",4),u.NdJ("click",function(){return t.removeFirstCard()}),u._uU(7," Remove first card "),u.qZA(),u.qZA(),u.qZA(),u.TgZ(8,"form",5),u.TgZ(9,"div",6),u.YNc(10,E,4,1,"div",7),u.qZA(),u.TgZ(11,"p"),u._uU(12),u.ALo(13,"json"),u.qZA(),u.qZA(),u.qZA()),2&e&&(u.xp6(8),u.Q6J("formGroup",t.myFormGroup),u.xp6(2),u.Q6J("ngForOf",t.cards.controls),u.xp6(2),u.hij("Form value: ",u.lcZ(13,3,t.myFormGroup.value),""))},directives:[N.R,z.y,S.s,Y.X,f._Y,f.JL,f.sg,f.CE,l.sg,A,f.JJ,f.u,J.v],pipes:[l.Ts],styles:[""]}),e}(),L=o(37871),Q=function(){var e=function(){function e(t){n(this,e),this.fb=t,this.createForm()}return t(e,[{key:"createForm",value:function(){this.testForm=this.fb.group({selectableCardTestReactive:[!1,f.kI.requiredTrue]})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Y36(f.qu))},e.\u0275cmp=u.Xpm({type:e,selectors:[["selectable-card-reactive-example"]],decls:11,vars:7,consts:[[3,"formGroup"],["formControlName","selectableCardTestReactive"],[1,"content"]],template:function(e,t){1&e&&(u.TgZ(0,"form",0),u.TgZ(1,"nx-selectable-card",1),u._UZ(2,"div",2),u.TgZ(3,"nx-error"),u._uU(4," This card must be selected. "),u.qZA(),u.qZA(),u.TgZ(5,"p"),u._uU(6),u.ALo(7,"json"),u.qZA(),u.TgZ(8,"p"),u._uU(9),u.ALo(10,"json"),u.qZA(),u.qZA()),2&e&&(u.Q6J("formGroup",t.testForm),u.xp6(6),u.hij("Form value: ",u.lcZ(7,3,t.testForm.value),""),u.xp6(3),u.hij("Form status: ",u.lcZ(10,5,t.testForm.status),""))},directives:[f._Y,f.JL,f.sg,A,f.JJ,f.u,L.vV],pipes:[l.Ts],styles:[".content[_ngcontent-%COMP%]{height:100px}"]}),e}(),j=function(){var e=function(){function e(t){n(this,e),this.fb=t,this.createForm()}return t(e,[{key:"createForm",value:function(){this.formGroup=this.fb.group({errorCard:[!1,f.kI.requiredTrue],errorCard2:[!0,B]}),this.formGroup.markAllAsTouched()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Y36(f.qu))},e.\u0275cmp=u.Xpm({type:e,selectors:[["selectable-card-states-example"]],decls:30,vars:1,consts:[["nxLayout","grid",3,"formGroup"],["nxRow",""],["nxCol","12,12,6,6"],[1,"nx-margin-bottom-2m"],["nxCopytext","",1,"content"],["checked","",1,"nx-margin-bottom-2m"],["disabled","",1,"nx-margin-bottom-2m"],["disabled","","checked","",1,"nx-margin-bottom-2m"],["formControlName","errorCard",1,"nx-margin-bottom-2m"],["formControlName","errorCard2"]],template:function(e,t){1&e&&(u.TgZ(0,"form",0),u.TgZ(1,"div",1),u.TgZ(2,"div",2),u.TgZ(3,"nx-selectable-card",3),u.TgZ(4,"h3",4),u._uU(5,"Default selectable card"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(6,"div",2),u.TgZ(7,"nx-selectable-card",5),u.TgZ(8,"h3",4),u._uU(9,"Checked selectable card"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(10,"div",2),u.TgZ(11,"nx-selectable-card",6),u.TgZ(12,"h3",4),u._uU(13,"Disabled selectable card"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(14,"div",2),u.TgZ(15,"nx-selectable-card",7),u.TgZ(16,"h3",4),u._uU(17,"Disabled and checked selectable card"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(18,"div",2),u.TgZ(19,"nx-selectable-card",8),u.TgZ(20,"h3",4),u._uU(21,"Selectable card with error"),u.qZA(),u.TgZ(22,"nx-error"),u._uU(23," This card must be selected. "),u.qZA(),u.qZA(),u.qZA(),u.TgZ(24,"div",2),u.TgZ(25,"nx-selectable-card",9),u.TgZ(26,"h3",4),u._uU(27,"This card must not be selected."),u.qZA(),u.TgZ(28,"nx-error"),u._uU(29," This card must not be selected. "),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&e&&u.Q6J("formGroup",t.formGroup)},directives:[f._Y,f.JL,N.R,f.sg,z.y,S.s,A,J.v,f.JJ,f.u,L.vV],styles:[".content[_ngcontent-%COMP%]{height:124px}"]}),e}();function B(e){return e.value?{invalid:!0}:null}var X=o(29508),H=o(35838),V=o(13781),$=o(41482),W=o(63066),K=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u.Xpm({type:e,selectors:[["selectable-card-product-example"]],decls:19,vars:1,consts:[[1,"card"],["height","56","src","/assets/images/selectable-card.svg","alt","product image"],[1,"content"],["nxCopytext","",1,"nx-font-weight-semibold","nx-margin-bottom-2xs"],["nxCopytext","medium",1,"nx-margin-bottom-2xs"],["nxCopytext",""],["nxPlainButton","","nxPopoverTrigger","click",1,"nx-margin-left-xs",3,"nxPopoverTriggerFor"],["size","s","name","info-circle-o"],["popover",""]],template:function(e,t){if(1&e&&(u.TgZ(0,"nx-selectable-card"),u.TgZ(1,"div",0),u._UZ(2,"img",1),u.TgZ(3,"div",2),u.TgZ(4,"div"),u.TgZ(5,"h3",3),u._uU(6," Card headline "),u.qZA(),u.TgZ(7,"p",4),u._uU(8," Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,"),u._UZ(9,"br"),u._uU(10," consectetur, adipisci velit "),u.qZA(),u.TgZ(11,"span",5),u._uU(12,"$ 10 /monthly"),u.qZA(),u.qZA(),u.TgZ(13,"button",6),u._UZ(14,"nx-icon",7),u.TgZ(15,"nx-popover",null,8),u.TgZ(17,"span",5),u._uU(18,"Trigger by click"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&e){var n=u.MAs(16);u.xp6(13),u.Q6J("nxPopoverTriggerFor",n)}},directives:[A,J.v,V.q,$.X,k.O,W.N],styles:[".card[_ngcontent-%COMP%]{display:flex}img[_ngcontent-%COMP%]{flex:0 0 auto;margin-right:16px}.content[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;flex-basis:100%}@media (max-width: 703px){.card[_ngcontent-%COMP%]{display:block}img[_ngcontent-%COMP%]{margin-right:0;margin-bottom:8px}}"]}),e}(),ee=function(){var e=function(){function e(t){n(this,e),this.fb=t,this.createForm()}return t(e,[{key:"createForm",value:function(){this.formGroup=this.fb.group({card:[!1,f.kI.requiredTrue]}),this.formGroup.markAllAsTouched()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Y36(f.qu))},e.\u0275cmp=u.Xpm({type:e,selectors:[["selectable-card-expert-example"]],decls:33,vars:1,consts:[["appearance","expert",1,"nx-margin-bottom-2m"],["nxHeadline","subsection-small"],["nxCopytext",""],["checked","","appearance","expert",1,"nx-margin-bottom-2m"],["appearance","expert","disabled","",1,"nx-margin-bottom-2m"],["checked","","appearance","expert","disabled","",1,"nx-margin-bottom-2m"],[3,"formGroup"],["formControlName","card","appearance","expert"],["appearance","text"]],template:function(e,t){1&e&&(u.TgZ(0,"nx-selectable-card",0),u.TgZ(1,"h3",1),u._uU(2,"Card headline"),u.qZA(),u._UZ(3,"hr"),u.TgZ(4,"p",2),u._uU(5,"Default selectable card"),u.qZA(),u.qZA(),u.TgZ(6,"nx-selectable-card",3),u.TgZ(7,"h3",1),u._uU(8,"Card headline"),u.qZA(),u._UZ(9,"hr"),u.TgZ(10,"p",2),u._uU(11,"Checked selectable card"),u.qZA(),u.qZA(),u.TgZ(12,"nx-selectable-card",4),u.TgZ(13,"h3",1),u._uU(14,"Card headline"),u.qZA(),u._UZ(15,"hr"),u.TgZ(16,"p",2),u._uU(17,"Disabled selectable card"),u.qZA(),u.qZA(),u.TgZ(18,"nx-selectable-card",5),u.TgZ(19,"h3",1),u._uU(20,"Card headline"),u.qZA(),u._UZ(21,"hr"),u.TgZ(22,"p",2),u._uU(23,"Disabled checked selectable card"),u.qZA(),u.qZA(),u.TgZ(24,"form",6),u.TgZ(25,"nx-selectable-card",7),u.TgZ(26,"h3",1),u._uU(27,"Card headline"),u.qZA(),u._UZ(28,"hr"),u.TgZ(29,"p",2),u._uU(30,"Required selectable card"),u.qZA(),u.TgZ(31,"nx-error",8),u._uU(32," This card must be selected. "),u.qZA(),u.qZA(),u.qZA()),2&e&&(u.xp6(24),u.Q6J("formGroup",t.formGroup))},directives:[A,F.s,J.v,f._Y,f.JL,f.sg,f.JJ,f.u,L.vV],styles:[""]}),e}(),te=function(){var e=function(){function e(){n(this,e)}return t(e,null,[{key:"components",value:function(){return{card:D,"selectable-card-basic":R,"selectable-card-dynamic":G,"selectable-card-reactive":Q,"selectable-card-states":j,"selectable-card-product":K,"selectable-card-expert":ee}}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[g,s.cf,i.z,H.Fc,X.f,a.Bz]]}),e}()},29508:function(e,t,r){r.d(t,{f:function(){return u}});var o,c=r(50214),a=r(76198),i=r(77549),s=r(79661),l=r(38583),d=r(3679),h=r(37716),u=((o=function e(){n(this,e)}).\u0275fac=function(e){return new(e||o)},o.\u0275mod=h.oAB({type:o}),o.\u0275inj=h.cJS({imports:[[],l.ez,d.u5,d.UX,s.ru,i.X,a.K,c.TW]}),o)},37871:function(e,r,o){o.d(r,{hZ:function(){return k},vV:function(){return v}});var c=o(37716),a=o(39490),i=o(79765),s=o(46782),l=o(38583),d=o(90805),h=o(38701);function u(e,t){1&e&&c._UZ(0,"nx-icon",7),2&e&&c.Q6J("name","exclamation-triangle")}function g(e,t){if(1&e&&(c.ynx(0),c.YNc(1,u,1,1,"nx-icon",3),c.TgZ(2,"div",4),c.TgZ(3,"div",5),c.GkF(4,6),c.qZA(),c.qZA(),c.BQk()),2&e){var n=c.oxw(),r=c.MAs(3);c.xp6(1),c.Q6J("ngIf",n.showIcon),c.xp6(3),c.Q6J("ngTemplateOutlet",r)}}function b(e,t){if(1&e&&(c.TgZ(0,"nx-message",8),c.GkF(1,6),c.qZA()),2&e){c.oxw();var n=c.MAs(3);c.xp6(1),c.Q6J("ngTemplateOutlet",n)}}function p(e,t){1&e&&c.Hsn(0)}var _,f=["*"],m=0,k=new c.OlP("ERROR_DEFAULT_OPTIONS"),v=((_=function(){function e(t,r){var o=this;n(this,e),this._changeDetectorRef=t,this._defaultOptions=r,this._showIcon=!0,this._id="nx-error-"+m++,this._destroyed=new i.xQ,this._defaultOptions&&this._defaultOptions.changes&&this._defaultOptions.changes.pipe((0,s.R)(this._destroyed)).subscribe(function(){o._changeDetectorRef.markForCheck()})}return t(e,[{key:"showIcon",get:function(){return this._showIcon},set:function(e){this._showIcon=(0,a.Ig)(e),this._changeDetectorRef.markForCheck()}},{key:"id",get:function(){return this._id},set:function(e){e&&e!==this._id&&(this._id=e,this._changeDetectorRef.markForCheck())}},{key:"appearance",get:function(){return this._appearance||this._defaultOptions&&this._defaultOptions.appearance||"message"},set:function(e){e!==this.appearance&&(this._appearance=e,this._changeDetectorRef.markForCheck())}},{key:"ngOnDestroy",value:function(){this._destroyed.next(),this._destroyed.complete()}}]),e}()).\u0275fac=function(e){return new(e||_)(c.Y36(c.sBO),c.Y36(k,8))},_.\u0275cmp=c.Xpm({type:_,selectors:[["nx-error"]],hostVars:4,hostBindings:function(e,t){2&e&&(c.uIk("role","alert")("id",t.id),c.ekj("nx-error--message","message"==t.appearance))},inputs:{showIcon:"showIcon",id:"id",appearance:"appearance"},ngContentSelectors:f,decls:4,vars:2,consts:[[4,"ngIf"],["nxContext","error",4,"ngIf"],["errorContent",""],["class","nx-error__icon",3,"name",4,"ngIf"],[1,"nx-error__content-wrapper"],[1,"nx-error__content"],[3,"ngTemplateOutlet"],[1,"nx-error__icon",3,"name"],["nxContext","error"]],template:function(e,t){1&e&&(c.F$t(),c.YNc(0,g,5,2,"ng-container",0),c.YNc(1,b,2,1,"nx-message",1),c.YNc(2,p,1,0,"ng-template",null,2,c.W1O)),2&e&&(c.Q6J("ngIf","text"===t.appearance),c.xp6(1),c.Q6J("ngIf","message"===t.appearance))},directives:[l.O5,l.tP,d.O,h.w],styles:["[_nghost-%COMP%]{font-size:var(--base-error-simple-font-size);line-height:var(--base-error-simple-line-height);font-weight:var(--base-error-simple-font-weight);letter-spacing:var(--base-error-simple-letter-spacing);color:var(--base-error-color);width:100%;display:flex;text-align:left}[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{font-size:var(--base-error-simple-icon-size);line-height:var(--base-error-simple-line-height);margin-right:8px}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{color:windowText}}[_nghost-%COMP%]   .nx-error__content-wrapper[_ngcontent-%COMP%]{max-width:100%}[dir=rtl]   [_nghost-%COMP%]{text-align:right}[dir=rtl]   [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{margin-right:initial;margin-left:8px}"],changeDetection:0}),_)},23061:function(e,r,o){o.d(r,{U:function(){return u}});var c,a=o(37716),i=o(39490),s=o(79765),l=["*"],d=0,h=new a.OlP("LABEL_DEFAULT_OPTIONS"),u=((c=function(){function e(t){n(this,e),this._defaultOptions=t,this._stateChanges=new s.xQ,this._disabled=!1,this._negative=!1,this._id="nx-label-"+d++}return t(e,[{key:"disabled",get:function(){return this._disabled},set:function(e){this._disabled=(0,i.Ig)(e),this._stateChanges.next()}},{key:"negative",get:function(){return this._negative},set:function(e){this._negative=(0,i.Ig)(e),this._stateChanges.next()}},{key:"id",get:function(){return this._id},set:function(e){this._id!==e&&(this._id=e)}},{key:"size",get:function(){return this._size||this._defaultOptions&&this._defaultOptions.size||"large"},set:function(e){this._size=e,this._stateChanges.next()}}]),e}()).\u0275fac=function(e){return new(e||c)(a.Y36(h,8))},c.\u0275cmp=a.Xpm({type:c,selectors:[["nx-label"]],hostVars:9,hostBindings:function(e,t){2&e&&(a.uIk("disabled",t.disabled)("aria-labelledby",t.id||null)("id",t.id),a.ekj("nx-label--negative",t.negative)("nx-label--large","large"===t.size)("nx-label--small","small"===t.size))},inputs:{disabled:"disabled",negative:"negative",id:"id",size:"size"},ngContentSelectors:l,decls:2,vars:0,consts:[[1,"nx-label__content"]],template:function(e,t){1&e&&(a.F$t(),a.TgZ(0,"label",0),a.Hsn(1),a.qZA())},styles:["[_nghost-%COMP%]{display:block;color:var(--text-01)}.nx-label--small[_nghost-%COMP%]{font-size:var(--base-label-small-font-size);line-height:var(--base-label-small-line-height);font-weight:var(--base-label-small-font-weight);letter-spacing:var(--base-label-small-letter-spacing)}.nx-label--large[_nghost-%COMP%]{font-size:var(--base-label-large-font-size);line-height:var(--base-label-large-line-height);font-weight:var(--base-label-large-font-weight);letter-spacing:var(--base-label-large-letter-spacing)}[disabled=true][_nghost-%COMP%]   label[_ngcontent-%COMP%]{cursor:not-allowed}.nx-label--negative[_nghost-%COMP%]{color:var(--negative)}"],changeDetection:0}),c)},78459:function(e,t,r){r.d(t,{hZ:function(){return d.hZ},vV:function(){return d.vV},$N:function(){return l},UD:function(){return u.U},WI:function(){return h}});var o,c=r(38583),a=r(42677),i=r(51424),s=r(37716),l=((o=function e(){n(this,e)}).\u0275fac=function(e){return new(e||o)},o.\u0275mod=s.oAB({type:o}),o.\u0275inj=s.cJS({imports:[[c.ez,a.cf,i.Ee]]}),o),d=r(37871),h=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[c.ez]]}),e}(),u=r(23061)}}])}();