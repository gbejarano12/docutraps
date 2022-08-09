"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[2536],{92536:function(e,t,i){i.d(t,{y:function(){return w},r:function(){return r}});var r,n,a=i(93433),s=i(74165),u=i(1413),l=i(15861),o=i(37762),c=i(15671),f=i(43144),h=i(92026),d=i(4954),p=i(94446),m=i(58971),v=i(92975),g=i(33392),y=i(15903),x=function(){function e(t,i,r){(0,c.Z)(this,e),this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=t.returnDistinctValues,this.fieldsIndex=r,this.featureAdapter=i;var n=t.outFields;if(n&&!n.includes("*")){this.outFields=n;var a,s=0,u=(0,o.Z)(n);try{for(u.s();!(a=u.n()).done;){var l=a.value,f=(0,g.hr)(l),h=this.fieldsIndex.get(f),d=h?null:(0,g.Jc)(f,r),p=h?h.name:(0,g.nu)(l)||"FIELD_EXP_"+s++;this._fieldDataCache.set(l,{alias:p,clause:d})}}catch(m){u.e(m)}finally{u.f()}}}return(0,f.Z)(e,[{key:"countDistinctValues",value:function(e){var t=this;return this.returnDistinctValues?(e.forEach((function(e){return t.getAttributes(e)})),this._returnDistinctMap.size):e.length}},{key:"getAttributes",value:function(e){var t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}},{key:"getFieldValue",value:function(e,t,i){var r=i?i.name:t,n=null;return this._fieldDataCache.has(r)?n=this._fieldDataCache.get(r).clause:i||(n=(0,g.Jc)(t,this.fieldsIndex),this._fieldDataCache.set(r,{alias:r,clause:n})),i?this.featureAdapter.getAttribute(e,r):n.calculateValue(e,this.featureAdapter)}},{key:"getNormalizedValue",value:function(e,t){var i=t.normalizationType,r=t.normalizationTotal,n=this.getFieldValue(e,t.field,t.fieldInfo);if(i&&Number.isFinite(n)){var a=this.getFieldValue(e,t.normalizationField,t.normalizationFieldInfo);n=(0,y.fk)(n,i,a,r)}return n}},{key:"getExpressionValue",value:function(e,t,i,r){var n={attributes:this.featureAdapter.getAttributes(e),layer:{fields:this.fieldsIndex.fields}},a=r.createExecContext(n,i);return r.executeFunction(t,a)}},{key:"getExpressionValues",value:function(e,t,i,r){var n=this,a={fields:this.fieldsIndex.fields};return e.map((function(e){var s={attributes:n.featureAdapter.getAttributes(e),layer:a},u=r.createExecContext(s,i);return r.executeFunction(t,u)}))}},{key:"validateItem",value:function(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:(0,g.Jc)(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testFeature(e,this.featureAdapter)}},{key:"validateItems",value:function(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:(0,g.Jc)(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testSet(e,this.featureAdapter)}},{key:"_processAttributesForOutFields",value:function(e){var t=this.outFields;if(!t||!t.length)return this.featureAdapter.getAttributes(e);var i,r={},n=(0,o.Z)(t);try{for(n.s();!(i=n.n()).done;){var a=i.value,s=this._fieldDataCache.get(a),u=s.alias,l=s.clause;r[u]=l?l.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,u)}}catch(c){n.e(c)}finally{n.f()}return r}},{key:"_processAttributesForDistinctValues",value:function(e){if((0,h.Wi)(e)||!this.returnDistinctValues)return e;var t=this.outFields,i=[];if(t){var r,n=(0,o.Z)(t);try{for(n.s();!(r=n.n()).done;){var a=r.value,s=this._fieldDataCache.get(a).alias;i.push(e[s])}}catch(f){n.e(f)}finally{n.f()}}else for(var u in e)i.push(e[u]);var l="".concat((t||["*"]).join(","),"=").concat(i.join(",")),c=this._returnDistinctMap.get(l)||0;return this._returnDistinctMap.set(l,++c),c>1?null:e}}]),e}(),b=i(19995),Z=i(31904),F=i(80031),_=i(819),w=function(){function e(t,i,r){(0,c.Z)(this,e),this.items=t,this.query=i,this.geometryType=r.geometryType,this.hasM=r.hasM,this.hasZ=r.hasZ,this.fieldsIndex=r.fieldsIndex,this.objectIdField=r.objectIdField,this.spatialReference=r.spatialReference,this.featureAdapter=r.featureAdapter}return(0,f.Z)(e,[{key:"size",get:function(){return this.items.length}},{key:"createQueryResponseForCount",value:function(){var e=new x(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return e.countDistinctValues(this.items);var t=this.query,i=t.groupByFieldsForStatistics,r=t.having,n=t.outStatistics;if(!(null===i||void 0===i?void 0:i.length))return 1;var a,s=new Map,u=new Map,l=new Set,c=(0,o.Z)(n);try{for(c.s();!(a=c.n()).done;){var f=a.value,h="exceedslimit"!==f.statisticType?f.onStatisticField:void 0;if(!u.has(h)){var d,p=[],m=(0,o.Z)(i);try{for(m.s();!(d=m.n()).done;){var v=d.value,g=this._getAttributeValues(e,v,s);p.push(g)}}catch(S){m.e(S)}finally{m.f()}u.set(h,this._calculateUniqueValues(p,e.returnDistinctValues))}var y=u.get(h);for(var b in y){var Z=y[b],F=Z.data,_=Z.items,w=F.join(",");r&&!e.validateItems(_,r)||l.add(w)}}}catch(S){c.e(S)}finally{c.f()}return l.size}},{key:"createQueryResponse",value:function(){var e=(0,l.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.query.outStatistics){e.next=11;break}if(!this.query.outStatistics.some((function(e){return"exceedslimit"===e.statisticType}))){e.next=5;break}e.t0=this._createExceedsLimitQueryResponse(this.query),e.next=8;break;case 5:return e.next=7,this._createStatisticsQueryResponse(this.query);case 7:e.t0=e.sent;case 8:t=e.t0,e.next=12;break;case 11:t=this._createFeatureQueryResponse(this.query);case 12:return e.abrupt("return",(this.query.returnQueryGeometry&&((0,v.JY)(this.query.outSR)&&!(0,v.fS)(this.query.geometry.spatialReference,this.query.outSR)?t.queryGeometry=(0,Z.S2)((0,u.Z)({spatialReference:this.query.outSR},(0,b.iV)(this.query.geometry,this.query.geometry.spatialReference,this.query.outSR))):t.queryGeometry=(0,Z.S2)((0,u.Z)({spatialReference:this.query.outSR},this.query.geometry))),t));case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createSnappingResponse",value:function(e,t){var i,n=this.featureAdapter,a=function(e,t){return e?t?4:3:t?3:2}(this.hasZ,this.hasM),s=e.point,u=s.x,l=s.y,c="number"==typeof e.distance?e.distance:e.distance.x,f="number"==typeof e.distance?e.distance:e.distance.y,d={candidates:[]},p="esriGeometryPolygon"===this.geometryType,m=this._getPointCreator(e.point,this.spatialReference,t),v=(0,o.Z)(this.items);try{for(v.s();!(i=v.n()).done;){var g=i.value,y=n.getGeometry(g);if(!(0,h.Wi)(y)){var x=y.coords,b=y.lengths;if(e.types&r.EDGE)for(var Z=0,F=0;F<b.length;F++)for(var _=b[F],w=0;w<_;w++,Z+=a){var I=x[Z],V=x[Z+1];if(w!==_-1){var k=x[Z+a],T=x[Z+a+1],z=S(u,l,I,V,k,T),A=z.x,R=z.y,N=(u-A)/c,D=(l-R)/f,C=N*N+D*D;C<=1&&d.candidates.push({type:"edge",objectId:n.getObjectId(g),distance:Math.sqrt(C),target:m(A,R),start:m(I,V),end:m(k,T)})}}if(e.types&r.VERTEX)for(var E=p?x.length-a:x.length,M=0;M<E;M+=a){var G=x[M],q=x[M+1],P=(u-G)/c,O=(l-q)/f,j=P*P+O*O;j<=1&&d.candidates.push({type:"vertex",objectId:n.getObjectId(g),distance:Math.sqrt(j),target:m(G,q)})}}}}catch(Q){v.e(Q)}finally{v.f()}return d.candidates.sort((function(e,t){return e.distance-t.distance})),d}},{key:"_getPointCreator",value:function(e,t,i){var r=(0,h.pC)(i)&&!(0,v.fS)(t,i)?function(e){return(0,b.iV)(e,t,i)}:function(e){return e};return null!=e.z&&null!=e.m?function(t,i){return r({x:t,y:i,z:e.z,m:e.m})}:null!=e.z?function(t,i){return r({x:t,y:i,z:e.z})}:null!=e.m?function(t,i){return r({x:t,y:i,m:e.m})}:function(e,t){return r({x:e,y:t})}}},{key:"createSummaryStatisticsResponse",value:function(){var e=(0,l.Z)((0,s.Z)().mark((function e(t){var i,r,n,a,u,l,o,c,f,h,d,p,m,v;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.field,r=t.valueExpression,n=t.normalizationField,a=t.normalizationType,u=t.normalizationTotal,l=t.minValue,o=t.maxValue,c=t.scale,f=this.fieldsIndex.isDateField(i),e.next=11,this._getDataValues({field:i,valueExpression:r,normalizationField:n,normalizationType:a,normalizationTotal:u,scale:c});case 11:return h=e.sent,d=(0,y.S5)({normalizationType:a,normalizationField:n,minValue:l,maxValue:o}),p=this.fieldsIndex.get(i),m={value:.5,fieldType:null===p||void 0===p?void 0:p.type},v=(0,F.qN)(p)?(0,y.H0)({values:h,supportsNullCount:d,percentileParams:m}):(0,y.i5)({values:h,minValue:l,maxValue:o,useSampleStdDev:!a,supportsNullCount:d,percentileParams:m}),e.abrupt("return",(0,y.F_)(v,f));case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createUniqueValuesResponse",value:function(){var e=(0,l.Z)((0,s.Z)().mark((function e(t){var i,r,n,a,u,l,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.field,r=t.valueExpression,n=t.domain,a=t.returnAllCodedValues,u=t.scale,e.next=7,this._getDataValues({field:i,valueExpression:r,scale:u});case 7:return l=e.sent,o=(0,y.eT)(l),e.abrupt("return",(0,y.Qm)(o,n,a));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createClassBreaksResponse",value:function(){var e=(0,l.Z)((0,s.Z)().mark((function e(t){var i,r,n,a,u,l,o,c,f,h,d,p,m;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.field,r=t.valueExpression,n=t.normalizationField,a=t.normalizationType,u=t.normalizationTotal,l=t.classificationMethod,o=t.standardDeviationInterval,c=t.minValue,f=t.maxValue,h=t.numClasses,d=t.scale,e.next=13,this._getDataValues({field:i,valueExpression:r,normalizationField:n,normalizationType:a,normalizationTotal:u,scale:d});case 13:return p=e.sent,m=(0,y.G2)(p,{field:i,normalizationField:n,normalizationType:a,normalizationTotal:u,classificationMethod:l,standardDeviationInterval:o,minValue:c,maxValue:f,numClasses:h}),e.abrupt("return",(0,y.DL)(m,l));case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createHistogramResponse",value:function(){var e=(0,l.Z)((0,s.Z)().mark((function e(t){var i,r,n,a,u,l,o,c,f,h,d,p;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.field,r=t.valueExpression,n=t.normalizationField,a=t.normalizationType,u=t.normalizationTotal,l=t.classificationMethod,o=t.standardDeviationInterval,c=t.minValue,f=t.maxValue,h=t.numBins,d=t.scale,e.next=13,this._getDataValues({field:i,valueExpression:r,normalizationField:n,normalizationType:a,normalizationTotal:u,scale:d});case 13:return p=e.sent,e.abrupt("return",(0,y.oF)(p,{field:i,normalizationField:n,normalizationType:a,normalizationTotal:u,classificationMethod:l,standardDeviationInterval:o,minValue:c,maxValue:f,numBins:h}));case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_sortFeatures",value:function(e,t,i){var r=this;if(e.length>1&&t&&t.length){var n,a=(0,o.Z)(t.reverse());try{var s=function(){var t=n.value.split(" "),a=t[0],s=r.fieldsIndex.get(a),u=t[1]&&"desc"===t[1].toLowerCase(),l=(0,y.Lq)(null===s||void 0===s?void 0:s.type,u);e.sort((function(e,t){var r=i(e,a,s),n=i(t,a,s);return l(r,n)}))};for(a.s();!(n=a.n()).done;)s()}catch(u){a.e(u)}finally{a.f()}}}},{key:"_createFeatureQueryResponse",value:function(e){var t=this,i=this.items,r=this.geometryType,n=this.hasM,s=this.hasZ,u=this.objectIdField,l=this.spatialReference,o=e.outFields,c=e.outSR,f=e.quantizationParameters,h=e.resultRecordCount,d=e.resultOffset,p=e.returnZ,v=e.returnM,g=null!=h&&i.length>(d||0)+h,y=o&&(o.includes("*")?(0,a.Z)(this.fieldsIndex.fields):o.map((function(e){return t.fieldsIndex.get(e)})));return{exceededTransferLimit:g,features:this._createFeatures(e,i),fields:y,geometryType:r,hasM:n&&v,hasZ:s&&p,objectIdFieldName:u,spatialReference:(0,Z.S2)(c||l),transform:f&&(0,m.vY)(f)||null}}},{key:"_createFeatures",value:function(e,t){var i=new x(e,this.featureAdapter,this.fieldsIndex),r=this.hasM,n=this.hasZ,s=e.orderByFields,u=e.quantizationParameters,l=e.returnGeometry,c=e.returnCentroid,f=e.maxAllowableOffset,h=e.resultOffset,d=e.resultRecordCount,p=e.returnZ,v=void 0!==p&&p,g=e.returnM,y=n&&v,b=r&&(void 0!==g&&g),F=[],_=0,w=(0,a.Z)(t);if(this._sortFeatures(w,s,(function(e,t,r){return i.getFieldValue(e,t,r)})),l||c){var S=(0,m.vY)(u);if(l&&!c){var I,V=(0,o.Z)(w);try{for(V.s();!(I=V.n()).done;){var k=I.value;F[_++]={attributes:i.getAttributes(k),geometry:(0,Z.Op)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(k),f,S,y,b)}}}catch(O){V.e(O)}finally{V.f()}}else if(!l&&c){var T,z=(0,o.Z)(w);try{for(z.s();!(T=z.n()).done;){var A=T.value;F[_++]={attributes:i.getAttributes(A),centroid:(0,Z.EG)(this,this.featureAdapter.getCentroid(A,this),S)}}}catch(O){z.e(O)}finally{z.f()}}else{var R,N=(0,o.Z)(w);try{for(N.s();!(R=N.n()).done;){var D=R.value;F[_++]={attributes:i.getAttributes(D),centroid:(0,Z.EG)(this,this.featureAdapter.getCentroid(D,this),S),geometry:(0,Z.Op)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(D),f,S,y,b)}}}catch(O){N.e(O)}finally{N.f()}}}else{var C,E=(0,o.Z)(w);try{for(E.s();!(C=E.n()).done;){var M=C.value,G=i.getAttributes(M);G&&(F[_++]={attributes:G})}}catch(O){E.e(O)}finally{E.f()}}var q=h||0;if(null!=d){var P=q+d;F=F.slice(q,Math.min(F.length,P))}return F}},{key:"_createExceedsLimitQueryResponse",value:function(e){var t,i=!1,r=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,s=(0,o.Z)(e.outStatistics);try{for(s.s();!(t=s.n()).done;){var u=t.value;if("exceedslimit"===u.statisticType){r=null!=u.maxPointCount?u.maxPointCount:Number.POSITIVE_INFINITY,n=null!=u.maxRecordCount?u.maxRecordCount:Number.POSITIVE_INFINITY,a=null!=u.maxVertexCount?u.maxVertexCount:Number.POSITIVE_INFINITY;break}}}catch(f){s.e(f)}finally{s.f()}if("esriGeometryPoint"===this.geometryType)i=this.items.length>r;else if(this.items.length>n)i=!0;else{var l=this.hasZ?this.hasM?4:3:this.hasM?3:2,c=this.featureAdapter;i=this.items.reduce((function(e,t){var i=c.getGeometry(t);return e+((0,h.pC)(i)&&i.coords.length||0)}),0)/l>a}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(i)}}]}}},{key:"_createStatisticsQueryResponse",value:function(){var e=(0,l.Z)((0,s.Z)().mark((function e(t){var i,r,n,a,u,l,c,f,h,d,p,m,v,g,y,b,Z,F,_,w,S,I,V,k,T,z,A,R,N,D,C,E,M,G,q,P,O,j,Q=this;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i={attributes:{}},r=[],n=new Map,a=new Map,u=new Map,l=new Map,c=new x(t,this.featureAdapter,this.fieldsIndex),f=t.outStatistics,h=t.groupByFieldsForStatistics,d=t.having,p=t.orderByFields,m=h&&h.length,g=(v=!!m)&&h[0],y=v&&!this.fieldsIndex.get(g),b=(0,o.Z)(f),e.prev=2,b.s();case 4:if((Z=b.n()).done){e.next=34;break}if(F=Z.value,_=F.outStatisticFieldName,w=F.statisticType,S=F,I="exceedslimit"!==w?F.onStatisticField:void 0,V="percentile_disc"===w||"percentile_cont"===w,k="EnvelopeAggregate"===w||"CentroidAggregate"===w||"ConvexHullAggregate"===w,T=v&&1===m&&(I===g||y)&&"count"===w,!v){e.next=19;break}if(!u.has(I)){z=[],A=(0,o.Z)(h);try{for(A.s();!(R=A.n()).done;)N=R.value,D=this._getAttributeValues(c,N,n),z.push(D)}catch(L){A.e(L)}finally{A.f()}u.set(I,this._calculateUniqueValues(z,c.returnDistinctValues))}C=u.get(I),E=(0,s.Z)().mark((function e(t){var i,r,a,u,o,f,p,m,v,g,y,x,b;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=C[t],r=i.count,a=i.data,u=i.items,o=i.itemPositions,f=a.join(","),d&&!c.validateItems(u,d)){e.next=17;break}if(p=l.get(f)||{attributes:{}},!k){e.next=13;break}return p.aggregateGeometries||(p.aggregateGeometries={}),e.next=7,Q._getAggregateGeometry(S,u);case 7:m=e.sent,v=m.aggregateGeometries,g=m.outStatisticFieldName,p.aggregateGeometries[g]=v,e.next=16;break;case 13:y=null,T?y=r:(x=Q._getAttributeValues(c,I,n),b=o.map((function(e){return x[e]})),y=V&&"statisticParameters"in S?Q._getPercentileValue(S,b):Q._getStatisticValue(S,b,null,c.returnDistinctValues)),p.attributes[_]=y;case 16:h.forEach((function(e,t){return p.attributes[Q.fieldsIndex.get(e)?e:"EXPR_".concat(t+1)]=a[t]})),l.set(f,p);case 17:case"end":return e.stop()}}),e)})),e.t0=(0,s.Z)().keys(C);case 12:if((e.t1=e.t0()).done){e.next=17;break}return M=e.t1.value,e.delegateYield(E(M),"t2",15);case 15:e.next=12;break;case 17:e.next=31;break;case 19:if(!k){e.next=29;break}return i.aggregateGeometries||(i.aggregateGeometries={}),e.next=23,this._getAggregateGeometry(S,this.items);case 23:G=e.sent,q=G.aggregateGeometries,P=G.outStatisticFieldName,i.aggregateGeometries[P]=q,e.next=31;break;case 29:O=this._getAttributeValues(c,I,n),i.attributes[_]=V&&"statisticParameters"in S?this._getPercentileValue(S,O):this._getStatisticValue(S,O,a,c.returnDistinctValues);case 31:r.push({name:_,alias:_,type:"esriFieldTypeDouble"});case 32:e.next=4;break;case 34:e.next=39;break;case 36:e.prev=36,e.t3=e.catch(2),b.e(e.t3);case 39:return e.prev=39,b.f(),e.finish(39);case 42:return j=v?Array.from(l.values()):[i],e.abrupt("return",(this._sortFeatures(j,p,(function(e,t){return e.attributes[t]})),{fields:r,features:j}));case 44:case"end":return e.stop()}}),e,this,[[2,36,39,42]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_getAggregateGeometry",value:function(){var e=(0,l.Z)((0,s.Z)().mark((function e(t,r){var n,a,l,o,c,f,h,m,v,g,y,x,b;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([i.e(9058),i.e(3645)]).then(i.bind(i,50309));case 2:return n=e.sent,a=t.statisticType,l=t.outStatisticFieldName,o=this.featureAdapter,c=this.spatialReference,f=this.geometryType,h=this.hasZ,m=this.hasM,v=r.map((function(e){return(0,Z.Op)(f,h,m,o.getGeometry(e))})),g=n.convexHull(c,v,!0)[0],y={aggregateGeometries:null,outStatisticFieldName:null},"EnvelopeAggregate"===a?(x=g?(0,p._w)(g):(0,p.aO)(n.union(c,v)),y.aggregateGeometries=(0,u.Z)((0,u.Z)({},x),{},{spatialReference:c}),y.outStatisticFieldName=l||"extent"):"CentroidAggregate"===a?(b=g?(0,d.tO)(g):(0,d.$G)((0,p.aO)(n.union(c,v))),y.aggregateGeometries={x:b[0],y:b[1],spatialReference:c},y.outStatisticFieldName=l||"centroid"):"ConvexHullAggregate"===a&&(y.aggregateGeometries=g,y.outStatisticFieldName=l||"convexHull"),e.abrupt("return",y);case 15:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"_getStatisticValue",value:function(e,t,i,r){var n,a=e.onStatisticField,s=e.statisticType;return n=null!==i&&void 0!==i&&i.has(a)?i.get(a):(0,F.qN)(this.fieldsIndex.get(a))?(0,y.H0)({values:t,returnDistinct:r}):(0,y.i5)({values:t,minValue:null,maxValue:null,useSampleStdDev:!0}),i&&i.set(a,n),n["var"===s?"variance":s]}},{key:"_getPercentileValue",value:function(e,t){var i=e.onStatisticField,r=e.statisticParameters,n=e.statisticType,a=r.value,s=r.orderBy,u=this.fieldsIndex.get(i);return(0,y.XL)(t,{value:a,orderBy:s,fieldType:null===u||void 0===u?void 0:u.type,isDiscrete:"percentile_disc"===n})}},{key:"_getAttributeValues",value:function(e,t,i){if(i.has(t))return i.get(t);var r=this.fieldsIndex.get(t),n=this.items.map((function(i){return e.getFieldValue(i,t,r)}));return i.set(t,n),n}},{key:"_getAttributeNormalizedValues",value:function(e,t){var i=this;return this.items.map((function(r){return e.getNormalizedValue(r,{field:t.field,fieldInfo:i.fieldsIndex.get(t.field),normalizationField:t.normalizationField,normalizationFieldInfo:i.fieldsIndex.get(t.normalizationField),normalizationType:t.normalizationType,normalizationTotal:t.normalizationTotal})}))}},{key:"_getAttributeExpressionValues",value:function(){var e=(0,l.Z)((0,s.Z)().mark((function e(t,i,r){var n,a,u,l;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,_.LC)();case 2:return n=e.sent,a=n.arcadeUtils,u=a.createFunction(i),l=r&&a.getViewInfo(r),e.abrupt("return",t.getExpressionValues(this.items,u,l,a));case 7:case"end":return e.stop()}}),e,this)})));return function(t,i,r){return e.apply(this,arguments)}}()},{key:"_calculateUniqueValues",value:function(e,t){for(var i={},r=this.items,n=r.length,a=0;a<n;a++){var s,u=r[a],l=[],c=(0,o.Z)(e);try{for(c.s();!(s=c.n()).done;){var f=s.value;l.push(f[a])}}catch(d){c.e(d)}finally{c.f()}var h=l.join(",");t?null==i[h]&&(i[h]={count:1,data:l,items:[u],itemPositions:[a]}):null==i[h]?i[h]={count:1,data:l,items:[u],itemPositions:[a]}:(i[h].count++,i[h].items.push(u),i[h].itemPositions.push(a))}return i}},{key:"_getDataValues",value:function(){var e=(0,l.Z)((0,s.Z)().mark((function e(t){var i,r,n,a,u,l,o,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new x(this.query,this.featureAdapter,this.fieldsIndex),r=t.valueExpression,n=t.field,a=t.normalizationField,u=t.normalizationType,l=t.normalizationTotal,o=t.scale,c=r?{viewingMode:"map",scale:o,spatialReference:this.query.outSR||this.spatialReference}:null,e.abrupt("return",r?this._getAttributeExpressionValues(i,r,c):this._getAttributeNormalizedValues(i,{field:n,normalizationField:a,normalizationType:u,normalizationTotal:l}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();function S(e,t,i,r,n,a){var s=n-i,u=a-r,l=s*s+u*u,o=(e-i)*s+(t-r)*u,c=Math.min(1,Math.max(0,o/l));return{x:i+s*c,y:r+u*c}}(n=r||(r={}))[n.NONE=0]="NONE",n[n.EDGE=1]="EDGE",n[n.VERTEX=2]="VERTEX"},33392:function(e,t,i){i.d(t,{nu:function(){return b},hr:function(){return x},Jc:function(){return g},G3:function(){return Z},Of:function(){return y},z4:function(){return v},hO:function(){return m}});var r=i(93433),n=i(37762),a=i(10064),s=i(15671),u=i(43144),l=i(59026),o=i(48562),c=function(){function e(t,i){(0,s.Z)(this,e),this._cache=new l.Z(t),this._invalidCache=new l.Z(i)}return(0,u.Z)(e,[{key:"get",value:function(e,t){var i="".concat(t.uid,":").concat(e),r=this._cache.get(i);if(r)return r;if(void 0!==this._invalidCache.get(i))return null;try{var n=o.WhereClause.create(e,t);return this._cache.put(i,n),n}catch(a){return this._invalidCache.put(i,null),null}}}]),e}(),f=new c(50,500),h="feature-store:unsupported-query",d=" as ",p=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function m(e,t){if(!t)return!0;var i=f.get(t,e);if(!i)throw new a.Z(h,"invalid SQL expression",{where:t});if(!i.isStandardized)throw new a.Z(h,"where clause is not standard",{where:t});return y(e,i.fieldNames,"where clause contains missing fields"),!0}function v(e,t,i){if(!t)return!0;var r=f.get(t,e);if(!r)throw new a.Z(h,"invalid SQL expression",{having:t});if(!r.isAggregate)throw new a.Z(h,"having does not contain a valid aggregate function",{having:t});var n=r.fieldNames;if(y(e,n,"having contains missing fields"),!r.getExpressions().every((function(t){var r=t.aggregateType,n=t.field,a=e.has(n)&&e.get(n).name;return i.some((function(t){var i=t.onStatisticField,n=t.statisticType;return(e.has(i)&&e.get(i).name)===a&&n.toLowerCase().trim()===r}))})))throw new a.Z(h,"expressions in having should also exist in outStatistics",{having:t});return!0}function g(e,t){return e?f.get(e,t):null}function y(e,t,i){var s,u=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],l=[],o=(0,n.Z)(t);try{for(o.s();!(s=o.n()).done;){var c=s.value;if("*"!==c&&!e.has(c))if(u){var f=x(c);try{var d=g(f,e);if(!d)throw new a.Z(h,"invalid SQL expression",{where:f});if(!d.isStandardized)throw new a.Z(h,"expression is not standard",{clause:d});y(e,d.fieldNames,"expression contains missing fields")}catch(v){var p=v&&v.details;if(p&&(p.clause||p.where))throw v;p&&p.missingFields?l.push.apply(l,(0,r.Z)(p.missingFields)):l.push(c)}}else l.push(c)}}catch(m){o.e(m)}finally{o.f()}if(l.length)throw new a.Z(h,i,{missingFields:l})}function x(e){return e.split(d)[0]}function b(e){return e.split(d)[1]}function Z(e,t){var i=t.get(e);return!!i&&!p.has(i.type)}},31904:function(e,t,i){i.d(t,{EG:function(){return Z},Op:function(){return F},S2:function(){return A},Up:function(){return _},j6:function(){return S},vF:function(){return v}});var r=i(74165),n=i(15861),a=i(43404),s=i(92026),u=i(68860),l=i(94446),o=i(77981),c=i(50689),f=i(92975),h=i(83406),d=i(80457),p=i(19995),m=new a.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),v=Object.freeze({}),g=new d.Z,y=new d.Z,x=new d.Z,b={esriGeometryPoint:h.fQ,esriGeometryPolyline:h.J6,esriGeometryPolygon:h.eG,esriGeometryMultipoint:h.Iv};function Z(e,t,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.hasZ,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.hasM;if((0,s.Wi)(t))return null;var a=e.hasZ&&r,u=e.hasM&&n;if(i){var l=(0,h.Nh)(x,t,e.hasZ,e.hasM,"esriGeometryPoint",i,r,n);return(0,h.fQ)(l,a,u)}return(0,h.fQ)(t,a,u)}function F(e,t,i,r,n,a){var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:t,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:i,o=t&&u,c=i&&l,f=(0,s.pC)(r)?"coords"in r?r:r.geometry:null;if((0,s.Wi)(f))return null;if(n){var d=(0,h.zj)(y,f,t,i,e,n,u,l);return a&&(d=(0,h.Nh)(x,d,o,c,e,a)),b[e](d,o,c)}if(a){var p=(0,h.Nh)(x,f,t,i,e,a,u,l);return b[e](p,o,c)}return(0,h.hY)(g,f,t,i,u,l),b[e](g,o,c)}function _(e,t,i){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)((0,r.Z)().mark((function e(t,i,n){var a,s,u,l,o,c,f,h;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.outFields,s=t.orderByFields,u=t.groupByFieldsForStatistics,l=t.outStatistics,a)for(o=0;o<a.length;o++)a[o]=a[o].trim();if(s)for(c=0;c<s.length;c++)s[c]=s[c].trim();if(u)for(f=0;f<u.length;f++)u[f]=u[f].trim();if(l)for(h=0;h<l.length;h++)l[h].onStatisticField&&(l[h].onStatisticField=l[h].onStatisticField.trim());return e.abrupt("return",(t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),S(t,i,n)));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t,i){return I.apply(this,arguments)}function I(){return(I=(0,n.Z)((0,r.Z)().mark((function e(t,i,n){var a,u,f,h,d,m;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:if(a=t.where,t.where=a=a&&a.trim(),(!a||/^1 *= *1$/.test(a)||i&&i===a)&&(t.where=null),t.geometry){e.next=5;break}return e.abrupt("return",t);case 5:return e.next=7,V(t);case 7:return u=e.sent,t.distance=0,t.units=null,"esriSpatialRelEnvelopeIntersects"===t.spatialRel&&(f=t.geometry.spatialReference,(u=(0,l.aO)(u)).spatialReference=f),t.geometry=u,e.next=12,(0,p._W)(u.spatialReference,n);case 12:return e.next=14,(0,c.aX)((0,o.im)(u));case 14:if(h=e.sent[0],!(0,s.Wi)(h)){e.next=17;break}throw v;case 17:return d=h.toJSON(),e.next=20,(0,p.iV)(d,d.spatialReference,n);case 20:if(m=e.sent){e.next=23;break}throw v;case 23:return e.abrupt("return",(m.spatialReference=n,t.geometry=m,t));case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){return k.apply(this,arguments)}function k(){return(k=(0,n.Z)((0,r.Z)().mark((function e(t){var i,n,a,s,l,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.geometry,n=t.distance,a=t.units,null!=n&&!("vertexAttributes"in i)){e.next=3;break}return e.abrupt("return",i);case 3:if(s=i.spatialReference,l=a?m.fromJSON(a):(0,u.qE)(s),!s||!(0,f.sT)(s)&&!(0,f.sS)(s)){e.next=9;break}e.t0=i,e.next=12;break;case 9:return e.next=11,(0,p._W)(s,f.Zn).then((function(){return(0,p.iV)(i,f.Zn)}));case 11:e.t0=e.sent;case 12:return o=e.t0,e.next=15,T();case 15:return e.t1=e.sent,e.abrupt("return",(0,e.t1)(o.spatialReference,o,n,l));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return z.apply(this,arguments)}function z(){return(z=(0,n.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([i.e(9058),i.e(3645)]).then(i.bind(i,50309));case 2:return e.abrupt("return",e.sent.geodesicBuffer);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return e&&R in e?JSON.parse(JSON.stringify(e,N)):e}var R="_geVersion",N=function(e,t){return e!==R?t:void 0}}}]);
//# sourceMappingURL=2536.eb4c3fce.chunk.js.map