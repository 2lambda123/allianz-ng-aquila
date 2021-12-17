"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[367],{367:(h,p,a)=>{a.r(p),a.d(p,{ContextExamplesModule:()=>w});var Z=a(6201),C=a(5776),d=a(6656),g=a(6931),M=a(3527),t=a(3668),r=a(8391),i=a(197),l=a(8665),c=a(9208),m=a(2823);let T=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["context-menu-basic-example"]],decls:10,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(e,x){if(1&e&&(t.TgZ(0,"nx-context-menu",null,0),t.TgZ(2,"button",1),t._uU(3,"Settings"),t.qZA(),t.TgZ(4,"button",1),t._uU(5,"Download"),t.qZA(),t.TgZ(6,"button",1),t._uU(7,"Help"),t.qZA(),t.qZA(),t.TgZ(8,"button",2),t._UZ(9,"nx-icon",3),t.qZA()),2&e){const u=t.MAs(1);t.xp6(8),t.Q6J("nxContextMenuTriggerFor",u)}},directives:[r.U,i.J,l.p,c.GU,m.O],styles:[""]}),n})();var _=a(2591),F=a(3840),O=a(6259),D=a(8774),I=a(6019),S=a(2577),J=a(2788);const P=function(n){return{documents:n}};function B(n,o){if(1&n&&(t.TgZ(0,"button",8),t._UZ(1,"nx-icon",9),t._uU(2),t.qZA(),t.TgZ(3,"button",8),t._UZ(4,"nx-icon",10),t._uU(5," Bookmark "),t.qZA(),t.TgZ(6,"button",8),t._UZ(7,"nx-icon",11),t._uU(8," Edit "),t.qZA(),t.TgZ(9,"button",12),t._UZ(10,"nx-icon",13),t._uU(11," Documents "),t.qZA()),2&n){const e=o.contract;t.oxw();const x=t.MAs(4);t.xp6(2),t.hij(" User: ",e.user," "),t.xp6(7),t.Q6J("nxContextMenuTriggerFor",x)("nxContextMenuTriggerData",t.VKq(3,P,e.documents))}}function Q(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"button",8),t._UZ(2,"nx-icon",15),t._uU(3),t.qZA(),t.BQk()),2&n){const e=o.$implicit;t.xp6(3),t.hij(" ",e," ")}}function L(n,o){1&n&&t.YNc(0,Q,4,1,"ng-container",14),2&n&&t.Q6J("ngForOf",o.documents)}const H=function(n){return{contract:n}};function G(n,o){if(1&n&&(t.TgZ(0,"tr",4),t.TgZ(1,"td",16),t._uU(2),t.qZA(),t.TgZ(3,"td",16),t.TgZ(4,"nx-badge",17),t._uU(5),t.qZA(),t.qZA(),t.TgZ(6,"td",16),t.TgZ(7,"button",18),t._UZ(8,"nx-icon",19),t.qZA(),t.qZA(),t.qZA()),2&n){const e=o.$implicit;t.oxw();const x=t.MAs(1);t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Q6J("type",e.status),t.xp6(1),t.Oqu(e.status),t.xp6(2),t.Q6J("nxContextMenuTriggerFor",x)("nxContextMenuTriggerData",t.VKq(5,H,e))}}let A=(()=>{class n{constructor(){this.contracts=[{id:"23412",user:"Anna Schuster",status:"active",documents:["Contract 01/04/2017"]},{id:"09090",user:"Max Pecu",status:"active",documents:["Contract 11/07/2015"]},{id:"45234",user:"Sefan Maier",status:"active",documents:["Contract 01/01/2017"]}]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["context-menu-data-example"]],decls:16,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuContent",""],["documentsSubmenu","nxContextMenu"],["nxTable","","condensed",""],["nxTableRow",""],["nxHeaderCell",""],["nxHeaderCell","","aria-label","Context menu"],["nxTableRow","",4,"ngFor","ngForOf"],["nxContextMenuItem","","type","button"],["aria-hidden","true","name","user-o"],["aria-hidden","true","name","bookmark-o"],["aria-hidden","true","name","pen"],["nxContextMenuItem","","type","button",3,"nxContextMenuTriggerFor","nxContextMenuTriggerData"],["aria-hidden","true","name","file"],[4,"ngFor","ngForOf"],["aria-hidden","true","name","pdf"],["nxTableCell",""],[3,"type"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor","nxContextMenuTriggerData"],["aria-hidden","true","name","ellipsis-h"]],template:function(e,x){1&e&&(t.TgZ(0,"nx-context-menu",null,0),t.YNc(2,B,12,5,"ng-template",1),t.qZA(),t.TgZ(3,"nx-context-menu",null,2),t.YNc(5,L,1,1,"ng-template",1),t.qZA(),t.TgZ(6,"table",3),t.TgZ(7,"thead"),t.TgZ(8,"tr",4),t.TgZ(9,"th",5),t._uU(10,"Contract Id"),t.qZA(),t.TgZ(11,"th",5),t._uU(12,"Status"),t.qZA(),t._UZ(13,"th",6),t.qZA(),t.qZA(),t.TgZ(14,"tbody"),t.YNc(15,G,9,7,"tr",7),t.qZA(),t.qZA()),2&e&&(t.xp6(15),t.Q6J("ngForOf",x.contracts))},directives:[r.U,_.L,F.U,O.a,D.Q,I.sg,i.J,m.O,c.GU,S.F,J.Q,l.p],styles:["[_nghost-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:0}td[_ngcontent-%COMP%]:last-child{text-align:right}"]}),n})(),U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["context-menu-disabled-example"]],decls:18,vars:2,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["nxContextMenuItem","","disabled","","type","button"],["nxContextMenuItem","","disabled","","type","button",3,"nxContextMenuTriggerFor"],["archiveSubMenu","nxContextMenu"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(e,x){if(1&e&&(t.TgZ(0,"nx-context-menu",null,0),t.TgZ(2,"button",1),t._uU(3,"Settings"),t.qZA(),t.TgZ(4,"button",2),t._uU(5,"Download"),t.qZA(),t.TgZ(6,"button",3),t._uU(7," Move "),t.qZA(),t.TgZ(8,"button",1),t._uU(9,"Help"),t.qZA(),t.qZA(),t.TgZ(10,"nx-context-menu",null,4),t.TgZ(12,"button",1),t._uU(13,"To Folder"),t.qZA(),t.TgZ(14,"button",1),t._uU(15,"Archive"),t.qZA(),t.qZA(),t.TgZ(16,"button",5),t._UZ(17,"nx-icon",6),t.qZA()),2&e){const u=t.MAs(1),s=t.MAs(11);t.xp6(6),t.Q6J("nxContextMenuTriggerFor",s),t.xp6(10),t.Q6J("nxContextMenuTriggerFor",u)}},directives:[r.U,i.J,c.GU,l.p,m.O],styles:[""]}),n})(),b=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["context-menu-icons-example"]],decls:13,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["aria-hidden","true","name","setting"],["aria-hidden","true","name","download"],["aria-hidden","true","name","info-circle-o"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(e,x){if(1&e&&(t.TgZ(0,"nx-context-menu",null,0),t.TgZ(2,"button",1),t._UZ(3,"nx-icon",2),t._uU(4," Settings "),t.qZA(),t.TgZ(5,"button",1),t._UZ(6,"nx-icon",3),t._uU(7," Download "),t.qZA(),t.TgZ(8,"button",1),t._UZ(9,"nx-icon",4),t._uU(10," Help "),t.qZA(),t.qZA(),t.TgZ(11,"button",5),t._UZ(12,"nx-icon",6),t.qZA()),2&e){const u=t.MAs(1);t.xp6(11),t.Q6J("nxContextMenuTriggerFor",u)}},directives:[r.U,i.J,m.O,l.p,c.GU],styles:[""]}),n})();function X(n,o){1&n&&(t.TgZ(0,"button",4),t._uU(1,"Settings"),t.qZA(),t.TgZ(2,"button",4),t._uU(3,"Download"),t.qZA(),t.TgZ(4,"button",4),t._uU(5,"Help"),t.qZA())}let y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["context-menu-lazy-example"]],decls:5,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuContent",""],["nxIconButton","tertiary small","type","button","aria-label","Open menu",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"],["nxContextMenuItem","","type","button"]],template:function(e,x){if(1&e&&(t.TgZ(0,"nx-context-menu",null,0),t.YNc(2,X,6,0,"ng-template",1),t.qZA(),t.TgZ(3,"button",2),t._UZ(4,"nx-icon",3),t.qZA()),2&e){const u=t.MAs(1);t.xp6(3),t.Q6J("nxContextMenuTriggerFor",u)}},directives:[r.U,_.L,l.p,c.GU,m.O,i.J],styles:[""]}),n})(),f=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["context-menu-nested-example"]],decls:35,vars:4,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["aria-hidden","true","name","setting"],["nxContextMenuItem","","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","download"],["aria-hidden","true","name","info-circle-o"],["subMenu","nxContextMenu"],["helpSubMenu","nxContextMenu"],["qualitySubMenu","nxContextMenu"],["nxIconButton","tertiary small","type","button",3,"nxContextMenuTriggerFor"],["name","ellipsis-h"]],template:function(e,x){if(1&e&&(t.TgZ(0,"nx-context-menu",null,0),t.TgZ(2,"button",1),t._UZ(3,"nx-icon",2),t._uU(4," Settings "),t.qZA(),t.TgZ(5,"button",3),t._UZ(6,"nx-icon",4),t._uU(7," Download "),t.qZA(),t.TgZ(8,"button",3),t._UZ(9,"nx-icon",5),t._uU(10," Help "),t.qZA(),t.qZA(),t.TgZ(11,"nx-context-menu",null,6),t.TgZ(13,"button",1),t._uU(14,"pdf"),t.qZA(),t.TgZ(15,"button",3),t._uU(16,"jpg"),t.qZA(),t.qZA(),t.TgZ(17,"nx-context-menu",null,7),t.TgZ(19,"button",1),t._uU(20,"FAQ"),t.qZA(),t.TgZ(21,"button",1),t._uU(22,"Call Support"),t.qZA(),t.qZA(),t.TgZ(23,"nx-context-menu",null,8),t.TgZ(25,"button",1),t._uU(26,"low quality"),t.qZA(),t.TgZ(27,"button",1),t._uU(28,"medium quality"),t.qZA(),t.TgZ(29,"button",1),t._uU(30,"high quality"),t.qZA(),t.TgZ(31,"button",1),t._uU(32,"highest quality"),t.qZA(),t.qZA(),t.TgZ(33,"button",9),t._UZ(34,"nx-icon",10),t.qZA()),2&e){const u=t.MAs(1),s=t.MAs(12),z=t.MAs(18),W=t.MAs(24);t.xp6(5),t.Q6J("nxContextMenuTriggerFor",s),t.xp6(3),t.Q6J("nxContextMenuTriggerFor",z),t.xp6(7),t.Q6J("nxContextMenuTriggerFor",W),t.xp6(18),t.Q6J("nxContextMenuTriggerFor",u)}},directives:[r.U,i.J,m.O,c.GU,l.p],styles:[""]}),n})();var K=a(2466);let E=(()=>{class n{openContextMenu(e){e.preventDefault(),this.trigger.toggleContextMenu()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["context-menu-programmatic-example"]],viewQuery:function(e,x){if(1&e&&t.Gf(g.GU,5),2&e){let u;t.iGM(u=t.CRH())&&(x.trigger=u.first)}},hostBindings:function(e,x){1&e&&t.NdJ("keydown.control.p",function(s){return x.openContextMenu(s)},!1,t.evT)},decls:15,vars:1,consts:[["nxCopytext","",1,"nx-margin-bottom-xs"],["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(e,x){if(1&e&&(t.TgZ(0,"p",0),t._uU(1," Press "),t.TgZ(2,"code"),t._uU(3,"control+p"),t.qZA(),t._uU(4," to open the context menu.\n"),t.qZA(),t.TgZ(5,"nx-context-menu",null,1),t.TgZ(7,"button",2),t._uU(8,"Settings"),t.qZA(),t.TgZ(9,"button",2),t._uU(10,"Download"),t.qZA(),t.TgZ(11,"button",2),t._uU(12,"Help"),t.qZA(),t.qZA(),t.TgZ(13,"button",3),t._UZ(14,"nx-icon",4),t.qZA()),2&e){const u=t.MAs(6);t.xp6(13),t.Q6J("nxContextMenuTriggerFor",u)}},directives:[K.v,r.U,i.J,l.p,c.GU,m.O],styles:[""]}),n})(),v=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["context-menu-scroll-strategy-example"]],decls:10,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["nxIconButton","tertiary small","scrollStrategy","close","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(e,x){if(1&e&&(t.TgZ(0,"nx-context-menu",null,0),t.TgZ(2,"button",1),t._uU(3,"Settings"),t.qZA(),t.TgZ(4,"button",1),t._uU(5,"Download"),t.qZA(),t.TgZ(6,"button",1),t._uU(7,"Help"),t.qZA(),t.qZA(),t.TgZ(8,"button",2),t._UZ(9,"nx-icon",3),t.qZA()),2&e){const u=t.MAs(1);t.xp6(8),t.Q6J("nxContextMenuTriggerFor",u)}},directives:[r.U,i.J,l.p,c.GU,m.O],styles:[""]}),n})();var N=a(4797),R=a(370);let q=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["context-menu-indicator-example"]],decls:18,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],[1,"button-content"],["position","over-text with-overlap","aria-label","new notifications available'"],["position","over-text with-overlap","aria-label","1 new notification available"],["position","over-text with-overlap","aria-label","more than 99 notifications available"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(e,x){if(1&e&&(t.TgZ(0,"nx-context-menu",null,0),t.TgZ(2,"button",1),t.TgZ(3,"span",2),t._uU(4," Settings"),t._UZ(5,"nx-indicator",3),t.qZA(),t.qZA(),t.TgZ(6,"button",1),t.TgZ(7,"span",2),t._uU(8," Downloads"),t.TgZ(9,"nx-indicator",4),t._uU(10,"1"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"button",1),t.TgZ(12,"span",2),t._uU(13," Help"),t.TgZ(14,"nx-indicator",5),t._uU(15,"99+"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"button",6),t._UZ(17,"nx-icon",7),t.qZA()),2&e){const u=t.MAs(1);t.xp6(16),t.Q6J("nxContextMenuTriggerFor",u)}},directives:[r.U,i.J,R.I,l.p,c.GU,m.O],styles:[".button-content[_ngcontent-%COMP%]{position:relative}"]}),n})(),w=(()=>{class n{static components(){return{"context-menu-basic":T,"context-menu-data":A,"context-menu-disabled":U,"context-menu-icons":b,"context-menu-lazy":y,"context-menu-nested":f,"context-menu-programmatic":E,"context-menu-scroll-strategy":v,"context-menu-indicator":q}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.d$,Z.cf,C.m,d.e,M.Fz,N.f]]}),n})()},4797:(h,p,a)=>{a.d(p,{f:()=>i});var Z=a(9675),C=a(5440),d=a(508),g=a(7372),M=a(6019),t=a(9133),r=a(3668);let i=(()=>{class l{}return l.\u0275fac=function(m){return new(m||l)},l.\u0275mod=r.oAB({type:l}),l.\u0275inj=r.cJS({imports:[[],M.ez,t.u5,t.UX,g.ru,d.X,C.K,Z.TW]}),l})()}}]);