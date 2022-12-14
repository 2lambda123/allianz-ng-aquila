(self.webpackChunkopensource_documentation=self.webpackChunkopensource_documentation||[]).push([[6609],{6609:(G,D,g)=>{"use strict";g.r(D),g.d(D,{MaskExamplesModule:()=>y});var A=g(6942),e=g(4650),d=g(4006),C=g(9850),b=g(8929),L=g(7625),w=g(1281),V=g(9521),k=g(6895),n=g(6566);const x={provide:d.JU,useExisting:(0,e.Gpc)(()=>M),multi:!0},a={provide:d.Cf,useExisting:(0,e.Gpc)(()=>M),multi:!0};let M=(()=>{class u{constructor(t){this._elementRef=t,this.cvaModelChange=new b.xQ,this._deactivateMask=!1,this._mask="",this._separators=["/","(",")",".",":","-"," ","+",","],this._dropSpecialCharacters=!1,this._validateMask=!0,this._onChangeCallback=s=>{},this._onTouchedCallback=()=>{},this._validatorOnChange=()=>{},this._afterInputHook=s=>{},this._beforePasteHook=s=>{}}set deactivateMask(t){const s=(0,w.Ig)(t);s!==this._deactivateMask&&(this._deactivateMask=s,this.updateValue(this._deactivateMask?this.getUnmaskedValue():this.getMaskedString(this._elementRef.nativeElement.value)),this._callOnChangeCallback())}get deactivateMask(){return this._deactivateMask}set mask(t){t||(t=""),t!==this._mask&&(this._mask=t,this.updateValue(this.getMaskedString(this._elementRef.nativeElement.value)),this._callOnChangeCallback(),this._validatorOnChange())}get mask(){return this._mask}set convertTo(t){this._convertTo=t,this.updateValue(this.getMaskedString(this._elementRef.nativeElement.value)),this._callOnChangeCallback()}get convertTo(){return this._convertTo}set separators(t){this._separators=t,this.updateValue(this.getMaskedString(this._elementRef.nativeElement.value)),this._validatorOnChange(),this._callOnChangeCallback()}get separators(){return this._separators}set dropSpecialCharacters(t){const s=(0,w.Ig)(t);s!==this._dropSpecialCharacters&&(this._dropSpecialCharacters=s,this.updateValue(this.getMaskedString(this._elementRef.nativeElement.value)),this._callOnChangeCallback())}get dropSpecialCharacters(){return this._dropSpecialCharacters}set validateMask(t){const s=(0,w.Ig)(t);s!==this._validateMask&&(this._validateMask=s,this._validatorOnChange())}get validateMask(){return this._validateMask}get elementRefValue(){return this._elementRef.nativeElement.value}_callOnChangeCallback(){this._onChangeCallback(this.dropSpecialCharacters?this.getUnmaskedValue():this._elementRef.nativeElement.value)}registerAfterInputHook(t){this._afterInputHook=t}registerBeforePasteHook(t){this._beforePasteHook=t}getUnmaskedValue(){return this.separators.reduce((s,i)=>s.split(i).join(""),this._elementRef.nativeElement.value)}setMask(t){t||(t=""),t!==this._mask&&(this._mask=t,this.updateValue(this.getMaskedString(this._elementRef.nativeElement.value)),this._validatorOnChange())}_onKeydown(t){const s=t.keyCode,i=t.target,c=this._elementRef.nativeElement.value;if(s===V.ZH||s===V.yY){const p=s===V.ZH?1:0,F=c.substring(i.selectionStart-p,i.selectionEnd-p+1),_=i.selectionStart===c.length-1+p;if(i.selectionStart!==i.selectionEnd){let I=i.selectionStart;for(;this.isSeparator(this.mask[I]);)I++;this._cursor={position:I}}else _?(this.updateValue(c.substring(0,c.length-1)),this._callOnChangeCallback(),t.preventDefault()):this.isSeparator(F)?(i.setSelectionRange(i.selectionStart-p,i.selectionEnd-p),t.preventDefault()):this._cursor={position:i.selectionStart-p}}else this._cursor={selectionStart:i.selectionStart,selectionEnd:i.selectionEnd}}_calculateCursorShift(t){let s=0,i=!1;for(this.isSeparator(this.mask[t+s])||(s++,i=!0);this.isSeparator(this.mask[t+s]);)s++;return i||s++,s}_isStringAllowed(t,s){return!!("0"===s&&/^\d$/.test(t)||"A"===s&&/^[\dA-Za-z]$/.test(t)||"S"===s&&/^[A-Za-z]$/.test(t))}_onInputChange(t){var s,i;const c=this._inputValue,p=t.target;let F=this.getMaskedString(p.value);if(this._deactivateMask)return F=p.value,this.updateValue(F),void this._callOnChangeCallback();if(this._pastedData)return this.updateValue(this._pastedData),p.setSelectionRange(this._cursor.position,this._cursor.position),this._pastedData=null,this._cursor=null,void this._callOnChangeCallback();if(c.length===this._mask.length&&F.length===this._mask.length&&c!==F&&this._cursor&&void 0!==this._cursor.selectionStart&&this._cursor.selectionStart===this._cursor.selectionEnd)return this._elementRef.nativeElement.value=this.getMaskedString(c),p.setSelectionRange(this._cursor.selectionStart,this._cursor.selectionEnd),void(this._cursor=null);if(this.updateValue(F),void 0!==(null===(s=this._cursor)||void 0===s?void 0:s.position))p.setSelectionRange(this._cursor.position,this._cursor.position),this._cursor=null;else if(void 0!==(null===(i=this._cursor)||void 0===i?void 0:i.selectionStart))if(c===p.value){let _=this._cursor.selectionStart;for(;this.isSeparator(this.mask[_]);)_++;p.setSelectionRange(_,_),this._cursor=null}else{const _=this._cursor.selectionStart+this._calculateCursorShift(this._cursor.selectionStart);p.setSelectionRange(_,_),this._cursor=null}this._afterInputHook(t),this._callOnChangeCallback()}_onPaste(t){const s=t.target,i=(t.clipboardData||window.clipboardData).getData("text"),c=s.selectionStart,p=s.selectionEnd,F=s.value;this._beforePasteHook(t);const _=this.getMaskedString(i,c);if(s.value.length===this._mask.length&&_.length>0&&c===p)return s.setSelectionRange(c,p),this._cursor=null,void t.preventDefault();const I=this.separators.reduce((N,O)=>N.split(O).join(""),_);let H=this.getMaskedString(F.substring(0,c)+I+F.substring(p,F.length));if(H.length>=this._mask.length){let N=c,O=1;do{H=this.getMaskedString(F.substring(0,c)+I.substring(0,O)+F.substring(p,F.length)),N+=this._calculateCursorShift(N),O++}while(H.length<this._mask.length);return this._pastedData=H,void(this._cursor={position:N})}this._cursor={position:c+_.length}}updateValue(t){this._deactivateMask||("upper"===this._convertTo?t=t.toUpperCase():"lower"===this._convertTo&&(t=t.toLowerCase())),this._elementRef.nativeElement.value=t,this._inputValue=t}getMaskedString(t,s=0){let i="",c=s,p=0;for(;this.isSeparator(this.mask[c]);)i+=this.mask[c],c++;for(;p<t.length;)for(this._isStringAllowed(t[p],this.mask[c])?(i+=t[p],p++,c++):p++;this.isSeparator(this.mask[c]);)i+=this.mask[c],c++;return i}isSeparator(t){return this._separators.includes(t)}writeValue(t){t||(t=""),this.cvaModelChange.next(t),this.updateValue(this.deactivateMask?t||this.getUnmaskedValue():this.getMaskedString(t))}registerOnChange(t){this._onChangeCallback=t}registerOnTouched(t){this._onTouchedCallback=t}registerOnValidatorChange(t){this._validatorOnChange=t}_validateFn(){const t=this._elementRef.nativeElement.value.length,s=this._mask.length;return t===s||this.deactivateMask?null:{nxMaskLengthError:{length:s,actual:t}}}validate(){return this.validateMask?this._validateFn():null}_touch(){this._onTouchedCallback()}}return u.\u0275fac=function(t){return new(t||u)(e.Y36(e.SBq))},u.\u0275dir=e.lG2({type:u,selectors:[["input","nxMask",""]],hostBindings:function(t,s){1&t&&e.NdJ("input",function(c){return s._onInputChange(c)})("keydown",function(c){return s._onKeydown(c)})("paste",function(c){return s._onPaste(c)})("blur",function(){return s._touch()})},inputs:{deactivateMask:"deactivateMask",mask:["nxMask","mask"],convertTo:["nxConvertTo","convertTo"],separators:"separators",dropSpecialCharacters:"dropSpecialCharacters",validateMask:"validateMask"},exportAs:["nxMaskDirective"],features:[e._Bn([x,{provide:A.GH,useExisting:u},a])]}),u})();const P={provide:d.Cf,useExisting:(0,e.Gpc)(()=>R),multi:!0};let R=(()=>{class u{constructor(t,s){this._elementRef=t,this.maskDirective=s,this._destroyed=new b.xQ,this._afterInputHook=i=>{this._setCountryCode(i.target.value.substr(0,2))},this._beforePasteHook=i=>{const c=i.target,p=(i.clipboardData||window.clipboardData).getData("text"),F=(this.maskDirective.elementRefValue.substr(0,c.selectionStart)+this.maskDirective.getMaskedString(p,c.selectionStart)).substr(0,2);this._setCountryCode(F)},this.maskDirective.registerAfterInputHook(this._afterInputHook),this.maskDirective.registerBeforePasteHook(this._beforePasteHook),this.maskDirective.cvaModelChange.pipe((0,L.R)(this._destroyed)).subscribe(i=>{const c=this.maskDirective.getMaskedString(i).substr(0,2);this._setCountryCode(c)})}_setCountryCode(t){2===(t=t.toUpperCase()).length&&this._countryCode!==t&&(C.countries[t]?(this._countryCode=t,this.maskDirective.setMask(this._getMask(this._countryCode))):(this._countryCode=null,this.maskDirective.setMask("SS")))}ngOnInit(){this.maskDirective.mask="SS",this.maskDirective.convertTo="upper"}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_getMask(t){let i="SS00";return C.countries[t].structure.match(/.{1,3}/g).forEach(p=>{const F=p[0],_=Number(p.substring(1,3));switch(F){case"F":i+="0".repeat(_);break;case"A":i+="A".repeat(_);break;case"U":i+="S".repeat(_)}}),i=i.match(/.{1,4}/g).join(" "),i}_validateFn(){return this._countryCodeValid()?{nxIbanInvalidCountryError:"no valid country code"}:C.isValid(this.maskDirective.getUnmaskedValue())?null:{nxIbanParseError:"no valid iban"}}validate(){return this.maskDirective.validateMask?this._validateFn():null}_touch(){this.maskDirective._touch()}_countryCodeValid(){const t=this._elementRef.nativeElement.value.substr(0,2);return 2===t.length&&!C.countries[t]}}return u.\u0275fac=function(t){return new(t||u)(e.Y36(e.SBq),e.Y36((0,e.Gpc)(()=>M)))},u.\u0275dir=e.lG2({type:u,selectors:[["input","nxIbanMask",""]],hostBindings:function(t,s){1&t&&e.NdJ("input",function(){return s._countryCodeValid()&&s._touch()})},exportAs:["nxIbanMaskDirective"],features:[e._Bn([P])]}),u})(),r=(()=>{class u{}return u.\u0275fac=function(t){return new(t||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[k.ez,n._0,n._0]}),u})();var o=g(2971),h=g(9508),f=g(690);class v{constructor(){this.validatedMaskForm=new d.nJ({maskInput:new d.p4("",{})})}}v.\u0275fac=function(l){return new(l||v)},v.\u0275cmp=e.Xpm({type:v,selectors:[["iban-mask-example"]],decls:29,vars:10,consts:[[3,"formGroup"],["nxLabel","IBAN"],["nxInput","","nxMask","","nxIbanMask","","formControlName","maskInput"],["nxButton","primary small","type","submit",1,"nx-margin-bottom-s"]],template:function(l,t){if(1&l&&(e.TgZ(0,"form",0)(1,"nx-formfield",1),e._UZ(2,"input",2),e.qZA(),e.TgZ(3,"button",3),e._uU(4," submit "),e.qZA()(),e._uU(5),e.ALo(6,"json"),e._UZ(7,"br"),e._uU(8),e.ALo(9,"json"),e._UZ(10,"br"),e._uU(11),e.ALo(12,"json"),e._UZ(13,"br"),e.TgZ(14,"p")(15,"strong"),e._uU(16,"Try to enter some test IBANs:"),e.qZA()(),e.TgZ(17,"p")(18,"strong"),e._uU(19,"Germany:"),e.qZA(),e._uU(20," DE89 3704 0044 0532 0130 00"),e._UZ(21,"br"),e.TgZ(22,"strong"),e._uU(23,"Norway:"),e.qZA(),e._uU(24," NO93 8601 1117 947"),e._UZ(25,"br"),e.TgZ(26,"strong"),e._uU(27,"Malta:"),e.qZA(),e._uU(28," MT84 MALT 0110 0001 2345 MTLC AST0 01S\n"),e.qZA()),2&l){let s;e.Q6J("formGroup",t.validatedMaskForm),e.xp6(5),e.hij(" Form value: ",e.lcZ(6,4,t.validatedMaskForm.value),""),e.xp6(3),e.hij("\nTestform: ",e.lcZ(9,6,t.validatedMaskForm.status),""),e.xp6(3),e.hij("\nValidation errors: ",e.lcZ(12,8,null==(s=t.validatedMaskForm.get("maskInput"))?null:s.errors),"")}},dependencies:[n.VM,M,R,A.aP,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u,f.XV,k.Ts]});var m=g(9561);class S{}S.\u0275fac=function(l){return new(l||S)},S.\u0275cmp=e.Xpm({type:S,selectors:[["mask-example"]],decls:18,vars:0,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","6"],["nxLabel","Time"],["nxInput","","nxMask","00:00:00"],["nxFormfieldHint",""],["nxLabel","ID"],["nxInput","","nxMask","SS-AAAAA"],["nxLabel","Birthday"],["nxInput","","nxMask","00/00/0000"]],template:function(l,t){1&l&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3),e._UZ(4,"input",4),e.TgZ(5,"span",5),e._uU(6," Mask: 00:00:00 "),e.qZA()()(),e.TgZ(7,"div",2)(8,"nx-formfield",6),e._UZ(9,"input",7),e.TgZ(10,"span",5),e._uU(11," Mask: SS-AAAAA "),e.qZA()()()(),e.TgZ(12,"div",1)(13,"div",2)(14,"nx-formfield",8),e._UZ(15,"input",9),e.TgZ(16,"span",5),e._uU(17," Mask: 00/00/0000 "),e.qZA()()()()())},dependencies:[n.VM,n.BE,M,A.aP,m.RH,m.yI,m.s7]});class T{constructor(){this.templateModel="upper"}}T.\u0275fac=function(l){return new(l||T)},T.\u0275cmp=e.Xpm({type:T,selectors:[["mask-case-example"]],decls:15,vars:4,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","6"],[3,"ngModel","ngModelChange"],["nxValue","upper",1,"nx-margin-bottom-m"],["nxValue","lower"],["nxLabel","Input"],["nxInput","","nxMask","AAAA",3,"nxConvertTo","ngModel","ngModelChange"],["nxFormfieldHint",""]],template:function(l,t){1&l&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-radio-group",3),e.NdJ("ngModelChange",function(i){return t.templateModel=i}),e.TgZ(4,"nx-radio",4),e._uU(5,"Upper case"),e.qZA(),e.TgZ(6,"nx-radio",5),e._uU(7,"Lower case"),e.qZA()()(),e.TgZ(8,"div",2)(9,"nx-formfield",6)(10,"input",7),e.NdJ("ngModelChange",function(i){return t.modelVal=i}),e.qZA(),e.TgZ(11,"span",8),e._uU(12," Mask: AAAA "),e.qZA()(),e._uU(13),e._UZ(14,"br"),e.qZA()()()),2&l&&(e.xp6(3),e.Q6J("ngModel",t.templateModel),e.xp6(7),e.Q6J("nxConvertTo",t.templateModel)("ngModel",t.modelVal),e.xp6(3),e.hij(" Model value: ",t.modelVal,""))},dependencies:[n.VM,n.BE,M,o.R9,o.tc,A.aP,d.Fj,d.JJ,d.On,m.RH,m.yI,m.s7]});class Z{constructor(){this.modelVal="SSAAAAA",this.templateModel="deactivate"}}Z.\u0275fac=function(l){return new(l||Z)},Z.\u0275cmp=e.Xpm({type:Z,selectors:[["mask-deactivate-example"]],decls:15,vars:5,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","6"],[3,"ngModel","ngModelChange"],["nxValue","activate",1,"nx-margin-bottom-m"],["nxValue","deactivate"],["nxLabel","ID"],["nxInput","","nxMask","SS-AAAAA",3,"deactivateMask","ngModel","ngModelChange"],["nxFormfieldHint",""]],template:function(l,t){1&l&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-radio-group",3),e.NdJ("ngModelChange",function(i){return t.templateModel=i}),e.TgZ(4,"nx-radio",4),e._uU(5,"Activate"),e.qZA(),e.TgZ(6,"nx-radio",5),e._uU(7,"De-activate"),e.qZA()()(),e.TgZ(8,"div",2)(9,"nx-formfield",6)(10,"input",7),e.NdJ("ngModelChange",function(i){return t.modelVal=i}),e.qZA(),e.TgZ(11,"span",8),e._uU(12),e.qZA()(),e._uU(13),e._UZ(14,"br"),e.qZA()()()),2&l&&(e.xp6(3),e.Q6J("ngModel",t.templateModel),e.xp6(7),e.Q6J("deactivateMask","deactivate"===t.templateModel)("ngModel",t.modelVal),e.xp6(2),e.hij(" Mask: SS-AAAAA (mask deactivated: ","deactivate"===t.templateModel,") "),e.xp6(1),e.hij(" Model value: ",t.modelVal,""))},dependencies:[n.VM,n.BE,M,o.R9,o.tc,A.aP,d.Fj,d.JJ,d.On,m.RH,m.yI,m.s7]});class E{constructor(){this.dateTimeDropped="020618",this.dateTimeValue="020618"}}E.\u0275fac=function(l){return new(l||E)},E.\u0275cmp=e.Xpm({type:E,selectors:[["mask-drop-characters-example"]],decls:19,vars:4,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","6"],["nxLabel","Special characters dropped"],["nxInput","","nxMask","00/00/00 00:00:00","dropSpecialCharacters","true",3,"ngModel","ngModelChange"],["nxFormfieldHint",""],["nxLabel","Not dropped (default)"],["nxInput","","nxMask","00/00/00 00:00:00","dropSpecialCharacters","false",3,"ngModel","ngModelChange"]],template:function(l,t){1&l&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3)(4,"input",4),e.NdJ("ngModelChange",function(i){return t.dateTimeDropped=i}),e.qZA(),e.TgZ(5,"span",5),e._uU(6," 00/00/00 00:00:00 "),e.qZA()()(),e.TgZ(7,"div",2)(8,"p"),e._uU(9),e.qZA()()(),e.TgZ(10,"div",1)(11,"div",2)(12,"nx-formfield",6)(13,"input",7),e.NdJ("ngModelChange",function(i){return t.dateTimeValue=i}),e.qZA(),e.TgZ(14,"span",5),e._uU(15," 00/00/00 00:00:00 "),e.qZA()()(),e.TgZ(16,"div",2)(17,"p"),e._uU(18),e.qZA()()()()),2&l&&(e.xp6(4),e.Q6J("ngModel",t.dateTimeDropped),e.xp6(5),e.hij("Current value: ",t.dateTimeDropped,""),e.xp6(4),e.Q6J("ngModel",t.dateTimeValue),e.xp6(5),e.hij("Current value: ",t.dateTimeValue,""))},dependencies:[n.VM,n.BE,M,A.aP,d.Fj,d.JJ,d.On,m.RH,m.yI,m.s7],styles:["p[_ngcontent-%COMP%]{margin-top:24px}"]});class U{constructor(){this.mask="00-00 [00]",this.separators=["-","[","]"," "]}}U.\u0275fac=function(l){return new(l||U)},U.\u0275cmp=e.Xpm({type:U,selectors:[["mask-separators-example"]],decls:7,vars:3,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","6"],["nxLabel","Masked input"],["nxInput","",3,"nxMask","separators"],["nxFormfieldHint",""]],template:function(l,t){1&l&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"nx-formfield",3),e._UZ(4,"input",4),e.TgZ(5,"span",5),e._uU(6),e.qZA()()()()()),2&l&&(e.xp6(4),e.Q6J("nxMask",t.mask)("separators",t.separators),e.xp6(2),e.hij(" Mask: ",t.mask," "))},dependencies:[n.VM,n.BE,M,A.aP,m.RH,m.yI,m.s7]});var J=g(4188);class B{constructor(){this.validatedMaskForm=new d.nJ({maskInput:new d.p4("",{})}),this.unvalidatedMaskForm=new d.nJ({maskInput2:new d.p4("",{})})}}B.\u0275fac=function(l){return new(l||B)},B.\u0275cmp=e.Xpm({type:B,selectors:[["mask-validation-example"]],decls:32,vars:14,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","6"],["nxHeadline","subsection-xsmall"],[3,"formGroup"],["nxLabel","Time"],["nxInput","","nxMask","00:00:00","formControlName","maskInput"],["nxFormfieldHint",""],["nxButton","primary small","type","submit",1,"nx-margin-bottom-s"],["nxInput","","nxMask","00:00:00","formControlName","maskInput2","validateMask","false"]],template:function(l,t){1&l&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3),e._uU(4,"With mask validation"),e.qZA(),e.TgZ(5,"form",4)(6,"nx-formfield",5),e._UZ(7,"input",6),e.TgZ(8,"span",7),e._uU(9," Mask: 00:00:00 "),e.qZA()(),e.TgZ(10,"button",8),e._uU(11," submit "),e.qZA()(),e._uU(12),e.ALo(13,"json"),e._UZ(14,"br"),e._uU(15),e.ALo(16,"json"),e.qZA(),e.TgZ(17,"div",2)(18,"h4",3),e._uU(19,"Without mask validation"),e.qZA(),e.TgZ(20,"form",4)(21,"nx-formfield",5),e._UZ(22,"input",9),e.TgZ(23,"span",7),e._uU(24," Mask: 00:00:00 "),e.qZA()(),e.TgZ(25,"button",8),e._uU(26," submit "),e.qZA()(),e._uU(27),e.ALo(28,"json"),e._UZ(29,"br"),e._uU(30),e.ALo(31,"json"),e.qZA()()()),2&l&&(e.xp6(5),e.Q6J("formGroup",t.validatedMaskForm),e.xp6(7),e.hij(" Form value: ",e.lcZ(13,6,t.validatedMaskForm.value),""),e.xp6(3),e.hij(" Testform: ",e.lcZ(16,8,t.validatedMaskForm.status)," "),e.xp6(5),e.Q6J("formGroup",t.unvalidatedMaskForm),e.xp6(7),e.hij(" Form value: ",e.lcZ(28,10,t.unvalidatedMaskForm.value),""),e.xp6(3),e.hij(" Testform: ",e.lcZ(31,12,t.unvalidatedMaskForm.status)," "))},dependencies:[n.VM,n.BE,M,A.aP,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u,f.XV,J.s,m.RH,m.yI,m.s7,k.Ts]});class y{static components(){return{mask:S,"mask-case":T,"mask-deactivate":Z,"mask-drop-characters":E,"mask-separators":U,"mask-validation":B,"iban-mask":v}}}y.\u0275fac=function(l){return new(l||y)},y.\u0275mod=e.oAB({type:y}),y.\u0275inj=e.cJS({imports:[r,o.IV,A.ZI,h.f]})},9850:function(G,D){var g,e;g=function(d){Array.prototype.map||(Array.prototype.map=function(r){"use strict";if(null==this)throw new TypeError;var o=Object(this),h=o.length>>>0;if("function"!=typeof r)throw new TypeError;for(var f=new Array(h),v=arguments.length>=2?arguments[1]:void 0,m=0;m<h;m++)m in o&&(f[m]=r.call(v,o[m],m,o));return f});var C="A".charCodeAt(0),b="Z".charCodeAt(0);function L(r){return(r=(r=r.toUpperCase()).substr(4)+r.substr(0,4)).split("").map(function(o){var h=o.charCodeAt(0);return h>=C&&h<=b?h-C+10:o}).join("")}function w(r){for(var h,o=r;o.length>2;)h=o.slice(0,9),o=parseInt(h,10)%97+o.slice(h.length);return parseInt(o,10)%97}function k(r){return r.replace(M,"").toUpperCase()}function n(r,o,h,f){this.countryCode=r,this.length=o,this.structure=h,this.example=f}n.prototype._regex=function(){return this._cachedRegex||(this._cachedRegex=function V(r){var o=r.match(/(.{3})/g).map(function(h){var f,v=h.slice(0,1),m=parseInt(h.slice(1),10);switch(v){case"A":f="0-9A-Za-z";break;case"B":f="0-9A-Z";break;case"C":f="A-Za-z";break;case"F":f="0-9";break;case"L":f="a-z";break;case"U":f="A-Z";break;case"W":f="0-9a-z"}return"(["+f+"]{"+m+"})"});return new RegExp("^"+o.join("")+"$")}(this.structure))},n.prototype.isValid=function(r){return this.length==r.length&&this.countryCode===r.slice(0,2)&&this._regex().test(r.slice(4))&&1==w(L(r))},n.prototype.toBBAN=function(r,o){return this._regex().exec(r.slice(4)).slice(1).join(o)},n.prototype.fromBBAN=function(r){if(!this.isValidBBAN(r))throw new Error("Invalid BBAN");var h=("0"+(98-w(L(this.countryCode+"00"+r)))).slice(-2);return this.countryCode+h+r},n.prototype.isValidBBAN=function(r){return this.length-4==r.length&&this._regex().test(r)};var x={};function a(r){x[r.countryCode]=r}a(new n("AD",24,"F04F04A12","AD1200012030200359100100")),a(new n("AE",23,"F03F16","AE070331234567890123456")),a(new n("AL",28,"F08A16","AL47212110090000000235698741")),a(new n("AT",20,"F05F11","AT611904300234573201")),a(new n("AZ",28,"U04A20","AZ21NABZ00000000137010001944")),a(new n("BA",20,"F03F03F08F02","BA391290079401028494")),a(new n("BE",16,"F03F07F02","BE68539007547034")),a(new n("BG",22,"U04F04F02A08","BG80BNBG96611020345678")),a(new n("BH",22,"U04A14","BH67BMAG00001299123456")),a(new n("BR",29,"F08F05F10U01A01","BR9700360305000010009795493P1")),a(new n("BY",28,"A04F04A16","BY13NBRB3600900000002Z00AB00")),a(new n("CH",21,"F05A12","CH9300762011623852957")),a(new n("CR",22,"F04F14","CR72012300000171549015")),a(new n("CY",28,"F03F05A16","CY17002001280000001200527600")),a(new n("CZ",24,"F04F06F10","CZ6508000000192000145399")),a(new n("DE",22,"F08F10","DE89370400440532013000")),a(new n("DK",18,"F04F09F01","DK5000400440116243")),a(new n("DO",28,"U04F20","DO28BAGR00000001212453611324")),a(new n("EE",20,"F02F02F11F01","EE382200221020145685")),a(new n("EG",29,"F04F04F17","EG800002000156789012345180002")),a(new n("ES",24,"F04F04F01F01F10","ES9121000418450200051332")),a(new n("FI",18,"F06F07F01","FI2112345600000785")),a(new n("FO",18,"F04F09F01","FO6264600001631634")),a(new n("FR",27,"F05F05A11F02","FR1420041010050500013M02606")),a(new n("GB",22,"U04F06F08","GB29NWBK60161331926819")),a(new n("GE",22,"U02F16","GE29NB0000000101904917")),a(new n("GI",23,"U04A15","GI75NWBK000000007099453")),a(new n("GL",18,"F04F09F01","GL8964710001000206")),a(new n("GR",27,"F03F04A16","GR1601101250000000012300695")),a(new n("GT",28,"A04A20","GT82TRAJ01020000001210029690")),a(new n("HR",21,"F07F10","HR1210010051863000160")),a(new n("HU",28,"F03F04F01F15F01","HU42117730161111101800000000")),a(new n("IE",22,"U04F06F08","IE29AIBK93115212345678")),a(new n("IL",23,"F03F03F13","IL620108000000099999999")),a(new n("IS",26,"F04F02F06F10","IS140159260076545510730339")),a(new n("IT",27,"U01F05F05A12","IT60X0542811101000000123456")),a(new n("IQ",23,"U04F03A12","IQ98NBIQ850123456789012")),a(new n("JO",30,"A04F22","JO15AAAA1234567890123456789012")),a(new n("KW",30,"U04A22","KW81CBKU0000000000001234560101")),a(new n("KZ",20,"F03A13","KZ86125KZT5004100100")),a(new n("LB",28,"F04A20","LB62099900000001001901229114")),a(new n("LC",32,"U04F24","LC07HEMM000100010012001200013015")),a(new n("LI",21,"F05A12","LI21088100002324013AA")),a(new n("LT",20,"F05F11","LT121000011101001000")),a(new n("LU",20,"F03A13","LU280019400644750000")),a(new n("LV",21,"U04A13","LV80BANK0000435195001")),a(new n("MC",27,"F05F05A11F02","MC5811222000010123456789030")),a(new n("MD",24,"U02A18","MD24AG000225100013104168")),a(new n("ME",22,"F03F13F02","ME25505000012345678951")),a(new n("MK",19,"F03A10F02","MK07250120000058984")),a(new n("MR",27,"F05F05F11F02","MR1300020001010000123456753")),a(new n("MT",31,"U04F05A18","MT84MALT011000012345MTLCAST001S")),a(new n("MU",30,"U04F02F02F12F03U03","MU17BOMM0101101030300200000MUR")),a(new n("NL",18,"U04F10","NL91ABNA0417164300")),a(new n("NO",15,"F04F06F01","NO9386011117947")),a(new n("PK",24,"U04A16","PK36SCBL0000001123456702")),a(new n("PL",28,"F08F16","PL61109010140000071219812874")),a(new n("PS",29,"U04A21","PS92PALS000000000400123456702")),a(new n("PT",25,"F04F04F11F02","PT50000201231234567890154")),a(new n("QA",29,"U04A21","QA30AAAA123456789012345678901")),a(new n("RO",24,"U04A16","RO49AAAA1B31007593840000")),a(new n("RS",22,"F03F13F02","RS35260005601001611379")),a(new n("SA",24,"F02A18","SA0380000000608010167519")),a(new n("SC",31,"U04F04F16U03","SC18SSCB11010000000000001497USD")),a(new n("SE",24,"F03F16F01","SE4550000000058398257466")),a(new n("SI",19,"F05F08F02","SI56263300012039086")),a(new n("SK",24,"F04F06F10","SK3112000000198742637541")),a(new n("SM",27,"U01F05F05A12","SM86U0322509800000000270100")),a(new n("ST",25,"F08F11F02","ST68000100010051845310112")),a(new n("SV",28,"U04F20","SV62CENR00000000000000700025")),a(new n("TL",23,"F03F14F02","TL380080012345678910157")),a(new n("TN",24,"F02F03F13F02","TN5910006035183598478831")),a(new n("TR",26,"F05F01A16","TR330006100519786457841326")),a(new n("UA",29,"F25","UA511234567890123456789012345")),a(new n("VA",22,"F18","VA59001123000012345678")),a(new n("VG",24,"U04F16","VG96VPVG0000012345678901")),a(new n("XK",20,"F04F10F02","XK051212012345678906")),a(new n("AO",25,"F21","AO69123456789012345678901")),a(new n("BF",27,"F23","BF2312345678901234567890123")),a(new n("BI",16,"F12","BI41123456789012")),a(new n("BJ",28,"F24","BJ39123456789012345678901234")),a(new n("CI",28,"U02F22","CI70CI1234567890123456789012")),a(new n("CM",27,"F23","CM9012345678901234567890123")),a(new n("CV",25,"F21","CV30123456789012345678901")),a(new n("DZ",24,"F20","DZ8612345678901234567890")),a(new n("IR",26,"F22","IR861234568790123456789012")),a(new n("MG",27,"F23","MG1812345678901234567890123")),a(new n("ML",28,"U01F23","ML15A12345678901234567890123")),a(new n("MZ",25,"F21","MZ25123456789012345678901")),a(new n("SN",28,"U01F23","SN52A12345678901234567890123")),a(new n("GF",27,"F05F05A11F02","GF121234512345123456789AB13")),a(new n("GP",27,"F05F05A11F02","GP791234512345123456789AB13")),a(new n("MQ",27,"F05F05A11F02","MQ221234512345123456789AB13")),a(new n("RE",27,"F05F05A11F02","RE131234512345123456789AB13")),a(new n("PF",27,"F05F05A11F02","PF281234512345123456789AB13")),a(new n("TF",27,"F05F05A11F02","TF891234512345123456789AB13")),a(new n("YT",27,"F05F05A11F02","YT021234512345123456789AB13")),a(new n("NC",27,"F05F05A11F02","NC551234512345123456789AB13")),a(new n("BL",27,"F05F05A11F02","BL391234512345123456789AB13")),a(new n("MF",27,"F05F05A11F02","MF551234512345123456789AB13")),a(new n("PM",27,"F05F05A11F02","PM071234512345123456789AB13")),a(new n("WF",27,"F05F05A11F02","WF621234512345123456789AB13"));var M=/[^a-zA-Z0-9]/g,P=/(.{4})(?!$)/g;function R(r){return"string"==typeof r||r instanceof String}d.isValid=function(r){if(!R(r))return!1;r=k(r);var o=x[r.slice(0,2)];return!!o&&o.isValid(r)},d.toBBAN=function(r,o){typeof o>"u"&&(o=" "),r=k(r);var h=x[r.slice(0,2)];if(!h)throw new Error("No country with code "+r.slice(0,2));return h.toBBAN(r,o)},d.fromBBAN=function(r,o){var h=x[r];if(!h)throw new Error("No country with code "+r);return h.fromBBAN(k(o))},d.isValidBBAN=function(r,o){if(!R(o))return!1;var h=x[r];return h&&h.isValidBBAN(k(o))},d.printFormat=function(r,o){return typeof o>"u"&&(o=" "),k(r).replace(P,"$1"+o)},d.electronicFormat=k,d.countries=x},void 0!==(e=g.apply(D,[D]))&&(G.exports=e)}}]);