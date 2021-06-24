!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function t(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{inBY:function(n,a,o){"use strict";o.r(a),o.d(a,"PaginationExamplesModule",function(){return d});var i,r,u,c,g,s=o("uV7i"),x=o("fXoL"),p=o("Whc9"),P=((i=function(){function n(){e(this,n),this.count=210,this.page=1,this.perPage=10}return t(n,[{key:"prevPage",value:function(){this.page--}},{key:"nextPage",value:function(){this.page++}},{key:"goToPage",value:function(e){this.page=e}}]),n}()).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=x.Kb({type:i,selectors:[["pagination-advanced-example"]],decls:1,vars:3,consts:[["nxType","advanced",3,"nxCount","nxPage","nxPerPage","nxGoPrev","nxGoNext","nxGoPage"]],template:function(e,n){1&e&&(x.Wb(0,"nx-pagination",0),x.dc("nxGoPrev",function(){return n.prevPage()})("nxGoNext",function(){return n.nextPage()})("nxGoPage",function(e){return n.goToPage(e)}),x.Vb()),2&e&&x.nc("nxCount",n.count)("nxPage",n.page)("nxPerPage",n.perPage)},directives:[p.a],styles:[""]}),i),f={previous:"myPreviousText",next:"myNextText",ofLabel:"myOf",ariaLabel:"myAriaLabelText"},l=((r=function(){function n(){e(this,n),this.page=1,this.count=210,this.perPage=10}return t(n,[{key:"prevPage",value:function(){this.page--}},{key:"nextPage",value:function(){this.page++}},{key:"goToPage",value:function(e){this.page=e}}]),n}()).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=x.Kb({type:r,selectors:[["pagination-localize-example"]],features:[x.Db([{provide:s.a,useValue:f}])],decls:1,vars:3,consts:[[3,"nxCount","nxPage","nxPerPage","nxGoPrev","nxGoNext","nxGoPage"]],template:function(e,n){1&e&&(x.Wb(0,"nx-pagination",0),x.dc("nxGoPrev",function(){return n.prevPage()})("nxGoNext",function(){return n.nextPage()})("nxGoPage",function(e){return n.goToPage(e)}),x.Vb()),2&e&&x.nc("nxCount",n.count)("nxPage",n.page)("nxPerPage",n.perPage)},directives:[p.a],styles:[""]}),r),v={previous:"myPreviousText",next:"myNextText",ofLabel:"myOf",ariaLabel:"myAriaLabelText",last:"myLastText",first:"myFirstText"},y=((g=function(){function n(){e(this,n),this.page=1,this.count=210,this.perPage=10}return t(n,[{key:"prevPage",value:function(){this.page--}},{key:"nextPage",value:function(){this.page++}},{key:"goToPage",value:function(e){this.page=e}}]),n}()).\u0275fac=function(e){return new(e||g)},g.\u0275cmp=x.Kb({type:g,selectors:[["pagination-localize-advanced-example"]],features:[x.Db([{provide:s.a,useValue:v}])],decls:1,vars:3,consts:[["nxType","advanced",3,"nxCount","nxPage","nxPerPage","nxGoPrev","nxGoNext","nxGoPage"]],template:function(e,n){1&e&&(x.Wb(0,"nx-pagination",0),x.dc("nxGoPrev",function(){return n.prevPage()})("nxGoNext",function(){return n.nextPage()})("nxGoPage",function(e){return n.goToPage(e)}),x.Vb()),2&e&&x.nc("nxCount",n.count)("nxPage",n.page)("nxPerPage",n.perPage)},directives:[p.a],styles:[""]}),g),h=((c=function(){function n(){e(this,n),this.page=1,this.count=210,this.perPage=10}return t(n,[{key:"prevPage",value:function(){this.page--}},{key:"nextPage",value:function(){this.page++}},{key:"goToPage",value:function(e){this.page=e}}]),n}()).\u0275fac=function(e){return new(e||c)},c.\u0275cmp=x.Kb({type:c,selectors:[["pagination-simple-example"]],decls:1,vars:3,consts:[[3,"nxCount","nxPage","nxPerPage","nxGoPrev","nxGoNext","nxGoPage"]],template:function(e,n){1&e&&(x.Wb(0,"nx-pagination",0),x.dc("nxGoPrev",function(){return n.prevPage()})("nxGoNext",function(){return n.nextPage()})("nxGoPage",function(e){return n.goToPage(e)}),x.Vb()),2&e&&x.nc("nxCount",n.count)("nxPage",n.page)("nxPerPage",n.perPage)},directives:[p.a],styles:[""]}),c),d=((u=function(){function n(){e(this,n)}return t(n,null,[{key:"components",value:function(){return{"pagination-advanced":P,"pagination-localize":l,"pagination-localize-advanced":y,"pagination-simple":h}}}]),n}()).\u0275fac=function(e){return new(e||u)},u.\u0275mod=x.Ob({type:u}),u.\u0275inj=x.Nb({imports:[[s.b]]}),u)}}])}();