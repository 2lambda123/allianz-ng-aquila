"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[6951],{6951:(Z,b,o)=>{o.r(b),o.d(b,{MessageExamplesModule:()=>F});var t=o(6019),C=o(6638),h=o(8230),f=o(7372),E=o(508),e=o(3668),d=o(1750),T=o(7336);function c(n,a){if(1&n){const s=e.EpF();e.TgZ(0,"nx-message-banner",4),e.NdJ("close",function(){return e.CHM(s),e.oxw().infoBanner=!1}),e.TgZ(1,"span",5),e._uU(2,"Notification title:"),e.qZA(),e._UZ(3,"br"),e._uU(4," You are logged in as Max Mustermann.\n"),e.qZA()}}function _(n,a){if(1&n){const s=e.EpF();e.TgZ(0,"nx-message-banner",6),e.NdJ("close",function(){return e.CHM(s),e.oxw().warningBanner=!1}),e.TgZ(1,"span",5),e._uU(2,"Notification title:"),e.qZA(),e._UZ(3,"br"),e._uU(4," Your password expires in three days!\n"),e.qZA()}}function l(n,a){if(1&n){const s=e.EpF();e.TgZ(0,"nx-message-banner",7),e.NdJ("close",function(){return e.CHM(s),e.oxw().errorBanner=!1}),e.TgZ(1,"span",5),e._uU(2,"Notification title:"),e.qZA(),e._UZ(3,"br"),e._uU(4," The object could not be found.\n"),e.qZA()}}let g=(()=>{class n{constructor(){this.infoBanner=!0,this.warningBanner=!0,this.errorBanner=!0}showAllBanners(){this.infoBanner=!0,this.warningBanner=!0,this.errorBanner=!0}}return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["message-banner-example"]],decls:5,vars:4,consts:[["closeButtonLabel","Close info message banner","class","nx-margin-bottom-xs",3,"close",4,"ngIf"],["context","warning","closeButtonLabel","Close warning message banner","class","nx-margin-bottom-xs",3,"close",4,"ngIf"],["context","error","closeButtonLabel","Close error message banner","class","nx-margin-bottom-xs",3,"close",4,"ngIf"],["nxButton","","type","button",3,"disabled","click"],["closeButtonLabel","Close info message banner",1,"nx-margin-bottom-xs",3,"close"],[1,"nx-font-weight-bold"],["context","warning","closeButtonLabel","Close warning message banner",1,"nx-margin-bottom-xs",3,"close"],["context","error","closeButtonLabel","Close error message banner",1,"nx-margin-bottom-xs",3,"close"]],template:function(s,r){1&s&&(e.YNc(0,c,5,0,"nx-message-banner",0),e.YNc(1,_,5,0,"nx-message-banner",1),e.YNc(2,l,5,0,"nx-message-banner",2),e.TgZ(3,"button",3),e.NdJ("click",function(){return r.showAllBanners()}),e._uU(4," Show all message banners\n"),e.qZA()),2&s&&(e.Q6J("ngIf",r.infoBanner),e.xp6(1),e.Q6J("ngIf",r.warningBanner),e.xp6(1),e.Q6J("ngIf",r.errorBanner),e.xp6(1),e.Q6J("disabled",r.infoBanner&&r.warningBanner&&r.errorBanner))},directives:[t.O5,d.X,T.h],styles:[""]}),n})();var M=o(4712);function B(n,a){if(1&n){const s=e.EpF();e.TgZ(0,"nx-message",3),e.NdJ("close",function(){return e.CHM(s),e.oxw().closed=!0}),e.TgZ(1,"span",4),e._uU(2,"Notification title:"),e.qZA(),e._UZ(3,"br"),e._uU(4," Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit voluptas assumenda iure ab quaerat aliquid harum facere rerum excepturi accusantium commodi vel libero, nesciunt maxime minus exercitationem iste quod.\n"),e.qZA()}}function v(n,a){1&n&&(e.TgZ(0,"p"),e._uU(1," A close event was emitted!"),e.qZA())}let O=(()=>{class n{constructor(){this.closed=!1}}return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["message-closable-example"]],decls:4,vars:2,consts:[["nxContext","info","closable","true","class","nx-margin-bottom-xs",3,"close",4,"ngIf"],[4,"ngIf"],["nxButton","","type","button",3,"click"],["nxContext","info","closable","true",1,"nx-margin-bottom-xs",3,"close"],[1,"nx-font-weight-bold"]],template:function(s,r){1&s&&(e.YNc(0,B,5,0,"nx-message",0),e.YNc(1,v,2,0,"p",1),e.TgZ(2,"button",2),e.NdJ("click",function(){return r.closed=!r.closed}),e._uU(3," Toggle closed"),e.qZA()),2&s&&(e.Q6J("ngIf",!r.closed),e.xp6(1),e.Q6J("ngIf",r.closed))},directives:[t.O5,d.X,M.w],styles:[""]}),n})();var m=o(4097),x=o(4938);let i=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["message-error-example"]],decls:14,vars:0,consts:[["nxHeadline","subsection-xsmall",1,"nx-margin-bottom-s"],["nxContext","error"],[1,"nx-font-weight-bold"],[1,"nx-margin-bottom-xs"],["appearance","text"]],template:function(s,r){1&s&&(e.TgZ(0,"h5",0),e._uU(1,"Using nx-message:"),e.qZA(),e.TgZ(2,"nx-message",1),e.TgZ(3,"span",2),e._uU(4,"Notification title:"),e.qZA(),e._UZ(5,"br"),e._uU(6," Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit voluptas assumenda iure ab quaerat aliquid harum facere rerum excepturi accusantium commodi vel libero, nesciunt maxime minus exercitationem iste quod.\n"),e.qZA(),e._UZ(7,"br"),e.TgZ(8,"h5",0),e._uU(9,"Using nx-error:"),e.qZA(),e.TgZ(10,"nx-error",3),e._uU(11," This is an error message for a customer facing application (B2C).\n"),e.qZA(),e.TgZ(12,"nx-error",4),e._uU(13," This is an error message for an internal application (B2B/B2E).\n"),e.qZA())},directives:[m.s,M.w,x.vV],styles:[""]}),n})(),u=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["message-info-example"]],decls:5,vars:0,consts:[["nxContext","info"],[1,"nx-font-weight-bold"]],template:function(s,r){1&s&&(e.TgZ(0,"nx-message",0),e.TgZ(1,"span",1),e._uU(2,"Notification title:"),e.qZA(),e._UZ(3,"br"),e._uU(4," Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit voluptas assumenda iure ab quaerat aliquid harum facere rerum excepturi accusantium commodi vel libero, nesciunt maxime minus exercitationem iste quod.\n"),e.qZA())},directives:[M.w],styles:[""]}),n})(),U=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["message-success-example"]],decls:5,vars:0,consts:[["nxContext","success"],[1,"nx-font-weight-bold"]],template:function(s,r){1&s&&(e.TgZ(0,"nx-message",0),e.TgZ(1,"span",1),e._uU(2,"Notification title:"),e.qZA(),e._UZ(3,"br"),e._uU(4," Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit voluptas assumenda iure ab quaerat aliquid harum facere rerum excepturi accusantium commodi vel libero, nesciunt maxime minus exercitationem iste quod.\n"),e.qZA())},directives:[M.w],styles:[""]}),n})();const N=["template"];function I(n,a){1&n&&(e.TgZ(0,"span",3),e._uU(1,"Notification title:"),e.qZA(),e._UZ(2,"br"),e._uU(3," Yay, you see a success message toast. Great job!\n"))}const D={duration:0,context:"success",announcementMessage:"Yay, you see a success message toast"};let A=(()=>{class n{constructor(s){this.messageToastService=s}open(){this.toastRef=this.messageToastService.openFromTemplate(this.templateRef,D)}close(){this.toastRef&&this.toastRef.dismiss()}}return n.\u0275fac=function(s){return new(s||n)(e.Y36(h.VO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["message-toast-custom-settings-example"]],viewQuery:function(s,r){if(1&s&&e.Gf(N,5),2&s){let p;e.iGM(p=e.CRH())&&(r.templateRef=p.first)}},decls:6,vars:0,consts:[["nxButton","",1,"nx-margin-right-xs",3,"click"],["nxButton","",3,"click"],["template",""],[1,"nx-font-weight-bold"]],template:function(s,r){1&s&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return r.open()}),e._uU(1,"open message toast"),e.qZA(),e.TgZ(2,"button",1),e.NdJ("click",function(){return r.close()}),e._uU(3,"close message toast"),e.qZA(),e.YNc(4,I,4,0,"ng-template",null,2,e.W1O))},directives:[d.X],styles:[""]}),n})();const P=["template"];function L(n,a){1&n&&(e.TgZ(0,"strong"),e._uU(1,"Information"),e.qZA(),e._UZ(2,"br"),e._uU(3," You see an info message toast (from a template). It will disappear in 3000 ms.\n"))}let y=(()=>{class n{constructor(s){this.messageToastService=s,this.toastText="A success message toast with a custom text."}openFromText(){this.messageToastService.open(this.toastText,{context:"success",duration:5e3})}openFromTemplate(){this.messageToastService.openFromTemplate(this.templateRef,{announcementMessage:"You see an info message. It will disappear in 3000 ms."})}}return n.\u0275fac=function(s){return new(s||n)(e.Y36(h.VO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["message-toast-opening-example"]],viewQuery:function(s,r){if(1&s&&e.Gf(P,5),2&s){let p;e.iGM(p=e.CRH())&&(r.templateRef=p.first)}},decls:6,vars:0,consts:[["nxButton","",1,"nx-margin-right-s",3,"click"],["nxButton","",3,"click"],["template",""]],template:function(s,r){1&s&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return r.openFromText()}),e._uU(1,"open from text"),e.qZA(),e.TgZ(2,"button",1),e.NdJ("click",function(){return r.openFromTemplate()}),e._uU(3,"open from template"),e.qZA(),e.YNc(4,L,4,0,"ng-template",null,2,e.W1O))},directives:[d.X],styles:[""]}),n})(),w=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["message-warning-example"]],decls:5,vars:0,consts:[["nxContext","warning"],[1,"nx-font-weight-bold"]],template:function(s,r){1&s&&(e.TgZ(0,"nx-message",0),e.TgZ(1,"span",1),e._uU(2,"Notification title:"),e.qZA(),e._UZ(3,"br"),e._uU(4," Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit voluptas assumenda iure ab quaerat aliquid harum facere rerum excepturi accusantium commodi vel libero, nesciunt maxime minus exercitationem iste quod.\n"),e.qZA())},directives:[M.w],styles:[""]}),n})(),F=(()=>{class n{static components(){return{"message-banner":g,"message-closable":O,"message-error":i,"message-info":u,"message-success":U,"message-toast-custom-settings":A,"message-toast-opening":y,"message-warning":w}}}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[h.Ee,C.$N,f.ru,t.ez,E.X]]}),n})()},4938:(Z,b,o)=>{o.d(b,{hZ:()=>v,vV:()=>O});var t=o(3668),C=o(348),h=o(3405),f=o(8805),E=o(6019),e=o(2823),d=o(4712);function T(m,x){1&m&&t._UZ(0,"nx-icon",7),2&m&&t.Q6J("name","exclamation-triangle")}function c(m,x){if(1&m&&(t.ynx(0),t.YNc(1,T,1,1,"nx-icon",3),t.TgZ(2,"div",4),t.TgZ(3,"div",5),t.GkF(4,6),t.qZA(),t.qZA(),t.BQk()),2&m){const i=t.oxw(),u=t.MAs(3);t.xp6(1),t.Q6J("ngIf",i.showIcon),t.xp6(3),t.Q6J("ngTemplateOutlet",u)}}function _(m,x){if(1&m&&(t.TgZ(0,"nx-message",8),t.GkF(1,6),t.qZA()),2&m){t.oxw();const i=t.MAs(3);t.xp6(1),t.Q6J("ngTemplateOutlet",i)}}function l(m,x){1&m&&t.Hsn(0)}const g=["*"];let M=0;const v=new t.OlP("ERROR_DEFAULT_OPTIONS");let O=(()=>{class m{constructor(i,u){this._changeDetectorRef=i,this._defaultOptions=u,this._showIcon=!0,this._id="nx-error-"+M++,this._destroyed=new h.xQ,this._defaultOptions&&this._defaultOptions.changes&&this._defaultOptions.changes.pipe((0,f.R)(this._destroyed)).subscribe(()=>{this._changeDetectorRef.markForCheck()})}set showIcon(i){this._showIcon=(0,C.Ig)(i),this._changeDetectorRef.markForCheck()}get showIcon(){return this._showIcon}set id(i){i&&i!==this._id&&(this._id=i,this._changeDetectorRef.markForCheck())}get id(){return this._id}set appearance(i){i!==this.appearance&&(this._appearance=i,this._changeDetectorRef.markForCheck())}get appearance(){return this._appearance||this._defaultOptions&&this._defaultOptions.appearance||"message"}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}}return m.\u0275fac=function(i){return new(i||m)(t.Y36(t.sBO),t.Y36(v,8))},m.\u0275cmp=t.Xpm({type:m,selectors:[["nx-error"]],hostVars:4,hostBindings:function(i,u){2&i&&(t.uIk("role","alert")("id",u.id),t.ekj("nx-error--message","message"==u.appearance))},inputs:{showIcon:"showIcon",id:"id",appearance:"appearance"},ngContentSelectors:g,decls:4,vars:2,consts:[[4,"ngIf"],["nxContext","error",4,"ngIf"],["errorContent",""],["class","nx-error__icon",3,"name",4,"ngIf"],[1,"nx-error__content-wrapper"],[1,"nx-error__content"],[3,"ngTemplateOutlet"],[1,"nx-error__icon",3,"name"],["nxContext","error"]],template:function(i,u){1&i&&(t.F$t(),t.YNc(0,c,5,2,"ng-container",0),t.YNc(1,_,2,1,"nx-message",1),t.YNc(2,l,1,0,"ng-template",null,2,t.W1O)),2&i&&(t.Q6J("ngIf","text"===u.appearance),t.xp6(1),t.Q6J("ngIf","message"===u.appearance))},directives:[E.O5,E.tP,e.O,d.w],styles:["[_nghost-%COMP%]{font-size:var(--base-error-simple-font-size);line-height:var(--base-error-simple-line-height);font-weight:var(--base-error-simple-font-weight);letter-spacing:var(--base-error-simple-letter-spacing);color:var(--base-error-color);width:100%;display:flex;text-align:left}[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{font-size:var(--base-error-simple-icon-size);line-height:var(--base-error-simple-line-height);margin-right:8px}@media screen and (-ms-high-contrast: active){[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{color:windowText}}[_nghost-%COMP%]   .nx-error__content-wrapper[_ngcontent-%COMP%]{max-width:100%}[dir=rtl]   [_nghost-%COMP%]{text-align:right}[dir=rtl]   [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{margin-right:0;margin-right:initial;margin-left:8px}"],changeDetection:0}),m})()},8063:(Z,b,o)=>{o.d(b,{U:()=>T});var t=o(3668),C=o(348),h=o(3405);const f=["*"];let E=0;const d=new t.OlP("LABEL_DEFAULT_OPTIONS");let T=(()=>{class c{constructor(l){this._defaultOptions=l,this._stateChanges=new h.xQ,this._disabled=!1,this._negative=!1,this._id="nx-label-"+E++}set disabled(l){this._disabled=(0,C.Ig)(l),this._stateChanges.next()}get disabled(){return this._disabled}set negative(l){this._negative=(0,C.Ig)(l),this._stateChanges.next()}get negative(){return this._negative}set id(l){this._id!==l&&(this._id=l)}get id(){return this._id}set size(l){this._size=l,this._stateChanges.next()}get size(){return this._size||this._defaultOptions&&this._defaultOptions.size||"large"}}return c.\u0275fac=function(l){return new(l||c)(t.Y36(d,8))},c.\u0275cmp=t.Xpm({type:c,selectors:[["nx-label"]],hostVars:9,hostBindings:function(l,g){2&l&&(t.uIk("disabled",g.disabled)("aria-labelledby",g.id||null)("id",g.id),t.ekj("nx-label--negative",g.negative)("nx-label--large","large"===g.size)("nx-label--small","small"===g.size))},inputs:{disabled:"disabled",negative:"negative",id:"id",size:"size"},ngContentSelectors:f,decls:2,vars:0,consts:[[1,"nx-label__content"]],template:function(l,g){1&l&&(t.F$t(),t.TgZ(0,"label",0),t.Hsn(1),t.qZA())},styles:["[_nghost-%COMP%]{display:block;color:var(--text-01)}.nx-label--small[_nghost-%COMP%]{font-size:var(--base-label-small-font-size);line-height:var(--base-label-small-line-height);font-weight:var(--base-label-small-font-weight);letter-spacing:var(--base-label-small-letter-spacing)}.nx-label--large[_nghost-%COMP%]{font-size:var(--base-label-large-font-size);line-height:var(--base-label-large-line-height);font-weight:var(--base-label-large-font-weight);letter-spacing:var(--base-label-large-letter-spacing)}[disabled=true][_nghost-%COMP%]   label[_ngcontent-%COMP%]{cursor:not-allowed}.nx-label--negative[_nghost-%COMP%]{color:var(--negative)}"],changeDetection:0}),c})()},6638:(Z,b,o)=>{o.d(b,{hZ:()=>e.hZ,vV:()=>e.vV,$N:()=>E,UD:()=>T.U,WI:()=>d});var t=o(6019),C=o(6201),h=o(8230),f=o(3668);let E=(()=>{class c{}return c.\u0275fac=function(l){return new(l||c)},c.\u0275mod=f.oAB({type:c}),c.\u0275inj=f.cJS({imports:[[t.ez,C.cf,h.Ee]]}),c})();var e=o(4938);let d=(()=>{class c{}return c.\u0275fac=function(l){return new(l||c)},c.\u0275mod=f.oAB({type:c}),c.\u0275inj=f.cJS({imports:[[t.ez]]}),c})();var T=o(8063)}}]);