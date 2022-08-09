"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[165],{60165:function(e,t,r){r.r(t),r.d(t,{default:function(){return R}});var a=r(74165),n=r(15861),i=r(15671),o=r(43144),l=r(60136),s=r(29388),u=r(27366),p=r(76200),c=r(10064),d=r(43404),y=r(92026),g=r(97642),b=r(49861),h=(r(63780),r(93169),r(25243),r(69912)),v=r(78952),f=r(1413),m=r(53866),M=r(65156),w=r(30651),Z=r(6693),k=r(71684),_=r(56811),C=r(22824),S={id:"0/0/0",level:0,row:0,col:0,extent:null},j=function(e){(0,l.Z)(r,e);var t=(0,s.Z)(r);function r(){var e;return(0,i.Z)(this,r),(e=t.apply(this,arguments)).tileInfo=C.Z.create({spatialReference:v.Z.WebMercator,size:256}),e.type="base-tile",e.fullExtent=new m.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,v.Z.WebMercator),e.spatialReference=v.Z.WebMercator,e}return(0,o.Z)(r,[{key:"getTileBounds",value:function(e,t,r,a){var n=a||(0,M.Ue)();return S.level=e,S.row=t,S.col=r,S.extent=n,this.tileInfo.updateTileInfo(S),S.extent=null,n}},{key:"fetchTile",value:function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=a.signal,i=this.getTileUrl(e,t,r),o={responseType:"image",signal:n,query:(0,f.Z)({},this.refreshParameters)};return(0,p.default)(i,o).then((function(e){return e.data}))}},{key:"getTileUrl",value:function(){throw new c.Z("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}}]),r}((0,Z.h)((0,_.M)((0,k.Q)(w.Z))));(0,u._)([(0,b.Cb)({type:C.Z})],j.prototype,"tileInfo",void 0),(0,u._)([(0,b.Cb)({type:["show","hide"]})],j.prototype,"listMode",void 0),(0,u._)([(0,b.Cb)({readOnly:!0,value:"base-tile"})],j.prototype,"type",void 0),(0,u._)([(0,b.Cb)({nonNullable:!0})],j.prototype,"fullExtent",void 0),(0,u._)([(0,b.Cb)()],j.prototype,"spatialReference",void 0);var T=j=(0,u._)([(0,h.j)("esri.layers.BaseTileLayer")],j),x=r(6061),U=new d.X({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"}),B=function(e){(0,l.Z)(r,e);var t=(0,s.Z)(r);function r(e){var a;return(0,i.Z)(this,r),(a=t.call(this,e)).type="bing-maps",a.tileInfo=new C.Z({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:v.Z.WebMercator},spatialReference:v.Z.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),a.key=null,a.style="road",a.culture="en-US",a.region=null,a.portalUrl=null,a.hasAttributionData=!0,a}return(0,o.Z)(r,[{key:"bingMetadata",get:function(){return this._get("bingMetadata")},set:function(e){this._set("bingMetadata",e)}},{key:"copyright",get:function(){return(0,y.pC)(this.bingMetadata)?this.bingMetadata.copyright:null}},{key:"operationalLayerType",get:function(){return U.toJSON(this.style)}},{key:"bingLogo",get:function(){return(0,y.pC)(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}},{key:"load",value:function(e){var t=this;return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((function(){return t._getMetadata()}))):this.addResolvingPromise(Promise.reject(new c.Z("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}},{key:"getTileUrl",value:function(e,t,r){if(!this.loaded||(0,y.Wi)(this.bingMetadata))return null;var a=this.bingMetadata.resourceSets[0].resources[0],n=a.imageUrlSubdomains[t%a.imageUrlSubdomains.length],i=this._getQuadKey(e,t,r);return a.imageUrl.replace("{subdomain}",n).replace("{quadkey}",i)}},{key:"fetchAttributionData",value:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){var t=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.load().then((function(){return(0,y.Wi)(t.bingMetadata)?null:{contributors:t.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((function(e){return{attribution:e.attribution,coverageAreas:e.coverageAreas.map((function(e){return{zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]}}))}}))}})));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_getMetadata",value:function(){var e=this,t={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return(0,p.default)("".concat("https://dev.virtualearth.net","/REST/v1/Imagery/Metadata/").concat(t),{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((function(t){var r=t.data;if(200!==r.statusCode)throw new c.Z("bingmapslayer:getmetadata",r.statusDescription);if(e.bingMetadata=r,0===e.bingMetadata.resourceSets.length)throw new c.Z("bingmapslayer:getmetadata","no bing resourcesets");if(0===e.bingMetadata.resourceSets[0].resources.length)throw new c.Z("bingmapslayer:getmetadata","no bing resources")})).catch((function(e){throw new c.Z("bingmapslayer:getmetadata",e.message)}))}},{key:"_getPortalBingKey",value:function(){var e=this;return(0,p.default)(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((function(t){if(!t.data.bingKey)throw new c.Z("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");e.key=t.data.bingKey})).catch((function(e){throw new c.Z("bingmapslayer:getportalbingkey",e.message)}))}},{key:"_getQuadKey",value:function(e,t,r){for(var a="",n=e;n>0;n--){var i=0,o=1<<n-1;0!=(r&o)&&(i+=1),0!=(t&o)&&(i+=2),a+=i.toString()}return a}}]),r}((0,Z.h)((0,x.q)((0,g.R)(T))));(0,u._)([(0,b.Cb)({json:{read:!1,write:!1},value:null})],B.prototype,"bingMetadata",null),(0,u._)([(0,b.Cb)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],B.prototype,"type",void 0),(0,u._)([(0,b.Cb)({type:C.Z})],B.prototype,"tileInfo",void 0),(0,u._)([(0,b.Cb)({type:String,readOnly:!0,json:{read:!1,write:!1}})],B.prototype,"copyright",null),(0,u._)([(0,b.Cb)({type:String,json:{write:!1,read:!1}})],B.prototype,"key",void 0),(0,u._)([(0,b.Cb)({type:U.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:U.read}}})],B.prototype,"style",void 0),(0,u._)([(0,b.Cb)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],B.prototype,"operationalLayerType",null),(0,u._)([(0,b.Cb)({type:String,json:{write:!1,read:!1}})],B.prototype,"culture",void 0),(0,u._)([(0,b.Cb)({type:String,json:{write:!1,read:!1}})],B.prototype,"region",void 0),(0,u._)([(0,b.Cb)({type:String,json:{write:!0,read:!0}})],B.prototype,"portalUrl",void 0),(0,u._)([(0,b.Cb)({type:Boolean,json:{write:!1,read:!1}})],B.prototype,"hasAttributionData",void 0),(0,u._)([(0,b.Cb)({type:String,readOnly:!0})],B.prototype,"bingLogo",null);var R=B=(0,u._)([(0,h.j)("esri.layers.BingMapsLayer")],B)}}]);
//# sourceMappingURL=165.e4de19a8.chunk.js.map