"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[5069],{65069:function(i,e,t){t.r(e),t.d(e,{default:function(){return Z}});var n=t(15671),r=t(43144),s=t(97326),l=t(60136),o=t(29388),a=t(27366),u=t(77178),y=t(93002),v=t(92026),h=t(97642),c=t(94172),d=t(49861),b=(t(63780),t(93169),t(23879)),f=(t(25243),t(69912)),p=t(31201),_=t(30651),C=t(6693),k=t(6061),w=t(29598),g=t(56811),L=t(30219),m=t(84938),O=t(16791),M=t(41190),V=function(i){(0,l.Z)(t,i);var e=(0,o.Z)(t);function t(i){var r;return(0,n.Z)(this,t),(r=e.call(this,i))._visibilityHandles={},r.allLayers=new u.Z({getCollections:function(){return[r.layers]},getChildrenFunction:function(i){return"layers"in i?i.layers:null}}),r.allTables=(0,L.a)((0,s.Z)(r)),r.fullExtent=void 0,r.operationalLayerType="GroupLayer",r.spatialReference=void 0,r.type="group",r}return(0,r.Z)(t,[{key:"initialize",value:function(){var i=this;this._enforceVisibility(this.visibilityMode,this.visible),this.own((0,c.YP)((function(){return i.visible}),this._onVisibilityChange.bind(this),c.Z_))}},{key:"_writeLayers",value:function(i,e,t,n){var r=[];if(!i)return r;i.forEach((function(i){var e=(0,M.Nw)(i,n.webmap?n.webmap.getLayerJSONFromResourceInfo(i):null,n);(0,v.pC)(e)&&e.layerType&&r.push(e)})),e.layers=r}},{key:"portalItem",set:function(i){this._set("portalItem",i)}},{key:"visibilityMode",set:function(i){var e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}},{key:"load",value:function(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),Promise.resolve(this)}},{key:"loadAll",value:function(){var i=this;return(0,y.G)(this,(function(e){e(i.layers,i.tables)}))}},{key:"layerAdded",value:function(i){var e=this;i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=(0,c.YP)((function(){return i.visible}),(function(t){return e._onChildVisibilityChange(i,t)}),c.Z_)}},{key:"layerRemoved",value:function(i){var e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}},{key:"_turnOffOtherLayers",value:function(i){this.layers.forEach((function(e){e!==i&&(e.visible=!1)}))}},{key:"_enforceVisibility",value:function(i,e){if((0,b.vw)(this).initialized){var t=this.layers,n=t.find((function(i){return i.visible}));switch(i){case"exclusive":t.length&&!n&&((n=t.getItemAt(0)).visible=!0),this._turnOffOtherLayers(n);break;case"inherited":t.forEach((function(i){i.visible=e}))}}}},{key:"_onVisibilityChange",value:function(i){"inherited"===this.visibilityMode&&this.layers.forEach((function(e){e.visible=i}))}},{key:"_onChildVisibilityChange",value:function(i,e){switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(i):this._isAnyLayerVisible()||(i.visible=!0);break;case"inherited":i.visible=this.visible}}},{key:"_isAnyLayerVisible",value:function(){return this.layers.some((function(i){return i.visible}))}}]),t}((0,C.h)((0,g.M)((0,k.q)((0,w.I)((0,O.Q)((0,m.K)((0,h.R)(_.Z))))))));(0,a._)([(0,d.Cb)({readOnly:!0,dependsOn:[]})],V.prototype,"allLayers",void 0),(0,a._)([(0,d.Cb)({readOnly:!0})],V.prototype,"allTables",void 0),(0,a._)([(0,d.Cb)()],V.prototype,"fullExtent",void 0),(0,a._)([(0,d.Cb)({json:{read:!1,write:{ignoreOrigin:!0}}})],V.prototype,"layers",void 0),(0,a._)([(0,p.c)("layers")],V.prototype,"_writeLayers",null),(0,a._)([(0,d.Cb)({type:["GroupLayer"]})],V.prototype,"operationalLayerType",void 0),(0,a._)([(0,d.Cb)({json:{origins:{"web-document":{read:!1,write:!1}}}})],V.prototype,"portalItem",null),(0,a._)([(0,d.Cb)()],V.prototype,"spatialReference",void 0),(0,a._)([(0,d.Cb)({json:{read:!1},readOnly:!0,value:"group"})],V.prototype,"type",void 0),(0,a._)([(0,d.Cb)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],V.prototype,"visibilityMode",null);var Z=V=(0,a._)([(0,f.j)("esri.layers.GroupLayer")],V)}}]);
//# sourceMappingURL=5069.10005f1d.chunk.js.map