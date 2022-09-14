"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[1933],{1933:(k,x,l)=>{l.r(x),l.d(x,{RatingExamplesModule:()=>T});var g=l(9808),s=l(3075),d=l(3191),m=l(1159),e=l(5e3),_=l(9209),y=l(5664);function R(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"nx-icon",3),e.NdJ("click",function(){const r=e.CHM(n).$implicit;return e.oxw().setSelection(r)})("keyup",function(o){const p=e.CHM(n).$implicit;return e.oxw().handleKeyUp(o,p)})("mouseenter",function(){const r=e.CHM(n).$implicit;return e.oxw().setHover(r)})("mouseleave",function(){return e.CHM(n),e.oxw().setHover(0)}),e.qZA()}if(2&t){const n=a.$implicit,i=e.oxw();e.Q6J("tabindex",i.disabled?-1:0)("name",i.getIconName(n)),e.uIk("aria-label",i.getAriaLabel(n))("aria-checked",i.isSelected(n))}}function O(t,a){if(1&t&&(e.TgZ(0,"div",4)(1,"span",5),e._uU(2),e.qZA(),e.TgZ(3,"span",6),e._uU(4),e.qZA()()),2&t){const n=e.oxw();e.xp6(2),e.Oqu(n.startLabel),e.xp6(2),e.Oqu(n.endLabel)}}const E=function(){return[1,2,3,4,5]};let c=(()=>{class t{constructor(n,i){this._cdr=n,this._focusMonitor=i,this._value=0,this._hover=0,this._disabled=!1,this._negative=!1,this._startLabel="",this._endLabel=null,this._ariaLabel=["1/5","2/5","3/5","4/5","5/5"],this._iconColor="",this.valueChange=new e.vpe,this.onTouchedCallback=()=>{},this.onChangeCallback=o=>{}}set value(n){this._value=(0,d.su)(n),this._cdr.markForCheck()}get value(){return this._value}set disabled(n){this._disabled!==n&&(this._disabled=(0,d.Ig)(n),this._cdr.markForCheck())}get disabled(){return this._disabled}set negative(n){this._negative!==n&&(this._negative=(0,d.Ig)(n),this._cdr.markForCheck())}get negative(){return this._negative}set startLabel(n){this._startLabel=n,this._cdr.markForCheck()}get startLabel(){return this._startLabel}set endLabel(n){this._endLabel=n,this._cdr.markForCheck()}get endLabel(){return this._endLabel}set ariaLabel(n){this._ariaLabel=n,this._cdr.markForCheck()}get ariaLabel(){return this._ariaLabel}set iconColor(n){this._iconColor=n,this._cdr.markForCheck()}get iconColor(){return this._iconColor}ngAfterViewInit(){this.icons.forEach(n=>this._focusMonitor.monitor(n))}ngOnDestroy(){this.icons.forEach(n=>this._focusMonitor.stopMonitoring(n))}isSelected(n){return n<=this.value||n<=this._hover}setSelection(n){this.disabled||(this.value=n,this.valueChange.emit(n),this.onTouchedCallback(),this.onChangeCallback(this.value))}handleKeyUp(n,i){const o=n.keyCode;if(n.preventDefault(),n.stopPropagation(),o===m.K5&&this.setSelection(i),o===m.SV){this.value=Math.min(this.value+1,5);const r=this.icons.toArray()[this.value-1];this._focusMonitor.focusVia(r,"keyboard")}if(o===m.oh){this.value=Math.max(this.value-1,1);const r=this.icons.toArray()[this.value-1];this._focusMonitor.focusVia(r,"keyboard")}}writeValue(n){this.value=n}registerOnChange(n){this.onChangeCallback=n}registerOnTouched(n){this.onTouchedCallback=n}setDisabledState(n){this.disabled=n}getAriaLabel(n){return this.ariaLabel[n-1]}getIconName(n){return"star"+(this.isSelected(n)?"":"-o")}setHover(n){this.disabled||(this._hover=n)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.sBO),e.Y36(y.tE))},t.\u0275cmp=e.Xpm({type:t,selectors:[["nx-rating"]],viewQuery:function(n,i){if(1&n&&e.Gf(_.O8,5,e.SBq),2&n){let o;e.iGM(o=e.CRH())&&(i.icons=o)}},hostVars:6,hostBindings:function(n,i){2&n&&(e.Udp("--iconColor",i.iconColor),e.ekj("nx-rating--negative",i.negative)("nx-rating--disabled",i.disabled))},inputs:{value:["nxValue","value"],disabled:["nxDisabled","disabled"],negative:["nxNegative","negative"],startLabel:["nxStartLabel","startLabel"],endLabel:["nxEndLabel","endLabel"],ariaLabel:["nxAriaLabel","ariaLabel"],iconColor:["nxIconColor","iconColor"]},outputs:{valueChange:"nxValueChange"},features:[e._Bn([{provide:s.JU,useExisting:(0,e.Gpc)(()=>t),multi:!0}])],decls:3,vars:3,consts:[["role","radiogroup",1,"nx-rating__container"],["role","radio","class","nx-rating__icon","size","m",3,"tabindex","name","click","keyup","mouseenter","mouseleave",4,"ngFor","ngForOf"],["class","nx-rating__label",4,"ngIf"],["role","radio","size","m",1,"nx-rating__icon",3,"tabindex","name","click","keyup","mouseenter","mouseleave"],[1,"nx-rating__label"],[1,"nx-rating__label--start"],[1,"nx-rating__label--end"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e.YNc(1,R,1,4,"nx-icon",1),e.qZA(),e.YNc(2,O,5,2,"div",2)),2&n&&(e.xp6(1),e.Q6J("ngForOf",e.DdM(2,E)),e.xp6(1),e.Q6J("ngIf",i.startLabel||i.endLabel))},directives:[_.O8,g.sg,g.O5],styles:["[_nghost-%COMP%]{display:inline-block}.nx-rating--negative[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%], .nx-rating--negative[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{color:var(--negative)}.nx-rating--disabled[_nghost-%COMP%]{cursor:not-allowed;outline:none}.nx-rating--disabled[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%]{color:var(--rating-disabled-label-color)}.nx-rating--disabled[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{color:var(--rating-disabled-icon-color);cursor:not-allowed}.nx-rating__container[_ngcontent-%COMP%]{display:flex}.nx-rating__label[_ngcontent-%COMP%]{display:flex;font-size:var(--rating-label-font-size);line-height:var(--rating-label-line-height);font-weight:var(--rating-label-font-weight);letter-spacing:var(--rating-label-letter-spacing);color:var(--rating-label-color)}.nx-rating__label--end[_ngcontent-%COMP%]{margin-left:auto}[dir=rtl][_nghost-%COMP%]   .nx-rating__label--end[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-rating__label--end[_ngcontent-%COMP%]{margin-right:auto;margin-left:0;margin-left:initial}.nx-rating__icon[_ngcontent-%COMP%]{font-size:var(--rating-icon-size);color:var(--rating-icon-color);color:var(--iconColor, var(--rating-icon-color));width:auto;background:none;border:none;margin-right:16px;cursor:pointer;outline:none}[dir=rtl][_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{margin-right:0;margin-right:initial;margin-left:16px}.nx-rating__icon[_ngcontent-%COMP%]:last-child{margin-right:0}[dir=rtl][_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]:last-child, [dir=rtl]   [_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]:last-child{margin-right:0;margin-right:initial;margin-left:0}.nx-rating__icon.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast: active),(forced-colors: active){.nx-rating__icon.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%], .nx-rating--negative[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{color:buttonText}[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%], .nx-rating--negative[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%]{-ms-high-contrast-adjust:none;color:CanvasText}.nx-rating--disabled[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{color:GrayText}.nx-rating--disabled[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%]{color:windowText}}"],changeDetection:0}),t})(),L=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.ez,_.cf]]}),t})();const P=function(){return["Hated","Didn't like it","Just OK","Liked it","Loved it"]};let u=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["rating-accessibility-example"]],decls:1,vars:2,consts:[[3,"nxAriaLabel"]],template:function(n,i){1&n&&e._UZ(0,"nx-rating",0),2&n&&e.Q6J("nxAriaLabel",e.DdM(1,P))},directives:[c],styles:[""]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["rating-basic-example"]],decls:1,vars:0,consts:[["nxStartLabel","poor","nxEndLabel","great"]],template:function(n,i){1&n&&e._UZ(0,"nx-rating",0)},directives:[c],styles:[""]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["rating-disabled-example"]],decls:1,vars:1,consts:[["nxStartLabel","poor","nxEndLabel","great",3,"nxDisabled"]],template:function(n,i){1&n&&e._UZ(0,"nx-rating",0),2&n&&e.Q6J("nxDisabled",!0)},directives:[c],styles:[""]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["rating-negative-example"]],decls:2,vars:1,consts:[[1,"docs-inverse-container"],["nxStartLabel","poor","nxEndLabel","great",3,"nxNegative"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"nx-rating",1),e.qZA()),2&n&&(e.xp6(1),e.Q6J("nxNegative",!0))},directives:[c],styles:[""]}),t})(),v=(()=>{class t{constructor(n){this.fb=n,this.testForm=this.fb.group({rating:[1]})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(s.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["rating-reactive-example"]],decls:5,vars:4,consts:[[3,"formGroup"],["formControlName","rating"]],template:function(n,i){1&n&&(e.TgZ(0,"form",0),e._UZ(1,"nx-rating",1),e.qZA(),e.TgZ(2,"p"),e._uU(3),e.ALo(4,"json"),e.qZA()),2&n&&(e.Q6J("formGroup",i.testForm),e.xp6(3),e.hij("Form value: ",e.lcZ(4,2,i.testForm.value),""))},directives:[s._Y,s.JL,s.sg,c,s.JJ,s.u],pipes:[g.Ts],styles:[""]}),t})(),f=(()=>{class t{constructor(){this.simpleBinding=1}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["rating-simple-example"]],decls:3,vars:2,consts:[[3,"nxValue","nxValueChange"]],template:function(n,i){1&n&&(e.TgZ(0,"nx-rating",0),e.NdJ("nxValueChange",function(r){return i.simpleBinding=r}),e.qZA(),e.TgZ(1,"p"),e._uU(2),e.qZA()),2&n&&(e.Q6J("nxValue",i.simpleBinding),e.xp6(2),e.hij("Value: ",i.simpleBinding,""))},directives:[c],styles:[""]}),t})(),M=(()=>{class t{constructor(){this.ngModelBinding=1}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["rating-template-example"]],decls:3,vars:2,consts:[[3,"ngModel","ngModelChange"]],template:function(n,i){1&n&&(e.TgZ(0,"nx-rating",0),e.NdJ("ngModelChange",function(r){return i.ngModelBinding=r}),e.qZA(),e.TgZ(1,"p"),e._uU(2),e.qZA()),2&n&&(e.Q6J("ngModel",i.ngModelBinding),e.xp6(2),e.hij("Value: ",i.ngModelBinding,""))},directives:[c,s.JJ,s.On],styles:[""]}),t})(),T=(()=>{class t{static components(){return{"rating-accessibility":u,"rating-basic":h,"rating-disabled":C,"rating-negative":b,"rating-reactive":v,"rating-simple":f,"rating-template":M}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[L,s.UX,s.u5,g.ez]]}),t})()}}]);