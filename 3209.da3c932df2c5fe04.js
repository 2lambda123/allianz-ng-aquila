"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[3209],{3209:(_,p,a)=>{a.r(p),a.d(p,{TreeExamplesModule:()=>r});var x=a(6895),c=a(3689),d=a(7802),s=a(9195),i=a(8984),e=a(4650);function u(o,t){if(1&o&&e._UZ(0,"nx-icon",6),2&o){const n=e.oxw().$implicit;e.Q6J("name",n.icon)}}function m(o,t){if(1&o&&(e.TgZ(0,"nx-tree-node")(1,"button",4),e.YNc(2,u,1,1,"nx-icon",5),e._uU(3),e.qZA()()),2&o){const n=t.$implicit;e.xp6(1),e.s9C("title",n.label),e.Q6J("queryParams",n.query),e.xp6(1),e.Q6J("ngIf",n.icon),e.xp6(1),e.hij(" ",n.label," ")}}function f(o,t){if(1&o&&e._UZ(0,"nx-icon",6),2&o){const n=e.oxw().$implicit;e.Q6J("name",n.icon)}}function T(o,t){if(1&o&&(e.TgZ(0,"nx-tree-node")(1,"button",7),e.YNc(2,f,1,1,"nx-icon",5),e._uU(3),e.qZA()()),2&o){const n=t.$implicit,h=e.oxw();e.xp6(1),e.s9C("title",n.label),e.Q6J("expanded",h._treeControl.isExpanded(n)),e.xp6(1),e.Q6J("ngIf",n.icon),e.xp6(1),e.hij(" ",n.label," ")}}class l{constructor(){this.navigationData=[{label:"Option 1",icon:"user-o",children:[{label:"Option 1.1",query:{a:"1.1"}},{label:"Option 1.2",children:[{label:"Option 1.2.1",query:{a:"1.2.1"}},{label:"Option 1.2.2",query:{a:"1.2.2"}},{label:"Option 1.2.3",children:[{label:"Option 1.2.3.1",children:[{label:"Option 1.2.3.1.1",query:{a:"1.2.3.1.1"}}]}]}]},{label:"Option 1.3",query:{a:"1.3"}}]},{label:"Option 2",icon:"file",children:[{label:"Option 2.1",query:{a:"2.1"}},{label:"Option 2.2",query:{a:"2.2"}},{label:"Option 2.3",query:{a:"2.3"}}]},{label:"Option 3",icon:"file",query:{a:"3"}}],this._hasChild=(t,n)=>n.expandable,this._treeControl=new i.AI,this._dataSource=new i.L7(this._treeControl,this.navigationData)}}l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["tree-example"]],decls:4,vars:3,consts:[[1,"container"],[3,"dataSource","treeControl"],[4,"nxTreeNodeDef"],[4,"nxTreeNodeDef","nxTreeNodeDefWhen"],["nxAction","","nxTreeNodeActionItem","","nxTreeNodePadding","","nxTreeNodePaddingOffset","40","routerLinkActive","is-selected","routerLink","./","type","button",3,"queryParams","title"],["nxActionIcon","",3,"name",4,"ngIf"],["nxActionIcon","",3,"name"],["nxAction","","nxTreeNodeActionItem","","nxTreeNodeToggle","","nxTreeNodePadding","","nxTreeNodePaddingOffset","40","expandable","","type","button",3,"expanded","title"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"nx-tree",1),e.YNc(2,m,4,4,"nx-tree-node",2),e.YNc(3,T,4,4,"nx-tree-node",3),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("dataSource",n._dataSource)("treeControl",n._treeControl),e.xp6(2),e.Q6J("nxTreeNodeDefWhen",n._hasChild))},dependencies:[i.CL,i.qc,i.yA,i.B5,i.He,i.WV,s.O8,d.Ng,d.DQ,c.rH,c.Od,x.O5]});class r{static components(){return{tree:l}}}r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[i.DG,s.cf,d.g3,c.Bz,x.ez]})}}]);