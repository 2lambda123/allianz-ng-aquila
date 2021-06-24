(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{TviL:function(e,t,r){"use strict";r.r(t),r.d(t,"SliderExamplesModule",function(){return y});var n=r("AqTC"),s=r("/BTq"),a=r("fXoL"),l=r("fCGn");let i=(()=>{class e{constructor(){this.sliderDemoValue=42,this.step=.1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Kb({type:e,selectors:[["slider-basic-example"]],decls:2,vars:5,consts:[["nxLabel","Slider Test Label",3,"nxMin","nxMax","nxStep","nxValue","nxValueChange"]],template:function(e,t){1&e&&(a.Wb(0,"nx-slider",0),a.dc("nxValueChange",function(e){return t.sliderDemoValue=e}),a.Vb(),a.Jc(1)),2&e&&(a.nc("nxMin",10)("nxMax",110)("nxStep",2)("nxValue",t.sliderDemoValue),a.Eb(1),a.Lc("\nSlider value: ",t.sliderDemoValue,"\n"))},directives:[l.a],styles:[""]}),e})();var c=r("HXSb"),o=r("nK+a"),u=r("3Pt+");let d=(()=>{class e{constructor(){this.step=.1,this.floatSliderDemoValue=1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Kb({type:e,selectors:[["slider-decimal-example"]],decls:4,vars:6,consts:[[3,"nxMin","nxMax","nxStep","nxValue","nxValueChange"],["nxLabel","Stepsize"],["nxInput","",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(a.Wb(0,"nx-slider",0),a.dc("nxValueChange",function(e){return t.floatSliderDemoValue=e}),a.Vb(),a.Jc(1),a.Wb(2,"nx-formfield",1),a.Wb(3,"input",2),a.dc("ngModelChange",function(e){return t.step=e}),a.Vb(),a.Vb()),2&e&&(a.nc("nxMin",0)("nxMax",10)("nxStep",t.step)("nxValue",t.floatSliderDemoValue),a.Eb(1),a.Lc("\nSlider value: ",t.floatSliderDemoValue,"\n"),a.Eb(2),a.nc("ngModel",t.step))},directives:[l.a,c.b,o.b,u.a,u.p,u.s],styles:[""]}),e})(),m=(()=>{class e{constructor(){this.sliderDemoValue=42,this.step=.1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Kb({type:e,selectors:[["slider-default-example"]],decls:1,vars:0,consts:[["nxLabel","Another Slider Test Label"]],template:function(e,t){1&e&&a.Rb(0,"nx-slider",0)},directives:[l.a],styles:[""]}),e})(),x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Kb({type:e,selectors:[["slider-disabled-example"]],decls:1,vars:1,consts:[["nxLabel","This slider is disabled",3,"disabled"]],template:function(e,t){1&e&&a.Rb(0,"nx-slider",0),2&e&&a.nc("disabled",!0)},directives:[l.a],styles:[""]}),e})(),b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Kb({type:e,selectors:[["slider-inverted-example"]],decls:1,vars:1,consts:[["nxLabel","This slider is inverted",3,"nxInverted"]],template:function(e,t){1&e&&a.Rb(0,"nx-slider",0),2&e&&a.nc("nxInverted",!0)},directives:[l.a],styles:[""]}),e})(),p=(()=>{class e{constructor(){this.euroSliderDemoValue=0,this.euroValueFormatter=e=>`${Number(e).toFixed(2)} \u20ac`,this.minEuroFormatter=e=>`min. ${e} \u20ac`,this.maxEuroFormatter=e=>`max. ${e} \u20ac`}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Kb({type:e,selectors:[["slider-label-example"]],decls:2,vars:8,consts:[[3,"nxMin","nxMax","nxStep","nxLabelMinFormatter","nxLabelMaxFormatter","nxValueFormatter","nxValue","nxValueChange"]],template:function(e,t){1&e&&(a.Wb(0,"nx-slider",0),a.dc("nxValueChange",function(e){return t.euroSliderDemoValue=e}),a.Vb(),a.Jc(1)),2&e&&(a.nc("nxMin",0)("nxMax",10)("nxStep",.1)("nxLabelMinFormatter",t.minEuroFormatter)("nxLabelMaxFormatter",t.maxEuroFormatter)("nxValueFormatter",t.euroValueFormatter)("nxValue",t.euroSliderDemoValue),a.Eb(1),a.Lc("\nSlider value: ",t.euroSliderDemoValue,"\n"))},directives:[l.a],styles:[""]}),e})(),f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Kb({type:e,selectors:[["slider-negative-example"]],decls:2,vars:3,consts:[[1,"docs-inverse-container"],["negative","true","nxLabel","Negative slider","nxValue","13",3,"nxMax","nxMin","nxStep"]],template:function(e,t){1&e&&(a.Wb(0,"div",0),a.Rb(1,"nx-slider",1),a.Vb()),2&e&&(a.Eb(1),a.nc("nxMax",110)("nxMin",10)("nxStep",2))},directives:[l.a],styles:[""]}),e})();var v=r("ofXK");let M=(()=>{class e{constructor(e){this.fb=e,this.createForm()}createForm(){this.testForm=this.fb.group({sliderTestReactive:[10,u.y.required]})}}return e.\u0275fac=function(t){return new(t||e)(a.Qb(u.d))},e.\u0275cmp=a.Kb({type:e,selectors:[["slider-reactive-example"]],decls:8,vars:7,consts:[[3,"formGroup"],["nxLabel","Please choose a number","name","reactiveTest","formControlName","sliderTestReactive"]],template:function(e,t){1&e&&(a.Wb(0,"form",0),a.Rb(1,"nx-slider",1),a.Wb(2,"p"),a.Jc(3),a.ic(4,"json"),a.Vb(),a.Wb(5,"p"),a.Jc(6),a.ic(7,"json"),a.Vb(),a.Vb()),2&e&&(a.nc("formGroup",t.testForm),a.Eb(3),a.Lc("Form value: ",a.jc(4,3,t.testForm.value),""),a.Eb(3),a.Lc("Form status: ",a.jc(7,5,t.testForm.status),""))},directives:[u.z,u.q,u.i,l.a,u.p,u.g],pipes:[v.h],styles:[""]}),e})(),V=(()=>{class e{constructor(){this.templateModel=42}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Kb({type:e,selectors:[["slider-template-example"]],decls:3,vars:2,consts:[["name","templateTest",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(a.Wb(0,"form"),a.Wb(1,"nx-slider",0),a.dc("ngModelChange",function(e){return t.templateModel=e}),a.Vb(),a.Jc(2),a.Vb()),2&e&&(a.Eb(1),a.nc("ngModel",t.templateModel),a.Eb(1),a.Lc(" Model Value: ",t.templateModel,"\n"))},directives:[u.z,u.q,u.r,l.a,u.p,u.s],styles:[""]}),e})();var h=function(e){return e[e.NEVER=0]="NEVER",e[e.RARELY=1]="RARELY",e[e.SOMETIMES=2]="SOMETIMES",e[e.OFTEN=3]="OFTEN",e[e.ALWAYS=4]="ALWAYS",e}({});let F=(()=>{class e{constructor(){this.fruitPreferenceFormatter=e=>{switch(e){case h.NEVER:return"never";case h.RARELY:return"rarely";case h.SOMETIMES:return"sometimes";case h.OFTEN:return"often";case h.ALWAYS:return"always"}},this.minFruitPreferenceFormatter=()=>"never",this.maxFruitPreferenceFormatter=()=>"always"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Kb({type:e,selectors:[["slider-textual-example"]],decls:1,vars:5,consts:[["nxLabel","Do you prefer apples over oranges?",3,"nxMin","nxMax","nxLabelMinFormatter","nxLabelMaxFormatter","nxValueFormatter"]],template:function(e,t){1&e&&a.Rb(0,"nx-slider",0),2&e&&a.nc("nxMin",0)("nxMax",4)("nxLabelMinFormatter",t.minFruitPreferenceFormatter)("nxLabelMaxFormatter",t.maxFruitPreferenceFormatter)("nxValueFormatter",t.fruitPreferenceFormatter)},directives:[l.a],styles:[""]}),e})(),L=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Kb({type:e,selectors:[["slider-thumb-example"]],decls:1,vars:1,consts:[["nxLabel","The thumb label is not shown.",3,"thumbLabel"]],template:function(e,t){1&e&&a.Rb(0,"nx-slider",0),2&e&&a.nc("thumbLabel",!1)},directives:[l.a],styles:[""]}),e})(),S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Kb({type:e,selectors:[["slider-labels-example"]],decls:1,vars:1,consts:[["nxLabel","The Min/Max labels are not shown.",3,"hideLabels"]],template:function(e,t){1&e&&a.Rb(0,"nx-slider",0),2&e&&a.nc("hideLabels",!0)},directives:[l.a],styles:[""]}),e})();var E=r("ierq");let y=(()=>{class e{static components(){return{"slider-basic":i,"slider-decimal":d,"slider-default":m,"slider-disabled":x,"slider-inverted":b,"slider-label":p,"slider-negative":f,"slider-reactive":M,"slider-template":V,"slider-textual":F,"slider-thumb":L,"slider-labels":S}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Ob({type:e}),e.\u0275inj=a.Nb({imports:[[s.a,n.b,E.a]]}),e})()},ierq:function(e,t,r){"use strict";r.d(t,"a",function(){return u});var n=r("tgBs"),s=r("/sJ9"),a=r("eV8M"),l=r("gkbm"),i=r("ofXK"),c=r("3Pt+"),o=r("fXoL");let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Ob({type:e}),e.\u0275inj=o.Nb({imports:[[],i.c,c.k,c.v,l.b,a.a,s.a,n.a]}),e})()}}]);