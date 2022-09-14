"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[7139],{7139:(h,u,c)=>{c.r(u),c.d(u,{ActionExamplesModule:()=>C});var l=c(9808),s=c(325),a=c(5955),r=c(9209),p=c(2825),t=c(5e3);function A(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"button",1),t.NdJ("click",function(){const m=t.CHM(n).$implicit;return t.oxw().onSelect(m)}),t._UZ(1,"nx-icon",2),t._uU(2),t.qZA()}if(2&o){const n=e.$implicit,i=t.oxw();t.Q6J("selected",n===i.selectedAction),t.xp6(1),t.Q6J("name",n.icon),t.xp6(1),t.hij(" ",n.label,"\n")}}let x=(()=>{class o{constructor(){this.actions=[{icon:"file-text",label:"All Files"},{icon:"calendar",label:"Calendar"},{icon:"mail-o",label:"Email"},{icon:"user-o",label:"My Profile"},{icon:"file",label:"Recent Downloads"}]}ngOnInit(){this.selectedAction=this.actions[1]}onSelect(n){this.selectedAction=n}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["action-example"]],decls:1,vars:1,consts:[["nxAction","",3,"selected","click",4,"ngFor","ngForOf"],["nxAction","",3,"selected","click"],["nxActionIcon","",3,"name"]],template:function(n,i){1&n&&t.YNc(0,A,3,3,"button",0),2&n&&t.Q6J("ngForOf",i.actions)},directives:[l.sg,a.Ng,r.O8,a.DQ],styles:[""]}),o})();function b(o,e){if(1&o&&(t.TgZ(0,"nx-indicator",5),t._uU(1),t.qZA()),2&o){const n=t.oxw().$implicit,i=t.oxw();t.uIk("aria-label",i.getAriaLabel(n.notificationCount)),t.xp6(1),t.Oqu(i.getIndicatorText(n.notificationCount))}}function _(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"button",1),t.NdJ("click",function(){const m=t.CHM(n).$implicit;return t.oxw().onSelect(m)}),t._UZ(1,"nx-icon",2),t.TgZ(2,"span",3),t._uU(3),t.YNc(4,b,2,2,"nx-indicator",4),t.qZA()()}if(2&o){const n=e.$implicit,i=t.oxw();t.Q6J("selected",n===i.selectedAction),t.xp6(1),t.Q6J("name",n.icon),t.xp6(2),t.hij(" ",n.label," "),t.xp6(1),t.Q6J("ngIf",n.notification)}}let d=(()=>{class o{constructor(){this.actions=[{icon:"file-text",label:"All Files",notification:!1},{icon:"calendar",label:"Calendar",notification:!0},{icon:"mail-o",label:"Email",notification:!0,notificationCount:105},{icon:"user-o",label:"My Profile",notification:!0,notificationCount:4},{icon:"file",label:"Recent Downloads"}],this.selectedAction=this.actions[0]}onSelect(n){this.selectedAction=n}getIndicatorText(n){return n?n>99?"99+":n:""}getAriaLabel(n){return n?`${n} new notifications available`:"new notifications available"}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["action-indicator-example"]],decls:1,vars:1,consts:[["nxAction","",3,"selected","click",4,"ngFor","ngForOf"],["nxAction","",3,"selected","click"],["nxActionIcon","",3,"name"],[1,"label-content"],["position","after-text",4,"ngIf"],["position","after-text"]],template:function(n,i){1&n&&t.YNc(0,_,5,4,"button",0),2&n&&t.Q6J("ngForOf",i.actions)},directives:[l.sg,a.Ng,r.O8,a.DQ,l.O5,p.I],styles:[""]}),o})();function g(o,e){if(1&o&&(t.TgZ(0,"button",1),t._UZ(1,"nx-icon",2),t._uU(2),t.qZA()),2&o){const n=e.$implicit;t.Q6J("queryParams",n.query),t.xp6(1),t.Q6J("name",n.icon),t.xp6(1),t.hij(" ",n.label,"\n")}}let f=(()=>{class o{constructor(){this.actions=[{icon:"file-text",label:"All Files",query:{a:1}},{icon:"calendar",label:"Calendar",query:{a:2}},{icon:"mail-o",label:"Email",query:{a:3}},{icon:"user-o",label:"My Profile",query:{a:4}},{icon:"file",label:"Recent Downloads",query:{a:5}}]}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["action-with-router-example"]],decls:1,vars:1,consts:[["nxAction","","routerLink","./","routerLinkActive","is-selected",3,"queryParams",4,"ngFor","ngForOf"],["nxAction","","routerLink","./","routerLinkActive","is-selected",3,"queryParams"],["nxActionIcon","",3,"name"]],template:function(n,i){1&n&&t.YNc(0,g,3,3,"button",0),2&n&&t.Q6J("ngForOf",i.actions)},directives:[l.sg,a.Ng,s.rH,s.Od,r.O8,a.DQ],styles:[""]}),o})(),C=(()=>{class o{static components(){return{action:x,"action-with-router":f,"action-indicator":d}}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[a.g3,s.Bz,r.cf,p.e,l.ez]]}),o})()}}]);