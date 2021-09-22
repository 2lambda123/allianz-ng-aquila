!function(){"use strict";function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function t(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}(self.webpackChunkng_aquila=self.webpackChunkng_aquila||[]).push([[5412],{85412:function(e,i,o){o.r(i),o.d(i,{ActionExamplesModule:function(){return w}});var c=o(38583),a=o(42677),l=o(63423),r=o(94203),u=o(1429),s=o(37716),f=o(79719),p=o(90805),d=o(1978);function m(n,e){if(1&n){var t=s.EpF();s.TgZ(0,"button",1),s.NdJ("click",function(){var n=s.CHM(t).$implicit;return s.oxw().onSelect(n)}),s._UZ(1,"nx-icon",2),s._uU(2),s.qZA()}if(2&n){var i=e.$implicit,o=s.oxw();s.Q6J("selected",i===o.selectedAction),s.xp6(1),s.Q6J("name",i.icon),s.xp6(1),s.hij(" ",i.label,"\n")}}var x,b=((x=function(){function e(){n(this,e),this.actions=[{icon:"file-text",label:"All Files"},{icon:"calendar",label:"Calendar"},{icon:"mail-o",label:"Email"},{icon:"user-o",label:"My Profile"},{icon:"file",label:"Recent Downloads"}]}return t(e,[{key:"ngOnInit",value:function(){this.selectedAction=this.actions[1]}},{key:"onSelect",value:function(n){this.selectedAction=n}}]),e}()).\u0275fac=function(n){return new(n||x)},x.\u0275cmp=s.Xpm({type:x,selectors:[["action-example"]],decls:1,vars:1,consts:[["nxAction","",3,"selected","click",4,"ngFor","ngForOf"],["nxAction","",3,"selected","click"],["nxActionIcon","",3,"name"]],template:function(n,e){1&n&&s.YNc(0,m,3,3,"button",0),2&n&&s.Q6J("ngForOf",e.actions)},directives:[c.sg,f.N,p.O,d.D],styles:[""]}),x);function v(n,e){if(1&n&&(s.TgZ(0,"button",1),s._UZ(1,"nx-icon",2),s._uU(2),s.qZA()),2&n){var t=e.$implicit;s.Q6J("queryParams",t.query),s.xp6(1),s.Q6J("name",t.icon),s.xp6(1),s.hij(" ",t.label,"\n")}}var g=function(){var e=function e(){n(this,e),this.actions=[{icon:"file-text",label:"All Files",query:{a:1}},{icon:"calendar",label:"Calendar",query:{a:2}},{icon:"mail-o",label:"Email",query:{a:3}},{icon:"user-o",label:"My Profile",query:{a:4}},{icon:"file",label:"Recent Downloads",query:{a:5}}]};return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["action-with-router-example"]],decls:1,vars:1,consts:[["nxAction","","routerLink","./","routerLinkActive","is-selected",3,"queryParams",4,"ngFor","ngForOf"],["nxAction","","routerLink","./","routerLinkActive","is-selected",3,"queryParams"],["nxActionIcon","",3,"name"]],template:function(n,e){1&n&&s.YNc(0,v,3,3,"button",0),2&n&&s.Q6J("ngForOf",e.actions)},directives:[c.sg,f.N,l.rH,l.Od,p.O,d.D],styles:[""]}),e}(),y=o(18257);function A(n,e){if(1&n&&(s.TgZ(0,"nx-indicator",5),s._uU(1),s.qZA()),2&n){var t=s.oxw().$implicit,i=s.oxw();s.uIk("aria-label",i.getAriaLabel(t.notificationCount)),s.xp6(1),s.Oqu(i.getIndicatorText(t.notificationCount))}}function h(n,e){if(1&n){var t=s.EpF();s.TgZ(0,"button",1),s.NdJ("click",function(){var n=s.CHM(t).$implicit;return s.oxw().onSelect(n)}),s._UZ(1,"nx-icon",2),s.TgZ(2,"span",3),s._uU(3),s.YNc(4,A,2,2,"nx-indicator",4),s.qZA(),s.qZA()}if(2&n){var i=e.$implicit,o=s.oxw();s.Q6J("selected",i===o.selectedAction),s.xp6(1),s.Q6J("name",i.icon),s.xp6(2),s.hij(" ",i.label," "),s.xp6(1),s.Q6J("ngIf",i.notification)}}var k=function(){var e=function(){function e(){n(this,e),this.actions=[{icon:"file-text",label:"All Files",notification:!1},{icon:"calendar",label:"Calendar",notification:!0},{icon:"mail-o",label:"Email",notification:!0,notificationCount:105},{icon:"user-o",label:"My Profile",notification:!0,notificationCount:4},{icon:"file",label:"Recent Downloads"}],this.selectedAction=this.actions[0]}return t(e,[{key:"onSelect",value:function(n){this.selectedAction=n}},{key:"getIndicatorText",value:function(n){return n?n>99?"99+":n:""}},{key:"getAriaLabel",value:function(n){return n?"".concat(n," new notifications available"):"new notifications available"}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["action-indicator-example"]],decls:1,vars:1,consts:[["nxAction","",3,"selected","click",4,"ngFor","ngForOf"],["nxAction","",3,"selected","click"],["nxActionIcon","",3,"name"],[1,"label-content"],["position","after-text",4,"ngIf"],["position","after-text"]],template:function(n,e){1&n&&s.YNc(0,h,5,4,"button",0),2&n&&s.Q6J("ngForOf",e.actions)},directives:[c.sg,f.N,p.O,d.D,c.O5,y.I],styles:[""]}),e}(),w=function(){var e=function(){function e(){n(this,e)}return t(e,null,[{key:"components",value:function(){return{action:b,"action-with-router":g,"action-indicator":k}}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[r.g3,l.Bz,a.cf,u.e,c.ez]]}),e}()}}])}();