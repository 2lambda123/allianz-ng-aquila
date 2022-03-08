"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[1933],{1933:(k,_,s)=>{s.r(_),s.d(_,{RatingExamplesModule:()=>T});var g=s(9808),r=s(3075),d=s(3191),p=s(1159),t=s(5e3),m=s(9209),y=s(5583);function O(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"nx-icon",3),t.NdJ("click",function(){const l=t.CHM(n).$implicit;return t.oxw().setSelection(l)})("keyup",function(o){const M=t.CHM(n).$implicit;return t.oxw().handleKeyUp(o,M)}),t.qZA()}if(2&e){const n=a.$implicit,i=t.oxw();t.Q6J("tabindex",i.disabled?-1:0)("name",i.getIconName(n)),t.uIk("aria-label",i.getAriaLabel(n))("aria-checked",i.isSelected(n))}}function R(e,a){if(1&e&&(t.TgZ(0,"div",4)(1,"span",5),t._uU(2),t.qZA(),t.TgZ(3,"span",6),t._uU(4),t.qZA()()),2&e){const n=t.oxw();t.xp6(2),t.Oqu(n.startLabel),t.xp6(2),t.Oqu(n.endLabel)}}const E=function(){return[1,2,3,4,5]};let c=(()=>{class e{constructor(n,i){this._cdr=n,this._focusMonitor=i,this._value=0,this._disabled=!1,this._negative=!1,this._startLabel="",this._endLabel=null,this._ariaLabel=["1/5","2/5","3/5","4/5","5/5"],this.valueChange=new t.vpe,this.onTouchedCallback=()=>{},this.onChangeCallback=o=>{}}set value(n){this._value=(0,d.su)(n),this._cdr.markForCheck()}get value(){return this._value}set disabled(n){this._disabled!==n&&(this._disabled=(0,d.Ig)(n),this._cdr.markForCheck())}get disabled(){return this._disabled}set negative(n){this._negative!==n&&(this._negative=(0,d.Ig)(n),this._cdr.markForCheck())}get negative(){return this._negative}set startLabel(n){this._startLabel=n,this._cdr.markForCheck()}get startLabel(){return this._startLabel}set endLabel(n){this._endLabel=n,this._cdr.markForCheck()}get endLabel(){return this._endLabel}set ariaLabel(n){this._ariaLabel=n,this._cdr.markForCheck()}get ariaLabel(){return this._ariaLabel}ngAfterViewInit(){this.icons.forEach(n=>this._focusMonitor.monitor(n))}ngOnDestroy(){this.icons.forEach(n=>this._focusMonitor.stopMonitoring(n))}isSelected(n){return n<=this.value}setSelection(n){this.disabled||(this.value=n,this.valueChange.emit(n),this.onTouchedCallback(),this.onChangeCallback(this.value))}handleKeyUp(n,i){const o=n.keyCode;if(n.preventDefault(),n.stopPropagation(),o===p.K5&&this.setSelection(i),o===p.SV){this.value=Math.min(this.value+1,5);const l=this.icons.toArray()[this.value-1];this._focusMonitor.focusVia(l,"keyboard")}if(o===p.oh){this.value=Math.max(this.value-1,1);const l=this.icons.toArray()[this.value-1];this._focusMonitor.focusVia(l,"keyboard")}}writeValue(n){this.value=n}registerOnChange(n){this.onChangeCallback=n}registerOnTouched(n){this.onTouchedCallback=n}setDisabledState(n){this.disabled=n}getAriaLabel(n){return this.ariaLabel[n-1]}getIconName(n){return"star"+(this.isSelected(n)?"":"-o")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.sBO),t.Y36(y.tE))},e.\u0275cmp=t.Xpm({type:e,selectors:[["nx-rating"]],viewQuery:function(n,i){if(1&n&&t.Gf(m.O8,5,t.SBq),2&n){let o;t.iGM(o=t.CRH())&&(i.icons=o)}},hostVars:4,hostBindings:function(n,i){2&n&&t.ekj("nx-rating--negative",i.negative)("nx-rating--disabled",i.disabled)},inputs:{value:["nxValue","value"],disabled:["nxDisabled","disabled"],negative:["nxNegative","negative"],startLabel:["nxStartLabel","startLabel"],endLabel:["nxEndLabel","endLabel"],ariaLabel:["nxAriaLabel","ariaLabel"]},outputs:{valueChange:"nxValueChange"},features:[t._Bn([{provide:r.JU,useExisting:(0,t.Gpc)(()=>e),multi:!0}])],decls:3,vars:3,consts:[["role","radiogroup",1,"nx-rating__container"],["role","radio","class","nx-rating__icon","size","m",3,"tabindex","name","click","keyup",4,"ngFor","ngForOf"],["class","nx-rating__label",4,"ngIf"],["role","radio","size","m",1,"nx-rating__icon",3,"tabindex","name","click","keyup"],[1,"nx-rating__label"],[1,"nx-rating__label--start"],[1,"nx-rating__label--end"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.YNc(1,O,1,4,"nx-icon",1),t.qZA(),t.YNc(2,R,5,2,"div",2)),2&n&&(t.xp6(1),t.Q6J("ngForOf",t.DdM(2,E)),t.xp6(1),t.Q6J("ngIf",i.startLabel||i.endLabel))},directives:[m.O8,g.sg,g.O5],styles:["[_nghost-%COMP%]{display:inline-block}.nx-rating--negative[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%], .nx-rating--negative[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{color:var(--negative)}.nx-rating--disabled[_nghost-%COMP%]{cursor:not-allowed;outline:none}.nx-rating--disabled[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%]{color:var(--rating-disabled-label-color)}.nx-rating--disabled[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{color:var(--rating-disabled-icon-color);cursor:not-allowed}.nx-rating__container[_ngcontent-%COMP%]{display:flex}.nx-rating__label[_ngcontent-%COMP%]{display:flex;font-size:var(--rating-label-font-size);line-height:var(--rating-label-line-height);font-weight:var(--rating-label-font-weight);letter-spacing:var(--rating-label-letter-spacing);color:var(--rating-label-color)}.nx-rating__label--end[_ngcontent-%COMP%]{margin-left:auto}[dir=rtl][_nghost-%COMP%]   .nx-rating__label--end[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-rating__label--end[_ngcontent-%COMP%]{margin-right:auto;margin-left:0;margin-left:initial}.nx-rating__icon[_ngcontent-%COMP%]{font-size:var(--rating-icon-size);color:var(--rating-icon-color);width:auto;background:none;border:none;margin-right:16px;cursor:pointer;outline:none}[dir=rtl][_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{margin-right:0;margin-right:initial;margin-left:16px}.nx-rating__icon[_ngcontent-%COMP%]:last-child{margin-right:0}[dir=rtl][_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]:last-child, [dir=rtl]   [_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]:last-child{margin-right:0;margin-right:initial;margin-left:0}.nx-rating__icon.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast: active){.nx-rating__icon.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%], .nx-rating--negative[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{color:buttonText}[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%], .nx-rating--negative[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%]{-ms-high-contrast-adjust:none;color:CanvasText}.nx-rating--disabled[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{color:GrayText}.nx-rating--disabled[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%]{color:windowText}}"],changeDetection:0}),e})(),L=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[g.ez,m.cf]]}),e})();const P=function(){return["Hated","Didn't like it","Just OK","Liked it","Loved it"]};let x=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["rating-accessibility-example"]],decls:1,vars:2,consts:[[3,"nxAriaLabel"]],template:function(n,i){1&n&&t._UZ(0,"nx-rating",0),2&n&&t.Q6J("nxAriaLabel",t.DdM(1,P))},directives:[c],styles:[""]}),e})(),u=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["rating-basic-example"]],decls:1,vars:0,consts:[["nxStartLabel","poor","nxEndLabel","great"]],template:function(n,i){1&n&&t._UZ(0,"nx-rating",0)},directives:[c],styles:[""]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["rating-disabled-example"]],decls:1,vars:1,consts:[["nxStartLabel","poor","nxEndLabel","great",3,"nxDisabled"]],template:function(n,i){1&n&&t._UZ(0,"nx-rating",0),2&n&&t.Q6J("nxDisabled",!0)},directives:[c],styles:[""]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["rating-negative-example"]],decls:2,vars:1,consts:[[1,"docs-inverse-container"],["nxStartLabel","poor","nxEndLabel","great",3,"nxNegative"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"nx-rating",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("nxNegative",!0))},directives:[c],styles:[""]}),e})(),b=(()=>{class e{constructor(n){this.fb=n,this.createForm()}createForm(){this.testForm=this.fb.group({rating:[1]})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(r.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["rating-reactive-example"]],decls:5,vars:4,consts:[[3,"formGroup"],["formControlName","rating"]],template:function(n,i){1&n&&(t.TgZ(0,"form",0),t._UZ(1,"nx-rating",1),t.qZA(),t.TgZ(2,"p"),t._uU(3),t.ALo(4,"json"),t.qZA()),2&n&&(t.Q6J("formGroup",i.testForm),t.xp6(3),t.hij("Form value: ",t.lcZ(4,2,i.testForm.value),""))},directives:[r._Y,r.JL,r.sg,c,r.JJ,r.u],pipes:[g.Ts],styles:[""]}),e})(),f=(()=>{class e{constructor(){this.simpleBinding=1}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["rating-simple-example"]],decls:3,vars:2,consts:[[3,"nxValue","nxValueChange"]],template:function(n,i){1&n&&(t.TgZ(0,"nx-rating",0),t.NdJ("nxValueChange",function(l){return i.simpleBinding=l}),t.qZA(),t.TgZ(1,"p"),t._uU(2),t.qZA()),2&n&&(t.Q6J("nxValue",i.simpleBinding),t.xp6(2),t.hij("Value: ",i.simpleBinding,""))},directives:[c],styles:[""]}),e})(),v=(()=>{class e{constructor(){this.ngModelBinding=1}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["rating-template-example"]],decls:3,vars:2,consts:[[3,"ngModel","ngModelChange"]],template:function(n,i){1&n&&(t.TgZ(0,"nx-rating",0),t.NdJ("ngModelChange",function(l){return i.ngModelBinding=l}),t.qZA(),t.TgZ(1,"p"),t._uU(2),t.qZA()),2&n&&(t.Q6J("ngModel",i.ngModelBinding),t.xp6(2),t.hij("Value: ",i.ngModelBinding,""))},directives:[c,r.JJ,r.On],styles:[""]}),e})(),T=(()=>{class e{static components(){return{"rating-accessibility":x,"rating-basic":u,"rating-disabled":h,"rating-negative":C,"rating-reactive":b,"rating-simple":f,"rating-template":v}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[L,r.UX,r.u5,g.ez]]}),e})()}}]);