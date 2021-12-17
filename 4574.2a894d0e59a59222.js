"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[4574],{4574:(S,T,i)=>{i.r(T),i.d(T,{DropdownExamplesModule:()=>dn});var _=i(3985),f=i(6126),n=i(3668),p=i(5481),m=i(8905),a=i(591),r=i(816),s=i(125),d=i(9133),A=i(5299),Z=i(6019),c=i(4269);function W(e,t){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const o=n.oxw();n.xp6(1),n.Oqu(null==o.customLabelDropdownValue?null:o.customLabelDropdownValue.prefix)}}function Q(e,t){if(1&e&&(n.TgZ(0,"nx-dropdown-item",7),n._uU(1),n.qZA()),2&e){const o=t.$implicit;n.Q6J("nxValue",o),n.xp6(1),n.AsE(" ",o.prefix," (",o.countryId,") ")}}let v=(()=>{class e{constructor(){this.telPrefixDemoData=[{prefix:"+1",countryId:"United States of America"},{prefix:"+49",countryId:"Germany"},{prefix:"+41",countryId:"Switzerland"}]}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["dropdown-custom-label-example"]],decls:7,vars:2,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12, 12, 4"],["nxLabel","Country Code"],[3,"ngModel","ngModelChange"],["nxClosedLabel",""],[3,"nxValue",4,"ngFor","ngForOf"],[3,"nxValue"]],template:function(o,l){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"nx-formfield",3),n.TgZ(4,"nx-dropdown",4),n.NdJ("ngModelChange",function(x){return l.customLabelDropdownValue=x}),n.YNc(5,W,2,1,"ng-template",5),n.YNc(6,Q,2,3,"nx-dropdown-item",6),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.xp6(4),n.Q6J("ngModel",l.customLabelDropdownValue),n.xp6(2),n.Q6J("ngForOf",l.telPrefixDemoData))},directives:[p.R,m.y,a.s,r.V,s.U,d.JJ,d.On,A.Z,Z.sg,c.c],styles:[""]}),e})();var w=i(6020);let q=(()=>{class e{constructor(){this.options=[{name:"BMW",id:1},{name:"Audi",id:2},{name:"Volvo",id:3},{name:"Mini",id:4}]}isOptionDisabled(o){return o.id%2==0}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["dropdown-disabled-items-example"]],decls:27,vars:2,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12, 12, 4"],["nxLabel","Disabled dropdown"],["nxDisabled","true"],["nxValue","BMW"],["nxValue","Audi"],["nxValue","Volvo"],["nxValue","Mini"],["nxLabel","With disabled item"],["disabled","true","nxValue","BMW"],["nxLabel","With disabled multi item"],["selectValue","id","selectLabel","name",3,"options","selectDisabled"]],template:function(o,l){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"nx-formfield",3),n.TgZ(4,"nx-dropdown",4),n.TgZ(5,"nx-dropdown-item",5),n._uU(6,"B"),n.qZA(),n.TgZ(7,"nx-dropdown-item",6),n._uU(8,"A"),n.qZA(),n.TgZ(9,"nx-dropdown-item",7),n._uU(10,"V"),n.qZA(),n.TgZ(11,"nx-dropdown-item",8),n._uU(12,"M"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(13,"div",2),n.TgZ(14,"nx-formfield",9),n.TgZ(15,"nx-dropdown"),n.TgZ(16,"nx-dropdown-item",10),n._uU(17,"B"),n.qZA(),n.TgZ(18,"nx-dropdown-item",6),n._uU(19,"A"),n.qZA(),n.TgZ(20,"nx-dropdown-item",7),n._uU(21,"V"),n.qZA(),n.TgZ(22,"nx-dropdown-item",8),n._uU(23,"M"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(24,"div",2),n.TgZ(25,"nx-formfield",11),n._UZ(26,"nx-multi-select",12),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.xp6(26),n.Q6J("options",l.options)("selectDisabled",l.isOptionDisabled))},directives:[p.R,m.y,a.s,r.V,s.U,c.c,w.l],styles:[""]}),e})();function N(e,t){1&e&&n._UZ(0,"nx-dropdown-item",7),2&e&&n.Q6J("nxValue",t.$implicit)}let y=(()=>{class e{constructor(){this.options=["BMW","Audi","VW","Mercedes","Porsche","Tesla","Lada","Opel","Fiat","Ford","Kia","Toyota","Ferrari"]}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["dropdown-filter-example"]],decls:9,vars:3,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6"],["nxLabel","Car brand"],["nxFilterPlaceholder","Type to search car",3,"nxShowFilter"],[3,"nxValue",4,"ngFor","ngForOf"],["filter","","filterPlaceholder","Type to search car",3,"options"],[3,"nxValue"]],template:function(o,l){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"nx-formfield",3),n.TgZ(4,"nx-dropdown",4),n.YNc(5,N,1,1,"nx-dropdown-item",5),n.qZA(),n.qZA(),n.qZA(),n.TgZ(6,"div",2),n.TgZ(7,"nx-formfield",3),n._UZ(8,"nx-multi-select",6),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.xp6(4),n.Q6J("nxShowFilter",!0),n.xp6(1),n.Q6J("ngForOf",l.options),n.xp6(3),n.Q6J("options",l.options))},directives:[p.R,m.y,a.s,r.V,s.U,Z.sg,w.l,c.c],styles:[""]}),e})();function I(e,t){1&e&&n._UZ(0,"nx-dropdown-item",6),2&e&&n.Q6J("nxValue",t.$implicit)}let D=(()=>{class e{constructor(){this.demoData=["BMW","Audi","VW","Mercedes","Porsche","Tesla","Lada","Opel","Fiat","Ford","Kia","Toyota","Ferrari"]}myFilter(o,l){return null!==l.match(new RegExp("^"+o,"g"))}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["dropdown-filter-custom-example"]],decls:6,vars:3,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6"],["nxLabel","Car brand"],["nxFilterPlaceholder","Type to search car",3,"nxShowFilter","filterFn"],[3,"nxValue",4,"ngFor","ngForOf"],[3,"nxValue"]],template:function(o,l){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"nx-formfield",3),n.TgZ(4,"nx-dropdown",4),n.YNc(5,I,1,1,"nx-dropdown-item",5),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.xp6(4),n.Q6J("nxShowFilter",!0)("filterFn",l.myFilter),n.xp6(1),n.Q6J("ngForOf",l.demoData))},directives:[p.R,m.y,a.s,r.V,s.U,Z.sg,c.c],styles:[""]}),e})();var V=i(3818);let h=(()=>{class e{constructor(){this.testBind="Catfish"}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["dropdown-group-example"]],decls:13,vars:1,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6"],["nxLabel","Animals"],[3,"nxValue","nxValueChange"],["nxLabel","Birds"],["disabled","true","nxValue","Parrot"],["nxValue","Pidgin"],["nxValue","Swallow"],["nxLabel","Fish"],["nxValue","Salmon"],["nxValue","Mackerel"],["nxValue","Catfish"]],template:function(o,l){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"nx-formfield",3),n.TgZ(4,"nx-dropdown",4),n.NdJ("nxValueChange",function(x){return l.testBind=x}),n.TgZ(5,"nx-dropdown-group",5),n._UZ(6,"nx-dropdown-item",6),n._UZ(7,"nx-dropdown-item",7),n._UZ(8,"nx-dropdown-item",8),n.qZA(),n.TgZ(9,"nx-dropdown-group",9),n._UZ(10,"nx-dropdown-item",10),n._UZ(11,"nx-dropdown-item",11),n._UZ(12,"nx-dropdown-item",12),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.xp6(4),n.Q6J("nxValue",l.testBind))},directives:[p.R,m.y,a.s,r.V,s.U,V.g,c.c],styles:[""]}),e})(),M=(()=>{class e{constructor(){this.options=["Apple","Orange","Plum","Cherry"],this.complexOptions=[{name:"Apple",id:1},{name:"Orange",id:2},{name:"Plum",id:3},{name:"Cherry",id:4}]}selectLabel(o){return o.name}selectValue(o){return o.id}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["dropdown-multi-select-example"]],decls:12,vars:5,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12, 12, 6"],["nxLabel","Fruits"],[3,"options"],["selectLabel","name","selectValue","id",3,"options"],[3,"options","selectLabel","selectValue"]],template:function(o,l){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"nx-formfield",3),n._UZ(4,"nx-multi-select",4),n.qZA(),n.qZA(),n.qZA(),n.TgZ(5,"div",1),n.TgZ(6,"div",2),n.TgZ(7,"nx-formfield",3),n._UZ(8,"nx-multi-select",5),n.qZA(),n.qZA(),n.TgZ(9,"div",2),n.TgZ(10,"nx-formfield",3),n._UZ(11,"nx-multi-select",6),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.xp6(4),n.Q6J("options",l.options),n.xp6(4),n.Q6J("options",l.complexOptions),n.xp6(3),n.Q6J("options",l.complexOptions)("selectLabel",l.selectLabel)("selectValue",l.selectValue))},directives:[p.R,m.y,a.s,r.V,w.l],styles:[""]}),e})(),E=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["dropdown-negative-example"]],decls:17,vars:1,consts:[[1,"docs-inverse-container"],["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6"],["nxLabel","Car brand","nxStyle","negative"],["nxStyle","negative"],["nxValue","BMW"],["nxValue","Audi"],["nxValue","Volvo"],["nxValue","Mini"],["nxStyle","negative",3,"nxDisabled"]],template:function(o,l){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.TgZ(4,"nx-formfield",4),n.TgZ(5,"nx-dropdown",5),n._UZ(6,"nx-dropdown-item",6),n._UZ(7,"nx-dropdown-item",7),n._UZ(8,"nx-dropdown-item",8),n._UZ(9,"nx-dropdown-item",9),n.qZA(),n.qZA(),n.qZA(),n.TgZ(10,"div",3),n.TgZ(11,"nx-formfield",4),n.TgZ(12,"nx-dropdown",10),n._UZ(13,"nx-dropdown-item",6),n._UZ(14,"nx-dropdown-item",7),n._UZ(15,"nx-dropdown-item",8),n._UZ(16,"nx-dropdown-item",9),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.xp6(12),n.Q6J("nxDisabled",!0))},directives:[p.R,m.y,a.s,r.V,s.U,c.c],styles:[""]}),e})();var X=i(4097);function K(e,t){1&e&&n._UZ(0,"nx-dropdown-item",12),2&e&&n.Q6J("nxValue",t.$implicit)}function j(e,t){1&e&&n._UZ(0,"nx-dropdown-item",12),2&e&&n.Q6J("nxValue",t.$implicit)}function Y(e,t){1&e&&n._UZ(0,"nx-dropdown-item",12),2&e&&n.Q6J("nxValue",t.$implicit)}function $(e,t){if(1&e&&(n.TgZ(0,"nx-dropdown-group",13),n.YNc(1,Y,1,1,"nx-dropdown-item",5),n.qZA()),2&e){const o=t.$implicit;n.Q6J("nxLabel",o.label),n.xp6(1),n.Q6J("ngForOf",o.items)}}let U=(()=>{class e{constructor(){this.options=["BMW","Audi","VW","Mercedes","Porsche","Tesla","Lada","Opel","Fiat","Ford","Kia","Toyota","Ferrari"],this.groups=[{label:"Birds",items:["Parrot","Pidgin","Swallow"]},{label:"Fish",items:["Salmon","Mackerel","Catfish"]}],this.model="Catfish",this.brands=[]}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["dropdown-outline-example"]],features:[n._Bn([{provide:_.i7,useValue:{appearance:"outline",nxFloatLabel:"always"}}])],decls:26,vars:7,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12, 12, 6"],["nxHeadline","subsection-xsmall"],["nxLabel","Car brand"],[3,"nxValue",4,"ngFor","ngForOf"],["filter","",3,"ngModel","options","ngModelChange"],["nxCol","12,12,6"],["nxFilterPlaceholder","Type to search car",3,"nxShowFilter"],["nxLabel","Animals"],[3,"nxValue","nxValueChange"],[3,"nxLabel",4,"ngFor","ngForOf"],[3,"nxValue"],[3,"nxLabel"]],template:function(o,l){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"h4",3),n._uU(4,"Standard dropdown"),n.qZA(),n.TgZ(5,"nx-formfield",4),n.TgZ(6,"nx-dropdown"),n.YNc(7,K,1,1,"nx-dropdown-item",5),n.qZA(),n.qZA(),n.qZA(),n.TgZ(8,"div",2),n.TgZ(9,"h4",3),n._uU(10,"Multi select dropdown"),n.qZA(),n.TgZ(11,"nx-formfield",4),n.TgZ(12,"nx-multi-select",6),n.NdJ("ngModelChange",function(x){return l.brands=x}),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(13,"div",1),n.TgZ(14,"div",7),n.TgZ(15,"h4",3),n._uU(16,"Filter dropdown"),n.qZA(),n.TgZ(17,"nx-formfield",4),n.TgZ(18,"nx-dropdown",8),n.YNc(19,j,1,1,"nx-dropdown-item",5),n.qZA(),n.qZA(),n.qZA(),n.TgZ(20,"div",7),n.TgZ(21,"h4",3),n._uU(22,"Group dropdown"),n.qZA(),n.TgZ(23,"nx-formfield",9),n.TgZ(24,"nx-dropdown",10),n.NdJ("nxValueChange",function(x){return l.model=x}),n.YNc(25,$,2,2,"nx-dropdown-group",11),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.xp6(7),n.Q6J("ngForOf",l.options),n.xp6(5),n.Q6J("ngModel",l.brands)("options",l.options),n.xp6(6),n.Q6J("nxShowFilter",!0),n.xp6(1),n.Q6J("ngForOf",l.options),n.xp6(5),n.Q6J("nxValue",l.model),n.xp6(1),n.Q6J("ngForOf",l.groups))},directives:[p.R,m.y,a.s,X.s,r.V,s.U,Z.sg,w.l,d.JJ,d.On,c.c,V.g],styles:["[_nghost-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:12px}"]}),e})();function G(e,t){1&e&&n._UZ(0,"nx-dropdown-item",7),2&e&&n.Q6J("nxValue",t.$implicit)}function z(e,t){1&e&&n._UZ(0,"nx-dropdown-item",7),2&e&&n.Q6J("nxValue",t.$implicit)}let b=(()=>{class e{constructor(){this.demoData=["BMW","Audi","VW","Mercedes","Porsche","Tesla","Lada","Opel","Fiat","Ford","Kia","Toyota","Ferrari"]}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["dropdown-placeholder-example"]],decls:10,vars:2,consts:[["nxLayout","grid"],["nxRow","",2,"align-items","flex-end"],["nxCol","12, 12, 6"],["nxLabel","Car brand"],["placeholder","Choose a car brand"],[3,"nxValue",4,"ngFor","ngForOf"],["nxLabel","Car brand","appearance","outline"],[3,"nxValue"]],template:function(o,l){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"nx-formfield",3),n.TgZ(4,"nx-dropdown",4),n.YNc(5,G,1,1,"nx-dropdown-item",5),n.qZA(),n.qZA(),n.qZA(),n.TgZ(6,"div",2),n.TgZ(7,"nx-formfield",6),n.TgZ(8,"nx-dropdown",4),n.YNc(9,z,1,1,"nx-dropdown-item",5),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.xp6(5),n.Q6J("ngForOf",l.demoData),n.xp6(4),n.Q6J("ngForOf",l.demoData))},directives:[p.R,m.y,a.s,r.V,s.U,Z.sg,c.c],styles:[""]}),e})();var H=i(4938),k=i(3827),nn=i(9004),C=i(1750);let F=(()=>{class e{constructor(){this.form=(new d.qu).group({dropdown:["BMW",d.kI.required]})}patch(o){this.form.patchValue({dropdown:o})}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["dropdown-reactive-example"]],decls:31,vars:7,consts:[[3,"formGroup"],["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6"],["nxLabel","Car brand"],["formControlName","dropdown"],["nxValue","BMW"],["nxValue","Audi"],["nxValue","Volvo"],["nxValue","Mini"],["nxFormfieldError",""],["nxContext","info","nxFormfieldNote",""],["nxCol","12"],[1,"nx-margin-y-0"],[1,"nx-margin-top-0"],[1,"update-container"],["type","text"],["reactiveInput",""],["nxButton","primary small","type","button",1,"nx-margin-bottom-0",3,"click"]],template:function(o,l){if(1&o){const u=n.EpF();n.TgZ(0,"form",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.TgZ(4,"nx-formfield",4),n.TgZ(5,"nx-dropdown",5),n.TgZ(6,"nx-dropdown-item"),n._uU(7,"CLEAR VALUE"),n.qZA(),n._UZ(8,"nx-dropdown-item",6),n._UZ(9,"nx-dropdown-item",7),n._UZ(10,"nx-dropdown-item",8),n._UZ(11,"nx-dropdown-item",9),n.qZA(),n.TgZ(12,"nx-error",10),n._uU(13," Please select a value "),n.qZA(),n.TgZ(14,"nx-message",11),n._uU(15," This field is required "),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(16,"div",2),n.TgZ(17,"div",12),n.TgZ(18,"p",13),n._uU(19),n.ALo(20,"json"),n.qZA(),n.TgZ(21,"p",13),n._uU(22),n.ALo(23,"json"),n.qZA(),n.TgZ(24,"p",14),n._uU(25,"Try to set the value to BMW, Audi, Volvo or Mini."),n.qZA(),n.TgZ(26,"div",15),n._UZ(27,"input",16,17),n.TgZ(29,"button",18),n.NdJ("click",function(){n.CHM(u);const g=n.MAs(28);return l.patch(g.value)}),n._uU(30," Update "),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()}2&o&&(n.Q6J("formGroup",l.form),n.xp6(19),n.hij("Form value: ",n.lcZ(20,3,l.form.value),""),n.xp6(3),n.hij("Form status: ",n.lcZ(23,5,l.form.status),""))},directives:[d._Y,d.JL,d.sg,p.R,m.y,a.s,r.V,s.U,d.JJ,d.u,c.c,H.vV,k.S,nn.X,C.X],pipes:[Z.Ts],styles:["button[_ngcontent-%COMP%]{margin-left:4px}.update-container[_ngcontent-%COMP%]{display:flex}"]}),e})();function en(e,t){1&e&&n._UZ(0,"nx-dropdown-item",10),2&e&&n.Q6J("nxValue",t.$implicit)}let L=(()=>{class e{constructor(){this.demoData=["BMW","Audi","VW","Mercedes","Porsche","Tesla","Lada","Opel","Fiat","Ford","Kia","Toyota","Ferrari"]}toText(o){return o?o.toUpperCase():null}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["dropdown-rendering-items-example"]],decls:24,vars:2,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12, 12, 4"],["nxLabel","Car brand"],[3,"nxValueFormatter"],[3,"nxValue",4,"ngFor","ngForOf"],["nxValue","BMW"],["nxValue","Audi"],["nxValue","Volvo"],["nxValue","Mini"],[3,"nxValue"]],template:function(o,l){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"nx-formfield",3),n.TgZ(4,"nx-dropdown",4),n.YNc(5,en,1,1,"nx-dropdown-item",5),n.qZA(),n.qZA(),n.qZA(),n.TgZ(6,"div",2),n.TgZ(7,"nx-formfield",3),n.TgZ(8,"nx-dropdown"),n.TgZ(9,"nx-dropdown-item",6),n._uU(10,"B"),n.qZA(),n.TgZ(11,"nx-dropdown-item",7),n._uU(12,"A"),n.qZA(),n.TgZ(13,"nx-dropdown-item",8),n._uU(14,"V"),n.qZA(),n.TgZ(15,"nx-dropdown-item",9),n._uU(16,"M"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(17,"div",2),n.TgZ(18,"nx-formfield",3),n.TgZ(19,"nx-dropdown"),n._UZ(20,"nx-dropdown-item",6),n._UZ(21,"nx-dropdown-item",7),n._UZ(22,"nx-dropdown-item",8),n._UZ(23,"nx-dropdown-item",9),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.xp6(4),n.Q6J("nxValueFormatter",l.toText),n.xp6(1),n.Q6J("ngForOf",l.demoData))},directives:[p.R,m.y,a.s,r.V,s.U,Z.sg,c.c],styles:[""]}),e})(),O=(()=>{class e{constructor(){this.demoData=["BMW","Audi","VW","Mercedes","Porsche","Tesla","Lada","Opel","Fiat","Ford","Kia","Toyota","Ferrari"],this.simpleBinding="Audi"}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["dropdown-simple-binding-example"]],decls:21,vars:2,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6"],["nxLabel","Car brand"],[3,"nxValue","nxValueChange"],["simpleDropdown",""],["nxValue","BMW"],["nxValue","Audi"],["nxValue","Volvo"],["nxValue","Mini"],["nxCol","12"],[1,"nx-margin-y-0"],[1,"nx-margin-top-0"],[1,"update-container"],["type","text"],["simpleInput",""],["nxButton","primary small","type","button",1,"nx-margin-bottom-0",3,"click"]],template:function(o,l){if(1&o){const u=n.EpF();n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"nx-formfield",3),n.TgZ(4,"nx-dropdown",4,5),n.NdJ("nxValueChange",function(g){return l.simpleBinding=g}),n._UZ(6,"nx-dropdown-item",6),n._UZ(7,"nx-dropdown-item",7),n._UZ(8,"nx-dropdown-item",8),n._UZ(9,"nx-dropdown-item",9),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(10,"div",1),n.TgZ(11,"div",10),n.TgZ(12,"p",11),n._uU(13),n.qZA(),n.TgZ(14,"p",12),n._uU(15,"Try to set the value to BMW, Audi, Volvo or Mini."),n.qZA(),n.TgZ(16,"div",13),n._UZ(17,"input",14,15),n.TgZ(19,"button",16),n.NdJ("click",function(){n.CHM(u);const g=n.MAs(18);return l.simpleBinding=g.value}),n._uU(20," Update "),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()}if(2&o){const u=n.MAs(5);n.xp6(4),n.Q6J("nxValue",l.simpleBinding),n.xp6(9),n.hij("Model value is: ",u.value,"")}},directives:[p.R,m.y,a.s,r.V,s.U,c.c,C.X],styles:["button[_ngcontent-%COMP%]{margin-left:4px}.update-container[_ngcontent-%COMP%]{display:flex}"]}),e})();function on(e,t){1&e&&n._UZ(0,"nx-dropdown-item",10),2&e&&n.Q6J("nxValue",t.$implicit)}let J=(()=>{class e{constructor(){this.options=["BMW","Audi","VW","Mercedes","Porsche","Tesla","Lada","Opel","Fiat","Ford","Kia","Toyota","Ferrari"]}toText(o){return o?o.toUpperCase():null}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["dropdown-standard-example"]],decls:13,vars:2,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12, 12, 6"],["nxLabel","Car brand"],[3,"nxValueFormatter"],[3,"nxValue",4,"ngFor","ngForOf"],["nxValue","BMW"],["nxValue","Audi"],["nxValue","Volvo"],["nxValue","Mini"],[3,"nxValue"]],template:function(o,l){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"nx-formfield",3),n.TgZ(4,"nx-dropdown",4),n.YNc(5,on,1,1,"nx-dropdown-item",5),n.qZA(),n.qZA(),n.qZA(),n.TgZ(6,"div",2),n.TgZ(7,"nx-formfield",3),n.TgZ(8,"nx-dropdown"),n._UZ(9,"nx-dropdown-item",6),n._UZ(10,"nx-dropdown-item",7),n._UZ(11,"nx-dropdown-item",8),n._UZ(12,"nx-dropdown-item",9),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.xp6(4),n.Q6J("nxValueFormatter",l.toText),n.xp6(1),n.Q6J("ngForOf",l.options))},directives:[p.R,m.y,a.s,r.V,s.U,Z.sg,c.c],encapsulation:2}),e})(),B=(()=>{class e{constructor(){this.ngModelBinding="Mini"}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["dropdown-template-driven-example"]],decls:25,vars:5,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6"],["nxLabel","Car brand"],["name","test",3,"ngModel","ngModelChange"],["ngModelDropdown",""],["nxValue","BMW"],["nxValue","Audi"],["nxValue","Volvo"],["nxValue","Mini"],[1,"nx-margin-y-0"],["nxCol","12"],[1,"nx-margin-top-0","nx-margin-bottom-xs"],[1,"update-container"],["type","text"],["templateInput",""],["nxButton","primary small","type","button",1,"nx-margin-bottom-0",3,"click"]],template:function(o,l){if(1&o){const u=n.EpF();n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"form"),n.TgZ(4,"nx-formfield",3),n.TgZ(5,"nx-dropdown",4,5),n.NdJ("ngModelChange",function(g){return l.ngModelBinding=g}),n._UZ(7,"nx-dropdown-item",6),n._UZ(8,"nx-dropdown-item",7),n._UZ(9,"nx-dropdown-item",8),n._UZ(10,"nx-dropdown-item",9),n.qZA(),n.qZA(),n.qZA(),n.TgZ(11,"p",10),n._uU(12),n.qZA(),n.TgZ(13,"p",10),n._uU(14),n.ALo(15,"json"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(16,"div",1),n.TgZ(17,"div",11),n.TgZ(18,"p",12),n._uU(19,"Try to set the value to BMW, Audi, Volvo or Mini."),n.qZA(),n.TgZ(20,"div",13),n._UZ(21,"input",14,15),n.TgZ(23,"button",16),n.NdJ("click",function(){n.CHM(u);const g=n.MAs(22);return l.ngModelBinding=g.value}),n._uU(24," Update "),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()}if(2&o){const u=n.MAs(6);n.xp6(5),n.Q6J("ngModel",l.ngModelBinding),n.xp6(7),n.hij("Current Value: ",u.value,""),n.xp6(2),n.hij("Model: ",n.lcZ(15,3,l.ngModelBinding),"")}},directives:[p.R,m.y,a.s,d._Y,d.JL,d.F,r.V,s.U,d.JJ,d.On,c.c,C.X],pipes:[Z.Ts],styles:["button[_ngcontent-%COMP%]{margin-left:4px}.update-container[_ngcontent-%COMP%]{display:flex}"]}),e})();var tn=i(4797);let P=(()=>{class e{constructor(){this.items=[];for(let o=1;o<=500;o++)this.items.push({label:`Item ${o}`,value:o})}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["dropdown-lazy-example"]],decls:5,vars:1,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12, 12, 6"],["nxLabel","Lazy options"],[3,"options"]],template:function(o,l){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"nx-formfield",3),n._UZ(4,"nx-dropdown",4),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.xp6(4),n.Q6J("options",l.items))},directives:[p.R,m.y,a.s,r.V,s.U],encapsulation:2}),e})(),R=(()=>{class e{constructor(){this.model=[3],this.modelWithFilter=[],this.options=[{label:"Apple",id:1},{label:"Banana",id:2},{label:"Strawberry",id:3},{label:"Orange",id:4},{label:"Lemon",id:5},{label:"Grapefruit",id:6},{label:"Mango",id:7},{label:"Pineapple",id:8},{label:"Kiwi",id:9},{label:"Cherry",id:10},{label:"Blueberry",id:11},{label:"Avocado",id:12},{label:"Watermelon",id:13},{label:"Raspberry",id:14},{label:"Papaya",id:15}]}selectLabel(o){return o.label}selectValue(o){return o.id}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["multi-select-example"]],decls:16,vars:8,consts:[["appearance","outline","nxFloatLabel","always","nxLabel","Multi select"],["filter","","selectValue","id","selectLabel","label",3,"ngModel","options","ngModelChange"],[3,"ngModel","options","selectLabel","selectValue","ngModelChange"]],template:function(o,l){1&o&&(n.TgZ(0,"h3"),n._uU(1,"With filter"),n.qZA(),n.TgZ(2,"nx-formfield",0),n.TgZ(3,"nx-multi-select",1),n.NdJ("ngModelChange",function(x){return l.modelWithFilter=x}),n.qZA(),n.qZA(),n.TgZ(4,"div"),n._uU(5," Selected options: "),n.TgZ(6,"pre"),n._uU(7),n.qZA(),n.qZA(),n.TgZ(8,"h3"),n._uU(9,"Without filter"),n.qZA(),n.TgZ(10,"nx-formfield",0),n.TgZ(11,"nx-multi-select",2),n.NdJ("ngModelChange",function(x){return l.model=x}),n.qZA(),n.qZA(),n.TgZ(12,"div"),n._uU(13," Selected options: "),n.TgZ(14,"pre"),n._uU(15),n.qZA(),n.qZA()),2&o&&(n.xp6(3),n.Q6J("ngModel",l.modelWithFilter)("options",l.options),n.xp6(4),n.hij("[",l.modelWithFilter.join(", "),"]"),n.xp6(4),n.Q6J("ngModel",l.model)("options",l.options)("selectLabel",l.selectLabel)("selectValue",l.selectValue),n.xp6(4),n.hij("[",l.model.join(", "),"]"))},directives:[r.V,w.l,d.JJ,d.On],styles:[""]}),e})(),dn=(()=>{class e{static components(){return{"dropdown-custom-label":v,"dropdown-disabled-items":q,"dropdown-filter":y,"dropdown-filter-custom":D,"dropdown-group":h,"dropdown-multi-select":M,"dropdown-negative":E,"dropdown-outline":U,"dropdown-placeholder":b,"dropdown-reactive":F,"dropdown-rendering-items":L,"dropdown-simple-binding":O,"dropdown-standard":J,"dropdown-template-driven":B,"dropdown-lazy":P,"multi-select":R}}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[f._A,_._0,tn.f]]}),e})()},4797:(S,T,i)=>{i.d(T,{f:()=>s});var _=i(9675),f=i(5440),n=i(508),p=i(7372),m=i(6019),a=i(9133),r=i(3668);let s=(()=>{class d{}return d.\u0275fac=function(Z){return new(Z||d)},d.\u0275mod=r.oAB({type:d}),d.\u0275inj=r.cJS({imports:[[],m.ez,a.u5,a.UX,p.ru,n.X,f.K,_.TW]}),d})()}}]);