"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[8536],{9508:(D,v,o)=>{o.d(v,{f:()=>r});var f=o(6895),l=o(4006),h=o(690),U=o(1486),P=o(9561),t=o(4188),_=o(4650);class r{}r.\u0275fac=function(N){return new(N||r)},r.\u0275mod=_.oAB({type:r}),r.\u0275inj=_.cJS({imports:[f.ez,l.u5,l.UX,h.ru,t.X,U.K,P.TW]})},8536:(D,v,o)=>{o.r(v),o.d(v,{NotificationExamplesModule:()=>p});var f=o(3689),l=o(9195),h=o(9620),U=o(8468),P=o(1281),t=o(4650),_=o(8929),r=o(6787),Z=o(2693),N=o(6599),O=o(8184),F=o(2986),B=o(7625);const S=[[["nx-notification-item-metadata"]],[["nx-notification-item-content"]],"*",[["nx-notification-item-actions"]]],q=["nx-notification-item-metadata","nx-notification-item-content","*","nx-notification-item-actions"],R=["*"];let y=(()=>{class n{constructor(i,a){this._elementRef=i,this._focusMonitor=a,this._read=!1,this._clickable=!0,this.focused=new _.xQ,this._hasFocus=!1,this._focusMonitor.monitor(this._elementRef)}set read(i){this._read=(0,P.Ig)(i)}get read(){return this._read}set clickable(i){this._clickable=(0,P.Ig)(i)}get clickable(){return this._clickable}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}focus(i){typeof i>"u"&&!this._hasFocus&&(this.focused.next(this),this._hasFocus=!0,this._focusMonitor.focusVia(this._elementRef,"keyboard")),this._hasFocus||(this._elementRef.nativeElement.focus(),this._hasFocus=!0)}_blur(){this._hasFocus=!1}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(t.SBq),t.Y36(Z.tE))},n.\u0275cmp=t.Xpm({type:n,selectors:[["nx-notification-panel-item"],["","nxNotificationPanelItem",""]],hostAttrs:["tabindex","0"],hostVars:4,hostBindings:function(i,a){1&i&&t.NdJ("focus",function(){return a.focus()})("blur",function(){return a._blur()}),2&i&&t.ekj("nx-notification-item--read",a.read)("nx-notification-item--clickable",a.clickable)},inputs:{read:"read",clickable:"clickable"},ngContentSelectors:q,decls:4,vars:0,template:function(i,a){1&i&&(t.F$t(S),t.Hsn(0),t.Hsn(1,1),t.Hsn(2,2),t.Hsn(3,3))},styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;background-color:var(--notification-panel-item-unread-background-color);padding:16px 24px;margin:0 -24px}.nx-notification-item--read[_nghost-%COMP%]{background-color:var(--notification-panel-item-read-background-color)}[_nghost-%COMP%]:focus{outline:none}.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:var(--focus-inset-box-shadow)}@media screen and (forced-colors: active){.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:inset 0 0 0 4px CanvasText,inset 0 0 0 6px background;border:4px solid CanvasText}}  nx-notification-item-metadata{font-size:14px;font-weight:400;line-height:20px;letter-spacing:.2px;margin-bottom:4px;display:flex;align-items:center}  nx-notification-item-content{font-size:16px;font-weight:400;line-height:24px}  nx-notification-item-actions{font-size:16px;font-weight:400;line-height:24px;display:flex;justify-content:space-between;padding-top:8px}.nx-notification-item--clickable[_nghost-%COMP%]{cursor:pointer}.nx-notification-item--clickable[_nghost-%COMP%]:hover{background-color:var(--notification-panel-item-unread-hover-background-color)}.nx-notification-item--clickable[_nghost-%COMP%]:active{background-color:var(--notification-panel-item-unread-active-background-color)}.nx-notification-item--clickable.nx-notification-item--read[_nghost-%COMP%]:hover{background-color:var(--notification-panel-item-read-hover-background-color)}.nx-notification-item--clickable.nx-notification-item--read[_nghost-%COMP%]:active{background-color:var(-notification-panel-item-read-active-background-color)}"]}),n})(),T=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275dir=t.lG2({type:n,selectors:[["nx-notification-item-metadata"]]}),n})(),b=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275dir=t.lG2({type:n,selectors:[["nx-notification-item-content"]]}),n})(),I=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275dir=t.lG2({type:n,selectors:[["nx-notification-item-actions"]]}),n})(),C=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275dir=t.lG2({type:n,selectors:[["nx-notification-header"]]}),n})();const E=new t.OlP("nx-notification-panel-scroll-strategy"),L={provide:E,useFactory:function w(n){return()=>n.scrollStrategies.reposition()},deps:[O.aV]},H={direction:"bottom-start",fallbackOrientation:"vertical",autoFocus:!0,offset:8};let M=(()=>{class n{constructor(i,a,c,g){this._nxOverlay=i,this._element=a,this._triggerButton=c,this._defaultScrollStrategyFactory=g,this._scrollStrategyFactory=this._defaultScrollStrategyFactory}set notificationPanel(i){this._panelTemplate=i}get notificationPanel(){return this._panelTemplate}open(){if(this._overlayRef)return;const i={...H,scrollStrategy:this._scrollStrategyFactory(),triggerButton:this._triggerButton??void 0};this._overlayRef=this._nxOverlay.open(this._panelTemplate,this._element,i),this._overlayRef.afterClosed().pipe((0,F.q)(1)).subscribe(()=>this.close())}close(){this._overlayRef&&(this._overlayRef.close(),this._overlayRef=null)}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(N.oe),t.Y36(t.SBq),t.Y36(N.SI,10),t.Y36(E))},n.\u0275dir=t.lG2({type:n,selectors:[["","nxNotificationPanelTriggerFor",""]],hostBindings:function(i,a){1&i&&t.NdJ("click",function(){return a.open()})},inputs:{notificationPanel:["nxNotificationPanelTriggerFor","notificationPanel"]}}),n})(),A=(()=>{class n{constructor(){this._destroyed=new _.xQ}ngAfterContentInit(){this._initKeyManager()}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_initKeyManager(){this._keyManager=new Z.Em(this.items).withVerticalOrientation().withHorizontalOrientation("ltr"),this.items.length>0&&(0,r.T)(...this.items.map(i=>i.focused)).pipe((0,B.R)(this._destroyed)).subscribe(i=>{this._keyManager.updateActiveItem(i)})}_handleKeydown(i){this._keyManager.onKeydown(i)}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["nx-notification-panel"]],contentQueries:function(i,a,c){if(1&i&&t.Suo(c,y,5),2&i){let g;t.iGM(g=t.CRH())&&(a.items=g)}},viewQuery:function(i,a){if(1&i&&t.Gf(t.Rgc,5),2&i){let c;t.iGM(c=t.CRH())&&(a.templateRef=c.first)}},hostVars:2,hostBindings:function(i,a){1&i&&t.NdJ("keydown",function(g){return a._handleKeydown(g)}),2&i&&t.ekj("nx-notification-panel",!0)},exportAs:["nxNotificationPanel"],ngContentSelectors:R,decls:1,vars:0,template:function(i,a){1&i&&(t.F$t(),t.Hsn(0))},styles:["[_nghost-%COMP%]{padding:16px 24px;display:flex;flex-direction:column;background-color:var(--notification-panel-background-color);max-height:740px;height:100%;width:400px;overflow-y:auto;box-shadow:var(--shadow-large);border-radius:8px}[_nghost-%COMP%]:focus{outline:none}  nx-notification-header{display:flex;justify-content:space-between;padding:16px 0 8px}  nx-notification-header:first-child{padding-top:0}"]}),n})(),Y=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[L],imports:[N.gf,f.Bz]}),n})();var X=o(9508),s=o(690),k=o(1486);function z(n,e){1&n&&(t.TgZ(0,"nx-notification-panel")(1,"nx-notification-header")(2,"h3",3),t._uU(3,"Unread"),t.qZA(),t.TgZ(4,"button",4),t._uU(5," Mark all as read "),t._UZ(6,"nx-icon",5),t.qZA()(),t.TgZ(7,"a",6)(8,"nx-notification-item-metadata"),t._UZ(9,"nx-icon",7),t._uU(10,"File lock release \xb7 16:53 "),t.qZA(),t.TgZ(11,"nx-notification-item-content")(12,"span",8),t._uU(13,"The file you tried to edit (XY12345) is now available."),t.qZA()(),t.TgZ(14,"nx-notification-item-actions")(15,"nx-link")(16,"a",9),t._uU(17,"Edit file"),t.qZA()(),t.TgZ(18,"button",10),t._UZ(19,"nx-icon",11),t.qZA()()(),t.TgZ(20,"div",6)(21,"nx-notification-item-metadata"),t._UZ(22,"nx-icon",12),t._uU(23,"Callback \xb7 11:35 "),t.qZA(),t.TgZ(24,"nx-notification-item-content",13)(25,"span",8),t._uU(26,"Please call back James Erwin at 15:00"),t.qZA(),t.TgZ(27,"button",14),t._UZ(28,"nx-icon",11),t.qZA()()(),t.TgZ(29,"nx-notification-header")(30,"h3",3),t._uU(31,"Read"),t.qZA()(),t.TgZ(32,"div",15)(33,"nx-notification-item-metadata"),t._uU(34,"Offers \xb7 Yesterday "),t.qZA(),t.TgZ(35,"nx-notification-item-content")(36,"span",8),t._uU(37,"Mary London"),t.qZA(),t._uU(38," - Note created "),t.qZA()()()),2&n&&(t.xp6(7),t.uIk("href",null,t.LSH))}class d{}function J(n,e){1&n&&(t.TgZ(0,"nx-notification-panel")(1,"nx-notification-header")(2,"h3",3),t._uU(3,"Unread"),t.qZA(),t.TgZ(4,"button",4),t._uU(5," Mark all as read "),t._UZ(6,"nx-icon",5),t.qZA()(),t.TgZ(7,"a",6)(8,"nx-notification-item-metadata"),t._uU(9,"Tasks \xb7 5 minutes ago "),t.qZA(),t.TgZ(10,"nx-notification-item-content")(11,"span",7),t._uU(12,"Frank Loyd"),t.qZA(),t._uU(13," - created new offer "),t.qZA()(),t.TgZ(14,"a",8)(15,"nx-notification-item-metadata"),t._uU(16,"Offers \xb7 11:45 "),t.qZA(),t.TgZ(17,"nx-notification-item-content")(18,"span",7),t._uU(19,"Susi M\xfcller"),t.qZA(),t._uU(20," - Offer status has changed "),t.qZA()(),t.TgZ(21,"nx-notification-header")(22,"h3",3),t._uU(23,"Read"),t.qZA()(),t.TgZ(24,"a",9)(25,"nx-notification-item-metadata"),t._uU(26,"Offers \xb7 Yesterday "),t.qZA(),t.TgZ(27,"nx-notification-item-content")(28,"span",7),t._uU(29,"Mary London"),t.qZA(),t._uU(30," - Note created "),t.qZA()()())}d.\u0275fac=function(e){return new(e||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["notification-panel-actions-example"]],decls:4,vars:1,consts:[["nxIconButton","small tertiary","title","Notifications",1,"nx-margin-0",3,"nxNotificationPanelTriggerFor"],["name","bell-o"],["panel1",""],["nxCopytext","large",1,"nx-font-weight-semibold"],["nxPlainButton","small","type","button"],["name","check",1,"nx-margin-left-2xs"],["nxNotificationPanelItem","","clickable","false"],["size","s","name","lock-o","aria-hidden","true",1,"nx-margin-right-2xs"],[1,"nx-font-weight-semibold"],["href","#file-link"],["nxPlainButton","small","type","button","title","Delete"],["name","trash-o","aria-hidden","true"],["size","s","name","phone-o","aria-hidden","true",1,"nx-margin-right-2xs"],[1,"inline-delete"],["nxPlainButton","small","type","button","title","Delete",1,""],["nxNotificationPanelItem","","read","","clickable","false"]],template:function(e,i){if(1&e&&(t.TgZ(0,"button",0),t._UZ(1,"nx-icon",1),t.qZA(),t.YNc(2,z,39,1,"ng-template",null,2,t.W1O)),2&e){const a=t.MAs(3);t.Q6J("nxNotificationPanelTriggerFor",a)}},dependencies:[A,y,M,I,b,T,C,l.O8,h.f,s.p$,s.qw,k.v],styles:[".inline-delete[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]});class u{}function K(n,e){1&n&&(t.TgZ(0,"nx-notification-panel")(1,"nx-notification-header")(2,"h3",3),t._uU(3,"Unread"),t.qZA(),t.TgZ(4,"button",4),t._uU(5," Mark all as read "),t._UZ(6,"nx-icon",5),t.qZA()(),t.TgZ(7,"a",6)(8,"nx-notification-item-metadata"),t._UZ(9,"nx-icon",7),t._uU(10,"File lock release \xb7 16:53 "),t.qZA(),t.TgZ(11,"nx-notification-item-content")(12,"span",8),t._uU(13,"The file you tried to edit (XY12345) is now available."),t.qZA()()(),t.TgZ(14,"a",9)(15,"nx-notification-item-metadata"),t._UZ(16,"nx-icon",10),t._uU(17,"Callback \xb7 11:35 "),t.qZA(),t.TgZ(18,"nx-notification-item-content")(19,"span",8),t._uU(20,"Please call back James Erwin at 15:00"),t.qZA()()(),t.TgZ(21,"nx-notification-header")(22,"h3",3),t._uU(23,"Read"),t.qZA()(),t.TgZ(24,"div",11)(25,"nx-notification-item-metadata"),t._uU(26,"Offers \xb7 Yesterday "),t.qZA(),t.TgZ(27,"nx-notification-item-content")(28,"span",8),t._uU(29,"Mary London"),t.qZA(),t._uU(30," - Note created "),t.qZA()()()),2&n&&(t.xp6(14),t.Q6J("routerLink",null))}u.\u0275fac=function(e){return new(e||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["notification-panel-clickable-example"]],decls:4,vars:1,consts:[["nxIconButton","small tertiary","title","Notifications",3,"nxNotificationPanelTriggerFor"],["name","bell-o"],["panel1",""],["nxCopytext","large",1,"nx-font-weight-semibold"],["nxPlainButton","small","type","button"],["name","check",1,"nx-margin-left-2xs"],["nxNotificationPanelItem","","routerLink","#clickable-notification1"],[1,"nx-font-weight-semibold"],["nxNotificationPanelItem","","routerLink","#clickable-notification2"],["nxNotificationPanelItem","","read","","routerLink","#clickable-notification3"]],template:function(e,i){if(1&e&&(t.TgZ(0,"button",0),t._UZ(1,"nx-icon",1),t.qZA(),t.YNc(2,J,31,0,"ng-template",null,2,t.W1O)),2&e){const a=t.MAs(3);t.Q6J("nxNotificationPanelTriggerFor",a)}},dependencies:[A,y,M,b,T,C,l.O8,f.rH,s.p$,s.qw,k.v]});class m{}function G(n,e){1&n&&(t.TgZ(0,"nx-notification-panel")(1,"nx-notification-header")(2,"h3",3),t._uU(3,"Unread"),t.qZA(),t.TgZ(4,"button",4),t._uU(5," Mark all as read "),t._UZ(6,"nx-icon",5),t.qZA()(),t.TgZ(7,"a",6)(8,"nx-notification-item-metadata"),t._UZ(9,"nx-icon",7),t._uU(10,"File lock release \xb7 16:53 "),t.qZA(),t.TgZ(11,"nx-notification-item-content")(12,"span",8),t._uU(13,"The file you tried to edit (XY12345) is now available."),t.qZA()(),t.TgZ(14,"nx-notification-item-actions")(15,"nx-link")(16,"a",9),t._uU(17,"Edit file"),t.qZA()(),t.TgZ(18,"button",10),t._UZ(19,"nx-icon",11),t.qZA()()()()),2&n&&(t.xp6(7),t.uIk("href",null,t.LSH))}m.\u0275fac=function(e){return new(e||m)},m.\u0275cmp=t.Xpm({type:m,selectors:[["notification-panel-mixed-example"]],decls:4,vars:1,consts:[["nxIconButton","small tertiary","title","Notifications",3,"nxNotificationPanelTriggerFor"],["name","bell-o"],["panel1",""],["nxCopytext","large",1,"nx-font-weight-semibold"],["nxPlainButton","small","type","button"],["name","check",1,"nx-margin-left-2xs"],["nxNotificationPanelItem","","routerLink","#clickable-notification1"],["size","s","name","lock-o","aria-hidden","true",1,"nx-margin-right-2xs"],[1,"nx-font-weight-semibold"],["nxNotificationPanelItem","","clickable","false",3,"routerLink"],["size","s","name","phone-o","aria-hidden","true",1,"nx-margin-right-2xs"],["nxNotificationPanelItem","","read","","routerLink","#clickable-notification3"]],template:function(e,i){if(1&e&&(t.TgZ(0,"button",0),t._UZ(1,"nx-icon",1),t.qZA(),t.YNc(2,K,31,1,"ng-template",null,2,t.W1O)),2&e){const a=t.MAs(3);t.Q6J("nxNotificationPanelTriggerFor",a)}},dependencies:[A,y,M,b,T,C,l.O8,f.rH,s.p$,s.qw,k.v]});class x{}x.\u0275fac=function(e){return new(e||x)},x.\u0275cmp=t.Xpm({type:x,selectors:[["notification-panel-scroll-strategy-provider-example"]],features:[t._Bn([{provide:E,useFactory:function W(n){return()=>n.scrollStrategies.close({threshold:100})},deps:[O.aV]}])],decls:4,vars:1,consts:[["nxIconButton","small tertiary","title","Notifications",1,"nx-margin-0",3,"nxNotificationPanelTriggerFor"],["name","bell-o"],["panel1",""],["nxCopytext","large",1,"nx-font-weight-semibold"],["nxPlainButton","small","type","button"],["name","check",1,"nx-margin-left-2xs"],["nxNotificationPanelItem","","clickable","false"],["size","s","name","lock-o","aria-hidden","true",1,"nx-margin-right-2xs"],[1,"nx-font-weight-semibold"],["href","#file-link"],["nxPlainButton","small","type","button","title","Delete"],["name","trash-o","aria-hidden","true"]],template:function(e,i){if(1&e&&(t.TgZ(0,"button",0),t._UZ(1,"nx-icon",1),t.qZA(),t.YNc(2,G,20,1,"ng-template",null,2,t.W1O)),2&e){const a=t.MAs(3);t.Q6J("nxNotificationPanelTriggerFor",a)}},dependencies:[A,y,M,I,b,T,C,l.O8,h.f,s.p$,s.qw,k.v]});class p{static components(){return{"notification-panel-actions":d,"notification-panel-clickable":u,"notification-panel-mixed":m,"notification-panel-scroll-strategy-provider":x}}}p.\u0275fac=function(e){return new(e||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[U.Ee,Y,l.cf,f.Bz,h.z,X.f]})}}]);