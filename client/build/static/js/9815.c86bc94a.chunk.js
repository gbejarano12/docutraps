"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[9815],{6388:function(e,t,r){r.d(t,{Fp:function(){return f},RL:function(){return m},UV:function(){return u},bk:function(){return s}});var i=r(29439),n=r(37762),a=r(46228),o=r(77981),l=r(691);function f(e){if(!e)return null;switch(e.type){case"CIMPointSymbol":var t=e.symbolLayers;return t&&1===t.length?f(t[0]):null;case"CIMVectorMarker":var r,i=e.markerGraphics;if(!i||1!==i.length)return null;var n=i[0];if(!n)return null;var a=n.geometry;if(!a)return null;var o=n.symbol;return!o||"CIMPolygonSymbol"!==o.type&&"CIMLineSymbol"!==o.type||null!==(r=o.symbolLayers)&&void 0!==r&&r.some((function(e){return!!e.effects}))?null:{geom:a,asFill:"CIMPolygonSymbol"===o.type};case"sdf":return{geom:e.geom,asFill:e.asFill}}return null}function c(e){var t,r=1/0,i=-1/0,a=1/0,o=-1/0,l=(0,n.Z)(e);try{for(l.s();!(t=l.n()).done;){var f,c=t.value,s=(0,n.Z)(c);try{for(s.s();!(f=s.n()).done;){var u=f.value;u[0]<r&&(r=u[0]),u[0]>i&&(i=u[0]),u[1]<a&&(a=u[1]),u[1]>o&&(o=u[1])}}catch(m){s.e(m)}finally{s.f()}}}catch(m){l.e(m)}finally{l.f()}return[r,a,i,o]}function s(e){return e?e.rings?c(e.rings):e.paths?c(e.paths):(0,o.YX)(e)?[e.xmin,e.ymin,e.xmax,e.ymax]:null:null}function u(e,t,r,n,a){var o=(0,i.Z)(e,4),l=o[0],f=o[1],c=o[2],s=o[3];if(c<l||s<f)return[0,0,0];var u=c-l,m=s-f,v=Math.floor(31.5),y=(128-2*(v+1))/Math.max(u,m),p=Math.round(u*y)+2*v,h=Math.round(m*y)+2*v,d=1;t&&(d=h/y/(t.ymax-t.ymin));var g=0,N=0;if(n)if(a){if(t&&r&&t.ymax-t.ymin>0){var S=(t.xmax-t.xmin)/(t.ymax-t.ymin);g=n.x/(r*S),N=n.y/r}}else g=n.x,N=n.y;return g=.5*(t.xmax+t.xmin)+g*(t.xmax-t.xmin),N=.5*(t.ymax+t.ymin)+N*(t.ymax-t.ymin),g-=l,N-=f,g*=y,N*=y,[d,(g+=v)/p-.5,-((N+=v)/h-.5)]}function m(e){var t,r=function(e){return e?e.rings?e.rings:e.paths?e.paths:void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax?[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]:null:null}(e.geom),a=function(e){var t,r=1/0,i=-1/0,a=1/0,o=-1/0,f=(0,n.Z)(e);try{for(f.s();!(t=f.n()).done;){var c,s=t.value,u=(0,n.Z)(s);try{for(u.s();!(c=u.n()).done;){var m=c.value;m[0]<r&&(r=m[0]),m[0]>i&&(i=m[0]),m[1]<a&&(a=m[1]),m[1]>o&&(o=m[1])}}catch(v){u.e(v)}finally{u.f()}}}catch(v){f.e(v)}finally{f.f()}return new l.Z(r,a,i-r,o-a)}(r),o=Math.floor(31.5),f=(128-2*(o+1))/Math.max(a.width,a.height),c=Math.round(a.width*f)+2*o,s=Math.round(a.height*f)+2*o,u=[],m=(0,n.Z)(r);try{for(m.s();!(t=m.n()).done;){var y=t.value;if(y&&y.length>1){var p,h=[],d=(0,n.Z)(y);try{for(d.s();!(p=d.n()).done;){var g=p.value,N=(0,i.Z)(g,2),S=N[0],b=N[1];S-=a.x,b-=a.y,S*=f,b*=f,S+=o-.5,b+=o-.5,e.asFill?h.push([S,b]):h.push([Math.round(S),Math.round(b)])}}catch(O){d.e(O)}finally{d.f()}if(e.asFill){var k=h.length-1;h[0][0]===h[k][0]&&h[0][1]===h[k][1]||h.push(h[0])}u.push(h)}}}catch(O){m.e(O)}finally{m.f()}var C=function(e,t,r,i){for(var a=t*r,o=new Array(a),l=i*i+1,f=0;f<a;++f)o[f]=l;var c,s=(0,n.Z)(e);try{for(s.s();!(c=s.n()).done;)for(var u=c.value,m=u.length,v=1;v<m;++v){var y=u[v-1],p=u[v],h=void 0,d=void 0,g=void 0,N=void 0;y[0]<p[0]?(h=y[0],d=p[0]):(h=p[0],d=y[0]),y[1]<p[1]?(g=y[1],N=p[1]):(g=p[1],N=y[1]);var S=Math.floor(h)-i,b=Math.floor(d)+i,k=Math.floor(g)-i,C=Math.floor(N)+i;S<0&&(S=0),b>t&&(b=t),k<0&&(k=0),C>r&&(C=r);for(var P=p[0]-y[0],M=p[1]-y[1],x=P*P+M*M,A=S;A<b;A++)for(var w=k;w<C;w++){var Z=void 0,L=void 0,I=(A-y[0])*P+(w-y[1])*M;I<0?(Z=y[0],L=y[1]):I>x?(Z=p[0],L=p[1]):(I/=x,Z=y[0]+I*P,L=y[1]+I*M);var z=(A-Z)*(A-Z)+(w-L)*(w-L),R=(r-w-1)*t+A;z<o[R]&&(o[R]=z)}}}catch(O){s.e(O)}finally{s.f()}for(var X=0;X<a;++X)o[X]=Math.sqrt(o[X]);return o}(u,c,s,o);return e.asFill&&function(e,t,r,i,a){var o,l=(0,n.Z)(e);try{for(l.s();!(o=l.n()).done;)for(var f=o.value,c=f.length,s=1;s<c;++s){var u=f[s-1],m=f[s],v=void 0,y=void 0,p=void 0,h=void 0;u[0]<m[0]?(v=u[0],y=m[0]):(v=m[0],y=u[0]),u[1]<m[1]?(p=u[1],h=m[1]):(p=m[1],h=u[1]);var d=Math.floor(v),g=Math.floor(y)+1,N=Math.floor(p),S=Math.floor(h)+1;d<i&&(d=i),g>t-i&&(g=t-i),N<i&&(N=i),S>r-i&&(S=r-i);for(var b=N;b<S;++b)if(u[1]>b!=m[1]>b){for(var k=(r-b-1)*t,C=d;C<g;++C)C<(m[0]-u[0])*(b-u[1])/(m[1]-u[1])+u[0]&&(a[k+C]=-a[k+C]);for(var P=i;P<d;++P)a[k+P]=-a[k+P]}}}catch(O){l.e(O)}finally{l.f()}}(u,c,s,o,C),[v(C,o),c,s]}function v(e,t){for(var r=2*t,i=e.length,n=new Uint8Array(4*i),o=0;o<i;++o){var l=.5-e[o]/r;(0,a.I)(l,n,4*o)}return n}},79815:function(e,t,r){r.d(t,{S:function(){return te},c:function(){return I}});var i=r(74165),n=r(1413),a=r(37762),o=r(29439),l=r(93433),f=r(15861),c=r(51995),s=r(84652),u=r(32718),m=r(92026),v=r(17842),y=r(643),p=r(819),h=r(78915),d=r(48202),g=r(6388),N=r(31027),S=r(95954),b=r(91935),k=r(94109),C=r(88750),O=r(93592),P=u.Z.getLogger("esri.symbols.cim.cimAnalyzer");function M(e){switch(e){case"Butt":return d.RL.BUTT;case"Square":return d.RL.SQUARE;default:return d.RL.ROUND}}function x(e){switch(e){case"Bevel":return d.AH.BEVEL;case"Miter":return d.AH.MITER;default:return d.AH.ROUND}}function A(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":return"center";case"Justify":return P.warnOnce("Horizontal alignment 'justify' is not implemented. Falling back to 'center'."),"center"}}function w(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function Z(e,t,r,i){var n;e[t]?n=e[t]:(n={},e[t]=n),n[r]=i}function L(e){var t=e.markerPlacement;return t&&t.angleToLine?d.v2.MAP:d.v2.SCREEN}function I(e,t,r,i,n){return z.apply(this,arguments)}function z(){return(z=(0,f.Z)((0,i.Z)().mark((function e(t,r,n,o,l){var f,c,s,u,m,v,y,h,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f=null!==o&&void 0!==o?o:[],t){e.next=3;break}return e.abrupt("return",f);case 3:if(u={},"CIMSymbolReference"===t.type){e.next=6;break}return e.abrupt("return",(P.error("Expect cim type to be 'CIMSymbolReference'"),f));case 6:if(c=t.symbol,!(s=t.primitiveOverrides)){e.next=14;break}m=[],v=(0,a.Z)(s);try{for(h=function(){var e=y.value,t=e.valueExpressionInfo;if(t&&r){var i=t.expression,n=(0,p.Yi)(i,r.spatialReference,r.fields).then((function(t){t&&Z(u,e.primitiveName,e.propertyName,t)}));m.push(n)}else null!=e.value&&Z(u,e.primitiveName,e.propertyName,e.value)},v.s();!(y=v.n()).done;)h()}catch(i){v.e(i)}finally{v.f()}if(e.t0=m.length>0,!e.t0){e.next=14;break}return e.next=14,Promise.all(m);case 14:if(ie(c,n,d=[]),e.t2=d.length>0,!e.t2){e.next=20;break}return e.next=20,Promise.all(d);case 20:e.t1=c.type,e.next="CIMPointSymbol"===e.t1||"CIMLineSymbol"===e.t1||"CIMPolygonSymbol"===e.t1?23:24;break;case 23:R(c,s,u,r,f,n,l);case 24:return e.abrupt("return",f);case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e,t,r,i,n,a,o){if(e){var f=e.symbolLayers;if(f){var c,s=e.effects,u=h.B$.getSize(e);"CIMPointSymbol"===e.type&&"Map"===e.angleAlignment&&(c=d.v2.MAP);for(var m=f.length;m--;){var v,y=f[m];if(y&&!1!==y.enable){var p=void 0;s&&s.length&&(p=(0,l.Z)(s));var g=y.effects;g&&g.length&&(s?(v=p).push.apply(v,(0,l.Z)(g)):p=(0,l.Z)(g));var N,S=[];h.E0.findEffectOverrides(p,t,S),N=S.length>0?K(p,S,r,i):p;var b=[];switch(h.E0.findApplicableOverrides(y,t,b),y.type){case"CIMSolidFill":X(y,N,r,b,i,n);break;case"CIMPictureFill":J(y,N,r,b,i,a,n);break;case"CIMHatchFill":H(y,N,r,b,i,n);break;case"CIMGradientFill":Y(y,N,r,b,i,n);break;case"CIMSolidStroke":E(y,N,r,b,i,n,"CIMPolygonSymbol"===e.type,u);break;case"CIMPictureStroke":F(y,N,r,b,i,n,"CIMPolygonSymbol"===e.type,u);break;case"CIMGradientStroke":T(y,N,r,b,i,n,"CIMPolygonSymbol"===e.type,u);break;case"CIMCharacterMarker":if(B(y,N,r,b,i,n))break;break;case"CIMPictureMarker":if(B(y,N,r,b,i,n))break;"CIMLineSymbol"===e.type&&(c=L(y)),$(y,N,r,b,i,a,n,c,u);break;case"CIMVectorMarker":if(B(y,N,r,b,i,n))break;"CIMLineSymbol"===e.type&&(c=L(y)),G(y,N,r,b,i,n,a,c,u,o);break;default:P.error("Cannot analyze CIM layer",y.type)}}}}}}function X(e,t,r,i,n,a){var l=e.primitiveName,f=(0,N.NO)(e.color),c=re(i,l,t,null,null),s=(0,o.Z)(c,2),u=s[0],m=s[1],v=(0,y.hP)(JSON.stringify(e)+m).toString();a.push({type:"fill",templateHash:v,materialHash:u?function(){return v}:v,cim:e,materialOverrides:null,colorLocked:e.colorLocked,color:q(l,r,"Color",n,f,V),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:t,applyRandomOffset:!1,sampleAlphaOnly:!0})}function J(e,t,r,i,n,a,l){var f=e.primitiveName,c=e.tintColor?(0,N.NO)(e.tintColor):{r:255,g:255,b:255,a:1},s=re(i,f,t,null,null),u=(0,o.Z)(s,2),v=u[0],p=u[1],h=(0,y.hP)(JSON.stringify(e)+p).toString(),d=(0,y.hP)("".concat(e.url).concat(JSON.stringify(e.colorSubstitutions))).toString(),g=(0,N.NA)(e.scaleX);if("width"in e){var S=e.width,b=1,k=a.getResource(e.url);(0,m.pC)(k)&&(b=k.width/k.height),g/=b*(e.height/S)}l.push({type:"fill",templateHash:h,materialHash:v?function(){return d}:d,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:q(f,r,"TintColor",n,c,V),height:q(f,r,"Height",n,e.height),scaleX:q(f,r,"ScaleX",n,g),angle:q(f,r,"Rotation",n,(0,N.NA)(e.rotation)),offsetX:q(f,r,"OffsetX",n,(0,N.NA)(e.offsetX)),offsetY:q(f,r,"OffsetY",n,(0,N.NA)(e.offsetY)),url:e.url,applyRandomOffset:!1,sampleAlphaOnly:!1})}function H(e,t,r,i,n,a){var l=["Rotation","OffsetX","OffsetY"],f=i.filter((function(t){return t.primitiveName!==e.primitiveName&&!l.includes(t.propertyName)})),c=e.primitiveName,s=re(i,c,t,null,null),u=(0,o.Z)(s,2),m=u[0],v=u[1],p=(0,y.hP)(JSON.stringify(e)+v).toString(),h=(0,y.hP)("".concat(e.separation).concat(JSON.stringify(e.lineSymbol))).toString(),d={r:255,g:255,b:255,a:1};if(e.lineSymbol){var g,S=null===(g=e.lineSymbol)||void 0===g?void 0:g.symbolLayers.find((function(e){return"CIMSolidStroke"===e.type}));S&&(d=(0,N.NO)(S.color))}a.push({type:"fill",templateHash:p,materialHash:m?ee(h,r,f,n):h,cim:e,materialOverrides:f,colorLocked:e.colorLocked,effects:t,color:d,height:q(c,r,"Separation",n,e.separation),scaleX:1,angle:q(c,r,"Rotation",n,(0,N.NA)(e.rotation)),offsetX:q(c,r,"OffsetX",n,(0,N.NA)(e.offsetX)),offsetY:q(c,r,"OffsetY",n,(0,N.NA)(e.offsetY)),applyRandomOffset:!1,sampleAlphaOnly:!0})}function Y(e,t,r,i,n,a){var l=re(i,e.primitiveName,t,null,null),f=(0,o.Z)(l,2),c=f[0],s=f[1],u=(0,y.hP)(JSON.stringify(e)+s).toString();a.push({type:"fill",templateHash:u,materialHash:c?ee(u,r,i,n):u,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,applyRandomOffset:!1,sampleAlphaOnly:!1})}function E(e,t,r,i,n,a,f,c){var s,u,m=e.primitiveName,v=(0,N.NO)(e.color),p=void 0!==e.width?e.width:4,h=M(e.capStyle),d=x(e.joinStyle),g=e.miterLimit,S=re(i,m,t,null,null),b=(0,o.Z)(S,2),k=b[0],C=b[1],O=(0,y.hP)(JSON.stringify(e)+C).toString();if(t&&t instanceof Array&&t.length>0){var P=t[t.length-1];if("CIMGeometricEffectDashes"===P.type&&"NoConstraint"===P.lineDashEnding&&null===P.offsetAlongLine){var A=(t=(0,l.Z)(t)).pop();s=A.dashTemplate,u=A.scaleDash}}a.push({type:"line",templateHash:O,materialHash:k?function(){return O}:O,cim:e,materialOverrides:null,isOutline:f,colorLocked:e.colorLocked,effects:t,color:q(m,r,"Color",n,v,V),width:q(m,r,"Width",n,p),cap:q(m,r,"CapStyle",n,h),join:q(m,r,"JoinStyle",n,d),miterLimit:q(m,r,"MiterLimit",n,g),referenceWidth:c,zOrder:j(e.name),dashTemplate:s,scaleDash:u,sampleAlphaOnly:!0})}function F(e,t,r,i,n,a,l,f){var c=(0,y.hP)("".concat(e.url).concat(JSON.stringify(e.colorSubstitutions))).toString(),s=e.primitiveName,u=(0,N.NO)(e.tintColor),m=void 0!==e.width?e.width:4,v=M(e.capStyle),p=x(e.joinStyle),h=e.miterLimit,d=re(i,s,t,null,null),g=(0,o.Z)(d,2),S=g[0],b=g[1],k=(0,y.hP)(JSON.stringify(e)+b).toString();a.push({type:"line",templateHash:k,materialHash:S?function(){return c}:c,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:t,color:q(s,r,"TintColor",n,u,V),width:q(s,r,"Width",n,m),cap:q(s,r,"CapStyle",n,v),join:q(s,r,"JoinStyle",n,p),miterLimit:q(s,r,"MiterLimit",n,h),referenceWidth:f,zOrder:j(e.name),dashTemplate:null,scaleDash:!1,url:e.url,sampleAlphaOnly:!1})}function T(e,t,r,i,n,a,l,f){var c=e.primitiveName,s=void 0!==e.width?e.width:4,u=M(e.capStyle),m=x(e.joinStyle),v=e.miterLimit,p=re(i,c,t,null,null),h=(0,o.Z)(p,2),d=h[0],g=h[1],N=(0,y.hP)(JSON.stringify(e)+g).toString();a.push({type:"line",templateHash:N,materialHash:d?ee(N,r,i,n):N,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},width:q(c,r,"Width",n,s),cap:q(c,r,"CapStyle",n,u),join:q(c,r,"JoinStyle",n,m),miterLimit:q(c,r,"MiterLimit",n,v),referenceWidth:f,zOrder:j(e.name),dashTemplate:null,scaleDash:!1,sampleAlphaOnly:!1})}function B(e,t,r,i,n,a){var l=e.markerPlacement;if(!l||"CIMMarkerPlacementInsidePolygon"!==l.type)return!1;var f=l,c=Math.abs(f.stepX),s=Math.abs(f.stepY);if(0===c||0===s)return!0;var u,m,p=["Rotation","OffsetX","OffsetY"],h=i.filter((function(t){return t.primitiveName!==e.primitiveName&&!p.includes(t.propertyName)})),d="url"in e?e.url:null,g=re(i,f.primitiveName,t,null,null),S=(0,o.Z)(g,2),b=S[0],C=S[1],O=(0,y.hP)(JSON.stringify(e)+C).toString(),P=null;if("Random"===l.gridType){var M=(0,v.Wz)(k.C1),x=Math.max(Math.floor(M/c),1),A=Math.max(Math.floor(M/s),1);P=function(e){return e?e*A:0},m=x*c/(u=s*A)}else l.shiftOddRows?(u=2*s,P=function(e){return e?2*e:0},m=c/s*.5):(u=s,P=null,m=c/s);var w={r:255,g:255,b:255,a:1};return"tintColor"in e&&(w=(0,N.NO)(e.tintColor)),a.push({type:"fill",templateHash:O,materialHash:b?ee(O,r,h,n):O,cim:e,materialOverrides:h,colorLocked:e.colorLocked,effects:t,color:q(f.primitiveName,r,"TintColor",n,w,V),height:q(f.primitiveName,r,"StepY",n,u,P),scaleX:m,angle:q(f.primitiveName,r,"GridAngle",n,f.gridAngle),offsetX:q(f.primitiveName,r,"OffsetX",n,(0,N.NA)(f.offsetX)),offsetY:q(f.primitiveName,r,"OffsetY",n,(0,N.NA)(f.offsetY)),url:d,applyRandomOffset:"Random"===l.gridType,sampleAlphaOnly:!d}),!0}function $(e,t,r,i,n,l,f,c,u){var v,d=e.primitiveName,g=(0,N.NA)(e.size),S=(0,N.NA)(e.scaleX),k=(0,N.NA)(e.rotation),C=(0,N.NA)(e.offsetX),P=(0,N.NA)(e.offsetY),M=e.tintColor?(0,N.NO)(e.tintColor):{r:255,g:255,b:255,a:1},x=(0,y.hP)("".concat(e.url).concat(JSON.stringify(e.colorSubstitutions)).concat(JSON.stringify(e.animatedSymbolProperties))).toString(),A=_(e.markerPlacement,i,r,n),w=function(e,t,r,i){var n=[];if(h.E0.findApplicableOverrides(e,t,n),0===n.length)return e;for(var o=0,l=n;o<l.length;o++){var f=l[o];f.valueExpressionInfo&&function(){var e=r[f.primitiveName]&&r[f.primitiveName][f.propertyName];e instanceof p.mz&&(f.fn=function(t,r,n){return(0,b.Z)(e,t,{$view:n},i.geometryType,r)})}()}return function(t,r,i){var o,l=(0,a.Z)(n);try{for(l.s();!(o=l.n()).done;){var f=o.value;f.fn&&(f.value=f.fn(t,r,i))}}catch(h){l.e(h)}finally{l.f()}var c,u=(0,s.d9)(e),m=e.primitiveName,v=(0,a.Z)(n);try{for(v.s();!(c=v.n()).done;){var y=c.value;if(y.primitiveName===m){var p=Q(y.propertyName);null!=y.value&&y.value!==u[p]&&(u[p]=y.value)}}}catch(h){v.e(h)}finally{v.f()}return u}}(e.animatedSymbolProperties,i,r,n),Z=re(i,d,t,A,w),L=(0,o.Z)(Z,2),I=L[0],z=L[1],R=(0,y.hP)(JSON.stringify(e)+z).toString(),X=null!==(v=e.anchorPoint)&&void 0!==v?v:{x:0,y:0};if("width"in e){var J=e.width,H=1,Y=l.getResource(e.url);(0,m.pC)(Y)&&(H=Y.width/Y.height),S/=H*(g/J)}function E(e,t){return(0,N.hf)(w,e,t)}var F=e.animatedSymbolProperties&&!0===e.animatedSymbolProperties.randomizeStartTime?function(e,t,r,i){var n=(0,O.$)(i),a=E(e,t);return x+"-MATERIALGROUP(".concat(n,")")+"-ASP(".concat(JSON.stringify(a),")")}:I?function(e,t){var r=E(e,t);return x+"-ASP(".concat(JSON.stringify(r),")")}:x;f.push({type:"marker",templateHash:R,materialHash:F,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:!1,alignment:c,size:q(d,r,"Size",n,g),scaleX:q(d,r,"ScaleX",n,S),rotation:q(d,r,"Rotation",n,k),offsetX:q(d,r,"OffsetX",n,C),offsetY:q(d,r,"OffsetY",n,P),color:q(d,r,"TintColor",n,M,V),anchorPoint:{x:X.x,y:-X.y},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:e.rotateClockwise,referenceSize:u,sizeRatio:1,markerPlacement:A,url:e.url,animatedSymbolProperties:w})}function G(e,t,r,i,n,o,l,f,c,s){var u=e.markerGraphics;if(u){var m=0;if(e.scaleSymbolsProportionally){var v=e.frame;v&&(m=v.ymax-v.ymin)}var y,p=_(e.markerPlacement,i,r,n),h=(0,a.Z)(u);try{for(h.s();!(y=h.n()).done;){var d=y.value;if(d){var g=d.symbol;if(!g)continue;switch(g.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":W(e,t,p,null,d,i,r,n,o,l,f,c,m,s);break;case"CIMTextSymbol":U(e,t,p,d,r,i,n,o,f,c,m)}}}}catch(N){h.e(N)}finally{h.f()}}}function U(e,t,r,i,a,l,f,c,s,u,m){h.E0.findApplicableOverrides(i,l,[]);var v=i.geometry;if("x"in v&&"y"in v){var p=i.symbol,d=function(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}(p),g=function(e){var t="",r="";if(e){var i=e.toLowerCase();i.includes("italic")?t="italic":i.includes("oblique")&&(t="oblique"),i.includes("bold")?r="bold":i.includes("light")&&(r="lighter")}return{style:t,weight:r}}(p.fontStyleName),S=(0,C.BN)(p.fontFamilyName);p.font=(0,n.Z)({family:S,decoration:d},g);var b=e.frame,k=v.x-.5*(b.xmin+b.xmax),O=v.y-.5*(b.ymin+b.ymax),P=e.size/m,M=e.primitiveName,x=(0,N.NA)(p.height)*P,Z=(0,N.NA)(p.angle),L=(0,N.NA)(e.offsetX)+((0,N.NA)(p.offsetX)+k)*P,I=(0,N.NA)(e.offsetY)+((0,N.NA)(p.offsetY)+O)*P,z=(0,N.NO)(h.B$.getFillColor(p)),R=(0,N.NO)(h.B$.getStrokeColor(p)),X=h.B$.getStrokeWidth(p);X||(R=(0,N.NO)(h.B$.getFillColor(p.haloSymbol)),X=p.haloSize*P);var J=re(l,M,t,r,null),H=(0,o.Z)(J,2),Y=H[0],E=H[1],F=JSON.stringify(e.effects)+Number(e.colorLocked)+JSON.stringify(e.anchorPoint)+e.anchorPointUnits+JSON.stringify(e.markerPlacement),T=(0,y.hP)(JSON.stringify(i)+F+E).toString(),B=q(i.primitiveName,a,"TextString",f,i.textString,N.X3,p.textCase);if(null!=B){var $=p.fontStyleName,G=S+($?"-"+$.toLowerCase():"-regular"),U=G;"string"==typeof B&&B.includes("[")&&p.fieldMap&&(B=(0,N.Qs)(p.fieldMap,B,p.textCase)),c.push({type:"text",templateHash:T,materialHash:Y||"function"==typeof B||B.match(/\[(.*?)\]/)?function(e,t,r){return U+"-"+(0,N.hf)(B,e,t,r)}:U+"-"+(0,y.hP)(B),cim:p,materialOverrides:null,colorLocked:e.colorLocked,effects:t,alignment:s,anchorPoint:{x:e.anchorPoint?e.anchorPoint.x:0,y:e.anchorPoint?e.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,fontName:G,decoration:d,weight:q(M,a,"Weight",f,g.weight),style:q(M,a,"Size",f,g.style),size:q(M,a,"Size",f,x),angle:q(M,a,"Rotation",f,Z),offsetX:q(M,a,"OffsetX",f,L),offsetY:q(M,a,"OffsetY",f,I),horizontalAlignment:A(p.horizontalAlignment),verticalAlignment:w(p.verticalAlignment),text:B,color:z,outlineColor:R,outlineSize:X,referenceSize:u,sizeRatio:1,markerPlacement:r})}}}function W(e,t,r,i,l,f,c,s,u,v,p,d,b,k){var C=l.symbol,O=C.symbolLayers;if(O)if(k)D(e,t,r,i,l,c,f,s,u,v,p,d,b);else{var P=O.length;if(ae(O))!function(e,t,r,i,l,f,c,s,u,m,v,p,d){var S=l.geometry,b=f[0],k=f[1],C=(0,g.bk)(S);if(!C)return;var O,P=(0,g.UV)(C,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),M=(0,o.Z)(P,3),x=M[0],A=M[1],w=M[2],Z={type:"sdf",geom:S,asFill:!0},L=e.primitiveName,I=(0,N.NA)(e.size),z=(0,N.NA)(e.rotation),R=(0,N.NA)(e.offsetX),X=(0,N.NA)(e.offsetY),J=k.path,H=k.primitiveName,Y=b.primitiveName,E=(0,N.NO)(h.B$.getFillColor(k)),F=(0,N.NO)(h.B$.getStrokeColor(b)),T=h.B$.getStrokeWidth(b),B=!1,$="",G=(0,a.Z)(c);try{for(G.s();!(O=G.n()).done;){var U=O.value;U.primitiveName!==H&&U.primitiveName!==Y&&U.primitiveName!==L||(void 0!==U.value?$+="-".concat(U.primitiveName,"-").concat(U.propertyName,"-").concat(JSON.stringify(U.value)):U.valueExpressionInfo&&(B=!0))}}catch(Q){G.e(Q)}finally{G.f()}var W=JSON.stringify((0,n.Z)((0,n.Z)({},e),{},{markerGraphics:null})),D=(0,y.hP)(JSON.stringify(Z)+J).toString(),j={type:"marker",templateHash:(0,y.hP)(JSON.stringify(l)+JSON.stringify(k)+JSON.stringify(b)+W+$).toString(),materialHash:B?function(){return D}:D,cim:Z,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:v,anchorPoint:{x:A,y:w},isAbsoluteAnchorPoint:!1,size:q(e.primitiveName,s,"Size",u,I),rotation:q(e.primitiveName,s,"Rotation",u,z),offsetX:q(e.primitiveName,s,"OffsetX",u,R),offsetY:q(e.primitiveName,s,"OffsetY",u,X),scaleX:1,frameHeight:d,rotateClockwise:e.rotateClockwise,referenceSize:p,sizeRatio:x,color:q(H,s,"Color",u,E,V),outlineColor:q(Y,s,"Color",u,F,V),outlineWidth:q(Y,s,"Width",u,T),markerPlacement:r,path:J,animatedSymbolProperties:i};m.push(j)}(e,t,r,i,l,O,f,c,s,u,p,d,b);else{var M=S.j.applyEffects(C.effects,l.geometry,v.geometryEngine);if(M)for(;P--;){var x=O[P];if(x&&!1!==x.enable)switch(x.type){case"CIMSolidFill":case"CIMSolidStroke":var A=function(){var k,C=S.j.applyEffects(x.effects,M,v.geometryEngine),O=(0,g.bk)(C);if(!O)return"continue";var P=(0,g.UV)(O,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),A=(0,o.Z)(P,3),w=A[0],Z=A[1],L=A[2],I="CIMSolidFill"===x.type,z={type:"sdf",geom:C,asFill:I},R=e.primitiveName,X=null!==(k=(0,N.NA)(e.size))&&void 0!==k?k:10,J=(0,N.NA)(e.rotation),H=(0,N.NA)(e.offsetX),Y=(0,N.NA)(e.offsetY),E=x.path,F=x.primitiveName,T=(0,N.NO)(I?h.B$.getFillColor(x):h.B$.getStrokeColor(x)),B=I?{r:0,g:0,b:0,a:0}:(0,N.NO)(h.B$.getStrokeColor(x)),$=h.B$.getStrokeWidth(x);if(!I&&!$)return"break";var G,U=!1,W="",D=(0,a.Z)(f);try{for(D.s();!(G=D.n()).done;){var j=G.value;j.primitiveName!==F&&j.primitiveName!==R||(void 0!==j.value?W+="-".concat(j.primitiveName,"-").concat(j.propertyName,"-").concat(JSON.stringify(j.value)):j.valueExpressionInfo&&(U=!0))}}catch(ee){D.e(ee)}finally{D.f()}(0,m.pC)(t)&&"function"==typeof t&&(U=!0);var Q=JSON.stringify((0,n.Z)((0,n.Z)({},e),{},{markerGraphics:null})),K=(0,y.hP)(JSON.stringify(z)+E).toString(),_={type:"marker",templateHash:(0,y.hP)(JSON.stringify(l)+JSON.stringify(x)+Q+W).toString(),materialHash:U?function(){return K}:K,cim:z,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:p,anchorPoint:{x:Z,y:L},isAbsoluteAnchorPoint:!1,size:q(e.primitiveName,c,"Size",s,X),rotation:q(e.primitiveName,c,"Rotation",s,J),offsetX:q(e.primitiveName,c,"OffsetX",s,H),offsetY:q(e.primitiveName,c,"OffsetY",s,Y),scaleX:1,frameHeight:b,rotateClockwise:e.rotateClockwise,referenceSize:d,sizeRatio:w,color:q(F,c,"Color",s,T,V),outlineColor:q(F,c,"Color",s,B,V),outlineWidth:q(F,c,"Width",s,$),markerPlacement:r,animatedSymbolProperties:i,path:E};return u.push(_),"break"}();if("continue"===A)continue;if("break"===A)break;default:D(e,t,r,i,l,c,f,s,u,v,p,d,b)}}}}}function D(e,t,r,i,n,l,f,c,s,u,p,d,g){var S,b=function(e,t){return{type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath}}(e,n),k=["Rotation","OffsetX","OffsetY"];S=f.filter((function(t){return t.primitiveName!==e.primitiveName||!k.includes(t.propertyName)}));var C,O="",P=(0,a.Z)(f);try{for(P.s();!(C=P.n()).done;){var M=C.value;void 0!==M.value&&(O+="-".concat(M.primitiveName,"-").concat(M.propertyName,"-").concat(JSON.stringify(M.value)))}}catch(Y){P.e(Y)}finally{P.f()}var x=h.B$.getTextureAnchor(b,u),A=(0,o.Z)(x,3),w=A[0],Z=A[1],L=A[2],I=e.primitiveName,z=(0,N.NA)(e.rotation),R=(0,N.NA)(e.offsetX),X=(0,N.NA)(e.offsetY),J=(0,y.hP)(JSON.stringify(b)+O).toString(),H={type:"marker",templateHash:J,materialHash:S.length>0||(0,m.pC)(t)&&"function"==typeof t?ee(J,l,S,c):J,cim:b,materialOverrides:S,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:p,anchorPoint:{x:w,y:Z},isAbsoluteAnchorPoint:!1,size:e.size,rotation:q(I,l,"Rotation",c,z),offsetX:q(I,l,"OffsetX",c,R),offsetY:q(I,l,"OffsetY",c,X),color:{r:255,g:255,b:255,a:1},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:g,rotateClockwise:e.rotateClockwise,referenceSize:d,sizeRatio:L/(0,v.F2)(e.size),markerPlacement:r,animatedSymbolProperties:i};s.push(H)}function j(e){if(e&&0===e.indexOf("Level_")){var t=parseInt(e.substr(6),10);if(!isNaN(t))return t}return 0}function V(e){if(!e||0===e.length)return null;var t=new c.Z(e).toRgba();return{r:t[0],g:t[1],b:t[2],a:t[3]}}function q(e,t,r,i,n,a,o){var l=t[e];if(l){var f=l[r];if("string"==typeof f||"number"==typeof f||f instanceof Array)return a?a.call(null,f,o):f;if(null!=f&&f instanceof p.mz)return function(e,t,r){var l=(0,b.Z)(f,e,{$view:r},i.geometryType,t);return null!==l&&a&&(l=a.call(null,l,o)),null!==l?l:n}}return n}function Q(e){return e?e.charAt(0).toLowerCase()+e.substr(1):e}function K(e,t,r,i){var n,o=(0,a.Z)(t);try{for(o.s();!(n=o.n()).done;){var l=n.value;l.valueExpressionInfo&&function(){var e=r[l.primitiveName]&&r[l.primitiveName][l.propertyName];e instanceof p.mz&&(l.fn=function(t,r,n){return(0,b.Z)(e,t,{$view:n},i.geometryType,r)})}()}}catch(f){o.e(f)}finally{o.f()}return function(r,i,n){var o,l=(0,a.Z)(t);try{for(l.s();!(o=l.n()).done;){var c=o.value;c.fn&&(c.value=c.fn(r,i,n))}}catch(f){l.e(f)}finally{l.f()}var u,m=[],v=(0,a.Z)(e);try{for(v.s();!(u=v.n()).done;){var y,p=u.value,h=null===(y=p)||void 0===y?void 0:y.primitiveName;if(h){var d,g=!1,N=(0,a.Z)(t);try{for(N.s();!(d=N.n()).done;){var S=d.value;if(S.primitiveName===h){var b=Q(S.propertyName);null!=S.value&&S.value!==p[b]&&(g||(p=(0,s.d9)(p),g=!0),p[b]=S.value)}}}catch(f){N.e(f)}finally{N.f()}}m.push(p)}}catch(f){v.e(f)}finally{v.f()}return m}}function _(e,t,r,i){var n=[];if(h.E0.findApplicableOverrides(e,t,n),0===n.length)return e;for(var o=0,l=n;o<l.length;o++){var f=l[o];f.valueExpressionInfo&&function(){var e=r[f.primitiveName]&&r[f.primitiveName][f.propertyName];e instanceof p.mz&&(f.fn=function(t,r,n){return(0,b.Z)(e,t,{$view:n},i.geometryType,r)})}()}return function(t,r,i){var o,l=(0,a.Z)(n);try{for(l.s();!(o=l.n()).done;){var f=o.value;f.fn&&(f.value=f.fn(t,r,i))}}catch(h){l.e(h)}finally{l.f()}var c,u=(0,s.d9)(e),m=e.primitiveName,v=(0,a.Z)(n);try{for(v.s();!(c=v.n()).done;){var y=c.value;if(y.primitiveName===m){var p=Q(y.propertyName);null!=y.value&&y.value!==u[p]&&(u[p]=y.value)}}}catch(h){v.e(h)}finally{v.f()}return u}}function ee(e,t,r,i){var n,o=(0,a.Z)(r);try{for(o.s();!(n=o.n()).done;){var l=n.value;l.valueExpressionInfo&&function(){var e=t[l.primitiveName]&&t[l.primitiveName][l.propertyName];e instanceof p.mz&&(l.fn=function(t,r,n){return(0,b.Z)(e,t,{$view:n},i.geometryType,r)})}()}}catch(f){o.e(f)}finally{o.f()}return function(t,i,n){var o,l=(0,a.Z)(r);try{for(l.s();!(o=l.n()).done;){var c=o.value;c.fn&&(c.value=c.fn(t,i,n))}}catch(f){l.e(f)}finally{l.f()}return(0,y.hP)(e+h.E0.buildOverrideKey(r)).toString()}}function te(e,t){if(!t||0===t.length)return e;var r=JSON.parse(JSON.stringify(e));return h.E0.applyOverrides(r,t),r}function re(e,t,r,i,n){var o,l=!1,f="",c=(0,a.Z)(e);try{for(c.s();!(o=c.n()).done;){var s=o.value;s.primitiveName===t&&(void 0!==s.value?f+="-".concat(s.primitiveName,"-").concat(s.propertyName,"-").concat(JSON.stringify(s.value)):s.valueExpressionInfo&&(l=!0))}}catch(u){c.e(u)}finally{c.f()}return(0,m.pC)(r)&&"function"==typeof r&&(l=!0),(0,m.pC)(i)&&"function"==typeof i&&(l=!0),(0,m.pC)(n)&&"function"==typeof n&&(l=!0),[l,f]}function ie(e,t,r){if(e&&t)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":var i=e.symbolLayers;if(!i)return;var n,o=(0,a.Z)(i);try{for(o.s();!(n=o.n()).done;){var l=n.value;switch(oe(l,t,r),l.type){case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMCharacterMarker":case"CIMPictureMarker":"url"in l&&l.url&&r.push(t.fetchResource(l.url,null));break;case"CIMVectorMarker":var f=l.markerGraphics;if(!f)continue;var c,s=(0,a.Z)(f);try{for(s.s();!(c=s.n()).done;){var u=c.value;if(u){var m=u.symbol;m&&ie(m,t,r)}}}catch(v){s.e(v)}finally{s.f()}}}}catch(v){o.e(v)}finally{o.f()}}}var ne,ae=function(e){return e&&2===e.length&&e[0].enable&&e[1].enable&&"CIMSolidStroke"===e[0].type&&"CIMSolidFill"===e[1].type&&!e[0].effects&&!e[1].effects};function oe(e,t,r){e.effects&&!(0,m.pC)(t.geometryEngine)&&(ne?r.push(ne):(0,N.Cc)(e.effects)&&(ne=(0,N.RI)(),r.push(ne),ne.then((function(e){return t.geometryEngine=e}))))}},95954:function(e,t,r){r.d(t,{j:function(){return u}});var i=r(93433),n=r(37762),a=r(15671),o=r(43144),l=r(77981),f=r(25290),c=r(35747),s=r(7313),u=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"executeEffects",value:function(e,t,r){var i,a=(0,f.GP)(t),o=new c.M(a),l=(0,n.Z)(e);try{for(l.s();!(i=l.n()).done;){var u=i.value,m=(0,s.h)(u);m&&(o=m.execute(o,u,1.3333333333333333,r))}}catch(v){l.e(v)}finally{l.f()}return o}},{key:"next",value:function(e){var t=e.next();return(0,f.wp)(t),t}},{key:"applyEffects",value:function(e,t,r){if(!e)return t;var a,o=new c.M(t),f=(0,n.Z)(e);try{for(f.s();!(a=f.n()).done;){var u=a.value,m=(0,s.h)(u);m&&(o=m.execute(o,u,1,r))}}catch(d){f.e(d)}finally{f.f()}for(var v,y=null;v=o.next();){var p,h;y?(0,l.l9)(y)?(0,l.l9)(v)&&(p=y.paths).push.apply(p,(0,i.Z)(v.paths)):(0,l.oU)(y)&&(0,l.oU)(v)&&(h=y.rings).push.apply(h,(0,i.Z)(v.rings)):y=v}return y}}]),e}()},91935:function(e,t,r){r.d(t,{Z:function(){return l}});var i=r(1413),n=r(10064),a=r(32718),o=r(58971);function l(e,t,r,n,o){var l=e.referencesGeometry()&&o?c(t,n,o):t,f=e.repurposeFeature(l);try{return e.evaluate((0,i.Z)((0,i.Z)({},r),{},{$feature:f}))}catch(s){return a.Z.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",s),null}}var f=new Map;function c(e,t,r){var l=r.transform,c=r.hasZ,s=r.hasM;f.has(t)||f.set(t,function(e){var t={};switch(e){case"esriGeometryPoint":return function(e,r,i,n){return(0,o.U1)(r,t,e,i,n)};case"esriGeometryPolygon":return function(e,r,i,n){return(0,o.Ie)(r,t,e,i,n)};case"esriGeometryPolyline":return function(e,r,i,n){return(0,o.G6)(r,t,e,i,n)};case"esriGeometryMultipoint":return function(e,r,i,n){return(0,o.J9)(r,t,e,i,n)};default:return a.Z.getLogger("esri.views.2d.support.arcadeOnDemand").error(new n.Z("mapview-arcade","Unable to handle geometryType: ".concat(e))),function(e){return e}}}(t));var u=f.get(t)(e.geometry,l,c,s);return(0,i.Z)((0,i.Z)({},e),{},{geometry:u})}},88750:function(e,t,r){r.d(t,{BN:function(){return i},Yc:function(){return n}});function i(e){var t=e.toLowerCase().split(" ").join("-");switch(t){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return t}}function n(e){var t=function(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}(e)+function(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}(e);return i(e.family)+(t.length>0?t:"-regular")}},93592:function(e,t,r){r.d(t,{$:function(){return a},f:function(){return n}});var i=r(643);function n(e,t){var r;if("string"==typeof e)r=(0,i.hP)(e+"-seed(".concat(t,")"));else{var n=12;r=e^t;do{r=107*(r>>8^r)+n|0}while(0!=--n)}return(1+r/(1<<31))/2}function a(e){return Math.floor(n(e,o)*l)}var o=53290320,l=10}}]);
//# sourceMappingURL=9815.c86bc94a.chunk.js.map