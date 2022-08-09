"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[6741],{98701:function(e,t,r){r.r(t),r.d(t,{default:function(){return Y}});var o=r(37762),i=r(74165),n=r(15861),s=r(15671),a=r(43144),p=r(97326),u=r(11752),l=r(61120),d=r(60136),c=r(29388),y=r(27366),f=(r(59486),r(44055)),v=(r(94931),r(78451),r(98689),r(4789),r(32066),r(49018),r(34999),r(79850),r(9014),r(40464)),h=r(97642),g=r(49861),m=(r(63780),r(93169),r(25243),r(69912)),C=r(27823),b=r(30651),S=r(29439),_=r(10064),x=r(54472),k=r(92026),F=r(67213),R=r(49818),Z=r(78952),w=function(e){(0,d.Z)(r,e);var t=(0,c.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).featureDefinition=null,e.type="ogc-feature",e}return(0,a.Z)(r,[{key:"load",value:function(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}},{key:"getFeatureDefinition",value:function(){var e=this.featureDefinition,t=e.collection,r=e.layerDefinition,o=e.spatialReference,i=e.supportedCrs,n=this.layer,s=n.apiKey;return{capabilities:n.capabilities,collection:t,layerDefinition:r,queryParameters:{apiKey:s,customParameters:n.customParameters},spatialReference:o,supportedCrs:i}}},{key:"queryExtent",value:function(e){return null}},{key:"queryFeatureCount",value:function(e){return null}},{key:"queryFeatures",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.queryFeaturesJSON(e,t).then((function(e){return R.default.fromJSON(e)}))}},{key:"queryFeaturesJSON",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=this.getFeatureDefinition();return this.load(t).then((function(){return(0,F.yN)(r,e,t)}))}},{key:"queryObjectIds",value:function(e){return null}},{key:"serviceSupportsSpatialReference",value:function(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}},{key:"_conformsToType",value:function(e,t){var r,o=new RegExp("^".concat(t,"$"),"i");return null!==(r=e.conformsTo.some((function(e){return o.test(e)})))&&void 0!==r&&r}},{key:"_getCapabilities",value:function(e,t){var r,o,i,n,s,a,p,u=(0,k.pC)(t)?null===(r=t.components)||void 0===r?void 0:r.parameters:null;return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:null!==(o=null!==(i=null===u||void 0===u||null===(n=u.limit)||void 0===n||null===(s=n.schema)||void 0===s?void 0:s.maximum)&&void 0!==i?i:null===u||void 0===u||null===(a=u.limitFeatures)||void 0===a||null===(p=a.schema)||void 0===p?void 0:p.maximum)&&void 0!==o?o:5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}},{key:"_getExtent",value:function(e){var t,r=null===(t=e.extent)||void 0===t?void 0:t.spatial;if(!r)return null;var o=r.bbox[0],i=4===o.length,n=o[0],s=o[1],a=i?void 0:o[2];return{xmin:n,ymin:s,xmax:i?o[2]:o[3],ymax:i?o[3]:o[4],zmin:a,zmax:i?void 0:o[5],spatialReference:Z.Z.WGS84.toJSON()}}},{key:"_getStorageSpatialReference",value:function(e){var t,r=null!==(t=e.storageCrs)&&void 0!==t?t:F.$9,o=(0,F.d)(r);return(0,k.Wi)(o)?Z.Z.WGS84:new Z.Z({wkid:o})}},{key:"_getSupportedSpatialReferences",value:function(e,t){var r,o="#/crs",i=null!==(r=e.crs)&&void 0!==r?r:[F.$9],n=i.includes(o)?i.filter((function(e){return e!==o})).concat(t.crs):i,s=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return n.filter((function(e){return!s.test(e)}))}},{key:"_loadOGCServices",value:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(t,r){var n,s,a,p,u,l,d,c,y,f,v,h,g,m,b,x,R,Z,w,I,O,D,T,j,P,E,Q,G,q,M;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,k.pC)(r)?r.signal:null,s=t.apiKey,a=t.collectionId,p=t.customParameters,u=t.fields,l=t.geometryType,d=t.hasZ,c=t.objectIdField,y=t.timeInfo,f=t.url,v={fields:null===u||void 0===u?void 0:u.map((function(e){return e.toJSON()})),geometryType:C.P$.toJSON(l),hasZ:d,objectIdField:c,timeInfo:null===y||void 0===y?void 0:y.toJSON()},h={apiKey:s,customParameters:p,signal:n},e.next=14,(0,F.gp)(f,h);case 14:return g=e.sent,e.next=17,Promise.all([(0,F.G4)(g,h),(0,F.j)(g,h)]);case 17:if(m=e.sent,b=(0,S.Z)(m,2),x=b[0],R=b[1],this._conformsToType(x,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson")){e.next=23;break}throw new _.Z("ogc-feature-layer:no-geojson-support","Server does not support geojson");case 23:if(Z=R.collections.find((function(e){return e.id===a})),Z){e.next=26;break}throw new _.Z("ogc-feature-layer:collection-not-found","Server does not contain the named collection");case 26:if(!this._conformsToType(x,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")){e.next=32;break}return e.next=29,(0,F.eS)(g,h);case 29:e.t0=e.sent,e.next=33;break;case 32:e.t0=null;case 33:return w=e.t0,e.next=36,(0,F.w9)(Z,v,h);case 36:I=e.sent,O=this._getCapabilities(I.hasZ,w),D=this._getExtent(Z),T=this._getStorageSpatialReference(Z).toJSON(),j=this._getSupportedSpatialReferences(Z,R),P=new RegExp("^".concat(F.Lu),"i"),E={},Q=(0,o.Z)(j);try{for(Q.s();!(G=Q.n()).done;)q=G.value,M=(0,F.d)(q),(0,k.pC)(M)&&(E[M]||(E[M]=q.replace(P,"")))}catch(i){Q.e(i)}finally{Q.f()}I.extent=D,this.featureDefinition={capabilities:O,collection:Z,layerDefinition:I,queryParameters:{},spatialReference:T,supportedCrs:E};case 46:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),r}(x.Z);(0,y._)([(0,g.Cb)()],w.prototype,"featureDefinition",void 0),(0,y._)([(0,g.Cb)({constructOnly:!0})],w.prototype,"layer",void 0),(0,y._)([(0,g.Cb)()],w.prototype,"type",void 0),w=(0,y._)([(0,m.j)("esri.layers.graphics.sources.OGCFeatureSource")],w);var I=r(27961),O=r(6693),D=r(46671),T=r(7632),j=r(6061),P=r(94207),E=r(29598),Q=r(71684),G=r(56811),q=r(99063),M=r(45948),A=r(39042),B=r(87165),H=r(83040),N=r(25610),z=r(80031),L=r(77748),J=r(85116),U=r(21149),V=r(81085),W=r(53866),$=(0,N.v)(),K=function(e){(0,d.Z)(r,e);var t=(0,c.Z)(r);function r(e){var o;return(0,s.Z)(this,r),(o=t.call(this,e)).collectionId=null,o.copyright=null,o.definitionExpression=null,o.description=null,o.displayField=null,o.elevationInfo=null,o.featureReduction=null,o.fields=null,o.fieldsIndex=null,o.fullExtent=null,o.geometryType=null,o.hasZ=void 0,o.labelingInfo=null,o.labelsVisible=!0,o.legendEnabled=!0,o.objectIdField=null,o.operationalLayerType="OGCFeatureLayer",o.popupEnabled=!0,o.popupTemplate=null,o.screenSizePerspectiveEnabled=!0,o.source=new w({layer:(0,p.Z)(o)}),o.spatialReference=null,o.title=null,o.type="ogc-feature",o.typeIdField=null,o.types=null,o.url=null,o}return(0,a.Z)(r,[{key:"destroy",value:function(){var e;null===(e=this.source)||void 0===e||e.destroy()}},{key:"load",value:function(e){var t=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((function(){return t._fetchService(e)}))),this.when()}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"isTable",get:function(){return this.loaded&&null==this.geometryType}},{key:"renderer",set:function(e){(0,z.YN)(e,this.fieldsIndex),this._set("renderer",e)}},{key:"on",value:function(e,t){return(0,u.Z)((0,l.Z)(r.prototype),"on",this).call(this,e,t)}},{key:"createPopupTemplate",value:function(e){return(0,V.eZ)(this,e)}},{key:"createQuery",value:function(){return new U.Z}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"getFieldDomain",value:function(e,t){var r,o,i=this,n=!1,s=null===t||void 0===t||null===(r=t.feature)||void 0===r?void 0:r.attributes,a=this.typeIdField&&(null===s||void 0===s?void 0:s[this.typeIdField]);return null!=a&&this.types&&(n=this.types.some((function(t){var r,n;return t.id==a&&("inherited"===(null===(n=o=null===(r=t.domains)||void 0===r?void 0:r[e])||void 0===n?void 0:n.type)&&(o=i._getLayerDomain(e)),!0)}))),n||o||(o=this._getLayerDomain(e)),o}},{key:"queryFeatures",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatures(U.Z.from(e)||r.createQuery(),t)})).then((function(e){var t;return null!==e&&void 0!==e&&null!==(t=e.features)&&void 0!==t&&t.forEach((function(e){e.layer=e.sourceLayer=r})),e}))}},{key:"serviceSupportsSpatialReference",value:function(e){var t,r;return null!==(t=null===(r=this.source)||void 0===r?void 0:r.serviceSupportsSpatialReference(e))&&void 0!==t&&t}},{key:"_fetchService",value:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.source.load(t);case 2:this.read(this.source.featureDefinition,{origin:"service"}),(0,z.YN)(this.renderer,this.fieldsIndex),(0,z.UF)(this.timeInfo,this.fieldsIndex);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_getLayerDomain",value:function(e){if(!this.fields)return null;var t,r=(0,o.Z)(this.fields);try{for(r.s();!(t=r.n()).done;){var i=t.value;if(i.name===e&&i.domain)return i.domain}}catch(n){r.e(n)}finally{r.f()}return null}}]),r}((0,I.V)((0,D.N)((0,T.b)((0,O.h)((0,P.c)((0,q.n)((0,G.M)((0,j.q)((0,E.I)((0,Q.Q)((0,h.R)(b.Z))))))))))));(0,y._)([(0,g.Cb)({readOnly:!0,json:{origins:{service:{read:!0}}}})],K.prototype,"capabilities",void 0),(0,y._)([(0,g.Cb)({type:String,json:{write:!0}})],K.prototype,"collectionId",void 0),(0,y._)([(0,g.Cb)({type:String})],K.prototype,"copyright",void 0),(0,y._)([(0,g.Cb)({readOnly:!0})],K.prototype,"defaultPopupTemplate",null),(0,y._)([(0,g.Cb)({type:String})],K.prototype,"definitionExpression",void 0),(0,y._)([(0,g.Cb)({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],K.prototype,"description",void 0),(0,y._)([(0,g.Cb)({type:String})],K.prototype,"displayField",void 0),(0,y._)([(0,g.Cb)(M.PV)],K.prototype,"elevationInfo",void 0),(0,y._)([(0,g.Cb)(A.d)],K.prototype,"featureReduction",void 0),(0,y._)([(0,g.Cb)({type:[H.Z],json:{origins:{service:{name:"layerDefinition.fields"}}}})],K.prototype,"fields",void 0),(0,y._)([(0,g.Cb)($.fieldsIndex)],K.prototype,"fieldsIndex",void 0),(0,y._)([(0,g.Cb)({readOnly:!0,type:W.Z,json:{origins:{service:{name:"layerDefinition.extent"}}}})],K.prototype,"fullExtent",void 0),(0,y._)([(0,g.Cb)({type:C.Mk.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:C.Mk.read}}}}})],K.prototype,"geometryType",void 0),(0,y._)([(0,g.Cb)({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],K.prototype,"hasZ",void 0),(0,y._)([(0,g.Cb)({type:Boolean,readOnly:!0})],K.prototype,"isTable",null),(0,y._)([(0,g.Cb)({type:[L.Z],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:J.r},write:!0}}}})],K.prototype,"labelingInfo",void 0),(0,y._)([(0,g.Cb)(M.iR)],K.prototype,"labelsVisible",void 0),(0,y._)([(0,g.Cb)(M.rn)],K.prototype,"legendEnabled",void 0),(0,y._)([(0,g.Cb)({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],K.prototype,"objectIdField",void 0),(0,y._)([(0,g.Cb)({type:["OGCFeatureLayer"]})],K.prototype,"operationalLayerType",void 0),(0,y._)([(0,g.Cb)(M.C_)],K.prototype,"popupEnabled",void 0),(0,y._)([(0,g.Cb)({type:f.Z,json:{name:"popupInfo",write:!0}})],K.prototype,"popupTemplate",void 0),(0,y._)([(0,g.Cb)({types:v.A,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:v.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],K.prototype,"renderer",null),(0,y._)([(0,g.Cb)(M.YI)],K.prototype,"screenSizePerspectiveEnabled",void 0),(0,y._)([(0,g.Cb)({readOnly:!0})],K.prototype,"source",void 0),(0,y._)([(0,g.Cb)({readOnly:!0,type:Z.Z,json:{origins:{service:{read:!0}}}})],K.prototype,"spatialReference",void 0),(0,y._)([(0,g.Cb)({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],K.prototype,"title",void 0),(0,y._)([(0,g.Cb)({readOnly:!0,json:{read:!1}})],K.prototype,"type",void 0),(0,y._)([(0,g.Cb)({type:String,readOnly:!0})],K.prototype,"typeIdField",void 0),(0,y._)([(0,g.Cb)({type:[B.Z]})],K.prototype,"types",void 0),(0,y._)([(0,g.Cb)(M.HQ)],K.prototype,"url",void 0);var Y=K=(0,y._)([(0,m.j)("esri.layers.OGCFeatureLayer")],K)},60480:function(e,t,r){r.d(t,{g:function(){return o}});var o={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}}}]);
//# sourceMappingURL=6741.abbe4687.chunk.js.map