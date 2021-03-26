// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"widgets/AttributeTable/utils":function(){define("dojo/_base/lang dojo/_base/array jimu/LayerInfos/LayerInfos dojo/Deferred dojo/promise/all exports dojo/store/Observable dojo/store/Cache dojo/store/Memory esri/lang ./table/FeatureLayerQueryStore jimu/ArcadeUtils jimu/utils esri/graphic dojo/i18n!./nls/strings".split(" "),function(q,u,C,y,k,g,h,t,p,w,K,z,F,v,x){function L(d,a){if(!d||!d.length)return a||[];if(!a||!a.length)return d;for(var c=[],e=0,b=d.length;e<b;e++)for(var f=d[e],
l=0,m=a.length;l<m;l++){var n=a[l];if(n.name===f.name){n.alias!==f.alias&&(f.alias=n.alias);c.push(f);break}}return c}g.readLayerInfosObj=function(d){return C.getInstance(d,d.itemInfo)};g.readLayerInfosFromMap=function(d,a,c){var e=new y;C.getInstance(d,d.itemInfo).then(q.hitch(this,function(b){var f=[];a?b.traversalLayerInfosOfWebmap(function(n){f.push(n)}):b.traversal(function(n){f.push(n)});if(c){var l=[],m=b.getMapNotesLayerInfoArray();u.forEach(m,function(n){l.push(n.id);n.traversal(function(B){l.push(B.id)})});
f=u.filter(f,function(n){return-1===l.indexOf(n.id)})}b=b.getTableInfoArray();f=f.concat(b);e.resolve(f)}),q.hitch(this,function(b){console.error(b);e.reject(b)}));return e.promise};g.generateColumnsFromFields=function(d,a,c,e,b,f,l,m){function n(r){var A=r.name;if(B&&w.isDefined(B.fieldInfos))for(var G=0,M=B.fieldInfos.length;G<M;G++){var N=B.fieldInfos[G];if(N.fieldName===A&&N.format)return N.format}return(r=F.getDefaultPortalFieldInfo(r))&&r.format?r.format:null}var B=a.getPopupInfo()||a.getPopupInfoFromLayerObject&&
a.getPopupInfoFromLayerObject(),D={selectionHandle:{label:"",className:"selection-handle-column",hidden:!1,unhidable:!0,field:null,sortable:!1,_cache:{sortable:!1,statistics:!1},renderCell:function(r,A,G){G.setAttribute("role","button");G.setAttribute("title",x.selectionHandleLabel)}}};u.forEach(c,q.hitch(g,function(r,A,G){A="field"+A;var M=!!r.domain,N="esriFieldTypeDate"===r.type,Q=e&&r.name===e,R="esriFieldTypeDouble"===r.type||"esriFieldTypeSingle"===r.type||"esriFieldTypeInteger"===r.type||"esriFieldTypeSmallInteger"===
r.type,U="esriFieldTypeString"===r.type,S=0===r.name.indexOf("expression/"),V=r.alias||r.name;var T=1===G.length?!1:d&&d[A]?d[A].hidden:r?!r.show&&w.isDefined(r.show):!1;D[A]={label:V,className:A,hidden:T,unhidable:1===G.length?!1:!r.show&&w.isDefined(r.show)&&r._pk,field:r.name,sortable:!1,_cache:{sortable:!!f,statistics:l&&!M&&R}};U?D[A].formatter=q.hitch(g,g.urlFormatter):N?D[A].formatter=q.hitch(g,g.dateFormatter,n(r)):R&&(D[A].formatter=q.hitch(g,g.numberFormatter,n(r)));M?D[A].get="range"===
(r.domain&&r.domain.type)?q.hitch(g,function(H,E,J){return this.getRangeDomainValue(E.name,J)},m,r):q.hitch(g,function(H,E,J){return this.getCodeValue(H,E.name,J)},m,r):Q?D[A].get=q.hitch(g,function(H,E,J){return this.getTypeName(J[H.name],E)},r,b):S?(G=this.arcade.getExpressionInfosFromLayerInfo(a),M=F.getFeatureLayerDefinition(m),D[A]._cache.sortable=!1,D[A].get=q.hitch(g,function(H,E,J,I){return this.arcade.getAttributes(I,H,J)[E.name]||""},G,r,M)):M||N||Q||S||(D[A].get=q.hitch(g,function(H,E,
J,I,O){var P=null;J&&I&&0<I.length&&(I=(I=u.filter(I,q.hitch(g,function(W){return W.id===O[J]})))&&I[0]||null)&&I.domains&&I.domains[E.name]&&I.domains[E.name].codedValues&&(P=this.getCodeValue(H,E.name,O));return(H=null!==P?P:O[E.name])||isFinite(H)?H:""},m,r,e,b))}));return D};g.getTypeName=function(d,a){return F.fieldFormatter.getTypeName(d,a)};g.getCodeValue=function(d,a,c){return(d=F.getDisplayValueForCodedValueOrSubtype(d,a,c))&&d.isCodedValueOrSubtype?d.displayValue||"":""};g.getRangeDomainValue=
function(d,a){return(d=a[d])?d:""};g.urlFormatter=function(d){return F.fieldFormatter.getFormattedUrl(d)};g.dateFormatter=function(d,a){return F.fieldFormatter.getFormattedDate(a,d)};g.numberFormatter=function(d,a){return F.fieldFormatter.getFormattedNumber(a,d)};g.readLayerObjectsFromMap=function(d,a,c){var e=new y,b=[];this.readLayerInfosFromMap(d,a,c).then(q.hitch(this,function(f){u.forEach(f,q.hitch(this,function(l){b.push(l.getLayerObject())}));k(b).then(q.hitch(this,function(l){e.resolve(l)}),
q.hitch(this,function(l){e.reject(l);console.error(l)}))}),q.hitch(this,function(f){e.reject(f)}));return e.promise};g.readSupportTableInfoFromLayerInfos=function(d){var a=new y,c=[];u.forEach(d,q.hitch(this,function(e){c.push(e.getSupportTableInfo())}));k(c).then(q.hitch(this,function(e){e=q.clone(e);u.forEach(e,function(b,f){b.id=d[f].id});a.resolve(e)}),function(e){a.reject(e)});return a.promise};g.readConfigLayerInfosFromMap=function(d,a,c){var e=new y,b=[];this.readLayerInfosFromMap(d,a,c).then(q.hitch(this,
function(f){var l=[];u.forEach(f,function(m){b.push(m.getSupportTableInfo())});k(b).then(q.hitch(this,function(m){u.forEach(m,q.hitch(this,function(n,B){n.isSupportedLayer&&(f[B].name=f[B].title,l.push(f[B]))}));e.resolve(l)}),q.hitch(this,function(m){e.reject(m)}))}),q.hitch(this,function(f){e.reject(f)}));return e.promise};g.getConfigInfosFromLayerInfos=function(d){return u.map(d,function(a){return g.getConfigInfoFromLayerInfo(a)})};g.getConfigInfoFromLayerInfo=function(d){var a={};a.name=d.name||
d.title;a.id=d.id;a.show=d.isShowInMap();a.layer={url:d.getUrl()};var c=d.getPopupInfo();c&&!c.description&&(a.layer.fields=u.map(c.fieldInfos,function(e){return{name:e.fieldName,alias:e.label,show:e.visible,format:e.format}}),d=q.getObject("layerObject.fields",!1,d),a.layer.fields=L(a.layer.fields,d),u.some(a.layer.fields,function(e){return e.show})||(a.layer.fields&&0<a.layer.fields.length?a.layer.fields[0].show=!0:console.warn("We do not get fields info.")));return a};g.generateCacheStore=function(d,
a,c,e,b){d=new K({layer:d,objectIds:d._objectIds||null,totalCount:a,batchCount:c,where:e||"1\x3d1",spatialFilter:b});a=new p;return new t(d,a,{})};g.generateMemoryStore=function(d,a){return new h(new p({data:d||[],idProperty:a}))};g.merge=function(d,a,c,e){for(var b=u.map(a,function(n){return n[c]}),f=0,l=d.length;f<l;f++){var m=b.indexOf(d[f][c]);-1<m&&e(d[f],a[m])}};g.syncOrderWith=function(d,a,c){function e(B,D){return u.map(B,function(r){return r[D]})}if(!q.isArray(a)||!c)return d;for(var b=e(d,
c),f=[],l=0,m=a.length;l<m;l++){var n=b.indexOf(a[l][c]);-1<n&&(f=f.concat(d.splice(n,1)),b=e(d,c))}return f.concat(d)};g.arcade={};g.arcade.getExpressionInfosFromLayer=function(d,a){d=z.readExprInfo.getArcadeProfilesByType(d,a,"infoTemplate");return 0<d.length&&d[0].expressionInfos?d[0].expressionInfos:[]};g.arcade.getExpressionInfosFromLayerInfo=function(d){return(d=d&&d.getPopupInfo())&&d.expressionInfos||[]};g.arcade.getAttributes=function(d,a,c){var e=new v(d.geometry,null,d);return z.customExpr.getAttributesFromCustomArcadeExpr(a,
e,c)||d};g.arcade.appendArcadeExpressionsToFields=function(d,a){if(d){a=g.arcade.getExpressionInfosFromLayerInfo(a);if(0<a.length){var c=/^expression\//;u.forEach(a,function(e){u.some(d,function(b){if(c.test(b.name))return b=b.name.substr(11),e.name===b})||d.push({name:"expression/"+e.name,alias:e.title,show:!0})})}return d}};g.arcade.isArcadeExpressionField=function(d){return d&&"string"===typeof d.name&&0===d.name.indexOf("expression/")};g.arcade.parseArcadeExpressions=function(d){return z.InfoTemplate._parseArcadeExpressions(d)};
g.getSortbyFields=function(d,a){d=d&&d.get("sort")||[];a=a&&a.objectIdField;0<d.length?d=u.map(d,function(c){return c.attribute+" "+(c.descending?"DESC":"ASC")}):a&&d.push(a+" ASC");return d}})},"dojo/store/Cache":function(){define(["../_base/lang","../when"],function(q,u){var C=function(y,k,g){g=g||{};return q.delegate(y,{query:function(h,t){h=y.query(h,t);h.forEach(function(p){g.isLoaded&&!g.isLoaded(p)||k.put(p)});return h},queryEngine:y.queryEngine||k.queryEngine,get:function(h,t){return u(k.get(h),
function(p){return p||u(y.get(h,t),function(w){w&&k.put(w,{id:h});return w})})},add:function(h,t){return u(y.add(h,t),function(p){k.add(p&&"object"==typeof p?p:h,t);return p})},put:function(h,t){k.remove(t&&t.id||this.getIdentity(h));return u(y.put(h,t),function(p){k.put(p&&"object"==typeof p?p:h,t);return p})},remove:function(h,t){return u(y.remove(h,t),function(p){return k.remove(h,t)})},evict:function(h){return k.remove(h)}})};q.setObject("dojo.store.Cache",C);return C})},"widgets/AttributeTable/table/FeatureLayerQueryStore":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array esri/tasks/query esri/tasks/QueryTask ./FeatureLayerQueryResult".split(" "),
function(q,u,C,y,k,g){return q(null,{queryUrl:"",idProperty:"id",data:null,_entityData:null,constructor:function(h){q.safeMixin(this,h);this.data=[];this._entityData=[];this.layer=h.layer;this.objectIds=h.objectIds;this.where=h.where;this.orderByFields=h.orderByFields;this.totalCount=h.totalCount;this.batchCount=h.batchCount||25;this.idProperty=this.layer.objectIdField;this.spatialFilter=h.spatialFilter;this.layer&&this.layer.url&&(this.queryTask=new k(this.layer.url))},get:function(h){return this.data[h]},
getIdentity:function(h){return h[this.idProperty]},query:function(h,t){var p=new y,w=t&&t.start||0,K=t._export_count||this.batchCount,z=null;"function"===typeof h?z=h(this._entityData):"[object Array]"===Object.prototype.toString.call(h)&&(z=h);this.objectIds?(z=z?z:this.objectIds,p.objectIds=z.length>=w+this.batchCount?z.slice(w,w+K):z.slice(w)):(z&&0<z.length?p.objectIds=z.length>=w+this.batchCount?z.slice(w,w+K):z.slice(w):(p.start=w,p.num=K,p.where=this.where,p.geometry=this.spatialFilter,p.spatialRelationship=
y.SPATIAL_REL_INTERSECTS),(h=t.sort)&&0<h.length&&(h=C.map(h,function(v){return v.attribute+" "+(v.descending?"DESC":"ASC")}),p.orderByFields=h));p.returnGeometry="esriGeometryPoint"===this.layer.geometryType;p.outFields=["*"];var F=this.totalCount;h=null;h=!p.where;if(!(p.objectIds&&0<p.objectIds.length)&&h)return new g([]);h=this.queryTask?this.queryTask.execute(p):this.layer.queryFeatures(p);h.total=h.then(u.hitch(this,function(v){var x=0,L=this.layer.objectIdField;if(this.objectIds){if(!L)for(x=
0;x<v.fields.length;x++)if("esriFieldTypeOID"===v.fields[x].type){L=v.fields[x].name;break}var d={};for(x=0;x<v.features.length;x++)d[v.features[x].attributes[L]]=v.features[x];v.features=C.map(p.objectIds,function(c){return d[c]})}for(x=0;x<v.features.length;x++)if(v.features[x]){var a=v.features[x];v.features[x]=u.mixin(u.clone(a.attributes),{geometry:a.geometry});this.data[v.features[x][L]]=v.features[x];this._entityData.push(v.features[x])}v=v.features;return F}),function(){console.log("FeatureLayerQueryStore queryFeatures failed.");
return 0});return new g(h)}})})},"widgets/AttributeTable/table/FeatureLayerQueryResult":function(){define("esri/main dojo/_base/lang dojo/_base/kernel dojo/_base/Deferred dojo/DeferredList dojo/_base/array".split(" "),function(q,u,C,y){var k=function(g){function h(t){g[t]||(g[t]=function(){var p=arguments;return y.when(g,function(w){Array.prototype.unshift.call(p,w.features||w);return k(C[t].apply(C,p))})})}if(!g)return g;g.then&&(g=u.delegate(g));g.total||(g.total=y.when(g,function(t){return q._isDefined(t.total)?
t.total:t.length||0}));h("forEach");h("filter");h("map");h("some");h("every");return g};return k})},"widgets/AttributeTable/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/AttributeTable/setting/Setting.html":'\x3cdiv style\x3d"width:100%;"\x3e\r\n  \x3cdiv class\x3d"instruction"\x3e\r\n    \x3cp\x3e${nls.instruction}\x3c/p\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"check-syncwithlayers" data-dojo-attach-point\x3d"syncWithLayersCheck"\r\n    data-dojo-type\x3d"jimu/dijit/CheckBox" label\x3d"${nls.syncWithLayers}"\x3e\x3c/div\x3e\r\n\r\n  \x3cdiv data-dojo-attach-point\x3d"tableLayerInfos" class\x3d"table-layer-infos"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"table-options jimu-ellipsis"\x3e\r\n    \x3cul\x3e\r\n      \x3cli\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"exportcsv" checked\r\n        data-dojo-type\x3d"jimu/dijit/CheckBox" label\x3d"${nls.exportCSV}"\x3e\x3c/div\x3e\r\n      \x3c/li\x3e\r\n      \x3cli\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"expand" data-dojo-type\x3d"jimu/dijit/CheckBox" label\x3d"${nls.expand}"\x3e\x3c/div\x3e\r\n      \x3c/li\x3e\r\n      \x3cli\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"filterByMapExtent" data-dojo-type\x3d"jimu/dijit/CheckBox" label\x3d"${nls.filterByExtent}"\x3e\x3c/div\x3e\r\n      \x3c/li\x3e\r\n      \x3cli\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"textSelection" data-dojo-type\x3d"jimu/dijit/CheckBox" label\x3d"${nls.allowTextSelection}"\x3e\x3c/div\x3e\r\n      \x3c/li\x3e\r\n    \x3c/ul\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/AttributeTable/setting/css/style.css":".jimu-widget-attributetable-setting{margin:0; padding:0; font-size:14px; width: 100%; height: 100%; position: relative; color: #596679;}.jimu-widget-attributetable-setting .instruction{font-size: 12px; margin-bottom: 10px;}.jimu-widget-attributetable-setting .check-syncwithlayers {margin-bottom: 10px; padding-left: 8px; padding-right: 8px;}.jimu-widget-attributetable-setting .show{width: 120px;}.jimu-widget-attributetable-setting .symbol{width: 200px;}.jimu-widget-attributetable-setting .table-layer-infos{width: 100%; height: 240px;}.jimu-widget-attributetable-setting .table-options ul{list-style-type: none; padding: 0;}.jimu-widget-attributetable-setting .jimu-checkbox{margin-right: 20px;}.jimu-rtl .jimu-widget-attributetable-setting .jimu-checkbox{margin-left: 20px; margin-right: 0;}.jimu-widget-attributetable-setting .jimu-checkbox.jimu-state-disabled {color: #e5e5e5;}.jimu-widget-attributetable-setting .jimu-checkbox.jimu-state-disabled .checkbox{cursor: default;}.jimu-widget-attributetable-setting th.isDescending .jimu-checkbox {display: none;}.jimu-widget-attributetable-setting td.isDescending {text-align: center;}.jimu-widget-attributetable-setting td.isDescending .jimu-checkbox {top: 5px; margin: 0;}.jimu-widget-attributetable-setting td.isDescending .jimu-checkbox .checkbox {background: transparent; background-image: url('images/order_up.svg'); width: 16px; height: 16px; background-repeat: no-repeat; background-position-x: 0;}.jimu-widget-attributetable-setting td.isDescending .jimu-checkbox .checkbox.jimu-icon-checked {background-image: url('images/order_down.svg');}.jimu-rtl .jimu-widget-attributetable-setting td.isDescending .jimu-checkbox .checkbox {-webkit-transform: rotateY(180deg); transform: rotateY(180deg);}.jimu-widget-attributetable-setting .sortField .dijitSelect{height: 20px; background: #fff; margin: 5px 0;}.jimu-widget-attributetable-setting .sortField .dijitSelect .dijitButtonContents{border-right-width: 0;}.jimu-rtl .jimu-widget-attributetable-setting .sortField .dijitSelect .dijitButtonContents{border-left-width: 0;}.jimu-widget-attributetable-setting .sortField .dijitSelect .dijitButtonText{overflow: hidden; text-overflow: ellipsis; width: 90px;}.jimu-widget-attributetable-setting .sortField .dijitSelect .dijitInputField{padding-top: 0; padding-bottom: 0;}.jimu-widget-attributetable-setting .sortField .dijitSelect .dijitArrowButton{background: #fff;}.has-webkit .jimu-simple-table.vertical-scroll .head-section \x3e .table-div{padding-right: 6px;}.jimu-rtl.has-webkit .jimu-simple-table.vertical-scroll .head-section \x3e .table-div{padding-left: 6px;}",
"*now":function(q){q(['dojo/i18n!*preload*widgets/AttributeTable/setting/nls/Setting*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/Deferred dojo/promise/all dojo/query dijit/registry jimu/dijit/Popup jimu/dijit/Message jimu/dijit/CheckBox jimu/dijit/LoadingShelter ../utils".split(" "),function(q,u,C,y,k,g,h,t,p,w,K,z,F,v,x,L,d){return q([C,u],{baseClass:"jimu-widget-attributetable-setting",currentFieldTable:null,_allLayerFields:null,_layerInfos:null,_tableInfos:null,
_delayedLayerInfos:null,_delayedLayerInfosAfterInit:null,_unSpportQueryCampsite:null,startup:function(){this.inherited(arguments);this.config.layerInfos||(this.config.layerInfos=[]);this._allLayerFields=[];this._layerInfos=[];this._tableInfos=[];this._delayedLayerInfos=[];this._delayedLayerInfosAfterInit=[];this._unSpportQueryCampsite={};this.displayFieldsTable=new y({fields:[{name:"show",title:this.nls.show,width:"auto",type:"checkbox","class":"show"},{name:"label",title:this.nls.label,width:"60%",
type:"text"},{name:"url",title:this.nls.url,type:"text",hidden:!0},{name:"index",title:"index",type:"text",hidden:!0},{name:"sortField",title:this.nls.sortField,type:"dropdown",width:"130"},{name:"isDescending",title:"",width:"40",type:"checkbox","class":"sort-order"},{name:"actions",title:this.nls.actions,type:"actions",width:"20%",actions:["edit"],"class":"symbol"},{name:"showAttachments",title:"",type:"checkbox",hidden:!0}],selectable:!0,autoHeight:!1});this.displayFieldsTable.placeAt(this.tableLayerInfos);
g.setStyle(this.displayFieldsTable.domNode,{height:"100%"});this.shelter=new L({hidden:!0});this.shelter.placeAt(this.domNode.parentNode.parentNode||this.domNode);this.shelter.startup();this.shelter.show();d.readLayerInfosObj(this.map).then(k.hitch(this,function(a){this.own(a.on("layerInfosChanged",k.hitch(this,this.onLayerInfosChanged)));this.own(t(this.displayFieldsTable,"actions-edit",k.hitch(this,this.editFieldsClick)));this.own(t(this.displayFieldsTable,"row-click",k.hitch(this,this._verifiedOnShowClick)));
this.own(t(this.displayFieldsTable,"row-add",k.hitch(this,function(c){this._addTooltipToSortOrderNode(c)})));this.own(t(this.syncWithLayersCheck,"change",k.hitch(this,function(c){this._toggleTableShowOption(c)})));this.setConfig(this.config)}))},editFieldsClick:function(a){var c=K(".action-item-parent",a);if(c&&c.length)if(c=this.displayFieldsTable.getRowData(a),c.show){var e=parseInt(c.index,10);this.shelter.show();this._getLayerFields(e).then(k.hitch(this,function(f){this.openFieldsDialog(a,f,e)}),
k.hitch(this,function(f){console.error(f)})).always(k.hitch(this,function(){this.shelter.hide()}))}else var b=new v({message:this.nls.warning,buttons:[{label:this.nls.ok,onClick:k.hitch(this,function(){b.close()})}]})},_verifiedOnShowClick:function(a){var c=this.displayFieldsTable.getRowData(a),e=parseInt(c.index,10),b=null;b=this.config&&this.config.layerInfos&&0<this.config.layerInfos.length?this.config.layerInfos[e]:this._layerInfos[e];e=-1<this._unSpportQueryCampsite.layerNames.indexOf(b.name||
b.title);c.show&&e&&(new v({message:this.nls.unsupportQueryWarning}),c.show=!1,this.displayFieldsTable.editRow(a,c))},_getLayerFields:function(a){return this._layerInfos[a].getLayerObject().then(k.hitch(this,function(c){var e=this._allLayerFields[a];c=h.map(c.fields,function(b){return{name:b.name,alias:b.alias,show:!0}});c=d.arcade.appendArcadeExpressionsToFields(c,this._layerInfos[a]);d.merge(c,e,"name",function(b,f){k.mixin(b,f)});return c=d.syncOrderWith(c,e,"name")}))},_addTooltipToSortOrderNode:function(a){var c=
K(".sort-order .jimu-checkbox",a)[0];a=z.byNode(c);var e=this.nls,b=function(f){c.title=f?e.sortOrderTooltips.toAscending:e.sortOrderTooltips.toDescending};a&&(this.own(t(a,"change",b)),b(a.checked))},openFieldsDialog:function(a,c,e){var b=!1,f=this._layerInfos[e];(f=f&&f.layerObject)&&(b=f.hasAttachments&&f.objectIdField);f=g.create("div");var l=this._createFieldsTable(c,e);g.place(l.domNode,f);var m=null;b&&(m=new x({label:this.nls.showAttachments,style:"margin-top:10px;"}),c=this.displayFieldsTable.getRowData(a),
m.setValue(c.showAttachments),m.placeAt(f));this.currentFieldTable=l;c=600;m&&(c=640);var n=new F({titleLabel:this.nls.configureLayerFields,width:640,maxHeight:c,autoHeight:!0,content:f,buttons:[{label:this.nls.ok,onClick:k.hitch(this,function(){this._allLayerFields[e]=l.getData();var B=m?m.getValue():!1;this.displayFieldsTable.editRow(a,{showAttachments:B});n.close();n=null})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:k.hitch(this,function(){n.close();n=null})}],onClose:function(){n=
null}});l.startup()},_createFieldsTable:function(a){var c=null,e={fields:[{name:"show",title:this.nls.fieldVisibility,type:"checkbox","class":"show",onChange:k.hitch(this,function(b){var f=c.getData();!h.some(f,k.hitch(this,function(l){return l.show}))&&(new v({message:this.nls.fieldCheckWarning}),f=c.getRowData(b))&&(f.show=!0,c.editRow(b,f))})},{name:"name",title:this.nls.fieldName,type:"text"},{name:"alias",title:this.nls.fieldAlias,editable:!0,type:"text"},{name:"actions",title:this.nls.fieldActions,
type:"actions",actions:["up","down"],"class":"symbol"}],selectable:!0,autoHeight:!1,style:{height:"300px",maxHeight:"300px"}};c=new y(e);for(e=0;e<a.length;e++)a[e].show=void 0===a[e].show?!0:!!a[e].show,c.addRow(a[e]);return c},setConfig:function(a){this.config=a;this.displayFieldsTable.clear();this._allLayerFields=[];this._processTableData().then(k.hitch(this,function(c){this._init(c);this.shelter.hide()}),k.hitch(this,function(c){new v({message:c.message||c})}))},onLayerInfosChanged:function(a,
c,e){"added"===c&&e&&a&&e.getSupportTableInfo().then(k.hitch(this,function(b){b.isSupportedLayer&&(this._layerInfos&&0===this._layerInfos.length?this._delayedLayerInfos.push(e):this._layerInfos&&0<this._layerInfos.length&&!this._getLayerInfoById(e.id)&&(this._delayedLayerInfosAfterInit.push(e),this._processDelayedLayerInfosAfterInit(this._delayedLayerInfosAfterInit)))}))},_processDelayedLayerInfosAfterInit:function(a){for(var c=this._layerInfos.length,e=[],b=0;b<a.length;b++){var f=d.getConfigInfoFromLayerInfo(a[b]),
l={label:f.name||f.title,url:f.layer.url,index:""+(c+b),isDescending:!0,show:f.show};this._allLayerFields.push(f.layer.fields);this._layerInfos.push(a[b]);e.push(this._prepareSortField(l,b))}w(e).then(k.hitch(this,function(m){for(var n=0;n<m.length;n++)this._addRowToDisplayFieldsTable(m[n])}),k.hitch(this,function(m){console.error(m)}))},_processDelayedLayerInfos:function(){0<this._delayedLayerInfos.length&&(h.forEach(this._delayedLayerInfos,k.hitch(this,function(a){this._getLayerInfoById(a.id)||
this._layerInfos.push(a)})),this._delayedLayerInfos=[])},_processTableData:function(){var a=new p;d.readConfigLayerInfosFromMap(this.map,!0,!0).then(k.hitch(this,function(c){this._layerInfos=c;this._processDelayedLayerInfos();d.readSupportTableInfoFromLayerInfos(this._layerInfos).then(k.hitch(this,function(e){this._tableInfos=e;this.config&&this.config.layerInfos&&0<this.config.layerInfos.length?(e=d.getConfigInfosFromLayerInfos(this._layerInfos),d.merge(e,this.config.layerInfos,"id",k.hitch(this,
function(b,f){var l=this._getLayerInfoById(b.id);b.layer.fields=d.arcade.appendArcadeExpressionsToFields(b.layer.fields,l);b.show=f.show;b.showAttachments=f.showAttachments;b.sortField=f.sortField;b.isDescending=f.isDescending;b.layer.url=f.layer.url;k.getObject("layer.fields.length",!1,b)&&k.getObject("layer.fields.length",!1,f)?(d.merge(b.layer.fields,f.layer.fields,"name",function(m,n){k.mixin(m,n)}),b.layer.fields=d.syncOrderWith(b.layer.fields,f.layer.fields,"name")):b.layer.fields=f.layer.fields})),
this.config.layerInfos=e,this._unSpportQueryCampsite.fromConfig=!0,this._unSpportQueryCampsite.layerNames=this._getUnsupportQueryLayerNames(this.config.layerInfos),a.resolve(e)):(this._unSpportQueryCampsite.fromConfig=!1,this._unSpportQueryCampsite.layerNames=this._getUnsupportQueryLayerNames(this._layerInfos),e=d.getConfigInfosFromLayerInfos(c),e=h.map(e,k.hitch(this,function(b){var f=k.getObject("layer.fields",!1,b),l=this._getLayerInfoById(b.id);f&&(f=d.arcade.appendArcadeExpressionsToFields(b.layer.fields,
l),b.layer.fields=f);return b})),a.resolve(e))}),function(e){console.error(e);a.reject(e)})}),k.hitch(this,function(c){console.error(c);a.reject(c)}));return a},_getUnsupportQueryLayerNames:function(a){var c=[];h.forEach(a,k.hitch(this,function(e){var b=this._getSupportTableInfoById(e.id);b&&!b.isSupportQuery&&c.push(e.name||e.title)}));return c},_init:function(a){for(var c=[],e=[],b=0;b<a.length;b++){var f=a[b].show&&this._getSupportTableInfoById(a[b].id).isSupportQuery;f={label:a[b].name||a[b].title,
url:a[b].layer.url,index:""+b,show:f,sorting:{fields:a[b].layer.fields,selectedField:a[b].sortField},isDescending:a[b].isDescending,showAttachments:!!a[b].showAttachments};this._allLayerFields.push(a[b].layer.fields);e.push(this._prepareSortField(f,b));this._unSpportQueryCampsite.fromConfig&&(f=(f=this._unSpportQueryCampsite.layerNames)&&-1<f.indexOf(a[b].name||a[b].title),a[b].show&&f&&c.push(a[b].name||a[b].title))}w(e).then(k.hitch(this,function(l){for(var m=0;m<l.length;m++)this._addRowToDisplayFieldsTable(l[m])}),
k.hitch(this,function(l){console.error(l)}));this._unSpportQueryCampsite.fromConfig&&0<c.length&&new v({message:this.nls.unsupportQueryLayers+"\x3cbr\x3e\x3cbr\x3e"+c.toString()});this.config.hideExportButton?this.exportcsv.uncheck():this.exportcsv.check();this.config.initiallyExpand?this.expand.check():this.expand.uncheck();this._canUseOpenAtStart()&&(this.openAtStart?this.expand.check():this.expand.uncheck(),this.expand.status=!1,g.addClass(this.expand.domNode,"disable-checkbox"));this.config.filterByMapExtent?
this.filterByMapExtent.check():this.filterByMapExtent.uncheck();this.config.allowTextSelection?this.textSelection.check():this.textSelection.uncheck();this.config.syncWithLayers?this.syncWithLayersCheck.check():this.syncWithLayersCheck.uncheck()},_addRowToDisplayFieldsTable:function(a){this.displayFieldsTable.addRow(a)},_prepareSortField:function(a,c){var e=new p;a.sorting&&a.sorting.fields?(a.sortField=this._prepareSortFieldOptions(a.sorting),e.resolve(a)):this._getLayerFields(c).then(k.hitch(this,
function(b){a.sorting?a.sorting.fields=b:a.sorting={fields:b};a.sortField=this._prepareSortFieldOptions(a.sorting);e.resolve(a)}),k.hitch(this,function(b){console.error(b);e.reject(b)}));return e},_prepareSortFieldOptions:function(a){if(a&&a.fields&&Array.isArray(a.fields))return h.map(a.fields,function(c){var e={value:c.name,label:c.alias};a.selectedField===c.name&&(e.selected=!0);0===c.name.indexOf("expression/")&&(e.disabled=!0);return e})},_canUseOpenAtStart:function(){return this.closeable||
!this.isOnScreen},_getLayerInfoById:function(a){for(var c=0,e=this._layerInfos.length;c<e;c++)if(this._layerInfos[c].id===a)return this._layerInfos[c]},_getSupportTableInfoById:function(a){for(var c=0,e=this._tableInfos.length;c<e;c++)if(this._tableInfos[c].id===a)return this._tableInfos[c]},getConfig:function(){var a=this.displayFieldsTable.getData(),c=[],e=a.length;if(this.config&&this.config.layerInfos&&0<this.config.layerInfos.length)h.forEach(a,k.hitch(this,function(l,m){l=this.config.layerInfos[m];
var n={};n.name=l.name||l.title;n.id=l.id;n.layer={};n.layer.url=a[m].url;n.layer.fields=this._allLayerFields[m];n.show=a[m].show;n.showAttachments=a[m].showAttachments;n.sortField=a[m].sortField;n.isDescending=a[m].isDescending;c.push(n)}));else for(var b=0;b<e;b++){var f={};f.name=this._layerInfos[b].name||this._layerInfos[b].title;f.id=this._layerInfos[b].id;f.layer={};f.layer.url=a[b].url;f.layer.fields=this._allLayerFields[b];f.show=a[b].show;f.showAttachments=a[b].showAttachments;f.sortField=
a[b].sortField;f.isDescending=a[b].isDescending;c.push(f)}this.config.layerInfos=c;this.config.hideExportButton=!this.exportcsv.getValue();this.config.filterByMapExtent=this.filterByMapExtent.getValue();this.config.allowTextSelection=this.textSelection.getValue();this.config.syncWithLayers=this.syncWithLayersCheck.getValue();this._canUseOpenAtStart()||(this.config.initiallyExpand=this.expand.getValue());return this.config},_toggleTableShowOption:function(a){this.displayFieldsTable&&K(".show .jimu-checkbox").forEach(function(c){z.byNode(c).setStatus(!a)})}})});