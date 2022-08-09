"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[172],{21134:function(e,o,t){t.d(o,{Z:function(){return j}});var r,i=t(1413),n=t(15671),l=t(43144),s=t(60136),p=t(29388),a=t(27366),u=t(84652),d=t(49861),c=t(25243),y=t(27135),f=t(69912),b=t(2632),v=t(87125),h=t(51995),Z=t(46784),m=r=function(e){(0,s.Z)(t,e);var o=(0,p.Z)(t);function t(){var e;return(0,n.Z)(this,t),(e=o.apply(this,arguments)).description=null,e.label=null,e.minValue=0,e.maxValue=0,e.color=null,e}return(0,l.Z)(t,[{key:"clone",value:function(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,u.d9)(this.color)})}}]),t}(Z.wq);(0,a._)([(0,d.Cb)({type:String,json:{write:!0}})],m.prototype,"description",void 0),(0,a._)([(0,d.Cb)({type:String,json:{write:!0}})],m.prototype,"label",void 0),(0,a._)([(0,d.Cb)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],m.prototype,"minValue",void 0),(0,a._)([(0,d.Cb)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],m.prototype,"maxValue",void 0),(0,a._)([(0,d.Cb)({type:h.Z,json:{type:[c.z8],write:!0}})],m.prototype,"color",void 0);var C,w=m=r=(0,a._)([(0,f.j)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],m),T=C=function(e){(0,s.Z)(t,e);var o=(0,p.Z)(t);function t(e){var r;return(0,n.Z)(this,t),(r=o.call(this,e)).type="point-cloud-class-breaks",r.field=null,r.legendOptions=null,r.fieldTransformType=null,r.colorClassBreakInfos=null,r}return(0,l.Z)(t,[{key:"clone",value:function(){return new C((0,i.Z)((0,i.Z)({},this.cloneProperties()),{},{field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,u.d9)(this.colorClassBreakInfos),legendOptions:(0,u.d9)(this.legendOptions)}))}}]),t}(b.Z);(0,a._)([(0,y.J)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],T.prototype,"type",void 0),(0,a._)([(0,d.Cb)({json:{write:!0},type:String})],T.prototype,"field",void 0),(0,a._)([(0,d.Cb)({type:v.I,json:{write:!0}})],T.prototype,"legendOptions",void 0),(0,a._)([(0,d.Cb)({type:b.Z.fieldTransformTypeKebabDict.apiValues,json:{type:b.Z.fieldTransformTypeKebabDict.jsonValues,read:b.Z.fieldTransformTypeKebabDict.read,write:b.Z.fieldTransformTypeKebabDict.write}})],T.prototype,"fieldTransformType",void 0),(0,a._)([(0,d.Cb)({type:[w],json:{write:!0}})],T.prototype,"colorClassBreakInfos",void 0);var j=T=C=(0,a._)([(0,f.j)("esri.renderers.PointCloudClassBreaksRenderer")],T)},2632:function(e,o,t){t.d(o,{Z:function(){return k}});var r,i=t(15671),n=t(43144),l=t(60136),s=t(29388),p=t(27366),a=t(43404),u=t(46784),d=t(84652),c=t(49861),y=(t(25243),t(69912)),f=(t(63780),t(93169),r=function(e){(0,l.Z)(t,e);var o=(0,s.Z)(t);function t(){var e;return(0,i.Z)(this,t),(e=o.apply(this,arguments)).field=null,e.minValue=0,e.maxValue=255,e}return(0,n.Z)(t,[{key:"clone",value:function(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}}]),t}(u.wq));(0,p._)([(0,c.Cb)({type:String,json:{write:!0}})],f.prototype,"field",void 0),(0,p._)([(0,c.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],f.prototype,"minValue",void 0),(0,p._)([(0,c.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],f.prototype,"maxValue",void 0);var b=f=r=(0,p._)([(0,y.j)("esri.renderers.support.pointCloud.ColorModulation")],f),v=new a.X({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"}),h=function(e){(0,l.Z)(t,e);var o=(0,s.Z)(t);function t(){return(0,i.Z)(this,t),o.apply(this,arguments)}return(0,n.Z)(t)}(u.wq);(0,p._)([(0,c.Cb)({type:v.apiValues,readOnly:!0,nonNullable:!0,json:{type:v.jsonValues,read:!1,write:v.write}})],h.prototype,"type",void 0);var Z,m=h=(0,p._)([(0,y.j)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],h),C=t(27135),w=Z=function(e){(0,l.Z)(t,e);var o=(0,s.Z)(t);function t(){var e;return(0,i.Z)(this,t),(e=o.apply(this,arguments)).type="fixed-size",e.size=0,e.useRealWorldSymbolSizes=null,e}return(0,n.Z)(t,[{key:"clone",value:function(){return new Z({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}}]),t}(m);(0,p._)([(0,C.J)({pointCloudFixedSizeAlgorithm:"fixed-size"})],w.prototype,"type",void 0),(0,p._)([(0,c.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],w.prototype,"size",void 0),(0,p._)([(0,c.Cb)({type:Boolean,json:{write:!0}})],w.prototype,"useRealWorldSymbolSizes",void 0);var T,j=w=Z=(0,p._)([(0,y.j)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],w),_=T=function(e){(0,l.Z)(t,e);var o=(0,s.Z)(t);function t(){var e;return(0,i.Z)(this,t),(e=o.apply(this,arguments)).type="splat",e.scaleFactor=1,e}return(0,n.Z)(t,[{key:"clone",value:function(){return new T({scaleFactor:this.scaleFactor})}}]),t}(m);(0,p._)([(0,C.J)({pointCloudSplatAlgorithm:"splat"})],_.prototype,"type",void 0),(0,p._)([(0,c.Cb)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],_.prototype,"scaleFactor",void 0);var V={key:"type",base:m,typeMap:{"fixed-size":j,splat:_=T=(0,p._)([(0,y.j)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],_)}},g=(0,a.w)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"}),S=function(e){(0,l.Z)(t,e);var o=(0,s.Z)(t);function t(e){var r;return(0,i.Z)(this,t),(r=o.call(this,e)).type=void 0,r.pointSizeAlgorithm=null,r.colorModulation=null,r.pointsPerInch=10,r}return(0,n.Z)(t,[{key:"clone",value:function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}},{key:"cloneProperties",value:function(){return{pointSizeAlgorithm:(0,d.d9)(this.pointSizeAlgorithm),colorModulation:(0,d.d9)(this.colorModulation),pointsPerInch:(0,d.d9)(this.pointsPerInch)}}}]),t}(u.wq);(0,p._)([(0,c.Cb)({type:g.apiValues,readOnly:!0,nonNullable:!0,json:{type:g.jsonValues,read:!1,write:g.write}})],S.prototype,"type",void 0),(0,p._)([(0,c.Cb)({types:V,json:{write:!0}})],S.prototype,"pointSizeAlgorithm",void 0),(0,p._)([(0,c.Cb)({type:b,json:{write:!0}})],S.prototype,"colorModulation",void 0),(0,p._)([(0,c.Cb)({json:{write:!0},nonNullable:!0,type:Number})],S.prototype,"pointsPerInch",void 0),S=(0,p._)([(0,y.j)("esri.renderers.PointCloudRenderer")],S),(S||(S={})).fieldTransformTypeKebabDict=new a.X({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});var k=S},89431:function(e,o,t){t.d(o,{Z:function(){return Z}});var r,i=t(1413),n=t(15671),l=t(43144),s=t(60136),p=t(29388),a=t(27366),u=t(84652),d=t(49861),c=(t(25243),t(27135)),y=t(69912),f=t(2632),b=t(87125),v=t(57203),h=r=function(e){(0,s.Z)(t,e);var o=(0,p.Z)(t);function t(e){var r;return(0,n.Z)(this,t),(r=o.call(this,e)).type="point-cloud-stretch",r.field=null,r.legendOptions=null,r.fieldTransformType=null,r.stops=null,r}return(0,l.Z)(t,[{key:"clone",value:function(){return new r((0,i.Z)((0,i.Z)({},this.cloneProperties()),{},{field:(0,u.d9)(this.field),fieldTransformType:(0,u.d9)(this.fieldTransformType),stops:(0,u.d9)(this.stops),legendOptions:(0,u.d9)(this.legendOptions)}))}}]),t}(f.Z);(0,a._)([(0,c.J)({pointCloudStretchRenderer:"point-cloud-stretch"})],h.prototype,"type",void 0),(0,a._)([(0,d.Cb)({json:{write:!0},type:String})],h.prototype,"field",void 0),(0,a._)([(0,d.Cb)({type:b.I,json:{write:!0}})],h.prototype,"legendOptions",void 0),(0,a._)([(0,d.Cb)({type:f.Z.fieldTransformTypeKebabDict.apiValues,json:{type:f.Z.fieldTransformTypeKebabDict.jsonValues,read:f.Z.fieldTransformTypeKebabDict.read,write:f.Z.fieldTransformTypeKebabDict.write}})],h.prototype,"fieldTransformType",void 0),(0,a._)([(0,d.Cb)({type:[v.Z],json:{write:!0}})],h.prototype,"stops",void 0);var Z=h=r=(0,a._)([(0,y.j)("esri.renderers.PointCloudStretchRenderer")],h)},87005:function(e,o,t){t.d(o,{Z:function(){return j}});var r,i=t(1413),n=t(15671),l=t(43144),s=t(60136),p=t(29388),a=t(27366),u=t(84652),d=t(49861),c=t(25243),y=t(27135),f=t(69912),b=t(2632),v=t(87125),h=t(51995),Z=t(46784),m=r=function(e){(0,s.Z)(t,e);var o=(0,p.Z)(t);function t(){var e;return(0,n.Z)(this,t),(e=o.apply(this,arguments)).description=null,e.label=null,e.values=null,e.color=null,e}return(0,l.Z)(t,[{key:"clone",value:function(){return new r({description:this.description,label:this.label,values:(0,u.d9)(this.values),color:(0,u.d9)(this.color)})}}]),t}(Z.wq);(0,a._)([(0,d.Cb)({type:String,json:{write:!0}})],m.prototype,"description",void 0),(0,a._)([(0,d.Cb)({type:String,json:{write:!0}})],m.prototype,"label",void 0),(0,a._)([(0,d.Cb)({type:[String],json:{write:!0}})],m.prototype,"values",void 0),(0,a._)([(0,d.Cb)({type:h.Z,json:{type:[c.z8],write:!0}})],m.prototype,"color",void 0);var C,w=m=r=(0,a._)([(0,f.j)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],m),T=C=function(e){(0,s.Z)(t,e);var o=(0,p.Z)(t);function t(e){var r;return(0,n.Z)(this,t),(r=o.call(this,e)).type="point-cloud-unique-value",r.field=null,r.fieldTransformType=null,r.colorUniqueValueInfos=null,r.legendOptions=null,r}return(0,l.Z)(t,[{key:"clone",value:function(){return new C((0,i.Z)((0,i.Z)({},this.cloneProperties()),{},{field:(0,u.d9)(this.field),fieldTransformType:(0,u.d9)(this.fieldTransformType),colorUniqueValueInfos:(0,u.d9)(this.colorUniqueValueInfos),legendOptions:(0,u.d9)(this.legendOptions)}))}}]),t}(b.Z);(0,a._)([(0,y.J)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],T.prototype,"type",void 0),(0,a._)([(0,d.Cb)({json:{write:!0},type:String})],T.prototype,"field",void 0),(0,a._)([(0,d.Cb)({type:b.Z.fieldTransformTypeKebabDict.apiValues,json:{type:b.Z.fieldTransformTypeKebabDict.jsonValues,read:b.Z.fieldTransformTypeKebabDict.read,write:b.Z.fieldTransformTypeKebabDict.write}})],T.prototype,"fieldTransformType",void 0),(0,a._)([(0,d.Cb)({type:[w],json:{write:!0}})],T.prototype,"colorUniqueValueInfos",void 0),(0,a._)([(0,d.Cb)({type:v.I,json:{write:!0}})],T.prototype,"legendOptions",void 0);var j=T=C=(0,a._)([(0,f.j)("esri.renderers.PointCloudUniqueValueRenderer")],T)}}]);
//# sourceMappingURL=172.1e96a705.chunk.js.map