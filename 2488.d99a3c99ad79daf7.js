"use strict";(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[2488],{9508:(V,P,d)=>{d.d(P,{f:()=>e});var r=d(6895),h=d(4006),f=d(690),l=d(1486),M=d(9561),u=d(4188),s=d(4650);let e=(()=>{class g{}return g.\u0275fac=function(L){return new(L||g)},g.\u0275mod=s.oAB({type:g}),g.\u0275inj=s.cJS({imports:[r.ez,h.u5,h.UX,f.ru,u.X,l.K,M.TW]}),g})()},2488:(V,P,d)=>{d.r(P),d.d(P,{LicencePlateExamplesModule:()=>K});var r=d(4006),h=d(3099),f=d(4619),l=d(6566),M=d(4188),u=d(6942),s=d(6895),e=d(4650);const g=["*"],L=/^[A-Za-z\xc4\xd6\xdc\xe4\xf6\xfc]{1,3}-[A-Za-z]{1,2} \d{1,4}[EHeh]?$/,E=/^.+$/,U={de_standard:L,de_special:/^[\dA-Za-z\xc4\xd6\xdc\xe4\xf6\xfc]{1,3}[ -]?[\dA-Za-z]{1,5}[ -]?[\dA-Za-z]{1,5}$/,de_season:L,other:E,euro:E};function N(n){return o=>U[n].test(o.value)?null:{nxLicensePlateError:!0}}let m=(()=>{class n{constructor(){this.type="other"}validate(t){return N(this.type)(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.lG2({type:n,selectors:[["","nxLicensePlate",""]],inputs:{type:["nxLicensePlate","type"]},features:[e._Bn([{provide:r.Cf,useExisting:n,multi:!0}])]}),n})(),_=(()=>{class n{constructor(t){this._formField=t}get _disabled(){var t;return null===(t=this._formField._control)||void 0===t?void 0:t.disabled}get _hasOutline(){return"outline"===this._formField.appearance}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.VM))},n.\u0275cmp=e.Xpm({type:n,selectors:[["nx-licence-plate-euro-prefix"]],hostVars:4,hostBindings:function(t,a){2&t&&e.ekj("is-disabled",a._disabled)("has-outline",a._hasOutline)},ngContentSelectors:g,decls:1,vars:0,template:function(t,a){1&t&&(e.F$t(),e.Hsn(0))},styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;text-transform:uppercase;overflow:hidden;background-color:var(--licence-plate-prefix-background);height:100%;min-width:24px;max-width:40px;border-radius:4px;padding:0 4px;font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing);color:var(--licence-plate-prefix-color)}.has-outline[_nghost-%COMP%]{margin-left:-7px;border-radius:3px 0 0 3px}.is-disabled[_nghost-%COMP%]{-webkit-text-fill-color:var(--licence-plate-prefix-color);color:var(--licence-plate-prefix-color);background-color:var(--formfield-disabled-border-color)}"],changeDetection:0}),n})(),y=(()=>{class n{constructor(t){this._formField=t,this.startMonth=1,this.endMonth=1}get _disabled(){var t;return null===(t=this._formField._control)||void 0===t?void 0:t.disabled}get _hasOutline(){return"outline"===this._formField.appearance}_format(t){return"number"!=typeof t?"":t>=10?t.toString():"0"+t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.VM))},n.\u0275cmp=e.Xpm({type:n,selectors:[["nx-licence-plate-season-suffix"]],hostVars:4,hostBindings:function(t,a){2&t&&e.ekj("is-disabled",a._disabled)("has-outline",a._hasOutline)},inputs:{startMonth:"startMonth",endMonth:"endMonth"},decls:4,vars:2,template:function(t,a){1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA(),e.TgZ(2,"span"),e._uU(3),e.qZA()),2&t&&(e.xp6(1),e.Oqu(a._format(a.startMonth)),e.xp6(2),e.Oqu(a._format(a.endMonth)))},styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;font-size:var(--paragraph-05-font-size);line-height:var(--paragraph-05-line-height);font-weight:var(--paragraph-05-font-weight);letter-spacing:var(--paragraph-05-letter-spacing);line-height:14px;color:var(--text-01)}span[_ngcontent-%COMP%]{width:14px}span[_ngcontent-%COMP%]:first-child{border-bottom:1px solid}.has-outline[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing);line-height:16px}.is-disabled[_nghost-%COMP%]   span[_ngcontent-%COMP%]{border-color:var(--formfield-disabled-border-color)}"],changeDetection:0}),n})(),D=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[s.ez]}),n})();var R=d(9508),c=d(9561),x=d(7823);let C=(()=>{class n{constructor(){this.disabled=!0,this.value=""}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["licence-plate-disabled-example"]],decls:14,vars:5,consts:[["nxLayout","grid maxwidth"],["nxRow",""],["nxCol","12,12,10,6","nxColOffset","0,0,1,3"],["nxLabel","License Plate"],["nxFormfieldPrefix",""],["nxInput","","nxLicensePlate","de_standard",3,"disabled","ngModel","ngModelChange"],["nxFormfieldSuffix","",3,"startMonth","endMonth"],["nxFormfieldHint",""],["nxFormfieldError",""],["name","disabled",1,"nx-margin-top-s",3,"ngModel","ngModelChange"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3)(4,"nx-licence-plate-euro-prefix",4),e._uU(5,"D"),e.qZA(),e.TgZ(6,"input",5),e.NdJ("ngModelChange",function(i){return a.value=i}),e.qZA(),e._UZ(7,"nx-licence-plate-season-suffix",6),e.TgZ(8,"span",7),e._uU(9,"M-AA 1234"),e.qZA(),e.TgZ(10,"nx-error",8),e._uU(11,'Please enter a license plate number in the format "M-AA 1234".'),e.qZA()(),e.TgZ(12,"nx-checkbox",9),e.NdJ("ngModelChange",function(i){return a.disabled=i}),e._uU(13," Disabled "),e.qZA()()()()),2&t&&(e.xp6(6),e.Q6J("disabled",a.disabled)("ngModel",a.value),e.xp6(1),e.Q6J("startMonth",1)("endMonth",10),e.xp6(5),e.Q6J("ngModel",a.disabled))},dependencies:[m,_,y,r.Fj,r.JJ,r.On,c.RH,c.yI,c.s7,h.Wi,x.vV,l.VM,l.BE,l.Sr,l.W7,l.J2,u.aP]}),n})();function q(n,o){if(1&n&&(e.TgZ(0,"nx-dropdown-item",10),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.Q6J("nxValue",t.country),e.xp6(1),e.hij(" ",t.countryName," ")}}let Z=(()=>{class n{constructor(){this.country="A",this.countriesList=[{country:"A",countryName:"Austria"},{country:"B",countryName:"Belgium"},{country:"BG",countryName:"Bulgaria"},{country:"HR",countryName:"Croatia"},{country:"CY",countryName:"Cyprus"},{country:"CZ",countryName:"Czech Republic"},{country:"DK",countryName:"Denmark"},{country:"EST",countryName:"Estonia"},{country:"FIN",countryName:"Finland"},{country:"F",countryName:"France"},{country:"GR",countryName:"Greece"},{country:"H",countryName:"Hungary"},{country:"IRL",countryName:"Ireland"},{country:"I",countryName:"Italy"},{country:"LV",countryName:"Latvia"},{country:"LT",countryName:"Lithuania"},{country:"L",countryName:"Luxembourg"},{country:"M",countryName:"Malta"},{country:"NL",countryName:"Netherlands"},{country:"N",countryName:"Norway"},{country:"PL",countryName:"Poland"},{country:"P",countryName:"Portugal"},{country:"RO",countryName:"Romania"},{country:"SK",countryName:"Slovakia"},{country:"SLO",countryName:"Slovenia"},{country:"E",countryName:"Spain"},{country:"S",countryName:"Sweden"},{country:"UA",countryName:"Ukraine"}],this.value=""}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["licence-plate-euro-example"]],decls:14,vars:4,consts:[["nxLayout","grid maxwidth"],["nxRow",""],["nxCol","12,12,10,6","nxColOffset","0,0,1,3"],["nxLabel","Country"],[3,"nxValue","nxValueChange"],[3,"nxValue",4,"ngFor","ngForOf"],["nxLabel","License Plate"],["nxFormfieldPrefix",""],["nxInput","","nxLicensePlate","euro",3,"ngModel","ngModelChange"],["nxFormfieldError",""],[3,"nxValue"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3)(4,"nx-dropdown",4),e.NdJ("nxValueChange",function(i){return a.country=i}),e.YNc(5,q,2,2,"nx-dropdown-item",5),e.qZA()()()(),e.TgZ(6,"div",1)(7,"div",2)(8,"nx-formfield",6)(9,"nx-licence-plate-euro-prefix",7),e._uU(10),e.qZA(),e.TgZ(11,"input",8),e.NdJ("ngModelChange",function(i){return a.value=i}),e.qZA(),e.TgZ(12,"nx-error",9),e._uU(13,"Please enter a valid license plate number."),e.qZA()()()()()),2&t&&(e.xp6(4),e.Q6J("nxValue",a.country),e.xp6(1),e.Q6J("ngForOf",a.countriesList),e.xp6(5),e.Oqu(a.country),e.xp6(1),e.Q6J("ngModel",a.value))},dependencies:[m,_,s.sg,r.Fj,r.JJ,r.On,c.RH,c.yI,c.s7,x.vV,f.Uu,f.cp,l.VM,l.Sr,l.W7,u.aP]}),n})();function I(n,o){if(1&n&&(e.TgZ(0,"nx-dropdown-item",15),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.Q6J("nxValue",t.type),e.xp6(1),e.Oqu(t.typeName)}}function Q(n,o){if(1&n&&(e.TgZ(0,"nx-dropdown-item",15),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.Q6J("nxValue",t.month),e.xp6(1),e.hij(" ",t.monthName," ")}}function H(n,o){if(1&n&&(e.TgZ(0,"nx-dropdown-item",15),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.Q6J("nxValue",t.month),e.xp6(1),e.hij(" ",t.monthName," ")}}function B(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"nx-formfield",16)(2,"nx-dropdown",17),e.NdJ("nxValueChange",function(p){e.CHM(t);const i=e.oxw();return e.KtG(i.licencePlateModel.startDate=p)}),e.YNc(3,Q,2,2,"nx-dropdown-item",5),e.qZA()(),e.TgZ(4,"nx-formfield",18)(5,"nx-dropdown",17),e.NdJ("nxValueChange",function(p){e.CHM(t);const i=e.oxw();return e.KtG(i.licencePlateModel.endDate=p)}),e.YNc(6,H,2,2,"nx-dropdown-item",5),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(2),e.Q6J("nxValue",t.licencePlateModel.startDate),e.xp6(1),e.Q6J("ngForOf",t.monthsOfYearList),e.xp6(2),e.Q6J("nxValue",t.licencePlateModel.endDate),e.xp6(1),e.Q6J("ngForOf",t.monthsOfYearList)}}function j(n,o){if(1&n&&(e.TgZ(0,"nx-dropdown-item",15),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.Q6J("nxValue",t.country),e.xp6(1),e.hij(" ",t.countryName," ")}}function Y(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"nx-formfield",19)(2,"nx-dropdown",17),e.NdJ("nxValueChange",function(p){e.CHM(t);const i=e.oxw();return e.KtG(i.licencePlateModel.country=p)}),e.YNc(3,j,2,2,"nx-dropdown-item",5),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(2),e.Q6J("nxValue",t.licencePlateModel.country),e.xp6(1),e.Q6J("ngForOf",t.countriesList)}}function W(n,o){if(1&n&&(e.TgZ(0,"nx-licence-plate-euro-prefix",20),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij(" ",t.licencePlateModel.country," ")}}function X(n,o){if(1&n&&e._UZ(0,"nx-licence-plate-season-suffix",21),2&n){const t=e.oxw();e.Q6J("startMonth",t.licencePlateModel.startDate)("endMonth",t.licencePlateModel.endDate)}}let A=(()=>{class n{constructor(){this.licencePlateModel={type:"de_standard",country:"D",value:"",startDate:1,endDate:2},this.licencePlateTypes=[{type:"de_standard",typeName:"Standard (Germany)"},{type:"de_season",typeName:"Seasonal (Germany)"},{type:"de_special",typeName:"Special (Germany)"},{type:"euro",typeName:"Euro"},{type:"other",typeName:"Other"}],this.monthsOfYearList=[{month:1,monthName:"January "},{month:2,monthName:"February"},{month:3,monthName:"March"},{month:4,monthName:"April"},{month:5,monthName:"May"},{month:6,monthName:"June"},{month:7,monthName:"July"},{month:8,monthName:"August"},{month:9,monthName:"September "},{month:10,monthName:"October"},{month:11,monthName:"November"},{month:12,monthName:"December"}],this.countriesList=[{country:"A",countryName:"Austria"},{country:"B",countryName:"Belgium"},{country:"BG",countryName:"Bulgaria"},{country:"HR",countryName:"Croatia"},{country:"CY",countryName:"Cyprus"},{country:"CZ",countryName:"Czech Republic"},{country:"DK",countryName:"Denmark"},{country:"EST",countryName:"Estonia"},{country:"FIN",countryName:"Finland"},{country:"F",countryName:"France"},{country:"GR",countryName:"Greece"},{country:"H",countryName:"Hungary"},{country:"IRL",countryName:"Ireland"},{country:"I",countryName:"Italy"},{country:"LV",countryName:"Latvia"},{country:"LT",countryName:"Lithuania"},{country:"L",countryName:"Luxembourg"},{country:"M",countryName:"Malta"},{country:"NL",countryName:"Netherlands"},{country:"N",countryName:"Norway"},{country:"PL",countryName:"Poland"},{country:"P",countryName:"Portugal"},{country:"RO",countryName:"Romania"},{country:"SK",countryName:"Slovakia"},{country:"SLO",countryName:"Slovenia"},{country:"E",countryName:"Spain"},{country:"S",countryName:"Sweden"},{country:"UA",countryName:"Ukraine"}]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["licence-plate-expert-example"]],decls:22,vars:11,consts:[["nxLayout","grid maxwidth"],["nxRow",""],["nxCol","12,12,10,4","nxColOffset","0,0,1,4"],["nxLabel","Licence plate types","appearance","outline","nxFloatLabel","always"],["placeholder","Choose a type",3,"nxValue","nxValueChange"],[3,"nxValue",4,"ngFor","ngForOf"],[4,"ngIf"],["nxLabel","License Plate","appearance","outline","nxFloatLabel","always"],["nxFormfieldPrefix","",4,"ngIf"],["nxInput","",3,"nxLicensePlate","ngModel"],["nxFormfieldSuffix","",3,"startMonth","endMonth",4,"ngIf"],["nxFormfieldHint",""],["nxFormfieldError",""],["nxLayout","grid maxwidth",1,"nx-margin-top-s"],["nxRow","",1,"example-controls"],[3,"nxValue"],["nxLabel","Start date","appearance","outline","nxFloatLabel","always"],[3,"nxValue","nxValueChange"],["nxLabel","End date","appearance","outline","nxFloatLabel","always"],["nxLabel","Country","appearance","outline","nxFloatLabel","always"],["nxFormfieldPrefix",""],["nxFormfieldSuffix","",3,"startMonth","endMonth"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3)(4,"nx-dropdown",4),e.NdJ("nxValueChange",function(i){return a.licencePlateModel.type=i}),e.YNc(5,I,2,2,"nx-dropdown-item",5),e.qZA()(),e.YNc(6,B,7,4,"div",6),e.YNc(7,Y,4,2,"div",6),e.TgZ(8,"nx-formfield",7),e.YNc(9,W,2,1,"nx-licence-plate-euro-prefix",8),e._UZ(10,"input",9),e.YNc(11,X,1,2,"nx-licence-plate-season-suffix",10),e.TgZ(12,"span",11),e._uU(13,"M-AA 1234"),e.qZA(),e.TgZ(14,"nx-error",12),e._uU(15,'Please enter a license plate number in the format "M-AA 1234".'),e.qZA()()()()(),e.TgZ(16,"div",13)(17,"div",14)(18,"div",2)(19,"pre"),e._uU(20),e.ALo(21,"json"),e.qZA()()()()),2&t&&(e.xp6(4),e.Q6J("nxValue",a.licencePlateModel.type),e.xp6(1),e.Q6J("ngForOf",a.licencePlateTypes),e.xp6(1),e.Q6J("ngIf","de_season"===a.licencePlateModel.type),e.xp6(1),e.Q6J("ngIf","euro"===a.licencePlateModel.type),e.xp6(2),e.Q6J("ngIf","other"!==a.licencePlateModel.type),e.xp6(1),e.Q6J("nxLicensePlate",a.licencePlateModel.type)("ngModel",a.licencePlateModel.value),e.xp6(1),e.Q6J("ngIf","de_season"===a.licencePlateModel.type),e.xp6(9),e.hij("Licence plate model value: ",e.lcZ(21,9,a.licencePlateModel),""))},dependencies:[m,_,y,s.sg,s.O5,r.Fj,r.JJ,r.On,c.RH,c.yI,c.s7,x.vV,f.Uu,f.cp,l.VM,l.BE,l.Sr,l.W7,l.J2,u.aP,s.Ts]}),n})(),T=(()=>{class n{constructor(){this.disabled=!1,this.readonly=!1,this.value=""}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["licence-plate-expert-states-example"]],decls:16,vars:7,consts:[["nxLayout","grid maxwidth"],["nxRow",""],["nxCol","12,12,10,4","nxColOffset","0,0,1,4"],["nxLabel","License Plate","appearance","outline","nxFloatLabel","always"],["nxFormfieldPrefix",""],["nxInput","","nxLicensePlate","de_standard",3,"disabled","readonly","ngModel","ngModelChange"],["nxFormfieldSuffix","",3,"startMonth","endMonth"],["nxFormfieldHint",""],["nxFormfieldError",""],["name","disabled",1,"nx-margin-top-s",3,"ngModel","ngModelChange"],["name","readonly",1,"nx-margin-top-s",3,"ngModel","ngModelChange"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3)(4,"nx-licence-plate-euro-prefix",4),e._uU(5,"D"),e.qZA(),e.TgZ(6,"input",5),e.NdJ("ngModelChange",function(i){return a.value=i}),e.qZA(),e._UZ(7,"nx-licence-plate-season-suffix",6),e.TgZ(8,"span",7),e._uU(9,"M-AA 1234"),e.qZA(),e.TgZ(10,"nx-error",8),e._uU(11,'Please enter a license plate number in the format "M-AA 1234".'),e.qZA()(),e.TgZ(12,"nx-checkbox",9),e.NdJ("ngModelChange",function(i){return a.disabled=i}),e._uU(13," Disabled "),e.qZA(),e.TgZ(14,"nx-checkbox",10),e.NdJ("ngModelChange",function(i){return a.readonly=i}),e._uU(15," Readonly "),e.qZA()()()()),2&t&&(e.xp6(6),e.Q6J("disabled",a.disabled)("readonly",a.readonly)("ngModel",a.value),e.xp6(1),e.Q6J("startMonth",1)("endMonth",10),e.xp6(5),e.Q6J("ngModel",a.disabled),e.xp6(2),e.Q6J("ngModel",a.readonly))},dependencies:[m,_,y,r.Fj,r.JJ,r.On,c.RH,c.yI,c.s7,h.Wi,x.vV,l.VM,l.BE,l.Sr,l.W7,l.J2,u.aP]}),n})(),F=(()=>{class n{constructor(){this.model=""}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["licence-plate-ngmodel-example"]],decls:16,vars:4,consts:[["nxLayout","grid maxwidth"],["nxRow",""],["nxCol","12,12,10,6","nxColOffset","0,0,1,3"],["nxLabel","License Plate"],["nxFormfieldPrefix",""],["nxInput","","nxLicensePlate","de_standard",3,"ngModel","ngModelChange"],["nxFormfieldSuffix","",3,"startMonth","endMonth"],["nxFormfieldHint",""],["nxFormfieldError",""],["nxRow","",1,"example-controls"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3)(4,"nx-licence-plate-euro-prefix",4),e._uU(5,"D"),e.qZA(),e.TgZ(6,"input",5),e.NdJ("ngModelChange",function(i){return a.model=i}),e.qZA(),e._UZ(7,"nx-licence-plate-season-suffix",6),e.TgZ(8,"span",7),e._uU(9,"M-AA 1234"),e.qZA(),e.TgZ(10,"nx-error",8),e._uU(11,'Please enter a license plate number in the format "M-AA 1234".'),e.qZA()()()(),e.TgZ(12,"div",9)(13,"div",2)(14,"pre"),e._uU(15),e.qZA()()()()),2&t&&(e.xp6(6),e.Q6J("ngModel",a.model),e.xp6(1),e.Q6J("startMonth",1)("endMonth",10),e.xp6(8),e.hij("Licence plate value: ",a.model,""))},dependencies:[m,_,y,r.Fj,r.JJ,r.On,c.RH,c.yI,c.s7,x.vV,l.VM,l.BE,l.Sr,l.W7,l.J2,u.aP]}),n})(),J=(()=>{class n{constructor(){this.value=""}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["licence-plate-other-example"]],decls:7,vars:1,consts:[["nxLayout","grid maxwidth"],["nxRow",""],["nxCol","12,12,10,6","nxColOffset","0,0,1,3"],["nxLabel","License Plate"],["nxInput","","nxLicensePlate","other",3,"ngModel","ngModelChange"],["nxFormfieldError",""]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3)(4,"input",4),e.NdJ("ngModelChange",function(i){return a.value=i}),e.qZA(),e.TgZ(5,"nx-error",5),e._uU(6,"Please enter a license plate number."),e.qZA()()()()()),2&t&&(e.xp6(4),e.Q6J("ngModel",a.value))},dependencies:[m,r.Fj,r.JJ,r.On,c.RH,c.yI,c.s7,x.vV,l.VM,l.Sr,u.aP]}),n})(),w=(()=>{class n{constructor(){this.licencePlateForm=new r.nJ({licencePlateInput:new r.p4("",N("de_standard"))})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["licence-plate-reactive-example"]],decls:17,vars:4,consts:[["nxLayout","grid maxwidth"],["nxRow",""],["nxCol","12,12,10,6","nxColOffset","0,0,1,3"],[3,"formGroup"],["nxLabel","License Plate"],["nxFormfieldPrefix",""],["nxInput","","nxLicensePlate","de_standard","formControlName","licencePlateInput"],["nxFormfieldHint",""],["nxFormfieldError",""],["nxRow","",1,"example-controls","nx-margin-top-s"]],template:function(t,a){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3)(4,"nx-formfield",4)(5,"nx-licence-plate-euro-prefix",5),e._uU(6,"D"),e.qZA(),e._UZ(7,"input",6),e.TgZ(8,"span",7),e._uU(9,"M-AA 1234"),e.qZA(),e.TgZ(10,"nx-error",8),e._uU(11,'Please enter a license plate number in the format "M-AA 1234".'),e.qZA()()()()(),e.TgZ(12,"div",9)(13,"div",2)(14,"pre"),e._uU(15),e.ALo(16,"json"),e.qZA()()()()),2&t){let p;e.xp6(3),e.Q6J("formGroup",a.licencePlateForm),e.xp6(12),e.hij("Licence plate value: ",e.lcZ(16,2,null==(p=a.licencePlateForm.get("licencePlateInput"))?null:p.value),"")}},dependencies:[m,_,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,c.RH,c.yI,c.s7,x.vV,l.VM,l.BE,l.Sr,l.W7,u.aP,s.Ts]}),n})();function z(n,o){if(1&n&&(e.TgZ(0,"nx-dropdown-item",13),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.Q6J("nxValue",t.month),e.xp6(1),e.hij(" ",t.monthName," ")}}function G(n,o){if(1&n&&(e.TgZ(0,"nx-dropdown-item",13),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.Q6J("nxValue",t.month),e.xp6(1),e.hij(" ",t.monthName," ")}}let b=(()=>{class n{constructor(){this.monthsOfYearList=[{month:1,monthName:"January"},{month:2,monthName:"February"},{month:3,monthName:"March"},{month:4,monthName:"April"},{month:5,monthName:"May"},{month:6,monthName:"June"},{month:7,monthName:"July"},{month:8,monthName:"August"},{month:9,monthName:"September"},{month:10,monthName:"October"},{month:11,monthName:"November"},{month:12,monthName:"December"}],this.value=""}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["licence-plate-seasonal-example"]],decls:20,vars:7,consts:[["nxLayout","grid maxwidth"],["nxRow",""],["nxCol","12,12,10,6","nxColOffset","0,0,1,3"],["nxLabel","Start date"],[3,"nxValue","nxValueChange"],[3,"nxValue",4,"ngFor","ngForOf"],["nxLabel","End date"],["nxLabel","License Plate"],["nxFormfieldPrefix",""],["nxInput","","nxLicensePlate","de_season",3,"ngModel","ngModelChange"],["nxFormfieldSuffix","",3,"startMonth","endMonth"],["nxFormfieldHint",""],["nxFormfieldError",""],[3,"nxValue"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3)(4,"nx-dropdown",4),e.NdJ("nxValueChange",function(i){return a.startMonth=i}),e.YNc(5,z,2,2,"nx-dropdown-item",5),e.qZA()(),e.TgZ(6,"nx-formfield",6)(7,"nx-dropdown",4),e.NdJ("nxValueChange",function(i){return a.endMonth=i}),e.YNc(8,G,2,2,"nx-dropdown-item",5),e.qZA()()()(),e.TgZ(9,"div",1)(10,"div",2)(11,"nx-formfield",7)(12,"nx-licence-plate-euro-prefix",8),e._uU(13,"D"),e.qZA(),e.TgZ(14,"input",9),e.NdJ("ngModelChange",function(i){return a.value=i}),e.qZA(),e._UZ(15,"nx-licence-plate-season-suffix",10),e.TgZ(16,"span",11),e._uU(17,"M-AA 1234"),e.qZA(),e.TgZ(18,"nx-error",12),e._uU(19,'Please enter a license plate number in the format "M-AA 1234".'),e.qZA()()()()()),2&t&&(e.xp6(4),e.Q6J("nxValue",a.startMonth),e.xp6(1),e.Q6J("ngForOf",a.monthsOfYearList),e.xp6(2),e.Q6J("nxValue",a.endMonth),e.xp6(1),e.Q6J("ngForOf",a.monthsOfYearList),e.xp6(6),e.Q6J("ngModel",a.value),e.xp6(1),e.Q6J("startMonth",a.startMonth)("endMonth",a.endMonth))},dependencies:[m,_,y,s.sg,r.Fj,r.JJ,r.On,c.RH,c.yI,c.s7,x.vV,f.Uu,f.cp,l.VM,l.BE,l.Sr,l.W7,l.J2,u.aP]}),n})(),S=(()=>{class n{constructor(){this.value=""}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["licence-plate-special-example"]],decls:11,vars:1,consts:[["nxLayout","grid maxwidth"],["nxRow",""],["nxCol","12,12,10,6","nxColOffset","0,0,1,3"],["nxLabel","License Plate"],["nxFormfieldPrefix",""],["nxInput","","nxLicensePlate","de_special",3,"ngModel","ngModelChange"],["nxFormfieldHint",""],["nxFormfieldError",""]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3)(4,"nx-licence-plate-euro-prefix",4),e._uU(5,"D"),e.qZA(),e.TgZ(6,"input",5),e.NdJ("ngModelChange",function(i){return a.value=i}),e.qZA(),e.TgZ(7,"span",6),e._uU(8,"M-AA 1234"),e.qZA(),e.TgZ(9,"nx-error",7),e._uU(10,'Please enter a license plate number in the format "M-AA 1234".'),e.qZA()()()()()),2&t&&(e.xp6(6),e.Q6J("ngModel",a.value))},dependencies:[m,_,r.Fj,r.JJ,r.On,c.RH,c.yI,c.s7,x.vV,l.VM,l.BE,l.Sr,l.W7,u.aP]}),n})(),O=(()=>{class n{constructor(){this.value=""}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["licence-plate-standard-example"]],decls:11,vars:1,consts:[["nxLayout","grid maxwidth"],["nxRow",""],["nxCol","12,12,10,6","nxColOffset","0,0,1,3"],["nxLabel","License Plate"],["nxFormfieldPrefix",""],["nxInput","","nxLicensePlate","de_standard",3,"ngModel","ngModelChange"],["nxFormfieldHint",""],["nxFormfieldError",""]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3)(4,"nx-licence-plate-euro-prefix",4),e._uU(5,"D"),e.qZA(),e.TgZ(6,"input",5),e.NdJ("ngModelChange",function(i){return a.value=i}),e.qZA(),e.TgZ(7,"span",6),e._uU(8,"M-AA 1234"),e.qZA(),e.TgZ(9,"nx-error",7),e._uU(10,'Please enter a license plate number in the format "M-AA 1234".'),e.qZA()()()()()),2&t&&(e.xp6(6),e.Q6J("ngModel",a.value))},dependencies:[m,_,r.Fj,r.JJ,r.On,c.RH,c.yI,c.s7,x.vV,l.VM,l.BE,l.Sr,l.W7,u.aP]}),n})(),K=(()=>{class n{static components(){return{"licence-plate-standard":O,"licence-plate-seasonal":b,"licence-plate-special":S,"licence-plate-other":J,"licence-plate-euro":Z,"licence-plate-ngmodel":F,"licence-plate-reactive":w,"licence-plate-expert":A,"licence-plate-expert-states":T,"licence-plate-disabled":C}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[D,R.f,r.u5,r.UX,M.X,h.R0,f._A,l._0,u.ZI]}),n})()}}]);