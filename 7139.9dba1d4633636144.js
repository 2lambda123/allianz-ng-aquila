"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[7139],{7139:(y,p,c)=>{c.r(p),c.d(p,{ActionExamplesModule:()=>E});var l=c(6895),s=c(3689),a=c(7802),r=c(9195),x=c(4019),t=c(4650);function b(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"button",1),t.NdJ("click",function(){const m=t.CHM(n).$implicit,u=t.oxw();return t.KtG(u.onSelect(m))}),t._UZ(1,"nx-icon",2),t._uU(2),t.qZA()}if(2&o){const n=e.$implicit,i=t.oxw();t.Q6J("selected",n===i.selectedAction),t.xp6(1),t.Q6J("name",n.icon),t.xp6(1),t.hij(" ",n.label,"\n")}}let d=(()=>{class o{constructor(){this.actions=[{icon:"file-text",label:"All Files"},{icon:"calendar",label:"Calendar"},{icon:"mail-o",label:"Email"},{icon:"user-o",label:"My Profile"},{icon:"file",label:"Recent Downloads"}]}ngOnInit(){this.selectedAction=this.actions[1]}onSelect(n){this.selectedAction=n}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["action-example"]],decls:1,vars:1,consts:[["nxAction","",3,"selected","click",4,"ngFor","ngForOf"],["nxAction","",3,"selected","click"],["nxActionIcon","",3,"name"]],template:function(n,i){1&n&&t.YNc(0,b,3,3,"button",0),2&n&&t.Q6J("ngForOf",i.actions)},dependencies:[a.Ng,a.DQ,r.O8,l.sg]}),o})();function g(o,e){if(1&o&&(t.TgZ(0,"nx-indicator",5),t._uU(1),t.qZA()),2&o){const n=t.oxw().$implicit,i=t.oxw();t.uIk("aria-label",i.getAriaLabel(n.notificationCount)),t.xp6(1),t.Oqu(i.getIndicatorText(n.notificationCount))}}function _(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"button",1),t.NdJ("click",function(){const m=t.CHM(n).$implicit,u=t.oxw();return t.KtG(u.onSelect(m))}),t._UZ(1,"nx-icon",2),t.TgZ(2,"span",3),t._uU(3),t.YNc(4,g,2,2,"nx-indicator",4),t.qZA()()}if(2&o){const n=e.$implicit,i=t.oxw();t.Q6J("selected",n===i.selectedAction),t.xp6(1),t.Q6J("name",n.icon),t.xp6(2),t.hij(" ",n.label," "),t.xp6(1),t.Q6J("ngIf",n.notification)}}let f=(()=>{class o{constructor(){this.actions=[{icon:"file-text",label:"All Files",notification:!1},{icon:"calendar",label:"Calendar",notification:!0},{icon:"mail-o",label:"Email",notification:!0,notificationCount:105},{icon:"user-o",label:"My Profile",notification:!0,notificationCount:4},{icon:"file",label:"Recent Downloads"}],this.selectedAction=this.actions[0]}onSelect(n){this.selectedAction=n}getIndicatorText(n){return n?n>99?"99+":n:""}getAriaLabel(n){return n?`${n} new notifications available`:"new notifications available"}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["action-indicator-example"]],decls:1,vars:1,consts:[["nxAction","",3,"selected","click",4,"ngFor","ngForOf"],["nxAction","",3,"selected","click"],["nxActionIcon","",3,"name"],[1,"label-content"],["position","after-text",4,"ngIf"],["position","after-text"]],template:function(n,i){1&n&&t.YNc(0,_,5,4,"button",0),2&n&&t.Q6J("ngForOf",i.actions)},dependencies:[a.Ng,a.DQ,r.O8,x.I,l.sg,l.O5]}),o})();function C(o,e){if(1&o&&(t.TgZ(0,"button",1),t._UZ(1,"nx-icon",2),t._uU(2),t.qZA()),2&o){const n=e.$implicit;t.Q6J("queryParams",n.query),t.xp6(1),t.Q6J("name",n.icon),t.xp6(1),t.hij(" ",n.label,"\n")}}let A=(()=>{class o{constructor(){this.actions=[{icon:"file-text",label:"All Files",query:{a:1}},{icon:"calendar",label:"Calendar",query:{a:2}},{icon:"mail-o",label:"Email",query:{a:3}},{icon:"user-o",label:"My Profile",query:{a:4}},{icon:"file",label:"Recent Downloads",query:{a:5}}]}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["action-with-router-example"]],decls:1,vars:1,consts:[["nxAction","","routerLink","./","routerLinkActive","is-selected",3,"queryParams",4,"ngFor","ngForOf"],["nxAction","","routerLink","./","routerLinkActive","is-selected",3,"queryParams"],["nxActionIcon","",3,"name"]],template:function(n,i){1&n&&t.YNc(0,C,3,3,"button",0),2&n&&t.Q6J("ngForOf",i.actions)},dependencies:[a.Ng,a.DQ,s.rH,s.Od,r.O8,l.sg]}),o})(),E=(()=>{class o{static components(){return{action:d,"action-with-router":A,"action-indicator":f}}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[a.g3,s.Bz,r.cf,x.e,l.ez]}),o})()}}]);