"use strict";(self.webpackChunkng_aquila=self.webpackChunkng_aquila||[]).push([[471],{27912:function(n,t,i){i.d(t,{o:function(){return e},g:function(){return o}});var a=i(37716);const e={previous:"Previous",next:"Next",first:"First",last:"Last",ofLabel:"of",ariaLabel:"Please select your page"},o=new a.OlP("nx-pagination-texts")},88683:function(n,t,i){i.d(t,{$:function(){return e}});var a=i(37716);let e=(()=>{class n{constructor(){this._pagesMobile=3,this._elipsisText="...",this._classExpanded="expanded-view"}getPages(n,t){let i=[],a=[],e=[],o=[];return a=this.getStartArray(n,t),e=this.getMiddleArray(n,t),o=this.getEndArray(n,t),i=[...a,...e,...o],i}getMiddleArray(n,t){let i=n<6?4:n-1;const a=[];for(;a.length<3&&i>=2&&i<=t-3&&i<=n+1&&i>=n-1;)a.push(this.createPaginationItem(i,i)),i++;return a}getEndArray(n,t){const i=[];let a=t<=3?t+1:t<=6?t-(t-4):t-2;const e=n<t-4;for(;a<=t;){const n=this.createPaginationItem(0===i.length&&e?this._elipsisText:a,a,!0);i.push(n),a++}return i}getStartArray(n,t){let i=0;const a=[];for(;i<3&&i<t;){const t=2===i&&n>5?this.createPaginationItem(this._elipsisText,i,!0):this.createPaginationItem(i+1,i+1,!0);a.push(t),i++}return a}getMobilePages(n,t){if(t<this._pagesMobile)return Array.from(Array(t).keys()).map(n=>this.createPaginationItem(n+1,n+1));switch(n){case 1:return[1,2,3].map(n=>this.createPaginationItem(n,n));case t:return[t-2,t-1,t].map(n=>this.createPaginationItem(n,n));default:return[n-1,n,n+1].map(n=>this.createPaginationItem(n,n))}}createPaginationItem(n,t,i){return{label:n,value:t,class:i?this._classExpanded:""}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=a.Yz7({token:n,factory:n.\u0275fac}),n})()},21470:function(n,t,i){i.d(t,{_:function(){return P}});var a=i(37716),e=i(27912),o=i(70946),s=i(88683),g=i(4765),r=i(38583),c=i(90805);const l=["link"];function p(n,t){if(1&n){const n=a.EpF();a.TgZ(0,"button",19,7),a.NdJ("click",function(){a.CHM(n);const t=a.oxw().$implicit;return a.oxw(3).onPage(t.value)}),a._uU(2),a.qZA()}if(2&n){const n=a.oxw().$implicit,t=a.oxw(3);a.Q6J("ngClass",t.getPaginationNumberClasses(n)),a.uIk("aria-current",n.value===t.page?"page":""),a.xp6(2),a.hij(" ",n.label," ")}}function _(n,t){if(1&n&&(a.TgZ(0,"span"),a._uU(1),a.qZA()),2&n){const n=a.oxw().$implicit;a.xp6(1),a.hij(" ",n.label," ")}}function x(n,t){if(1&n&&(a.TgZ(0,"li",16),a.YNc(1,p,3,3,"button",17),a.YNc(2,_,2,1,"span",18),a.qZA()),2&n){const n=t.$implicit,i=a.oxw(3);a.Q6J("ngClass",i.getPaginationItemClasses(n)),a.xp6(1),a.Q6J("ngIf","..."!==n.label),a.xp6(1),a.Q6J("ngIf","..."===n.label)}}function u(n,t){if(1&n){const n=a.EpF();a.TgZ(0,"li",20),a.TgZ(1,"button",19,7),a.NdJ("click",function(){const t=a.CHM(n).$implicit;return a.oxw(3).onPage(t.value)}),a._uU(3),a.qZA(),a.qZA()}if(2&n){const n=t.$implicit,i=a.oxw(3);a.Q6J("ngClass",i.getPaginationItemClasses(n)),a.xp6(1),a.Q6J("ngClass",i.getPaginationNumberClasses(n)),a.uIk("aria-current",n.value===i.page?"page":""),a.xp6(2),a.hij(" ",n.label," ")}}function d(n,t){if(1&n){const n=a.EpF();a.TgZ(0,"ul",4),a.TgZ(1,"li",5),a.TgZ(2,"button",6,7),a.NdJ("click",function(){return a.CHM(n),a.oxw(2).onFirst()}),a._UZ(4,"nx-icon",8),a.qZA(),a.qZA(),a.TgZ(5,"li",9),a.TgZ(6,"button",10,7),a.NdJ("click",function(){return a.CHM(n),a.oxw(2).onPrev()}),a._UZ(8,"nx-icon",8),a.qZA(),a.qZA(),a.YNc(9,x,3,3,"li",11),a.YNc(10,u,4,4,"li",12),a.TgZ(11,"li",13),a.TgZ(12,"button",14,7),a.NdJ("click",function(){return a.CHM(n),a.oxw(2).onNext()}),a._UZ(14,"nx-icon",8),a.qZA(),a.qZA(),a.TgZ(15,"li",5),a.TgZ(16,"button",15,7),a.NdJ("click",function(){return a.CHM(n),a.oxw(2).onLast()}),a._UZ(18,"nx-icon",8),a.qZA(),a.qZA(),a.qZA()}if(2&n){const n=a.oxw(2);a.uIk("aria-label",n.paginationTexts.ariaLabel),a.xp6(2),a.ekj("is-disabled",n._isPaginationPreviousDisabled()),a.Q6J("disabled",n._isPaginationPreviousDisabled()),a.uIk("aria-label",n.paginationTexts.first),a.xp6(2),a.Q6J("name",n._isRTL?"arrow-last":"arrow-first"),a.xp6(2),a.ekj("is-disabled",n._isPaginationPreviousDisabled()),a.Q6J("disabled",n._isPaginationPreviousDisabled()),a.uIk("aria-label",n.paginationTexts.previous),a.xp6(2),a.Q6J("name",n._isRTL?"arrow-right":"arrow-left"),a.xp6(1),a.Q6J("ngForOf",n.getPages()),a.xp6(1),a.Q6J("ngForOf",n.getMobilePages()),a.xp6(2),a.ekj("is-disabled",n._isPaginationNextDisabled()),a.Q6J("disabled",n._isPaginationNextDisabled()),a.uIk("aria-label",n.paginationTexts.next),a.xp6(2),a.Q6J("name",n._isRTL?"arrow-left":"arrow-right"),a.xp6(2),a.ekj("is-disabled",n._isPaginationNextDisabled()),a.Q6J("disabled",n._isPaginationNextDisabled()),a.uIk("aria-label",n.paginationTexts.last),a.xp6(2),a.Q6J("name",n._isRTL?"arrow-first":"arrow-last")}}function h(n,t){if(1&n&&(a.TgZ(0,"nav",2),a.YNc(1,d,19,23,"ul",3),a.qZA()),2&n){const n=a.oxw();a.xp6(1),a.Q6J("ngIf",n.isPaginationContainerVisible())}}function m(n,t){if(1&n){const n=a.EpF();a.TgZ(0,"nav",21),a.TgZ(1,"button",22,7),a.NdJ("click",function(){return a.CHM(n),a.oxw().onPrev()}),a._UZ(3,"nx-icon",8),a.TgZ(4,"span",23),a._uU(5),a.qZA(),a.qZA(),a.TgZ(6,"div",24),a.TgZ(7,"span",25),a._uU(8),a.qZA(),a.TgZ(9,"span",26),a._uU(10),a.qZA(),a.TgZ(11,"span",27),a._uU(12),a.qZA(),a.qZA(),a.TgZ(13,"button",28,7),a.NdJ("click",function(){return a.CHM(n),a.oxw().onNext()}),a.TgZ(15,"span",23),a._uU(16),a.qZA(),a._UZ(17,"nx-icon",8),a.qZA(),a.qZA()}if(2&n){const n=a.oxw();a.uIk("aria-label",n.paginationTexts.ariaLabel),a.xp6(1),a.ekj("is-disabled",n._isPaginationPreviousDisabled()),a.Q6J("disabled",n._isPaginationPreviousDisabled()),a.uIk("aria-label",n.paginationTexts.previous),a.xp6(2),a.Q6J("name",n._isRTL?"arrow-right":"arrow-left"),a.xp6(2),a.hij(" ",n.paginationTexts.previous," "),a.xp6(3),a.Oqu(n.page),a.xp6(2),a.hij(" ",n.paginationTexts.ofLabel," "),a.xp6(2),a.Oqu(n.totalNumberPages),a.xp6(1),a.ekj("is-disabled",n._isPaginationNextDisabled()),a.Q6J("disabled",n._isPaginationNextDisabled()),a.uIk("aria-label",n.paginationTexts.next),a.xp6(3),a.hij(" ",n.paginationTexts.next," "),a.xp6(1),a.Q6J("name",n._isRTL?"arrow-left":"arrow-right")}}let P=(()=>{class n{constructor(n,t,i,o,s){this._dir=t,this.paginationUtilsService=i,this._changeDetectorRef=o,this._focusMonitor=s,this._type="simple",this.totalNumberPages=0,this.nxGoPrev=new a.vpe,this.nxGoNext=new a.vpe,this.nxGoPage=new a.vpe,this.paginationTexts=n||e.o,this._dirChangeSubscription=this._dir.change.subscribe(()=>{this._changeDetectorRef.detectChanges()})}get page(){return this._page}set page(n){this._page=n,this._changeDetectorRef.markForCheck()}get count(){return this._count}set count(n){this._count=n,this.totalNumberPages=this.calculateTotalPages(),this._changeDetectorRef.markForCheck()}get perPage(){return this._perPage}set perPage(n){this._perPage=n,this.totalNumberPages=this.calculateTotalPages(),this._changeDetectorRef.markForCheck()}get type(){return this._type}set type(n){this._type=n,this._changeDetectorRef.markForCheck()}ngOnInit(){this.totalNumberPages=this.calculateTotalPages()}ngAfterContentInit(){"advanced"===this.type&&(!this.paginationTexts.last||!this.paginationTexts.first)&&console.warn("Please define aria labels for the last and first arrows.")}ngAfterViewInit(){this._linkElements.forEach(n=>this._focusMonitor.monitor(n)),this._linkElementsPrevious=this._linkElements,this._linkElements.changes.subscribe(n=>{this._linkElementsPrevious.forEach(n=>this._focusMonitor.stopMonitoring(n)),this._linkElementsPrevious=this._linkElements,this._linkElements.forEach(n=>this._focusMonitor.monitor(n))})}ngOnDestroy(){var n;null===(n=this._linkElements)||void 0===n||n.forEach(n=>this._focusMonitor.stopMonitoring(n)),this._dirChangeSubscription.unsubscribe()}getMin(){return this.totalNumberPages>0?1:0}getMax(){let n=this._perPage*this._page;return n>this._count&&(n=this._count),n}calculateTotalPages(){return Math.ceil(this._count/this._perPage)||0}onPage(n){this.nxGoPage.emit(n)}onPrev(){this._isPaginationPreviousDisabled()||this.nxGoPrev.emit()}onNext(){this._isPaginationNextDisabled()||this.nxGoNext.emit()}onFirst(){this._isPaginationPreviousDisabled()||this.onPage(1)}onLast(){this._isPaginationNextDisabled()||this.onPage(this.totalNumberPages)}lastPage(){return this._perPage*this._page>=this._count}getPages(){return this.paginationUtilsService.getPages(this._page,this.totalNumberPages)}getMobilePages(){return this.paginationUtilsService.getMobilePages(this._page,this.totalNumberPages)}getPaginationItemClasses(n){return{"is-ellipsis":"..."===n.label,"nx-pagination__item--expanded-view":"expanded-view"===n.class}}getPaginationNumberClasses(n){return{"is-active":n.value===this.page,"nx-pagination__ellipsis":"..."===n.label,"nx-pagination__link":"..."!==n.label}}isPaginationVisible(){return this.count>0}isPaginationCompactVisible(){return this.type.includes("simple")&&this.count>0}isPaginationContainerVisible(){return this.type.includes("advanced")}_isPaginationPreviousDisabled(){return this.page===this.getMin()}_isPaginationNextDisabled(){return this.page===this.totalNumberPages}get _isRTL(){return"rtl"===this._dir.value}}return n.\u0275fac=function(t){return new(t||n)(a.Y36(e.g,8),a.Y36(o.Is,8),a.Y36(s.$),a.Y36(a.sBO),a.Y36(g.tE))},n.\u0275cmp=a.Xpm({type:n,selectors:[["nx-pagination"]],viewQuery:function(n,t){if(1&n&&a.Gf(l,5),2&n){let n;a.iGM(n=a.CRH())&&(t._linkElements=n)}},inputs:{page:["nxPage","page"],count:["nxCount","count"],perPage:["nxPerPage","perPage"],type:["nxType","type"]},outputs:{nxGoPrev:"nxGoPrev",nxGoNext:"nxGoNext",nxGoPage:"nxGoPage"},decls:2,vars:2,consts:[["aria-label","Page navigation","class","nx-pagination",4,"ngIf"],["class","nx-pagination-compact",4,"ngIf"],["aria-label","Page navigation",1,"nx-pagination"],["class","nx-pagination__container",4,"ngIf"],[1,"nx-pagination__container"],[1,"nx-pagination__item"],[1,"nx-pagination__link","nx-pagination__link--first",3,"disabled","click"],["link",""],[1,"nx-pagination__arrow",3,"name"],[1,"nx-pagination__item","nx-pagination__item-previous"],[1,"nx-pagination__link","nx-pagination__link--previous",3,"disabled","click"],["class","nx-pagination__item nx-pagination__item--desktop",3,"ngClass",4,"ngFor","ngForOf"],["class","nx-pagination__item nx-pagination__item--mobile",3,"ngClass",4,"ngFor","ngForOf"],[1,"nx-pagination__item","nx-pagination__item-next"],[1,"nx-pagination__link","nx-pagination__link--next",3,"disabled","click"],[1,"nx-pagination__link","nx-pagination__link--last",3,"disabled","click"],[1,"nx-pagination__item","nx-pagination__item--desktop",3,"ngClass"],["class","nx-pagination--number",3,"ngClass","click",4,"ngIf"],[4,"ngIf"],[1,"nx-pagination--number",3,"ngClass","click"],[1,"nx-pagination__item","nx-pagination__item--mobile",3,"ngClass"],[1,"nx-pagination-compact"],[1,"nx-pagination-compact__previous",3,"disabled","click"],[1,"nx-pagination-compact__direction-label"],[1,"nx-pagination-compact__display"],[1,"nx-pagination-compact__current-page"],[1,"nx-pagination-compact__page-separator"],[1,"nx-pagination-compact__total-pages"],[1,"nx-pagination-compact__next",3,"disabled","click"]],template:function(n,t){1&n&&(a.YNc(0,h,2,1,"nav",0),a.YNc(1,m,18,16,"nav",1)),2&n&&(a.Q6J("ngIf",t.isPaginationVisible()),a.xp6(1),a.Q6J("ngIf",t.isPaginationCompactVisible()))},directives:[r.O5,c.O,r.sg,r.mk],styles:["[_nghost-%COMP%]   button[_ngcontent-%COMP%]:focus{outline:none}[_nghost-%COMP%]   button[_ngcontent-%COMP%]::-moz-focus-inner{border:0}.nx-pagination__container[_ngcontent-%COMP%]{display:flex;font-size:var(--pagination-font-size);line-height:var(--pagination-line-height);font-weight:var(--pagination-font-weight);letter-spacing:var(--pagination-letter-spacing);padding:0}.nx-pagination__item[_ngcontent-%COMP%]{margin:0 16px;list-style:none;font-weight:var(--pagination-item-font-weight)}.nx-pagination__item[_ngcontent-%COMP%]:first-child{margin:0}.nx-pagination__item[_ngcontent-%COMP%]:last-child{margin:0}.nx-pagination__item.is-ellipsis[_ngcontent-%COMP%]{color:var(--pagination-text-color)}.nx-pagination__item--expanded-view[_ngcontent-%COMP%]{display:block}.nx-pagination__link[_ngcontent-%COMP%]{color:var(--pagination-link-color);padding:0;text-decoration:none;background-color:transparent;border:0;cursor:pointer}.nx-pagination__link.is-active[_ngcontent-%COMP%]{color:var(--pagination-text-color);font-weight:700;cursor:default}@media screen and (-ms-high-contrast: active){.nx-pagination__link.is-active[_ngcontent-%COMP%]{border-bottom:4px solid windowText}}nx-icon.nx-pagination__arrow[_ngcontent-%COMP%], nx-icon.nx-pagination__arrow[_ngcontent-%COMP%]{font-size:var(--pagination-icon-size)}.nx-pagination-compact[_ngcontent-%COMP%]{display:flex;font-size:var(--pagination-font-size);line-height:var(--pagination-line-height);font-weight:var(--pagination-font-weight);letter-spacing:var(--pagination-letter-spacing);padding:0}.nx-pagination-compact__display[_ngcontent-%COMP%]{color:var(--pagination-text-color);display:flex}.nx-pagination-compact__current-page[_ngcontent-%COMP%]{font-weight:700;margin-right:8px}[dir=rtl][_nghost-%COMP%]   .nx-pagination-compact__current-page[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-pagination-compact__current-page[_ngcontent-%COMP%]{margin-right:initial;margin-left:8px}.nx-pagination-compact__total-pages[_ngcontent-%COMP%]{margin-left:8px}[dir=rtl][_nghost-%COMP%]   .nx-pagination-compact__total-pages[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-pagination-compact__total-pages[_ngcontent-%COMP%]{margin-right:8px;margin-left:initial}.nx-pagination-compact__next[_ngcontent-%COMP%], .nx-pagination-compact__previous[_ngcontent-%COMP%], .nx-pagination__arrow-last[_ngcontent-%COMP%], .nx-pagination__arrow-first[_ngcontent-%COMP%]{color:var(--pagination-link-color);font-weight:var(--pagination-icon-font-weight);text-decoration:none;text-transform:uppercase;display:flex;align-items:center;padding:0;background-color:transparent;cursor:pointer;border:0}.nx-pagination-compact__previous[_ngcontent-%COMP%]{margin-right:32px}[dir=rtl][_nghost-%COMP%]   .nx-pagination-compact__previous[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-pagination-compact__previous[_ngcontent-%COMP%]{margin-right:initial;margin-left:32px}.nx-pagination-compact__next[_ngcontent-%COMP%]{margin-left:32px}[dir=rtl][_nghost-%COMP%]   .nx-pagination-compact__next[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-pagination-compact__next[_ngcontent-%COMP%]{margin-right:32px;margin-left:initial}.nx-pagination-compact__direction-label[_ngcontent-%COMP%]{display:block;font-size:var(--pagination-compact-direction-font-size);line-height:var(--pagination-compact-direction-line-height);font-weight:var(--pagination-compact-direction-font-weight);letter-spacing:var(--pagination-compact-direction-letter-spacing)}.nx-pagination-compact__direction-label[_ngcontent-%COMP%]:first-child{margin-right:8px}[dir=rtl][_nghost-%COMP%]   .nx-pagination-compact__direction-label[_ngcontent-%COMP%]:first-child, [dir=rtl]   [_nghost-%COMP%]   .nx-pagination-compact__direction-label[_ngcontent-%COMP%]:first-child{margin-right:initial;margin-left:8px}.nx-pagination-compact__direction-label[_ngcontent-%COMP%]:last-child{margin-left:8px}[dir=rtl][_nghost-%COMP%]   .nx-pagination-compact__direction-label[_ngcontent-%COMP%]:last-child, [dir=rtl]   [_nghost-%COMP%]   .nx-pagination-compact__direction-label[_ngcontent-%COMP%]:last-child{margin-right:8px;margin-left:initial}.nx-pagination-compact__previous.is-disabled[_ngcontent-%COMP%], .nx-pagination-compact__next.is-disabled[_ngcontent-%COMP%], .nx-pagination__link.is-disabled[_ngcontent-%COMP%]{color:var(--pagination-link-disabled-color);cursor:not-allowed}@media screen and (-ms-high-contrast: active){.nx-pagination-compact__previous.is-disabled[_ngcontent-%COMP%], .nx-pagination-compact__next.is-disabled[_ngcontent-%COMP%], .nx-pagination__link.is-disabled[_ngcontent-%COMP%]{color:GrayText}}.nx-pagination-compact__previous.cdk-keyboard-focused[_ngcontent-%COMP%], .nx-pagination-compact__next.cdk-keyboard-focused[_ngcontent-%COMP%], .nx-pagination__link.cdk-keyboard-focused[_ngcontent-%COMP%], .nx-pagination--number.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast: active){.nx-pagination-compact__previous.cdk-keyboard-focused[_ngcontent-%COMP%], .nx-pagination-compact__next.cdk-keyboard-focused[_ngcontent-%COMP%], .nx-pagination__link.cdk-keyboard-focused[_ngcontent-%COMP%], .nx-pagination--number.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}.nx-pagination__link--next[_ngcontent-%COMP%], .nx-pagination__link--previous[_ngcontent-%COMP%], .nx-pagination__link--first[_ngcontent-%COMP%], .nx-pagination__link--last[_ngcontent-%COMP%]{display:flex;align-items:center}.nx-pagination__item-next[_ngcontent-%COMP%]{margin-right:8px}[dir=rtl][_nghost-%COMP%]   .nx-pagination__item-next[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-pagination__item-next[_ngcontent-%COMP%]{margin-right:initial;margin-left:8px}.nx-pagination__item-previous[_ngcontent-%COMP%]{margin-left:8px}[dir=rtl][_nghost-%COMP%]   .nx-pagination__item-previous[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-pagination__item-previous[_ngcontent-%COMP%]{margin-right:8px;margin-left:initial}.nx-pagination-compact__direction-label[_ngcontent-%COMP%], .nx-pagination__link--first[_ngcontent-%COMP%], .nx-pagination__link--last[_ngcontent-%COMP%], .nx-pagination__item--desktop[_ngcontent-%COMP%]{display:flex}@media (max-width: 703px){.nx-pagination-compact__direction-label[_ngcontent-%COMP%], .nx-pagination__link--first[_ngcontent-%COMP%], .nx-pagination__link--last[_ngcontent-%COMP%], .nx-pagination__item--desktop[_ngcontent-%COMP%]{display:none}}.nx-pagination__item--mobile[_ngcontent-%COMP%]{display:none}@media (max-width: 703px){.nx-pagination__item--mobile[_ngcontent-%COMP%]{display:block}}"],changeDetection:0}),n})()},90471:function(n,t,i){i.d(t,{gx:function(){return r.g},wu:function(){return g}});var a=i(38583),e=i(42677),o=i(88683),s=i(37716);let g=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({providers:[o.$],imports:[[a.ez,e.cf]]}),n})();i(21470);var r=i(27912)}}]);