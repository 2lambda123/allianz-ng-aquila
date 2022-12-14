"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[9517],{9517:(G,E,r)=>{r.r(E),r.d(E,{CheckboxExamplesModule:()=>A});var a=r(3099),q=r(9508),e=r(4650),l=r(7823),c=r(4006),i=r(6895);class x{constructor(){this.checkboxes=["checkbox 1"]}}x.\u0275fac=function(o){return new(o||x)},x.\u0275cmp=e.Xpm({type:x,selectors:[["checkbox-group-basic-example"]],decls:12,vars:4,consts:[[3,"ngModel","ngModelChange"],["value","checkbox 1",1,"nx-margin-bottom-s"],["value","checkbox 2",1,"nx-margin-bottom-s"],["value","checkbox 3"]],template:function(o,n){1&o&&(e.TgZ(0,"nx-checkbox-group",0),e.NdJ("ngModelChange",function(m){return n.checkboxes=m}),e.TgZ(1,"nx-label"),e._uU(2,"This is a nx-checkbox-group"),e.qZA(),e.TgZ(3,"nx-checkbox",1),e._uU(4,"Checkbox 1"),e.qZA(),e.TgZ(5,"nx-checkbox",2),e._uU(6,"Checkbox 2"),e.qZA(),e.TgZ(7,"nx-checkbox",3),e._uU(8,"Checkbox 3"),e.qZA()(),e.TgZ(9,"p"),e._uU(10),e.ALo(11,"json"),e.qZA()),2&o&&(e.Q6J("ngModel",n.checkboxes),e.xp6(10),e.hij("Value: ",e.lcZ(11,2,n.checkboxes),""))},dependencies:[a.Wi,a.n9,l.UD,c.JJ,c.On,i.Ts]});var p=r(690);function y(t,o){if(1&t&&(e.TgZ(0,"nx-checkbox",8),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.Q6J("value",n),e.xp6(1),e.Oqu(n)}}function J(t,o){if(1&t&&(e.TgZ(0,"nx-checkbox-group",4)(1,"nx-label",5),e._uU(2,"Select your choices"),e.qZA(),e.TgZ(3,"nx-error",6),e._uU(4," Please select at least one checkbox. "),e.qZA(),e.YNc(5,y,2,2,"nx-checkbox",7),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("size","small"),e.xp6(4),e.Q6J("ngForOf",n.data)}}class u{constructor(o){this.fb=o,this.myFormGroup=this.fb.group({terms:[[],c.kI.required]}),this.data=["one","two","three"],this.i=1}addNewCb(){this.data.push("Checkbox "+this.i),this.i++}removeCB(){this.data.shift()}}u.\u0275fac=function(o){return new(o||u)(e.Y36(c.QS))},u.\u0275cmp=e.Xpm({type:u,selectors:[["checkbox-group-dynamic-example"]],decls:12,vars:8,consts:[[3,"formGroup"],["name","terms","formControlName","terms","required","",4,"ngIf"],["nxButton","primary small","type","button",1,"nx-margin-right-3xs",3,"click"],["nxButton","primary small","type","button",3,"click"],["name","terms","formControlName","terms","required",""],[3,"size"],["appearance","text"],["checked","","class","nx-margin-bottom-s",3,"value",4,"ngFor","ngForOf"],["checked","",1,"nx-margin-bottom-s",3,"value"]],template:function(o,n){1&o&&(e.TgZ(0,"form",0),e.YNc(1,J,6,2,"nx-checkbox-group",1),e.TgZ(2,"p"),e._uU(3),e.ALo(4,"json"),e.qZA(),e.TgZ(5,"p"),e._uU(6),e.ALo(7,"json"),e.qZA()(),e.TgZ(8,"button",2),e.NdJ("click",function(){return n.addNewCb()}),e._uU(9," Add new checkbox\n"),e.qZA(),e.TgZ(10,"button",3),e.NdJ("click",function(){return n.removeCB()}),e._uU(11," Remove first checkbox\n"),e.qZA()),2&o&&(e.Q6J("formGroup",n.myFormGroup),e.xp6(1),e.Q6J("ngIf",n.data),e.xp6(2),e.hij("Form value: ",e.lcZ(4,4,n.myFormGroup.value),""),e.xp6(3),e.hij("Form status: ",e.lcZ(7,6,n.myFormGroup.status),""))},dependencies:[a.Wi,a.n9,l.UD,l.vV,i.sg,i.O5,c._Y,c.JJ,c.JL,c.Q7,c.sg,c.u,p.XV,i.Ts]});class h{constructor(){this.checkboxes=["checkbox 1"]}}h.\u0275fac=function(o){return new(o||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["checkbox-group-horizontal-example"]],decls:13,vars:4,consts:[[3,"ngModel","ngModelChange"],[1,"horizontal-checkboxes"],["value","checkbox 1"],["value","checkbox 2",1,"nx-margin-left-s"],["value","checkbox 3",1,"nx-margin-left-s"]],template:function(o,n){1&o&&(e.TgZ(0,"nx-checkbox-group",0),e.NdJ("ngModelChange",function(m){return n.checkboxes=m}),e.TgZ(1,"nx-label"),e._uU(2,"This is a nx-checkbox-group"),e.qZA(),e.TgZ(3,"div",1)(4,"nx-checkbox",2),e._uU(5,"Checkbox 1"),e.qZA(),e.TgZ(6,"nx-checkbox",3),e._uU(7,"Checkbox 2"),e.qZA(),e.TgZ(8,"nx-checkbox",4),e._uU(9,"Checkbox 3"),e.qZA()()(),e.TgZ(10,"p"),e._uU(11),e.ALo(12,"json"),e.qZA()),2&o&&(e.Q6J("ngModel",n.checkboxes),e.xp6(11),e.hij("Value: ",e.lcZ(12,2,n.checkboxes),""))},dependencies:[a.Wi,a.n9,l.UD,c.JJ,c.On,i.Ts],styles:[".horizontal-checkboxes[_ngcontent-%COMP%]{display:flex;flex-direction:row}"]});const M=function(t){return{"docs-inverse-container":t}};class b{constructor(o){this.fb=o,this.optionsForm=this.fb.group({terms:[[]]}),this.myFormGroup=this.fb.group({isNegative:[!1,null],isRequired:[!1,null],isDisabled:[!1,null],isLarge:[!1,null],isLabelExpert:[!1,null]})}toggleDisabled(){const o=this.myFormGroup.get("terms");var n,s;null!=o&&o.disabled?null===(n=this.myFormGroup.get("terms"))||void 0===n||n.enable():null===(s=this.myFormGroup.get("terms"))||void 0===s||s.disable()}toggleRequired(){const o=this.myFormGroup.get("terms");(null==o?void 0:o.validator)===c.kI.required?o.clearValidators():null==o||o.setValidators(c.kI.required)}}b.\u0275fac=function(o){return new(o||b)(e.Y36(c.QS))},b.\u0275cmp=e.Xpm({type:b,selectors:[["checkbox-group-inheritance-example"]],decls:39,vars:14,consts:[[3,"formGroup"],["formControlName","isNegative",1,"nx-margin-bottom-s"],["formControlName","isRequired",1,"nx-margin-bottom-s",3,"checkedChange"],["formControlName","isDisabled",1,"nx-margin-bottom-s",3,"checkedChange"],["formControlName","isLarge",1,"nx-margin-bottom-s"],["formControlName","isLabelExpert"],[3,"ngClass"],["name","terms","formControlName","terms",3,"negative","labelSize"],[3,"size"],["appearance","text"],["value","Term 1",1,"nx-margin-bottom-s"],["value","Term 2",1,"nx-margin-bottom-s"],["value","Term 3",1,"nx-margin-bottom-s"],["value","Term 4",1,"nx-margin-bottom-s"],["value","Term 5"]],template:function(o,n){1&o&&(e.TgZ(0,"h4"),e._uU(1,"Properties"),e.qZA(),e.TgZ(2,"form",0)(3,"nx-checkbox",1),e._uU(4,"Toggle negative"),e.qZA(),e.TgZ(5,"nx-checkbox",2),e.NdJ("checkedChange",function(){return n.toggleRequired()}),e._uU(6,"Toggle required"),e.qZA(),e.TgZ(7,"nx-checkbox",3),e.NdJ("checkedChange",function(){return n.toggleDisabled()}),e._uU(8,"Toggle disabled"),e.qZA(),e.TgZ(9,"nx-checkbox",4),e._uU(10,"Toggle checkbox label size"),e.qZA(),e.TgZ(11,"nx-checkbox",5),e._uU(12,"Toggle checkbox group label size (Expert)"),e.qZA()(),e._UZ(13,"hr"),e.TgZ(14,"h4"),e._uU(15,"Result"),e.qZA(),e.TgZ(16,"form",0)(17,"div",6)(18,"nx-checkbox-group",7)(19,"nx-label",8),e._uU(20,"Select your choices"),e.qZA(),e.TgZ(21,"nx-error",9),e._uU(22," Please select at least one checkbox. "),e.qZA(),e.TgZ(23,"nx-checkbox",10),e._uU(24,"Checkbox 1"),e.qZA(),e.TgZ(25,"nx-checkbox",11),e._uU(26,"Checkbox 2"),e.qZA(),e.TgZ(27,"nx-checkbox",12),e._uU(28,"Checkbox 3"),e.qZA(),e.TgZ(29,"nx-checkbox",13),e._uU(30,"Checkbox 4"),e.qZA(),e.TgZ(31,"nx-checkbox",14),e._uU(32,"Checkbox 5"),e.qZA()()(),e.TgZ(33,"p"),e._uU(34),e.ALo(35,"json"),e.qZA(),e.TgZ(36,"p"),e._uU(37),e.ALo(38,"json"),e.qZA()()),2&o&&(e.xp6(2),e.Q6J("formGroup",n.optionsForm),e.xp6(14),e.Q6J("formGroup",n.myFormGroup),e.xp6(1),e.Q6J("ngClass",e.VKq(12,M,n.optionsForm.value.isNegative)),e.xp6(1),e.Q6J("negative",n.optionsForm.value.isNegative)("labelSize",n.optionsForm.value.isLarge?"large":"small"),e.xp6(1),e.Q6J("size",n.optionsForm.value.isLabelExpert?"small":"large"),e.xp6(15),e.hij("Form value: ",e.lcZ(35,8,n.myFormGroup.value),""),e.xp6(3),e.hij("Form status: ",e.lcZ(38,10,n.myFormGroup.status),""))},dependencies:[a.Wi,a.n9,l.UD,l.vV,i.mk,c._Y,c.JJ,c.JL,c.sg,c.u,i.Ts],styles:[".docs-inverse-container[_ngcontent-%COMP%]{padding:0}nx-checkbox-group[_ngcontent-%COMP%]{padding:8px;display:block}"]});class g{}g.\u0275fac=function(o){return new(o||g)},g.\u0275cmp=e.Xpm({type:g,selectors:[["checkbox-group-label-size-example"]],decls:9,vars:1,consts:[[3,"size"],["value","checkbox 1",1,"nx-margin-bottom-s"],["value","checkbox 2",1,"nx-margin-bottom-s"],["value","checkbox 3"]],template:function(o,n){1&o&&(e.TgZ(0,"nx-checkbox-group")(1,"nx-label",0),e._uU(2,"This is an expert label for the checkbox group"),e.qZA(),e.TgZ(3,"nx-checkbox",1),e._uU(4,"Checkbox 1"),e.qZA(),e.TgZ(5,"nx-checkbox",2),e._uU(6,"Checkbox 2"),e.qZA(),e.TgZ(7,"nx-checkbox",3),e._uU(8,"Checkbox 3"),e.qZA()()),2&o&&(e.xp6(1),e.Q6J("size","small"))},dependencies:[a.Wi,a.n9,l.UD]});class k{constructor(o){this.fb=o,this.myFormGroup=this.fb.group({terms:[]})}}k.\u0275fac=function(o){return new(o||k)(e.Y36(c.QS))},k.\u0275cmp=e.Xpm({type:k,selectors:[["checkbox-group-reactive-example"]],decls:16,vars:7,consts:[[3,"formGroup"],["name","terms","formControlName","terms"],["value","Term 1",1,"nx-margin-bottom-s"],["value","Term 2",1,"nx-margin-bottom-s"],["value","Term 3"]],template:function(o,n){1&o&&(e.TgZ(0,"form",0)(1,"nx-checkbox-group",1)(2,"nx-label"),e._uU(3,"Select your choices"),e.qZA(),e.TgZ(4,"nx-checkbox",2),e._uU(5,"Checkbox 1"),e.qZA(),e.TgZ(6,"nx-checkbox",3),e._uU(7,"Checkbox 2"),e.qZA(),e.TgZ(8,"nx-checkbox",4),e._uU(9,"Checkbox 3"),e.qZA()(),e.TgZ(10,"p"),e._uU(11),e.ALo(12,"json"),e.qZA(),e.TgZ(13,"p"),e._uU(14),e.ALo(15,"json"),e.qZA()()),2&o&&(e.Q6J("formGroup",n.myFormGroup),e.xp6(11),e.hij("Form value: ",e.lcZ(12,3,n.myFormGroup.value),""),e.xp6(3),e.hij("Form status: ",e.lcZ(15,5,n.myFormGroup.status),""))},dependencies:[a.Wi,a.n9,l.UD,c._Y,c.JJ,c.JL,c.sg,c.u,i.Ts]});class d{constructor(o){this.fb=o,this.myFormGroup=this.fb.group({terms:[[],[c.kI.required,this.validateCheckboxes]]})}validateCheckboxes(o){return o.value.length<=2?{min:!1}:null}}d.\u0275fac=function(o){return new(o||d)(e.Y36(c.QS))},d.\u0275cmp=e.Xpm({type:d,selectors:[["checkbox-group-validation-example"]],decls:22,vars:8,consts:[[3,"formGroup"],["name","terms","formControlName","terms","required",""],[3,"size"],["appearance","text"],["value","Term 1",1,"nx-margin-bottom-s"],["value","Term 2",1,"nx-margin-bottom-s"],["value","Term 3",1,"nx-margin-bottom-s"],["value","Term 4",1,"nx-margin-bottom-s"],["value","Term 5"]],template:function(o,n){1&o&&(e.TgZ(0,"form",0)(1,"nx-checkbox-group",1)(2,"nx-label",2),e._uU(3,"Select your choices"),e.qZA(),e.TgZ(4,"nx-error",3),e._uU(5," Please select at least 3 checkboxes. "),e.qZA(),e.TgZ(6,"nx-checkbox",4),e._uU(7,"Checkbox 1"),e.qZA(),e.TgZ(8,"nx-checkbox",5),e._uU(9,"Checkbox 2"),e.qZA(),e.TgZ(10,"nx-checkbox",6),e._uU(11,"Checkbox 3"),e.qZA(),e.TgZ(12,"nx-checkbox",7),e._uU(13,"Checkbox 4"),e.qZA(),e.TgZ(14,"nx-checkbox",8),e._uU(15,"Checkbox 5"),e.qZA()(),e.TgZ(16,"p"),e._uU(17),e.ALo(18,"json"),e.qZA(),e.TgZ(19,"p"),e._uU(20),e.ALo(21,"json"),e.qZA()()),2&o&&(e.Q6J("formGroup",n.myFormGroup),e.xp6(2),e.Q6J("size","small"),e.xp6(15),e.hij("Form value: ",e.lcZ(18,4,n.myFormGroup.value),""),e.xp6(3),e.hij("Form status: ",e.lcZ(21,6,n.myFormGroup.status),""))},dependencies:[a.Wi,a.n9,l.UD,l.vV,c._Y,c.JJ,c.JL,c.Q7,c.sg,c.u,i.Ts]});class _{}_.\u0275fac=function(o){return new(o||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["checkbox-label-size-example"]],decls:5,vars:0,consts:[[1,"nx-margin-bottom-s"],["labelSize","large"]],template:function(o,n){1&o&&(e.TgZ(0,"form")(1,"nx-checkbox",0),e._uU(2,"Check me."),e.qZA(),e.TgZ(3,"nx-checkbox",1),e._uU(4,"Check me."),e.qZA()())},dependencies:[a.Wi,c._Y,c.JL,c.F]});class C{constructor(){this.checkboxes=["checkbox 1"]}}function L(t,o){if(1&t&&(e.TgZ(0,"pre"),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Oqu(n.logMessage)}}C.\u0275fac=function(o){return new(o||C)},C.\u0275cmp=e.Xpm({type:C,selectors:[["checkbox-negative-example"]],decls:13,vars:1,consts:[[1,"docs-inverse-container"],["negative","true","checked","true"],["negative","true",3,"ngModel","ngModelChange"],["value","checkbox 1",1,"nx-margin-bottom-s"],["value","checkbox 2",1,"nx-margin-bottom-s"],["value","checkbox 3","disabled","true"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"nx-checkbox",1),e._uU(2,"I'm a single checkbox"),e.qZA(),e._UZ(3,"br"),e.TgZ(4,"nx-checkbox-group",2),e.NdJ("ngModelChange",function(m){return n.checkboxes=m}),e.TgZ(5,"nx-label"),e._uU(6,"This is a nx-checkbox-group"),e.qZA(),e.TgZ(7,"nx-checkbox",3),e._uU(8,"Checkbox 1"),e.qZA(),e.TgZ(9,"nx-checkbox",4),e._uU(10,"Checkbox 2"),e.qZA(),e.TgZ(11,"nx-checkbox",5),e._uU(12,"Checkbox 3"),e.qZA()()()),2&o&&(e.xp6(4),e.Q6J("ngModel",n.checkboxes))},dependencies:[a.Wi,a.n9,l.UD,c.JJ,c.On]});class Z{constructor(){this.logMessage="",this.messages=[]}log(o){this.messages.push(o),this.logMessage=this.messages.join("\n")}}Z.\u0275fac=function(o){return new(o||Z)},Z.\u0275cmp=e.Xpm({type:Z,selectors:[["checkbox-outputs-example"]],decls:7,vars:1,consts:[[1,"nx-margin-bottom-s",3,"checkboxChange","checkedChange","indeterminateChange"],["checkboxTest",""],["nxButton","small","type","button",3,"click"],[4,"ngIf"]],template:function(o,n){if(1&o){const s=e.EpF();e.TgZ(0,"nx-checkbox",0,1),e.NdJ("checkboxChange",function(){return n.log("checkbox change occured")})("checkedChange",function(){return n.log("checked change occured")})("indeterminateChange",function(){return n.log("indeterminate change occured")}),e._uU(2,"Check me."),e.qZA(),e.TgZ(3,"button",2),e.NdJ("click",function(){e.CHM(s);const F=e.MAs(1);return e.KtG(F.indeterminate=!F.indeterminate)}),e._uU(4," Toggle Indeterminate\n"),e.qZA(),e._UZ(5,"br"),e.YNc(6,L,2,1,"pre",3)}2&o&&(e.xp6(6),e.Q6J("ngIf",n.logMessage))},dependencies:[a.Wi,i.O5,p.XV]});class f{constructor(o){this.fb=o,this.testForm=this.fb.group({checkboxTestReactive:[!1,c.kI.requiredTrue]})}}f.\u0275fac=function(o){return new(o||f)(e.Y36(c.QS))},f.\u0275cmp=e.Xpm({type:f,selectors:[["checkbox-reactive-example"]],decls:9,vars:7,consts:[[3,"formGroup"],["formControlName","checkboxTestReactive"]],template:function(o,n){1&o&&(e.TgZ(0,"form",0)(1,"nx-checkbox",1),e._uU(2,"Check me."),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.ALo(5,"json"),e.qZA(),e.TgZ(6,"p"),e._uU(7),e.ALo(8,"json"),e.qZA()()),2&o&&(e.Q6J("formGroup",n.testForm),e.xp6(4),e.hij("Form value: ",e.lcZ(5,3,n.testForm.value),""),e.xp6(3),e.hij("Form status: ",e.lcZ(8,5,n.testForm.status),""))},dependencies:[a.Wi,c._Y,c.JJ,c.JL,c.sg,c.u,i.Ts]});class T{constructor(){this.checkedRaw=!1}}T.\u0275fac=function(o){return new(o||T)},T.\u0275cmp=e.Xpm({type:T,selectors:[["checkbox-simple-binding-example"]],decls:4,vars:2,consts:[[1,"nx-margin-bottom-s",3,"checked","checkedChange"]],template:function(o,n){1&o&&(e.TgZ(0,"form")(1,"nx-checkbox",0),e.NdJ("checkedChange",function(m){return n.checkedRaw=m}),e._uU(2,"Check me."),e.qZA(),e._uU(3),e.qZA()),2&o&&(e.xp6(1),e.Q6J("checked",n.checkedRaw),e.xp6(2),e.hij(" Current Value: ",n.checkedRaw,"\n"))},dependencies:[a.Wi,c._Y,c.JL,c.F]});class v{}v.\u0275fac=function(o){return new(o||v)},v.\u0275cmp=e.Xpm({type:v,selectors:[["checkbox-states-example"]],decls:24,vars:7,consts:[[1,"nx-margin-bottom-s"],[1,"nx-margin-bottom-s",3,"checked"],[1,"nx-margin-bottom-s",3,"disabled"],[1,"nx-margin-bottom-s",3,"checked","disabled"],[1,"nx-margin-bottom-s",3,"indeterminate"],[3,"indeterminate","disabled"]],template:function(o,n){1&o&&(e.TgZ(0,"nx-checkbox",0),e._uU(1," Default"),e._UZ(2,"br"),e._uU(3," The box is left unchecked.\n"),e.qZA(),e.TgZ(4,"nx-checkbox",1),e._uU(5," Checked"),e._UZ(6,"br"),e._uU(7," An action or item is selected.\n"),e.qZA(),e.TgZ(8,"nx-checkbox",2),e._uU(9," Disabled"),e._UZ(10,"br"),e._uU(11," The checkbox is inactive due to previously checked or unchecked boxes.\n"),e.qZA(),e.TgZ(12,"nx-checkbox",3),e._uU(13," Checked & disabled"),e._UZ(14,"br"),e._uU(15," An action or item has been pre-selected due to previously checked or unchecked boxes.\n"),e.qZA(),e.TgZ(16,"nx-checkbox",4),e._uU(17," Indeterminate"),e._UZ(18,"br"),e._uU(19,' If all subordinate boxes are checked, the "mother checkbox" may be as well. But if only _some_ of them are, it\'s state is indeterminate, i.e. partially checked. This may come in handy if you work with nested checkboxes.\n'),e.qZA(),e.TgZ(20,"nx-checkbox",5),e._uU(21," Indeterminate & disabled"),e._UZ(22,"br"),e._uU(23," The box is indeterminate and can not be interacted with directly, but only via checking all of the subordinate boxes nested below.\n"),e.qZA()),2&o&&(e.xp6(4),e.Q6J("checked",!0),e.xp6(4),e.Q6J("disabled",!0),e.xp6(4),e.Q6J("checked",!0)("disabled",!0),e.xp6(4),e.Q6J("indeterminate",!0),e.xp6(4),e.Q6J("indeterminate",!0)("disabled",!0))},dependencies:[a.Wi]});class U{constructor(){this.checked=!1}}U.\u0275fac=function(o){return new(o||U)},U.\u0275cmp=e.Xpm({type:U,selectors:[["checkbox-template-driven-example"]],decls:4,vars:2,consts:[["name","checkboxTestTemplate",1,"nx-margin-bottom-s",3,"ngModel","ngModelChange"]],template:function(o,n){1&o&&(e.TgZ(0,"form")(1,"nx-checkbox",0),e.NdJ("ngModelChange",function(m){return n.checked=m}),e._uU(2,"Check me."),e.qZA(),e._uU(3),e.qZA()),2&o&&(e.xp6(1),e.Q6J("ngModel",n.checked),e.xp6(2),e.hij(" Current Value: ",n.checked,"\n"))},dependencies:[a.Wi,c._Y,c.JJ,c.JL,c.On,c.F]});class A{static components(){return{"checkbox-group-basic":x,"checkbox-group-dynamic":u,"checkbox-group-horizontal":h,"checkbox-group-inheritance":b,"checkbox-group-label-size":g,"checkbox-group-reactive":k,"checkbox-group-validation":d,"checkbox-label-size":_,"checkbox-negative":C,"checkbox-outputs":Z,"checkbox-reactive":f,"checkbox-simple-binding":T,"checkbox-states":v,"checkbox-template-driven":U}}}A.\u0275fac=function(o){return new(o||A)},A.\u0275mod=e.oAB({type:A}),A.\u0275inj=e.cJS({imports:[a.R0,q.f]})},9508:(G,E,r)=>{r.d(E,{f:()=>p});var a=r(6895),q=r(4006),e=r(690),l=r(1486),c=r(9561),i=r(4188),x=r(4650);class p{}p.\u0275fac=function(J){return new(J||p)},p.\u0275mod=x.oAB({type:p}),p.\u0275inj=x.cJS({imports:[a.ez,q.u5,q.UX,e.ru,i.X,l.K,c.TW]})}}]);