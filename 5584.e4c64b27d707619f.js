"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[5584],{5584:(H,r,m)=>{m.r(r),m.d(r,{ModalExamplesModule:()=>Y});var c=m(9823),s=m(303),d=m(4359),p=m(5552),u=m(3412),i=m(1810),e=m(5e3),b=m(3252);function Z(o,n){1&o&&(e.TgZ(0,"div",4)(1,"h3",5),e._uU(2,"Basic Modal Dialog"),e.qZA(),e.TgZ(3,"p",6),e._uU(4,"Any content can be included in a modal view and styled as necessary. This example shows some arbitrary components ("),e.TgZ(5,"code"),e._uU(6,"nxHeadline"),e.qZA(),e._uU(7,", "),e.TgZ(8,"code"),e._uU(9,"nxCopytext"),e.qZA(),e._uU(10," and "),e.TgZ(11,"code"),e._uU(12,"nx-formfield"),e.qZA(),e._uU(13,") and styling ("),e.TgZ(14,"code"),e._uU(15,"u-text-center"),e.qZA(),e._uU(16,")."),e.qZA(),e.TgZ(17,"nx-formfield",7),e._UZ(18,"input",8),e.qZA(),e.TgZ(19,"nx-formfield",9),e._UZ(20,"input",8),e.qZA(),e.TgZ(21,"nx-formfield",10)(22,"nx-dropdown"),e._UZ(23,"nx-dropdown-item",11)(24,"nx-dropdown-item",12)(25,"nx-dropdown-item",13)(26,"nx-dropdown-item",14),e.qZA()()())}function v(o,n){if(1&o&&e._UZ(0,"nx-modal",15,16),2&o){e.oxw();const t=e.MAs(4);e.Q6J("nxBody",t)}}let x=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["modal-basic-example"]],decls:6,vars:1,consts:[["nxButton","primary","type","button"],["basicModalButton",""],["basicModalBody",""],[3,"nxBody",4,"nxOpenModalOnClick"],[1,"u-text-center"],["nxHeadline","subsection-medium",1,"nx-margin-bottom-3m"],["nxCopytext","small",1,"nx-margin-bottom-s"],["nxLabel","First Name"],["nxInput",""],["nxLabel","Last Name"],["nxLabel","Car brand"],["nxValue","BMW"],["nxValue","Audi"],["nxValue","Volvo"],["nxValue","Mini"],[3,"nxBody"],["basicModal",""]],template:function(t,a){if(1&t&&(e.TgZ(0,"button",0,1),e._uU(2,"Show Modal"),e.qZA(),e.YNc(3,Z,27,0,"ng-template",null,2,e.W1O),e.YNc(5,v,2,1,"nx-modal",3)),2&t){const l=e.MAs(1);e.xp6(5),e.Q6J("nxOpenModalOnClick",l)}},directives:[c.XV,p.s,s.v,b.VM,u.aP,d.Uu,d.cp,i.y9,i.nU],styles:[""]}),o})();const y=["template"];function A(o,n){1&o&&(e.TgZ(0,"div",2)(1,"h3",3),e._uU(2,"No close on click outside"),e.qZA(),e.TgZ(3,"p",4),e._uU(4,"This modal view will not close on click outside or ESC. You need to use the action buttons."),e.qZA()(),e.TgZ(5,"div",5)(6,"button",6),e._uU(7,"Cancel"),e.qZA(),e.TgZ(8,"button",7),e._uU(9,"Proceed"),e.qZA()())}let g=(()=>{class o{constructor(t){this.dialogService=t}openFromTemplate(){this.dialogService.open(this.templateRef,{ariaLabel:"A simple modal",disableClose:!0})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(i.Qv))},o.\u0275cmp=e.Xpm({type:o,selectors:[["modal-closing-behaviour-example"]],viewQuery:function(t,a){if(1&t&&e.Gf(y,5),2&t){let l;e.iGM(l=e.CRH())&&(a.templateRef=l.first)}},decls:5,vars:0,consts:[["nxButton","",1,"nx-margin-right-xs",3,"click"],["template",""],["nxModalContent",""],["nxHeadline","subsection-medium",1,"nx-margin-bottom-3m"],["nxCopytext","small",1,"nx-margin-bottom-2m"],["nxModalActions",""],["nxModalClose","","nxButton","small secondary","type","button",1,"nx-margin-bottom-0","nx-margin-right-xs"],["nxModalClose","","nxButton","small","type","button",1,"nx-margin-bottom-0"]],template:function(t,a){1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return a.openFromTemplate()}),e._uU(1,"open modal"),e.qZA(),e._UZ(2,"br"),e.YNc(3,A,10,0,"ng-template",null,1,e.W1O))},directives:[c.XV,i.tY,p.s,s.v,i.x$,i.TV],styles:[""]}),o})();const E=["template"];function w(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",2)(1,"h3",3),e._uU(2,"Modal from a template"),e.qZA(),e.TgZ(3,"p",4),e._uU(4,"This content is placed within the "),e.TgZ(5,"code"),e._uU(6,"nx-modal-container"),e.qZA()()(),e.TgZ(7,"div",5)(8,"button",6),e.NdJ("click",function(){return e.CHM(t),e.oxw().closeDialog("Cancel")}),e._uU(9,"Cancel"),e.qZA(),e.TgZ(10,"button",7),e._uU(11,"Proceed"),e.qZA()()}}let _=(()=>{class o{constructor(t){this.dialogService=t}openFromTemplate(){this.dialogRef=this.dialogService.open(this.templateRef,{ariaLabel:"A simple modal",showCloseIcon:!0}),this.dialogRef.afterClosed().subscribe(t=>{this.actionResult=t})}closeDialog(t){this.dialogRef.close(t)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(i.Qv))},o.\u0275cmp=e.Xpm({type:o,selectors:[["modal-closing-example"]],viewQuery:function(t,a){if(1&t&&e.Gf(E,5),2&t){let l;e.iGM(l=e.CRH())&&(a.templateRef=l.first)}},decls:6,vars:1,consts:[["nxButton","",1,"nx-margin-right-xs","nx-margin-bottom-m",3,"click"],["template",""],["nxModalContent",""],["nxHeadline","subsection-medium",1,"nx-margin-bottom-3m"],["nxCopytext","small",1,"nx-margin-bottom-2m"],["nxModalActions",""],["nxButton","small secondary","type","button",1,"nx-margin-bottom-0","nx-margin-right-xs",3,"click"],["nxModalClose","Proceed","nxButton","small","type","button",1,"nx-margin-bottom-0"]],template:function(t,a){1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return a.openFromTemplate()}),e._uU(1,"open modal"),e.qZA(),e._UZ(2,"br"),e._uU(3),e.YNc(4,w,12,0,"ng-template",null,1,e.W1O)),2&t&&(e.xp6(3),e.hij("\nThe user clicked on: ",a.actionResult," "))},directives:[c.XV,i.tY,p.s,s.v,i.x$,i.TV],styles:[""]}),o})();const U=["template"];function q(o,n){1&o&&(e.TgZ(0,"div",2)(1,"h3",3),e._uU(2,"Modal with Disclaimer"),e.qZA(),e.TgZ(3,"p",4),e._uU(4,"Conditions and Disclaimer"),e.qZA(),e.TgZ(5,"p",5),e._uU(6," Some copy text that describes what this overlay is all about. This text provides the user with additional information and lorem ipsum dolor is max. three lines long. "),e.qZA(),e.TgZ(7,"p",4),e._uU(8,"In case of an accident"),e.qZA(),e.TgZ(9,"p",5),e._uU(10," Some copy text that describes what this overlay is all about. Tdiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing Some copy text that describes what this overlay is all about. Tdiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing et justo duo dolores et ea rebum. "),e.qZA()(),e.TgZ(11,"div",6)(12,"button",7),e._uU(13,"Disagree"),e.qZA(),e.TgZ(14,"button",8),e._uU(15,"Agree"),e.qZA()())}let f=(()=>{class o{constructor(t){this.dialogService=t}openFromTemplate(){this.dialogRef=this.dialogService.open(this.templateRef,{ariaLabel:"A modal with content and actions sections",showCloseIcon:!0}),this.dialogRef.afterClosed().subscribe(t=>{this.actionResult=t})}closeDialog(t){this.dialogRef.close(t)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(i.Qv))},o.\u0275cmp=e.Xpm({type:o,selectors:[["modal-content-actions-example"]],viewQuery:function(t,a){if(1&t&&e.Gf(U,5),2&t){let l;e.iGM(l=e.CRH())&&(a.templateRef=l.first)}},decls:6,vars:1,consts:[["nxButton","",1,"nx-margin-right-xs","nx-margin-bottom-m",3,"click"],["template",""],["nxModalContent",""],["nxHeadline","subsection-medium",1,"nx-margin-bottom-3m"],["nxCopytext","",1,"nx-margin-bottom-s","nx-font-weight-bold"],["nxCopytext","",1,"nx-margin-bottom-m"],["nxModalActions",""],["nxModalClose","Disagree","nxButton","small secondary","type","button",1,"nx-margin-bottom-0","nx-margin-right-xs"],["nxModalClose","Agree","nxButton","small","type","button",1,"nx-margin-bottom-0"]],template:function(t,a){1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return a.openFromTemplate()}),e._uU(1,"open dialog"),e.qZA(),e._UZ(2,"br"),e._uU(3),e.YNc(4,q,16,0,"ng-template",null,1,e.W1O)),2&t&&(e.xp6(3),e.hij("\nThe user clicked on: ",a.actionResult," "))},directives:[c.XV,i.tY,p.s,s.v,i.x$,i.TV],styles:[""]}),o})();const R=["template"];function F(o,n){if(1&o&&(e.TgZ(0,"div")(1,"h3",2),e._uU(2,"Modal with injected data"),e.qZA(),e.TgZ(3,"p",3),e._uU(4),e.qZA()()),2&o){const t=n.$implicit;e.xp6(4),e.hij("Injected data: ",t.name,"")}}let h=(()=>{class o{constructor(t){this.dialogService=t}openFromTemplate(){this.dialogRef=this.dialogService.open(this.templateRef,{showCloseIcon:!0,ariaLabel:"A modal with injected data",data:{name:"Max Mustermann"}}),this.dialogRef.afterClosed().subscribe(t=>{this.actionResult=t})}closeDialog(){this.dialogRef.close()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(i.Qv))},o.\u0275cmp=e.Xpm({type:o,selectors:[["modal-data-injection-example"]],viewQuery:function(t,a){if(1&t&&e.Gf(R,5),2&t){let l;e.iGM(l=e.CRH())&&(a.templateRef=l.first)}},decls:4,vars:0,consts:[["nxButton","",1,"nx-margin-right-xs",3,"click"],["template",""],["nxHeadline","subsection-medium",1,"nx-margin-bottom-3m"],["nxCopytext",""]],template:function(t,a){1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return a.openFromTemplate()}),e._uU(1,"open modal with injected data"),e.qZA(),e.YNc(2,F,5,1,"ng-template",null,1,e.W1O))},directives:[c.XV,p.s,s.v],styles:[""]}),o})();const B=["template"];function D(o,n){1&o&&(e.TgZ(0,"p",2),e._uU(1,"I am a modal dialog with a smaller width of 350px."),e.qZA())}let C=(()=>{class o{constructor(t){this.dialogService=t}openFromTemplate(){this.dialogService.open(this.templateRef,{showCloseIcon:!0,ariaLabel:"A modal with fixed width",width:"350px"})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(i.Qv))},o.\u0275cmp=e.Xpm({type:o,selectors:[["modal-fixed-width-example"]],viewQuery:function(t,a){if(1&t&&e.Gf(B,5),2&t){let l;e.iGM(l=e.CRH())&&(a.templateRef=l.first)}},decls:4,vars:0,consts:[["nxButton","",3,"click"],["template",""],["nxCopytext",""]],template:function(t,a){1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return a.openFromTemplate()}),e._uU(1,"open fixed width modal"),e.qZA(),e.YNc(2,D,2,0,"ng-template",null,1,e.W1O))},directives:[c.XV,s.v],styles:[""]}),o})();const k=["template"],S=["template2"];function O(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",3)(1,"h3",4),e._uU(2,"Modal from a template"),e.qZA(),e.TgZ(3,"p",5),e._uU(4,"This content is placed within the "),e.TgZ(5,"code"),e._uU(6,"nx-modal-container"),e.qZA()(),e.TgZ(7,"button",1),e.NdJ("click",function(){return e.CHM(t),e.oxw().closeTemplateDialog()}),e._uU(8,"Close Modal"),e.qZA()()}}let W=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:5,vars:0,consts:[[1,"u-text-center"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2,"Modal Dialog from a component "),e.qZA(),e.TgZ(3,"p"),e._uU(4," Any content can be included in a modal view and styled as necessary. "),e.qZA()())},encapsulation:2}),o})(),M=(()=>{class o{constructor(t){this.dialogService=t}openFromTemplate(){this.templateDialogRef=this.dialogService.open(this.templateRef,{ariaLabel:"A simple dialog"})}openFromComponent(){this.componentDialogRef=this.dialogService.open(W,{ariaLabel:"A simple dialog",showCloseIcon:!0})}closeTemplateDialog(){this.templateDialogRef.close()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(i.Qv))},o.\u0275cmp=e.Xpm({type:o,selectors:[["modal-opening-example"]],viewQuery:function(t,a){if(1&t&&(e.Gf(k,5),e.Gf(S,5)),2&t){let l;e.iGM(l=e.CRH())&&(a.templateRef=l.first),e.iGM(l=e.CRH())&&(a.templateRef2=l.first)}},decls:6,vars:0,consts:[["nxButton","",1,"nx-margin-right-xs",3,"click"],["nxButton","",3,"click"],["template",""],[1,"centered-content"],["nxHeadline","subsection-medium",1,"nx-margin-bottom-3m"],["nxCopytext","small",1,"nx-margin-bottom-2m"]],template:function(t,a){1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return a.openFromTemplate()}),e._uU(1,"open from template"),e.qZA(),e.TgZ(2,"button",1),e.NdJ("click",function(){return a.openFromComponent()}),e._uU(3,"open from component"),e.qZA(),e.YNc(4,O,9,0,"ng-template",null,2,e.W1O))},directives:[c.XV,p.s,s.v],styles:[".centered-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]}),o})();var N=m(226);const Q=["template"];function j(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",2)(1,"h3",3),e._uU(2,"Modal with configured locale direction"),e.qZA(),e.TgZ(3,"p",4),e._uU(4,"This content is placed within the "),e.TgZ(5,"code"),e._uU(6,"nx-modal-container"),e.qZA()(),e.TgZ(7,"button",0),e.NdJ("click",function(){return e.CHM(t),e.oxw().closeTemplateDialog()}),e._uU(8,"Close Modal"),e.qZA()()}}let T=(()=>{class o{constructor(t,a){this.dialogService=t,this.dir=a}openFromTemplate(){this.templateDialogRef=this.dialogService.open(this.templateRef,{ariaLabel:"Dialog with direction",direction:this.dir.value})}closeTemplateDialog(){this.templateDialogRef.close()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(i.Qv),e.Y36(N.Is))},o.\u0275cmp=e.Xpm({type:o,selectors:[["modal-with-direction-example"]],viewQuery:function(t,a){if(1&t&&e.Gf(Q,5),2&t){let l;e.iGM(l=e.CRH())&&(a.templateRef=l.first)}},decls:4,vars:0,consts:[["nxButton","",3,"click"],["template",""],[1,"centered-content"],["nxHeadline","subsection-medium",1,"nx-margin-bottom-3m"],["nxCopytext","small",1,"nx-margin-bottom-m"]],template:function(t,a){1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return a.openFromTemplate()}),e._uU(1,"Open modal with direction"),e.qZA(),e.YNc(2,j,9,0,"ng-template",null,1,e.W1O))},directives:[c.XV,p.s,s.v],styles:[".centered-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]}),o})(),Y=(()=>{class o{static components(){return{"modal-basic":x,"modal-closing":_,"modal-closing-behaviour":g,"modal-content-actions":f,"modal-data-injection":h,"modal-fixed-width":C,"modal-opening":M,"modal-with-direction":T}}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[i.$w.forRoot(),d._A,u.ZI,c.ru,s.K,p.X]]}),o})()}}]);