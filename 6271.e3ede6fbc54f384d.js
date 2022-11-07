"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[6271],{6271:(w,p,r)=>{r.r(p),r.d(p,{NaturalExamplesModule:()=>v});var i=r(4619),s=r(6942),u=r(5602),f=r(9508),n=r(4650),m=r(6566),a=r(4006);let d=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["natural-language-form-basic-example"]],decls:7,vars:0,consts:[["nxLabel","Provide this required field"],["nxInput","","ngModel","","required",""],["nxError",""]],template:function(o,l){1&o&&(n.TgZ(0,"nx-natural-language-form"),n._uU(1," Here is a word "),n.TgZ(2,"nx-word",0),n._UZ(3,"input",1),n.TgZ(4,"div",2),n._uU(5,"This field is required."),n.qZA()(),n._uU(6," with some following copy.\n"),n.qZA())},dependencies:[u.mr,u.u7,m.Sr,s.aP,a.Fj,a.JJ,a.Q7,a.On]}),e})();var g=r(6895),T=r(690);function U(e,t){1&e&&(n.TgZ(0,"div",6),n._uU(1," This field is required. "),n.qZA())}function A(e,t){1&e&&(n.TgZ(0,"div",6),n._uU(1," Only numbers are allowed. "),n.qZA())}let x=(()=>{class e{constructor(o){this.fb=o,this.naturalForm=this.fb.group({who:new a.p4("",[a.kI.required]),city:new a.p4("",[a.kI.required]),spots:new a.p4("",[a.kI.pattern("[0-9]*"),a.kI.required])})}validate(){Object.values(this.naturalForm.controls).forEach(o=>{o?.markAsTouched({onlySelf:!0})})}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(a.QS))},e.\u0275cmp=n.Xpm({type:e,selectors:[["natural-language-form-extended-example"]],decls:36,vars:9,consts:[[3,"formGroup"],["nxSize","long","nxLabel","Always a label"],["formControlName","who"],["nxValue","student"],["nxValue","philosopher"],["nxValue","sailor"],["nxError",""],["nxSize","short","nxLabel","Always a label"],["nxInput","","formControlName","city"],["nxSize","regular","nxLabel","Always a label"],["nxInput","","formControlName","spots"],["nxError","",4,"ngIf"],["nxButton","","type","submit",3,"click"]],template:function(o,l){1&o&&(n.TgZ(0,"form")(1,"nx-natural-language-form",0)(2,"span"),n._uU(3,"I want to be"),n.qZA(),n.TgZ(4,"nx-word",1)(5,"nx-dropdown",2)(6,"nx-dropdown-item",3),n._uU(7,"a Student"),n.qZA(),n.TgZ(8,"nx-dropdown-item",4),n._uU(9,"a Philosopher"),n.qZA(),n.TgZ(10,"nx-dropdown-item",5),n._uU(11,"a Sailor"),n.qZA()(),n.TgZ(12,"div",6),n._uU(13,"We need to know about the type of role you want."),n.qZA()(),n.TgZ(14,"span"),n._uU(15,"and visit the city of"),n.qZA(),n.TgZ(16,"nx-word",7),n._UZ(17,"input",8),n.TgZ(18,"div",6),n._uU(19,"This field is required."),n.qZA()(),n.TgZ(20,"span"),n._uU(21,"and see"),n.qZA(),n.TgZ(22,"nx-word",9),n._UZ(23,"input",10),n.YNc(24,U,2,0,"div",11),n.YNc(25,A,2,0,"div",11),n.qZA(),n.TgZ(26,"span"),n._uU(27," nice spots."),n.qZA()(),n.TgZ(28,"button",12),n.NdJ("click",function(){return l.validate()}),n._uU(29,"submit"),n.qZA()(),n.TgZ(30,"p"),n._uU(31),n.ALo(32,"json"),n._UZ(33,"br"),n._uU(34),n.ALo(35,"json"),n.qZA()),2&o&&(n.xp6(1),n.Q6J("formGroup",l.naturalForm),n.xp6(23),n.Q6J("ngIf",l.naturalForm.controls.spots.hasError("required")),n.xp6(1),n.Q6J("ngIf",l.naturalForm.controls.spots.hasError("pattern")),n.xp6(6),n.hij(" Form value: ",n.lcZ(32,5,l.naturalForm.value),""),n.xp6(3),n.hij(" Form status: ",n.lcZ(35,7,l.naturalForm.status),"\n"))},dependencies:[u.mr,u.u7,i.Uu,i.cp,m.Sr,s.aP,g.O5,a._Y,a.Fj,a.JJ,a.JL,a.F,a.sg,a.u,T.XV,g.Ts]}),e})(),c=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["natural-language-form-negative-example"]],decls:6,vars:0,consts:[[1,"docs-inverse-container"],["nxNegative","true"],["nxLabel","Always a label"],["nxInput",""]],template:function(o,l){1&o&&(n.TgZ(0,"div",0)(1,"nx-natural-language-form",1),n._uU(2," Here is a word "),n.TgZ(3,"nx-word",2),n._UZ(4,"input",3),n._uU(5,". "),n.qZA()()())},dependencies:[u.mr,u.u7,s.aP]}),e})(),Z=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["natural-language-form-sizes-example"]],decls:44,vars:0,consts:[["nxLabel","Provide this required field"],["nxInput","","ngModel","","required",""],["nxError",""],["nxSize","long","nxLabel","Always a label"],["required","","ngModel",""],["nxValue","option1"],["nxValue","option2"],["nxValue","option3"],["nxValue","option4"],["nxValue","option5"],["size","small"]],template:function(o,l){1&o&&(n.TgZ(0,"nx-natural-language-form"),n._uU(1," This is a large NLF "),n.TgZ(2,"nx-word",0),n._UZ(3,"input",1),n.TgZ(4,"div",2),n._uU(5,"This field is required."),n.qZA()(),n._uU(6," with "),n.TgZ(7,"nx-word",3)(8,"nx-dropdown",4)(9,"nx-dropdown-item",5),n._uU(10,"Option 1"),n.qZA(),n.TgZ(11,"nx-dropdown-item",6),n._uU(12,"Option 2"),n.qZA(),n.TgZ(13,"nx-dropdown-item",7),n._uU(14,"Option 3"),n.qZA(),n.TgZ(15,"nx-dropdown-item",8),n._uU(16,"Option 4"),n.qZA(),n.TgZ(17,"nx-dropdown-item",9),n._uU(18,"Option 5"),n.qZA()(),n.TgZ(19,"div",2),n._uU(20,"Please select an option"),n.qZA()(),n._uU(21," .\n"),n.qZA(),n.TgZ(22,"nx-natural-language-form",10),n._uU(23," This is a small NLF "),n.TgZ(24,"nx-word",0),n._UZ(25,"input",1),n.TgZ(26,"div",2),n._uU(27,"This field is required."),n.qZA()(),n._uU(28," with "),n.TgZ(29,"nx-word",3)(30,"nx-dropdown",4)(31,"nx-dropdown-item",5),n._uU(32,"Option 1"),n.qZA(),n.TgZ(33,"nx-dropdown-item",6),n._uU(34,"Option 2"),n.qZA(),n.TgZ(35,"nx-dropdown-item",7),n._uU(36,"Option 3"),n.qZA(),n.TgZ(37,"nx-dropdown-item",8),n._uU(38,"Option 4"),n.qZA(),n.TgZ(39,"nx-dropdown-item",9),n._uU(40,"Option 5"),n.qZA()(),n.TgZ(41,"div",2),n._uU(42,"Please select an option"),n.qZA()(),n._uU(43," .\n"),n.qZA())},dependencies:[u.mr,u.u7,i.Uu,i.cp,m.Sr,s.aP,a.Fj,a.JJ,a.Q7,a.On]}),e})(),v=(()=>{class e{static components(){return{"natural-language-form-basic":d,"natural-language-form-extended":x,"natural-language-form-negative":c,"natural-language-form-sizes":Z}}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[u.iQ,i._A,s.ZI,f.f]}),e})()}}]);