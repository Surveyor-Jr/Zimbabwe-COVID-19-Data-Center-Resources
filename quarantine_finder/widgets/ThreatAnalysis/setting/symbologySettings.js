// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/ThreatAnalysis/setting/symbologySettings.html":'\x3cdiv\x3e\r\n  \x3cdiv\x3e\r\n    \x3cfieldset class\x3d"esriCTFieldSet"\x3e\r\n      \x3clegend class\x3d"esriCTFieldSetLegend"\x3e${nls.chemicalThreatLegendLabel}\x3c/legend\x3e\r\n      \x3c!-- Mandatory Evacuation Distance DropDown --\x3e\r\n      \x3cdiv class\x3d"SettingsRow"\x3e\r\n        \x3cdiv class\x3d"LabelSettingsRightButton SettingsButtonIcon Pointer" title\x3d"${nls.mandatoryButtonLabel}"\r\n          data-dojo-attach-point\x3d"mandatorySettingsButton"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"InputLabelSettings Ellipsis SubTitle" title\x3d"${nls.mandatoryLabel}"\x3e${nls.mandatoryLabel}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3c!-- Mandatory Evacuation Distance Color Pickers --\x3e\r\n      \x3cdiv class\x3d"container controlGroupHidden" data-dojo-attach-point\x3d"mandatoryContainer"\x3e\r\n        \x3cdiv class\x3d"Ellipsis" title\x3d"${nls.outline}"\x3e${nls.outline}\x3c/div\x3e\r\n        \x3cdiv class\x3d"colorPicker Line" id\x3d"mandatoryOutlineColor" data-dojo-attach-point\x3d"mandatoryOutlineColorPicker"\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"Ellipsis" title\x3d"${nls.fill}"\x3e${nls.fill}\x3c/div\x3e\r\n        \x3cdiv class\x3d"colorPicker Fill" id\x3d"mandatoryFillColor" data-dojo-attach-point\x3d"mandatoryFillColorPicker"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3c!-- Safe Evacuation Distance DropDown --\x3e\r\n      \x3cdiv class\x3d"SettingsRow"\x3e\r\n        \x3cdiv class\x3d"LabelSettingsRightButton SettingsButtonIcon Pointer" title\x3d"${nls.safeButtonLabel}"\r\n          data-dojo-attach-point\x3d"safeSettingsButton"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"InputLabelSettings Ellipsis SubTitle" title\x3d"${nls.safeLabel}"\x3e${nls.safeLabel}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3c!-- Safe Evacuation Distance --\x3e\r\n      \x3cdiv class\x3d"container controlGroupHidden" data-dojo-attach-point\x3d"safeContainer"\x3e\r\n        \x3cdiv class\x3d"Ellipsis" title\x3d"${nls.outline}"\x3e${nls.outline}\x3c/div\x3e\r\n        \x3cdiv class\x3d"colorPicker Line" id\x3d"safeOutlineColor" data-dojo-attach-point\x3d"safeOutlineColorPicker"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"Ellipsis" title\x3d"${nls.fill}"\x3e${nls.fill}\x3c/div\x3e\r\n        \x3cdiv class\x3d"colorPicker Fill" id\x3d"safeFillColor" data-dojo-attach-point\x3d"safeFillColorPicker"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/fieldset\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv\x3e\r\n    \x3cfieldset class\x3d"esriCTFieldSet"\x3e\r\n      \x3clegend class\x3d"esriCTFieldSetLegend"\x3e${nls.lpgThreatLegendLabel}\x3c/legend\x3e\r\n      \x3c!-- FireBall Diameter DropDown --\x3e\r\n      \x3cdiv class\x3d"SettingsRow"\x3e\r\n        \x3cdiv class\x3d"LabelSettingsRightButton SettingsButtonIcon Pointer" title\x3d"${nls.fireballButtonLabel}"\r\n          data-dojo-attach-point\x3d"fireballDiaSettingsButton"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"InputLabelSettings Ellipsis SubTitle" title\x3d"${nls.fireBallDiameterLable}"\x3e\r\n          ${nls.fireBallDiameterLable}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3c!-- FireBall Diameter Color Pickers --\x3e\r\n      \x3cdiv class\x3d"container controlGroupHidden" data-dojo-attach-point\x3d"fireBallContainer"\x3e\r\n        \x3cdiv class\x3d"Ellipsis" title\x3d"${nls.outline}"\x3e${nls.outline}\x3c/div\x3e\r\n        \x3cdiv class\x3d"colorPicker Line" id\x3d"fireballDiaOutlineColor"\r\n          data-dojo-attach-point\x3d"fireballDiaOutlineColorPicker"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"Ellipsis" title\x3d"${nls.fill}"\x3e${nls.fill}\x3c/div\x3e\r\n        \x3cdiv class\x3d"colorPicker Fill" id\x3d"fireballDiaFillColor" data-dojo-attach-point\x3d"fireballDiaFillColorPicker"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3c!-- Safe Distance DropDown --\x3e\r\n      \x3cdiv class\x3d"SettingsRow"\x3e\r\n        \x3cdiv class\x3d"LabelSettingsRightButton SettingsButtonIcon Pointer" title\x3d"${nls.safeDistanceButtonLabel}"\r\n          data-dojo-attach-point\x3d"safeDistanceSettingsButton"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"InputLabelSettings Ellipsis SubTitle" title\x3d"${nls.lpgSafeDistanceLable}"\x3e\r\n          ${nls.lpgSafeDistanceLable}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3c!-- Safe Distance Color Pickers--\x3e\r\n      \x3cdiv class\x3d"container controlGroupHidden" data-dojo-attach-point\x3d"safeDistanceContainer"\x3e\r\n        \x3cdiv class\x3d"Ellipsis" title\x3d"${nls.outline}"\x3e${nls.outline}\x3c/div\x3e\r\n        \x3cdiv class\x3d"colorPicker Line" id\x3d"safeDistanceOutlineColor"\r\n          data-dojo-attach-point\x3d"safeDistanceOutlineColorPicker"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"Ellipsis" title\x3d"${nls.fill}"\x3e${nls.fill}\x3c/div\x3e\r\n        \x3cdiv class\x3d"colorPicker Fill" id\x3d"safeDistanceFillColor" data-dojo-attach-point\x3d"safeDistanceFillColorPicker"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/fieldset\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/array dojo/_base/html dojo/on ./ColorPickerEditor jimu/BaseWidget dijit/_WidgetsInTemplateMixin dojo/text!./symbologySettings.html dojo/_base/lang dojo/Evented dojo/dom-class dojo/query dijit/registry dijit/form/Select jimu/dijit/SymbolChooser".split(" "),function(n,e,d,f,p,q,r,t,c,u,l,g,h){return n([q,r,u],{baseClass:"jimu-widget-threatAnalysis-Setting",templateString:t,selectedSettings:{},colorPickerNodes:[],dropdownNodes:[],constructor:function(b){c.mixin(this,
b)},startup:function(){var b={fireballDiaOutlineColor:{color:"#d10e40",transparency:0,type:"esriSLSSolid"},fireballDiaFillColor:{color:"#d10e40",transparency:.88,type:"esriSFSSolid"},safeDistanceOutlineColor:{color:"#ffffff",transparency:0,type:"esriSLSNull"},safeDistanceFillColor:{color:"#ffd700",transparency:.78,type:"esriSFSSolid"}};this.colorPickerNodes=g(".colorPicker",this.domNode);this.dropdownNodes=g(".dropdown",this.domNode);e.forEach(this.colorPickerNodes,c.hitch(this,function(a){a=new p({nls:this.nls,
type:l.contains(a,"Line")?"line":"fill"},a);a.setValues({color:this.config.threatAnalysis.symbology[a.id]?this.config.threatAnalysis.symbology[a.id].color:b[a.id].color,transparency:this.config.threatAnalysis.symbology[a.id]?this.config.threatAnalysis.symbology[a.id].transparency:b[a.id].transparency});a.startup();a.dropdown.set("value",this.config.threatAnalysis.symbology[a.id]?this.config.threatAnalysis.symbology[a.id].type:b[a.id].type)}));this.onSettingsChanged();this._openCloseNodes(this.mandatorySettingsButton,
this.mandatoryContainer)},postCreate:function(){this.inherited(arguments);l.add(this.domNode,"SettingsContainer FullWidth");this._handleClickEvents()},_handleClickEvents:function(){this.own(f(this.mandatorySettingsButton,"click",c.hitch(this,function(){this._openCloseNodes(this.mandatorySettingsButton,this.mandatoryContainer)})));this.own(f(this.safeSettingsButton,"click",c.hitch(this,function(){this._openCloseNodes(this.safeSettingsButton,this.safeContainer)})));this.own(f(this.fireballDiaSettingsButton,
"click",c.hitch(this,function(){this._openCloseNodes(this.fireballDiaSettingsButton,this.fireBallContainer)})));this.own(f(this.safeDistanceSettingsButton,"click",c.hitch(this,function(){this._openCloseNodes(this.safeDistanceSettingsButton,this.safeDistanceContainer)})))},validInputs:function(){var b=!0;e.some(this.colorPickerNodes,function(a){if(!h.byId(a.id).validateSpinner())return b=!1,!0},this);return b},_openCloseNodes:function(b,a){var v=g(".container",this.domNode),w=g(".SettingsButtonIcon",
this.domNode),m=!1;this.validInputs()&&(b&&l.contains(b,"LabelSettingsRightButton")&&(m=!0),e.forEach(v,c.hitch(this,function(k){d.addClass(k,"controlGroupHidden")})),e.forEach(w,c.hitch(this,function(k){d.removeClass(k,"LabelSettingsDownButton");d.addClass(k,"LabelSettingsRightButton")})),m&&(d.removeClass(a,"controlGroupHidden"),d.removeClass(b,"LabelSettingsRightButton"),d.addClass(b,"LabelSettingsDownButton")))},onClose:function(){this.onSettingsChanged();this._openCloseNodes()},onSettingsChanged:function(){e.forEach(this.colorPickerNodes,
c.hitch(this,function(b){var a={color:h.byId(b.id).getValues().color,transparency:h.byId(b.id).getValues().transparency,type:h.byId(b.id).dropdown.getValue()};this.selectedSettings[b.id]=a}));this.emit("settingsChanged",this.selectedSettings)}})});