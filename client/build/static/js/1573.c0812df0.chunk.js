"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[1573],{51573:function(e,t,n){n.r(t),n.d(t,{default:function(){return K}});var r=n(37762),i=n(1413),a=n(29439),s=n(74165),u=n(15861),o=n(43144),l=n(15671),c=(n(59486),n(76200)),p=n(10064),f=n(32718),d=n(66978),h=n(35995),y=n(52587),v=n(40237),m=n(92975),g=n(81753),x=n(3182),b=n(80457),Z=n(97114),F=n(19995),w=n(14e3),k=(0,s.Z)().mark(E),_=(0,s.Z)().mark(q),I=/^\s*"([\S\s]*)"\s*$/,N=/""/g,T=[","," ",";","|","\t"];function E(e,t,n){var r,i,a;return(0,s.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:r=0;case 1:if(!(r<=e.length)){s.next=10;break}if(i=e.indexOf(t,r),a=e.substring(r,i>-1?i:void 0),r+=a.length+t.length,s.t0=n&&!a.trim(),s.t0){s.next=8;break}return s.next=8,a;case 8:s.next=1;break;case 10:case"end":return s.stop()}}),k)}function S(e){var t=e.includes("\r\n")?"\r\n":"\n";return E(e,t,!0)}function C(e,t){return E(e,t,!1)}function q(e,t,n){var i,a,u,o,l,c,p,f,d,h,y,v,m,g,x=arguments;return(0,s.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:i=x.length>3&&void 0!==x[3]?x[3]:function(){return Object.create(null)},a="",u="",o=0,l=i(),c=0,p=(0,r.Z)(e),s.prev=3,p.s();case 5:if((f=p.n()).done){s.next=47;break}d=f.value,h=C(d,n),y=(0,r.Z)(h),s.prev=9,y.s();case 11:if((v=y.n()).done){s.next=29;break}if(m=v.value,a+=u+m,u="",(o+=D(m))%2!=0){s.next=26;break}if(!(o>0)){s.next=22;break}if(g=I.exec(a)){s.next=19;break}return l=i(),c=0,a="",o=0,s.abrupt("continue",45);case 19:l[t[c]]=g[1].replace(N,'"'),c++,s.next=23;break;case 22:l[t[c]]=a,c++;case 23:a="",o=0,s.next=27;break;case 26:u=n;case 27:s.next=11;break;case 29:s.next=34;break;case 31:s.prev=31,s.t0=s.catch(9),y.e(s.t0);case 34:return s.prev=34,y.f(),s.finish(34);case 37:if(0!==o){s.next=44;break}return s.next=40,l;case 40:l=i(),c=0,s.next=45;break;case 44:u="\n";case 45:s.next=5;break;case 47:s.next=52;break;case 49:s.prev=49,s.t1=s.catch(3),p.e(s.t1);case 52:return s.prev=52,p.f(),s.finish(52);case 55:case"end":return s.stop()}}),_,null,[[3,49,52,55],[9,31,34,37]])}function D(e){var t=0,n=0;for(n=e.indexOf('"',n);n>=0;)t++,n=e.indexOf('"',n+1);return t}var O=n(63543),j=n(29616);function P(e){var t=e.map((function(e){return e.toLowerCase()}));return{longitudeFieldName:e[t.indexOf($.find((function(e){return t.includes(e)})))],latitudeFieldName:e[t.indexOf(U.find((function(e){return t.includes(e)})))]}}function A(e,t,n,i){var a,s=[],u=q(e,n,t),o=[],l=(0,r.Z)(u);try{for(l.s();!(a=l.n()).done;){var c=a.value;if(10===o.length)break;o.push(c)}}catch(h){l.e(h)}finally{l.f()}var p,f=(0,r.Z)(n);try{var d=function(){var e=p.value;if(e===i.longitudeFieldName||e===i.latitudeFieldName)s.push({name:e,type:"esriFieldTypeDouble",alias:e});else{var t=G(o.map((function(t){return t[e]}))),n={name:e,type:null,alias:e};switch(t){case"integer":n.type="esriFieldTypeInteger";break;case"double":n.type="esriFieldTypeDouble";break;case"date":n.type="esriFieldTypeDate",n.length=36;break;default:n.type="esriFieldTypeString",n.length=255}s.push(n)}};for(f.s();!(p=f.n()).done;)d()}catch(h){f.e(h)}finally{f.f()}return s}function G(e){if(!e.length)return"string";var t=/[^+-.,0-9]/;return e.map((function(e){var n=!1;if(""!==e){if(t.test(e))n=!0;else{var r=R(e);if(!isNaN(r))return/[.,]/.test(e)||!Number.isInteger(r)||r>214783647||r<-214783648?"double":"integer";if(e.includes("E")){if(r=Number(e),!isNaN(r))return"double";if(e.includes(",")){if(e=e.replace(",","."),r=Number(e),!isNaN(r))return"double";n=!0}else n=!0}else n=!0}return n?/^[-]?\d*[.,]?\d*$/.test(e)?"string":V(new Date(e),e)?"date":"string":"string"}})).reduce((function(e,t){return void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0}))}function V(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;var n=!0;if(!M&&/\d+\W*$/.test(t)){var r=t.match(/[a-zA-Z]{2,}/);if(r){for(var i=!1,a=0;!i&&a<=r.length;)i=!Q.test(r[a]),a++;n=!i}}return n}var R=function(){var e=(0,j.lt)(),t=new RegExp("^"+e.regexp+"$"),n=new RegExp("["+e.group+"\\s\\xa0]","g"),r=e.factor;return function(i){var a=t.exec(i);if(e.factor=r,!a)return NaN;var s=a[1];if(!a[1]){if(!a[2])return NaN;s=a[2],e.factor*=-1}return+(s=s.replace(n,"").replace(e.decimal,"."))*e.factor}}(),Q=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,M=Number.isNaN(new Date("technology 10").getTime()),U=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],$=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"],B=n(52410),L=n(80031),W=n(78952),z=(0,O.bU)("esriGeometryPoint"),H=["csv"],Y=[0,0],J=(0,o.Z)((function e(t,n){(0,l.Z)(this,e),this.x=t,this.y=n})),K=function(){function e(){var t=this;(0,l.Z)(this,e),this._queryEngine=null,this._snapshotFeatures=function(){var e=(0,u.Z)((0,s.Z)().mark((function e(n){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._fetch(n);case 2:return r=e.sent,e.abrupt("return",t._createFeatures(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return(0,o.Z)(e,[{key:"destroy",value:function(){var e;null!==(e=this._queryEngine)&&void 0!==e&&e.destroy(),this._queryEngine=null}},{key:"load",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){var n,r,i,u,o,l,c,p,f,d,h=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=h.length>1&&void 0!==h[1]?h[1]:{},this.loadOptions=t,e.next=4,Promise.all([this._fetch(r.signal),this._checkProjection(null===t||void 0===t||null===(n=t.parsingOptions)||void 0===n?void 0:n.spatialReference)]);case 4:return i=e.sent,u=(0,a.Z)(i,1),o=u[0],l=X(o,t),this.locationInfo=l.locationInfo,this.delimiter=l.delimiter,this._queryEngine=this._createQueryEngine(l),e.next=11,this._createFeatures(o);case 11:return c=e.sent,this._queryEngine.featureStore.addMany(c),l.layerDefinition.extent=this._queryEngine.fullExtent,l.layerDefinition.timeInfo&&(p=this._queryEngine.timeExtent,f=p.start,d=p.end,l.layerDefinition.timeInfo.timeExtent=[f,d]),e.abrupt("return",l);case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw new p.Z("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){var t,n,r=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQuery(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){var t,n,r=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForCount(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){var t,n,r=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForIds(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){var t,n,r=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForExtent(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"querySnapping",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){var n,r=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=3,this._waitSnapshotComplete();case 3:return e.abrupt("return",this._queryEngine.executeQueryForSnapping(t,n.signal));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){var n,r=this;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loadOptions.customParameters=t,null!==(n=this._snapshotTask)&&void 0!==n&&n.abort(),this._snapshotTask=(0,d.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((function(e){r._queryEngine.featureStore.clear(),e&&r._queryEngine.featureStore.addMany(e)}),(function(e){r._queryEngine.featureStore.clear(),(0,d.D_)(e)||f.Z.getLogger("esri.layers.CSVLayer").error(new p.Z("csv-layer:refresh","An error occurred during refresh",{error:e}))})),e.next=6,this._waitSnapshotComplete();case 6:return e.abrupt("return",{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_waitSnapshotComplete",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._snapshotTask||this._snapshotTask.finished){e.next=9;break}return e.prev=1,e.next=4,this._snapshotTask.promise;case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.abrupt("return",this._waitSnapshotComplete());case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"_fetch",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){var n,r,a,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.loadOptions,r=n.url,a=n.customParameters,r){e.next=3;break}throw new p.Z("csv-layer:invalid-source","url not defined");case 3:return u=(0,h.mN)(r),e.next=6,(0,c.default)(u.path,{query:(0,i.Z)((0,i.Z)({},u.query),a),responseType:"text",signal:t});case 6:return e.abrupt("return",e.sent.data);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_createQueryEngine",value:function(e){var t=e.layerDefinition,n=t.objectIdField,r=t.fields,i=t.extent,a=t.timeInfo,s=new Z.Z({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new w.q({fields:r,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:a,objectIdField:n,spatialReference:i.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:s})}},{key:"_createFeatures",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){var n,i,u,o,l,c,p,f,d,h,Z,F,w,k,_,I,N,T,E,C,D,j,P,A,G,Q,M,U,$,B,z,H,K,X,ee,te,ne;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=this.locationInfo,i=n.latitudeFieldName,u=n.longitudeFieldName,o=this._queryEngine,l=o.objectIdField,c=o.fieldsIndex,p=o.spatialReference,f=[],d=[],h=c.fields.filter((function(e){return e.name!==l})).map((function(e){return e.name})),Z=0,(F=S(t)).next(),w={},k=(0,r.Z)(c.fields);try{for(k.s();!(_=k.n()).done;)"esriFieldTypeOID"!==(I=_.value).type&&"esriFieldTypeGlobalID"!==I.type&&void 0!==(N=(0,L.os)(I))&&(w[I.name]=N)}catch(s){k.e(s)}finally{k.f()}T=q(F,h,this.delimiter,(0,O.Dm)(w,l)),E=(0,r.Z)(T);try{for(E.s();!(C=E.n()).done;)if(D=C.value,j=this._parseCoordinateValue(D[i]),null!=(P=this._parseCoordinateValue(D[u]))&&null!=j&&!isNaN(j)&&!isNaN(P)){for(A in D[i]=j,D[u]=P,D)A!==i&&A!==u&&(c.isDateField(A)?(G=new Date(D[A]),D[A]=V(G,D[A])?G.getTime():null):c.isNumericField(A)&&(Q=R(D[A]),isNaN(Q)?D[A]=null:D[A]=Q));D[l]=Z,Z++,f.push(new J(P,j)),d.push(D)}}catch(s){E.e(s)}finally{E.f()}if(!(0,m.fS)({wkid:4326},p))if((0,m.sS)(p)){M=(0,r.Z)(f);try{for(M.s();!(U=M.n()).done;)$=U.value,B=(0,g.hG)($.x,$.y,Y),z=(0,a.Z)(B,2),$.x=z[0],$.y=z[1]}catch(s){M.e(s)}finally{M.f()}}else f=(0,y.oj)(v.N,f,W.Z.WGS84,p,null,null);for(H=[],K=0;K<f.length;K++)X=f[K],ee=X.x,te=X.y,(ne=d[K])[l]=K+1,H.push(new x.u_(new b.Z([],[ee,te]),ne,null,ne[l]));return e.abrupt("return",H);case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_parseCoordinateValue",value:function(e){if(null==e||""===e)return null;var t=R(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}},{key:"_checkProjection",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,F._W)(m.Zn,t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new p.Z("csv-layer:projection-not-supported","Projection not supported");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}]),e}();function X(e,t){var n=t.parsingOptions||{},i={delimiter:n.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n.latitudeField,longitudeFieldName:n.longitudeField}},a=S(e),s=a.next().value;if(!s)throw new p.Z("csv-layer:empty-csv","CSV is empty",{csv:e});if(s=s.trim(),!n.delimiter){var u=function(e){var t,n=e.trim(),i=0,a="",s=(0,r.Z)(T);try{for(s.s();!(t=s.n()).done;){var u=t.value,o=n.split(u).length;o>i&&(i=o,a=u)}}catch(l){s.e(l)}finally{s.f()}return""===a?null:a}(s);if(!u)throw new p.Z("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV");i.delimiter=u}var o=s.split(i.delimiter).filter((function(e){return!!e})),l=i.layerDefinition={name:(0,h.vt)(t.url,H)||"csv",drawingInfo:z,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n.spatialReference||{wkid:102100}}};if(!n.latitudeField||!n.longitudeField){var c=P(o);if(!n.longitudeField&&!c.longitudeFieldName||!n.latitudeField&&!c.latitudeFieldName)throw new p.Z("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file");i.locationInfo={longitudeFieldName:n.longitudeField||c.longitudeFieldName,latitudeFieldName:n.latitudeField||c.latitudeFieldName}}var f=A(a,i.delimiter,o,i.locationInfo);if(n.fields&&n.fields.length){var d,y=new Map,v=(0,r.Z)(n.fields);try{for(v.s();!(d=v.n()).done;){var m=d.value;y.set(m.name.toLowerCase(),m)}}catch(C){v.e(C)}finally{v.f()}var g,x=(0,r.Z)(f);try{for(x.s();!(g=x.n()).done;){var b=g.value,Z=y.get(b.name.toLowerCase());if(Z){var F=b.name;Object.assign(b,Z),b.name=F}}}catch(C){x.e(C)}finally{x.f()}}if(l.fields=f,!l.fields.some((function(e){return"esriFieldTypeOID"===e.type&&(l.objectIdField=e.name,!0)}))){var w={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};l.objectIdField=w.name,l.fields.unshift(w)}if(l.timeInfo){var k=new B.Z(l.fields),_=l.timeInfo;if(_.startTimeField){var I=k.get(_.startTimeField);I?(_.startTimeField=I.name,I.type="esriFieldTypeDate"):_.startTimeField=null}if(_.endTimeField){var N=k.get(_.endTimeField);N?(_.endTimeField=N.name,N.type="esriFieldTypeDate"):_.endTimeField=null}if(_.trackIdField){var E=k.get(_.trackIdField);_.trackIdField=E?E.name:null}_.startTimeField||_.endTimeField||(l.timeInfo=null)}return i}},63543:function(e,t,n){n.d(t,{Dm:function(){return f},Hq:function(){return d},MS:function(){return h},bU:function(){return l}});var r=n(4942),i=n(1413),a=n(93169),s=n(84652),u=n(60480),o=n(76115);function l(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.I4:"esriGeometryPolyline"===e?o.ET:o.lF}}}var c=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,p=1;function f(e,t){if((0,a.Z)("esri-csp-restrictions"))return function(){return(0,i.Z)((0,r.Z)({},t,null),e)};try{var n="this.".concat(t," = null;");for(var s in e)n+="this".concat(c.test(s)?".".concat(s):'["'.concat(s,'"]')," = ").concat(JSON.stringify(e[s]),";");var u=new Function("\n      return class AttributesClass$".concat(p++," {\n        constructor() {\n          ").concat(n,";\n        }\n      }\n    "))();return function(){return new u}}catch(o){return function(){return(0,i.Z)((0,r.Z)({},t,null),e)}}}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function h(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:u.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);
//# sourceMappingURL=1573.c0812df0.chunk.js.map