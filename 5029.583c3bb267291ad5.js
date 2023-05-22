"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[5029],{5029:(w,y,r)=>{r.r(y),r.d(y,{PageExamplesModule:()=>_});var S=r(529),P=r(9328),f=r(9195),C=r(6942),k=r(1281),e=r(4650),l=r(6895),M=r(690),i=r(9561),s=r(6566);function E(a,t){if(1&a){const n=e.EpF();e.TgZ(0,"div",5)(1,"button",6),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.onButtonClick())}),e._uU(2),e.qZA()()}if(2&a){const n=e.oxw();e.Q6J("nxCol",n.buttonLayout),e.xp6(2),e.Oqu(n.buttonLabel)}}const Z=["*"];let T=(()=>{class a{constructor(n){this._cdr=n,this._buttonLabel=null,this._hideSearchButton=!1,this._buttonLayout="12,12,12,2",this._contentLayout=null,this.buttonClick=new e.vpe}set buttonLabel(n){this._buttonLabel!==n&&(this._buttonLabel=n,this._cdr.markForCheck())}get buttonLabel(){return this._buttonLabel}set hideSearchButton(n){this._hideSearchButton=(0,k.Ig)(n),this._cdr.markForCheck()}get hideSearchButton(){return this._hideSearchButton}set buttonLayout(n){this._buttonLayout!==n&&(this._buttonLayout=n,this._cdr.markForCheck())}get buttonLayout(){return this._buttonLayout}set contentLayout(n){this._contentLayout!==n&&(this._contentLayout=n,this._cdr.markForCheck())}get contentLayout(){return this._contentLayout?this._contentLayout:this.hideSearchButton?"12":"12,12,12,10"}onButtonClick(){this.buttonClick.emit()}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(e.sBO))},a.\u0275cmp=e.Xpm({type:a,selectors:[["nx-page-search"]],hostVars:1,hostBindings:function(n,c){2&n&&e.uIk("role","search")},inputs:{buttonLabel:["nxButtonLabel","buttonLabel"],hideSearchButton:["nxHideSearchButton","hideSearchButton"],buttonLayout:["nxButtonLayout","buttonLayout"],contentLayout:["nxContentLayout","contentLayout"]},outputs:{buttonClick:"nxButtonClick"},ngContentSelectors:Z,decls:6,vars:2,consts:[[1,"nx-pagesearch"],["nxLayout","grid"],["nxRow",""],[1,"nx-pagesearch--content",3,"nxCol"],["class","nx-pagesearch__actions",3,"nxCol",4,"ngIf"],[1,"nx-pagesearch__actions",3,"nxCol"],["nxButton","primary medium","type","button",3,"click"]],template:function(n,c){1&n&&(e.F$t(),e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.Hsn(4),e.qZA(),e.YNc(5,E,3,2,"div",4),e.qZA()()()),2&n&&(e.xp6(3),e.Q6J("nxCol",c.contentLayout),e.xp6(2),e.Q6J("ngIf",!c.hideSearchButton))},dependencies:[l.O5,M.XV,i.RH,i.yI,i.s7],styles:[".nx-pagesearch[_ngcontent-%COMP%]{padding:32px 0;background:var(--page-search-background-color);box-shadow:var(--page-search-box-shadow)}.nx-pagesearch[_ngcontent-%COMP%]     .nx-formfield__wrapper{padding-bottom:0}.nx-pagesearch[_ngcontent-%COMP%]     .has-outline .nx-formfield__wrapper{padding-top:4px}.nx-pagesearch[_ngcontent-%COMP%]     .c-input{height:auto;font-size:var(--page-search-font-size);line-height:var(--page-search-line-height);font-weight:var(--page-search-font-weight);letter-spacing:var(--page-search-letter-spacing)}.nx-pagesearch[_ngcontent-%COMP%]     .c-input.is-filled{font-weight:600}.nx-pagesearch[_ngcontent-%COMP%]     .c-input::placeholder{font-weight:300}.nx-pagesearch[_ngcontent-%COMP%]     .nx-formfield__input-container{align-items:center}.nx-pagesearch[_ngcontent-%COMP%]     .nx-formfield__prefix, .nx-pagesearch[_ngcontent-%COMP%]     .nx-formfield__suffix{color:var(--page-search-icon-color)}.nx-pagesearch[_ngcontent-%COMP%]     .nx-formfield__suffix{cursor:pointer}.nx-pagesearch[_ngcontent-%COMP%]     button{margin:0}.nx-pagesearch[_ngcontent-%COMP%]     .nx-icon--auto{font-size:24px}.nx-pagesearch[_ngcontent-%COMP%]   .nx-pagesearch__actions[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:0}@media (max-width: 991px){.nx-pagesearch[_ngcontent-%COMP%]   .nx-pagesearch__actions[_ngcontent-%COMP%]{margin-top:16px}}"],changeDetection:0}),a})(),L=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[l.ez,P._R,s._0,M.ru,i.TW]}),a})();var A=r(9508),v=r(4850),p=r(4006);function J(a,t){if(1&a){const n=e.EpF();e.TgZ(0,"span",9),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.searchTerm1="")}),e._UZ(1,"nx-icon",10),e.qZA()}}function F(a,t){if(1&a){const n=e.EpF();e.TgZ(0,"span",9),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.searchTerm2="")}),e._UZ(1,"nx-icon",10),e.qZA()}}class u{constructor(t){this.client=t,this.WIKIPEDIA_URL="https://en.wikipedia.org/w/api.php"}search(t){const n=function c(o,h){return`${h}?${(new S.LE).append("action","opensearch").append("search",encodeURIComponent(o)).append("format","json").toString()}`}(t,this.WIKIPEDIA_URL);return this.client.jsonp(n,"callback").pipe((0,v.U)(o=>o[1].map(h=>({value:h}))))}}u.\u0275fac=function(t){return new(t||u)(e.LFG(S.eN))},u.\u0275prov=e.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"});class m{constructor(t){this.wikipediaService=t,this.searchTerm1="",this.searchTerm2="",this.searchFunction=n=>t.search(n).pipe((0,v.U)(c=>c.map(o=>o.value)))}}function I(a,t){if(1&a){const n=e.EpF();e.TgZ(0,"span",7),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.searchTerm="")}),e._UZ(1,"nx-icon",8),e.qZA()}}function b(a,t){if(1&a&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&a){const n=t.$implicit;e.xp6(1),e.hij("Value at click: ",n,"")}}m.\u0275fac=function(t){return new(t||m)(e.Y36(u))},m.\u0275cmp=e.Xpm({type:m,selectors:[["page-search-autocomplete-example"]],features:[e._Bn([u])],decls:18,vars:8,consts:[["nxButtonLabel","Search","nxButtonLayout","12,12,12,4","nxContentLayout","12,12,12,8","aria-label","Search autocomplete example"],["nxRow",""],["nxCol","12,12,6,6"],["nxInput","","type","search",3,"nxAutocomplete","nxAutocompleteItems","ngModel","ngModelChange"],["auto1","nxAutocomplete"],["nxFormfieldPrefix",""],["name","search","size","s"],["nxFormfieldSuffix","","aria-hidden","true",3,"click",4,"ngIf"],["auto2","nxAutocomplete"],["nxFormfieldSuffix","","aria-hidden","true",3,"click"],["name","close","size","s"]],template:function(t,n){if(1&t&&(e.TgZ(0,"nx-page-search",0)(1,"div",1)(2,"div",2)(3,"nx-formfield")(4,"input",3),e.NdJ("ngModelChange",function(o){return n.searchTerm1=o}),e.qZA(),e._UZ(5,"nx-autocomplete",null,4),e.TgZ(7,"span",5),e._UZ(8,"nx-icon",6),e.qZA(),e.YNc(9,J,2,0,"span",7),e.qZA()(),e.TgZ(10,"div",2)(11,"nx-formfield")(12,"input",3),e.NdJ("ngModelChange",function(o){return n.searchTerm2=o}),e.qZA(),e._UZ(13,"nx-autocomplete",null,8),e.TgZ(15,"span",5),e._UZ(16,"nx-icon",6),e.qZA(),e.YNc(17,F,2,0,"span",7),e.qZA()()()()),2&t){const c=e.MAs(6),o=e.MAs(14);e.xp6(4),e.Q6J("nxAutocomplete",c)("nxAutocompleteItems",n.searchFunction)("ngModel",n.searchTerm1),e.xp6(5),e.Q6J("ngIf",n.searchTerm1),e.xp6(3),e.Q6J("nxAutocomplete",o)("nxAutocompleteItems",n.searchFunction)("ngModel",n.searchTerm2),e.xp6(5),e.Q6J("ngIf",n.searchTerm2)}},dependencies:[T,s.VM,s.W7,s.J2,C.aP,P.EU,P.Kl,f.O8,l.O5,p.Fj,p.JJ,p.On,i.yI,i.s7]});class g{constructor(){this.valuesByClick=[],this.searchTerm=""}onButtonClick(t){this.valuesByClick.push(t)}}function B(a,t){if(1&a){const n=e.EpF();e.TgZ(0,"span",5),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.searchTerm="")}),e._UZ(1,"nx-icon",6),e.qZA()}}g.\u0275fac=function(t){return new(t||g)},g.\u0275cmp=e.Xpm({type:g,selectors:[["page-search-click-example"]],decls:9,vars:3,consts:[["nxButtonLabel","Search","nxButtonLayout","12,12,12,4","nxContentLayout","12,12,12,8","aria-label","Search click example",3,"nxButtonClick"],["nxRow",""],["nxCol","12"],["nxInput","","placeholder","Enter Keyword","type","search",3,"ngModel","ngModelChange"],["clickExampleInput",""],["nxFormfieldSuffix","","aria-hidden","true",3,"click",4,"ngIf"],[4,"ngFor","ngForOf"],["nxFormfieldSuffix","","aria-hidden","true",3,"click"],["name","close","size","s"]],template:function(t,n){if(1&t){const c=e.EpF();e.TgZ(0,"nx-page-search",0),e.NdJ("nxButtonClick",function(){e.CHM(c);const h=e.MAs(5);return e.KtG(n.onButtonClick(h.value))}),e.TgZ(1,"div",1)(2,"div",2)(3,"nx-formfield")(4,"input",3,4),e.NdJ("ngModelChange",function(h){return n.searchTerm=h}),e.qZA(),e.YNc(6,I,2,0,"span",5),e.qZA()()()(),e._UZ(7,"br"),e.YNc(8,b,2,1,"div",6)}2&t&&(e.xp6(4),e.Q6J("ngModel",n.searchTerm),e.xp6(2),e.Q6J("ngIf",n.searchTerm),e.xp6(2),e.Q6J("ngForOf",n.valuesByClick))},dependencies:[T,s.VM,s.J2,C.aP,f.O8,l.sg,l.O5,p.Fj,p.JJ,p.On,i.yI,i.s7]});class d{constructor(){this.searchTerm=""}}function O(a,t){if(1&a){const n=e.EpF();e.TgZ(0,"span",5),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.searchTerm="")}),e._UZ(1,"nx-icon",6),e.qZA()}}d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=e.Xpm({type:d,selectors:[["page-search-hidden-example"]],decls:6,vars:3,consts:[["nxButtonLabel","Search","aria-label","Search hidden example",3,"nxHideSearchButton"],["nxRow",""],["nxCol","12"],["nxInput","","placeholder","Enter Keyword","type","search",3,"ngModel","ngModelChange"],["nxFormfieldSuffix","","aria-hidden","true",3,"click",4,"ngIf"],["nxFormfieldSuffix","","aria-hidden","true",3,"click"],["name","close","size","s"]],template:function(t,n){1&t&&(e.TgZ(0,"nx-page-search",0)(1,"div",1)(2,"div",2)(3,"nx-formfield")(4,"input",3),e.NdJ("ngModelChange",function(o){return n.searchTerm=o}),e.qZA(),e.YNc(5,B,2,0,"span",4),e.qZA()()()()),2&t&&(e.Q6J("nxHideSearchButton",!0),e.xp6(4),e.Q6J("ngModel",n.searchTerm),e.xp6(1),e.Q6J("ngIf",n.searchTerm))},dependencies:[T,s.VM,s.J2,C.aP,f.O8,l.O5,p.Fj,p.JJ,p.On,i.yI,i.s7]});class x{constructor(){this.searchTerm=""}}x.\u0275fac=function(t){return new(t||x)},x.\u0275cmp=e.Xpm({type:x,selectors:[["page-search-input-example"]],decls:6,vars:2,consts:[["nxButtonLabel","Search","nxButtonLayout","12,12,12,4","nxContentLayout","12,12,12,8","aria-label","Search input example"],["nxRow",""],["nxCol","12"],["nxInput","","placeholder","Enter Keyword","type","search",3,"ngModel","ngModelChange"],["nxFormfieldSuffix","","aria-hidden","true",3,"click",4,"ngIf"],["nxFormfieldSuffix","","aria-hidden","true",3,"click"],["name","close","size","s"]],template:function(t,n){1&t&&(e.TgZ(0,"nx-page-search",0)(1,"div",1)(2,"div",2)(3,"nx-formfield")(4,"input",3),e.NdJ("ngModelChange",function(o){return n.searchTerm=o}),e.qZA(),e.YNc(5,O,2,0,"span",4),e.qZA()()()()),2&t&&(e.xp6(4),e.Q6J("ngModel",n.searchTerm),e.xp6(1),e.Q6J("ngIf",n.searchTerm))},dependencies:[T,s.VM,s.J2,C.aP,f.O8,l.O5,p.Fj,p.JJ,p.On,i.yI,i.s7]});class _{static components(){return{"page-search-autocomplete":m,"page-search-click":g,"page-search-hidden":d,"page-search-input":x}}}_.\u0275fac=function(t){return new(t||_)},_.\u0275mod=e.oAB({type:_}),_.\u0275inj=e.cJS({imports:[L,C.ZI,P._R,f.cf,A.f,S.Ed,S.JF]})}}]);