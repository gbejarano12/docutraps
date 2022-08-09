"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[6553],{16553:function(e,r,t){t.r(r),t.d(r,{createLabelFunction:function(){return h},formatField:function(){return g}});var n=t(74165),a=t(37762),u=t(15861),i=t(10064),l=t(32718),s=t(76969),c=t(6291),o=t(80031),f=t(93253),p=t(819),d=l.Z.getLogger("esri.layers.support.labelFormatUtils"),v={type:"simple",evaluate:function(){return null}},b={getAttribute:function(e,r){return e.field(r)}};function h(e,r,t){return y.apply(this,arguments)}function y(){return y=(0,u.Z)((0,n.Z)().mark((function e(r,a,u){var l,s,c,o,h,y,w;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&r.symbol){e.next=2;break}return e.abrupt("return",v);case 2:if(l=r.where,s=(0,f.hV)(r),!l){e.next=10;break}return e.next=7,t.e(8562).then(t.bind(t,48562));case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=null;case 11:if(c=e.t0,"arcade"!==s.type){e.next=19;break}return e.next=15,(0,p.WW)(s.expression,u,a);case 15:h=e.sent,o={type:"arcade",evaluate:function(e){try{var r=h.evaluate({$feature:"attributes"in e?h.repurposeFeature(e):e});if(null!=r)return r.toString()}catch(u){d.error(new i.Z("arcade-expression-error","Encountered an error when evaluating label expression for feature",{feature:e,expression:s}))}return null},needsHydrationToEvaluate:function(){return null==(0,f.el)(s.expression)}},e.next=20;break;case 19:o={type:"simple",evaluate:function(e){return s.expression.replace(/{[^}]*}/g,(function(r){var t=r.slice(1,-1),n=a.get(t);if(!n)return r;var u=null;return"attributes"in e?e&&e.attributes&&(u=e.attributes[n.name]):u=e.field(n.name),null==u?"":g(u,n)}))}};case 20:if(!l){e.next=30;break}e.prev=21,y=c.WhereClause.create(l,a),e.next=28;break;case 25:return e.prev=25,e.t1=e.catch(21),e.abrupt("return",(d.error(new i.Z("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:l,error:e.t1})),v));case 28:w=o.evaluate,o.evaluate=function(e){var r="attributes"in e?void 0:b;try{if(y.testFeature(e,r))return w(e)}catch(t){d.error(new i.Z("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:l,feature:e,error:t}))}return null};case 30:return e.abrupt("return",o);case 31:case"end":return e.stop()}}),e,null,[[21,25]])}))),y.apply(this,arguments)}function g(e,r){if(null==e)return"";var t=r.domain;if(t)if("codedValue"===t.type||"coded-value"===t.type){var n,u=e,i=(0,a.Z)(t.codedValues);try{for(i.s();!(n=i.n()).done;){var l=n.value;if(l.code===u)return l.name}}catch(b){i.e(b)}finally{i.f()}}else if("range"===t.type){var f=+e,p="range"in t?t.range[0]:t.minValue,d="range"in t?t.range[1]:t.maxValue;if(p<=f&&f<=d)return t.name}var v=e;return"date"===r.type||"esriFieldTypeDate"===r.type?v=(0,s.p6)(v,(0,s.Ze)("short-date")):(0,o.H7)(r)&&(v=(0,c.uf)(+v)),v||""}}}]);
//# sourceMappingURL=6553.975c71bb.chunk.js.map