"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[8736],{8736:(Y,E,r)=>{r.r(E),r.d(E,{ContextExamplesModule:()=>U});var A=r(3977),J=r(5846),O=r(525),v=r(3099),o=r(2582),i=r(9195),S=r(4019),y=r(8616),D=r(9508),n=r(4650),l=r(690);class c{}c.\u0275fac=function(e){return new(e||c)},c.\u0275cmp=n.Xpm({type:c,selectors:[["context-menu-basic-example"]],decls:10,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(e,a){if(1&e&&(n.TgZ(0,"nx-context-menu",null,0)(2,"button",1),n._uU(3,"Settings"),n.qZA(),n.TgZ(4,"button",1),n._uU(5,"Download"),n.qZA(),n.TgZ(6,"button",1),n._uU(7,"Help"),n.qZA()(),n.TgZ(8,"button",2),n._UZ(9,"nx-icon",3),n.qZA()),2&e){const u=n.MAs(1);n.xp6(8),n.Q6J("nxContextMenuTriggerFor",u)}},dependencies:[o.UJ,o.JA,o.GU,i.O8,l.p$]});var w=r(1486);class s{}s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=n.Xpm({type:s,selectors:[["context-menu-cursor-mode-example"]],decls:14,vars:2,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["nxContextMenuTriggerMode","cursor",3,"nxContextMenuTriggerFor"],[1,"card-content"],["nxCopytext",""],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(e,a){if(1&e&&(n.TgZ(0,"nx-context-menu",null,0)(2,"button",1),n._uU(3,"Settings"),n.qZA(),n.TgZ(4,"button",1),n._uU(5,"Download"),n.qZA(),n.TgZ(6,"button",1),n._uU(7,"Help"),n.qZA()(),n.TgZ(8,"nx-card",2)(9,"div",3)(10,"p",4),n._uU(11,"Right click card to open context menu."),n.qZA(),n.TgZ(12,"button",5),n._UZ(13,"nx-icon",6),n.qZA()()()),2&e){const u=n.MAs(1);n.xp6(8),n.Q6J("nxContextMenuTriggerFor",u),n.xp6(4),n.Q6J("nxContextMenuTriggerFor",u)}},dependencies:[o.UJ,o.JA,o.GU,i.O8,O.U4,l.p$,w.v],styles:["nx-card[_ngcontent-%COMP%]{display:block}.card-content[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px}"]});var h=r(6895);const Q=function(t){return{documents:t}};function P(t,e){if(1&t&&(n.TgZ(0,"button",8),n._UZ(1,"nx-icon",9),n._uU(2),n.qZA(),n.TgZ(3,"button",8),n._UZ(4,"nx-icon",10),n._uU(5," Bookmark "),n.qZA(),n.TgZ(6,"button",8),n._UZ(7,"nx-icon",11),n._uU(8," Edit "),n.qZA(),n.TgZ(9,"button",12),n._UZ(10,"nx-icon",13),n._uU(11," Documents "),n.qZA()),2&t){const a=e.contract;n.oxw();const u=n.MAs(4);n.xp6(2),n.hij(" User: ",a.user," "),n.xp6(7),n.Q6J("nxContextMenuTriggerFor",u)("nxContextMenuTriggerData",n.VKq(3,Q,a.documents))}}function B(t,e){if(1&t&&(n.ynx(0),n.TgZ(1,"button",8),n._UZ(2,"nx-icon",15),n._uU(3),n.qZA(),n.BQk()),2&t){const a=e.$implicit;n.xp6(3),n.hij(" ",a," ")}}function k(t,e){1&t&&n.YNc(0,B,4,1,"ng-container",14),2&t&&n.Q6J("ngForOf",e.documents)}const $=function(t){return{contract:t}};function G(t,e){if(1&t&&(n.TgZ(0,"tr",4)(1,"td",16),n._uU(2),n.qZA(),n.TgZ(3,"td",16)(4,"nx-badge",17),n._uU(5),n.qZA()(),n.TgZ(6,"td",16)(7,"button",18),n._UZ(8,"nx-icon",19),n.qZA()()()),2&t){const a=e.$implicit;n.oxw();const u=n.MAs(1);n.xp6(2),n.Oqu(a.id),n.xp6(2),n.Q6J("type",a.status),n.xp6(1),n.Oqu(a.status),n.xp6(2),n.Q6J("nxContextMenuTriggerFor",u)("nxContextMenuTriggerData",n.VKq(5,$,a))}}class p{constructor(){this.contracts=[{id:"23412",user:"Anna Schuster",status:"active",documents:["Contract 01/04/2017"]},{id:"09090",user:"Max Pecu",status:"active",documents:["Contract 11/07/2015"]},{id:"45234",user:"Sefan Maier",status:"active",documents:["Contract 01/01/2017"]}]}}p.\u0275fac=function(e){return new(e||p)},p.\u0275cmp=n.Xpm({type:p,selectors:[["context-menu-data-example"]],decls:16,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuContent",""],["documentsSubmenu","nxContextMenu"],["nxTable","","condensed",""],["nxTableRow",""],["nxHeaderCell",""],["nxHeaderCell","","aria-label","Context menu"],["nxTableRow","",4,"ngFor","ngForOf"],["nxContextMenuItem","","type","button"],["aria-hidden","true","name","user-o"],["aria-hidden","true","name","bookmark-o"],["aria-hidden","true","name","pen"],["nxContextMenuItem","","type","button",3,"nxContextMenuTriggerFor","nxContextMenuTriggerData"],["aria-hidden","true","name","file"],[4,"ngFor","ngForOf"],["aria-hidden","true","name","pdf"],["nxTableCell",""],[3,"type"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor","nxContextMenuTriggerData"],["aria-hidden","true","name","ellipsis-h"]],template:function(e,a){1&e&&(n.TgZ(0,"nx-context-menu",null,0),n.YNc(2,P,12,5,"ng-template",1),n.qZA(),n.TgZ(3,"nx-context-menu",null,2),n.YNc(5,k,1,1,"ng-template",1),n.qZA(),n.TgZ(6,"table",3)(7,"thead")(8,"tr",4)(9,"th",5),n._uU(10,"Contract Id"),n.qZA(),n.TgZ(11,"th",5),n._uU(12,"Status"),n.qZA(),n._UZ(13,"th",6),n.qZA()(),n.TgZ(14,"tbody"),n.YNc(15,G,9,7,"tr",7),n.qZA()()),2&e&&(n.xp6(15),n.Q6J("ngForOf",a.contracts))},dependencies:[o.UJ,o.LF,o.JA,o.GU,i.O8,J.Q,y.Qg,y.UA,y.F$,y.ax,h.sg,l.p$],styles:["[_nghost-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:0}td[_ngcontent-%COMP%]:last-child{text-align:right}"]});class m{}m.\u0275fac=function(e){return new(e||m)},m.\u0275cmp=n.Xpm({type:m,selectors:[["context-menu-disabled-example"]],decls:18,vars:2,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["nxContextMenuItem","","disabled","","type","button"],["nxContextMenuItem","","disabled","","type","button",3,"nxContextMenuTriggerFor"],["archiveSubMenu","nxContextMenu"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(e,a){if(1&e&&(n.TgZ(0,"nx-context-menu",null,0)(2,"button",1),n._uU(3,"Settings"),n.qZA(),n.TgZ(4,"button",2),n._uU(5,"Download"),n.qZA(),n.TgZ(6,"button",3),n._uU(7," Move "),n.qZA(),n.TgZ(8,"button",1),n._uU(9,"Help"),n.qZA()(),n.TgZ(10,"nx-context-menu",null,4)(12,"button",1),n._uU(13,"To Folder"),n.qZA(),n.TgZ(14,"button",1),n._uU(15,"Archive"),n.qZA()(),n.TgZ(16,"button",5),n._UZ(17,"nx-icon",6),n.qZA()),2&e){const u=n.MAs(1),x=n.MAs(11);n.xp6(6),n.Q6J("nxContextMenuTriggerFor",x),n.xp6(10),n.Q6J("nxContextMenuTriggerFor",u)}},dependencies:[o.UJ,o.JA,o.GU,i.O8,l.p$]});class g{}g.\u0275fac=function(e){return new(e||g)},g.\u0275cmp=n.Xpm({type:g,selectors:[["context-menu-icons-example"]],decls:13,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["aria-hidden","true","name","setting"],["aria-hidden","true","name","download"],["aria-hidden","true","name","info-circle-o"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(e,a){if(1&e&&(n.TgZ(0,"nx-context-menu",null,0)(2,"button",1),n._UZ(3,"nx-icon",2),n._uU(4," Settings "),n.qZA(),n.TgZ(5,"button",1),n._UZ(6,"nx-icon",3),n._uU(7," Download "),n.qZA(),n.TgZ(8,"button",1),n._UZ(9,"nx-icon",4),n._uU(10," Help "),n.qZA()(),n.TgZ(11,"button",5),n._UZ(12,"nx-icon",6),n.qZA()),2&e){const u=n.MAs(1);n.xp6(11),n.Q6J("nxContextMenuTriggerFor",u)}},dependencies:[o.UJ,o.JA,o.GU,i.O8,l.p$]});class d{}function H(t,e){1&t&&(n.TgZ(0,"button",4),n._uU(1,"Settings"),n.qZA(),n.TgZ(2,"button",4),n._uU(3,"Download"),n.qZA(),n.TgZ(4,"button",4),n._uU(5,"Help"),n.qZA())}d.\u0275fac=function(e){return new(e||d)},d.\u0275cmp=n.Xpm({type:d,selectors:[["context-menu-indicator-example"]],decls:18,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],[1,"button-content"],["position","over-text with-overlap","aria-label","new notifications available'"],["position","over-text with-overlap","aria-label","1 new notification available"],["position","over-text with-overlap","aria-label","more than 99 notifications available"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(e,a){if(1&e&&(n.TgZ(0,"nx-context-menu",null,0)(2,"button",1)(3,"span",2),n._uU(4," Settings"),n._UZ(5,"nx-indicator",3),n.qZA()(),n.TgZ(6,"button",1)(7,"span",2),n._uU(8," Downloads"),n.TgZ(9,"nx-indicator",4),n._uU(10,"1"),n.qZA()()(),n.TgZ(11,"button",1)(12,"span",2),n._uU(13," Help"),n.TgZ(14,"nx-indicator",5),n._uU(15,"99+"),n.qZA()()()(),n.TgZ(16,"button",6),n._UZ(17,"nx-icon",7),n.qZA()),2&e){const u=n.MAs(1);n.xp6(16),n.Q6J("nxContextMenuTriggerFor",u)}},dependencies:[o.UJ,o.JA,o.GU,i.O8,S.I,l.p$],styles:[".button-content[_ngcontent-%COMP%]{position:relative}"]});class C{}C.\u0275fac=function(e){return new(e||C)},C.\u0275cmp=n.Xpm({type:C,selectors:[["context-menu-lazy-example"]],decls:5,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuContent",""],["nxIconButton","tertiary small","type","button","aria-label","Open menu",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"],["nxContextMenuItem","","type","button"]],template:function(e,a){if(1&e&&(n.TgZ(0,"nx-context-menu",null,0),n.YNc(2,H,6,0,"ng-template",1),n.qZA(),n.TgZ(3,"button",2),n._UZ(4,"nx-icon",3),n.qZA()),2&e){const u=n.MAs(1);n.xp6(3),n.Q6J("nxContextMenuTriggerFor",u)}},dependencies:[o.UJ,o.LF,o.JA,o.GU,i.O8,l.p$]});class M{}M.\u0275fac=function(e){return new(e||M)},M.\u0275cmp=n.Xpm({type:M,selectors:[["context-menu-nested-example"]],decls:35,vars:4,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["aria-hidden","true","name","setting"],["nxContextMenuItem","","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","download"],["aria-hidden","true","name","info-circle-o"],["subMenu","nxContextMenu"],["helpSubMenu","nxContextMenu"],["qualitySubMenu","nxContextMenu"],["nxIconButton","tertiary small","type","button",3,"nxContextMenuTriggerFor"],["name","ellipsis-h"]],template:function(e,a){if(1&e&&(n.TgZ(0,"nx-context-menu",null,0)(2,"button",1),n._UZ(3,"nx-icon",2),n._uU(4," Settings "),n.qZA(),n.TgZ(5,"button",3),n._UZ(6,"nx-icon",4),n._uU(7," Download "),n.qZA(),n.TgZ(8,"button",3),n._UZ(9,"nx-icon",5),n._uU(10," Help "),n.qZA()(),n.TgZ(11,"nx-context-menu",null,6)(13,"button",1),n._uU(14,"pdf"),n.qZA(),n.TgZ(15,"button",3),n._uU(16," jpg "),n.qZA()(),n.TgZ(17,"nx-context-menu",null,7)(19,"button",1),n._uU(20,"FAQ"),n.qZA(),n.TgZ(21,"button",1),n._uU(22,"Call Support"),n.qZA()(),n.TgZ(23,"nx-context-menu",null,8)(25,"button",1),n._uU(26,"low quality"),n.qZA(),n.TgZ(27,"button",1),n._uU(28,"medium quality"),n.qZA(),n.TgZ(29,"button",1),n._uU(30,"high quality"),n.qZA(),n.TgZ(31,"button",1),n._uU(32,"highest quality"),n.qZA()(),n.TgZ(33,"button",9),n._UZ(34,"nx-icon",10),n.qZA()),2&e){const u=n.MAs(1),x=n.MAs(12),q=n.MAs(18),F=n.MAs(24);n.xp6(5),n.Q6J("nxContextMenuTriggerFor",x),n.xp6(3),n.Q6J("nxContextMenuTriggerFor",q),n.xp6(7),n.Q6J("nxContextMenuTriggerFor",F),n.xp6(18),n.Q6J("nxContextMenuTriggerFor",u)}},dependencies:[o.UJ,o.JA,o.GU,i.O8,l.p$]});class Z{openContextMenu(e){e.preventDefault(),this.trigger.toggleContextMenu()}}Z.\u0275fac=function(e){return new(e||Z)},Z.\u0275cmp=n.Xpm({type:Z,selectors:[["context-menu-programmatic-example"]],viewQuery:function(e,a){if(1&e&&n.Gf(o.GU,5),2&e){let u;n.iGM(u=n.CRH())&&(a.trigger=u.first)}},hostBindings:function(e,a){1&e&&n.NdJ("keydown.control.p",function(x){return a.openContextMenu(x)},!1,n.evT)},decls:15,vars:1,consts:[["nxCopytext","",1,"nx-margin-bottom-xs"],["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(e,a){if(1&e&&(n.TgZ(0,"p",0),n._uU(1," Press "),n.TgZ(2,"code"),n._uU(3,"control+p"),n.qZA(),n._uU(4," to open the context menu.\n"),n.qZA(),n.TgZ(5,"nx-context-menu",null,1)(7,"button",2),n._uU(8,"Settings"),n.qZA(),n.TgZ(9,"button",2),n._uU(10,"Download"),n.qZA(),n.TgZ(11,"button",2),n._uU(12,"Help"),n.qZA()(),n.TgZ(13,"button",3),n._UZ(14,"nx-icon",4),n.qZA()),2&e){const u=n.MAs(6);n.xp6(13),n.Q6J("nxContextMenuTriggerFor",u)}},dependencies:[o.UJ,o.JA,o.GU,i.O8,l.p$,w.v]});class _{}_.\u0275fac=function(e){return new(e||_)},_.\u0275cmp=n.Xpm({type:_,selectors:[["context-menu-scroll-strategy-example"]],decls:10,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["nxIconButton","tertiary small","scrollStrategy","close","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(e,a){if(1&e&&(n.TgZ(0,"nx-context-menu",null,0)(2,"button",1),n._uU(3,"Settings"),n.qZA(),n.TgZ(4,"button",1),n._uU(5,"Download"),n.qZA(),n.TgZ(6,"button",1),n._uU(7,"Help"),n.qZA()(),n.TgZ(8,"button",2),n._UZ(9,"nx-icon",3),n.qZA()),2&e){const u=n.MAs(1);n.xp6(8),n.Q6J("nxContextMenuTriggerFor",u)}},dependencies:[o.UJ,o.JA,o.GU,i.O8,l.p$]});var L=r(8184);class b{}b.\u0275fac=function(e){return new(e||b)},b.\u0275cmp=n.Xpm({type:b,selectors:[["context-menu-scroll-strategy-provider-example"]],features:[n._Bn([{provide:o.RB,useFactory:function z(t){return()=>t.scrollStrategies.close({threshold:100})},deps:[L.aV]}])],decls:10,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(e,a){if(1&e&&(n.TgZ(0,"nx-context-menu",null,0)(2,"button",1),n._uU(3,"Settings"),n.qZA(),n.TgZ(4,"button",1),n._uU(5,"Download"),n.qZA(),n.TgZ(6,"button",1),n._uU(7,"Help"),n.qZA()(),n.TgZ(8,"button",2),n._UZ(9,"nx-icon",3),n.qZA()),2&e){const u=n.MAs(1);n.xp6(8),n.Q6J("nxContextMenuTriggerFor",u)}},dependencies:[o.UJ,o.JA,o.GU,i.O8,l.p$]});var I=r(4006);function X(t,e){if(1&t&&(n.TgZ(0,"div",6),n._UZ(1,"img",7),n.TgZ(2,"nx-checkbox",8),n._uU(3),n.qZA()()),2&t){const a=e.$implicit;n.xp6(2),n.Q6J("value",a.value),n.xp6(1),n.Oqu(a.label)}}class T{constructor(){this.options=[{label:"Front window",value:"front"},{label:"Driver Window",value:"driver"},{label:"Rear Window",value:"rear"}],this.selected=["driver"]}drop(e){(0,A.bA)(this.options,e.previousIndex,e.currentIndex)}}function N(t,e){1&t&&n._UZ(0,"nx-icon",6)}function j(t,e){if(1&t){const a=n.EpF();n.TgZ(0,"button",4),n.NdJ("click",function(){const q=n.CHM(a).$implicit,F=n.oxw();return n.KtG(F.selectedLanguage=q.value)}),n.YNc(1,N,1,0,"nx-icon",5),n._uU(2),n.qZA()}if(2&t){const a=e.$implicit,u=n.oxw();n.xp6(1),n.Q6J("ngIf",u.selectedLanguage===a.value),n.xp6(1),n.hij(" ",a.label," ")}}T.\u0275fac=function(e){return new(e||T)},T.\u0275cmp=n.Xpm({type:T,selectors:[["context-menu-selecti-multiple-example"]],decls:12,vars:4,consts:[["menu2","nxContextMenu"],["cdkDropList","",3,"ngModel","ngModelChange","cdkDropListDropped"],["nxContextMenuItem","","disableCloseOnSelect","","cdkDrag","",4,"ngFor","ngForOf"],["nxButton","tertiary small","aria-label","Open menu","type","button",1,"uppercase",3,"nxContextMenuTriggerFor"],["aria-hidden","true","size","s","name","chevron-up",1,"nx-margin-left-xs"],[1,"nx-margin-top-s"],["nxContextMenuItem","","disableCloseOnSelect","","cdkDrag",""],["height","32","aria-hidden","true","src","/assets/images/drag-handler.svg","alt","drag handler icon"],[3,"value"]],template:function(e,a){if(1&e&&(n.TgZ(0,"nx-context-menu",null,0)(2,"nx-context-menu-header"),n._uU(3,"Car damage"),n.qZA(),n.TgZ(4,"nx-checkbox-group",1),n.NdJ("ngModelChange",function(x){return a.selected=x})("cdkDropListDropped",function(x){return a.drop(x)}),n.TgZ(5,"nx-context-menu-item-wrap"),n.YNc(6,X,4,2,"div",2),n.qZA()()(),n.TgZ(7,"button",3),n._uU(8," Car damage "),n._UZ(9,"nx-icon",4),n.qZA(),n.TgZ(10,"div",5),n._uU(11),n.qZA()),2&e){const u=n.MAs(1);n.xp6(4),n.Q6J("ngModel",a.selected),n.xp6(2),n.Q6J("ngForOf",a.options),n.xp6(1),n.Q6J("nxContextMenuTriggerFor",u),n.xp6(4),n.hij("Model: ",a.selected,"")}},dependencies:[o.UJ,o.JA,o.eu,o.GU,o.Fx,i.O8,h.sg,I.JJ,I.On,l.XV,A.Wj,A.Zt,v.Wi,v.n9],styles:[".uppercase[_ngcontent-%COMP%]{text-transform:uppercase}.example-list[_ngcontent-%COMP%]{width:500px;max-width:100%;border:solid 1px #ccc;min-height:60px;display:block;background:white;border-radius:4px;overflow:hidden}.example-box[_ngcontent-%COMP%]{padding:20px 10px;border-bottom:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:white;font-size:14px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-box[_ngcontent-%COMP%]:last-child{border:none}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"]});class f{constructor(){this.selectedLanguage="de",this.options=[{label:"English",value:"en"},{label:"Spanish",value:"es"},{label:"French",value:"fr"},{label:"German",value:"de"},{label:"Chinese",value:"cn"}]}}f.\u0275fac=function(e){return new(e||f)},f.\u0275cmp=n.Xpm({type:f,selectors:[["context-menu-selection-example"]],decls:8,vars:3,consts:[["menu2","nxContextMenu"],["nxContextMenuItem","","type","button",3,"click",4,"ngFor","ngForOf"],["nxButton","primary small","aria-label","Open menu","type","button",1,"uppercase",3,"nxContextMenuTriggerFor"],["aria-hidden","true","size","s","name","globe",1,"nx-margin-right-xs"],["nxContextMenuItem","","type","button",3,"click"],["aria-hidden","true","size","s","name","check","class","icon",4,"ngIf"],["aria-hidden","true","size","s","name","check",1,"icon"]],template:function(e,a){if(1&e&&(n.TgZ(0,"nx-context-menu",null,0)(2,"nx-context-menu-header"),n._uU(3," Language "),n.qZA(),n.YNc(4,j,3,2,"button",1),n.qZA(),n.TgZ(5,"button",2),n._UZ(6,"nx-icon",3),n._uU(7),n.qZA()),2&e){const u=n.MAs(1);n.xp6(4),n.Q6J("ngForOf",a.options),n.xp6(1),n.Q6J("nxContextMenuTriggerFor",u),n.xp6(2),n.hij(" ",a.selectedLanguage,"\n")}},dependencies:[o.UJ,o.JA,o.GU,o.Fx,i.O8,h.sg,h.O5,l.XV],styles:[".uppercase[_ngcontent-%COMP%]{text-transform:uppercase}.icon[_ngcontent-%COMP%]{position:absolute;left:8px}"]});class U{static components(){return{"context-menu-basic":c,"context-menu-data":p,"context-menu-disabled":m,"context-menu-icons":g,"context-menu-lazy":C,"context-menu-nested":M,"context-menu-programmatic":Z,"context-menu-scroll-strategy":_,"context-menu-scroll-strategy-provider":b,"context-menu-indicator":d,"context-menu-cursor-mode":s,"context-menu-selection":f,"context-menu-select-multiple":T}}}U.\u0275fac=function(e){return new(e||U)},U.\u0275mod=n.oAB({type:U}),U.\u0275inj=n.cJS({imports:[o.d$,i.cf,J.m,S.e,y.Fz,O.L$,D.f,A._t,v.R0]})}}]);